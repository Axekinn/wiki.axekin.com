/**
 * Script pour patcher automatiquement le fichier header.ejs du thème Reimu
 * Peut être exécuté de deux façons :
 * 1. Automatiquement par Hexo lors de l'initialisation
 * 2. Manuellement via : node scripts/patch-i18n.js
 */

const fs = require('fs');
const path = require('path');

function applyPatch() {
  // Déterminer le chemin du thème
  const themeDir = path.join(__dirname, '..', 'node_modules', 'hexo-theme-reimu');
  const headerPath = path.join(themeDir, 'layout', '_partial', 'header.ejs');
  
  if (!fs.existsSync(headerPath)) {
    console.warn('⚠️  Fichier header.ejs du thème Reimu introuvable à:', headerPath);
    return false;
  }

  let content = fs.readFileSync(headerPath, 'utf8');
  
  // Vérifier si le patch est déjà appliqué
  if (content.includes("'ar': 'العربية'")) {
    console.log('✅ Le patch i18n est déjà appliqué');
    return true;
  }

  // Remplacer la carte i18n limitée par la carte complète
  const oldMap = `let i18nMap = {
      'en': 'English',
      'zh-CN': '简体中文',
      'zh-TW': '正體中文',
      'ja': '日本語',
      'pt-BR': 'Português Brasileiro'
    }`;

  const newMap = `let i18nMap = {
      'en': 'English',
      'zh-CN': '简体中文',
      'ja': '日本語',
      'pt-BR': 'Português Brasileiro',
      'ar': 'العربية',
      'de': 'Deutsch',
      'es': 'Español',
      'fr': 'Français',
      'ko': '한국어',
      'ru': 'Русский'
    }`;

  if (content.includes(oldMap)) {
    content = content.replace(oldMap, newMap);
    fs.writeFileSync(headerPath, content, 'utf8');
    console.log('✅ Patch i18n appliqué avec succès au thème Reimu');
    console.log('📝 Langues ajoutées: ar, de, es, fr, ko, ru');
    return true;
  } else {
    console.warn('⚠️  La structure du fichier header.ejs a changé, le patch doit être mis à jour');
    console.log('📍 Emplacement du fichier:', headerPath);
    return false;
  }
}

// Si exécuté directement (pas via Hexo)
if (require.main === module) {
  console.log('🔧 Application du patch i18n...');
  applyPatch();
} else {
  // Si chargé comme module Hexo
  if (typeof hexo !== 'undefined') {
    hexo.extend.filter.register('after_init', function() {
      applyPatch();
    });
  }
}

module.exports = applyPatch;

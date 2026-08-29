/* @ds-bundle: {"format":4,"namespace":"MissingChildrenMinnesotaDesignSystem_18e091","components":[{"name":"AppMenu","sourcePath":"components/app/AppMenu.jsx"},{"name":"AppToolbar","sourcePath":"components/app/AppToolbar.jsx"},{"name":"ChildCard","sourcePath":"components/app/ChildCard.jsx"},{"name":"EditBool","sourcePath":"components/app/EditBool.jsx"},{"name":"EditText","sourcePath":"components/app/EditText.jsx"},{"name":"PinPad","sourcePath":"components/app/PinPad.jsx"},{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"BusyOverlay","sourcePath":"components/core/BusyOverlay.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ContentCard","sourcePath":"components/core/ContentCard.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"LinkList","sourcePath":"components/site/LinkList.jsx"},{"name":"PageBanner","sourcePath":"components/site/PageBanner.jsx"},{"name":"PageHeader","sourcePath":"components/site/PageHeader.jsx"},{"name":"PostListItem","sourcePath":"components/site/PostListItem.jsx"},{"name":"SiteFooter","sourcePath":"components/site/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/site/SiteHeader.jsx"}],"sourceHashes":{"components/app/AppMenu.jsx":"487757c31426","components/app/AppToolbar.jsx":"57cf1fecd985","components/app/ChildCard.jsx":"7f30b767b782","components/app/EditBool.jsx":"4dfc78cde704","components/app/EditText.jsx":"16c3ae5aaf33","components/app/PinPad.jsx":"0a75545cd245","components/core/Alert.jsx":"93866712e06a","components/core/BusyOverlay.jsx":"672c8313275e","components/core/Button.jsx":"eb68b5844521","components/core/ContentCard.jsx":"a684b15d05cd","components/core/Icon.jsx":"dade01816c4d","components/core/Logo.jsx":"b54047ba38af","components/site/LinkList.jsx":"977942e4e968","components/site/PageBanner.jsx":"4dba2a405e6f","components/site/PageHeader.jsx":"b445e431924f","components/site/PostListItem.jsx":"1052140c06de","components/site/SiteFooter.jsx":"55af3dece543","components/site/SiteHeader.jsx":"556bbbf2a77d","ui_kits/kidsidkit/AppShell.jsx":"f795b8d6d1d6","ui_kits/kidsidkit/Screens.jsx":"20fe71868fd9","ui_kits/website/AboutPage.jsx":"f01ff7b78fb0","ui_kits/website/HomePage.jsx":"5a931cf38d8b","ui_kits/website/MissingChildPage.jsx":"b8a2714335ff","ui_kits/website/ResourcesPage.jsx":"7728da6ba007","ui_kits/website/SiteShell.jsx":"b425b1fe46b9","ui_kits/website/SupportPage.jsx":"43f4eda45b03"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MissingChildrenMinnesotaDesignSystem_18e091 = window.MissingChildrenMinnesotaDesignSystem_18e091 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/app/EditBool.jsx
try { (() => {
/** EditBool — label + toggle, justified end, green (secondary) when on (EditBool.razor). */
function EditBool({
  label,
  checked = false,
  disabled = false,
  onChange,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      minHeight: 'var(--touch-min)',
      fontFamily: 'var(--font-ui)',
      color: 'var(--text-body)',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, React.createElement('span', {
    key: 'l'
  }, label), React.createElement('span', {
    key: 't',
    role: 'switch',
    'aria-checked': checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 51,
      height: 32,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand-support)' : 'var(--gray-400)',
      position: 'relative',
      flex: '0 0 auto',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--transition-fast) var(--easing)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 21 : 2,
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-panel)',
      transition: 'left var(--transition-fast) var(--easing)'
    }
  })));
}
Object.assign(__ds_scope, { EditBool });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/EditBool.jsx", error: String((e && e.message) || e) }); }

// components/app/EditText.jsx
try { (() => {
/**
 * EditText — labelled text field matching EditText.razor (ion-input,
 * fill="outline", mode="md"); supports multiline and password modes.
 */
function EditText({
  label,
  value = '',
  placeholder,
  multiline = false,
  rows = 3,
  type = 'text',
  onChange,
  style
}) {
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    font: 'inherit',
    fontSize: 'var(--text-base)',
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    border: 'var(--border-hairline) solid var(--gray-400)',
    borderRadius: 'var(--radius-sm)',
    padding: '.5rem .75rem',
    minHeight: '34px'
  };
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label ? React.createElement('span', {
    key: 'l',
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, label) : null, multiline ? React.createElement('textarea', {
    key: 'f',
    rows,
    value,
    placeholder,
    onChange,
    style: {
      ...field,
      minHeight: '3em',
      resize: 'vertical'
    }
  }) : React.createElement('input', {
    key: 'f',
    type,
    value,
    placeholder,
    onChange,
    style: field
  }));
}
Object.assign(__ds_scope, { EditText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/EditText.jsx", error: String((e && e.message) || e) }); }

// components/app/PinPad.jsx
try { (() => {
/**
 * PinPad — the KidsIdKit unlock card (PinEntry.razor.css): white 12px card,
 * per-digit boxes 50x60 with 2px borders, subtitle, hint, and an actions row.
 */
function PinPad({
  title = 'Enter your PIN',
  subtitle,
  digits = 4,
  filled = 0,
  hint,
  focusIndex = 0,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: '1rem 2rem 2rem',
      boxShadow: 'var(--shadow-panel)',
      textAlign: 'center',
      maxWidth: 400,
      width: '100%',
      boxSizing: 'border-box'
    }
  }, React.createElement('h2', {
    key: 't',
    style: {
      margin: '0 0 .5rem',
      color: '#333',
      fontSize: 'var(--text-h4)'
    }
  }, title), subtitle ? React.createElement('p', {
    key: 's',
    style: {
      color: '#666',
      marginBottom: '1.5rem'
    }
  }, subtitle) : null, React.createElement('div', {
    key: 'd',
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '.5rem',
      marginBottom: '1rem'
    }
  }, Array.from({
    length: digits
  }).map((_, i) => React.createElement('div', {
    key: i,
    style: {
      width: 50,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      color: 'var(--text-body)',
      border: 'var(--border-emphasis) solid ' + (i === focusIndex ? 'var(--state-focus-ring)' : 'var(--border-input)'),
      borderRadius: 'var(--radius-md)'
    }
  }, i < filled ? '•' : ''))), hint ? React.createElement('div', {
    key: 'h',
    style: {
      color: '#888',
      fontSize: 'var(--text-sm)',
      marginBottom: '1rem'
    }
  }, hint) : null, React.createElement('div', {
    key: 'a',
    style: {
      marginTop: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '.5rem'
    }
  }, children)));
}
Object.assign(__ds_scope, { PinPad });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/PinPad.jsx", error: String((e && e.message) || e) }); }

// components/core/BusyOverlay.jsx
try { (() => {
/** BusyOverlay — translucent scrim + spinner, matching BusyIndicator (ion-loading). */
function BusyOverlay({
  show = true,
  message = 'Working…'
}) {
  if (!show) return null;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.75rem',
      fontFamily: 'var(--font-ui)'
    }
  }, React.createElement('div', {
    key: 's',
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      border: '4px solid var(--white)',
      borderTopColor: 'transparent',
      animation: 'mcm-spin 900ms linear infinite'
    }
  }), React.createElement('style', {
    key: 'k'
  }, '@keyframes mcm-spin{to{transform:rotate(360deg)}}'), message ? React.createElement('div', {
    key: 'm',
    style: {
      background: 'var(--surface-card)',
      padding: '.4rem .75rem',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-body)',
      fontSize: 'var(--text-sm)'
    }
  }, message) : null);
}
Object.assign(__ds_scope, { BusyOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BusyOverlay.jsx", error: String((e && e.message) || e) }); }

// components/core/ContentCard.jsx
try { (() => {
/**
 * ContentCard — the signature MCM card: hairline black border, 10px radius,
 * and a hard 5px teal offset shadow (scss/custom.scss .content-card).
 */
function ContentCard({
  title,
  subtitle,
  actions,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-card-pad)',
      marginBottom: 'var(--space-card-gap)',
      fontFamily: 'var(--font-ui)',
      color: 'var(--text-body)',
      ...style
    }
  }, actions ? React.createElement('div', {
    key: 'a',
    style: {
      position: 'absolute',
      right: '5px',
      top: '5px',
      display: 'flex',
      gap: '.25rem'
    }
  }, actions) : null, title ? React.createElement('h3', {
    key: 't',
    style: {
      margin: 0,
      fontSize: 'var(--text-h5)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, title) : null, subtitle ? React.createElement('div', {
    key: 's',
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: '.15rem'
    }
  }, subtitle) : null, React.createElement('div', {
    key: 'c',
    style: {
      marginTop: title || subtitle ? '.5rem' : 0
    }
  }, children));
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const cache = {};

/**
 * Icon — Ionicons glyph, self-hosted from assets/icons/ionicons/. The SVG is
 * inlined and its #000 strokes/fills rewritten to currentColor, so a glyph
 * inherits the color of the button, menu row or link that contains it.
 */
function Icon({
  name,
  size = 24,
  base = '',
  style,
  ...rest
}) {
  const url = (base ? base.replace(/\/$/, '') + '/' : '') + 'assets/icons/ionicons/' + name + '.svg';
  const [svg, setSvg] = React.useState(cache[url] || null);
  React.useEffect(() => {
    if (cache[url]) {
      setSvg(cache[url]);
      return;
    }
    let live = true;
    fetch(url).then(r => r.text()).then(t => {
      const s = t.replace(/#000/g, 'currentColor').replace(/width="512"\s+height="512"/, 'width="100%" height="100%"');
      cache[url] = s;
      if (live) setSvg(s);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [url]);
  return React.createElement('span', {
    role: 'img',
    'aria-hidden': 'true',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      lineHeight: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg || ''
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/app/AppMenu.jsx
try { (() => {
/**
 * AppMenu — the KidsIdKit side menu (ion-menu): teal toolbar titled "Kids Id Kit",
 * ionicon + label rows, active row lifted with a translucent white wash,
 * groups separated by a hairline divider.
 */
function AppMenu({
  title = 'Kids Id Kit',
  groups = [],
  active,
  onSelect,
  iconBase = '',
  style
}) {
  return React.createElement('aside', {
    style: {
      width: 'var(--sidebar-width)',
      minWidth: 'var(--sidebar-width)',
      background: 'var(--surface-brand-deep)',
      color: 'var(--text-nav-inactive)',
      fontFamily: 'var(--font-ui)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, React.createElement('div', {
    key: 'h',
    style: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)',
      minHeight: '56px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--space-3)',
      fontSize: 'var(--text-brand)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title), React.createElement('div', {
    key: 'b',
    style: {
      padding: 'var(--space-3) .5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem'
    }
  }, groups.map((g, gi) => React.createElement(React.Fragment, {
    key: gi
  }, gi > 0 ? React.createElement('div', {
    style: {
      height: 2,
      minHeight: 2,
      background: 'var(--brand-support)',
      margin: '.5rem 0'
    }
  }) : null, g.map(item => React.createElement('a', {
    key: item.label,
    href: '#',
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(item);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.5rem',
      height: '3rem',
      padding: '0 .75rem',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-nav-item)',
      textDecoration: 'none',
      color: active === item.label ? 'var(--white)' : 'var(--text-nav-inactive)',
      background: active === item.label ? 'var(--overlay-nav-active)' : 'transparent'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 24,
    base: iconBase
  }), React.createElement('span', {
    style: {
      whiteSpace: 'nowrap'
    }
  }, item.label)))))));
}
Object.assign(__ds_scope, { AppMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/AppMenu.jsx", error: String((e && e.message) || e) }); }

// components/app/AppToolbar.jsx
try { (() => {
/**
 * AppToolbar — the KidsIdKit page header (ion-header + ion-toolbar color="primary"):
 * solid teal bar, optional menu button on the left, page title.
 */
function AppToolbar({
  title,
  onMenu,
  trailing,
  iconBase = '',
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)',
      minHeight: '56px',
      display: 'flex',
      alignItems: 'center',
      gap: '.25rem',
      padding: '0 .5rem',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, onMenu ? React.createElement('button', {
    key: 'm',
    onClick: onMenu,
    'aria-label': 'Menu',
    style: {
      background: 'transparent',
      border: 0,
      color: 'inherit',
      minWidth: 'var(--touch-min)',
      minHeight: 'var(--touch-min)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'menu',
    size: 24,
    base: iconBase
  })) : null, React.createElement('div', {
    key: 't',
    style: {
      fontSize: '1.0625rem',
      fontWeight: 'var(--weight-semibold)',
      flex: 1,
      padding: '0 .25rem'
    }
  }, title), trailing || null);
}
Object.assign(__ds_scope, { AppToolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/AppToolbar.jsx", error: String((e && e.message) || e) }); }

// components/app/ChildCard.jsx
try { (() => {
/**
 * ChildCard — a child entry on the Kids page (ion-card with header, subtitle,
 * optional alias line, optional photo, and a destructive trash action).
 */
function ChildCard({
  name,
  age,
  birthday,
  aliases,
  photo,
  onOpen,
  onRemove,
  iconBase = '',
  style
}) {
  return React.createElement('div', {
    onClick: onOpen,
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-hairline) solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-panel)',
      marginBottom: 'var(--space-3)',
      padding: 'var(--space-3)',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      color: 'var(--text-body)',
      ...style
    }
  }, React.createElement('div', {
    key: 'n',
    style: {
      fontSize: 'var(--text-h5)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, name), React.createElement('div', {
    key: 's',
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: '.15rem'
    }
  }, 'Age ' + age + (birthday ? ' (' + birthday + ')' : '')), aliases ? React.createElement('p', {
    key: 'a',
    style: {
      margin: '.5rem 0 0',
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, aliases) : null, photo ? React.createElement('div', {
    key: 'p',
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-3)'
    }
  }, React.createElement('img', {
    src: photo,
    alt: 'Photo of ' + name,
    style: {
      maxWidth: 200,
      height: 'auto',
      borderRadius: 'var(--radius-sm)'
    }
  })) : null, React.createElement('div', {
    key: 'x',
    style: {
      marginTop: 'var(--space-3)',
      textAlign: 'right'
    }
  }, React.createElement('button', {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    title: 'Remove ' + name,
    style: {
      background: 'transparent',
      border: 0,
      color: 'var(--state-danger)',
      minWidth: 'var(--touch-min)',
      minHeight: 'var(--touch-min)',
      cursor: 'pointer'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'trash',
    size: 22,
    base: iconBase
  }))));
}
Object.assign(__ds_scope, { ChildCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ChildCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-ui)',
  fontSize: 'var(--text-base)',
  lineHeight: 1.5,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.4rem',
  border: '1px solid var(--gray-100)',
  borderRadius: 'var(--radius-sm)',
  padding: '.375rem .75rem',
  minHeight: 'var(--touch-min)',
  minWidth: 'var(--touch-min)',
  textDecoration: 'none',
  cursor: 'pointer'
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--white)'
  },
  save: {
    background: 'var(--brand-primary)',
    color: 'var(--white)'
  },
  back: {
    background: 'var(--brand-support)',
    color: 'var(--white)'
  },
  secondary: {
    background: 'var(--brand-support)',
    color: 'var(--white)'
  },
  danger: {
    background: 'transparent',
    color: 'var(--state-danger)',
    border: '1px solid transparent'
  },
  clear: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid transparent'
  },
  icon: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '1px solid transparent',
    padding: '.25rem'
  }
};

/** Button — the app's .btn-primary / .btn-save / .btn-back / .btn-icon set. */
function Button({
  variant = 'primary',
  block = false,
  disabled = false,
  href,
  icon,
  iconBase = '',
  children,
  style,
  ...rest
}) {
  const s = {
    ...base,
    ...variants[variant],
    ...(block ? {
      display: 'flex',
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: .55,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  const inner = [icon ? React.createElement(__ds_scope.Icon, {
    key: 'i',
    name: icon,
    size: 20,
    base: iconBase
  }) : null, children];
  if (href) return React.createElement('a', {
    href,
    style: s,
    ...rest
  }, inner);
  return React.createElement('button', {
    type: 'button',
    disabled,
    style: s,
    ...rest
  }, inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Alert.jsx
try { (() => {
/**
 * Alert — modal confirm dialog matching McmAlert (ion-alert): header, message,
 * confirm + cancel prompts, non-dismissable backdrop.
 */
function Alert({
  header,
  message,
  confirmPrompt = 'OK',
  cancelPrompt,
  open = true,
  onConfirm,
  onCancel
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-3)',
      fontFamily: 'var(--font-ui)'
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-panel)',
      maxWidth: 320,
      width: '100%',
      padding: '1.25rem',
      textAlign: 'center'
    }
  }, header ? React.createElement('h2', {
    key: 'h',
    style: {
      margin: '0 0 .5rem',
      fontSize: 'var(--text-h5)',
      color: 'var(--text-heading)'
    }
  }, header) : null, React.createElement('p', {
    key: 'm',
    style: {
      margin: '0 0 1.25rem',
      color: 'var(--text-muted)'
    }
  }, message), React.createElement('div', {
    key: 'b',
    style: {
      display: 'flex',
      gap: '.5rem',
      justifyContent: 'center'
    }
  }, cancelPrompt ? React.createElement(__ds_scope.Button, {
    key: 'c',
    variant: 'clear',
    onClick: onCancel
  }, cancelPrompt) : null, React.createElement(__ds_scope.Button, {
    key: 'ok',
    variant: 'primary',
    onClick: onConfirm
  }, confirmPrompt))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const files = {
  teal: 'assets/logo/mcm-logo-teal.png',
  teal2x: 'assets/logo/mcm-logo-teal-2x.png',
  mono: 'assets/logo/mcm-logo-black.png',
  white: 'assets/logo/mcm-logo-white.png',
  app: 'assets/logo/kidsidkit-appicon.svg'
};

/**
 * Logo — the MCM wordmark + Minnesota/child mark. Always an image asset;
 * never redrawn. `base` prefixes the asset path for nested pages.
 */
function Logo({
  variant = 'teal',
  height = 48,
  base = '',
  alt = 'Missing Children Minnesota',
  style
}) {
  return React.createElement('img', {
    src: (base ? base.replace(/\/$/, '') + '/' : '') + files[variant],
    alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/site/LinkList.jsx
try { (() => {
/**
 * LinkList — resource list. `spacing="touch"` reproduces the app's
 * #vertically-spaced-links-in-a-list rule (18px, block, 16px gap, 8px radius);
 * `spacing="inline"` is the compact site list.
 */
function LinkList({
  items = [],
  spacing = 'touch',
  style
}) {
  const touch = spacing === 'touch';
  return React.createElement('ul', {
    style: {
      listStyle: touch ? 'none' : 'disc',
      margin: 0,
      padding: touch ? 0 : '0 0 0 1.25rem',
      fontFamily: touch ? 'var(--font-ui)' : 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: touch ? 'var(--space-list-gap)' : '.25rem',
      ...style
    }
  }, items.map(it => React.createElement('li', {
    key: it.label
  }, React.createElement('a', {
    href: it.href || '#',
    style: {
      display: touch ? 'block' : 'inline',
      fontSize: touch ? 'var(--text-touch-link)' : 'var(--text-base)',
      borderRadius: touch ? 'var(--radius-md)' : 0,
      padding: touch ? '.25rem .5rem' : 0,
      color: 'var(--color-link)',
      textDecoration: touch ? 'none' : 'underline'
    }
  }, it.label), it.note ? React.createElement('span', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      marginLeft: '.5rem'
    }
  }, it.note) : null)));
}
Object.assign(__ds_scope, { LinkList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/LinkList.jsx", error: String((e && e.message) || e) }); }

// components/site/PageBanner.jsx
try { (() => {
/**
 * PageBanner — the wide letterbox photograph that opens every site page
 * (assets/imagery/*-banner.*). Full container width, no crop overlay.
 */
function PageBanner({
  src,
  alt = '',
  height = 200,
  style
}) {
  return React.createElement('img', {
    src,
    alt,
    style: {
      display: 'block',
      width: '100%',
      height,
      objectFit: 'cover',
      ...style
    }
  });
}
Object.assign(__ds_scope, { PageBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/PageBanner.jsx", error: String((e && e.message) || e) }); }

// components/site/PageHeader.jsx
try { (() => {
/** PageHeader — the page title block (layout page.html: h1 with pt-4 pb-3). */
function PageHeader({
  title,
  children,
  style
}) {
  return React.createElement('header', {
    style: {
      padding: 'var(--space-4) 0 var(--space-3)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('h1', {
    key: 'h',
    style: {
      margin: 0,
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--leading-heading)',
      color: 'var(--text-heading)',
      fontWeight: 'var(--weight-medium)'
    }
  }, title), children ? React.createElement('div', {
    key: 'c',
    style: {
      marginTop: 'var(--space-2)',
      color: 'var(--text-muted)'
    }
  }, children) : null);
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/site/PostListItem.jsx
try { (() => {
/** PostListItem — one blog entry on the home/blog list: muted date, h3 link, excerpt. */
function PostListItem({
  date,
  title,
  href = '#',
  excerpt,
  style
}) {
  return React.createElement('li', {
    style: {
      padding: 'var(--space-2) 0',
      listStyle: 'none',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('span', {
    key: 'd',
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-base)'
    }
  }, date), React.createElement('h3', {
    key: 't',
    style: {
      margin: '.25rem 0 var(--space-3)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-medium)'
    }
  }, React.createElement('a', {
    href,
    style: {
      color: 'var(--color-link-site)',
      textDecoration: 'none'
    }
  }, title)), excerpt ? React.createElement('div', {
    key: 'e',
    style: {
      textAlign: 'justify',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, excerpt) : null);
}
Object.assign(__ds_scope, { PostListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/PostListItem.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteFooter.jsx
try { (() => {
/**
 * SiteFooter — three-column footer from minima-reboot: site title, contact
 * column, optional social column, mission statement in muted text.
 */
function SiteFooter({
  title = 'Missing Children Minnesota',
  email = 'general.info@missingchildrenmn.com',
  links = [],
  description = '',
  style
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: '.25rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };
  return React.createElement('footer', {
    style: {
      borderTop: 'var(--border-hairline) solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      background: 'var(--page-bg)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--container-pad) var(--space-5)'
    }
  }, React.createElement('div', {
    key: 't',
    style: {
      fontSize: 'var(--text-h5)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)',
      marginBottom: 'var(--space-3)'
    }
  }, title), React.createElement('div', {
    key: 'r',
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--space-4)'
    }
  }, React.createElement('ul', {
    key: 'c',
    style: col
  }, React.createElement('li', {
    key: 'n',
    style: {
      color: 'var(--text-muted)'
    }
  }, title), React.createElement('li', {
    key: 'e'
  }, React.createElement('a', {
    href: 'mailto:' + email,
    style: {
      color: 'var(--color-link-site)'
    }
  }, email))), links.length ? React.createElement('ul', {
    key: 'l',
    style: col
  }, links.map(l => React.createElement('li', {
    key: l.label
  }, React.createElement('a', {
    href: l.href || '#',
    style: {
      color: 'var(--color-link-site)'
    }
  }, l.label)))) : null, React.createElement('p', {
    key: 'd',
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      textAlign: 'justify',
      lineHeight: 'var(--leading-body)'
    }
  }, description))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteHeader.jsx
try { (() => {
/**
 * SiteHeader — the Jekyll site header (minima-reboot): 5px brand rule on top,
 * hairline bottom border, site title on the left, page links on the right.
 */
function SiteHeader({
  title = 'Missing Children Minnesota',
  links = [],
  current,
  style
}) {
  return React.createElement('header', {
    style: {
      borderTop: 'var(--border-header-top) solid var(--brand-primary)',
      borderBottom: 'var(--border-hairline) solid var(--border-subtle)',
      background: 'var(--page-bg)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, React.createElement('a', {
    key: 't',
    href: '#',
    style: {
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-heading)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, title), React.createElement('nav', {
    key: 'n',
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, links.map(l => React.createElement('a', {
    key: l.label,
    href: l.href || '#',
    onClick: l.onClick,
    style: {
      padding: '.5rem',
      color: current === l.label ? 'var(--brand-primary)' : 'var(--text-heading)',
      fontWeight: current === l.label ? 'var(--weight-semibold)' : 'var(--weight-regular)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l.label)))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kidsidkit/AppShell.jsx
try { (() => {
const NS = window.MissingChildrenMinnesotaDesignSystem_18e091;
const {
  AppToolbar,
  AppMenu,
  Button,
  PinPad
} = NS;
const MENU = [[{
  label: 'Kids',
  icon: 'people-outline'
}, {
  label: 'Information',
  icon: 'information-circle-outline'
}, {
  label: 'Export Data',
  icon: 'download-outline'
}, {
  label: 'About',
  icon: 'help-circle-outline'
}], [{
  label: 'Settings',
  icon: 'settings-outline'
}, {
  label: 'Sign out',
  icon: 'log-out-outline'
}]];

// Phone-sized viewport with the app's split-pane menu sliding over content.
function AppShell({
  route,
  setRoute,
  menuOpen,
  setMenuOpen,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 760,
      background: 'var(--white)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-panel)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-ui)'
    }
  }, children, menuOpen ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setMenuOpen(false),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)'
    }
  }) : null, /*#__PURE__*/React.createElement(AppMenu, {
    active: route,
    groups: MENU,
    iconBase: "../..",
    onSelect: i => {
      setRoute(i.label);
      setMenuOpen(false);
    },
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform .25s var(--easing)'
    }
  }));
}
function SignInScreen({
  onUnlock,
  onInfo
}) {
  const [filled, setFilled] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(AppToolbar, {
    title: "Kids Id Kit",
    iconBase: "../.."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mcm-logo-teal.png",
    alt: "Missing Children Minnesota",
    style: {
      height: 56,
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement(PinPad, {
    title: "Enter your PIN",
    subtitle: "Your family's information stays on this device.",
    filled: filled,
    focusIndex: filled,
    hint: "4 to 8 digits"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,56px)',
      gap: 8,
      marginBottom: '.75rem'
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setFilled(f => Math.min(4, f + 1)),
    style: {
      minHeight: 48,
      border: '1px solid var(--gray-300)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--white)',
      font: 'inherit',
      fontSize: 18,
      cursor: 'pointer'
    }
  }, n))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: onUnlock,
    disabled: filled < 4
  }, "Unlock"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#999',
      fontSize: '.875rem',
      marginTop: '.25rem'
    }
  }, "or"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onInfo();
    },
    style: {
      color: 'var(--gray-600)',
      fontSize: '.9rem',
      textDecoration: 'underline'
    }
  }, "Safety information"))));
}
Object.assign(window, {
  AppShell,
  SignInScreen,
  MENU
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kidsidkit/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kidsidkit/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NS = window.MissingChildrenMinnesotaDesignSystem_18e091;
const {
  AppToolbar,
  ChildCard,
  Button,
  Alert,
  ContentCard,
  EditText,
  EditBool,
  LinkList,
  BusyOverlay
} = NS;
function Screen({
  title,
  onMenu,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(AppToolbar, {
    title: title,
    onMenu: onMenu,
    iconBase: "../.."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-3)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-2) var(--space-2) var(--space-3)'
    }
  }, footer) : null);
}
function KidsScreen({
  onMenu,
  kids,
  openChild,
  removeKid
}) {
  const [pending, setPending] = React.useState(null);
  return /*#__PURE__*/React.createElement(Screen, {
    title: "Kids",
    onMenu: onMenu,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "add-circle",
      iconBase: "../..",
      block: true
    }, "Add a new child")
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 0
    }
  }, "On this page, you can view/edit existing kids as well as add new kids."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h5)',
      margin: 'var(--space-3) 0 var(--space-2)'
    }
  }, "Edit an existing child"), kids.map(k => /*#__PURE__*/React.createElement(ChildCard, _extends({
    key: k.name
  }, k, {
    iconBase: "../..",
    onOpen: () => openChild(k),
    onRemove: () => setPending(k)
  }))), /*#__PURE__*/React.createElement(ContentCard, {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Last edit of any child:"), " 8/12/2026 6:40 PM")), /*#__PURE__*/React.createElement(Alert, {
    open: !!pending,
    header: 'Remove ' + (pending ? pending.name : '') + '?',
    message: "This removes the record from this device. It cannot be undone.",
    confirmPrompt: "Yes",
    cancelPrompt: "No",
    onConfirm: () => {
      removeKid(pending);
      setPending(null);
    },
    onCancel: () => setPending(null)
  }));
}
function ChildScreen({
  onMenu,
  child,
  onBack
}) {
  const [notes, setNotes] = React.useState('Allergic to penicillin.');
  const [alerts, setAlerts] = React.useState(true);
  return /*#__PURE__*/React.createElement(Screen, {
    title: child.name,
    onMenu: onMenu,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "back",
      onClick: onBack,
      style: {
        flex: 1
      }
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "save",
      style: {
        flex: 1
      }
    }, "Save"))
  }, /*#__PURE__*/React.createElement(ContentCard, {
    title: "Child",
    subtitle: 'Age ' + child.age + ' · ' + child.birthday,
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "icon",
      icon: "camera-outline",
      iconBase: "../..",
      "aria-label": "Add photo"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(EditText, {
    label: "Given name",
    value: child.name.split(' ')[0]
  }), /*#__PURE__*/React.createElement(EditText, {
    label: "Family name",
    value: child.name.split(' ')[1] || ''
  }), /*#__PURE__*/React.createElement(EditText, {
    label: "Other names / nicknames",
    value: child.aliases || ''
  }))), /*#__PURE__*/React.createElement(ContentCard, {
    title: "Physical details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(EditText, {
    label: "Height",
    value: "4' 2\""
  }), /*#__PURE__*/React.createElement(EditText, {
    label: "Eye color",
    value: "Brown"
  }))), /*#__PURE__*/React.createElement(ContentCard, {
    title: "Medical notes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(EditText, {
    label: "Notes",
    multiline: true,
    rows: 3,
    value: notes,
    onChange: e => setNotes(e.target.value)
  }), /*#__PURE__*/React.createElement(EditBool, {
    label: "Include in exported PDF",
    checked: alerts,
    onChange: setAlerts
  }))));
}
function InfoScreen({
  onMenu
}) {
  return /*#__PURE__*/React.createElement(Screen, {
    title: "Information",
    onMenu: onMenu
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0,
      color: 'var(--text-muted)'
    }
  }, "Safety information you can read at any time \u2014 no PIN required."), /*#__PURE__*/React.createElement(LinkList, {
    spacing: "touch",
    items: [{
      label: 'If your child is missing'
    }, {
      label: 'Abductions'
    }, {
      label: 'Runaways'
    }, {
      label: 'AMBER Alert'
    }, {
      label: 'International abduction'
    }, {
      label: 'DNA collection'
    }, {
      label: 'Disaster preparation'
    }, {
      label: 'About Missing Children Minnesota'
    }]
  }));
}
function ExportScreen({
  onMenu
}) {
  const [busy, setBusy] = React.useState(false);
  return /*#__PURE__*/React.createElement(Screen, {
    title: "Export Data",
    onMenu: onMenu,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "download-outline",
      iconBase: "../..",
      block: true,
      onClick: () => {
        setBusy(true);
        setTimeout(() => setBusy(false), 1400);
      }
    }, "Create PDF")
  }, /*#__PURE__*/React.createElement(ContentCard, {
    title: "Export a child ID sheet"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Creates a printable sheet with photos, physical details and contacts to hand to law enforcement."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/pdf.jpg",
    alt: "",
    style: {
      height: 64,
      marginTop: 10
    }
  })), /*#__PURE__*/React.createElement(BusyOverlay, {
    show: busy,
    message: "Building PDF\u2026"
  }));
}
function SettingsScreen({
  onMenu
}) {
  const [pin, setPin] = React.useState(true);
  const [bio, setBio] = React.useState(false);
  return /*#__PURE__*/React.createElement(Screen, {
    title: "Settings",
    onMenu: onMenu
  }, /*#__PURE__*/React.createElement(ContentCard, {
    title: "Security"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(EditBool, {
    label: "Require PIN on launch",
    checked: pin,
    onChange: setPin
  }), /*#__PURE__*/React.createElement(EditBool, {
    label: "Use biometric unlock",
    checked: bio,
    onChange: setBio
  }), /*#__PURE__*/React.createElement(EditBool, {
    label: "Cloud backup",
    checked: false,
    disabled: true
  }))), /*#__PURE__*/React.createElement(ContentCard, {
    title: "Change PIN"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Change PIN"))));
}
Object.assign(window, {
  Screen,
  KidsScreen,
  ChildScreen,
  InfoScreen,
  ExportScreen,
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kidsidkit/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
const {
  PostListItem
} = window.MissingChildrenMinnesotaDesignSystem_18e091;
function AboutPage() {
  const {
    H2,
    P
  } = window;
  const {
    LinkList
  } = window.MissingChildrenMinnesotaDesignSystem_18e091;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H2, null, "The History of MCM"), /*#__PURE__*/React.createElement(P, null, "In the summer of 1983, a group of parents of missing children met in Minneapolis to offer mutual support and comfort."), /*#__PURE__*/React.createElement(P, null, "In 1984 this group of parents incorporated as the Missing Kids Action Agency to be a local resource for parents and families dealing with the issue of a missing child. The name was changed to Missing Children Minnesota (MCM) in 1986."), /*#__PURE__*/React.createElement(P, null, "Some highlights of our history of leadership, service, and collaboration:"), /*#__PURE__*/React.createElement(LinkList, {
    spacing: "inline",
    items: [{
      label: 'MCM has helped thousands of families and children across Minnesota and the Midwest by providing 24 hour support and referral services.'
    }, {
      label: 'Our Executive Director is a Certified Victim Advocate and member of the National Organization for Victim Assistance (NOVA).'
    }, {
      label: 'MCM is a member of NCMEC’s Family Assistance Outreach Network (NCMEC:FAON).'
    }, {
      label: '1991 — the legislature passed the Missing Children’s Act, following the work of the Governor’s Task Force.'
    }, {
      label: '1983 — participated in the rewriting of Minnesota’s parental abduction statute, Minn. Stat. § 609.26.'
    }]
  }));
}
function BlogPage() {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, /*#__PURE__*/React.createElement(PostListItem, {
    date: "Jun 12, 2024",
    title: "Welcome to MCM!",
    excerpt: "Welcome to the new Missing Children Minnesota web site and blog!"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      color: 'var(--text-muted)'
    }
  }, "subscribe via RSS"));
}
function ChildSafetyPage() {
  const {
    P
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(P, {
    style: {
      color: 'var(--text-muted)',
      fontStyle: 'italic',
      textAlign: 'left'
    }
  }, "Recreation note: the Child Safety page content was not available in the source repository at the time this kit was built, so it is intentionally left blank rather than invented. Its furniture \u2014 title, banner, long-form headings \u2014 matches the other pages."));
}
Object.assign(window, {
  AboutPage,
  BlogPage,
  ChildSafetyPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const {
  PostListItem
} = window.MissingChildrenMinnesotaDesignSystem_18e091;
function HomePage({
  setPage
}) {
  const {
    P,
    A,
    MISSION
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: 'var(--space-4) 0 var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mcm-logo-teal.png",
    alt: "Missing Children Minnesota",
    style: {
      height: 120
    }
  })), /*#__PURE__*/React.createElement(P, null, MISSION), /*#__PURE__*/React.createElement(P, null, "Since 1983 Missing Children Minnesota has helped more than 3500 families and children throughout the Midwest by providing 24-hour advocacy and support services, as well as helping families at risk for abduction create individualized prevention plans."), /*#__PURE__*/React.createElement(P, null, "In addition to search assistance, we also provide four critically acclaimed educational programs to children and adults throughout Minnesota and all across the country. Every year, MCM presents abduction prevention and personal safety programs to schools, daycare centers, early childhood and family education groups, churches and children\u2019s vacation camps."), /*#__PURE__*/React.createElement(P, null, "We hope that by providing children with the information they need to be safer this year, we will have fewer missing children next year."), /*#__PURE__*/React.createElement(P, null, "Please browse through our site to learn more about personal safety for children and teens. We always love to speak with kids and parents, so ", /*#__PURE__*/React.createElement(A, {
    href: "#"
  }, "call or email us"), " with your comments and questions!"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, /*#__PURE__*/React.createElement(PostListItem, {
    date: "Jun 12, 2024",
    title: "Welcome to MCM!",
    excerpt: "Welcome to the new Missing Children Minnesota web site and blog!"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage('Blog');
    },
    style: {
      display: 'inline-block',
      marginTop: 'var(--space-2)',
      color: 'var(--color-link-site)'
    }
  }, "subscribe via RSS"));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MissingChildPage.jsx
try { (() => {
function MissingChildPage() {
  const {
    H2,
    H3,
    H4,
    P,
    A
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H2, null, "MISSING CHILD \u2013 WHAT TO DO NEXT?"), /*#__PURE__*/React.createElement(H3, null, "WHAT TO DO IMMEDIATELY"), /*#__PURE__*/React.createElement(P, null, "Searching for a missing child is terrifying. There\u2019s no way around that. At the same time, it is important to maintain your focus so that you can be effective. Reach for positive coping skills and supportive people in your life to assist you in maintaining your ability to conduct an effective search."), /*#__PURE__*/React.createElement(H4, null, "SEARCH THE IMMEDIATE AREA"), /*#__PURE__*/React.createElement(P, null, "If your child has disappeared from home, make a quick but thorough search of the immediate area, including favorite hiding spots. Check outdoors and with neighbors, as well as with your child\u2019s neighborhood friends."), /*#__PURE__*/React.createElement(P, null, "If your child has disappeared in a public place like a store or a mall, contact security and the store manager. Give them a physical description of your child including what s/he is wearing \u2013 ask them to begin a search."), /*#__PURE__*/React.createElement(H4, null, "CALL THE POLICE"), /*#__PURE__*/React.createElement(P, null, "When you are satisfied that your child is not in the immediate area, call the police and tell the dispatcher \u201CMy child is missing, I need to make a report.\u201D"), /*#__PURE__*/React.createElement(H4, null, "START A LOG BOOK"), /*#__PURE__*/React.createElement(P, null, "Find or obtain a spiral notebook, and begin to record all details as they happen. Write down notes on who you talked to, the date and time, and the general idea of what was said in the conversation."), /*#__PURE__*/React.createElement(H4, null, "CONTACT A MISSING CHILDREN\u2019S ORGANIZATION"), /*#__PURE__*/React.createElement(P, null, "Call Missing Children Minnesota or the missing children\u2019s organization nearest to you to register your missing child. It is also important to register your child with the National Center for Missing and Exploited Children (NCMEC) at 1-800-THE-LOST."), /*#__PURE__*/React.createElement(H3, null, "A NOTE ABOUT PARENTAL ABDUCTION"), /*#__PURE__*/React.createElement(P, null, "If an estranged/former spouse or a domestic partner abducts your children, CALL THE POLICE! Tell them that you believe they are in violation of ", /*#__PURE__*/React.createElement(A, null, "Minnesota state statute 609.26"), " (most states have a similar statute \u2014 parental kidnapping is a felony in all 50 states!)"));
}
window.MissingChildPage = MissingChildPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MissingChildPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResourcesPage.jsx
try { (() => {
const {
  LinkList
} = window.MissingChildrenMinnesotaDesignSystem_18e091;
function ResourcesPage() {
  const {
    H2,
    H3,
    P
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H2, null, "RESOURCES"), /*#__PURE__*/React.createElement(P, null, "Always start looking for a missing child by making a report to your local police department."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", null, "There is NO waiting period to make a report of a missing person - call immediately")), /*#__PURE__*/React.createElement(P, null, "Listed below are a number of additional resources that may be helpful to parents in a missing child or other crisis situation."), /*#__PURE__*/React.createElement(H3, null, "Minnesota"), /*#__PURE__*/React.createElement(LinkList, {
    spacing: "inline",
    items: [{
      label: 'Missing Children Minnesota',
      note: '(612) 334-9449 · Toll free 888-786-9355'
    }, {
      label: 'Minnesota BCA Missing and Unidentified Persons Clearinghouse'
    }, {
      label: 'Children’s Mental Health Crisis (COPE) Team numbers by County'
    }, {
      label: 'Text CRISIS (274747) from anywhere in Minnesota'
    }]
  }), /*#__PURE__*/React.createElement(H3, null, "National"), /*#__PURE__*/React.createElement(LinkList, {
    spacing: "inline",
    items: [{
      label: 'National Center for Missing and Exploited Children (NCMEC)',
      note: '1-800-THE-LOST · 1-800-843-5678'
    }, {
      label: 'Cyber Tip Report'
    }, {
      label: 'iStand Parent Network'
    }, {
      label: 'National Runaway Safeline',
      note: '1-800-RUNAWAY · 1-800-786-2929'
    }]
  }));
}
window.ResourcesPage = ResourcesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResourcesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteShell.jsx
try { (() => {
const NS = window.MissingChildrenMinnesotaDesignSystem_18e091;
const {
  SiteHeader,
  SiteFooter,
  PageBanner,
  PageHeader
} = NS;
const MISSION = "The mission of Missing Children Minnesota is to help in locating missing children; to provide advocacy and support services to families of missing children and to provide information and prevention education to the public regarding missing children and runaways.";
const NAV = ['About MCM', 'Blog', 'Child Safety', 'Contact', 'Missing Child', 'Resources', 'Support'];
function SiteShell({
  page,
  setPage,
  banner,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--page-bg)',
      minHeight: '100%',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    current: page,
    links: NAV.map(l => ({
      label: l,
      onClick: () => setPage(l)
    }))
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, title ? /*#__PURE__*/React.createElement(PageHeader, {
    title: title
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--space-3)'
    }
  }), banner ? /*#__PURE__*/React.createElement(PageBanner, {
    src: banner,
    height: 230
  }) : null, /*#__PURE__*/React.createElement("div", {
    id: "content",
    style: {
      paddingBottom: 'var(--space-5)'
    }
  }, children))), /*#__PURE__*/React.createElement(SiteFooter, {
    description: MISSION,
    links: [{
      label: 'Facebook'
    }, {
      label: 'Instagram'
    }, {
      label: 'Twitter/X'
    }, {
      label: 'Mastodon'
    }]
  }));
}

// Long-form page furniture, matching minima-reboot's #content rules.
function H2({
  children
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-section)',
      marginBottom: 'var(--space-3)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, children);
}
function H3({
  children
}) {
  return /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-section)',
      marginBottom: 'var(--space-3)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-bold)'
    }
  }, children);
}
function H4({
  children
}) {
  return /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: 'var(--space-section)',
      marginBottom: 'var(--space-3)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, children);
}
function P({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-3)',
      lineHeight: 'var(--leading-body)',
      textAlign: 'justify'
    }
  }, children);
}
function A({
  children,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'var(--color-link-site)'
    }
  }, children);
}
function Quote({
  children
}) {
  return /*#__PURE__*/React.createElement("blockquote", {
    style: {
      borderLeft: '4px solid var(--border-subtle)',
      paddingLeft: 'var(--space-3)',
      fontStyle: 'italic',
      margin: '0 0 var(--space-3)'
    }
  }, children);
}
Object.assign(window, {
  SiteShell,
  H2,
  H3,
  H4,
  P,
  A,
  Quote,
  MISSION,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SupportPage.jsx
try { (() => {
const {
  LinkList
} = window.MissingChildrenMinnesotaDesignSystem_18e091;
function SupportPage() {
  const {
    H2,
    H3,
    P,
    A
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H2, null, "HOW TO SUPPORT MISSING CHILDREN MINNESOTA"), /*#__PURE__*/React.createElement(P, null, "Here are just a few ways to become involved!"), /*#__PURE__*/React.createElement(H3, null, "Volunteer"), /*#__PURE__*/React.createElement(P, null, "We always have projects and needs that can be filled by volunteers. Whether you have a few hours every month or every week, there are many ways you can help:"), /*#__PURE__*/React.createElement(LinkList, {
    spacing: "inline",
    items: [{
      label: 'Organizers — organize a fundraiser or educational event'
    }, {
      label: 'Social media content creators'
    }, {
      label: 'Poster partners — distribute and take down posters'
    }, {
      label: 'Educational program ambassadors and presenters'
    }, {
      label: 'Mobile app developer'
    }]
  }), /*#__PURE__*/React.createElement(P, {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(A, null, "Contact us"), " to get started as a Missing Children Minnesota volunteer today!"), /*#__PURE__*/React.createElement(H3, null, "Give a Gift"), /*#__PURE__*/React.createElement(P, null, "Missing Children Minnesota is a non-profit organization. As an all-volunteer organization, we keep our overhead costs low and make the most of every dollar as we pursue our mission and work."), /*#__PURE__*/React.createElement(LinkList, {
    spacing: "inline",
    items: [{
      label: 'GiveMN.org'
    }, {
      label: 'PayPal'
    }, {
      label: 'Stock Donator'
    }]
  }), /*#__PURE__*/React.createElement(H3, null, "Interact on social media"), /*#__PURE__*/React.createElement(P, null, "SHARE the stories of the missing, and make them public on your page. Public awareness campaigns have helped find thousands of children across the country."));
}
function ContactPage() {
  const {
    H3,
    P,
    A
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(P, {
    style: {
      textAlign: 'left'
    }
  }, "Missing Children Minnesota", /*#__PURE__*/React.createElement("br", null), "P.O. Box 1111", /*#__PURE__*/React.createElement("br", null), "Minnetonka, MN 55345"), /*#__PURE__*/React.createElement(P, {
    style: {
      textAlign: 'left'
    }
  }, "612.334.9449", /*#__PURE__*/React.createElement("br", null), "888.RUN.YELL (888.786.9355)"), /*#__PURE__*/React.createElement(P, {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(A, null, "General.Info@missingchildrenmn.com")), /*#__PURE__*/React.createElement(H3, null, "Social Media"), /*#__PURE__*/React.createElement(LinkList, {
    spacing: "inline",
    items: [{
      label: 'Facebook'
    }, {
      label: 'Instagram'
    }, {
      label: 'Twitter/X'
    }, {
      label: 'Mastodon'
    }, {
      label: 'Snapchat: Missingchildmn'
    }]
  }));
}
Object.assign(window, {
  SupportPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SupportPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AppMenu = __ds_scope.AppMenu;

__ds_ns.AppToolbar = __ds_scope.AppToolbar;

__ds_ns.ChildCard = __ds_scope.ChildCard;

__ds_ns.EditBool = __ds_scope.EditBool;

__ds_ns.EditText = __ds_scope.EditText;

__ds_ns.PinPad = __ds_scope.PinPad;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.BusyOverlay = __ds_scope.BusyOverlay;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LinkList = __ds_scope.LinkList;

__ds_ns.PageBanner = __ds_scope.PageBanner;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.PostListItem = __ds_scope.PostListItem;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();

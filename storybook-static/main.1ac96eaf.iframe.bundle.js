/*! For license information please see main.1ac96eaf.iframe.bundle.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    1023: function (module, exports) {},
    1118: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(548)
    },
    1423: function (module, exports, __webpack_require__) {
      'use strict'
      ;(function (module) {
        ;(0, __webpack_require__(548).configure)(
          [__webpack_require__(1424), __webpack_require__(1427)],
          module,
          !1,
        )
      }.call(this, __webpack_require__(246)(module)))
    },
    1424: function (module, exports, __webpack_require__) {
      var map = {'./Introduction.stories.mdx': 1425}
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1424)
    },
    1425: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page
        })
      __webpack_require__(36),
        __webpack_require__(1426),
        __webpack_require__(11),
        __webpack_require__(24),
        __webpack_require__(0)
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(356),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(900),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default =
          __webpack_require__.n(
            _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__,
          ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(901),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__,
          ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(902),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default =
          __webpack_require__.n(
            _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__,
          ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(903),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default =
          __webpack_require__.n(
            _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__,
          ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(904),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default =
          __webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(905),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(
            _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__,
          ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(906),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default =
          __webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(907),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default =
          __webpack_require__.n(
            _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__,
          ),
        _excluded = ['components']
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var layoutProps = {}
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded)
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,
            {title: 'Example/Introduction', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'style',
            null,
            "\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            {id: 'welcome-to-storybook'},
            'Welcome to Storybook',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              {parentName: 'p'},
              'stories',
            ),
            ' to revisit during development, testing, or QA.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'inlineCode',
              {parentName: 'p'},
              'src/stories',
            ),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'strong',
                {parentName: 'a'},
                'component-driven',
              ),
            ),
            ' process starting with atomic components and ending with pages.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            {className: 'subheading'},
            'Configure',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            {className: 'link-list'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/addons/addon-types',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
                alt: 'plugin',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Presets for popular tools',
                ),
                'Easy setup for TypeScript, SCSS and more.',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/webpack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
                alt: 'Build',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Build configuration',
                ),
                'How to customize webpack and Babel',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: 'colors',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Styling',
                ),
                'How to load and configure CSS libraries',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
                alt: 'flow',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Data',
                ),
                'Providers and mocking for data libraries',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            {className: 'subheading'},
            'Learn',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            {className: 'link-list'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/docs',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
                alt: 'repo',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Storybook documentation',
                ),
                'Configure, customize, and extend',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                alt: 'direction',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'In-depth guides',
                ),
                'Best practices from leading teams',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://github.com/storybookjs/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                alt: 'code',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'GitHub project',
                ),
                'View the source and add issues',
              ),
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                className: 'link-item',
                href: 'https://discord.gg/storybook',
                target: '_blank',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
                src: _assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
                alt: 'comments',
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'span',
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'strong',
                  null,
                  'Discord chat',
                ),
                'Chat with maintainers and the community',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'div',
            {className: 'tip-wrapper'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'span',
              {className: 'tip'},
              'Tip',
            ),
            'Edit the Markdown in',
            ' ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'code',
              null,
              'src/stories/Introduction.stories.mdx',
            ),
          ),
        )
      }
      ;(MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0)
      var __page = function __page() {
        throw new Error('Docs-only story')
      }
      __page.parameters = {docsOnly: !0}
      var componentMeta = {
          title: 'Example/Introduction',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {}
      ;(componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null,
                ),
              )
            },
          },
        )),
        (__webpack_exports__.default = componentMeta)
    },
    1427: function (module, exports, __webpack_require__) {
      var map = {
        './Button.stories.tsx': 1428,
        './Header.stories.tsx': 357,
        './Page.stories.tsx': 1747,
        './alertf/alertf.stories.tsx': 1748,
        './card/card.stories.tsx': 1749,
        './cards/cards.stories.tsx': 1456,
        './date/date.stories.tsx': 1750,
        './dots/dots.stories.tsx': 1751,
        './download/download.stories.tsx': 1576,
        './dragAndDropFile/dragAndDropFile.stories.tsx': 1752,
        './fileList/fileList.stories.tsx': 1753,
        './filter/filter.stories.tsx': 1754,
        './infouser/infouser.stories.tsx': 1755,
        './labelvalue/labelvalue.stories.tsx': 1605,
        './labelvaluerow/labelvaluerow.stories.tsx': 1756,
        './loader/loader.stories.tsx': 1606,
        './message/message.stories.tsx': 1757,
        './paginator/paginator.stories.tsx': 1758,
        './pdf/pdf.stories.tsx': 1759,
        './phase1/phase1.stories.tsx': 1669,
        './phase2/phase2.stories.tsx': 1670,
        './radio/radio.stories.tsx': 1760,
        './section/section.stories.tsx': 1761,
        './selector/selector.stories.tsx': 1762,
        './smilef/smilef.stories.tsx': 1763,
        './table/table.stories.tsx': 1764,
        './tooltip/tooltip.stories.tsx': 1765,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1427)
    },
    1428: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Secondary', function () {
          return Secondary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _Button__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(0), __webpack_require__(197)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'Example/Button',
        component: _Button__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: {backgroundColor: {control: 'color'}},
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Button__WEBPACK_IMPORTED_MODULE_3__.a,
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            args,
          ),
        )
      }
      Template.displayName = 'Template'
      var Primary =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Primary.args = {primary: !0, label: 'Button'}
      var Secondary =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Secondary.args = {label: 'Button'}
      var Large =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Large.args = {size: 'large', label: 'Button'}
      var Small =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Button {...args} />'}},
            Primary.parameters,
          )),
        (Secondary.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Button {...args} />'}},
            Secondary.parameters,
          )),
        (Large.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Button {...args} />'}},
            Large.parameters,
          )),
        (Small.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Button {...args} />'}},
            Small.parameters,
          ))
    },
    1446: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(327),
        content = __webpack_require__(1447)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = {insert: 'head', singleton: !1}
      api(content, options)
      module.exports = content.locals || {}
    },
    1447: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(328)(!1)).push([
        module.i,
        ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",
        '',
      ]),
        (module.exports = exports)
    },
    1449: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(327),
        content = __webpack_require__(1450)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = {insert: 'head', singleton: !1}
      api(content, options)
      module.exports = content.locals || {}
    },
    1450: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(328)(!1)).push([
        module.i,
        ".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",
        '',
      ]),
        (module.exports = exports)
    },
    1451: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(327),
        content = __webpack_require__(1452)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = {insert: 'head', singleton: !1}
      api(content, options)
      module.exports = content.locals || {}
    },
    1452: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(328)(!1)).push([
        module.i,
        "section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",
        '',
      ]),
        (module.exports = exports)
    },
    1456: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _artefactos_cards__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(0), __webpack_require__(267)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'components/Cards',
        component: _artefactos_cards__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: {
          classExtra: {
            name: 'classExtra',
            type: {name: 'string', required: !0},
            defaultValue: '',
            description: 'change className of the Container',
            table: {type: {summary: 'string'}, defaultValue: {summary: ''}},
            control: {type: 'text'},
          },
          title: {
            name: 'title',
            type: {name: 'string', required: !1},
            defaultValue: '',
            description: 'change the title fo the container',
            table: {type: {summary: 'string'}, defaultValue: {summary: ''}},
            control: {type: 'text'},
          },
        },
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _artefactos_cards__WEBPACK_IMPORTED_MODULE_3__.a,
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            args,
            {
              children: Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx,
              )('div', {children: 'hello im Here'}),
            },
          ),
        )
      }
      Template.displayName = 'Template'
      var Primary =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Primary.args = {}
      var Large =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Large.args = {size: 'large', label: 'Button'}
      var Small =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Cards {...args}>\n    <div>hello im Here</div>\n  </Cards>\n)',
              },
            },
            Primary.parameters,
          )),
        (Large.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Cards {...args}>\n    <div>hello im Here</div>\n  </Cards>\n)',
              },
            },
            Large.parameters,
          )),
        (Small.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Cards {...args}>\n    <div>hello im Here</div>\n  </Cards>\n)',
              },
            },
            Small.parameters,
          ))
    },
    1575: function (module, exports, __webpack_require__) {
      var map = {
        './af': 694,
        './af.js': 694,
        './ar': 695,
        './ar-dz': 696,
        './ar-dz.js': 696,
        './ar-kw': 697,
        './ar-kw.js': 697,
        './ar-ly': 698,
        './ar-ly.js': 698,
        './ar-ma': 699,
        './ar-ma.js': 699,
        './ar-sa': 700,
        './ar-sa.js': 700,
        './ar-tn': 701,
        './ar-tn.js': 701,
        './ar.js': 695,
        './az': 702,
        './az.js': 702,
        './be': 703,
        './be.js': 703,
        './bg': 704,
        './bg.js': 704,
        './bm': 705,
        './bm.js': 705,
        './bn': 706,
        './bn-bd': 707,
        './bn-bd.js': 707,
        './bn.js': 706,
        './bo': 708,
        './bo.js': 708,
        './br': 709,
        './br.js': 709,
        './bs': 710,
        './bs.js': 710,
        './ca': 711,
        './ca.js': 711,
        './cs': 712,
        './cs.js': 712,
        './cv': 713,
        './cv.js': 713,
        './cy': 714,
        './cy.js': 714,
        './da': 715,
        './da.js': 715,
        './de': 716,
        './de-at': 717,
        './de-at.js': 717,
        './de-ch': 718,
        './de-ch.js': 718,
        './de.js': 716,
        './dv': 719,
        './dv.js': 719,
        './el': 720,
        './el.js': 720,
        './en-au': 721,
        './en-au.js': 721,
        './en-ca': 722,
        './en-ca.js': 722,
        './en-gb': 723,
        './en-gb.js': 723,
        './en-ie': 724,
        './en-ie.js': 724,
        './en-il': 725,
        './en-il.js': 725,
        './en-in': 726,
        './en-in.js': 726,
        './en-nz': 727,
        './en-nz.js': 727,
        './en-sg': 728,
        './en-sg.js': 728,
        './eo': 729,
        './eo.js': 729,
        './es': 730,
        './es-do': 731,
        './es-do.js': 731,
        './es-mx': 732,
        './es-mx.js': 732,
        './es-us': 733,
        './es-us.js': 733,
        './es.js': 730,
        './et': 734,
        './et.js': 734,
        './eu': 735,
        './eu.js': 735,
        './fa': 736,
        './fa.js': 736,
        './fi': 737,
        './fi.js': 737,
        './fil': 738,
        './fil.js': 738,
        './fo': 739,
        './fo.js': 739,
        './fr': 740,
        './fr-ca': 741,
        './fr-ca.js': 741,
        './fr-ch': 742,
        './fr-ch.js': 742,
        './fr.js': 740,
        './fy': 743,
        './fy.js': 743,
        './ga': 744,
        './ga.js': 744,
        './gd': 745,
        './gd.js': 745,
        './gl': 746,
        './gl.js': 746,
        './gom-deva': 747,
        './gom-deva.js': 747,
        './gom-latn': 748,
        './gom-latn.js': 748,
        './gu': 749,
        './gu.js': 749,
        './he': 750,
        './he.js': 750,
        './hi': 751,
        './hi.js': 751,
        './hr': 752,
        './hr.js': 752,
        './hu': 753,
        './hu.js': 753,
        './hy-am': 754,
        './hy-am.js': 754,
        './id': 755,
        './id.js': 755,
        './is': 756,
        './is.js': 756,
        './it': 757,
        './it-ch': 758,
        './it-ch.js': 758,
        './it.js': 757,
        './ja': 759,
        './ja.js': 759,
        './jv': 760,
        './jv.js': 760,
        './ka': 761,
        './ka.js': 761,
        './kk': 762,
        './kk.js': 762,
        './km': 763,
        './km.js': 763,
        './kn': 764,
        './kn.js': 764,
        './ko': 765,
        './ko.js': 765,
        './ku': 766,
        './ku.js': 766,
        './ky': 767,
        './ky.js': 767,
        './lb': 768,
        './lb.js': 768,
        './lo': 769,
        './lo.js': 769,
        './lt': 770,
        './lt.js': 770,
        './lv': 771,
        './lv.js': 771,
        './me': 772,
        './me.js': 772,
        './mi': 773,
        './mi.js': 773,
        './mk': 774,
        './mk.js': 774,
        './ml': 775,
        './ml.js': 775,
        './mn': 776,
        './mn.js': 776,
        './mr': 777,
        './mr.js': 777,
        './ms': 778,
        './ms-my': 779,
        './ms-my.js': 779,
        './ms.js': 778,
        './mt': 780,
        './mt.js': 780,
        './my': 781,
        './my.js': 781,
        './nb': 782,
        './nb.js': 782,
        './ne': 783,
        './ne.js': 783,
        './nl': 784,
        './nl-be': 785,
        './nl-be.js': 785,
        './nl.js': 784,
        './nn': 786,
        './nn.js': 786,
        './oc-lnc': 787,
        './oc-lnc.js': 787,
        './pa-in': 788,
        './pa-in.js': 788,
        './pl': 789,
        './pl.js': 789,
        './pt': 790,
        './pt-br': 791,
        './pt-br.js': 791,
        './pt.js': 790,
        './ro': 792,
        './ro.js': 792,
        './ru': 793,
        './ru.js': 793,
        './sd': 794,
        './sd.js': 794,
        './se': 795,
        './se.js': 795,
        './si': 796,
        './si.js': 796,
        './sk': 797,
        './sk.js': 797,
        './sl': 798,
        './sl.js': 798,
        './sq': 799,
        './sq.js': 799,
        './sr': 800,
        './sr-cyrl': 801,
        './sr-cyrl.js': 801,
        './sr.js': 800,
        './ss': 802,
        './ss.js': 802,
        './sv': 803,
        './sv.js': 803,
        './sw': 804,
        './sw.js': 804,
        './ta': 805,
        './ta.js': 805,
        './te': 806,
        './te.js': 806,
        './tet': 807,
        './tet.js': 807,
        './tg': 808,
        './tg.js': 808,
        './th': 809,
        './th.js': 809,
        './tk': 810,
        './tk.js': 810,
        './tl-ph': 811,
        './tl-ph.js': 811,
        './tlh': 812,
        './tlh.js': 812,
        './tr': 813,
        './tr.js': 813,
        './tzl': 814,
        './tzl.js': 814,
        './tzm': 815,
        './tzm-latn': 816,
        './tzm-latn.js': 816,
        './tzm.js': 815,
        './ug-cn': 817,
        './ug-cn.js': 817,
        './uk': 818,
        './uk.js': 818,
        './ur': 819,
        './ur.js': 819,
        './uz': 820,
        './uz-latn': 821,
        './uz-latn.js': 821,
        './uz.js': 820,
        './vi': 822,
        './vi.js': 822,
        './x-pseudo': 823,
        './x-pseudo.js': 823,
        './yo': 824,
        './yo.js': 824,
        './zh-cn': 825,
        './zh-cn.js': 825,
        './zh-hk': 826,
        './zh-hk.js': 826,
        './zh-mo': 827,
        './zh-mo.js': 827,
        './zh-tw': 828,
        './zh-tw.js': 828,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1575)
    },
    1576: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _artefactos_btndown__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(0), __webpack_require__(268)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'components/Download',
        component: _artefactos_btndown__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: {
          disabled: {
            name: 'disabled',
            type: {name: 'boolean', required: !0},
            defaultValue: !1,
            description: 'disable button',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: !1}},
            control: {type: 'boolean'},
          },
          filename: {
            name: 'filename',
            type: {name: 'string', required: !0},
            defaultValue: 'Nombre del reporte.xlsx',
            description: 'filename for .zip or .pdf',
            table: {
              type: {summary: 'string'},
              defaultValue: {summary: 'Nombre del reporte.xlsx'},
            },
            control: {type: 'text'},
          },
          btnMessage: {
            name: 'btnMessage',
            type: {name: 'string', required: !0},
            defaultValue: 'btnMessage',
            description: 'btnMessage for .zip or .pdf',
            table: {
              type: {summary: 'string'},
              defaultValue: {summary: 'btnMessage'},
            },
            control: {type: 'text'},
          },
          messageZipPart1: {
            name: 'messageZipPart1',
            type: {name: 'string', required: !0},
            defaultValue: 'messageZipPart1',
            description: 'messageZipPart1 for .zip or .pdf',
            table: {
              type: {summary: 'string'},
              defaultValue: {summary: 'messageZipPart1/'},
            },
            control: {type: 'text'},
          },
          messageZipPart2: {
            name: 'messageZipPart2',
            type: {name: 'string', required: !0},
            defaultValue: 'messageZipPart2',
            description: 'messageZipPart2 for .zip or .pdf',
            table: {
              type: {summary: 'string'},
              defaultValue: {summary: 'messageZipPart2'},
            },
            control: {type: 'text'},
          },
        },
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _artefactos_btndown__WEBPACK_IMPORTED_MODULE_3__.a,
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            args,
            {
              querySickLeaves: function querySickLeaves() {
                return console.log('hello excel')
              },
            },
          ),
        )
      }
      Template.displayName = 'Template'
      var Primary =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Primary.args = {}
      var Large =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Large.args = {size: 'large', label: 'Button'}
      var Small =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  "args => (\n  <Download {...args} querySickLeaves={() => console.log('hello excel')} />\n)",
              },
            },
            Primary.parameters,
          )),
        (Large.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  "args => (\n  <Download {...args} querySickLeaves={() => console.log('hello excel')} />\n)",
              },
            },
            Large.parameters,
          )),
        (Small.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  "args => (\n  <Download {...args} querySickLeaves={() => console.log('hello excel')} />\n)",
              },
            },
            Small.parameters,
          ))
    },
    1605: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _artefactos_labelvalue__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(0), __webpack_require__(269)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'components/LabelValue',
        component: _artefactos_labelvalue__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: {},
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _artefactos_labelvalue__WEBPACK_IMPORTED_MODULE_3__.a,
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              dataColumn: [
                {label: 'Estado PBS:', value: ''},
                {label: 'Derecho a servicios:', value: ''},
                {label: 'Estado en Plan Complementario:', value: ''},
                {label: 'Programa Especial:', value: ''},
                {label: 'Programa para el servicio:', value: ''},
                {label: 'Estado en RS:', value: ''},
                {label: 'Fecha de Nacimiento:', value: ''},
              ],
              stylesColumn: 'col-sm-12 labelValue__spacing',
              subColumns: !0,
            },
            args,
          ),
          'labelValue_1',
        )
      }
      Template.displayName = 'Template'
      var Primary =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Primary.args = {}
      var Large =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Large.args = {size: 'large', label: 'Button'}
      var Small =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  "args => {\n  const dataAfiliado = [\n    {\n      label: 'Estado PBS:',\n      value: '',\n    },\n    {\n      label: 'Derecho a servicios:',\n      value: '',\n    },\n    {\n      label: 'Estado en Plan Complementario:',\n      value: '',\n    },\n    {\n      label: 'Programa Especial:',\n      value: '',\n    },\n    {\n      label: 'Programa para el servicio:',\n      value: '',\n    },\n    {\n      label: 'Estado en RS:',\n      value: '',\n    },\n    {\n      label: 'Fecha de Nacimiento:',\n      value: '',\n    },\n  ]\n  return (\n    <LabelValue\n      key={`labelValue_1`}\n      dataColumn={dataAfiliado}\n      stylesColumn={'col-sm-12 labelValue__spacing'}\n      subColumns={true}\n      {...args}\n    />\n  )\n}",
              },
            },
            Primary.parameters,
          )),
        (Large.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  "args => {\n  const dataAfiliado = [\n    {\n      label: 'Estado PBS:',\n      value: '',\n    },\n    {\n      label: 'Derecho a servicios:',\n      value: '',\n    },\n    {\n      label: 'Estado en Plan Complementario:',\n      value: '',\n    },\n    {\n      label: 'Programa Especial:',\n      value: '',\n    },\n    {\n      label: 'Programa para el servicio:',\n      value: '',\n    },\n    {\n      label: 'Estado en RS:',\n      value: '',\n    },\n    {\n      label: 'Fecha de Nacimiento:',\n      value: '',\n    },\n  ]\n  return (\n    <LabelValue\n      key={`labelValue_1`}\n      dataColumn={dataAfiliado}\n      stylesColumn={'col-sm-12 labelValue__spacing'}\n      subColumns={true}\n      {...args}\n    />\n  )\n}",
              },
            },
            Large.parameters,
          )),
        (Small.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  "args => {\n  const dataAfiliado = [\n    {\n      label: 'Estado PBS:',\n      value: '',\n    },\n    {\n      label: 'Derecho a servicios:',\n      value: '',\n    },\n    {\n      label: 'Estado en Plan Complementario:',\n      value: '',\n    },\n    {\n      label: 'Programa Especial:',\n      value: '',\n    },\n    {\n      label: 'Programa para el servicio:',\n      value: '',\n    },\n    {\n      label: 'Estado en RS:',\n      value: '',\n    },\n    {\n      label: 'Fecha de Nacimiento:',\n      value: '',\n    },\n  ]\n  return (\n    <LabelValue\n      key={`labelValue_1`}\n      dataColumn={dataAfiliado}\n      stylesColumn={'col-sm-12 labelValue__spacing'}\n      subColumns={true}\n      {...args}\n    />\n  )\n}",
              },
            },
            Small.parameters,
          ))
    },
    1606: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _artefactos_loader__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(0), __webpack_require__(270)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'components/Loader',
        component: _artefactos_loader__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: {
          loading: {
            name: 'loading',
            type: {name: 'boolean', required: !0},
            defaultValue: !0,
            description: 'make the spinner go boom',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: !0}},
            control: {type: 'boolean'},
          },
          noBack: {
            name: 'noBack',
            type: {name: 'boolean', required: !0},
            defaultValue: !1,
            description: 'make the background transparent',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: !1}},
            control: {type: 'boolean'},
          },
        },
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _artefactos_loader__WEBPACK_IMPORTED_MODULE_3__.a,
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            args,
          ),
        )
      }
      Template.displayName = 'Template'
      var Primary =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Primary.args = {}
      var Large =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Large.args = {size: 'large', label: 'Button'}
      var Small =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Loader {...args} />'}},
            Primary.parameters,
          )),
        (Large.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Loader {...args} />'}},
            Large.parameters,
          )),
        (Small.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Loader {...args} />'}},
            Small.parameters,
          ))
    },
    1664: function (module, exports) {},
    1665: function (module, exports) {},
    1666: function (module, exports) {},
    1667: function (module, exports) {},
    1668: function (module, exports) {},
    1669: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _artefactos_phase1__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(0), __webpack_require__(274)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'components/Phase1',
        component: _artefactos_phase1__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: {
          className: {
            name: 'className',
            type: {name: 'string', required: !1},
            defaultValue: '',
            description: 'className of container',
            table: {
              type: {summary: 'string'},
              defaultValue: {summary: 'className'},
            },
            control: {type: 'text'},
          },
          phase: {
            name: 'phase',
            type: {name: 'number', required: !0},
            defaultValue: 1,
            description: 'depending on phase(1,2) interface changes',
            table: {type: {summary: 'number'}, defaultValue: {summary: 1}},
            control: {type: 'number', min: 1, max: 2},
          },
        },
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          _artefactos_phase1__WEBPACK_IMPORTED_MODULE_3__.a,
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            args,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  'p',
                  {children: 'hello im hector'},
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  'p',
                  {children: 'hello im andres'},
                ),
              ],
            },
          ),
        )
      }
      Template.displayName = 'Template'
      var Primary =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Primary.args = {}
      var Large =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Large.args = {size: 'large', label: 'Button'}
      var Small =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Phase1 {...args}>\n    <p>hello im hector</p>\n    <p>hello im andres</p>\n  </Phase1>\n)',
              },
            },
            Primary.parameters,
          )),
        (Large.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Phase1 {...args}>\n    <p>hello im hector</p>\n    <p>hello im andres</p>\n  </Phase1>\n)',
              },
            },
            Large.parameters,
          )),
        (Small.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Phase1 {...args}>\n    <p>hello im hector</p>\n    <p>hello im andres</p>\n  </Phase1>\n)',
              },
            },
            Small.parameters,
          ))
    },
    1670: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _artefactos_phase2__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(0), __webpack_require__(275)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'components/Phase2',
        component: _artefactos_phase2__WEBPACK_IMPORTED_MODULE_3__.a,
        argTypes: {
          className: {
            name: 'className',
            type: {name: 'string', required: !1},
            defaultValue: '',
            description: 'className of container',
            table: {
              type: {summary: 'string'},
              defaultValue: {summary: 'className'},
            },
            control: {type: 'text'},
          },
          phase: {
            name: 'phase',
            type: {name: 'number', required: !0},
            defaultValue: 1,
            description: 'depending on phase(1,2) interface changes',
            table: {type: {summary: 'number'}, defaultValue: {summary: 1}},
            control: {type: 'number', min: 1, max: 2},
          },
        },
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          _artefactos_phase2__WEBPACK_IMPORTED_MODULE_3__.a,
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            args,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  'p',
                  {children: 'hello im hector'},
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  'p',
                  {children: 'hello im andres'},
                ),
              ],
            },
          ),
        )
      }
      Template.displayName = 'Template'
      var Primary =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Primary.args = {}
      var Large =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      Large.args = {size: 'large', label: 'Button'}
      var Small =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Phase2 {...args}>\n    <p>hello im hector</p>\n    <p>hello im andres</p>\n  </Phase2>\n)',
              },
            },
            Primary.parameters,
          )),
        (Large.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Phase2 {...args}>\n    <p>hello im hector</p>\n    <p>hello im andres</p>\n  </Phase2>\n)',
              },
            },
            Large.parameters,
          )),
        (Small.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {
              storySource: {
                source:
                  'args => (\n  <Phase2 {...args}>\n    <p>hello im hector</p>\n    <p>hello im andres</p>\n  </Phase2>\n)',
              },
            },
            Small.parameters,
          ))
    },
    1746: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var preview_namespaceObject = {}
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters
          },
        )
      var _context3,
        object_keys = __webpack_require__(489),
        keys_default = __webpack_require__.n(object_keys),
        get_own_property_symbols = __webpack_require__(78),
        get_own_property_symbols_default = __webpack_require__.n(
          get_own_property_symbols,
        ),
        filter = __webpack_require__(355),
        filter_default = __webpack_require__.n(filter),
        get_own_property_descriptor = __webpack_require__(490),
        get_own_property_descriptor_default = __webpack_require__.n(
          get_own_property_descriptor,
        ),
        for_each = __webpack_require__(150),
        for_each_default = __webpack_require__.n(for_each),
        get_own_property_descriptors = __webpack_require__(491),
        get_own_property_descriptors_default = __webpack_require__.n(
          get_own_property_descriptors,
        ),
        define_properties = __webpack_require__(898),
        define_properties_default = __webpack_require__.n(define_properties),
        define_property = __webpack_require__(354),
        define_property_default = __webpack_require__.n(define_property),
        stringify = __webpack_require__(899),
        stringify_default = __webpack_require__.n(stringify),
        client_api = __webpack_require__(1784),
        esm = __webpack_require__(10),
        parameters = {
          actions: {argTypesRegex: '^on[A-Z].*'},
          controls: {matchers: {color: /(background|color)$/i, date: /Date$/}},
        }
      function ownKeys(object, enumerableOnly) {
        var keys = keys_default()(object)
        if (get_own_property_symbols_default.a) {
          var symbols = get_own_property_symbols_default()(object)
          enumerableOnly &&
            (symbols = filter_default()(symbols).call(symbols, function (sym) {
              return get_own_property_descriptor_default()(
                object,
                sym,
              ).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? define_property_default()(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      for_each_default()(
        (_context3 = keys_default()(preview_namespaceObject)),
      ).call(_context3, function (key) {
        var value = preview_namespaceObject[key]
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              stringify_default()(value),
            )
          case 'decorators':
            return for_each_default()(value).call(value, function (decorator) {
              return Object(client_api.c)(decorator, !1)
            })
          case 'loaders':
            return for_each_default()(value).call(value, function (loader) {
              return Object(client_api.d)(loader, !1)
            })
          case 'parameters':
            return Object(client_api.e)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var _context,
                    source = null != arguments[i] ? arguments[i] : {}
                  if (i % 2)
                    for_each_default()(
                      (_context = ownKeys(Object(source), !0)),
                    ).call(_context, function (key) {
                      _defineProperty(target, key, source[key])
                    })
                  else if (get_own_property_descriptors_default.a)
                    define_properties_default()(
                      target,
                      get_own_property_descriptors_default()(source),
                    )
                  else {
                    var _context2
                    for_each_default()(
                      (_context2 = ownKeys(Object(source))),
                    ).call(_context2, function (key) {
                      define_property_default()(
                        target,
                        key,
                        get_own_property_descriptor_default()(source, key),
                      )
                    })
                  }
                }
                return target
              })({}, value),
              !1,
            )
          case 'argTypesEnhancers':
            return for_each_default()(value).call(value, function (enhancer) {
              return Object(client_api.a)(enhancer)
            })
          case 'argsEnhancers':
            return for_each_default()(value).call(value, function (enhancer) {
              return Object(client_api.b)(enhancer)
            })
          case 'render':
            return Object(client_api.g)(value)
          case 'globals':
          case 'globalTypes':
            var v = {}
            return (v[key] = value), Object(client_api.e)(v, !1)
          default:
            return console.log(key + ' was not supported :( !')
        }
      })
    },
    1747: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut
        })
      var object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        Header = (__webpack_require__(0), __webpack_require__(266)),
        jsx_runtime = (__webpack_require__(1451), __webpack_require__(4)),
        Page_Page = function Page(_ref) {
          var user = _ref.user,
            onLogin = _ref.onLogin,
            onLogout = _ref.onLogout,
            onCreateAccount = _ref.onCreateAccount
          return Object(jsx_runtime.jsxs)('article', {
            children: [
              Object(jsx_runtime.jsx)(Header.a, {
                user: user,
                onLogin: onLogin,
                onLogout: onLogout,
                onCreateAccount: onCreateAccount,
              }),
              Object(jsx_runtime.jsxs)('section', {
                children: [
                  Object(jsx_runtime.jsx)('h2', {
                    children: 'Pages in Storybook',
                  }),
                  Object(jsx_runtime.jsxs)('p', {
                    children: [
                      'We recommend building UIs with a',
                      ' ',
                      Object(jsx_runtime.jsx)('a', {
                        href: 'https://componentdriven.org',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: Object(jsx_runtime.jsx)('strong', {
                          children: 'component-driven',
                        }),
                      }),
                      ' ',
                      'process starting with atomic components and ending with pages.',
                    ],
                  }),
                  Object(jsx_runtime.jsx)('p', {
                    children:
                      'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:',
                  }),
                  Object(jsx_runtime.jsxs)('ul', {
                    children: [
                      Object(jsx_runtime.jsx)('li', {
                        children:
                          'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories',
                      }),
                      Object(jsx_runtime.jsx)('li', {
                        children:
                          'Assemble data in the page component from your services. You can mock these services out using Storybook.',
                      }),
                    ],
                  }),
                  Object(jsx_runtime.jsxs)('p', {
                    children: [
                      'Get a guided tutorial on component-driven development at',
                      ' ',
                      Object(jsx_runtime.jsx)('a', {
                        href: 'https://storybook.js.org/tutorials/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: 'Storybook tutorials',
                      }),
                      '. Read more in the',
                      ' ',
                      Object(jsx_runtime.jsx)('a', {
                        href: 'https://storybook.js.org/docs',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        children: 'docs',
                      }),
                      '.',
                    ],
                  }),
                  Object(jsx_runtime.jsxs)('div', {
                    className: 'tip-wrapper',
                    children: [
                      Object(jsx_runtime.jsx)('span', {
                        className: 'tip',
                        children: 'Tip',
                      }),
                      ' Adjust the width of the canvas with the',
                      ' ',
                      Object(jsx_runtime.jsx)('svg', {
                        width: '10',
                        height: '10',
                        viewBox: '0 0 12 12',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: Object(jsx_runtime.jsx)('g', {
                          fill: 'none',
                          fillRule: 'evenodd',
                          children: Object(jsx_runtime.jsx)('path', {
                            d: 'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
                            id: 'a',
                            fill: '#999',
                          }),
                        }),
                      }),
                      'Viewports addon in the toolbar',
                    ],
                  }),
                ],
              }),
            ],
          })
        }
      Page_Page.displayName = 'Page'
      try {
        ;(Page_Page.displayName = 'Page'),
          (Page_Page.__docgenInfo = {
            description: '',
            displayName: 'Page',
            props: {
              user: {
                defaultValue: null,
                description: '',
                name: 'user',
                required: !1,
                type: {name: '{}'},
              },
              onLogin: {
                defaultValue: null,
                description: '',
                name: 'onLogin',
                required: !0,
                type: {name: '() => void'},
              },
              onLogout: {
                defaultValue: null,
                description: '',
                name: 'onLogout',
                required: !0,
                type: {name: '() => void'},
              },
              onCreateAccount: {
                defaultValue: null,
                description: '',
                name: 'onCreateAccount',
                required: !0,
                type: {name: '() => void'},
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/Page.tsx#Page'] = {
              docgenInfo: Page_Page.__docgenInfo,
              name: 'Page',
              path: 'stories/Page.tsx#Page',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Header_stories = __webpack_require__(357),
        Page_stories_Template =
          ((__webpack_exports__.default = {
            title: 'Example/Page',
            component: Page_Page,
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(
              Page_Page,
              assign_default()({}, args),
            )
          })
      Page_stories_Template.displayName = 'Template'
      var LoggedIn = bind_default()(Page_stories_Template).call(
        Page_stories_Template,
        {},
      )
      LoggedIn.args = assign_default()({}, Header_stories.LoggedIn.args)
      var LoggedOut = bind_default()(Page_stories_Template).call(
        Page_stories_Template,
        {},
      )
      ;(LoggedOut.args = assign_default()({}, Header_stories.LoggedOut.args)),
        (LoggedIn.parameters = assign_default()(
          {storySource: {source: 'args => <Page {...args} />'}},
          LoggedIn.parameters,
        )),
        (LoggedOut.parameters = assign_default()(
          {storySource: {source: 'args => <Page {...args} />'}},
          LoggedOut.parameters,
        ))
    },
    1748: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      !(function (e, t) {
        void 0 === t && (t = {})
        var a = t.insertAt
        if ('undefined' != typeof document) {
          var s = document.head || document.getElementsByTagName('head')[0],
            r = document.createElement('style')
          ;(r.type = 'text/css'),
            'top' === a && s.firstChild
              ? s.insertBefore(r, s.firstChild)
              : s.appendChild(r),
            r.styleSheet
              ? (r.styleSheet.cssText = e)
              : r.appendChild(document.createTextNode(e))
        }
      })(
        '.alert--inlineBold{color:#3686af;font:normal normal 700 14px/16px Roboto;letter-spacing:0}.alert-custom{grid-gap:5px;align-content:center;background-color:#d9edf7;border-color:#bce8f1;color:#3686af!important;display:grid!important;grid-template-columns:57px 286px 17px 32px;grid-template-rows:1fr;justify-content:center;margin:15px auto;padding:3px!important;place-items:center center;width:453.5px}@media screen and (max-width:767px){.alert-custom{grid-template-columns:27px 65px 94px 36px;margin:10px auto 14px -6px;padding:2px 4px 12px!important;width:252px}}.alert-custom>i{font-size:50px;padding:8px}@media screen and (max-width:767px){.alert-custom>i{grid-column:1/span 3;padding:8px 8px 8px 22px}}.alert-custom>i:before{padding:0 10px 0 2px!important}.alert-custom .alert__message{color:#3686af;line-height:1.5em;font:normal normal normal 14px/16px Roboto;letter-spacing:0}@media screen and (max-width:767px){.alert-custom .alert__message{grid-column:2/span 3;grid-row:2/span 1;line-height:14px}}.alert-custom .alert__message>span{display:inline-block}.alert-custom .close{filter:alpha(opacity=100);font-size:34px!important;grid-column:4/span 1;opacity:1;padding:0 10px;text-shadow:none}.alert-custom .close.alert-success{color:#43894e}.alert-custom .close.alert-info{background-color:transparent;color:#3686af}.alert-custom .close.alert-warning{color:#8a6d3b}.alert-custom .close.alert-danger{color:#bb4945}',
        {insertAt: 'top'},
      )
      var alertf_esm_t = (function (_e$Component) {
        inherits_default()(t, _e$Component)
        var _super = _createSuper(t)
        function t() {
          var _this
          return (
            classCallCheck_default()(this, t),
            ((_this = _super.apply(this, arguments)).type = ''),
            (_this.icon = ''),
            (_this.setTypeClass = function (e) {
              switch (e) {
                case 'info':
                  ;(_this.type = 'alert-info'), (_this.icon = 'fa-info-circle')
                  break
                case 'success':
                  ;(_this.type = 'alert-success'),
                    (_this.icon = 'fa-check-circle')
                  break
                case 'warning':
                  ;(_this.type = 'alert-warning'),
                    (_this.icon = 'fa-exclamation-circle')
                  break
                case 'danger':
                  ;(_this.type = 'alert-danger'),
                    (_this.icon = 'fa-exclamation-triangle')
                  break
                default:
                  ;(_this.type = 'alert-info'), (_this.icon = 'fa-info-circle')
              }
            }),
            _this
          )
        }
        return (
          createClass_default()(t, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.setTypeClass(this.props.type), this.forceUpdate()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(e, _t) {
                e.type !== this.props.type && this.setTypeClass(this.props.type)
              },
            },
            {
              key: 'render',
              value: function render() {
                return react_default.a.createElement(
                  'div',
                  {
                    className:
                      'alert alert-custom alert-dismissible ' +
                      this.props.className,
                    role: 'alert',
                    'data-testid': 'hello',
                  },
                  react_default.a.createElement('i', {
                    className: 'fa ' + this.icon,
                    'aria-label': 'icon ' + this.icon,
                  }),
                  react_default.a.createElement(
                    'div',
                    {
                      className: 'alert__message',
                      'aria-label': 'alert message ' + this.props.mensaje,
                      tabIndex: 0,
                    },
                    this.props.mensaje,
                  ),
                  react_default.a.createElement(
                    'a',
                    {
                      role: 'button',
                      tabIndex: 0,
                      className: 'close ' + this.type,
                      'data-bs-dismiss': 'alert',
                      'aria-label': 'Close',
                      onClick: this.props.handleFlyerClose,
                      onKeyPress: this.props.handleFlyerClose,
                    },
                    react_default.a.createElement('i', {
                      className: 'fa fa-times-circle',
                    }),
                  ),
                )
              },
            },
          ]),
          t
        )
      })(react_default.a.Component)
      ;(alertf_esm_t.defaultProps = {type: 'alert-info', className: ''}),
        (alertf_esm_t.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 't',
          props: {
            type: {
              defaultValue: {value: '"alert-info"', computed: !1},
              required: !1,
            },
            className: {
              defaultValue: {value: '""', computed: !1},
              required: !1,
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/alertf/dist/alertf.esm.js'] = {
            name: 't',
            docgenInfo: alertf_esm_t.__docgenInfo,
            path: 'packages/alertf/dist/alertf.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        alertf_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/Alertf',
            component: alertf_esm_t,
            argTypes: {
              mensaje: {
                name: 'mensaje',
                type: {name: 'string', required: !0},
                defaultValue: 'hola soy un mensaje',
                description: 'change the message of the alert',
                table: {
                  type: {summary: 'string'},
                  defaultValue: {summary: 'change the message of the alert'},
                },
                control: {type: 'text'},
              },
              type: {
                name: 'type',
                type: {name: 'enum', required: !0},
                defaultValue: 'info',
                description: 'changes the icons of the alertf',
                table: {
                  type: {summary: '[info, success, warning, danger]'},
                  defaultValue: {summary: 'info'},
                },
                control: {
                  type: 'select',
                  options: ['info', 'success', 'warning', 'danger'],
                },
              },
              className: {
                name: 'className',
                type: {name: 'string', required: !1},
                defaultValue: '',
                description: 'className for the Alert Container',
                table: {type: {summary: ''}, defaultValue: {summary: ''}},
                control: {type: 'text'},
              },
            },
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(
              alertf_esm_t,
              assign_default()({}, args),
            )
          })
      alertf_stories_Template.displayName = 'Template'
      var Primary = bind_default()(alertf_stories_Template).call(
        alertf_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(alertf_stories_Template).call(
        alertf_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(alertf_stories_Template).call(
        alertf_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {storySource: {source: 'args => <Alertf {...args} />'}},
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {storySource: {source: 'args => <Alertf {...args} />'}},
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {storySource: {source: 'args => <Alertf {...args} />'}},
          Small.parameters,
        ))
    },
    1749: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        taggedTemplateLiteralLoose = __webpack_require__(13),
        taggedTemplateLiteralLoose_default = __webpack_require__.n(
          taggedTemplateLiteralLoose,
        ),
        styled_components_browser_esm =
          (__webpack_require__(1454), __webpack_require__(14)),
        react_router_dom = __webpack_require__(358),
        n = styled_components_browser_esm.b.div.attrs(function (t) {
          return {tabindex: t.tabIndex}
        })(
          _templateObject ||
            (_templateObject = taggedTemplateLiteralLoose_default()([
              '\n  width: 270px;\n  height: 154px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #cccccc;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #cccccc;\n  border-radius: 10px;\n  display: flex;\n  flex-flow: column;\n\n  &::first-child {\n    font: normal normal normal 36px/24px FontAwesome;\n    color: black;\n  }\n',
            ])),
        ),
        r = Object(styled_components_browser_esm.b)(react_router_dom.b)(
          _templateObject2 ||
            (_templateObject2 = taggedTemplateLiteralLoose_default()([
              '\n  margin-top: 15px;\n  text-align: center;\n  font: normal normal 300 12px/14px Roboto;\n  letter-spacing: 0px;\n  color: #ff6600;\n  text-decoration: none;\n\n  &:active,\n  &:hover {\n    outline: 0;\n    text-decoration: none;\n  }\n',
            ])),
        ),
        a = styled_components_browser_esm.b.span.attrs(function (t) {
          return {tabindex: t.tabIndex}
        })(
          _templateObject3 ||
            (_templateObject3 = taggedTemplateLiteralLoose_default()([
              '\n  margin-top: 11px;\n  text-align: center;\n  font: normal normal normal 14px/16px Roboto !important;\n  letter-spacing: 0px;\n  color: #000000;\n',
            ])),
        ),
        card_esm_c = function c(_ref) {
          var o = _ref.icon,
            e = _ref.title,
            c = _ref.onClick,
            i = _ref.link,
            l = _ref.linkTitle
          return react_default.a.createElement(
            n,
            {tabIndex: 0},
            o,
            react_default.a.createElement(a, {tabIndex: 0}, e),
            react_default.a.createElement(r, {onClick: c, to: i}, l),
          )
        }
      ;(card_esm_c.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'c',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/card/dist/card.esm.js'] = {
            name: 'c',
            docgenInfo: card_esm_c.__docgenInfo,
            path: 'packages/card/dist/card.esm.js',
          })
      var cards_esm = __webpack_require__(267),
        react_router = __webpack_require__(74),
        jsx_runtime = __webpack_require__(4),
        card_stories_CloseIcon =
          ((__webpack_exports__.default = {
            title: 'components/Card',
            component: card_esm_c,
            argTypes: {},
          }),
          function CloseIcon(props) {
            return Object(jsx_runtime.jsx)(
              'svg',
              assign_default()(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: 0,
                  viewBox: '0 0 512 512',
                  height: '1em',
                  width: '1em',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                props,
                {
                  children: Object(jsx_runtime.jsx)('path', {
                    d: 'M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z',
                    stroke: 'none',
                  }),
                },
              ),
            )
          })
      card_stories_CloseIcon.displayName = 'CloseIcon'
      var card_stories_Template = function Template(args) {
        var cleanData = function cleanData() {
          console.log('cleaning data')
        }
        return Object(jsx_runtime.jsx)(react_router_dom.a, {
          children: Object(jsx_runtime.jsx)(react_router.c, {
            children: Object(jsx_runtime.jsx)(react_router.a, {
              path: '/',
              children: Object(jsx_runtime.jsx)(cards_esm.a, {
                title: 'title cards container',
                classExtra: 'extraClass',
                children: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [
                    Object(jsx_runtime.jsx)(card_esm_c, {
                      icon: Object(jsx_runtime.jsx)(card_stories_CloseIcon, {
                        className: 'card__icon',
                      }),
                      title: 'Consulta de Riesgos',
                      link: '/Consulta',
                      linkTitle: 'SELECCIONAR',
                      onClick: cleanData,
                    }),
                    Object(jsx_runtime.jsx)(card_esm_c, {
                      icon: Object(jsx_runtime.jsx)(card_stories_CloseIcon, {
                        className: 'card__icon',
                      }),
                      title: 'Reporte de Marcación de Riesgo',
                      link: '/Reporte',
                      linkTitle: 'SELECCIONAR',
                      onClick: cleanData,
                    }),
                  ],
                }),
              }),
            }),
          }),
        })
      }
      card_stories_Template.displayName = 'Template'
      var Primary = bind_default()(card_stories_Template).call(
        card_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(card_stories_Template).call(
        card_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(card_stories_Template).call(
        card_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const cleanData = () => {\n    console.log('cleaning data')\n  }\n  return (\n    <HashRouter>\n      <Switch>\n        <Route path=\"/\">\n          <Cards title=\"title cards container\" classExtra=\"extraClass\">\n            <>\n              <Card\n                icon={<CloseIcon className=\"card__icon\" />}\n                title={'Consulta de Riesgos'}\n                link={'/Consulta'}\n                linkTitle={'SELECCIONAR'}\n                onClick={cleanData}\n              />\n              <Card\n                icon={<CloseIcon className=\"card__icon\" />}\n                title={'Reporte de Marcación de Riesgo'}\n                link={'/Reporte'}\n                linkTitle={'SELECCIONAR'}\n                onClick={cleanData}\n              />\n            </>\n          </Cards>\n        </Route>\n      </Switch>\n    </HashRouter>\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const cleanData = () => {\n    console.log('cleaning data')\n  }\n  return (\n    <HashRouter>\n      <Switch>\n        <Route path=\"/\">\n          <Cards title=\"title cards container\" classExtra=\"extraClass\">\n            <>\n              <Card\n                icon={<CloseIcon className=\"card__icon\" />}\n                title={'Consulta de Riesgos'}\n                link={'/Consulta'}\n                linkTitle={'SELECCIONAR'}\n                onClick={cleanData}\n              />\n              <Card\n                icon={<CloseIcon className=\"card__icon\" />}\n                title={'Reporte de Marcación de Riesgo'}\n                link={'/Reporte'}\n                linkTitle={'SELECCIONAR'}\n                onClick={cleanData}\n              />\n            </>\n          </Cards>\n        </Route>\n      </Switch>\n    </HashRouter>\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const cleanData = () => {\n    console.log('cleaning data')\n  }\n  return (\n    <HashRouter>\n      <Switch>\n        <Route path=\"/\">\n          <Cards title=\"title cards container\" classExtra=\"extraClass\">\n            <>\n              <Card\n                icon={<CloseIcon className=\"card__icon\" />}\n                title={'Consulta de Riesgos'}\n                link={'/Consulta'}\n                linkTitle={'SELECCIONAR'}\n                onClick={cleanData}\n              />\n              <Card\n                icon={<CloseIcon className=\"card__icon\" />}\n                title={'Reporte de Marcación de Riesgo'}\n                link={'/Reporte'}\n                linkTitle={'SELECCIONAR'}\n                onClick={cleanData}\n              />\n            </>\n          </Cards>\n        </Route>\n      </Switch>\n    </HashRouter>\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1750: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        slicedToArray = __webpack_require__(64),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        taggedTemplateLiteralLoose = __webpack_require__(13),
        taggedTemplateLiteralLoose_default = __webpack_require__.n(
          taggedTemplateLiteralLoose,
        ),
        DatePicker =
          (__webpack_require__(15),
          __webpack_require__(126),
          __webpack_require__(1472),
          __webpack_require__(909)),
        lib = __webpack_require__(924),
        styled_components_browser_esm = __webpack_require__(14)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      var a = styled_components_browser_esm.b.div(
          _templateObject ||
            (_templateObject = taggedTemplateLiteralLoose_default()([
              '\n  margin-right: 30px;\n\n  text-align: right;\n  flex: 0.376;\n  transform: translateX(1px);\n  position: relative;\n  justify-content: end;\n\n  @media screen and (device-width: 767px) {\n  }\n  @media screen and (max-width: 766px) {\n    transform: translateX(-59%);\n\n    ',
              '\n    margin: 0px auto;\n  }\n',
            ])),
          function (_ref) {
            return (
              _ref.condition &&
              Object(styled_components_browser_esm.a)(
                _templateObject2 ||
                  (_templateObject2 = taggedTemplateLiteralLoose_default()([
                    '\n        transform: translateX(-97%);\n      ',
                  ])),
              )
            )
          },
        ),
        n = styled_components_browser_esm.b.div.attrs(function (e) {
          return {className: e.className}
        })(
          _templateObject3 ||
            (_templateObject3 = taggedTemplateLiteralLoose_default()([
              '\n  display: flex;\n  align-items: flex-start;\n\n  width: 100%;\n  justify-content: center;\n\n  @media screen and (max-width: 766px) {\n    flex-flow: column;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n',
            ])),
        ),
        s = styled_components_browser_esm.b.p(
          _templateObject4 ||
            (_templateObject4 = taggedTemplateLiteralLoose_default()([
              '\n  &&& {\n    text-align: right;\n    margin-top: 10px;\n    color: #212529;\n    font: normal normal normal 14px/24px Roboto;\n  }\n',
            ])),
        ),
        p = styled_components_browser_esm.b.div(
          _templateObject5 ||
            (_templateObject5 = taggedTemplateLiteralLoose_default()([
              '\n  &&& {\n    padding-left: 12px;\n    flex: 0.518;\n    transform: translateX(1%);\n    @media screen and (device-width: 766px) {\n      transform: translateX(-1.6%);\n      margin-bottom: 15px;\n    }\n    @media screen and (min-width: 767px) {\n      margin-bottom: 15px;\n    }\n  }\n',
            ])),
        )
      !(function (e, t) {
        void 0 === t && (t = {})
        var o = t.insertAt
        if ('undefined' != typeof document) {
          var r = document.head || document.getElementsByTagName('head')[0],
            i = document.createElement('style')
          ;(i.type = 'text/css'),
            'top' === o && r.firstChild
              ? r.insertBefore(i, r.firstChild)
              : r.appendChild(i),
            i.styleSheet
              ? (i.styleSheet.cssText = e)
              : i.appendChild(document.createTextNode(e))
        }
      })(
        '.arrow{left:50%!important}#popover-positioned-bottom{left:-958%!important;top:24.5px!important}@media screen and (max-width:766px){#popover-positioned-bottom{left:-958%!important;top:24.5px!important}}.popover-content{width:240px!important}',
        {insertAt: 'top'},
      )
      var date_esm_l = (function (_e$Component) {
        inherits_default()(l, _e$Component)
        var _super = _createSuper(l)
        function l() {
          var _this
          return (
            classCallCheck_default()(this, l),
            ((_this = _super.apply(this, arguments)).dayPickerStrings = {
              months: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre',
              ],
              shortMonths: [
                'Ene',
                'Feb',
                'Mar',
                'Abr',
                'May',
                'Jun',
                'Jul',
                'Ago',
                'Sept',
                'Oct',
                'Nov',
                'Dic',
              ],
              days: [
                'Domingo',
                'Lunes',
                'Martes',
                'Miércoles',
                'Jueves',
                'Viernes',
                'Sábado',
              ],
              shortDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
              goToToday: 'Hoy',
              prevMonthAriaLabel: 'Mes anterior',
              nextMonthAriaLabel: 'Siguiente mes',
              prevYearAriaLabel: 'Año anterior',
              nextYearAriaLabel: 'Siguiente año',
              isRequiredErrorMessage: 'Campo requerido',
              invalidInputErrorMessage: 'Formato de fecha invalida',
            }),
            (_this.setFormat = function (e) {
              if (void 0 === e) return ''
              var t =
                  1 === (e.getMonth() + 1).toString().length
                    ? '0' + (e.getMonth() + 1)
                    : e.getMonth() + 1,
                o =
                  1 === e.getDate().toString().length
                    ? '0' + e.getDate()
                    : e.getDate(),
                r = e.getFullYear()
              return 'object' == typeof e ? o + '/' + t + '/' + r : ''
            }),
            _this
          )
        }
        return (
          createClass_default()(l, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                Object(lib.a)(void 0, {disableWarnings: !0})
              },
            },
            {
              key: 'render',
              value: function render() {
                var o,
                  _this2 = this
                return react_default.a.createElement(
                  n,
                  {
                    className:
                      null !== (o = this.props.classContainer) && void 0 !== o
                        ? o
                        : '',
                  },
                  '' !== this.props.label &&
                    this.props.label &&
                    react_default.a.createElement(
                      a,
                      {
                        condition: this.props.condition,
                        className: this.props.tooltip && 'zIndex',
                      },
                      react_default.a.createElement(s, null, this.props.label),
                      this.props.tooltip && this.props.tooltip(),
                    ),
                  react_default.a.createElement(
                    p,
                    null,
                    react_default.a.createElement(DatePicker.DatePicker, {
                      isRequired: !1,
                      strings: this.dayPickerStrings,
                      minDate: this.props.minDateSelector,
                      maxDate: this.props.maxDateSelector,
                      value:
                        null !== this.props.Date
                          ? this.props.Date.toDate()
                          : null,
                      onSelectDate: function onSelectDate(e) {
                        return _this2.props.handleChange(e)
                      },
                      formatDate: function formatDate(e) {
                        return _this2.setFormat(e)
                      },
                      allowTextInput: !1,
                      placeholder: 'DD/MM/YYYY',
                      isMonthPickerVisible: !0,
                      showGoToToday: !1,
                      className: 'datePickerFabric',
                      disabled: this.props.disabled,
                    }),
                  ),
                )
              },
            },
          ]),
          l
        )
      })(react_default.a.Component)
      ;(date_esm_l.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'l',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/date/dist/date.esm.js'] = {
            name: 'l',
            docgenInfo: date_esm_l.__docgenInfo,
            path: 'packages/date/dist/date.esm.js',
          })
      var moment = __webpack_require__(5),
        moment_default = __webpack_require__.n(moment),
        jsx_runtime = __webpack_require__(4),
        date_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/Date',
            component: date_esm_l,
            argTypes: {
              label: {
                name: 'label',
                type: {name: 'string', required: !1},
                defaultValue: 'hello im label',
                description: 'change the label',
                table: {
                  type: {summary: 'string'},
                  defaultValue: {summary: 'hello im label'},
                },
                control: {type: 'text'},
              },
            },
          }),
          function Template(args) {
            var _useState = Object(react.useState)(null),
              _useState2 = slicedToArray_default()(_useState, 2),
              date = _useState2[0],
              setdate = _useState2[1]
            return Object(jsx_runtime.jsx)(
              date_esm_l,
              assign_default()(
                {
                  minDateSelector: null,
                  maxDateSelector: null,
                  disabled: !1,
                  Date: date,
                  handleChange: function dateHandler(value) {
                    setdate(moment_default()(value))
                  },
                },
                args,
              ),
            )
          })
      date_stories_Template.displayName = 'Template'
      var Primary = bind_default()(date_stories_Template).call(
        date_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(date_stories_Template).call(
        date_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(date_stories_Template).call(
        date_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  const [date, setdate] = useState(null)\n  const dateHandler = value => {\n    setdate(moment(value))\n  }\n  return (\n    <Date\n      minDateSelector={null}\n      maxDateSelector={null}\n      disabled={false}\n      Date={date}\n      handleChange={dateHandler}\n      {...args}\n    />\n  )\n}',
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  const [date, setdate] = useState(null)\n  const dateHandler = value => {\n    setdate(moment(value))\n  }\n  return (\n    <Date\n      minDateSelector={null}\n      maxDateSelector={null}\n      disabled={false}\n      Date={date}\n      handleChange={dateHandler}\n      {...args}\n    />\n  )\n}',
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  const [date, setdate] = useState(null)\n  const dateHandler = value => {\n    setdate(moment(value))\n  }\n  return (\n    <Date\n      minDateSelector={null}\n      maxDateSelector={null}\n      disabled={false}\n      Date={date}\n      handleChange={dateHandler}\n      {...args}\n    />\n  )\n}',
            },
          },
          Small.parameters,
        ))
    },
    1751: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      var dots_esm_e = (function (_t$Component) {
          inherits_default()(e, _t$Component)
          var _super = _createSuper(e)
          function e() {
            return (
              classCallCheck_default()(this, e), _super.apply(this, arguments)
            )
          }
          return (
            createClass_default()(e, [
              {
                key: 'render',
                value: function render() {
                  var _e = 'dot dot-position-' + this.props.position
                  return react_default.a.createElement('div', {className: _e})
                },
              },
            ]),
            e
          )
        })(react_default.a.Component),
        dots_esm_i = (function (_t$Component2) {
          inherits_default()(i, _t$Component2)
          var _super2 = _createSuper(i)
          function i() {
            return (
              classCallCheck_default()(this, i), _super2.apply(this, arguments)
            )
          }
          return (
            createClass_default()(i, [
              {
                key: 'render',
                value: function render() {
                  var _this = this,
                    e = this.props.clickable
                      ? 'dot-holder dot-holder-clickable'
                      : 'dot-holder',
                    _i = this.props.position
                  return react_default.a.createElement('div', {
                    role: 'button',
                    tabIndex: 0,
                    'data-testid': 'dot-holder',
                    'aria-label': 'dot-holder',
                    className: e,
                    onClick: function onClick(t) {
                      t.stopPropagation(), _this.props.updatePosition(t, _i)
                    },
                    onKeyPress: function onKeyPress(t) {
                      t.stopPropagation(), _this.props.updatePosition(t, _i)
                    },
                  })
                },
              },
            ]),
            i
          )
        })(react_default.a.Component)
      !(function (t, e) {
        void 0 === e && (e = {})
        var i = e.insertAt
        if ('undefined' != typeof document) {
          var o = document.head || document.getElementsByTagName('head')[0],
            s = document.createElement('style')
          ;(s.type = 'text/css'),
            'top' === i && o.firstChild
              ? o.insertBefore(s, o.firstChild)
              : o.appendChild(s),
            s.styleSheet
              ? (s.styleSheet.cssText = t)
              : s.appendChild(document.createTextNode(t))
        }
      })(
        '.DotsContainer{margin-top:15px;text-align:center;width:100%}.dot-holders{display:inline-flex}.dot-holder:last-child{margin-right:0}.slider{display:inline-flex;position:relative;text-align:center}.slider-small .dot-holder{background:#ffae7f 0 0 no-repeat padding-box;border-radius:50%;height:7px;margin-right:10.01px;width:7px}.slider-small .dot-holder:last-child{margin-right:0}.slider-small .dot-holder-clickable{cursor:pointer}.slider-small .dot{background:#f60 0 0 no-repeat padding-box;border:0 solid #f60;border-radius:10px;bottom:0;height:7px;left:0;margin:auto;opacity:1;position:absolute;top:0;transition:left .2s ease-in;width:7px}.slider-small .dot-position-1{left:17px}.slider-small .dot-position-2{left:34px}.slider-small .dot-position-3{left:51px}.slider-small .dot-position-4{left:68px}.slider-small .dot-position-5{left:85px}.slider-small .dot-position-6{left:102px}.slider-small .dot-position-7{left:119px}.slider-small .dot-position-8{left:136px}.slider-small .dot-position-9{left:153px}.slider-small .dot-position-10{left:170px}.slider-small .dot-position-11{left:187px}.slider-small .dot-position-12{left:204px}.slider-small .dot-position-13{left:221px}.slider-small .dot-position-14{left:238px}.slider-medium .dot-holder{background:#ffae7f 0 0 no-repeat padding-box;border-radius:50%;height:10px;margin-right:14.3px;width:10px}.slider-medium .dot-holder:last-child{margin-right:0}.slider-medium .dot-holder-clickable{cursor:pointer}.slider-medium .dot{background:#f60 0 0 no-repeat padding-box;border:0 solid #f60;border-radius:10px;bottom:0;height:7px;left:0;margin:auto;opacity:1;position:absolute;top:0;transition:left .2s ease-in;width:7px}.slider-medium .dot-position-1{left:17px}.slider-medium .dot-position-2{left:34px}.slider-medium .dot-position-3{left:51px}.slider-medium .dot-position-4{left:68px}.slider-medium .dot-position-5{left:85px}.slider-medium .dot-position-6{left:102px}.slider-medium .dot-position-7{left:119px}.slider-medium .dot-position-8{left:136px}.slider-medium .dot-position-9{left:153px}.slider-medium .dot-position-10{left:170px}.slider-medium .dot-position-11{left:187px}.slider-medium .dot-position-12{left:204px}.slider-medium .dot-position-13{left:221px}.slider-medium .dot-position-14{left:238px}.slider-large .dot-holder{background:#ffae7f 0 0 no-repeat padding-box;border-radius:50%;height:13px;margin-right:18.59px;width:13px}.slider-large .dot-holder:last-child{margin-right:0}.slider-large .dot-holder-clickable{cursor:pointer}.slider-large .dot{background:#f60 0 0 no-repeat padding-box;border:0 solid #f60;border-radius:10px;bottom:0;height:7px;left:0;margin:auto;opacity:1;position:absolute;top:0;transition:left .2s ease-in;width:7px}.slider-large .dot-position-1{left:17px}.slider-large .dot-position-2{left:34px}.slider-large .dot-position-3{left:51px}.slider-large .dot-position-4{left:68px}.slider-large .dot-position-5{left:85px}.slider-large .dot-position-6{left:102px}.slider-large .dot-position-7{left:119px}.slider-large .dot-position-8{left:136px}.slider-large .dot-position-9{left:153px}.slider-large .dot-position-10{left:170px}.slider-large .dot-position-11{left:187px}.slider-large .dot-position-12{left:204px}.slider-large .dot-position-13{left:221px}.slider-large .dot-position-14{left:238px}',
        {insertAt: 'top'},
      )
      var dots_esm_o = (function (_t$Component3) {
        inherits_default()(o, _t$Component3)
        var _super3 = _createSuper(o)
        function o() {
          var _this2
          return (
            classCallCheck_default()(this, o),
            ((_this2 = _super3.apply(this, arguments)).updatePosition =
              function (t, e) {
                _this2.props.clickable &&
                  (_this2.setState({position: e}),
                  _this2.props.positionChangeListener &&
                    _this2.props.positionChangeListener(t, e))
              }),
            (_this2.generateDotHolders = function () {
              for (var e = [], _o3 = 0; _o3 < _this2.props.length; _o3++)
                e.push(
                  react_default.a.createElement(dots_esm_i, {
                    key: _o3,
                    position: _o3,
                    clickable: _this2.props.clickable,
                    updatePosition: _this2.updatePosition,
                  }),
                )
              return e
            }),
            (_this2.state = {position: _this2.props.position}),
            _this2
          )
        }
        return (
          createClass_default()(o, [
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(t, e) {
                this.props.position !== t.position &&
                  this.setState({position: this.props.position})
              },
            },
            {
              key: 'render',
              value: function render() {
                var i = this.generateDotHolders(),
                  _o2 = 'slider slider-' + this.props.size
                return react_default.a.createElement(
                  'div',
                  {className: _o2},
                  react_default.a.createElement(
                    'div',
                    {className: 'dot-holders'},
                    i,
                  ),
                  react_default.a.createElement(dots_esm_e, {
                    position: this.state.position,
                  }),
                )
              },
            },
          ]),
          o
        )
      })(react_default.a.Component)
      ;(dots_esm_o.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'o',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/dots/dist/dots.esm.js'] = {
            name: 'o',
            docgenInfo: dots_esm_o.__docgenInfo,
            path: 'packages/dots/dist/dots.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        dots_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/Dots',
            component: dots_esm_o,
            argTypes: {
              length: {
                name: 'length',
                type: {name: 'number', required: !0},
                defaultValue: 1,
                description: 'the height of the dots',
                table: {type: {summary: 'number'}, defaultValue: {summary: 1}},
                control: {type: 'number', min: 1, max: 14},
              },
              size: {
                name: 'size',
                type: {name: 'enum', required: !0},
                defaultValue: 'small',
                description: 'the size of the doots',
                table: {type: {summary: 'enum'}, defaultValue: {summary: !1}},
                control: {
                  type: 'select',
                  options: ['small', 'medium', 'large'],
                },
              },
              clickable: {
                name: 'clickable',
                type: {name: 'boolean', required: !0},
                defaultValue: !0,
                description: 'make the dots disabled or not',
                table: {
                  type: {summary: 'disabling dots'},
                  defaultValue: {summary: !0},
                },
                control: {type: 'boolean'},
              },
            },
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)('div', {
              className: 'DotsContainer',
              children: Object(jsx_runtime.jsx)(
                dots_esm_o,
                assign_default()(
                  {
                    positionChangeListener: function positionChangeListener() {
                      console.log('hey do somenthing we i change position')
                    },
                  },
                  args,
                ),
              ),
            })
          })
      dots_stories_Template.displayName = 'Template'
      var Primary = bind_default()(dots_stories_Template).call(
        dots_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(dots_stories_Template).call(
        dots_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(dots_stories_Template).call(
        dots_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  return (\n    <div className="DotsContainer">\n      <SliderTable\n        positionChangeListener={() => {\n          console.log(\'hey do somenthing we i change position\')\n        }}\n        {...args}\n      />\n    </div>\n  )\n}',
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  return (\n    <div className="DotsContainer">\n      <SliderTable\n        positionChangeListener={() => {\n          console.log(\'hey do somenthing we i change position\')\n        }}\n        {...args}\n      />\n    </div>\n  )\n}',
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  return (\n    <div className="DotsContainer">\n      <SliderTable\n        positionChangeListener={() => {\n          console.log(\'hey do somenthing we i change position\')\n        }}\n        {...args}\n      />\n    </div>\n  )\n}',
            },
          },
          Small.parameters,
        ))
    },
    1752: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        slicedToArray = __webpack_require__(64),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        index_of = (__webpack_require__(12), __webpack_require__(95)),
        index_of_default = __webpack_require__.n(index_of),
        get_own_property_symbols = __webpack_require__(78),
        get_own_property_symbols_default = __webpack_require__.n(
          get_own_property_symbols,
        ),
        for_each = __webpack_require__(150),
        for_each_default = __webpack_require__.n(for_each),
        from = __webpack_require__(359),
        from_default = __webpack_require__.n(from),
        map = __webpack_require__(83),
        map_default = __webpack_require__.n(map)
      function dragAndDropFile_esm_l(e, t) {
        var l = {}
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            index_of_default()(t).call(t, a) < 0 &&
            (l[a] = e[a])
        if (
          null != e &&
          'function' == typeof get_own_property_symbols_default.a
        ) {
          var n = 0
          for (a = get_own_property_symbols_default()(e); n < a.length; n++)
            index_of_default()(t).call(t, a[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
              (l[a[n]] = e[a[n]])
        }
        return l
      }
      !(function (e, t) {
        void 0 === t && (t = {})
        var l = t.insertAt
        if ('undefined' != typeof document) {
          var a = document.head || document.getElementsByTagName('head')[0],
            n = document.createElement('style')
          ;(n.type = 'text/css'),
            'top' === l && a.firstChild
              ? a.insertBefore(n, a.firstChild)
              : a.appendChild(n),
            n.styleSheet
              ? (n.styleSheet.cssText = e)
              : n.appendChild(document.createTextNode(e))
        }
      })(
        '.draganddropfile{transform:translateX(-3.2%)}.draganddropfile--left{padding-left:0;padding-right:21px}.draganddropfile--left svg{height:28px;width:28px}.draganddropfile__btnDelete{float:right!important}.draganddropfile--right{float:left}.draganddropfile__zone{background-color:#fff;border:1px dashed #ccc;color:#b2b2b2;font:italic normal 300 14px/16px Roboto;height:76px;letter-spacing:0;text-align:center;vertical-align:middle;width:265px}.draganddropfile__zone p{margin-top:25px}.draganddropfile__file{height:76px;opacity:0;position:absolute;transform:translateX(-6px);width:265px;z-index:999}.draganddropfile__file--hiden{display:none!important}.draganddropfile__btn{float:right}.draganddropfile__content{width:265px}.draganddropfile__content span,.draganddropfile__content svg{color:#f60;font:normal normal 300 14px/16px Roboto}.draganddropfile__svgContainer{color:#81ba00;float:right;height:28px;width:28px}',
        {insertAt: 'top'},
      )
      var dragAndDropFile_esm_a = function a(t) {
          t.className
          var _t$titleId = t.titleId,
            n = void 0 === _t$titleId ? '' : _t$titleId,
            r = dragAndDropFile_esm_l(t, ['className', 'titleId'])
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 384 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-labelledby': n,
              },
              r,
            ),
            react_default.a.createElement('path', {
              d: 'M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z',
              stroke: 'none',
            }),
          )
        },
        dragAndDropFile_esm_n = function n(t) {
          t.className
          var _t$titleId2 = t.titleId,
            n = void 0 === _t$titleId2 ? '' : _t$titleId2,
            r = dragAndDropFile_esm_l(t, ['className', 'titleId'])
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: '0',
                viewBox: '0 0 512 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-labelledby': n,
              },
              r,
            ),
            react_default.a.createElement('path', {
              d: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
            }),
          )
        },
        dragAndDropFile_esm_r = function r(_ref) {
          var _ref$callbackFiles = _ref.callbackFiles,
            l = void 0 === _ref$callbackFiles ? null : _ref$callbackFiles,
            _ref$multiple = _ref.multiple,
            r = void 0 !== _ref$multiple && _ref$multiple,
            _ref$accept = _ref.accept,
            o = void 0 === _ref$accept ? null : _ref$accept,
            _ref$selectTitle = _ref.selectTitle,
            d =
              void 0 === _ref$selectTitle
                ? 'Seleccionar archivo'
                : _ref$selectTitle,
            _ref$eraseTitle = _ref.eraseTitle,
            i = void 0 === _ref$eraseTitle ? 'Borrar' : _ref$eraseTitle,
            _t = Object(react.useState)(null),
            _t2 = slicedToArray_default()(_t, 2),
            c = _t2[0],
            s = _t2[1]
          return react_default.a.createElement(
            'div',
            {className: 'col-xs-12 row pl-0 pr-0 draganddropfile'},
            react_default.a.createElement(
              'div',
              {className: 'col-xs-12 col-sm-5 draganddropfile--left'},
              null === c
                ? react_default.a.createElement('input', {
                    className: 'btn-orange-v2 draganddropfile__btn',
                    type: 'button',
                    value: d,
                    onClick: function onClick() {
                      var e = document.getElementById('fileDnD')
                      ;(e.type = 'file'), e.click()
                    },
                  })
                : react_default.a.createElement(
                    'div',
                    {className: 'draganddropfile__svgContainer'},
                    react_default.a.createElement(dragAndDropFile_esm_a, null),
                  ),
            ),
            react_default.a.createElement(
              'div',
              {className: 'col-xs-12 col-sm-6 draganddropfile--right'},
              react_default.a.createElement(
                'div',
                {className: 'draganddropfile__content'},
                react_default.a.createElement('input', {
                  type: 'file',
                  id: 'fileDnD',
                  multiple: r || !1,
                  accept: o || '*',
                  className:
                    'draganddropfile__file ' +
                    (null != c ? 'draganddropfile__file--hiden' : ''),
                  name: 'fileDnD',
                  'data-testid': 'fileDnD',
                  onChange: function onChange() {
                    var _context,
                      e = [],
                      t = document.getElementById('fileDnD')
                    for_each_default()(
                      (_context = from_default()(t.files)),
                    ).call(_context, function (t) {
                      return e.push(t.name)
                    }),
                      s(e),
                      l && l(t.files)
                  },
                }),
                null === c
                  ? react_default.a.createElement(
                      react_default.a.Fragment,
                      null,
                      react_default.a.createElement(
                        'div',
                        {className: 'draganddropfile__zone'},
                        react_default.a.createElement(
                          'p',
                          null,
                          'O arrastre el archivo aquí',
                        ),
                      ),
                    )
                  : react_default.a.createElement(
                      react_default.a.Fragment,
                      null,
                      react_default.a.createElement(
                        'div',
                        {className: 'col-xs-12 pl-0 pr-0'},
                        null == c
                          ? void 0
                          : map_default()(c).call(c, function (t, l) {
                              return react_default.a.createElement(
                                'div',
                                {
                                  className: 'row col-xs-12 col-sm-6 col-md-7',
                                  key: l,
                                },
                                react_default.a.createElement(
                                  dragAndDropFile_esm_n,
                                  null,
                                ),
                                react_default.a.createElement('span', null, t),
                              )
                            }),
                        react_default.a.createElement('input', {
                          className:
                            'btn-orange-v2 draganddropfile__btnDelete col-xs-12 col-sm-6 col-md-5',
                          type: 'button',
                          value: i,
                          onClick: function onClick() {
                            s(null),
                              (document.getElementById('fileDnD').value = '')
                          },
                        }),
                      ),
                    ),
              ),
            ),
          )
        }
      ;(dragAndDropFile_esm_r.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'r',
        props: {
          callbackFiles: {
            defaultValue: {value: 'null', computed: !1},
            required: !1,
          },
          multiple: {defaultValue: {value: '!1', computed: !1}, required: !1},
          accept: {defaultValue: {value: 'null', computed: !1}, required: !1},
          selectTitle: {
            defaultValue: {value: '"Seleccionar archivo"', computed: !1},
            required: !1,
          },
          eraseTitle: {
            defaultValue: {value: '"Borrar"', computed: !1},
            required: !1,
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'packages/dragAndDropFile/dist/dragAndDropFile.esm.js'
          ] = {
            name: 'r',
            docgenInfo: dragAndDropFile_esm_r.__docgenInfo,
            path: 'packages/dragAndDropFile/dist/dragAndDropFile.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        dragAndDropFile_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/DragDropFile',
            component: dragAndDropFile_esm_r,
            argTypes: {},
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(dragAndDropFile_esm_r, {
              accept: '.txt, text/plain',
              multiple: !1,
              callbackFiles: function callbackFiles(value) {
                value.length > 0 && console.log('papa')
              },
            })
          })
      dragAndDropFile_stories_Template.displayName = 'Template'
      var Primary = bind_default()(dragAndDropFile_stories_Template).call(
        dragAndDropFile_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(dragAndDropFile_stories_Template).call(
        dragAndDropFile_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(dragAndDropFile_stories_Template).call(
        dragAndDropFile_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  return (\n    <DragDropFile\n      accept=".txt, text/plain"\n      multiple={false}\n      callbackFiles={value => {\n        if (value.length > 0) {\n          console.log(\'papa\')\n        }\n      }}\n    />\n  )\n}',
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  return (\n    <DragDropFile\n      accept=".txt, text/plain"\n      multiple={false}\n      callbackFiles={value => {\n        if (value.length > 0) {\n          console.log(\'papa\')\n        }\n      }}\n    />\n  )\n}',
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                'args => {\n  return (\n    <DragDropFile\n      accept=".txt, text/plain"\n      multiple={false}\n      callbackFiles={value => {\n        if (value.length > 0) {\n          console.log(\'papa\')\n        }\n      }}\n    />\n  )\n}',
            },
          },
          Small.parameters,
        ))
    },
    1753: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var objectWithoutProperties = __webpack_require__(265),
        objectWithoutProperties_default = __webpack_require__.n(
          objectWithoutProperties,
        ),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        is_array = (__webpack_require__(12), __webpack_require__(910)),
        is_array_default = __webpack_require__.n(is_array),
        map = __webpack_require__(83),
        map_default = __webpack_require__.n(map)
      !(function (e, t) {
        void 0 === t && (t = {})
        var l = t.insertAt
        if ('undefined' != typeof document) {
          var n = document.head || document.getElementsByTagName('head')[0],
            o = document.createElement('style')
          ;(o.type = 'text/css'),
            'top' === l && n.firstChild
              ? n.insertBefore(o, n.firstChild)
              : n.appendChild(o),
            o.styleSheet
              ? (o.styleSheet.cssText = e)
              : o.appendChild(document.createTextNode(e))
        }
      })(
        '.filelist{margin-bottom:22px}.filelist__header{background:#81ba00 0 0 no-repeat padding-box;border-radius:5px 5px 0 0;color:#fff;font:normal normal normal 14px/16px Roboto;height:37px;letter-spacing:0;text-align:center}.filelist__header div{padding:10px}.filelist__content{background:#f9f9f9 0 0 no-repeat padding-box;border:1px solid #ccc;border-radius:0 0 5px 5px;text-align:left}.filelist__content div{color:#777;font:normal normal normal 14px/16px Roboto;height:37px;letter-spacing:0;padding:10px}.filelist__content__dashedLine{border-bottom:1px dashed #ccc}.filelist__content svg{color:#f60;height:20px;width:20px}.filelist__content a,.filelist__content a:hover,.filelist__content a:visited{color:#777;font:normal normal normal 14px/16px Roboto;letter-spacing:0}',
        {insertAt: 'top'},
      )
      var fileList_esm_t = function t(_ref) {
        var _ref$pdfs = _ref.pdfs,
          t = void 0 === _ref$pdfs ? null : _ref$pdfs,
          l = _ref.title
        return react_default.a.createElement(
          'div',
          {className: 'filelist'},
          react_default.a.createElement(
            'div',
            {className: 'filelist__header'},
            react_default.a.createElement('div', null, l),
          ),
          t &&
            is_array_default()(t) &&
            t.length > 0 &&
            react_default.a.createElement(
              'div',
              {className: 'filelist__content col-xs-12'},
              null == t
                ? void 0
                : map_default()(t).call(t, function (_ref2, o) {
                    var t = _ref2.icons,
                      l = _ref2.name,
                      n = _ref2.pdf
                    return react_default.a.createElement(
                      'div',
                      {
                        key: l + '_' + o,
                        className:
                          'col-sm-12 pl-0 pr-0 ' +
                          (0 === o ? 'filelist__content__dashedLine' : ''),
                      },
                      t,
                      react_default.a.createElement(
                        'a',
                        {href: n, target: '_blank', rel: 'noreferrer'},
                        l,
                      ),
                    )
                  }),
            ),
        )
      }
      ;(fileList_esm_t.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 't',
        props: {
          pdfs: {defaultValue: {value: 'null', computed: !1}, required: !1},
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/fileList/dist/fileList.esm.js'] = {
            name: 't',
            docgenInfo: fileList_esm_t.__docgenInfo,
            path: 'packages/fileList/dist/fileList.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        _excluded = ['className', 'title', 'titleId'],
        _excluded2 = ['className', 'title', 'titleId'],
        fileList_stories_LeftArrow = function LeftArrow(_ref) {
          var _ref$className = _ref.className,
            className = void 0 === _ref$className ? '' : _ref$className,
            title = _ref.title,
            titleId = _ref.titleId,
            props = objectWithoutProperties_default()(_ref, _excluded)
          return Object(jsx_runtime.jsxs)(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                className: className,
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-labelledby': titleId,
              },
              props,
              {
                children: [
                  title
                    ? Object(jsx_runtime.jsx)('title', {
                        id: titleId,
                        children: title,
                      })
                    : null,
                  Object(jsx_runtime.jsx)('path', {
                    d: 'M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z',
                    stroke: 'none',
                  }),
                ],
              },
            ),
          )
        }
      fileList_stories_LeftArrow.displayName = 'LeftArrow'
      var fileList_stories_RightArrow = function RightArrow(_ref2) {
        _ref2.className
        var title = _ref2.title,
          titleId = _ref2.titleId,
          props = objectWithoutProperties_default()(_ref2, _excluded2)
        return Object(jsx_runtime.jsxs)(
          'svg',
          assign_default()(
            {
              stroke: 'currentColor',
              fill: 'currentColor',
              strokeWidth: 0,
              viewBox: '0 0 512 512',
              className: 'prefix__paginadorArrowright',
              height: '1em',
              width: '1em',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': titleId,
            },
            props,
            {
              children: [
                title
                  ? Object(jsx_runtime.jsx)('title', {
                      id: titleId,
                      children: title,
                    })
                  : null,
                Object(jsx_runtime.jsx)('path', {
                  d: 'M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z',
                  stroke: 'none',
                }),
              ],
            },
          ),
        )
      }
      fileList_stories_RightArrow.displayName = 'RightArrow'
      __webpack_exports__.default = {
        title: 'components/fileList',
        component: fileList_esm_t,
        argTypes: {},
      }
      var fileList_stories_Template = function Template(args) {
        var pdfs = [
          {
            name: 'resolucion X',
            pdf: 'https://www.orimi.com/pdf-test.pdf',
            icons: Object(jsx_runtime.jsx)(fileList_stories_LeftArrow, {}),
          },
          {
            name: 'resolucion Y',
            pdf: 'https://www.orimi.com/pdf-test.pdf',
            icons: Object(jsx_runtime.jsx)(fileList_stories_RightArrow, {}),
          },
        ]
        return Object(jsx_runtime.jsx)('div', {
          className: 'DotsContainer',
          children: Object(jsx_runtime.jsx)(fileList_esm_t, {
            pdfs: pdfs,
            title: 'hector',
          }),
        })
      }
      fileList_stories_Template.displayName = 'Template'
      var Primary = bind_default()(fileList_stories_Template).call(
        fileList_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(fileList_stories_Template).call(
        fileList_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(fileList_stories_Template).call(
        fileList_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const pdfs = [\n    {\n      name: 'resolucion X',\n      pdf: 'https://www.orimi.com/pdf-test.pdf',\n      icons: <LeftArrow />,\n    },\n    {\n      name: 'resolucion Y',\n      pdf: 'https://www.orimi.com/pdf-test.pdf',\n      icons: <RightArrow />,\n    },\n  ]\n  return (\n    <div className=\"DotsContainer\">\n      <FileList pdfs={pdfs} title=\"hector\" />\n    </div>\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const pdfs = [\n    {\n      name: 'resolucion X',\n      pdf: 'https://www.orimi.com/pdf-test.pdf',\n      icons: <LeftArrow />,\n    },\n    {\n      name: 'resolucion Y',\n      pdf: 'https://www.orimi.com/pdf-test.pdf',\n      icons: <RightArrow />,\n    },\n  ]\n  return (\n    <div className=\"DotsContainer\">\n      <FileList pdfs={pdfs} title=\"hector\" />\n    </div>\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const pdfs = [\n    {\n      name: 'resolucion X',\n      pdf: 'https://www.orimi.com/pdf-test.pdf',\n      icons: <LeftArrow />,\n    },\n    {\n      name: 'resolucion Y',\n      pdf: 'https://www.orimi.com/pdf-test.pdf',\n      icons: <RightArrow />,\n    },\n  ]\n  return (\n    <div className=\"DotsContainer\">\n      <FileList pdfs={pdfs} title=\"hector\" />\n    </div>\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1754: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var slicedToArray = __webpack_require__(64),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        index_of = __webpack_require__(95),
        index_of_default = __webpack_require__.n(index_of),
        get_own_property_symbols = __webpack_require__(78),
        get_own_property_symbols_default = __webpack_require__.n(
          get_own_property_symbols,
        ),
        filter = __webpack_require__(355),
        filter_default = __webpack_require__.n(filter),
        includes = __webpack_require__(911),
        includes_default = __webpack_require__.n(includes),
        map = __webpack_require__(83),
        map_default = __webpack_require__.n(map),
        lib = __webpack_require__(360)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      !(function (e, t) {
        void 0 === t && (t = {})
        var i = t.insertAt
        if ('undefined' != typeof document) {
          var o = document.head || document.getElementsByTagName('head')[0],
            l = document.createElement('style')
          ;(l.type = 'text/css'),
            'top' === i && o.firstChild
              ? o.insertBefore(l, o.firstChild)
              : o.appendChild(l),
            l.styleSheet
              ? (l.styleSheet.cssText = e)
              : l.appendChild(document.createTextNode(e))
        }
      })(
        '.SelectTableFilter__title{background:#fff 0 0 no-repeat padding-box!important;border:1px solid #ccc;border-radius:5px;height:38px;opacity:1;padding:7px 10px;position:relative;text-align:left;width:100%}.SelectTableFilter__title--hover{border:1px solid #f60!important}.SelectTableFilter__title div{font:normal normal normal 14px/24px Roboto}.SelectTableFilter__title__icon{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px dashed;bottom:14px;display:inline-block;height:0;margin-left:2px;position:absolute;right:11px;vertical-align:middle;width:0}.SelectTableFilter__title__icon--hover{color:#f60!important}.SelectTableFilter__Options{background:#fff 0 0 no-repeat padding-box;background-color:#fff;border:1px solid #e0e0e0;border-radius:5px;box-shadow:0 3px 6px #00000029;margin-top:5px;opacity:1;padding:5px;position:absolute;z-index:5}.SelectTableFilter__Options__search{display:flex;position:relative;width:100%}.SelectTableFilter__Options__search__input{background:#fff 0 0 no-repeat padding-box;border:1px solid #ccc!important;border-radius:5px;height:38px;margin-bottom:5px;opacity:1;width:100%}.SelectTableFilter__Options__search__icon{position:absolute!important;right:11px;transform:translateY(10px)}.SelectTableFilter__Options__item{background-color:#fff;border:unset;color:#777;font:normal normal normal 14px/16px Roboto;height:32px;letter-spacing:0;margin-left:0;overflow:hidden;padding:7px 32px 7px 9px;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.SelectTableFilter__Options__item:hover{background-color:#ff944d!important;border-color:#ff944d!important;color:#fff!important}.SelectTableFilter__Options__scrollbar{max-height:224px;overflow-y:scroll;padding-bottom:5px;padding-top:5px;width:100%}.SelectTableFilter__Options__scrollbarStyle::-webkit-scrollbar-track{background-color:#f4f4f4;border-radius:20px}.SelectTableFilter__Options__scrollbarStyle::-webkit-scrollbar{background-color:#f4f4f4;border-radius:20px;width:12px}.SelectTableFilter__Options__scrollbarStyle::-webkit-scrollbar-thumb{background-color:#f60;border-radius:20px}.SelectTableFilter__Options{position:relative;width:100%;z-index:3!important}.SelectTableFilter__title{align-items:center;display:flex}.SelectTableFilter__title__icon{margin-left:10px}.SelectTableFilter__title div{margin-right:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.disabled_selectedTable{cursor:not-allowed!important}',
        {insertAt: 'top'},
      )
      var filter_esm_i = (function (_e$Component) {
        inherits_default()(i, _e$Component)
        var _super = _createSuper(i)
        function i() {
          var _this
          return (
            classCallCheck_default()(this, i),
            ((_this = _super.apply(this, arguments)).state = {
              hover: !1,
              displayOptions: !1,
              options:
                null === _this.props.options
                  ? [
                      {value: 'value1', label: 'label1'},
                      {value: 'value2', label: 'label2'},
                    ]
                  : _this.props.options,
              title: _this.props.title,
              heightContainer: 32,
              actualheightContainer: 234,
            }),
            (_this.renderThumbVertical = function (t) {
              var _i = (function (e, t) {
                var i = {}
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) &&
                    index_of_default()(t).call(t, o) < 0 &&
                    (i[o] = e[o])
                if (
                  null != e &&
                  'function' == typeof get_own_property_symbols_default.a
                ) {
                  var l = 0
                  for (
                    o = get_own_property_symbols_default()(e);
                    l < o.length;
                    l++
                  )
                    index_of_default()(t).call(t, o[l]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, o[l]) &&
                      (i[o[l]] = e[o[l]])
                }
                return i
              })(t, ['style'])
              return react_default.a.createElement(
                'div',
                assign_default()({}, _i, {
                  style: {
                    position: 'relative',
                    display: 'block',
                    backgroundColor: '#ff6600',
                    borderRadius: '20px',
                    width: '12px',
                    opacity: '1',
                    transform: 'translate(-6px, 0px) !important',
                  },
                }),
              )
            }),
            (_this.hover = function () {
              !1 === _this.props.disabled &&
                _this.setState({hover: !_this.state.hover}),
                _this.setState({options: _this.props.options}, function () {
                  _this.setHeight()
                })
            }),
            (_this.onClick = function (e) {
              e.preventDefault(),
                _this.setState({displayOptions: !_this.state.displayOptions})
            }),
            (_this.itemClick = function (e, t) {
              _this.setState({
                title: t.label,
                displayOptions: !1,
                options: _this.props.options,
              }),
                _this.props.onSelected && _this.props.onSelected(t)
            }),
            (_this.textChange = function (e) {
              var _context,
                t = filter_default()((_context = _this.props.options)).call(
                  _context,
                  function (t) {
                    var _context2
                    return includes_default()(
                      (_context2 = t.label.toUpperCase()),
                    ).call(_context2, e.target.value.toUpperCase())
                  },
                )
              _this.setState({options: t}, function () {
                _this.setHeight()
              })
            }),
            (_this.setHeight = function () {
              _this.state.options &&
                _this.state.options.length &&
                _this.setState({
                  actualheightContainer:
                    _this.state.heightContainer *
                      (_this.state.options.length <= 7
                        ? _this.state.options.length
                        : 7) +
                    'px',
                })
            }),
            (_this.onMouseLeave = function () {
              _this.setState({displayOptions: !1})
            }),
            _this
          )
        }
        return (
          createClass_default()(i, [
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(e, t) {
                this.props.options !== e.options &&
                  this.setState({
                    options: this.props.options,
                    hover: !1,
                    displayOptions: !1,
                    title: this.props.title,
                  })
              },
            },
            {
              key: 'render',
              value: function render() {
                var _i2,
                  _this2 = this
                return react_default.a.createElement(
                  'div',
                  {className: 'col-xs-12 pl-0 pr-0 position-relative'},
                  react_default.a.createElement(
                    'button',
                    {
                      disabled: this.props.disabled,
                      className:
                        'SelectTableFilter__title ' +
                        (!0 === this.state.hover
                          ? 'SelectTableFilter__title--hover'
                          : '') +
                        '  ' +
                        (this.props.disabled ? 'disabled_selectedTable' : ''),
                      onMouseEnter: this.hover,
                      onMouseLeave: function onMouseLeave() {
                        _this2.hover()
                      },
                      onClick: this.onClick,
                    },
                    react_default.a.createElement(
                      'div',
                      null,
                      this.state.title,
                    ),
                    react_default.a.createElement('span', {
                      className:
                        'SelectTableFilter__title__icon ' +
                        (!0 === this.state.hover
                          ? 'SelectTableFilter__title__icon--hover'
                          : ''),
                    }),
                  ),
                  !0 === this.state.displayOptions
                    ? react_default.a.createElement(
                        'div',
                        {
                          className: 'SelectTableFilter__Options',
                          onMouseLeave: this.onMouseLeave,
                        },
                        react_default.a.createElement(
                          'div',
                          {className: 'SelectTableFilter__Options__search'},
                          react_default.a.createElement('input', {
                            type: 'text',
                            className:
                              'SelectTableFilter__Options__search__input',
                            onChange: this.textChange,
                            placeholder: this.props.placeholder,
                            disabled: this.props.disabled,
                          }),
                          react_default.a.createElement('span', {
                            className:
                              'glyphicon glyphicon-search SelectTableFilter__Options__search__icon',
                          }),
                        ),
                        react_default.a.createElement(
                          'div',
                          {style: {height: this.state.actualheightContainer}},
                          react_default.a.createElement(
                            lib.Scrollbars,
                            {renderThumbVertical: this.renderThumbVertical},
                            react_default.a.createElement(
                              'div',
                              null,
                              null === (_i2 = this.state.options) ||
                                void 0 === _i2
                                ? void 0
                                : map_default()(_i2).call(
                                    _i2,
                                    function (t, _i3) {
                                      return react_default.a.createElement(
                                        'button',
                                        {
                                          disabled: _this2.props.disabled,
                                          key: 'button_' + _i3,
                                          className:
                                            'SelectTableFilter__Options__item',
                                          onClick: function onClick(e) {
                                            _this2.itemClick(e, t)
                                          },
                                        },
                                        t.label,
                                      )
                                    },
                                  ),
                            ),
                          ),
                        ),
                      )
                    : react_default.a.createElement(
                        react_default.a.Fragment,
                        null,
                      ),
                )
              },
            },
          ]),
          i
        )
      })(react_default.a.Component)
      ;(filter_esm_i.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'i',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/filter/dist/filter.esm.js'] = {
            name: 'i',
            docgenInfo: filter_esm_i.__docgenInfo,
            path: 'packages/filter/dist/filter.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        filter_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/FilterSelect',
            component: filter_esm_i,
            argTypes: {},
          }),
          function Template(args) {
            Object(react.useRef)(null)
            var _useState = Object(react.useState)({
                value: 'hector placeholder',
              }),
              _useState2 = slicedToArray_default()(_useState, 2),
              selecteSite = _useState2[0],
              setselecteSite = _useState2[1],
              _useState3 = Object(react.useState)('p4'),
              _useState4 = slicedToArray_default()(_useState3, 2),
              settitle = (_useState4[0], _useState4[1])
            return Object(jsx_runtime.jsx)(
              filter_esm_i,
              assign_default()({}, args, {
                options: [
                  {value: 'Nombre sede', label: 'Nombre sede'},
                  {value: 'hector', label: 'hector'},
                  {value: 'andresito', label: 'andresito'},
                  {value: 'pepe', label: 'pepe'},
                ],
                onSelected: function handleSelect(e) {
                  setselecteSite(assign_default()({}, e)), settitle(e.value)
                },
                placeholder: selecteSite.value || 'placeholder',
                disabled: null,
              }),
            )
          })
      filter_stories_Template.displayName = 'Template'
      var Primary = bind_default()(filter_stories_Template).call(
        filter_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(filter_stories_Template).call(
        filter_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(filter_stories_Template).call(
        filter_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const selectorFields = useRef(null)\n  const [selecteSite, setselecteSite] = useState({\n    \n    value: 'hector placeholder',\n  })\n  const [title, settitle] = useState('p4')\n  const handleSelect = e => {\n    setselecteSite({...e})\n    settitle(e.value)\n  }\n  return (\n    <FilterSelect\n      {...args}\n      options={[\n        {value: 'Nombre sede', label: 'Nombre sede'},\n        {value: 'hector', label: 'hector'},\n        {value: 'andresito', label: 'andresito'},\n        {value: 'pepe', label: 'pepe'},\n      ]}\n      onSelected={handleSelect}\n      placeholder={selecteSite.value || 'placeholder'}\n      disabled={null}\n    />\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const selectorFields = useRef(null)\n  const [selecteSite, setselecteSite] = useState({\n    \n    value: 'hector placeholder',\n  })\n  const [title, settitle] = useState('p4')\n  const handleSelect = e => {\n    setselecteSite({...e})\n    settitle(e.value)\n  }\n  return (\n    <FilterSelect\n      {...args}\n      options={[\n        {value: 'Nombre sede', label: 'Nombre sede'},\n        {value: 'hector', label: 'hector'},\n        {value: 'andresito', label: 'andresito'},\n        {value: 'pepe', label: 'pepe'},\n      ]}\n      onSelected={handleSelect}\n      placeholder={selecteSite.value || 'placeholder'}\n      disabled={null}\n    />\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const selectorFields = useRef(null)\n  const [selecteSite, setselecteSite] = useState({\n    \n    value: 'hector placeholder',\n  })\n  const [title, settitle] = useState('p4')\n  const handleSelect = e => {\n    setselecteSite({...e})\n    settitle(e.value)\n  }\n  return (\n    <FilterSelect\n      {...args}\n      options={[\n        {value: 'Nombre sede', label: 'Nombre sede'},\n        {value: 'hector', label: 'hector'},\n        {value: 'andresito', label: 'andresito'},\n        {value: 'pepe', label: 'pepe'},\n      ]}\n      onSelected={handleSelect}\n      placeholder={selecteSite.value || 'placeholder'}\n      disabled={null}\n    />\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1755: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        map = __webpack_require__(83),
        map_default = __webpack_require__.n(map)
      !(function (e, t) {
        void 0 === t && (t = {})
        var a = t.insertAt
        if ('undefined' != typeof document) {
          var i = document.head || document.getElementsByTagName('head')[0],
            n = document.createElement('style')
          ;(n.type = 'text/css'),
            'top' === a && i.firstChild
              ? i.insertBefore(n, i.firstChild)
              : i.appendChild(n),
            n.styleSheet
              ? (n.styleSheet.cssText = e)
              : n.appendChild(document.createTextNode(e))
        }
      })(
        '.info{display:grid;grid-auto-flow:row;grid-template-columns:repeat(1,minmax(0,1fr));padding-bottom:40px}@media screen and (max-width:691px){.info{padding-right:30px;padding-top:30px}}.info__row{display:flex;margin:0 auto;max-width:800px;width:100%}@media screen and (max-width:691px){.info__row{align-items:baseline;flex-flow:column}}.info__row:not(:first-child){margin-top:15px}.info__label{color:#212529;flex:0.5;font:normal normal normal 14px/16px Roboto;letter-spacing:0;margin-right:30px;text-align:right}@media screen and (max-width:691px){.info__label{margin-right:0;padding-left:15px;text-align:left}}.info__value{color:#777;flex:0.5;font:normal normal 300 14px/16px Roboto;letter-spacing:0;opacity:1;text-align:left}@media screen and (max-width:691px){.info__value{margin-top:5px;padding-left:15px;text-align:left}}',
        {insertAt: 'top'},
      )
      var infouser_esm_t = function t(_ref) {
        var t = _ref.DefaultOptions,
          a = _ref.className
        return react_default.a.createElement(
          'div',
          {className: a},
          null == t
            ? void 0
            : map_default()(t).call(t, function (t, a) {
                return react_default.a.createElement(
                  'div',
                  {
                    key: 'div_' + a,
                    className: 'info__row',
                    'aria-describedby': 'label_info_' + a + ' value_info_' + a,
                    tabIndex: 0,
                  },
                  react_default.a.createElement(
                    'div',
                    {className: 'info__label', id: 'label_info_' + a},
                    t.label,
                  ),
                  react_default.a.createElement(
                    'div',
                    {className: 'info__value', id: 'value_info_' + a},
                    t.value,
                  ),
                )
              }),
        )
      }
      ;(infouser_esm_t.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 't',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/infouser/dist/infouser.esm.js'] = {
            name: 't',
            docgenInfo: infouser_esm_t.__docgenInfo,
            path: 'packages/infouser/dist/infouser.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        infouser_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/InfoUser',
            component: infouser_esm_t,
            argTypes: {
              sad: {
                name: 'sad',
                type: {name: 'boolean', required: !0},
                defaultValue: !1,
                description: 'make the face :( --\x3e :)',
                table: {
                  type: {summary: 'boolean'},
                  defaultValue: {summary: !1},
                },
                control: {type: 'boolean'},
              },
            },
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(
              infouser_esm_t,
              {
                DefaultOptions: [
                  {label: 'el label 1', value: 'el value 1'},
                  {label: 'el label 2', value: 'el value 2'},
                  {label: 'el label 3', value: 'el value 3'},
                ],
              },
              'infoUser',
            )
          })
      infouser_stories_Template.displayName = 'Template'
      var Primary = bind_default()(infouser_stories_Template).call(
        infouser_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(infouser_stories_Template).call(
        infouser_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(infouser_stories_Template).call(
        infouser_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const transformUserInfo = () => {\n    return [\n      {label: 'el label 1', value: 'el value 1'},\n      {label: 'el label 2', value: 'el value 2'},\n      {label: 'el label 3', value: 'el value 3'},\n    ]\n  }\n  return <InfoUser key=\"infoUser\" DefaultOptions={transformUserInfo()} />\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const transformUserInfo = () => {\n    return [\n      {label: 'el label 1', value: 'el value 1'},\n      {label: 'el label 2', value: 'el value 2'},\n      {label: 'el label 3', value: 'el value 3'},\n    ]\n  }\n  return <InfoUser key=\"infoUser\" DefaultOptions={transformUserInfo()} />\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const transformUserInfo = () => {\n    return [\n      {label: 'el label 1', value: 'el value 1'},\n      {label: 'el label 2', value: 'el value 2'},\n      {label: 'el label 3', value: 'el value 3'},\n    ]\n  }\n  return <InfoUser key=\"infoUser\" DefaultOptions={transformUserInfo()} />\n}",
            },
          },
          Small.parameters,
        ))
    },
    1756: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        labelvalue_esm = __webpack_require__(269),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        map = __webpack_require__(83),
        map_default = __webpack_require__.n(map)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      !(function (e, t) {
        void 0 === t && (t = {})
        t.insertAt
      })(0, {insertAt: 'top'})
      var labelvaluerow_esm_t = function t(_t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                tabIndex: 0,
              },
              _t,
            ),
            react_default.a.createElement('path', {
              d: 'M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z',
              stroke: 'none',
            }),
          )
        },
        labelvaluerow_esm_l = function l(t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                tabIndex: 0,
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z',
              stroke: 'none',
            }),
          )
        },
        labelvaluerow_esm_s = (function (_e$Component) {
          inherits_default()(s, _e$Component)
          var _super = _createSuper(s)
          function s() {
            var _this
            return (
              classCallCheck_default()(this, s),
              ((_this = _super.apply(this, arguments)).state = {display: !1}),
              (_this.myRef = react_default.a.createRef()),
              (_this.clickHandler = function () {
                _this.setState({display: !_this.state.display}, function () {
                  _this.state.display &&
                    _this.myRef.current &&
                    _this.myRef.current.focus()
                })
              }),
              _this
            )
          }
          return (
            createClass_default()(s, [
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(e, t) {
                  e.delta &&
                    this.props.delta &&
                    e.delta !== this.props.delta &&
                    this.setState({display: !1})
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _context,
                    _this2 = this
                  return react_default.a.createElement(
                    'div',
                    {
                      className:
                        'col-sm-12 col-md-12 col-xs-12 col-lg-12  pl-0 pr-0 labelValueRow ' +
                        this.props.styles,
                      tabIndex: 0,
                      'aria-label': this.props.label + ' ' + this.props.value,
                    },
                    react_default.a.createElement(
                      'div',
                      {
                        className:
                          'labelValueRow__header row col-sm-12 col-md-12 col-xs-12 col-lg-12 pr-0',
                      },
                      react_default.a.createElement(
                        'div',
                        {className: 'col-sm-7 col-md-7 col-lg-6'},
                        react_default.a.createElement(
                          'div',
                          {
                            className:
                              'labelValueRow__label ' +
                              (!0 === this.state.display ||
                              !1 === this.props.concealable
                                ? 'labelValueRow__active'
                                : ''),
                          },
                          this.props.label,
                        ),
                      ),
                      react_default.a.createElement(
                        'div',
                        {
                          className:
                            'col-sm-5 col-md-5 col-lg-6 d-flex align-items-center justify-content-between',
                        },
                        react_default.a.createElement(
                          'div',
                          {className: 'labelValueRow__value'},
                          this.props.value,
                        ),
                        !1 !== this.props.concealable &&
                          react_default.a.createElement(
                            react_default.a.Fragment,
                            null,
                            react_default.a.createElement(labelvaluerow_esm_t, {
                              className:
                                'labelValueRow__iconRight ' +
                                (!0 === this.state.display
                                  ? 'd-none'
                                  : 'd-block'),
                              onClick: function onClick() {
                                return _this2.clickHandler()
                              },
                              onKeyDown: function onKeyDown() {
                                return _this2.clickHandler()
                              },
                            }),
                            react_default.a.createElement(labelvaluerow_esm_l, {
                              className:
                                'labelValueRow__iconRight ' +
                                (!0 === this.state.display
                                  ? 'd-block labelValueRow__active'
                                  : 'd-none'),
                              onClick: function onClick() {
                                return _this2.clickHandler()
                              },
                              onKeyDown: function onKeyDown() {
                                return _this2.clickHandler()
                              },
                            }),
                          ),
                      ),
                    ),
                    react_default.a.createElement(
                      'div',
                      {
                        className:
                          'col-sm-12 col-md-12 col-xs-12 col-lg-12  labelValueRow__content ' +
                          (!0 === this.state.display ||
                          !1 === this.props.concealable
                            ? 'd-block'
                            : 'd-none'),
                        tabIndex: 0,
                      },
                      map_default()((_context = react_default.a.Children)).call(
                        _context,
                        this.props.children,
                        function (t, l) {
                          return 0 === l
                            ? react_default.a.cloneElement(t, {
                                ref: _this2.myRef,
                                key: 'index_' + l,
                              })
                            : react_default.a.cloneElement(t, {
                                key: 'index_' + l,
                              })
                        },
                      ),
                    ),
                  )
                },
              },
            ]),
            s
          )
        })(react_default.a.Component)
      ;(labelvaluerow_esm_s.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 's',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'packages/labelvaluerow/dist/labelvaluerow.esm.js'
          ] = {
            name: 's',
            docgenInfo: labelvaluerow_esm_s.__docgenInfo,
            path: 'packages/labelvaluerow/dist/labelvaluerow.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        labelvaluerow_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/LabelValueRow',
            component: labelvaluerow_esm_s,
            argTypes: {},
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(
              labelvaluerow_esm_s,
              assign_default()(
                {
                  label: 'hector',
                  value: 'CC 1073565411',
                  concealable: !0,
                  styles: 'labelValueRow--first labelValueRow--last',
                  delta: 0,
                },
                args,
                {
                  children: Object(jsx_runtime.jsx)('div', {
                    tabIndex: 0,
                    children: Object(jsx_runtime.jsx)(
                      labelvalue_esm.a,
                      {
                        dataColumn: [
                          {label: 'Estado PBS:', value: ''},
                          {label: 'Derecho a servicios:', value: ''},
                          {label: 'Estado en Plan Complementario:', value: ''},
                          {label: 'Programa Especial:', value: ''},
                          {label: 'Programa para el servicio:', value: ''},
                          {label: 'Estado en RS:', value: ''},
                          {label: 'Fecha de Nacimiento:', value: ''},
                        ],
                        stylesColumn: 'col-sm-12 labelValue__spacing',
                        subColumns: !0,
                      },
                      'labelValue_1',
                    ),
                  }),
                },
              ),
              'labelValueRow_1',
            )
          })
      labelvaluerow_stories_Template.displayName = 'Template'
      var Primary = bind_default()(labelvaluerow_stories_Template).call(
        labelvaluerow_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(labelvaluerow_stories_Template).call(
        labelvaluerow_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(labelvaluerow_stories_Template).call(
        labelvaluerow_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const dataAfiliado = [\n    {\n      label: 'Estado PBS:',\n      value: '',\n    },\n    {\n      label: 'Derecho a servicios:',\n      value: '',\n    },\n    {\n      label: 'Estado en Plan Complementario:',\n      value: '',\n    },\n    {\n      label: 'Programa Especial:',\n      value: '',\n    },\n    {\n      label: 'Programa para el servicio:',\n      value: '',\n    },\n    {\n      label: 'Estado en RS:',\n      value: '',\n    },\n    {\n      label: 'Fecha de Nacimiento:',\n      value: '',\n    },\n  ]\n  return (\n    <LabelValueRow\n      key={`labelValueRow_1`}\n      label={'hector'}\n      value={`${'CC'} ${'1073565411'}`}\n      concealable={true}\n      styles=\"labelValueRow--first labelValueRow--last\"\n      delta={0}\n      {...args}\n    >\n      <div tabIndex={0}>\n        <LabelValue\n          key={`labelValue_1`}\n          dataColumn={dataAfiliado}\n          stylesColumn={'col-sm-12 labelValue__spacing'}\n          subColumns={true}\n        />\n      </div>\n    </LabelValueRow>\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const dataAfiliado = [\n    {\n      label: 'Estado PBS:',\n      value: '',\n    },\n    {\n      label: 'Derecho a servicios:',\n      value: '',\n    },\n    {\n      label: 'Estado en Plan Complementario:',\n      value: '',\n    },\n    {\n      label: 'Programa Especial:',\n      value: '',\n    },\n    {\n      label: 'Programa para el servicio:',\n      value: '',\n    },\n    {\n      label: 'Estado en RS:',\n      value: '',\n    },\n    {\n      label: 'Fecha de Nacimiento:',\n      value: '',\n    },\n  ]\n  return (\n    <LabelValueRow\n      key={`labelValueRow_1`}\n      label={'hector'}\n      value={`${'CC'} ${'1073565411'}`}\n      concealable={true}\n      styles=\"labelValueRow--first labelValueRow--last\"\n      delta={0}\n      {...args}\n    >\n      <div tabIndex={0}>\n        <LabelValue\n          key={`labelValue_1`}\n          dataColumn={dataAfiliado}\n          stylesColumn={'col-sm-12 labelValue__spacing'}\n          subColumns={true}\n        />\n      </div>\n    </LabelValueRow>\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const dataAfiliado = [\n    {\n      label: 'Estado PBS:',\n      value: '',\n    },\n    {\n      label: 'Derecho a servicios:',\n      value: '',\n    },\n    {\n      label: 'Estado en Plan Complementario:',\n      value: '',\n    },\n    {\n      label: 'Programa Especial:',\n      value: '',\n    },\n    {\n      label: 'Programa para el servicio:',\n      value: '',\n    },\n    {\n      label: 'Estado en RS:',\n      value: '',\n    },\n    {\n      label: 'Fecha de Nacimiento:',\n      value: '',\n    },\n  ]\n  return (\n    <LabelValueRow\n      key={`labelValueRow_1`}\n      label={'hector'}\n      value={`${'CC'} ${'1073565411'}`}\n      concealable={true}\n      styles=\"labelValueRow--first labelValueRow--last\"\n      delta={0}\n      {...args}\n    >\n      <div tabIndex={0}>\n        <LabelValue\n          key={`labelValue_1`}\n          dataColumn={dataAfiliado}\n          stylesColumn={'col-sm-12 labelValue__spacing'}\n          subColumns={true}\n        />\n      </div>\n    </LabelValueRow>\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1757: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        Modal = __webpack_require__(1783),
        Button = __webpack_require__(1785)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      !(function (o, t) {
        void 0 === t && (t = {})
        var a = t.insertAt
        if ('undefined' != typeof document) {
          var e = document.head || document.getElementsByTagName('head')[0],
            d = document.createElement('style')
          ;(d.type = 'text/css'),
            'top' === a && e.firstChild
              ? e.insertBefore(d, e.firstChild)
              : e.appendChild(d),
            d.styleSheet
              ? (d.styleSheet.cssText = o)
              : d.appendChild(document.createTextNode(o))
        }
      })(
        '.modal-body .inner-Model-buttons{margin-bottom:10px;padding:10px 30px;text-align:right}.modal-body .inner-Model-buttons button{margin:0 8px}@media (min-width:771px) and (max-width:2000px){.modal .modal-dialog .modal-content .inner-Model-buttons button{min-width:80px!important;width:auto!important}}@media screen and (max-width:375px){.modal:before{height:100%}}.modal-container{position:relative}.modal-container .modal,.modal-container .modal-backdrop{position:absolute}.modal{padding:0!important;text-align:center}.modal:before{content:"";height:100%;margin-right:-4px}.modal .modal-dialog,.modal:before{display:inline-block;vertical-align:middle}.modal .modal-dialog{margin:0 30px;max-width:100%;text-align:left}.modal .modal-dialog.modal-sm .modal-content{width:300px}.modal .modal-dialog.modal-sm .modal-content .modal-body .messages{font-family:Roboto Light;font-size:14px;margin:20px 10px}.modal .modal-dialog .modal-content{border-radius:0}.modal .modal-dialog .modal-content .modal-header{border-bottom:1px solid #ff944d;height:70px;padding:30px}.modal .modal-dialog .modal-content .modal-header .close-button{background:transparent;border:0;box-shadow:none;color:#f60;float:right;min-width:30px;outline:none;outline-style:none;padding:0}.modal .modal-dialog .modal-content .modal-header .close-button i{font-size:24px}.modal .modal-dialog .modal-content .modal-header .close-button:active,.modal .modal-dialog .modal-content .modal-header .close-button:focus,.modal .modal-dialog .modal-content .modal-header .close-button:hover{background:transparent;border:0;box-shadow:none;outline:none;outline-style:none;padding:0}.modal .modal-dialog .modal-content .modal-body{overflow-y:auto;padding:0}@media (max-width:375px){.modal:before{height:0}}.modalemail .right-error-modal{text-align:center!important}.modalemail .right-error-modal input:active,.modalemail .right-error-modal input:focus,.modalemail .right-error-modal input:hover,.modalemail .right-error-modal input:visited{border:1px solid #f60;outline:0}.modal-header .modal-title{float:left}.modal-header button{background-color:transparent!important;border:0;color:#f60;float:right;min-width:auto;padding:0!important;width:auto}.modal-header button i{color:#f60;height:auto;margin:0;padding:0}.modalemail button[disabled],.modalemail button[disabled]:active,.modalemail button[disabled]:focus,.modalemail button[disabled]:hover,.modalemail button[disabled]:visited{background-color:#e5e5e5;border:1px solid #ccc;color:#999}.modalemail .right-error-modal h4{padding-right:0!important}.modalemail .right-error-modal input{border:1px solid #ccc;border-radius:6px;height:35px;margin-top:15px;width:45%}.modal-header h4{color:#999}.modal-body .btn-right{padding:6px 10px}.modal-body .modal-error-body{padding:50px 60px}.modal-body .modal-error-body .left-error-modal{text-align:right}.modal-body .modal-error-body .left-error-modal i{font-size:70px}.modal-body .modal-error-body .left-error-modal i.blue{color:#3686af}.modal-body .modal-error-body .left-error-modal i.green{color:#81ba00}.modal-body .modal-error-body .left-error-modal i.red{color:#bb4945}.modal-body .modal-error-body .right-error-modal{text-align:left}.modal-body .modal-error-body .right-error-modal h4{color:#333;font-family:Roboto Light,sans-serif;font-size:14px;padding-right:80px;padding-top:10px}@media (min-width:0px) and (max-width:770px){.modal .modal-dialog .modal-content .modal-header{border-bottom:1px solid #ff944d!important;height:70px!important;overflow:hidden;padding:20px!important}.modal .modal-dialog .modal-content .modal-header .modal-title{float:left;width:80%}.modal .modal-dialog .modal-content .modal-header button{height:100%;text-align:right;width:15%}.hidden-mobile{display:none}.modalemail .right-error-modal input{width:100%}.modal-body .modal-error-body{padding:20px}.modal-body .modal-error-body .left-error-modal,.modal-body .modal-error-body .right-error-modal{text-align:center}.modal-body .modal-error-body .right-error-modal h4{padding-right:0}.modal-body .inner-Model-buttons button.btn-left{margin-bottom:20px}.modal .modal-dialog .modal-content .inner-Model-buttons button{width:100%!important}}@media screen and (max-width:771px){.ModalMessage__message{margin-top:10px}}.ModalMessage__ic{font-size:24px!important;margin:0!important;padding:0!important;transform:translateY(-9px)}.ModalMessage__icMain svg{color:#43894e;height:60px!important;width:60px!important}.ModalMessage__icMain--blue svg{color:#3686af!important}.ModalMessage__icMain--red svg{color:#bb4945!important}.ModalMessage__title{font:normal normal normal 18px/21px Roboto!important}.ModalMessage__content{padding-bottom:9px;padding-top:38px}@media (max-width:771px){.ModalMessage__content{margin-bottom:15px;padding-top:24px}}@media (max-width:770.99999px){.ModalMessage__icMain{padding-left:36%!important}.ModalMessage__container .modal-dialog{border-radius:3px;height:301px;margin:0!important;padding:0!important;width:290px}.ModalMessage__btn{background-color:#f60!important;border:0 solid;border-radius:7px!important;color:#fff!important;float:right;font:normal normal 300 14px/16px Roboto!important;font-weight:400;height:36px;margin-bottom:12px!important;margin-right:73px;max-width:274px!important;padding:10px!important;text-align:center;width:274px!important}}@media screen and (min-width:771px){.ModalMessage__icMain svg{transform:translateY(-10px)}.ModalMessage__container .modal-dialog{border-radius:3px;min-height:233px;width:470px}.ModalMessage__btn{background-color:#f60!important;border:0 solid;border-radius:7px!important;color:#fff!important;float:right;font:normal normal 300 14px/16px Roboto!important;font-weight:400;height:36px;margin-bottom:12px!important;margin-right:73px;max-width:274px!important;padding:10px;text-align:center;width:274px!important}}.ModalMessage__container .modal-content{height:100%!important;width:100%!important}.ModalMessage__container .modal-header{padding:25px}',
        {insertAt: 'top'},
      )
      var message_esm_e = (function (_o$Component) {
        inherits_default()(e, _o$Component)
        var _super = _createSuper(e)
        function e() {
          var _this
          return (
            classCallCheck_default()(this, e),
            ((_this = _super.apply(this, arguments)).state = {showModal: !1}),
            (_this.handleShow = function () {
              _this.setState({showModal: !0})
            }),
            _this
          )
        }
        return (
          createClass_default()(
            e,
            [
              {
                key: 'handleHide',
                value: function handleHide(o, t) {
                  return (
                    o.preventDefault(),
                    this.setState({showModal: !1}, t ? t() : null),
                    null
                  )
                },
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(o, t) {
                  this.props.show !== o.show &&
                    this.setState({showModal: this.props.show})
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _context,
                    _this2 = this,
                    _e = this.props.getModalData
                      ? this.props.getModalData()
                      : {}
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    this.state.showModal &&
                      react_default.a.createElement(
                        'div',
                        {id: 'modal-wrap-alert-modal'},
                        react_default.a.createElement(
                          'div',
                          {className: 'modal-container'},
                          react_default.a.createElement(
                            Modal.a,
                            {
                              show: this.state.showModal,
                              container: this.props.container,
                              onHide: bind_default()(
                                (_context = this.handleHide),
                              ).call(_context, this),
                              bsSize: 'large',
                              backdrop: 'static',
                              'aria-labelledby': 'contained-modal-title-lg',
                              className: 'ModalMessage__container',
                            },
                            react_default.a.createElement(
                              Modal.a.Header,
                              null,
                              react_default.a.createElement(
                                Modal.a.Title,
                                null,
                                react_default.a.createElement(
                                  'div',
                                  {
                                    className: 'ModalMessage__title',
                                    tabIndex: 0,
                                    'aria-describedby': 'message_modal',
                                  },
                                  react_default.a.createElement(
                                    'p',
                                    {id: 'message_modal'},
                                    this.props.MessageTitle,
                                  ),
                                ),
                              ),
                              react_default.a.createElement(
                                Button.a,
                                {
                                  className:
                                    'ModalMessage__ic ' +
                                    (this.props.icStyles
                                      ? this.props.icStyles
                                      : ''),
                                  'aria-label': 'close modal button',
                                  onClick: function onClick(o) {
                                    return _this2.handleHide(
                                      o,
                                      _this2.props.CloseAction,
                                    )
                                  },
                                  tabIndex: -1,
                                },
                                react_default.a.createElement('i', {
                                  className: 'fa fa-times',
                                }),
                              ),
                            ),
                            react_default.a.createElement(
                              Modal.a.Body,
                              null,
                              react_default.a.createElement(
                                'div',
                                {
                                  className:
                                    'col-xs-12 col-sm-12 ModalMessage__content',
                                },
                                react_default.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'col-xs-12 col-sm-2 ModalMessage__icMain ' +
                                      (this.props.IconoColor
                                        ? 'ModalMessage__icMain' +
                                          this.props.IconoColor
                                        : ''),
                                  },
                                  this.props.Icono,
                                ),
                                react_default.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'col-xs-12 col-sm-10 ModalMessage__message',
                                    tabIndex: 0,
                                  },
                                  react_default.a.createElement(
                                    'div',
                                    {
                                      className: 'col-xs-12 pl-0 pr-0',
                                      tabIndex: 0,
                                      'aria-describedby': 'message_modal',
                                    },
                                    react_default.a.createElement(
                                      'p',
                                      {id: 'message_modal'},
                                      ' ',
                                      this.props.msg || _e.messageModal,
                                    ),
                                  ),
                                  this.props.buttonsZone
                                    ? react_default.a.createElement(
                                        'div',
                                        {
                                          className: 'col-xs-12 pl-0 pr-0',
                                          style: this.props.buttonsZoneStyle,
                                        },
                                        this.props.buttonsZone,
                                      )
                                    : react_default.a.createElement(
                                        react_default.a.Fragment,
                                        null,
                                      ),
                                ),
                              ),
                              react_default.a.createElement(
                                'div',
                                {className: 'clearfix'},
                                this.props.AltButtonAction &&
                                  this.props.MainButtonText
                                  ? react_default.a.createElement(
                                      Button.a,
                                      {
                                        className:
                                          'ModalMessage__btn btn btn-default',
                                        onClick: function onClick(o) {
                                          return _this2.handleHide(
                                            o,
                                            _this2.props.AltButtonAction,
                                          )
                                        },
                                      },
                                      this.props.MainButtonText,
                                    )
                                  : react_default.a.createElement(
                                      react_default.a.Fragment,
                                      null,
                                    ),
                              ),
                            ),
                          ),
                        ),
                      ),
                  )
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function getDerivedStateFromProps(o, t) {
                  return {showModal: o.show}
                },
              },
            ],
          ),
          e
        )
      })(react_default.a.Component)
      ;(message_esm_e.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'handleHide',
            docblock: null,
            modifiers: [],
            params: [
              {name: 'o', type: null},
              {name: 't', type: null},
            ],
            returns: null,
          },
        ],
        displayName: 'e',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/message/dist/message.esm.js'] = {
            name: 'e',
            docgenInfo: message_esm_e.__docgenInfo,
            path: 'packages/message/dist/message.esm.js',
          })
      var jsx_runtime = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'components/ModalMessage',
        component: message_esm_e,
        argTypes: {
          show: {
            name: 'show',
            type: {name: 'boolean', required: !0},
            defaultValue: !1,
            description: 'show the modal',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: !1}},
            control: {type: 'boolean'},
          },
          msg: {
            name: 'msg',
            type: {name: 'string', required: !0},
            defaultValue: 'the message of the modal',
            description: 'the message of the modal',
            table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
            control: {type: 'text'},
          },
          MessageTitle: {
            name: 'MessageTitle',
            type: {name: 'string', required: !0},
            defaultValue: 'title of the modal',
            description: 'the title of the modal',
            table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
            control: {type: 'text'},
          },
          MainButtonText: {
            name: 'MainButtonText',
            type: {name: 'string', required: !0},
            defaultValue: 'Aceptar',
            description: 'textContent of the button',
            table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
            control: {type: 'text'},
          },
        },
      }
      function SvgComponent(props) {
        return Object(jsx_runtime.jsx)(
          'svg',
          assign_default()(
            {
              stroke: 'currentColor',
              fill: 'currentColor',
              strokeWidth: 0,
              viewBox: '0 0 512 512',
              height: '1em',
              width: '1em',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            props,
            {
              children: Object(jsx_runtime.jsx)('path', {
                d: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z',
                stroke: 'none',
              }),
            },
          ),
        )
      }
      SvgComponent.displayName = 'SvgComponent'
      var message_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(
          message_esm_e,
          assign_default()(
            {
              Icono: Object(jsx_runtime.jsx)(SvgComponent, {}),
              IconoColor: '--blue',
              CloseAction: function CloseAction() {
                return console.log('unidir X action')
              },
              buttonsZone: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  Object(jsx_runtime.jsx)('input', {
                    className: 'btn btn-link link-orange',
                    type: 'button',
                    value: 'Cancelar',
                    onClick: function onClick() {
                      return console.log('cancelar')
                    },
                  }),
                  Object(jsx_runtime.jsx)('input', {
                    className: 'btn-orange',
                    type: 'button',
                    value: 'Aceptar',
                    onClick: function onClick() {
                      console.log('aceptar')
                    },
                  }),
                ],
              }),
              buttonsZoneStyle: {
                textAlign: 'center',
                paddingBottom: '10px',
                paddingTop: '10px',
              },
            },
            args,
          ),
        )
      }
      message_stories_Template.displayName = 'Template'
      var Primary = bind_default()(message_stories_Template).call(
        message_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(message_stories_Template).call(
        message_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(message_stories_Template).call(
        message_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => (\n  <ModalMessage\n    Icono={<SvgComponent />}\n    IconoColor=\"--blue\"\n    CloseAction={() => console.log('unidir X action')}\n    buttonsZone={\n      <>\n        <input\n          className=\"btn btn-link link-orange\"\n          type=\"button\"\n          \n          value={'Cancelar'}\n          onClick={() => console.log('cancelar')}\n        />\n        <input\n          className=\"btn-orange\"\n          type=\"button\"\n          \n          value={'Aceptar'}\n          onClick={() => {\n            console.log('aceptar')\n          }}\n        />\n      </>\n    }\n    buttonsZoneStyle={{\n      textAlign: 'center',\n      paddingBottom: '10px',\n      paddingTop: '10px',\n    }}\n    {...args}\n  />\n)",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => (\n  <ModalMessage\n    Icono={<SvgComponent />}\n    IconoColor=\"--blue\"\n    CloseAction={() => console.log('unidir X action')}\n    buttonsZone={\n      <>\n        <input\n          className=\"btn btn-link link-orange\"\n          type=\"button\"\n          \n          value={'Cancelar'}\n          onClick={() => console.log('cancelar')}\n        />\n        <input\n          className=\"btn-orange\"\n          type=\"button\"\n          \n          value={'Aceptar'}\n          onClick={() => {\n            console.log('aceptar')\n          }}\n        />\n      </>\n    }\n    buttonsZoneStyle={{\n      textAlign: 'center',\n      paddingBottom: '10px',\n      paddingTop: '10px',\n    }}\n    {...args}\n  />\n)",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => (\n  <ModalMessage\n    Icono={<SvgComponent />}\n    IconoColor=\"--blue\"\n    CloseAction={() => console.log('unidir X action')}\n    buttonsZone={\n      <>\n        <input\n          className=\"btn btn-link link-orange\"\n          type=\"button\"\n          \n          value={'Cancelar'}\n          onClick={() => console.log('cancelar')}\n        />\n        <input\n          className=\"btn-orange\"\n          type=\"button\"\n          \n          value={'Aceptar'}\n          onClick={() => {\n            console.log('aceptar')\n          }}\n        />\n      </>\n    }\n    buttonsZoneStyle={{\n      textAlign: 'center',\n      paddingBottom: '10px',\n      paddingTop: '10px',\n    }}\n    {...args}\n  />\n)",
            },
          },
          Small.parameters,
        ))
    },
    1758: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var slicedToArray = __webpack_require__(64),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        map = __webpack_require__(83),
        map_default = __webpack_require__.n(map),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        index_of = __webpack_require__(95),
        index_of_default = __webpack_require__.n(index_of),
        get_own_property_symbols = __webpack_require__(78),
        get_own_property_symbols_default = __webpack_require__.n(
          get_own_property_symbols,
        ),
        slice = __webpack_require__(484),
        slice_default = __webpack_require__.n(slice)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      function paginator_esm_t(e, t) {
        var r = {}
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            index_of_default()(t).call(t, a) < 0 &&
            (r[a] = e[a])
        if (
          null != e &&
          'function' == typeof get_own_property_symbols_default.a
        ) {
          var o = 0
          for (a = get_own_property_symbols_default()(e); o < a.length; o++)
            index_of_default()(t).call(t, a[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
              (r[a[o]] = e[a[o]])
        }
        return r
      }
      !(function (e, t) {
        void 0 === t && (t = {})
        var r = t.insertAt
        if ('undefined' != typeof document) {
          var a = document.head || document.getElementsByTagName('head')[0],
            o = document.createElement('style')
          ;(o.type = 'text/css'),
            'top' === r && a.firstChild
              ? a.insertBefore(o, a.firstChild)
              : a.appendChild(o),
            o.styleSheet
              ? (o.styleSheet.cssText = e)
              : o.appendChild(document.createTextNode(e))
        }
      })(
        '.paginador{height:40px;width:200px}@media screen and (min-width:358px) and (max-width:768px){.paginador{margin:0 auto;padding:0 45px}}.paginadorArrowLeft,.paginadorArrowright{color:#f60;float:left;font:normal normal normal 14px/24px Font Awesome 5 Free}.contentPaginador{color:#777;float:left;font:normal normal 300 14px/16px Roboto;letter-spacing:0;margin-left:10px;margin-right:10px;opacity:1}.paginadorArrowLeft,.paginadorArrowright{cursor:pointer}.paginadorArrowLeft.inactive,.paginadorArrowright.inactive{color:#ccc;cursor:default}.paginator{color:#777;font:normal normal 300 14px/16px Roboto;letter-spacing:0;opacity:1}',
        {insertAt: 'top'},
      )
      var paginator_esm_r = function r(_r) {
          var _r$className = _r.className,
            a = void 0 === _r$className ? '' : _r$className,
            o = _r.title,
            i = _r.titleId,
            s = paginator_esm_t(_r, ['className', 'title', 'titleId'])
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                className: a,
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-labelledby': i,
              },
              s,
            ),
            o ? react_default.a.createElement('title', {id: i}, o) : null,
            react_default.a.createElement('path', {
              d: 'M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z',
              stroke: 'none',
            }),
          )
        },
        paginator_esm_a = function a(r) {
          r.className
          var o = r.title,
            i = r.titleId,
            s = paginator_esm_t(r, ['className', 'title', 'titleId'])
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                className: 'prefix__paginadorArrowright',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-labelledby': i,
              },
              s,
            ),
            o ? react_default.a.createElement('title', {id: i}, o) : null,
            react_default.a.createElement('path', {
              d: 'M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z',
              stroke: 'none',
            }),
          )
        },
        paginator_esm_o = (function (_e$Component) {
          inherits_default()(o, _e$Component)
          var _super = _createSuper(o)
          function o() {
            return (
              classCallCheck_default()(this, o), _super.apply(this, arguments)
            )
          }
          return (
            createClass_default()(o, [
              {
                key: 'render',
                value: function render() {
                  var _this = this
                  return react_default.a.createElement(
                    'div',
                    {style: {padding: '15px'}},
                    this.props.totalPages > 0 &&
                      react_default.a.createElement(
                        'div',
                        {
                          className: 'paginador',
                          tabIndex: 0,
                          'aria-label':
                            'total number of pages ' + this.props.totalPages,
                        },
                        react_default.a.createElement(
                          'div',
                          {
                            role: 'button',
                            tabIndex: 0,
                            'aria-label':
                              'left arrow go previous page, current page ' +
                              this.props.currPage,
                            onKeyDown: function onKeyDown() {
                              return 1 !== _this.props.currPage
                                ? _this.props.changePage(
                                    _this.props.currPage - 1,
                                  )
                                : null
                            },
                            className:
                              1 === this.props.currPage
                                ? 'paginadorArrowLeft inactive'
                                : 'paginadorArrowLeft',
                            onClick: function onClick() {
                              return 1 !== _this.props.currPage
                                ? _this.props.changePage(
                                    _this.props.currPage - 1,
                                  )
                                : null
                            },
                          },
                          react_default.a.createElement(paginator_esm_r, {
                            className:
                              1 === this.props.currPage
                                ? 'paginadorArrowLeft inactive'
                                : 'paginadorArrowLeft',
                          }),
                        ),
                        this.props.totalPages > 1
                          ? react_default.a.createElement(
                              'div',
                              {className: 'contentPaginador'},
                              this.props.currPage,
                              ' de ',
                              this.props.totalPages,
                              ' pag',
                            )
                          : react_default.a.createElement(
                              'div',
                              {className: 'contentPaginador'},
                              this.props.currPage,
                              ' de 1 pag',
                            ),
                        react_default.a.createElement(
                          'div',
                          {
                            role: 'button',
                            'aria-label':
                              'right arrow go next page, current page ' +
                              this.props.currPage,
                            className:
                              this.props.currPage === this.props.totalPages
                                ? 'paginadorArrowright inactive'
                                : 'paginadorArrowright',
                            tabIndex: 0,
                            onClick: function onClick() {
                              return _this.props.currPage !==
                                _this.props.totalPages
                                ? _this.props.changePage(
                                    _this.props.currPage + 1,
                                  )
                                : null
                            },
                            onKeyDown: function onKeyDown() {
                              return _this.props.currPage !==
                                _this.props.totalPages
                                ? _this.props.changePage(
                                    _this.props.currPage + 1,
                                  )
                                : null
                            },
                          },
                          react_default.a.createElement(paginator_esm_a, {
                            className:
                              this.props.currPage === this.props.totalPages
                                ? 'paginadorArrowright inactive'
                                : 'paginadorArrowright',
                          }),
                        ),
                      ),
                  )
                },
              },
            ]),
            o
          )
        })(react_default.a.Component),
        paginator_esm_i = (function (_e$Component2) {
          inherits_default()(i, _e$Component2)
          var _super2 = _createSuper(i)
          function i() {
            var _this2
            return (
              classCallCheck_default()(this, i),
              ((_this2 = _super2.apply(this, arguments)).changePage = function (
                e,
              ) {
                _this2.props.changePage(e)
              }),
              _this2
            )
          }
          return (
            createClass_default()(i, [
              {
                key: 'render',
                value: function render() {
                  var _context,
                    _this3 = this,
                    t = Math.ceil(this.props.size / this.props.limit)
                  return react_default.a.createElement(
                    'div',
                    {className: 'paginator pl-0 pr-0 clearfix', tabIndex: 0},
                    react_default.a.Children.count(this.props.children) >=
                      this.props.limit
                      ? slice_default()(
                          (_context = react_default.a.Children.toArray(
                            this.props.children,
                          )),
                        ).call(_context, 0, this.props.limit)
                      : this.props.children,
                    t > 1 &&
                      react_default.a.createElement(
                        'div',
                        {className: 'row col-sm-12'},
                        react_default.a.createElement(paginator_esm_o, {
                          changePage: function changePage(e) {
                            return _this3.changePage(e)
                          },
                          totalPages: t,
                          currPage: this.props.currentPage,
                        }),
                      ),
                  )
                },
              },
            ]),
            i
          )
        })(react_default.a.Component)
      ;(paginator_esm_i.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'i',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/paginator/dist/paginator.esm.js'] =
            {
              name: 'i',
              docgenInfo: paginator_esm_i.__docgenInfo,
              path: 'packages/paginator/dist/paginator.esm.js',
            })
      var download_esm = __webpack_require__(268),
        jsx_runtime = __webpack_require__(4),
        paginator_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/Paginator',
            component: paginator_esm_i,
            argTypes: {},
          }),
          function Template(args) {
            var original = [
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
                {Url: 'url1', Nombre: 'hector1'},
              ],
              _useState = Object(react.useState)(original),
              _useState2 = slicedToArray_default()(_useState, 2),
              filteredData = _useState2[0],
              setfilteredData = _useState2[1],
              _useState3 = Object(react.useState)(1),
              _useState4 = slicedToArray_default()(_useState3, 2),
              currentPage = _useState4[0],
              setcurrentPage = _useState4[1],
              filterData = function filterData(data, cpage, limit) {
                for (
                  var currentData = [], i = 0;
                  i < limit && limit * (cpage - 1) + i < data.length;
                  i++
                )
                  currentData.push(data[limit * (cpage - 1) + i])
                0 === currentData.length || setfilteredData(currentData)
              }
            return Object(jsx_runtime.jsx)(
              paginator_esm_i,
              assign_default()(
                {
                  changePage: function changePage(cpage) {
                    return (function changePage(cpage) {
                      setcurrentPage(cpage), filterData(original, cpage, 10)
                    })(cpage)
                  },
                  size: original.length,
                  limit: 10,
                  currentPage: currentPage,
                },
                args,
                {
                  children:
                    null == filteredData
                      ? void 0
                      : map_default()(filteredData).call(
                          filteredData,
                          function (el, index) {
                            return Object(jsx_runtime.jsx)(
                              download_esm.a,
                              {
                                filename: el.Nombre,
                                messageZipPart1: '',
                                messageZipPart2: '',
                                disabled: !1,
                                btnMessage: el.Nombre,
                                querySickLeaves: function querySickLeaves() {
                                  return (function ZipDescargaHandler(
                                    url,
                                    nombre,
                                  ) {
                                    console.log('url, nombre', url, nombre)
                                  })(el.Url, el.Nombre)
                                },
                              },
                              index,
                            )
                          },
                        ),
                },
              ),
            )
          })
      paginator_stories_Template.displayName = 'Template'
      var Primary = bind_default()(paginator_stories_Template).call(
        paginator_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(paginator_stories_Template).call(
        paginator_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(paginator_stories_Template).call(
        paginator_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const original = [\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n  ]\n  const [filteredData, setfilteredData] = useState(original)\n  const [currentPage, setcurrentPage] = useState(1)\n  const changePage = cpage => {\n    setcurrentPage(cpage)\n    filterData(original, cpage, 10)\n  }\n  const ZipDescargaHandler = (url, nombre) => {\n    console.log('url, nombre', url, nombre)\n  }\n  const filterData = (data, cpage, limit) => {\n    const currentData = []\n\n    for (let i = 0; i < limit && limit * (cpage - 1) + i < data.length; i++) {\n      currentData.push(data[limit * (cpage - 1) + i])\n    }\n    if (currentData.length === 0) {\n      //calldataZipsStore(2, null, true); //clean data\n    } else {\n      setfilteredData(currentData)\n    }\n  }\n\n  return (\n    <Paginator\n      changePage={cpage => changePage(cpage)}\n      size={original.length}\n      limit={10}\n      currentPage={currentPage}\n      {...args}\n    >\n      {filteredData?.map((el, index) => {\n        return (\n          <Download\n            filename={el.Nombre}\n            messageZipPart1=\"\"\n            messageZipPart2=\"\"\n            disabled={false}\n            btnMessage={el.Nombre}\n            querySickLeaves={() => ZipDescargaHandler(el.Url, el.Nombre)}\n            key={index}\n          />\n        )\n      })}\n    </Paginator>\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const original = [\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n  ]\n  const [filteredData, setfilteredData] = useState(original)\n  const [currentPage, setcurrentPage] = useState(1)\n  const changePage = cpage => {\n    setcurrentPage(cpage)\n    filterData(original, cpage, 10)\n  }\n  const ZipDescargaHandler = (url, nombre) => {\n    console.log('url, nombre', url, nombre)\n  }\n  const filterData = (data, cpage, limit) => {\n    const currentData = []\n\n    for (let i = 0; i < limit && limit * (cpage - 1) + i < data.length; i++) {\n      currentData.push(data[limit * (cpage - 1) + i])\n    }\n    if (currentData.length === 0) {\n      //calldataZipsStore(2, null, true); //clean data\n    } else {\n      setfilteredData(currentData)\n    }\n  }\n\n  return (\n    <Paginator\n      changePage={cpage => changePage(cpage)}\n      size={original.length}\n      limit={10}\n      currentPage={currentPage}\n      {...args}\n    >\n      {filteredData?.map((el, index) => {\n        return (\n          <Download\n            filename={el.Nombre}\n            messageZipPart1=\"\"\n            messageZipPart2=\"\"\n            disabled={false}\n            btnMessage={el.Nombre}\n            querySickLeaves={() => ZipDescargaHandler(el.Url, el.Nombre)}\n            key={index}\n          />\n        )\n      })}\n    </Paginator>\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const original = [\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n    {Url: 'url1', Nombre: 'hector1'},\n  ]\n  const [filteredData, setfilteredData] = useState(original)\n  const [currentPage, setcurrentPage] = useState(1)\n  const changePage = cpage => {\n    setcurrentPage(cpage)\n    filterData(original, cpage, 10)\n  }\n  const ZipDescargaHandler = (url, nombre) => {\n    console.log('url, nombre', url, nombre)\n  }\n  const filterData = (data, cpage, limit) => {\n    const currentData = []\n\n    for (let i = 0; i < limit && limit * (cpage - 1) + i < data.length; i++) {\n      currentData.push(data[limit * (cpage - 1) + i])\n    }\n    if (currentData.length === 0) {\n      //calldataZipsStore(2, null, true); //clean data\n    } else {\n      setfilteredData(currentData)\n    }\n  }\n\n  return (\n    <Paginator\n      changePage={cpage => changePage(cpage)}\n      size={original.length}\n      limit={10}\n      currentPage={currentPage}\n      {...args}\n    >\n      {filteredData?.map((el, index) => {\n        return (\n          <Download\n            filename={el.Nombre}\n            messageZipPart1=\"\"\n            messageZipPart2=\"\"\n            disabled={false}\n            btnMessage={el.Nombre}\n            querySickLeaves={() => ZipDescargaHandler(el.Url, el.Nombre)}\n            key={index}\n          />\n        )\n      })}\n    </Paginator>\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1759: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
        _templateObject12,
        _templateObject13,
        _templateObject14,
        _templateObject15,
        _templateObject16,
        _templateObject17,
        _templateObject18,
        _templateObject19,
        _templateObject20,
        slicedToArray = __webpack_require__(64),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        taggedTemplateLiteralLoose = __webpack_require__(13),
        taggedTemplateLiteralLoose_default = __webpack_require__.n(
          taggedTemplateLiteralLoose,
        ),
        set_timeout = (__webpack_require__(606), __webpack_require__(272)),
        set_timeout_default = __webpack_require__.n(set_timeout),
        styled_components_browser_esm = __webpack_require__(14),
        print = __webpack_require__(918),
        print_default = __webpack_require__.n(print),
        Element_scrollBy = __webpack_require__(1778),
        Element_scrollIntoView = __webpack_require__(1779),
        Element_scroll = __webpack_require__(363),
        Window_scrollBy = __webpack_require__(1786),
        loader_esm = __webpack_require__(270),
        entry = __webpack_require__(278),
        pdf_esm_w = function w(t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z',
              stroke: 'none',
            }),
          )
        },
        pdf_esm_u = function u(t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z',
              stroke: 'none',
            }),
          )
        },
        pdf_esm_b = Object(styled_components_browser_esm.b)(function (t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                'data-testid': 'closeIcon_Pdf',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z',
              stroke: 'none',
            }),
          )
        })(
          _templateObject ||
            (_templateObject = taggedTemplateLiteralLoose_default()([
              '\n  &:hover {\n    color: #e60000c4 !important;\n  }\n',
            ])),
        ),
        pdf_esm_v = styled_components_browser_esm.b.div(
          _templateObject2 ||
            (_templateObject2 = taggedTemplateLiteralLoose_default()([
              '\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 5;\n  text-align: center;\n  min-height: 900px;\n  ',
              '\n  flex-direction: column;\n  font-size: calc(10px + 1.45vmin);\n  color: white;\n\n  border-radius: 4px;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  -webkit-box-align: center;\n  align-items: center;\n  margin-top: 4px;\n  padding-bottom: 39px;\n\n  width: 100%;\n',
            ])),
          function (_ref) {
            return _ref.showtoolbar
              ? Object(styled_components_browser_esm.a)(
                  _templateObject3 ||
                    (_templateObject3 = taggedTemplateLiteralLoose_default()([
                      '\n          background-color: rgb(40, 44, 52);\n        ',
                    ])),
                )
              : Object(styled_components_browser_esm.a)(
                  _templateObject4 ||
                    (_templateObject4 = taggedTemplateLiteralLoose_default()([
                      '\n          background-color: transparent;\n        ',
                    ])),
                )
          },
        ),
        pdf_esm_f = styled_components_browser_esm.b.div(
          _templateObject5 ||
            (_templateObject5 = taggedTemplateLiteralLoose_default()([
              '\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n',
            ])),
        )
      styled_components_browser_esm.b.iframe(
        _templateObject6 ||
          (_templateObject6 = taggedTemplateLiteralLoose_default()([
            '\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  position: absolute;\n',
          ])),
      )
      var pdf_esm_k = styled_components_browser_esm.b.div(
        _templateObject7 ||
          (_templateObject7 = taggedTemplateLiteralLoose_default()([
            '\n  display: flex;\n  justify-content: space-evenly;\n  width: 96%;\n  align-items: center;\n  background-color: white;\n  margin: 15px 0;\n  padding: 5px 10px;\n  border-radius: 3px;\n  max-width: 640px;\n  & > svg {\n    font-size: 23px;\n    color: rgb(40, 44, 52);\n    //margin: 0 10px;\n    cursor: pointer;\n    &:hover {\n      color: rgb(255, 102, 0);\n    }\n  }\n',
          ])),
      )
      styled_components_browser_esm.b.div(
        _templateObject8 ||
          (_templateObject8 = taggedTemplateLiteralLoose_default()([''])),
      )
      var pdf_esm_x = styled_components_browser_esm.b.span(
        _templateObject9 ||
          (_templateObject9 = taggedTemplateLiteralLoose_default()([
            '\n  color: rgb(40, 44, 52);\n',
          ])),
      )
      styled_components_browser_esm.b.input(
        _templateObject10 ||
          (_templateObject10 = taggedTemplateLiteralLoose_default()([
            '\n  color: rgb(40, 44, 52);\n',
          ])),
      )
      var pdf_esm_E = Object(styled_components_browser_esm.b)(function (t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z',
              stroke: 'none',
            }),
          )
        })(
          _templateObject11 ||
            (_templateObject11 = taggedTemplateLiteralLoose_default()([
              '\n  &&& {\n    ',
              '\n  }\n',
            ])),
          function (_ref2) {
            var e = _ref2.zoominclass,
              t = _ref2.disabledzoomin
            return (
              (e || t) &&
              Object(styled_components_browser_esm.a)(
                _templateObject12 ||
                  (_templateObject12 = taggedTemplateLiteralLoose_default()([
                    '\n        cursor: not-allowed;\n        &:hover {\n          color: black;\n        }\n      ',
                  ])),
              )
            )
          },
        ),
        pdf_esm_C = Object(styled_components_browser_esm.b)(function (t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z',
              stroke: 'none',
            }),
          )
        })(
          _templateObject13 ||
            (_templateObject13 = taggedTemplateLiteralLoose_default()([
              '\n  &&& {\n    ',
              '\n  }\n',
            ])),
          function (_ref3) {
            return (
              _ref3.zoomoutclass &&
              Object(styled_components_browser_esm.a)(
                _templateObject14 ||
                  (_templateObject14 = taggedTemplateLiteralLoose_default()([
                    '\n        cursor: not-allowed;\n        &:hover {\n          color: black;\n        }\n      ',
                  ])),
              )
            )
          },
        ),
        pdf_esm_z = Object(styled_components_browser_esm.b)(function (t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 448 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z',
              stroke: 'none',
            }),
          )
        })(
          _templateObject15 ||
            (_templateObject15 = taggedTemplateLiteralLoose_default()([''])),
        ),
        pdf_esm_P = Object(styled_components_browser_esm.b)(function (t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 448 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z',
              stroke: 'none',
            }),
          )
        })(
          _templateObject16 ||
            (_templateObject16 = taggedTemplateLiteralLoose_default()([''])),
        ),
        pdf_esm_y = Object(styled_components_browser_esm.b)(function (t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 192 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z',
              stroke: 'none',
            }),
          )
        })(
          _templateObject17 ||
            (_templateObject17 = taggedTemplateLiteralLoose_default()([
              '\n  &&& {\n    ',
              '\n  }\n',
            ])),
          function (_ref4) {
            return (
              _ref4.firstpageclass &&
              Object(styled_components_browser_esm.a)(
                _templateObject18 ||
                  (_templateObject18 = taggedTemplateLiteralLoose_default()([
                    '\n        cursor: not-allowed;\n        &:hover {\n          color: black;\n        }\n      ',
                  ])),
              )
            )
          },
        ),
        pdf_esm_N = Object(styled_components_browser_esm.b)(function (t) {
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 192 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              t,
            ),
            react_default.a.createElement('path', {
              d: 'M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z',
              stroke: 'none',
            }),
          )
        })(
          _templateObject19 ||
            (_templateObject19 = taggedTemplateLiteralLoose_default()([
              '\n  &&& {\n    ',
              '\n  }\n',
            ])),
          function (_ref5) {
            return (
              _ref5.lastpageclass &&
              Object(styled_components_browser_esm.a)(
                _templateObject20 ||
                  (_templateObject20 = taggedTemplateLiteralLoose_default()([
                    '\n        cursor: not-allowed;\n        &:hover {\n          color: black;\n        }\n      ',
                  ])),
              )
            )
          },
        ),
        pdf_esm_S = function S(_ref6) {
          var t = _ref6.base64,
            o = _ref6.NombrePdf
          return react_default.a.createElement(pdf_esm_w, {
            onClick: function onClick() {
              print_default()({
                printable: t,
                type: 'pdf',
                base64: !0,
                documentTitle: o,
              })
            },
          })
        },
        pdf_esm_L = function L(_ref7) {
          var o = _ref7.pageNumber,
            l = _ref7.numPages,
            r = _ref7.setPageNumber,
            c = _ref7.scale,
            n = _ref7.setScale,
            s = _ref7.dowloadPdfDataMobile,
            a = _ref7.NombrePdf,
            i = _ref7.base64,
            m = _ref7.setToogleShow,
            _t = Object(react.useState)(!1),
            _t2 = slicedToArray_default()(_t, 2),
            d = _t2[0],
            h = _t2[1],
            p = 1 === o,
            g = o === l,
            w = !!p,
            v = !!g,
            f = c < 0.6,
            L = c >= 2,
            M = !!f,
            j = !!L
          return react_default.a.createElement(
            pdf_esm_k,
            null,
            react_default.a.createElement(pdf_esm_P, {
              className: w ? 'disablingIcon' : '',
              onClick: function onClick(e) {
                p || r(1)
              },
              firstpageclass: w,
            }),
            react_default.a.createElement(pdf_esm_y, {
              onClick: function onClick(e) {
                p || r(o - 1)
              },
              firstpageclass: w,
            }),
            react_default.a.createElement(
              pdf_esm_x,
              null,
              'Toolbar ' + o + ' De ' + l,
            ),
            react_default.a.createElement(pdf_esm_N, {
              onClick: function onClick(e) {
                e.stopPropagation(), g || r(o + 1)
              },
              lastpageclass: v,
            }),
            react_default.a.createElement(pdf_esm_z, {
              className: v ? 'disablingIcon' : '',
              onClick: function onClick(e) {
                e.stopPropagation(), g || r(l)
              },
              lastpageclass: v,
            }),
            react_default.a.createElement(pdf_esm_C, {
              onClick: function onClick(e) {
                e.stopPropagation(), f || n(c - 0.1)
              },
              zoomoutclass: M,
            }),
            react_default.a.createElement(
              pdf_esm_x,
              null,
              (100 * c).toFixed(),
              '%',
            ),
            react_default.a.createElement(pdf_esm_E, {
              onClick: function onClick(e) {
                e.stopPropagation()
                var t = document.querySelector('.pdf__container'),
                  o = document.querySelector('.pdf__wrapper'),
                  l = c - 0.2
                o.clientWidth * l >= t.clientWidth
                  ? h(!0)
                  : (h(!1), L || n(c + 0.1))
              },
              zoominclass: j,
              disabledzoomin: !0 === d,
            }),
            react_default.a.createElement(pdf_esm_u, {
              onClick: function onClick(e) {
                e.stopPropagation(), s && s(a, i)
              },
            }),
            react_default.a.createElement(pdf_esm_S, {base64: i, NombrePdf: a}),
            react_default.a.createElement(pdf_esm_b, {
              onClick: function onClick(e) {
                e.stopPropagation(),
                  m(function (e) {
                    return !e
                  })
              },
            }),
          )
        }
      entry.c.GlobalWorkerOptions.workerSrc =
        '//cdnjs.cloudflare.com/ajax/libs/pdf.js/' +
        entry.c.version +
        '/pdf.worker.min.js'
      var pdf_esm_M = function M(_ref8) {
          var _t13,
            _t14,
            e,
            l,
            r = _ref8.dataUri,
            c = _ref8.dowloadPdfDataMobile,
            n = _ref8.NombrePdf,
            h = _ref8.base64,
            w = _ref8.documentElementName,
            u = _ref8.setToogleShow,
            _t3 = Object(react.useState)(1),
            _t4 = slicedToArray_default()(_t3, 2),
            b = _t4[0],
            k = _t4[1],
            _t5 = Object(react.useState)(null),
            _t6 = slicedToArray_default()(_t5, 2),
            x = _t6[0],
            E = _t6[1],
            _t7 = Object(react.useState)(1),
            _t8 = slicedToArray_default()(_t7, 2),
            C = _t8[0],
            z = _t8[1],
            _ref9 =
              ((_t13 = Object(react.useState)(null)),
              (_t14 = slicedToArray_default()(_t13, 2)),
              (e = _t14[0]),
              (l = _t14[1]),
              [
                e,
                Object(react.useCallback)(function (e) {
                  null !== e && l(e)
                }, []),
                function (e, t, o) {
                  var l =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 'smooth'
                  Object(Element_scrollBy.a)(e, {top: t, left: o, behavior: l})
                },
                function (e) {
                  var l,
                    r,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '-180px',
                    o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 'center'
                  e &&
                    ((l = e.style.position),
                    (r = e.style.top),
                    (e.style.position = 'relative'),
                    (e.style.top = t + 'px'),
                    Object(Element_scrollIntoView.a)(e, {
                      behavior: 'smooth',
                      block: o,
                    }),
                    (e.style.top = r),
                    (e.style.position = l))
                },
              ]),
            _ref10 = slicedToArray_default()(_ref9, 2),
            P = _ref10[0],
            y = _ref10[1],
            _t9 = Object(react.useState)(!0),
            _t10 = slicedToArray_default()(_t9, 2),
            N = _t10[0],
            S = _t10[1],
            _t11 = Object(react.useState)(!1),
            _t12 = slicedToArray_default()(_t11, 2),
            M = _t12[0],
            j = _t12[1]
          return (
            Object(react.useEffect)(
              function () {
                P &&
                  set_timeout_default()(function () {
                    document.querySelector(w) &&
                      (Object(Element_scroll.a)(document.querySelector(w), {
                        left: 0,
                        top: -1e3,
                      }),
                      Object(Window_scrollBy.a)({
                        behavior: 'smooth',
                        top: -1e3,
                        left: 0,
                      }))
                  }, 100)
              },
              [P],
            ),
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement(loader_esm.a, {loading: N}),
              react_default.a.createElement(
                pdf_esm_v,
                {className: 'pdf__container', showtoolbar: M},
                M &&
                  react_default.a.createElement(pdf_esm_L, {
                    scale: b,
                    setScale: k,
                    numPages: x,
                    pageNumber: C,
                    setPageNumber: z,
                    dowloadPdfDataMobile: c,
                    NombrePdf: n,
                    base64: h,
                    setToogleShow: u,
                  }),
                react_default.a.createElement(
                  pdf_esm_f,
                  {className: 'pdf__wrapper'},
                  react_default.a.createElement(
                    entry.a,
                    {
                      file: r,
                      onLoadSuccess: function onLoadSuccess(_ref11) {
                        var e = _ref11.numPages
                        j(!0), S(!1), E(e)
                      },
                      renderMode: 'svg',
                    },
                    react_default.a.createElement(entry.b, {
                      pageNumber: C,
                      scale: b,
                      ref: y,
                    }),
                  ),
                ),
              ),
            )
          )
        },
        pdf_esm_j = function j(_ref12) {
          var t = _ref12.NombrePdf,
            o = _ref12.dowloadPdfDataMobile,
            l = _ref12.base64,
            r = _ref12.ToogleShow,
            c = _ref12.dataUrl,
            n = _ref12.domElementName,
            s = _ref12.setToogleShow
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            r &&
              null !== c &&
              react_default.a.createElement(pdf_esm_M, {
                dataUri: c,
                dowloadPdfDataMobile: o,
                NombrePdf: t,
                base64: l,
                setToogleShow: s,
                documentElementName: n,
              }),
          )
        }
      ;(pdf_esm_j.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'j',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/pdf/dist/pdf.esm.js'] = {
            name: 'j',
            docgenInfo: pdf_esm_j.__docgenInfo,
            path: 'packages/pdf/dist/pdf.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        pdf_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/PdfFile',
            component: pdf_esm_j,
            argTypes: {},
          }),
          function Template(args) {
            var _useState = Object(react.useState)(!0),
              _useState2 = slicedToArray_default()(_useState, 2),
              show = _useState2[0],
              setToogleShowd = _useState2[1]
            return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                Object(jsx_runtime.jsx)('div', {id: 'prueba_pdf'}),
                Object(jsx_runtime.jsx)(
                  pdf_esm_j,
                  assign_default()(
                    {
                      NombrePdf: 'nombre.pdf',
                      dataUrl:
                        'https://s2.q4cdn.com/498544986/files/doc_downloads/test.pdf',
                      base64:
                        'JVBERi0xLjINJeLjz9MNCjMgMCBvYmoNPDwgDS9MaW5lYXJpemVkIDEgDS9PIDUgDS9IIFsgNzYwIDE1NyBdIA0vTCAzOTA4IA0vRSAzNjU4IA0vTiAxIA0vVCAzNzMxIA0+PiANZW5kb2JqDSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4cmVmDTMgMTUgDTAwMDAwMDAwMTYgMDAwMDAgbg0KMDAwMDAwMDY0NCAwMDAwMCBuDQowMDAwMDAwOTE3IDAwMDAwIG4NCjAwMDAwMDEwNjggMDAwMDAgbg0KMDAwMDAwMTIyNCAwMDAwMCBuDQowMDAwMDAxNDEwIDAwMDAwIG4NCjAwMDAwMDE1ODkgMDAwMDAgbg0KMDAwMDAwMTc2OCAwMDAwMCBuDQowMDAwMDAyMTk3IDAwMDAwIG4NCjAwMDAwMDIzODMgMDAwMDAgbg0KMDAwMDAwMjc2OSAwMDAwMCBuDQowMDAwMDAzMTcyIDAwMDAwIG4NCjAwMDAwMDMzNTEgMDAwMDAgbg0KMDAwMDAwMDc2MCAwMDAwMCBuDQowMDAwMDAwODk3IDAwMDAwIG4NCnRyYWlsZXINPDwNL1NpemUgMTgNL0luZm8gMSAwIFIgDS9Sb290IDQgMCBSIA0vUHJldiAzNzIyIA0vSURbPGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPjxkNzBmNDZjNWJhNGZlOGJkNDlhOWRkMDU5OWIwYjE1MT5dDT4+DXN0YXJ0eHJlZg0wDSUlRU9GDSAgICAgIA00IDAgb2JqDTw8IA0vVHlwZSAvQ2F0YWxvZyANL1BhZ2VzIDIgMCBSIA0vT3BlbkFjdGlvbiBbIDUgMCBSIC9YWVogbnVsbCBudWxsIG51bGwgXSANL1BhZ2VNb2RlIC9Vc2VOb25lIA0+PiANZW5kb2JqDTE2IDAgb2JqDTw8IC9TIDM2IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlIC9MZW5ndGggMTcgMCBSID4+IA1zdHJlYW0NCkiJYmBg4GVgYPrBAAScFxiwAQ4oLQDE3FDMwODHwKkyubctWLfmpsmimQ5AEYAAAwC3vwe0DWVuZHN0cmVhbQ1lbmRvYmoNMTcgMCBvYmoNNTMgDWVuZG9iag01IDAgb2JqDTw8IA0vVHlwZSAvUGFnZSANL1BhcmVudCAyIDAgUiANL1Jlc291cmNlcyA2IDAgUiANL0NvbnRlbnRzIDEwIDAgUiANL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSANL0Nyb3BCb3ggWyAwIDAgNjEyIDc5MiBdIA0vUm90YXRlIDAgDT4+IA1lbmRvYmoNNiAwIG9iag08PCANL1Byb2NTZXQgWyAvUERGIC9UZXh0IF0gDS9Gb250IDw8IC9UVDIgOCAwIFIgL1RUNCAxMiAwIFIgL1RUNiAxMyAwIFIgPj4gDS9FeHRHU3RhdGUgPDwgL0dTMSAxNSAwIFIgPj4gDS9Db2xvclNwYWNlIDw8IC9DczUgOSAwIFIgPj4gDT4+IA1lbmRvYmoNNyAwIG9iag08PCANL1R5cGUgL0ZvbnREZXNjcmlwdG9yIA0vQXNjZW50IDg5MSANL0NhcEhlaWdodCAwIA0vRGVzY2VudCAtMjE2IA0vRmxhZ3MgMzQgDS9Gb250QkJveCBbIC01NjggLTMwNyAyMDI4IDEwMDcgXSANL0ZvbnROYW1lIC9UaW1lc05ld1JvbWFuIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNOCAwIG9iag08PCANL1R5cGUgL0ZvbnQgDS9TdWJ0eXBlIC9UcnVlVHlwZSANL0ZpcnN0Q2hhciAzMiANL0xhc3RDaGFyIDMyIA0vV2lkdGhzIFsgMjUwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL1RpbWVzTmV3Um9tYW4gDS9Gb250RGVzY3JpcHRvciA3IDAgUiANPj4gDWVuZG9iag05IDAgb2JqDVsgDS9DYWxSR0IgPDwgL1doaXRlUG9pbnQgWyAwLjk1MDUgMSAxLjA4OSBdIC9HYW1tYSBbIDIuMjIyMjEgMi4yMjIyMSAyLjIyMjIxIF0gDS9NYXRyaXggWyAwLjQxMjQgMC4yMTI2IDAuMDE5MyAwLjM1NzYgMC43MTUxOSAwLjExOTIgMC4xODA1IDAuMDcyMiAwLjk1MDUgXSA+PiANDV0NZW5kb2JqDTEwIDAgb2JqDTw8IC9MZW5ndGggMzU1IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlID4+IA1zdHJlYW0NCkiJdJDBTsMwEETv/oo92ohuvXHsJEeggOCEwDfEIU1SCqIJIimIv2dthyJVQpGc0Xo88+xzL5beZ0DgN4IIq6oCzd8sK43amAyK3GKmTQV+J5YXo4VmjDYNYyOW1w8Ez6PQ4JuwfAkJyr+yXNgSSwt+NU+4Kp+rcg4uy9Q1a6MdarLcpgvUeUGh7RBFSLk1f1n+5FgsHJaZttFqA+tKLJhfZ3kEY+VcoHuUfvui2O3kCL9COSwk1Ok3deMEd6srUCVa2Q7Nftf1Ewar5a4nfxuu4v59NcLMGAKXlcjMLtwj1BsTQCITUSK52cC3IoNGDnto6l5VmEv4YAwjO8VWJ+s2DSeGttw/qmA/PZyLu3vY1p9p0MGZIs2iHdZxjwdNSkzedT0pJiW+CWl5H0O7uu2SB1JLn8rHlMkH2F+/xa20Rjp+nAQ39Ec8c1gz7KJ4T3H7uXnuwvSWl178CDAA/bGPlAplbmRzdHJlYW0NZW5kb2JqDTExIDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTYyOCAtMzc2IDIwMzQgMTA0OCBdIA0vRm9udE5hbWUgL0FyaWFsLEJvbGQgDS9JdGFsaWNBbmdsZSAwIA0vU3RlbVYgMTMzIA0+PiANZW5kb2JqDTEyIDAgb2JqDTw8IA0vVHlwZSAvRm9udCANL1N1YnR5cGUgL1RydWVUeXBlIA0vRmlyc3RDaGFyIDMyIA0vTGFzdENoYXIgMTE3IA0vV2lkdGhzIFsgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgDTAgMCAwIDAgMCA3MjIgMCA2MTEgMCAwIDAgMCAwIDAgMCAwIDAgNjY3IDAgMCAwIDYxMSAwIDAgMCAwIDAgMCANMCAwIDAgMCAwIDAgNTU2IDAgNTU2IDYxMSA1NTYgMCAwIDYxMSAyNzggMCAwIDAgODg5IDYxMSA2MTEgMCAwIA0wIDU1NiAzMzMgNjExIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsLEJvbGQgDS9Gb250RGVzY3JpcHRvciAxMSAwIFIgDT4+IA1lbmRvYmoNMTMgMCBvYmoNPDwgDS9UeXBlIC9Gb250IA0vU3VidHlwZSAvVHJ1ZVR5cGUgDS9GaXJzdENoYXIgMzIgDS9MYXN0Q2hhciAxMjEgDS9XaWR0aHMgWyAyNzggMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDI3OCAwIDI3OCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCANMCAwIDAgNjY3IDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCA3MjIgMCAwIDAgMCAwIDAgMCAwIA0wIDAgMCAwIDAgMCA1NTYgNTU2IDUwMCA1NTYgNTU2IDI3OCAwIDU1NiAyMjIgMCAwIDIyMiA4MzMgNTU2IDU1NiANNTU2IDAgMzMzIDUwMCAyNzggNTU2IDUwMCAwIDAgNTAwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsIA0vRm9udERlc2NyaXB0b3IgMTQgMCBSIA0+PiANZW5kb2JqDTE0IDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTY2NSAtMzI1IDIwMjggMTAzNyBdIA0vRm9udE5hbWUgL0FyaWFsIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNMTUgMCBvYmoNPDwgDS9UeXBlIC9FeHRHU3RhdGUgDS9TQSBmYWxzZSANL1NNIDAuMDIgDS9UUiAvSWRlbnRpdHkgDT4+IA1lbmRvYmoNMSAwIG9iag08PCANL1Byb2R1Y2VyIChBY3JvYmF0IERpc3RpbGxlciA0LjA1IGZvciBXaW5kb3dzKQ0vQ3JlYXRvciAoTWljcm9zb2Z0IFdvcmQgOS4wKQ0vTW9kRGF0ZSAoRDoyMDAxMDgyOTA5NTUwMS0wNycwMCcpDS9BdXRob3IgKEdlbmUgQnJ1bWJsYXkpDS9UaXRsZSAoVGhpcyBpcyBhIHRlc3QgUERGIGRvY3VtZW50KQ0vQ3JlYXRpb25EYXRlIChEOjIwMDEwODI5MDk1NDU3KQ0+PiANZW5kb2JqDTIgMCBvYmoNPDwgDS9UeXBlIC9QYWdlcyANL0tpZHMgWyA1IDAgUiBdIA0vQ291bnQgMSANPj4gDWVuZG9iag14cmVmDTAgMyANMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDAzNDI5IDAwMDAwIG4NCjAwMDAwMDM2NTggMDAwMDAgbg0KdHJhaWxlcg08PA0vU2l6ZSAzDS9JRFs8ZDcwZjQ2YzViYTRmZThiZDQ5YTlkZDA1OTliMGIxNTE+PGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPl0NPj4Nc3RhcnR4cmVmDTE3Mw0lJUVPRg0=',
                      setToogleShow: function setToogleShow() {
                        return setToogleShowd(function (x) {
                          return !x
                        })
                      },
                      domElementName: 'prueba_pdf',
                      ToogleShow: show,
                    },
                    args,
                  ),
                ),
              ],
            })
          }),
        Primary = bind_default()(pdf_stories_Template).call(
          pdf_stories_Template,
          {},
        )
      Primary.args = {}
      var Large = bind_default()(pdf_stories_Template).call(
        pdf_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(pdf_stories_Template).call(
        pdf_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const dataBase64 = `JVBERi0xLjINJeLjz9MNCjMgMCBvYmoNPDwgDS9MaW5lYXJpemVkIDEgDS9PIDUgDS9IIFsgNzYwIDE1NyBdIA0vTCAzOTA4IA0vRSAzNjU4IA0vTiAxIA0vVCAzNzMxIA0+PiANZW5kb2JqDSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4cmVmDTMgMTUgDTAwMDAwMDAwMTYgMDAwMDAgbg0KMDAwMDAwMDY0NCAwMDAwMCBuDQowMDAwMDAwOTE3IDAwMDAwIG4NCjAwMDAwMDEwNjggMDAwMDAgbg0KMDAwMDAwMTIyNCAwMDAwMCBuDQowMDAwMDAxNDEwIDAwMDAwIG4NCjAwMDAwMDE1ODkgMDAwMDAgbg0KMDAwMDAwMTc2OCAwMDAwMCBuDQowMDAwMDAyMTk3IDAwMDAwIG4NCjAwMDAwMDIzODMgMDAwMDAgbg0KMDAwMDAwMjc2OSAwMDAwMCBuDQowMDAwMDAzMTcyIDAwMDAwIG4NCjAwMDAwMDMzNTEgMDAwMDAgbg0KMDAwMDAwMDc2MCAwMDAwMCBuDQowMDAwMDAwODk3IDAwMDAwIG4NCnRyYWlsZXINPDwNL1NpemUgMTgNL0luZm8gMSAwIFIgDS9Sb290IDQgMCBSIA0vUHJldiAzNzIyIA0vSURbPGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPjxkNzBmNDZjNWJhNGZlOGJkNDlhOWRkMDU5OWIwYjE1MT5dDT4+DXN0YXJ0eHJlZg0wDSUlRU9GDSAgICAgIA00IDAgb2JqDTw8IA0vVHlwZSAvQ2F0YWxvZyANL1BhZ2VzIDIgMCBSIA0vT3BlbkFjdGlvbiBbIDUgMCBSIC9YWVogbnVsbCBudWxsIG51bGwgXSANL1BhZ2VNb2RlIC9Vc2VOb25lIA0+PiANZW5kb2JqDTE2IDAgb2JqDTw8IC9TIDM2IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlIC9MZW5ndGggMTcgMCBSID4+IA1zdHJlYW0NCkiJYmBg4GVgYPrBAAScFxiwAQ4oLQDE3FDMwODHwKkyubctWLfmpsmimQ5AEYAAAwC3vwe0DWVuZHN0cmVhbQ1lbmRvYmoNMTcgMCBvYmoNNTMgDWVuZG9iag01IDAgb2JqDTw8IA0vVHlwZSAvUGFnZSANL1BhcmVudCAyIDAgUiANL1Jlc291cmNlcyA2IDAgUiANL0NvbnRlbnRzIDEwIDAgUiANL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSANL0Nyb3BCb3ggWyAwIDAgNjEyIDc5MiBdIA0vUm90YXRlIDAgDT4+IA1lbmRvYmoNNiAwIG9iag08PCANL1Byb2NTZXQgWyAvUERGIC9UZXh0IF0gDS9Gb250IDw8IC9UVDIgOCAwIFIgL1RUNCAxMiAwIFIgL1RUNiAxMyAwIFIgPj4gDS9FeHRHU3RhdGUgPDwgL0dTMSAxNSAwIFIgPj4gDS9Db2xvclNwYWNlIDw8IC9DczUgOSAwIFIgPj4gDT4+IA1lbmRvYmoNNyAwIG9iag08PCANL1R5cGUgL0ZvbnREZXNjcmlwdG9yIA0vQXNjZW50IDg5MSANL0NhcEhlaWdodCAwIA0vRGVzY2VudCAtMjE2IA0vRmxhZ3MgMzQgDS9Gb250QkJveCBbIC01NjggLTMwNyAyMDI4IDEwMDcgXSANL0ZvbnROYW1lIC9UaW1lc05ld1JvbWFuIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNOCAwIG9iag08PCANL1R5cGUgL0ZvbnQgDS9TdWJ0eXBlIC9UcnVlVHlwZSANL0ZpcnN0Q2hhciAzMiANL0xhc3RDaGFyIDMyIA0vV2lkdGhzIFsgMjUwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL1RpbWVzTmV3Um9tYW4gDS9Gb250RGVzY3JpcHRvciA3IDAgUiANPj4gDWVuZG9iag05IDAgb2JqDVsgDS9DYWxSR0IgPDwgL1doaXRlUG9pbnQgWyAwLjk1MDUgMSAxLjA4OSBdIC9HYW1tYSBbIDIuMjIyMjEgMi4yMjIyMSAyLjIyMjIxIF0gDS9NYXRyaXggWyAwLjQxMjQgMC4yMTI2IDAuMDE5MyAwLjM1NzYgMC43MTUxOSAwLjExOTIgMC4xODA1IDAuMDcyMiAwLjk1MDUgXSA+PiANDV0NZW5kb2JqDTEwIDAgb2JqDTw8IC9MZW5ndGggMzU1IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlID4+IA1zdHJlYW0NCkiJdJDBTsMwEETv/oo92ohuvXHsJEeggOCEwDfEIU1SCqIJIimIv2dthyJVQpGc0Xo88+xzL5beZ0DgN4IIq6oCzd8sK43amAyK3GKmTQV+J5YXo4VmjDYNYyOW1w8Ez6PQ4JuwfAkJyr+yXNgSSwt+NU+4Kp+rcg4uy9Q1a6MdarLcpgvUeUGh7RBFSLk1f1n+5FgsHJaZttFqA+tKLJhfZ3kEY+VcoHuUfvui2O3kCL9COSwk1Ok3deMEd6srUCVa2Q7Nftf1Ewar5a4nfxuu4v59NcLMGAKXlcjMLtwj1BsTQCITUSK52cC3IoNGDnto6l5VmEv4YAwjO8VWJ+s2DSeGttw/qmA/PZyLu3vY1p9p0MGZIs2iHdZxjwdNSkzedT0pJiW+CWl5H0O7uu2SB1JLn8rHlMkH2F+/xa20Rjp+nAQ39Ec8c1gz7KJ4T3H7uXnuwvSWl178CDAA/bGPlAplbmRzdHJlYW0NZW5kb2JqDTExIDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTYyOCAtMzc2IDIwMzQgMTA0OCBdIA0vRm9udE5hbWUgL0FyaWFsLEJvbGQgDS9JdGFsaWNBbmdsZSAwIA0vU3RlbVYgMTMzIA0+PiANZW5kb2JqDTEyIDAgb2JqDTw8IA0vVHlwZSAvRm9udCANL1N1YnR5cGUgL1RydWVUeXBlIA0vRmlyc3RDaGFyIDMyIA0vTGFzdENoYXIgMTE3IA0vV2lkdGhzIFsgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgDTAgMCAwIDAgMCA3MjIgMCA2MTEgMCAwIDAgMCAwIDAgMCAwIDAgNjY3IDAgMCAwIDYxMSAwIDAgMCAwIDAgMCANMCAwIDAgMCAwIDAgNTU2IDAgNTU2IDYxMSA1NTYgMCAwIDYxMSAyNzggMCAwIDAgODg5IDYxMSA2MTEgMCAwIA0wIDU1NiAzMzMgNjExIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsLEJvbGQgDS9Gb250RGVzY3JpcHRvciAxMSAwIFIgDT4+IA1lbmRvYmoNMTMgMCBvYmoNPDwgDS9UeXBlIC9Gb250IA0vU3VidHlwZSAvVHJ1ZVR5cGUgDS9GaXJzdENoYXIgMzIgDS9MYXN0Q2hhciAxMjEgDS9XaWR0aHMgWyAyNzggMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDI3OCAwIDI3OCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCANMCAwIDAgNjY3IDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCA3MjIgMCAwIDAgMCAwIDAgMCAwIA0wIDAgMCAwIDAgMCA1NTYgNTU2IDUwMCA1NTYgNTU2IDI3OCAwIDU1NiAyMjIgMCAwIDIyMiA4MzMgNTU2IDU1NiANNTU2IDAgMzMzIDUwMCAyNzggNTU2IDUwMCAwIDAgNTAwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsIA0vRm9udERlc2NyaXB0b3IgMTQgMCBSIA0+PiANZW5kb2JqDTE0IDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTY2NSAtMzI1IDIwMjggMTAzNyBdIA0vRm9udE5hbWUgL0FyaWFsIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNMTUgMCBvYmoNPDwgDS9UeXBlIC9FeHRHU3RhdGUgDS9TQSBmYWxzZSANL1NNIDAuMDIgDS9UUiAvSWRlbnRpdHkgDT4+IA1lbmRvYmoNMSAwIG9iag08PCANL1Byb2R1Y2VyIChBY3JvYmF0IERpc3RpbGxlciA0LjA1IGZvciBXaW5kb3dzKQ0vQ3JlYXRvciAoTWljcm9zb2Z0IFdvcmQgOS4wKQ0vTW9kRGF0ZSAoRDoyMDAxMDgyOTA5NTUwMS0wNycwMCcpDS9BdXRob3IgKEdlbmUgQnJ1bWJsYXkpDS9UaXRsZSAoVGhpcyBpcyBhIHRlc3QgUERGIGRvY3VtZW50KQ0vQ3JlYXRpb25EYXRlIChEOjIwMDEwODI5MDk1NDU3KQ0+PiANZW5kb2JqDTIgMCBvYmoNPDwgDS9UeXBlIC9QYWdlcyANL0tpZHMgWyA1IDAgUiBdIA0vQ291bnQgMSANPj4gDWVuZG9iag14cmVmDTAgMyANMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDAzNDI5IDAwMDAwIG4NCjAwMDAwMDM2NTggMDAwMDAgbg0KdHJhaWxlcg08PA0vU2l6ZSAzDS9JRFs8ZDcwZjQ2YzViYTRmZThiZDQ5YTlkZDA1OTliMGIxNTE+PGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPl0NPj4Nc3RhcnR4cmVmDTE3Mw0lJUVPRg0=`\n  const [show, setToogleShowd] = useState(true)\n  return (\n    <>\n      <div id=\"prueba_pdf\"></div>\n      <PdfFile\n        NombrePdf={'nombre.pdf'}\n        dataUrl={'https://s2.q4cdn.com/498544986/files/doc_downloads/test.pdf'}\n        base64={dataBase64}\n        setToogleShow={() => setToogleShowd(x => !x)}\n        domElementName={'prueba_pdf'}\n        ToogleShow={show}\n        {...args}\n      />\n    </>\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const dataBase64 = `JVBERi0xLjINJeLjz9MNCjMgMCBvYmoNPDwgDS9MaW5lYXJpemVkIDEgDS9PIDUgDS9IIFsgNzYwIDE1NyBdIA0vTCAzOTA4IA0vRSAzNjU4IA0vTiAxIA0vVCAzNzMxIA0+PiANZW5kb2JqDSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4cmVmDTMgMTUgDTAwMDAwMDAwMTYgMDAwMDAgbg0KMDAwMDAwMDY0NCAwMDAwMCBuDQowMDAwMDAwOTE3IDAwMDAwIG4NCjAwMDAwMDEwNjggMDAwMDAgbg0KMDAwMDAwMTIyNCAwMDAwMCBuDQowMDAwMDAxNDEwIDAwMDAwIG4NCjAwMDAwMDE1ODkgMDAwMDAgbg0KMDAwMDAwMTc2OCAwMDAwMCBuDQowMDAwMDAyMTk3IDAwMDAwIG4NCjAwMDAwMDIzODMgMDAwMDAgbg0KMDAwMDAwMjc2OSAwMDAwMCBuDQowMDAwMDAzMTcyIDAwMDAwIG4NCjAwMDAwMDMzNTEgMDAwMDAgbg0KMDAwMDAwMDc2MCAwMDAwMCBuDQowMDAwMDAwODk3IDAwMDAwIG4NCnRyYWlsZXINPDwNL1NpemUgMTgNL0luZm8gMSAwIFIgDS9Sb290IDQgMCBSIA0vUHJldiAzNzIyIA0vSURbPGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPjxkNzBmNDZjNWJhNGZlOGJkNDlhOWRkMDU5OWIwYjE1MT5dDT4+DXN0YXJ0eHJlZg0wDSUlRU9GDSAgICAgIA00IDAgb2JqDTw8IA0vVHlwZSAvQ2F0YWxvZyANL1BhZ2VzIDIgMCBSIA0vT3BlbkFjdGlvbiBbIDUgMCBSIC9YWVogbnVsbCBudWxsIG51bGwgXSANL1BhZ2VNb2RlIC9Vc2VOb25lIA0+PiANZW5kb2JqDTE2IDAgb2JqDTw8IC9TIDM2IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlIC9MZW5ndGggMTcgMCBSID4+IA1zdHJlYW0NCkiJYmBg4GVgYPrBAAScFxiwAQ4oLQDE3FDMwODHwKkyubctWLfmpsmimQ5AEYAAAwC3vwe0DWVuZHN0cmVhbQ1lbmRvYmoNMTcgMCBvYmoNNTMgDWVuZG9iag01IDAgb2JqDTw8IA0vVHlwZSAvUGFnZSANL1BhcmVudCAyIDAgUiANL1Jlc291cmNlcyA2IDAgUiANL0NvbnRlbnRzIDEwIDAgUiANL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSANL0Nyb3BCb3ggWyAwIDAgNjEyIDc5MiBdIA0vUm90YXRlIDAgDT4+IA1lbmRvYmoNNiAwIG9iag08PCANL1Byb2NTZXQgWyAvUERGIC9UZXh0IF0gDS9Gb250IDw8IC9UVDIgOCAwIFIgL1RUNCAxMiAwIFIgL1RUNiAxMyAwIFIgPj4gDS9FeHRHU3RhdGUgPDwgL0dTMSAxNSAwIFIgPj4gDS9Db2xvclNwYWNlIDw8IC9DczUgOSAwIFIgPj4gDT4+IA1lbmRvYmoNNyAwIG9iag08PCANL1R5cGUgL0ZvbnREZXNjcmlwdG9yIA0vQXNjZW50IDg5MSANL0NhcEhlaWdodCAwIA0vRGVzY2VudCAtMjE2IA0vRmxhZ3MgMzQgDS9Gb250QkJveCBbIC01NjggLTMwNyAyMDI4IDEwMDcgXSANL0ZvbnROYW1lIC9UaW1lc05ld1JvbWFuIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNOCAwIG9iag08PCANL1R5cGUgL0ZvbnQgDS9TdWJ0eXBlIC9UcnVlVHlwZSANL0ZpcnN0Q2hhciAzMiANL0xhc3RDaGFyIDMyIA0vV2lkdGhzIFsgMjUwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL1RpbWVzTmV3Um9tYW4gDS9Gb250RGVzY3JpcHRvciA3IDAgUiANPj4gDWVuZG9iag05IDAgb2JqDVsgDS9DYWxSR0IgPDwgL1doaXRlUG9pbnQgWyAwLjk1MDUgMSAxLjA4OSBdIC9HYW1tYSBbIDIuMjIyMjEgMi4yMjIyMSAyLjIyMjIxIF0gDS9NYXRyaXggWyAwLjQxMjQgMC4yMTI2IDAuMDE5MyAwLjM1NzYgMC43MTUxOSAwLjExOTIgMC4xODA1IDAuMDcyMiAwLjk1MDUgXSA+PiANDV0NZW5kb2JqDTEwIDAgb2JqDTw8IC9MZW5ndGggMzU1IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlID4+IA1zdHJlYW0NCkiJdJDBTsMwEETv/oo92ohuvXHsJEeggOCEwDfEIU1SCqIJIimIv2dthyJVQpGc0Xo88+xzL5beZ0DgN4IIq6oCzd8sK43amAyK3GKmTQV+J5YXo4VmjDYNYyOW1w8Ez6PQ4JuwfAkJyr+yXNgSSwt+NU+4Kp+rcg4uy9Q1a6MdarLcpgvUeUGh7RBFSLk1f1n+5FgsHJaZttFqA+tKLJhfZ3kEY+VcoHuUfvui2O3kCL9COSwk1Ok3deMEd6srUCVa2Q7Nftf1Ewar5a4nfxuu4v59NcLMGAKXlcjMLtwj1BsTQCITUSK52cC3IoNGDnto6l5VmEv4YAwjO8VWJ+s2DSeGttw/qmA/PZyLu3vY1p9p0MGZIs2iHdZxjwdNSkzedT0pJiW+CWl5H0O7uu2SB1JLn8rHlMkH2F+/xa20Rjp+nAQ39Ec8c1gz7KJ4T3H7uXnuwvSWl178CDAA/bGPlAplbmRzdHJlYW0NZW5kb2JqDTExIDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTYyOCAtMzc2IDIwMzQgMTA0OCBdIA0vRm9udE5hbWUgL0FyaWFsLEJvbGQgDS9JdGFsaWNBbmdsZSAwIA0vU3RlbVYgMTMzIA0+PiANZW5kb2JqDTEyIDAgb2JqDTw8IA0vVHlwZSAvRm9udCANL1N1YnR5cGUgL1RydWVUeXBlIA0vRmlyc3RDaGFyIDMyIA0vTGFzdENoYXIgMTE3IA0vV2lkdGhzIFsgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgDTAgMCAwIDAgMCA3MjIgMCA2MTEgMCAwIDAgMCAwIDAgMCAwIDAgNjY3IDAgMCAwIDYxMSAwIDAgMCAwIDAgMCANMCAwIDAgMCAwIDAgNTU2IDAgNTU2IDYxMSA1NTYgMCAwIDYxMSAyNzggMCAwIDAgODg5IDYxMSA2MTEgMCAwIA0wIDU1NiAzMzMgNjExIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsLEJvbGQgDS9Gb250RGVzY3JpcHRvciAxMSAwIFIgDT4+IA1lbmRvYmoNMTMgMCBvYmoNPDwgDS9UeXBlIC9Gb250IA0vU3VidHlwZSAvVHJ1ZVR5cGUgDS9GaXJzdENoYXIgMzIgDS9MYXN0Q2hhciAxMjEgDS9XaWR0aHMgWyAyNzggMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDI3OCAwIDI3OCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCANMCAwIDAgNjY3IDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCA3MjIgMCAwIDAgMCAwIDAgMCAwIA0wIDAgMCAwIDAgMCA1NTYgNTU2IDUwMCA1NTYgNTU2IDI3OCAwIDU1NiAyMjIgMCAwIDIyMiA4MzMgNTU2IDU1NiANNTU2IDAgMzMzIDUwMCAyNzggNTU2IDUwMCAwIDAgNTAwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsIA0vRm9udERlc2NyaXB0b3IgMTQgMCBSIA0+PiANZW5kb2JqDTE0IDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTY2NSAtMzI1IDIwMjggMTAzNyBdIA0vRm9udE5hbWUgL0FyaWFsIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNMTUgMCBvYmoNPDwgDS9UeXBlIC9FeHRHU3RhdGUgDS9TQSBmYWxzZSANL1NNIDAuMDIgDS9UUiAvSWRlbnRpdHkgDT4+IA1lbmRvYmoNMSAwIG9iag08PCANL1Byb2R1Y2VyIChBY3JvYmF0IERpc3RpbGxlciA0LjA1IGZvciBXaW5kb3dzKQ0vQ3JlYXRvciAoTWljcm9zb2Z0IFdvcmQgOS4wKQ0vTW9kRGF0ZSAoRDoyMDAxMDgyOTA5NTUwMS0wNycwMCcpDS9BdXRob3IgKEdlbmUgQnJ1bWJsYXkpDS9UaXRsZSAoVGhpcyBpcyBhIHRlc3QgUERGIGRvY3VtZW50KQ0vQ3JlYXRpb25EYXRlIChEOjIwMDEwODI5MDk1NDU3KQ0+PiANZW5kb2JqDTIgMCBvYmoNPDwgDS9UeXBlIC9QYWdlcyANL0tpZHMgWyA1IDAgUiBdIA0vQ291bnQgMSANPj4gDWVuZG9iag14cmVmDTAgMyANMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDAzNDI5IDAwMDAwIG4NCjAwMDAwMDM2NTggMDAwMDAgbg0KdHJhaWxlcg08PA0vU2l6ZSAzDS9JRFs8ZDcwZjQ2YzViYTRmZThiZDQ5YTlkZDA1OTliMGIxNTE+PGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPl0NPj4Nc3RhcnR4cmVmDTE3Mw0lJUVPRg0=`\n  const [show, setToogleShowd] = useState(true)\n  return (\n    <>\n      <div id=\"prueba_pdf\"></div>\n      <PdfFile\n        NombrePdf={'nombre.pdf'}\n        dataUrl={'https://s2.q4cdn.com/498544986/files/doc_downloads/test.pdf'}\n        base64={dataBase64}\n        setToogleShow={() => setToogleShowd(x => !x)}\n        domElementName={'prueba_pdf'}\n        ToogleShow={show}\n        {...args}\n      />\n    </>\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const dataBase64 = `JVBERi0xLjINJeLjz9MNCjMgMCBvYmoNPDwgDS9MaW5lYXJpemVkIDEgDS9PIDUgDS9IIFsgNzYwIDE1NyBdIA0vTCAzOTA4IA0vRSAzNjU4IA0vTiAxIA0vVCAzNzMxIA0+PiANZW5kb2JqDSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4cmVmDTMgMTUgDTAwMDAwMDAwMTYgMDAwMDAgbg0KMDAwMDAwMDY0NCAwMDAwMCBuDQowMDAwMDAwOTE3IDAwMDAwIG4NCjAwMDAwMDEwNjggMDAwMDAgbg0KMDAwMDAwMTIyNCAwMDAwMCBuDQowMDAwMDAxNDEwIDAwMDAwIG4NCjAwMDAwMDE1ODkgMDAwMDAgbg0KMDAwMDAwMTc2OCAwMDAwMCBuDQowMDAwMDAyMTk3IDAwMDAwIG4NCjAwMDAwMDIzODMgMDAwMDAgbg0KMDAwMDAwMjc2OSAwMDAwMCBuDQowMDAwMDAzMTcyIDAwMDAwIG4NCjAwMDAwMDMzNTEgMDAwMDAgbg0KMDAwMDAwMDc2MCAwMDAwMCBuDQowMDAwMDAwODk3IDAwMDAwIG4NCnRyYWlsZXINPDwNL1NpemUgMTgNL0luZm8gMSAwIFIgDS9Sb290IDQgMCBSIA0vUHJldiAzNzIyIA0vSURbPGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPjxkNzBmNDZjNWJhNGZlOGJkNDlhOWRkMDU5OWIwYjE1MT5dDT4+DXN0YXJ0eHJlZg0wDSUlRU9GDSAgICAgIA00IDAgb2JqDTw8IA0vVHlwZSAvQ2F0YWxvZyANL1BhZ2VzIDIgMCBSIA0vT3BlbkFjdGlvbiBbIDUgMCBSIC9YWVogbnVsbCBudWxsIG51bGwgXSANL1BhZ2VNb2RlIC9Vc2VOb25lIA0+PiANZW5kb2JqDTE2IDAgb2JqDTw8IC9TIDM2IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlIC9MZW5ndGggMTcgMCBSID4+IA1zdHJlYW0NCkiJYmBg4GVgYPrBAAScFxiwAQ4oLQDE3FDMwODHwKkyubctWLfmpsmimQ5AEYAAAwC3vwe0DWVuZHN0cmVhbQ1lbmRvYmoNMTcgMCBvYmoNNTMgDWVuZG9iag01IDAgb2JqDTw8IA0vVHlwZSAvUGFnZSANL1BhcmVudCAyIDAgUiANL1Jlc291cmNlcyA2IDAgUiANL0NvbnRlbnRzIDEwIDAgUiANL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSANL0Nyb3BCb3ggWyAwIDAgNjEyIDc5MiBdIA0vUm90YXRlIDAgDT4+IA1lbmRvYmoNNiAwIG9iag08PCANL1Byb2NTZXQgWyAvUERGIC9UZXh0IF0gDS9Gb250IDw8IC9UVDIgOCAwIFIgL1RUNCAxMiAwIFIgL1RUNiAxMyAwIFIgPj4gDS9FeHRHU3RhdGUgPDwgL0dTMSAxNSAwIFIgPj4gDS9Db2xvclNwYWNlIDw8IC9DczUgOSAwIFIgPj4gDT4+IA1lbmRvYmoNNyAwIG9iag08PCANL1R5cGUgL0ZvbnREZXNjcmlwdG9yIA0vQXNjZW50IDg5MSANL0NhcEhlaWdodCAwIA0vRGVzY2VudCAtMjE2IA0vRmxhZ3MgMzQgDS9Gb250QkJveCBbIC01NjggLTMwNyAyMDI4IDEwMDcgXSANL0ZvbnROYW1lIC9UaW1lc05ld1JvbWFuIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNOCAwIG9iag08PCANL1R5cGUgL0ZvbnQgDS9TdWJ0eXBlIC9UcnVlVHlwZSANL0ZpcnN0Q2hhciAzMiANL0xhc3RDaGFyIDMyIA0vV2lkdGhzIFsgMjUwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL1RpbWVzTmV3Um9tYW4gDS9Gb250RGVzY3JpcHRvciA3IDAgUiANPj4gDWVuZG9iag05IDAgb2JqDVsgDS9DYWxSR0IgPDwgL1doaXRlUG9pbnQgWyAwLjk1MDUgMSAxLjA4OSBdIC9HYW1tYSBbIDIuMjIyMjEgMi4yMjIyMSAyLjIyMjIxIF0gDS9NYXRyaXggWyAwLjQxMjQgMC4yMTI2IDAuMDE5MyAwLjM1NzYgMC43MTUxOSAwLjExOTIgMC4xODA1IDAuMDcyMiAwLjk1MDUgXSA+PiANDV0NZW5kb2JqDTEwIDAgb2JqDTw8IC9MZW5ndGggMzU1IC9GaWx0ZXIgL0ZsYXRlRGVjb2RlID4+IA1zdHJlYW0NCkiJdJDBTsMwEETv/oo92ohuvXHsJEeggOCEwDfEIU1SCqIJIimIv2dthyJVQpGc0Xo88+xzL5beZ0DgN4IIq6oCzd8sK43amAyK3GKmTQV+J5YXo4VmjDYNYyOW1w8Ez6PQ4JuwfAkJyr+yXNgSSwt+NU+4Kp+rcg4uy9Q1a6MdarLcpgvUeUGh7RBFSLk1f1n+5FgsHJaZttFqA+tKLJhfZ3kEY+VcoHuUfvui2O3kCL9COSwk1Ok3deMEd6srUCVa2Q7Nftf1Ewar5a4nfxuu4v59NcLMGAKXlcjMLtwj1BsTQCITUSK52cC3IoNGDnto6l5VmEv4YAwjO8VWJ+s2DSeGttw/qmA/PZyLu3vY1p9p0MGZIs2iHdZxjwdNSkzedT0pJiW+CWl5H0O7uu2SB1JLn8rHlMkH2F+/xa20Rjp+nAQ39Ec8c1gz7KJ4T3H7uXnuwvSWl178CDAA/bGPlAplbmRzdHJlYW0NZW5kb2JqDTExIDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTYyOCAtMzc2IDIwMzQgMTA0OCBdIA0vRm9udE5hbWUgL0FyaWFsLEJvbGQgDS9JdGFsaWNBbmdsZSAwIA0vU3RlbVYgMTMzIA0+PiANZW5kb2JqDTEyIDAgb2JqDTw8IA0vVHlwZSAvRm9udCANL1N1YnR5cGUgL1RydWVUeXBlIA0vRmlyc3RDaGFyIDMyIA0vTGFzdENoYXIgMTE3IA0vV2lkdGhzIFsgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgDTAgMCAwIDAgMCA3MjIgMCA2MTEgMCAwIDAgMCAwIDAgMCAwIDAgNjY3IDAgMCAwIDYxMSAwIDAgMCAwIDAgMCANMCAwIDAgMCAwIDAgNTU2IDAgNTU2IDYxMSA1NTYgMCAwIDYxMSAyNzggMCAwIDAgODg5IDYxMSA2MTEgMCAwIA0wIDU1NiAzMzMgNjExIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsLEJvbGQgDS9Gb250RGVzY3JpcHRvciAxMSAwIFIgDT4+IA1lbmRvYmoNMTMgMCBvYmoNPDwgDS9UeXBlIC9Gb250IA0vU3VidHlwZSAvVHJ1ZVR5cGUgDS9GaXJzdENoYXIgMzIgDS9MYXN0Q2hhciAxMjEgDS9XaWR0aHMgWyAyNzggMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDI3OCAwIDI3OCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCANMCAwIDAgNjY3IDAgMCAwIDAgMCAwIDAgMjc4IDAgMCAwIDAgMCAwIDAgMCA3MjIgMCAwIDAgMCAwIDAgMCAwIA0wIDAgMCAwIDAgMCA1NTYgNTU2IDUwMCA1NTYgNTU2IDI3OCAwIDU1NiAyMjIgMCAwIDIyMiA4MzMgNTU2IDU1NiANNTU2IDAgMzMzIDUwMCAyNzggNTU2IDUwMCAwIDAgNTAwIF0gDS9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIA0vQmFzZUZvbnQgL0FyaWFsIA0vRm9udERlc2NyaXB0b3IgMTQgMCBSIA0+PiANZW5kb2JqDTE0IDAgb2JqDTw8IA0vVHlwZSAvRm9udERlc2NyaXB0b3IgDS9Bc2NlbnQgOTA1IA0vQ2FwSGVpZ2h0IDAgDS9EZXNjZW50IC0yMTEgDS9GbGFncyAzMiANL0ZvbnRCQm94IFsgLTY2NSAtMzI1IDIwMjggMTAzNyBdIA0vRm9udE5hbWUgL0FyaWFsIA0vSXRhbGljQW5nbGUgMCANL1N0ZW1WIDAgDT4+IA1lbmRvYmoNMTUgMCBvYmoNPDwgDS9UeXBlIC9FeHRHU3RhdGUgDS9TQSBmYWxzZSANL1NNIDAuMDIgDS9UUiAvSWRlbnRpdHkgDT4+IA1lbmRvYmoNMSAwIG9iag08PCANL1Byb2R1Y2VyIChBY3JvYmF0IERpc3RpbGxlciA0LjA1IGZvciBXaW5kb3dzKQ0vQ3JlYXRvciAoTWljcm9zb2Z0IFdvcmQgOS4wKQ0vTW9kRGF0ZSAoRDoyMDAxMDgyOTA5NTUwMS0wNycwMCcpDS9BdXRob3IgKEdlbmUgQnJ1bWJsYXkpDS9UaXRsZSAoVGhpcyBpcyBhIHRlc3QgUERGIGRvY3VtZW50KQ0vQ3JlYXRpb25EYXRlIChEOjIwMDEwODI5MDk1NDU3KQ0+PiANZW5kb2JqDTIgMCBvYmoNPDwgDS9UeXBlIC9QYWdlcyANL0tpZHMgWyA1IDAgUiBdIA0vQ291bnQgMSANPj4gDWVuZG9iag14cmVmDTAgMyANMDAwMDAwMDAwMCA2NTUzNSBmDQowMDAwMDAzNDI5IDAwMDAwIG4NCjAwMDAwMDM2NTggMDAwMDAgbg0KdHJhaWxlcg08PA0vU2l6ZSAzDS9JRFs8ZDcwZjQ2YzViYTRmZThiZDQ5YTlkZDA1OTliMGIxNTE+PGQ3MGY0NmM1YmE0ZmU4YmQ0OWE5ZGQwNTk5YjBiMTUxPl0NPj4Nc3RhcnR4cmVmDTE3Mw0lJUVPRg0=`\n  const [show, setToogleShowd] = useState(true)\n  return (\n    <>\n      <div id=\"prueba_pdf\"></div>\n      <PdfFile\n        NombrePdf={'nombre.pdf'}\n        dataUrl={'https://s2.q4cdn.com/498544986/files/doc_downloads/test.pdf'}\n        base64={dataBase64}\n        setToogleShow={() => setToogleShowd(x => !x)}\n        domElementName={'prueba_pdf'}\n        ToogleShow={show}\n        {...args}\n      />\n    </>\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1760: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var slicedToArray = __webpack_require__(64),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        map = __webpack_require__(83),
        map_default = __webpack_require__.n(map),
        Form = __webpack_require__(1780),
        FormGroup = __webpack_require__(1787),
        Radio = __webpack_require__(1781)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      !(function (e, t) {
        void 0 === t && (t = {})
        var o = t.insertAt
        if ('undefined' != typeof document) {
          var s = document.head || document.getElementsByTagName('head')[0],
            a = document.createElement('style')
          ;(a.type = 'text/css'),
            'top' === o && s.firstChild
              ? s.insertBefore(a, s.firstChild)
              : s.appendChild(a),
            a.styleSheet
              ? (a.styleSheet.cssText = e)
              : a.appendChild(document.createTextNode(e))
        }
      })(
        '.provedores__selectorRadio{padding-right:23.5px}.provedores__RadioLabel{color:#212529;font:normal normal normal 14px/24px Roboto;letter-spacing:0;padding-right:1px;text-align:right}.provedores__RadioText{color:#333;font:normal normal normal 14px/16px Roboto;letter-spacing:0;text-align:left}.radio{margin-top:0}',
        {insertAt: 'top'},
      )
      var radio_esm_a = (function (_e$Component) {
        inherits_default()(a, _e$Component)
        var _super = _createSuper(a)
        function a() {
          var _this
          return (
            classCallCheck_default()(this, a),
            ((_this = _super.apply(this, arguments)).state = {
              upload_radio: null,
            }),
            (_this.setStatus = function (e) {
              _this.setState({upload_radio: e.target.value})
            }),
            _this
          )
        }
        return (
          createClass_default()(a, [
            {
              key: 'shouldComponentUpdate',
              value: function shouldComponentUpdate(e, t) {
                return (
                  e.selectedRadio !== this.props.selectedRadio ||
                  this.state.upload_radio !== e.selectedRadio ||
                  this.state.upload_radio !== t.upload_radio
                )
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(e, t) {
                null == e.selectedRadio ||
                this.state.upload_radio !== e.selectedRadio
                  ? this.props.selectedRadioHandler(this.state.upload_radio)
                  : this.setState({upload_radio: null})
              },
            },
            {
              key: 'render',
              value: function render() {
                var _context,
                  _this2 = this
                return react_default.a.createElement(
                  Form.a,
                  {
                    className:
                      'row col-xs-12 col-sm-12 col-md-12 col-lg-12 provedores__form',
                  },
                  react_default.a.createElement(
                    FormGroup.a,
                    {className: ' col-xs-11 col-sm-11  col-md-11 col-lg-11 '},
                    map_default()((_context = this.props.messages)).call(
                      _context,
                      function (t, o) {
                        return react_default.a.createElement(
                          'div',
                          {
                            key: _this2.props.label + '_' + o,
                            className: 'provedores__selectorRadio  row',
                          },
                          react_default.a.createElement(
                            'div',
                            {
                              className:
                                'provedores__selectorLabelRadio col-xs-5 col-sm-5 col-md-5 col-lg-5',
                            },
                            react_default.a.createElement(
                              'p',
                              {className: 'provedores__RadioLabel'},
                              _this2.props.label,
                            ),
                          ),
                          react_default.a.createElement(
                            Radio.a,
                            {
                              name:
                                '' +
                                (0 === o
                                  ? _this2.props.messages[0]
                                  : _this2.props.messages[1]),
                              checked:
                                _this2.state.upload_radio ===
                                '' +
                                  (0 === o
                                    ? _this2.props.messages[0]
                                    : _this2.props.messages[1]),
                              value:
                                '' +
                                (0 === o
                                  ? _this2.props.messages[0]
                                  : _this2.props.messages[1]),
                              onChange: _this2.setStatus,
                              onKeyDown: _this2.setStatus,
                              className:
                                'col-xs-5 col-sm-5 col-md-5 col-lg-5 provedores__Radio',
                            },
                            react_default.a.createElement(
                              'span',
                              {className: 'provedores__RadioText'},
                              t,
                            ),
                          ),
                        )
                      },
                    ),
                  ),
                )
              },
            },
          ]),
          a
        )
      })(react_default.a.Component)
      ;(radio_esm_a.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'a',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/radio/dist/radio.esm.js'] = {
            name: 'a',
            docgenInfo: radio_esm_a.__docgenInfo,
            path: 'packages/radio/dist/radio.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        radio_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/RadioHv',
            component: radio_esm_a,
            argTypes: {
              label: {
                name: 'label',
                type: {name: 'string', required: !1},
                defaultValue: 'im label',
                description: 'set the label for radios',
                table: {
                  type: {summary: 'label'},
                  defaultValue: {summary: 'label im'},
                },
                control: {type: 'text'},
              },
            },
          }),
          function Template(args) {
            var _useState = Object(react.useState)(null),
              _useState2 = slicedToArray_default()(_useState, 2),
              selectRadio = _useState2[0],
              setselectRadio = _useState2[1]
            return Object(jsx_runtime.jsx)(
              radio_esm_a,
              assign_default()({}, args, {
                messages: ['Paciente', 'Autorizacion'],
                selectedRadioHandler: function selectedRadioHandler(radio) {
                  radio && setselectRadio(radio)
                },
                selectedRadio: selectRadio,
              }),
            )
          })
      radio_stories_Template.displayName = 'Template'
      var Primary = bind_default()(radio_stories_Template).call(
        radio_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(radio_stories_Template).call(
        radio_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(radio_stories_Template).call(
        radio_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const [selectRadio, setselectRadio] = useState(null)\n\n  const selectedRadioHandler = radio => {\n    if (radio) {\n      setselectRadio(radio)\n    }\n  }\n  return (\n    <RadioHv\n      {...args}\n      messages={['Paciente', 'Autorizacion']}\n      selectedRadioHandler={selectedRadioHandler}\n      selectedRadio={selectRadio}\n    />\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const [selectRadio, setselectRadio] = useState(null)\n\n  const selectedRadioHandler = radio => {\n    if (radio) {\n      setselectRadio(radio)\n    }\n  }\n  return (\n    <RadioHv\n      {...args}\n      messages={['Paciente', 'Autorizacion']}\n      selectedRadioHandler={selectedRadioHandler}\n      selectedRadio={selectRadio}\n    />\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const [selectRadio, setselectRadio] = useState(null)\n\n  const selectedRadioHandler = radio => {\n    if (radio) {\n      setselectRadio(radio)\n    }\n  }\n  return (\n    <RadioHv\n      {...args}\n      messages={['Paciente', 'Autorizacion']}\n      selectedRadioHandler={selectedRadioHandler}\n      selectedRadio={selectRadio}\n    />\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1761: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        taggedTemplateLiteralLoose = __webpack_require__(13),
        taggedTemplateLiteralLoose_default = __webpack_require__.n(
          taggedTemplateLiteralLoose,
        ),
        styled_components_browser_esm = __webpack_require__(14)
      !(function (t, e) {
        void 0 === e && (e = {})
        var n = e.insertAt
        if ('undefined' != typeof document) {
          var o = document.head || document.getElementsByTagName('head')[0],
            i = document.createElement('style')
          ;(i.type = 'text/css'),
            'top' === n && o.firstChild
              ? o.insertBefore(i, o.firstChild)
              : o.appendChild(i),
            i.styleSheet
              ? (i.styleSheet.cssText = t)
              : i.appendChild(document.createTextNode(t))
        }
      })(
        '#section__container{margin:0 15px;min-height:800px;position:relative}',
        {insertAt: 'top'},
      ),
        styled_components_browser_esm.b.div(
          _templateObject ||
            (_templateObject = taggedTemplateLiteralLoose_default()([
              '\n  margin: 0 15px;\n  position: relative;\n',
            ])),
        )
      var n = styled_components_browser_esm.b.h1(
        _templateObject2 ||
          (_templateObject2 = taggedTemplateLiteralLoose_default()([
            '\n  &&&& {\n    text-align: left;\n    font: normal normal bold 36px Roboto bold !important;\n    @media screen and (device-width: 767px) {\n      margin-bottom: 50px;\n      text-align: center;\n      font: normal normal bold 31px Roboto bold !important;\n    }\n    @media screen and (max-width: 767px) {\n      margin-bottom: 78px;\n      text-align: center;\n      font: normal normal bold 31px Roboto bold !important;\n    }\n  }\n',
          ])),
      )
      styled_components_browser_esm.b.h3(
        _templateObject3 ||
          (_templateObject3 = taggedTemplateLiteralLoose_default()([
            '\n  &&& {\n    text-align: left;\n    font: normal normal 300 16px Roboto;\n    letter-spacing: 0px;\n    color: #999;\n    margin-top: 19px;\n    margin-bottom: 30px;\n    @media screen and (max-width: 601px) {\n      margin-bottom: 77px;\n    }\n\n    @media screen and (max-width: 767px) {\n      margin-bottom: 55px;\n    }\n  }\n',
          ])),
      )
      var o = styled_components_browser_esm.b.section(
          _templateObject4 ||
            (_templateObject4 = taggedTemplateLiteralLoose_default()([''])),
        ),
        section_esm_i = function i(_ref) {
          var e = _ref.titleContainer,
            _ref$className = _ref.className,
            i = void 0 === _ref$className ? '' : _ref$className,
            _ref$subTitle = _ref.subTitle,
            a = void 0 === _ref$subTitle ? null : _ref$subTitle,
            _ref$setRef = _ref.setRef,
            r = void 0 === _ref$setRef ? null : _ref$setRef,
            l = _ref.children
          return react_default.a.createElement(
            'div',
            {ref: r, id: 'section__container', className: i},
            react_default.a.createElement(n, null, e),
            a && a(),
            react_default.a.createElement(o, null, l),
          )
        }
      ;(section_esm_i.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'i',
        props: {
          className: {defaultValue: {value: '""', computed: !1}, required: !1},
          subTitle: {defaultValue: {value: 'null', computed: !1}, required: !1},
          setRef: {defaultValue: {value: 'null', computed: !1}, required: !1},
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/section/dist/section.esm.js'] = {
            name: 'i',
            docgenInfo: section_esm_i.__docgenInfo,
            path: 'packages/section/dist/section.esm.js',
          })
      var phase1_esm = __webpack_require__(274),
        phase2_esm = __webpack_require__(275),
        jsx_runtime = __webpack_require__(4),
        section_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/Section',
            component: section_esm_i,
            argTypes: {
              phase: {
                name: 'phase',
                type: {name: 'number', required: !0},
                defaultValue: 1,
                description:
                  'set the actual box that the user its supposed to navigate',
                table: {type: {summary: 'number'}, defaultValue: {summary: 1}},
                control: {type: 'number', min: 1, max: 2},
              },
              className: {
                name: 'className',
                type: {name: 'string', required: !1},
                defaultValue: 'className',
                description: 'classNAME of the container',
                table: {
                  type: {summary: 'className of the container'},
                  defaultValue: {summary: 'className'},
                },
                control: {type: 'text'},
              },
              titleContainer: {
                name: 'titleContainer',
                type: {name: 'string', required: !1},
                defaultValue: 'className',
                description: 'classNAME of the container',
                table: {
                  type: {summary: 'title Section'},
                  defaultValue: {summary: 'className'},
                },
                control: {type: 'text'},
              },
            },
          }),
          function Template(args) {
            var setMyInputRef = function setMyInputRef(context, element) {
                context && (context.myInput = element)
              },
              _args$phase = assign_default()({}, args).phase,
              phase = void 0 === _args$phase ? 1 : _args$phase
            return Object(jsx_runtime.jsxs)(
              section_esm_i,
              assign_default()({}, args, {
                subTitle: function subTitle() {
                  return Object(jsx_runtime.jsx)('div', {
                    children: 'im the subTitle',
                  })
                },
                children: [
                  Object(jsx_runtime.jsx)(phase1_esm.a, {
                    className: '',
                    phase: phase,
                    setRef: function setRef(ele) {
                      return setMyInputRef(undefined, ele)
                    },
                    children: Object(jsx_runtime.jsx)('div', {
                      children: 'Content of phase1',
                    }),
                  }),
                  Object(jsx_runtime.jsx)(phase2_esm.a, {
                    className: 'phase2',
                    phase: phase,
                    setRef: function setRef(ele) {
                      return setMyInputRef(undefined, ele)
                    },
                    children: Object(jsx_runtime.jsx)('div', {
                      children: 'Content of phase2',
                    }),
                  }),
                ],
              }),
            )
          })
      section_stories_Template.displayName = 'Template'
      var Primary = bind_default()(section_stories_Template).call(
        section_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(section_stories_Template).call(
        section_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(section_stories_Template).call(
        section_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const setMyInputRef = (context: any, element: any) => {\n    if (context) {\n      context.myInput = element\n    }\n  }\n  const {phase = 1} = {...args}\n  return (\n    <Section {...args} subTitle={() => <div>im the subTitle</div>}>\n      <Phase1\n        className={''}\n        phase={phase}\n        setRef={ele => setMyInputRef(this, ele)}\n      >\n        <div>Content of phase1</div>\n      </Phase1>\n\n      <Phase2\n        className={'phase2'}\n        phase={phase}\n        setRef={ele => setMyInputRef(this, ele)}\n      >\n        <div>Content of phase2</div>\n      </Phase2>\n    </Section>\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const setMyInputRef = (context: any, element: any) => {\n    if (context) {\n      context.myInput = element\n    }\n  }\n  const {phase = 1} = {...args}\n  return (\n    <Section {...args} subTitle={() => <div>im the subTitle</div>}>\n      <Phase1\n        className={''}\n        phase={phase}\n        setRef={ele => setMyInputRef(this, ele)}\n      >\n        <div>Content of phase1</div>\n      </Phase1>\n\n      <Phase2\n        className={'phase2'}\n        phase={phase}\n        setRef={ele => setMyInputRef(this, ele)}\n      >\n        <div>Content of phase2</div>\n      </Phase2>\n    </Section>\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const setMyInputRef = (context: any, element: any) => {\n    if (context) {\n      context.myInput = element\n    }\n  }\n  const {phase = 1} = {...args}\n  return (\n    <Section {...args} subTitle={() => <div>im the subTitle</div>}>\n      <Phase1\n        className={''}\n        phase={phase}\n        setRef={ele => setMyInputRef(this, ele)}\n      >\n        <div>Content of phase1</div>\n      </Phase1>\n\n      <Phase2\n        className={'phase2'}\n        phase={phase}\n        setRef={ele => setMyInputRef(this, ele)}\n      >\n        <div>Content of phase2</div>\n      </Phase2>\n    </Section>\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1762: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var slicedToArray = __webpack_require__(64),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        index_of = __webpack_require__(95),
        index_of_default = __webpack_require__.n(index_of),
        get_own_property_symbols = __webpack_require__(78),
        get_own_property_symbols_default = __webpack_require__.n(
          get_own_property_symbols,
        ),
        lib = __webpack_require__(360),
        react_select_esm = __webpack_require__(926)
      function selector_esm_a(e, t) {
        var l = {}
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            index_of_default()(t).call(t, a) < 0 &&
            (l[a] = e[a])
        if (
          null != e &&
          'function' == typeof get_own_property_symbols_default.a
        ) {
          var n = 0
          for (a = get_own_property_symbols_default()(e); n < a.length; n++)
            index_of_default()(t).call(t, a[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
              (l[a[n]] = e[a[n]])
        }
        return l
      }
      !(function (e, t) {
        void 0 === t && (t = {})
        var l = t.insertAt
        if ('undefined' != typeof document) {
          var a = document.head || document.getElementsByTagName('head')[0],
            n = document.createElement('style')
          ;(n.type = 'text/css'),
            'top' === l && a.firstChild
              ? a.insertBefore(n, a.firstChild)
              : a.appendChild(n),
            n.styleSheet
              ? (n.styleSheet.cssText = e)
              : n.appendChild(document.createTextNode(e))
        }
      })(
        '.selectC_simple{align-items:baseline;display:flex;margin-bottom:15px}@media screen and (max-width:603px){.selectC_simple{align-items:center;flex-flow:column}}.selectC_simple>div:first-child{flex:0.45;margin-right:30px;text-align:right}@media screen and (max-width:603px){.selectC_simple>div:first-child{margin-right:99px}}.selectC_simple>div:first-child>p{color:#212529!important;font:normal normal normal 14px/24px Roboto!important}.selectC_simple>div:last-child{flex:0.39;padding-left:0;padding-right:0}',
        {insertAt: 'top'},
      )
      var selector_esm_n = {
          option: function option(e, t) {
            return function () {
              var l = 'transparent',
                a = '#777'
              return (
                t.isFocused && ((l = '#ff944d'), (a = '#fff')),
                assign_default()(assign_default()({}, e), {
                  padding: 10,
                  paddingLeft: '20px',
                  backgroundColor: l,
                  color: a,
                  ':hover': {backgroundColor: '#ff944d', color: '#fff'},
                })
              )
            }
          },
          control: function control(e, t) {
            return function () {
              var l = 'hsl(0, 0%, 80%)'
              return (
                t.isFocused && (l = 'rgb(204, 204, 204)'),
                assign_default()(assign_default()({}, e), {
                  outline: '#f60 none 0px !important',
                  backgroundColor: '#fff',
                  boxShadow: 'none',
                  borderColor: l,
                  ':active, :hover': {borderColor: '#f60'},
                  width: 265,
                  height: 42,
                  '@media only screen and (max-width: 767px)': {width: 230},
                })
              )
            }
          },
          valueContainer: function valueContainer(e, t) {
            return assign_default()({}, e)
          },
          singleValue: function singleValue(e, t) {
            var l = t.isDisabled ? 0.5 : 1
            return assign_default()(assign_default()({}, e), {
              opacity: l,
              transition: 'opacity 300ms',
              color: 'rgb(128, 128, 128)',
            })
          },
          indicatorSeparator: function indicatorSeparator(e, t) {
            return {display: 'none'}
          },
          menu: function menu(e, t) {
            return assign_default()(assign_default()({}, e), {
              width: 265,
              left: '0%',
              '@media only screen and (max-width: 767px)': {width: 230},
              '@media only screen and (min-width: 767px)': {left: '0%'},
              '@media only screen and (device-width: 767px)': {left: '0.4%'},
              '@media only screen and (min-width: 1200px)': {left: '0%'},
            })
          },
          placeholder: function placeholder(e, t) {
            var l = '#777'
            return (
              t.isDisabled && (l = 'rgba(128, 128, 128, 0.5)'),
              assign_default()(assign_default()({}, e), {color: l})
            )
          },
          noOptionsMessage: function noOptionsMessage(e, t) {
            return assign_default()({}, e)
          },
          menuList: function menuList(e, t) {
            return assign_default()({}, e)
          },
        },
        selector_esm_i = function i(l) {
          return react_default.a.createElement(
            'div',
            {
              style: {
                height:
                  void 0 === l.children.length
                    ? 43.1
                    : 41.15 * l.children.length,
              },
            },
            react_default.a.createElement(
              lib.Scrollbars,
              {renderThumbVertical: selector_esm_s},
              l.children,
            ),
          )
        },
        selector_esm_s = function s(t) {
          var l = t.style,
            n = selector_esm_a(t, ['style'])
          return react_default.a.createElement(
            'div',
            assign_default()({}, n, {
              style: assign_default()(assign_default()({}, l), {
                backgroundColor: '#59482d6b',
                borderRadius: '9999999999px',
                width: '6px',
                opacity: '1',
              }),
            }),
          )
        },
        selector_esm_o = function o(t) {
          var _t$label = t.label,
            s = void 0 === _t$label ? 'label placeholder' : _t$label,
            _t$disabled = t.disabled,
            o = void 0 !== _t$disabled && _t$disabled,
            _t$placeholder = t.placeholder,
            r = void 0 === _t$placeholder ? 'im placeholder' : _t$placeholder,
            _t$Options = t.Options,
            c =
              void 0 === _t$Options
                ? [
                    {label: 'hola', value: 'value1'},
                    {label: 'hola2', value: 'value2'},
                  ]
                : _t$Options,
            _t$onClick = t.onClick,
            d =
              void 0 === _t$onClick
                ? function () {
                    return null
                  }
                : _t$onClick,
            _t$value = t.value,
            p = void 0 === _t$value ? 'value1' : _t$value,
            _t$type = t.type,
            m = void 0 === _t$type ? 'type selector' : _t$type,
            _t$className = t.className,
            b = void 0 === _t$className ? '' : _t$className,
            _t$styles = t.styles,
            h =
              void 0 === _t$styles
                ? {stylesDefault: selector_esm_n}
                : _t$styles,
            u = selector_esm_a(t, [
              'label',
              'disabled',
              'placeholder',
              'Options',
              'onClick',
              'value',
              'type',
              'className',
              'styles',
            ])
          return react_default.a.createElement(
            'div',
            {className: b + ' selectC_simple'},
            react_default.a.createElement(
              'div',
              {className: ''},
              react_default.a.createElement('p', {className: ''}, s),
            ),
            react_default.a.createElement(react_select_esm.a, {
              inputId: u.inputId,
              onChange: function onChange(e) {
                return d(e, m)
              },
              options: c,
              value: {value: p, label: p},
              className: 'dropDown__menu ',
              'aria-labelledby': 'dropdownCedula',
              placeholder: r,
              isDisabled: o,
              noOptionsMessage: function noOptionsMessage() {
                return 'No Hay Valores Disponibles'
              },
              styles: h,
              captureMenuScroll: !1,
              components: {MenuList: selector_esm_i},
            }),
          )
        }
      ;(selector_esm_o.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'o',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/selector/dist/selector.esm.js'] = {
            name: 'o',
            docgenInfo: selector_esm_o.__docgenInfo,
            path: 'packages/selector/dist/selector.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        selector_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/Selector',
            component: selector_esm_o,
            argTypes: {
              disabled: {
                name: 'disabled',
                type: {name: 'boolean', required: !0},
                defaultValue: !1,
                description: 'make the face :( --\x3e :)',
                table: {
                  type: {summary: 'boolean'},
                  defaultValue: {summary: !1},
                },
                control: {type: 'boolean'},
              },
              label: {
                name: 'label',
                type: {name: 'string', required: !0},
                defaultValue: !1,
                description: 'make the face :( --\x3e :)',
                table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
                control: {type: 'text'},
              },
              placeholder: {
                name: 'placeholder',
                type: {name: 'string', required: !0},
                defaultValue: !1,
                description: 'make the face :( --\x3e :)',
                table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
                control: {type: 'text'},
              },
            },
          }),
          function Template(args) {
            var _useState = Object(react.useState)(null),
              _useState2 = slicedToArray_default()(_useState, 2),
              valueSelect = _useState2[0],
              setvalueSelect = _useState2[1]
            return Object(jsx_runtime.jsx)(
              selector_esm_o,
              assign_default()({}, args, {
                Options: [
                  {label: 'hola', value: 'value1'},
                  {label: 'hola2', value: 'value2'},
                ],
                onClick: function selectHandler(e) {
                  console.log(e), setvalueSelect(assign_default()({}, e))
                },
                value: valueSelect ? valueSelect.value : args.placeholder,
              }),
            )
          })
      selector_stories_Template.displayName = 'Template'
      var Primary = bind_default()(selector_stories_Template).call(
        selector_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(selector_stories_Template).call(
        selector_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(selector_stories_Template).call(
        selector_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const [valueSelect, setvalueSelect] = useState(null)\n  const selectHandler = e => {\n    console.log(e)\n    setvalueSelect({...e})\n  }\n  return (\n    <Selector\n      {...args}\n      Options={[\n        {label: 'hola', value: 'value1'},\n        {label: 'hola2', value: 'value2'},\n      ]}\n      onClick={selectHandler}\n      value={valueSelect ? valueSelect.value : args.placeholder}\n    />\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const [valueSelect, setvalueSelect] = useState(null)\n  const selectHandler = e => {\n    console.log(e)\n    setvalueSelect({...e})\n  }\n  return (\n    <Selector\n      {...args}\n      Options={[\n        {label: 'hola', value: 'value1'},\n        {label: 'hola2', value: 'value2'},\n      ]}\n      onClick={selectHandler}\n      value={valueSelect ? valueSelect.value : args.placeholder}\n    />\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const [valueSelect, setvalueSelect] = useState(null)\n  const selectHandler = e => {\n    console.log(e)\n    setvalueSelect({...e})\n  }\n  return (\n    <Selector\n      {...args}\n      Options={[\n        {label: 'hola', value: 'value1'},\n        {label: 'hola2', value: 'value2'},\n      ]}\n      onClick={selectHandler}\n      value={valueSelect ? valueSelect.value : args.placeholder}\n    />\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1763: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react)
      !(function (e, t) {
        void 0 === t && (t = {})
        var o = t.insertAt
        if ('undefined' != typeof document) {
          var s = document.head || document.getElementsByTagName('head')[0],
            a = document.createElement('style')
          ;(a.type = 'text/css'),
            'top' === o && s.firstChild
              ? s.insertBefore(a, s.firstChild)
              : s.appendChild(a),
            a.styleSheet
              ? (a.styleSheet.cssText = e)
              : a.appendChild(document.createTextNode(e))
        }
      })(
        '.noRowsRecords{background-color:#f9f9f9;border-radius:7px;padding:30px 0 10px;width:100%}@media screen and (min-width:768px){.noRowsRecords{height:215px}}.noRowsRecords__smile{color:#999;display:grid;font-size:135px;height:125px;line-height:1em;margin:auto;place-content:center;text-align:center;width:124px}.noRowsRecords__text{color:#999;font:normal normal normal 18px/21px Roboto;letter-spacing:0;margin-top:25px;padding:0 14px;text-align:center}.noRowsRecords__boldText{color:#999;font:normal normal 700 18px/21px Roboto;letter-spacing:0}',
        {insertAt: 'top'},
      )
      var smilef_esm_t = function t(_ref) {
        var _ref$sad = _ref.sad,
          t = void 0 !== _ref$sad && _ref$sad,
          _ref$className = _ref.className,
          o = void 0 === _ref$className ? '' : _ref$className,
          _ref$message = _ref.message1,
          s = void 0 === _ref$message ? null : _ref$message,
          _ref$message2 = _ref.message2,
          a = void 0 === _ref$message2 ? null : _ref$message2,
          _ref$classNameSmile = _ref.classNameSmile,
          r = void 0 === _ref$classNameSmile ? '' : _ref$classNameSmile
        _ref.titleId
        return react_default.a.createElement(
          'div',
          {className: o},
          react_default.a.createElement(
            'div',
            {className: 'noRowsRecords', role: 'figure'},
            react_default.a.createElement(
              'div',
              {className: 'noRowsRecords__smile'},
              t &&
                react_default.a.createElement(
                  'svg',
                  {
                    tabIndex: 0,
                    stroke: 'currentColor',
                    fill: 'currentColor',
                    strokeWidth: 0,
                    viewBox: '0 0 496 512',
                    className: 'noRowsRecords__size ' + r,
                    height: '1em',
                    width: '1em',
                    xmlns: 'http://www.w3.org/2000/svg',
                    'data-testid': 'sadFace',
                    role: 'figure',
                    'aria-label': 'sadface Image',
                  },
                  react_default.a.createElement('path', {
                    d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z',
                    stroke: 'none',
                  }),
                ),
              !1 === t &&
                react_default.a.createElement(
                  'svg',
                  {
                    className: 'noRowsRecords__size ' + r,
                    stroke: 'currentColor',
                    fill: 'currentColor',
                    strokeWidth: 0,
                    viewBox: '0 0 496 512',
                    height: '1em',
                    width: '1em',
                    xmlns: 'http://www.w3.org/2000/svg',
                    'data-testid': 'happyFace',
                    role: 'figure',
                    'aria-label': 'happyface Image',
                  },
                  react_default.a.createElement('path', {
                    d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z',
                    stroke: 'none',
                  }),
                ),
            ),
            (s || a) &&
              react_default.a.createElement(
                'div',
                {className: 'noRowsRecords__text'},
                s && react_default.a.createElement('p', {tabIndex: 0}, s),
                a &&
                  react_default.a.createElement(
                    'p',
                    {className: 'noRowsRecords__boldText', tabIndex: 0},
                    a,
                  ),
              ),
          ),
        )
      }
      ;(smilef_esm_t.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 't',
        props: {
          sad: {defaultValue: {value: '!1', computed: !1}, required: !1},
          className: {defaultValue: {value: '""', computed: !1}, required: !1},
          message1: {defaultValue: {value: 'null', computed: !1}, required: !1},
          message2: {defaultValue: {value: 'null', computed: !1}, required: !1},
          classNameSmile: {
            defaultValue: {value: '""', computed: !1},
            required: !1,
          },
          titleId: {
            defaultValue: {value: '"smile"', computed: !1},
            required: !1,
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/smilef/dist/smilef.esm.js'] = {
            name: 't',
            docgenInfo: smilef_esm_t.__docgenInfo,
            path: 'packages/smilef/dist/smilef.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        smilef_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/Smilef',
            component: smilef_esm_t,
            argTypes: {
              sad: {
                name: 'sad',
                type: {name: 'boolean', required: !0},
                defaultValue: !1,
                description: 'make the face :( --\x3e :)',
                table: {
                  type: {summary: 'boolean'},
                  defaultValue: {summary: !1},
                },
                control: {type: 'boolean'},
              },
              className: {
                name: 'className',
                type: {name: 'string', required: !1},
                defaultValue: 'className',
                description: 'classNAME of the container',
                table: {
                  type: {summary: 'boolean'},
                  defaultValue: {summary: 'className'},
                },
                control: {type: 'text'},
              },
            },
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(
              smilef_esm_t,
              assign_default()({}, args),
            )
          })
      smilef_stories_Template.displayName = 'Template'
      var Primary = bind_default()(smilef_stories_Template).call(
        smilef_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(smilef_stories_Template).call(
        smilef_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(smilef_stories_Template).call(
        smilef_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {storySource: {source: 'args => <Smilef {...args} />'}},
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {storySource: {source: 'args => <Smilef {...args} />'}},
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {storySource: {source: 'args => <Smilef {...args} />'}},
          Small.parameters,
        ))
    },
    1764: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var toConsumableArray = __webpack_require__(919),
        toConsumableArray_default = __webpack_require__.n(toConsumableArray),
        from = __webpack_require__(359),
        from_default = __webpack_require__.n(from),
        map = __webpack_require__(83),
        map_default = __webpack_require__.n(map),
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        index_of = __webpack_require__(95),
        index_of_default = __webpack_require__.n(index_of),
        get_own_property_symbols = __webpack_require__(78),
        get_own_property_symbols_default = __webpack_require__.n(
          get_own_property_symbols,
        ),
        set_timeout = __webpack_require__(272),
        set_timeout_default = __webpack_require__.n(set_timeout),
        trunc = __webpack_require__(920),
        trunc_default = __webpack_require__.n(trunc),
        simplebar_esm = __webpack_require__(925),
        lib = (__webpack_require__(1687), __webpack_require__(151)),
        Element_scrollBy = __webpack_require__(1778),
        Element_scrollIntoView = __webpack_require__(1779),
        lodash_debounce = __webpack_require__(276),
        lodash_debounce_default = __webpack_require__.n(lodash_debounce)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      function l(t, e) {
        var o = {}
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            index_of_default()(e).call(e, r) < 0 &&
            (o[r] = t[r])
        if (
          null != t &&
          'function' == typeof get_own_property_symbols_default.a
        ) {
          var i = 0
          for (r = get_own_property_symbols_default()(t); i < r.length; i++)
            index_of_default()(e).call(e, r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (o[r[i]] = t[r[i]])
        }
        return o
      }
      var table_esm_n = function n(e) {
          var _e$className = e.className,
            o = void 0 === _e$className ? '' : _e$className,
            r = e.title,
            i = e.titleId,
            a = l(e, ['className', 'title', 'titleId'])
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                className: o,
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-labelledby': i,
              },
              a,
            ),
            r ? react_default.a.createElement('title', {id: i}, r) : null,
            react_default.a.createElement('path', {
              d: 'M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z',
              stroke: 'none',
            }),
          )
        },
        table_esm_d = function d(e) {
          e.className
          var r = e.title,
            i = e.titleId,
            a = l(e, ['className', 'title', 'titleId'])
          return react_default.a.createElement(
            'svg',
            assign_default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 512 512',
                className: 'prefix__paginadorArrowright',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-labelledby': i,
              },
              a,
            ),
            r ? react_default.a.createElement('title', {id: i}, r) : null,
            react_default.a.createElement('path', {
              d: 'M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z',
              stroke: 'none',
            }),
          )
        },
        table_esm_p = (function (_t$Component) {
          inherits_default()(p, _t$Component)
          var _super = _createSuper(p)
          function p() {
            return (
              classCallCheck_default()(this, p), _super.apply(this, arguments)
            )
          }
          return (
            createClass_default()(p, [
              {
                key: 'render',
                value: function render() {
                  var _this = this
                  return react_default.a.createElement(
                    'div',
                    {style: {padding: '15px'}, tabIndex: 0},
                    this.props.totalPages > 0 &&
                      react_default.a.createElement(
                        'div',
                        {
                          className: 'paginador',
                          tabIndex: 0,
                          'aria-label':
                            'total number of pages ' + this.props.totalPages,
                        },
                        react_default.a.createElement(
                          'div',
                          {
                            role: 'button',
                            tabIndex: 0,
                            'aria-label':
                              'left arrow go previous page, current page ' +
                              this.props.currPage,
                            onKeyDown: function onKeyDown() {
                              return 1 !== _this.props.currPage
                                ? _this.props.changePage(
                                    _this.props.currPage - 1,
                                  )
                                : null
                            },
                            className:
                              1 === this.props.currPage
                                ? 'paginadorArrowLeft inactive'
                                : 'paginadorArrowLeft',
                            onClick: function onClick() {
                              return 1 !== _this.props.currPage
                                ? _this.props.changePage(
                                    _this.props.currPage - 1,
                                  )
                                : null
                            },
                          },
                          react_default.a.createElement(table_esm_n, {
                            className:
                              1 === this.props.currPage
                                ? 'paginadorArrowLeft inactive'
                                : 'paginadorArrowLeft',
                          }),
                        ),
                        this.props.totalPages > 1
                          ? react_default.a.createElement(
                              'div',
                              {className: 'contentPaginador'},
                              this.props.currPage,
                              ' de ',
                              this.props.totalPages,
                              ' pag',
                            )
                          : react_default.a.createElement(
                              'div',
                              {className: 'contentPaginador'},
                              this.props.currPage,
                              ' de 1 pag',
                            ),
                        react_default.a.createElement(
                          'div',
                          {
                            role: 'button',
                            'aria-label':
                              'right arrow go next page, current page ' +
                              this.props.currPage,
                            className:
                              this.props.currPage === this.props.totalPages
                                ? 'paginadorArrowright inactive'
                                : 'paginadorArrowright',
                            tabIndex: 0,
                            onClick: function onClick() {
                              return _this.props.currPage !==
                                _this.props.totalPages
                                ? _this.props.changePage(
                                    _this.props.currPage + 1,
                                  )
                                : null
                            },
                            onKeyDown: function onKeyDown() {
                              return _this.props.currPage !==
                                _this.props.totalPages
                                ? _this.props.changePage(
                                    _this.props.currPage + 1,
                                  )
                                : null
                            },
                          },
                          react_default.a.createElement(table_esm_d, {
                            className:
                              this.props.currPage === this.props.totalPages
                                ? 'paginadorArrowright inactive'
                                : 'paginadorArrowright',
                          }),
                        ),
                      ),
                  )
                },
              },
            ]),
            p
          )
        })(react_default.a.Component),
        table_esm_c = (function (_t$Component2) {
          inherits_default()(c, _t$Component2)
          var _super2 = _createSuper(c)
          function c() {
            return (
              classCallCheck_default()(this, c), _super2.apply(this, arguments)
            )
          }
          return (
            createClass_default()(c, [
              {
                key: 'render',
                value: function render() {
                  var e = 'dot dot-position-' + this.props.position
                  return react_default.a.createElement('div', {className: e})
                },
              },
            ]),
            c
          )
        })(react_default.a.Component),
        table_esm_h = (function (_t$Component3) {
          inherits_default()(h, _t$Component3)
          var _super3 = _createSuper(h)
          function h() {
            return (
              classCallCheck_default()(this, h), _super3.apply(this, arguments)
            )
          }
          return (
            createClass_default()(h, [
              {
                key: 'render',
                value: function render() {
                  var _this2 = this,
                    e = this.props.clickable
                      ? 'dot-holder dot-holder-clickable'
                      : 'dot-holder',
                    o = this.props.position
                  return react_default.a.createElement('div', {
                    role: 'button',
                    tabIndex: 0,
                    'data-testid': 'dot-holder',
                    'aria-label': 'dot-holder',
                    className: e,
                    onClick: function onClick(t) {
                      t.stopPropagation(), _this2.props.updatePosition(t, o)
                    },
                    onKeyPress: function onKeyPress(t) {
                      t.stopPropagation(), _this2.props.updatePosition(t, o)
                    },
                  })
                },
              },
            ]),
            h
          )
        })(react_default.a.Component)
      !(function (t, e) {
        void 0 === e && (e = {})
        var o = e.insertAt
        if ('undefined' != typeof document) {
          var r = document.head || document.getElementsByTagName('head')[0],
            i = document.createElement('style')
          ;(i.type = 'text/css'),
            'top' === o && r.firstChild
              ? r.insertBefore(i, r.firstChild)
              : r.appendChild(i),
            i.styleSheet
              ? (i.styleSheet.cssText = t)
              : i.appendChild(document.createTextNode(t))
        }
      })(
        '.DotsContainer{margin-top:15px;text-align:center;width:100%}.dot-holders{display:inline-flex}.dot-holder:last-child{margin-right:0}.slider{display:inline-flex;position:relative;text-align:center}.slider-small .dot-holder{background:#ffae7f 0 0 no-repeat padding-box;border-radius:50%;height:7px;margin-right:10.01px;width:7px}.slider-small .dot-holder:last-child{margin-right:0}.slider-small .dot-holder-clickable{cursor:pointer}.slider-small .dot{background:#f60 0 0 no-repeat padding-box;border:0 solid #f60;border-radius:10px;bottom:0;height:7px;left:0;margin:auto;opacity:1;position:absolute;top:0;transition:left .2s ease-in;width:7px}.slider-small .dot-position-1{left:17px}.slider-small .dot-position-2{left:34px}.slider-small .dot-position-3{left:51px}.slider-small .dot-position-4{left:68px}.slider-small .dot-position-5{left:85px}.slider-small .dot-position-6{left:102px}.slider-small .dot-position-7{left:119px}.slider-small .dot-position-8{left:136px}.slider-small .dot-position-9{left:153px}.slider-small .dot-position-10{left:170px}.slider-small .dot-position-11{left:187px}.slider-small .dot-position-12{left:204px}.slider-small .dot-position-13{left:221px}.slider-small .dot-position-14{left:238px}.slider-medium .dot-holder{background:#ffae7f 0 0 no-repeat padding-box;border-radius:50%;height:10px;margin-right:14.3px;width:10px}.slider-medium .dot-holder:last-child{margin-right:0}.slider-medium .dot-holder-clickable{cursor:pointer}.slider-medium .dot{background:#f60 0 0 no-repeat padding-box;border:0 solid #f60;border-radius:10px;bottom:0;height:7px;left:0;margin:auto;opacity:1;position:absolute;top:0;transition:left .2s ease-in;width:7px}.slider-medium .dot-position-1{left:17px}.slider-medium .dot-position-2{left:34px}.slider-medium .dot-position-3{left:51px}.slider-medium .dot-position-4{left:68px}.slider-medium .dot-position-5{left:85px}.slider-medium .dot-position-6{left:102px}.slider-medium .dot-position-7{left:119px}.slider-medium .dot-position-8{left:136px}.slider-medium .dot-position-9{left:153px}.slider-medium .dot-position-10{left:170px}.slider-medium .dot-position-11{left:187px}.slider-medium .dot-position-12{left:204px}.slider-medium .dot-position-13{left:221px}.slider-medium .dot-position-14{left:238px}.slider-large .dot-holder{background:#ffae7f 0 0 no-repeat padding-box;border-radius:50%;height:13px;margin-right:18.59px;width:13px}.slider-large .dot-holder:last-child{margin-right:0}.slider-large .dot-holder-clickable{cursor:pointer}.slider-large .dot{background:#f60 0 0 no-repeat padding-box;border:0 solid #f60;border-radius:10px;bottom:0;height:7px;left:0;margin:auto;opacity:1;position:absolute;top:0;transition:left .2s ease-in;width:7px}.slider-large .dot-position-1{left:17px}.slider-large .dot-position-2{left:34px}.slider-large .dot-position-3{left:51px}.slider-large .dot-position-4{left:68px}.slider-large .dot-position-5{left:85px}.slider-large .dot-position-6{left:102px}.slider-large .dot-position-7{left:119px}.slider-large .dot-position-8{left:136px}.slider-large .dot-position-9{left:153px}.slider-large .dot-position-10{left:170px}.slider-large .dot-position-11{left:187px}.slider-large .dot-position-12{left:204px}.slider-large .dot-position-13{left:221px}.slider-large .dot-position-14{left:238px}',
        {insertAt: 'top'},
      )
      var table_esm_b = (function (_t$Component4) {
        inherits_default()(b, _t$Component4)
        var _super4 = _createSuper(b)
        function b() {
          var _this3
          return (
            classCallCheck_default()(this, b),
            ((_this3 = _super4.apply(this, arguments)).updatePosition =
              function (t, e) {
                _this3.props.clickable &&
                  (_this3.setState({position: e}),
                  _this3.props.positionChangeListener &&
                    _this3.props.positionChangeListener(t, e))
              }),
            (_this3.generateDotHolders = function () {
              for (var e = [], _o = 0; _o < _this3.props.length; _o++)
                e.push(
                  react_default.a.createElement(table_esm_h, {
                    key: _o,
                    position: _o,
                    clickable: _this3.props.clickable,
                    updatePosition: _this3.updatePosition,
                  }),
                )
              return e
            }),
            (_this3.state = {position: _this3.props.position}),
            _this3
          )
        }
        return (
          createClass_default()(b, [
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(t, e) {
                this.props.position !== t.position &&
                  this.setState({position: this.props.position})
              },
            },
            {
              key: 'render',
              value: function render() {
                var e = this.generateDotHolders(),
                  o = 'slider slider-' + this.props.size
                return react_default.a.createElement(
                  'div',
                  {className: o},
                  react_default.a.createElement(
                    'div',
                    {className: 'dot-holders'},
                    e,
                  ),
                  react_default.a.createElement(table_esm_c, {
                    position: this.state.position,
                  }),
                )
              },
            },
          ]),
          b
        )
      })(react_default.a.Component)
      function m(t, e, o) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : 'smooth'
        Object(Element_scrollBy.a)(t, {top: e, left: o, behavior: r})
      }
      !(function (t, e) {
        void 0 === e && (e = {})
        var o = e.insertAt
        if ('undefined' != typeof document) {
          var r = document.head || document.getElementsByTagName('head')[0],
            i = document.createElement('style')
          ;(i.type = 'text/css'),
            'top' === o && r.firstChild
              ? r.insertBefore(i, r.firstChild)
              : r.appendChild(i),
            i.styleSheet
              ? (i.styleSheet.cssText = t)
              : i.appendChild(document.createTextNode(t))
        }
      })(
        '.tableContainer{outline-width:0}.tableContainer__Title{color:#999;font:normal normal normal 17px/20px Roboto;letter-spacing:0;opacity:1;padding:0 0 0 24px}@media screen and (max-width:767px){.tableContainer__Title{padding:24px 25px 1px 12px;text-align:center;word-break:break-word}}#btn--fix.btn.btn-success.react-bs-table-csv-btn.hidden-print.btn-fiixin{background-color:transparent!important;border:none!important;color:#f60!important;font:normal normal 300 14px/16px Roboto;letter-spacing:0;opacity:1}.fa.glyphicon.glyphicon-export.fa-download.btn__icon{margin-right:10px}.react-bs-table-bordered{border:none;margin-top:15px;padding:20px 20px 20px 0}.react-bs-table .table-bordered>thead>tr>td,.react-bs-table .table-bordered>thead>tr>th{border-bottom-width:1px}.react-bs-table .table-bordered>tbody>tr:nth-child(odd){background-color:#f5f8fa}.react-bs-table .table-bordered>tbody>tr>td{border:1px dotted #e5e5e5;padding:15px 8px;text-align:center!important;vertical-align:middle}.react-bs-table .table-bordered>tbody>tr.no-expandable td.react-bs-table-expand-cell{pointer-events:none}.react-bs-table .table-bordered>tbody>tr.expandable td.react-bs-table-expand-cell{pointer-events:all}.react-bs-table .table-bordered>tbody>tr.trParent:nth-child(odd){background-color:#fff}.react-bs-table .table-bordered>tbody>tr.trParent.tr-odd{background-color:#f5f8fa}.table-bordered>thead>tr>th{border:1px dotted #e5e5e5}.react-bs-table .table-bordered>thead>tr>td{padding:15px 8px;text-align:center!important}.react-bs-table .table-bordered>thead>tr:first-child>td,.react-bs-table .table-bordered>thead>tr:first-child>th{border-bottom-width:0;color:#333;font:normal normal normal 14px/16px Roboto;letter-spacing:0;opacity:1;padding:10px;text-align:center!important}.react-bs-table-pagination i{cursor:pointer}.react-bs-table-tool-bar .row>.col-lg-4{width:100%!important}.react-bs-table-container{padding:10px}.react-bs-table-container:focus{outline-width:0}@media screen and (max-width:802px){.react-bs-table-container .react-bs-table-tool-bar .row>div{width:100%!important}.react-bs-table-container .react-bs-table-tool-bar .row>div>div{display:grid;place-content:center center}}.react-bs-table-container .react-bs-table-bordered{display:block;opacity:1}@media screen and (max-width:768px){.react-bs-table-container .react-bs-container-body,.react-bs-table-container .react-bs-container-footer,.react-bs-table-container .react-bs-container-header{width:880px;width:100%}}.react-bs-table-container .react-bs-container-header .table-bordered{border:1px dotted #e5e5e5;border-bottom:none;border-radius:3px}.react-bs-table-container .react-bs-container-body .table-bordered{border:1px dotted #e5e5e5;border-radius:3px;border-top:none}.react-bs-table-container .btn-ver{min-width:70px}.simplebar-mask{border-radius:7px}.simplebar-scrollbar:before{background-color:#f60;opacity:.8!important}.simplebar-scrollbar{height:11px!important}.simplebar-track.simplebar-horizontal{background:#f4f4f4 0 0 no-repeat padding-box;border-radius:20px;height:14px!important}.simplebar-offset{top:-16px!important}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none!important}.react-bs-container-body,.react-bs-container-header{overflow:unset!important}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{white-space:normal}.estado-tabla{border-radius:10px;display:inline-block;font-family:Roboto Medium;font-size:12px;letter-spacing:-.04em;padding:2px 5px}.estado-0{background-color:#dff0d7;color:#43894e}.estado-4{background-color:#d8edf8;color:#5cadd6}.estado-1,.estado-2,.estado-3,.estado-5{background-color:#efd3d7;color:#bb4945}.estado-6{background-color:#fbeed4;color:#cd9439}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.estado{background:#dff0d7 0 0 no-repeat padding-box;border:.3px solid #d6eac5;border-radius:941px;opacity:1;padding:0 1px 1px 0;text-align:center}.estado__text{color:#43894e;font:normal normal 700 11px/13px Roboto;letter-spacing:0;opacity:1}.btn-group-container{display:flex;flex-flow:column nowrap}@media screen and (max-width:801px){.react-bs-table-container{margin-top:-25px}}.display__none{display:none}',
        {insertAt: 'top'},
      )
      var table_esm_g = (function (_t$Component5) {
        inherits_default()(g, _t$Component5)
        var _super5 = _createSuper(g)
        function g() {
          var _this4
          return (
            classCallCheck_default()(this, g),
            ((_this4 = _super5.apply(this, arguments)).onPageChange = function (
              t,
              e,
            ) {
              set_timeout_default()(function () {
                null != _this4.props.changePage &&
                  void 0 !== _this4.props.changePage &&
                  _this4.props.changePage(t),
                  _this4.setState({prevScrollBarPosition: 0}, function () {
                    _this4.previousPosition = 0
                    var t = _this4.simplebar.getScrollElement()
                    m(t, 0, -(t.scrollWidth - t.offsetWidth)),
                      (null !== _this4.props.toright &&
                        void 0 !== _this4.props.toright) ||
                        (function (t, e) {
                          var r,
                            a,
                            o =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 'center'
                          t &&
                            ((r = t.style.position),
                            (a = t.style.top),
                            (t.style.position = 'relative'),
                            (t.style.top = e + 'px'),
                            Object(Element_scrollIntoView.a)(t, {
                              behavior: 'smooth',
                              block: o,
                            }),
                            (t.style.top = a),
                            (t.style.position = r))
                        })(_this4.myInput, -180, 'start')
                  })
              }, 50)
            }),
            (_this4.slideMyTable = function (t, e) {
              t.stopPropagation()
              var o = _this4.simplebar.getScrollElement(),
                r = o.scrollWidth - o.offsetWidth,
                i = trunc_default()(r / 2),
                a = r
              if (_this4.simplebar)
                switch (e) {
                  case 0:
                    m(o, 0, -a), (_this4.previousPosition = e)
                    break
                  case 1:
                    null !== _this4.previousPosition &&
                    2 === _this4.previousPosition
                      ? m(o, 0, -i)
                      : m(o, 0, i),
                      (_this4.previousPosition = e)
                    break
                  case 2:
                    m(o, 0, a), (_this4.previousPosition = e)
                }
            }),
            (_this4.changeDotPosition = lodash_debounce_default()(function (t) {
              var e =
                t.srcElement.scrollLeft /
                (t.srcElement.scrollWidth - t.srcElement.offsetWidth)
              e >= 0 &&
                e <= 0.28 &&
                _this4.setState({prevScrollBarPosition: 0}),
                e > 0.28 &&
                  e <= 0.69 &&
                  _this4.setState({prevScrollBarPosition: 1}),
                e > 0.69 && _this4.setState({prevScrollBarPosition: 2})
            }, 300)),
            (_this4.renderPaginationPanel = function (e) {
              return react_default.a.createElement(
                'div',
                {tabIndex: 0},
                react_default.a.createElement(
                  table_esm_p,
                  assign_default()({}, e),
                ),
              )
            }),
            (_this4.isOverflown = function (t) {
              return (
                null !== t &&
                (t.scrollHeight > t.clientHeight ||
                  t.scrollWidth > t.clientWidth)
              )
            }),
            (_this4.createCustomExportCSVButton = function () {
              if (!1 === _this4.props.isMobile)
                return react_default.a.createElement('div', {
                  style: {display: 'none'},
                })
              var e =
                (_this4.props.isMobile && _this4.props.overFlowTable) ||
                (_this4.props.isMobile && _this4.state.overflowMount)
              return react_default.a.createElement(
                'div',
                {className: e ? 'redprestadores__btn' : 'display__none'},
                e &&
                  react_default.a.createElement(
                    'div',
                    {className: 'DotsContainer'},
                    react_default.a.createElement(table_esm_b, {
                      length: 3,
                      size: 'small',
                      position: _this4.state.prevScrollBarPosition,
                      clickable: !0,
                      positionChangeListener: _this4.slideMyTable,
                    }),
                  ),
              )
            }),
            (_this4.simplebar = null),
            (_this4.pagination = !1),
            (_this4.previousPosition = null),
            (_this4.MyTableContainer = null),
            (_this4.myInput = null),
            (_this4.overflowMount = !1),
            (_this4.optsDesktop = {
              clearSearch: !0,
              noDataText: 'No hay datos Disponibles',
              pageDropDown: !1,
              sizePerPage: 10,
              withoutNoDataText: !0,
              pageStartIndex: 1,
              hideSizePerPage: !0,
              alwaysShowAllBtns: !0,
              hidePageListOnlyOnePage: !0,
              exportCSVText: 'Descargar',
              onPageChange: _this4.onPageChange,
              exportCSVBtn: _this4.createCustomExportCSVButton,
              paginationPanel: _this4.renderPaginationPanel,
            }),
            (_this4.state = {
              prevScrollBarPosition: 0,
              percentageScroll: 0,
              overflowMount: !1,
            }),
            _this4
          )
        }
        return (
          createClass_default()(g, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.MyTableContainer = document.querySelector(
                  '.' +
                    this.props.identificator +
                    ' .react-bs-table.react-bs-table-bordered',
                )
                var t = !1
                !0 === this.props.isMobile && (t = !0),
                  void 0 !== this.MyTableContainer &&
                    null !== this.MyTableContainer &&
                    ((this.simplebar = new simplebar_esm.a(
                      this.MyTableContainer,
                      {autoHide: t},
                    )),
                    null !== this.simplebar &&
                      void 0 !== this.simplebar &&
                      void 0 !== this.simplebar.getScrollElement() &&
                      this.simplebar
                        .getScrollElement()
                        .addEventListener('scroll', this.changeDotPosition))
                var o = this.isOverflown(
                  document.querySelector(this.props.titleCssOverflowContainer),
                )
                this.setState({overflowMount: o})
              },
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                this.simplebar.unMount(),
                  (this.simplebar = null),
                  (this.MyTableContainer = null),
                  window.removeEventListener('scroll', this.changeDotPosition)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(t, e) {
                var _this5 = this
                this.props.data !== t.data &&
                  set_timeout_default()(function () {
                    _this5.setState({prevScrollBarPosition: 0}, function () {
                      _this5.previousPosition = 0
                      var t = _this5.simplebar.getScrollElement(),
                        e = t.scrollWidth - t.offsetWidth
                      ;(null !== _this5.props.preventScroll &&
                        void 0 !== _this5.props.preventScroll &&
                        !1 !== _this5.props.preventScroll) ||
                        m(t, 0, -e)
                    })
                  }, 50)
              },
            },
            {
              key: 'render',
              value: function render() {
                var _context,
                  _this6 = this
                return react_default.a.createElement(
                  'div',
                  {
                    className: 'tableContainer ' + this.props.identificator,
                    ref: function ref(t) {
                      return (e = t), void (_this6.myInput = e)
                      var e
                    },
                  },
                  this.props.showTitle &&
                    react_default.a.createElement(
                      'p',
                      {className: 'tableContainer__Title'},
                      this.props.titleTable,
                    ),
                  react_default.a.createElement(
                    lib.BootstrapTable,
                    {
                      data: this.props.data,
                      options: this.optsDesktop,
                      pagination: !0,
                      exportCSV: this.props.displayBtnDescarga,
                      ignoreSinglePage: !0,
                      scrollTop: 'Bottom',
                      csvFileName: this.props.filename,
                    },
                    map_default()((_context = this.props.fields)).call(
                      _context,
                      function (e, o) {
                        return e.formater && e.csvformater
                          ? 0 === o
                            ? react_default.a.createElement(
                                lib.TableHeaderColumn,
                                {
                                  isKey: !0,
                                  key: 'Table_' + o,
                                  dataField: e.dataField,
                                  width: e.width,
                                  dataFormat: _this6.props.estadoFormater,
                                  csvFormat: _this6.props.csvformater,
                                },
                                e.title,
                              )
                            : react_default.a.createElement(
                                lib.TableHeaderColumn,
                                {
                                  key: 'Table_' + o,
                                  dataField: e.dataField,
                                  width: e.width,
                                  dataFormat: _this6.props.estadoFormater,
                                  csvFormat: _this6.props.csvformater,
                                },
                                e.title,
                              )
                          : e.formater
                          ? 0 === o
                            ? react_default.a.createElement(
                                lib.TableHeaderColumn,
                                {
                                  isKey: !0,
                                  key: 'Table_' + o,
                                  dataField: e.dataField,
                                  width: e.width,
                                  dataFormat: _this6.props.estadoFormater,
                                },
                                e.title,
                              )
                            : react_default.a.createElement(
                                lib.TableHeaderColumn,
                                {
                                  key: 'Table_' + o,
                                  dataField: e.dataField,
                                  width: e.width,
                                  dataFormat: _this6.props.estadoFormater,
                                },
                                e.title,
                              )
                          : e.csvformater
                          ? 0 === o
                            ? react_default.a.createElement(
                                lib.TableHeaderColumn,
                                {
                                  isKey: !0,
                                  key: 'Table_' + o,
                                  dataField: e.dataField,
                                  width: e.width,
                                  csvFormat: _this6.props.csvformater,
                                },
                                e.title,
                              )
                            : react_default.a.createElement(
                                lib.TableHeaderColumn,
                                {
                                  key: 'Table_' + o,
                                  dataField: e.dataField,
                                  width: e.width,
                                  csvFormat: _this6.props.csvformater,
                                },
                                e.title,
                              )
                          : 0 === o
                          ? react_default.a.createElement(
                              lib.TableHeaderColumn,
                              {
                                isKey: !0,
                                key: 'Table_' + o,
                                dataField: e.dataField,
                                width: e.width,
                              },
                              e.title,
                            )
                          : react_default.a.createElement(
                              lib.TableHeaderColumn,
                              {
                                key: 'Table_' + o,
                                dataField: e.dataField,
                                width: e.width,
                              },
                              e.title,
                            )
                      },
                    ),
                  ),
                )
              },
            },
          ]),
          g
        )
      })(react_default.a.Component)
      ;(table_esm_g.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'g',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/table/dist/table.esm.js'] = {
            name: 'g',
            docgenInfo: table_esm_g.__docgenInfo,
            path: 'packages/table/dist/table.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        table_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/Table',
            component: table_esm_g,
            argTypes: {
              isMobile: {
                name: 'isMobile',
                type: {name: 'boolean', required: !0},
                defaultValue: !0,
                description: 'tell the table if its MOBILE or not....',
                table: {
                  type: {summary: 'boolean'},
                  defaultValue: {summary: !0},
                },
                control: {type: 'boolean'},
              },
              displayBtnDescarga: {
                name: 'displayBtnDescarga',
                type: {name: 'boolean', required: !0},
                defaultValue: !0,
                description: 'show download button or not',
                table: {
                  type: {summary: 'boolean'},
                  defaultValue: {summary: !1},
                },
                control: {type: 'boolean'},
              },
              filename: {
                name: 'filename',
                type: {name: 'string', required: !0},
                defaultValue: 'filename',
                description: 'filename of the file downloaded',
                table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
                control: {type: 'text'},
              },
              titleTable: {
                name: 'titleTable',
                type: {name: 'string', required: !0},
                defaultValue: 'titleTable',
                description: 'titleTable of the table',
                table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
                control: {type: 'text'},
              },
              titleCssOverflowContainer: {
                name: 'titleCssOverflowContainer',
                type: {name: 'string', required: !0},
                defaultValue: 'titleCssOverflowContainer',
                description: 'titleCssOverflowContainer of the table',
                table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
                control: {type: 'text'},
              },
              mensajeBtnDescarga: {
                name: 'mensajeBtnDescarga',
                type: {name: 'string', required: !0},
                defaultValue: 'mensajeBtnDescarga',
                description: 'mensajeBtnDescarga of the table',
                table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
                control: {type: 'text'},
              },
              overFlowTable: {
                name: 'overFlowTable',
                type: {name: 'string', required: !0},
                defaultValue: 'boolean',
                description:
                  'boolean that specifies if table overflows container, and let the dots be visible',
                table: {type: {summary: 'string'}, defaultValue: {summary: !1}},
                control: {type: 'boolean'},
              },
            },
          }),
          function Template(args) {
            var _context,
              dataTemplate = {
                Apagar: 'pagar',
                Prn: 'Prn',
                Prg: 'Prg',
                Telefono: 'Telefono',
                Identificacion: 'Identificacion',
                Paciente: 'Paciente',
                Hora: 'Hora',
              },
              data = map_default()(
                (_context = toConsumableArray_default()(
                  (function range(start, end) {
                    var length =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : end - start + 1
                    return from_default()({length: length}, function (_, i) {
                      return start + i
                    })
                  })(1, 15),
                )),
              ).call(_context, function (el) {
                return assign_default()({}, dataTemplate)
              })
            return Object(jsx_runtime.jsx)(
              table_esm_g,
              assign_default()({}, args, {
                data: data,
                fields: [
                  {
                    dataField: 'Hora',
                    width: '81.57px',
                    title: 'Hora',
                    formater: !0,
                  },
                  {dataField: 'Paciente', width: '180px', title: 'Paciente'},
                  {
                    dataField: 'Identificacion',
                    width: '120.5px',
                    title: 'Identificación',
                  },
                  {dataField: 'Telefono', width: '98.5px', title: 'Teléfono'},
                  {dataField: 'Prg', width: '94px', title: 'Programa'},
                  {dataField: 'Prn', width: '84px', title: 'Prn.'},
                  {
                    dataField: 'Apagar',
                    width: '120px',
                    title: 'A Pagar',
                    formater: !0,
                    csvformater: !0,
                  },
                ],
                csvformater: function csvFormatterF(cell, row) {
                  return cell
                },
                estadoFormater: function estadoFormater(
                  cell,
                  row,
                  formatExtraData,
                  rowIdx,
                ) {
                  if (row.Hora !== cell) {
                    var currencyFormat = cell
                    return Object(jsx_runtime.jsx)('span', {
                      children: currencyFormat,
                    })
                  }
                  if (row.Hora === cell)
                    return Object(jsx_runtime.jsx)('span', {
                      children: '' + cell,
                    })
                },
              }),
            )
          })
      table_stories_Template.displayName = 'Template'
      var Primary = bind_default()(table_stories_Template).call(
        table_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(table_stories_Template).call(
        table_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(table_stories_Template).call(
        table_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const fields = [\n    {\n      dataField: 'Hora',\n      width: '81.57px',\n      title: 'Hora',\n      formater: true,\n    },\n    {\n      dataField: 'Paciente',\n      width: '180px',\n      title: 'Paciente',\n    },\n    {\n      dataField: 'Identificacion',\n      width: '120.5px',\n      title: 'Identificación',\n    },\n    {\n      dataField: 'Telefono',\n      width: '98.5px',\n      title: 'Teléfono',\n    },\n    {\n      dataField: 'Prg',\n      width: '94px',\n      title: 'Programa',\n    },\n    {\n      dataField: 'Prn',\n      width: '84px',\n      title: 'Prn.',\n    },\n    {\n      dataField: 'Apagar',\n      width: '120px',\n      title: 'A Pagar',\n      formater: true,\n      csvformater: true,\n    },\n  ]\n  const dataTemplate = {\n    Apagar: 'pagar',\n    Prn: 'Prn',\n    Prg: 'Prg',\n    Telefono: 'Telefono',\n    Identificacion: 'Identificacion',\n    Paciente: 'Paciente',\n    Hora: 'Hora',\n  }\n  const range = (start, end, length = end - start + 1) =>\n    Array.from({length}, (_, i) => start + i)\n\n  const data = [...range(1, 15)].map(el => {\n    return {\n      ...dataTemplate,\n    }\n  })\n  const csvFormatterF = (cell, row) => {\n    const currencyFormat = cell\n    return currencyFormat\n  }\n\n  const estadoFormater = (cell, row, formatExtraData, rowIdx) => {\n    if (row.Hora !== cell) {\n      const number = cell\n      const currencyFormat = number\n      return <span>{currencyFormat}</span>\n    }\n    if (row.Hora === cell) {\n      return <span>{`${cell}`}</span>\n    }\n  }\n\n  return (\n    <Table\n      {...args}\n      data={data}\n      fields={fields}\n      csvformater={csvFormatterF}\n      estadoFormater={estadoFormater}\n    />\n  )\n}",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const fields = [\n    {\n      dataField: 'Hora',\n      width: '81.57px',\n      title: 'Hora',\n      formater: true,\n    },\n    {\n      dataField: 'Paciente',\n      width: '180px',\n      title: 'Paciente',\n    },\n    {\n      dataField: 'Identificacion',\n      width: '120.5px',\n      title: 'Identificación',\n    },\n    {\n      dataField: 'Telefono',\n      width: '98.5px',\n      title: 'Teléfono',\n    },\n    {\n      dataField: 'Prg',\n      width: '94px',\n      title: 'Programa',\n    },\n    {\n      dataField: 'Prn',\n      width: '84px',\n      title: 'Prn.',\n    },\n    {\n      dataField: 'Apagar',\n      width: '120px',\n      title: 'A Pagar',\n      formater: true,\n      csvformater: true,\n    },\n  ]\n  const dataTemplate = {\n    Apagar: 'pagar',\n    Prn: 'Prn',\n    Prg: 'Prg',\n    Telefono: 'Telefono',\n    Identificacion: 'Identificacion',\n    Paciente: 'Paciente',\n    Hora: 'Hora',\n  }\n  const range = (start, end, length = end - start + 1) =>\n    Array.from({length}, (_, i) => start + i)\n\n  const data = [...range(1, 15)].map(el => {\n    return {\n      ...dataTemplate,\n    }\n  })\n  const csvFormatterF = (cell, row) => {\n    const currencyFormat = cell\n    return currencyFormat\n  }\n\n  const estadoFormater = (cell, row, formatExtraData, rowIdx) => {\n    if (row.Hora !== cell) {\n      const number = cell\n      const currencyFormat = number\n      return <span>{currencyFormat}</span>\n    }\n    if (row.Hora === cell) {\n      return <span>{`${cell}`}</span>\n    }\n  }\n\n  return (\n    <Table\n      {...args}\n      data={data}\n      fields={fields}\n      csvformater={csvFormatterF}\n      estadoFormater={estadoFormater}\n    />\n  )\n}",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => {\n  const fields = [\n    {\n      dataField: 'Hora',\n      width: '81.57px',\n      title: 'Hora',\n      formater: true,\n    },\n    {\n      dataField: 'Paciente',\n      width: '180px',\n      title: 'Paciente',\n    },\n    {\n      dataField: 'Identificacion',\n      width: '120.5px',\n      title: 'Identificación',\n    },\n    {\n      dataField: 'Telefono',\n      width: '98.5px',\n      title: 'Teléfono',\n    },\n    {\n      dataField: 'Prg',\n      width: '94px',\n      title: 'Programa',\n    },\n    {\n      dataField: 'Prn',\n      width: '84px',\n      title: 'Prn.',\n    },\n    {\n      dataField: 'Apagar',\n      width: '120px',\n      title: 'A Pagar',\n      formater: true,\n      csvformater: true,\n    },\n  ]\n  const dataTemplate = {\n    Apagar: 'pagar',\n    Prn: 'Prn',\n    Prg: 'Prg',\n    Telefono: 'Telefono',\n    Identificacion: 'Identificacion',\n    Paciente: 'Paciente',\n    Hora: 'Hora',\n  }\n  const range = (start, end, length = end - start + 1) =>\n    Array.from({length}, (_, i) => start + i)\n\n  const data = [...range(1, 15)].map(el => {\n    return {\n      ...dataTemplate,\n    }\n  })\n  const csvFormatterF = (cell, row) => {\n    const currencyFormat = cell\n    return currencyFormat\n  }\n\n  const estadoFormater = (cell, row, formatExtraData, rowIdx) => {\n    if (row.Hora !== cell) {\n      const number = cell\n      const currencyFormat = number\n      return <span>{currencyFormat}</span>\n    }\n    if (row.Hora === cell) {\n      return <span>{`${cell}`}</span>\n    }\n  }\n\n  return (\n    <Table\n      {...args}\n      data={data}\n      fields={fields}\n      csvformater={csvFormatterF}\n      estadoFormater={estadoFormater}\n    />\n  )\n}",
            },
          },
          Small.parameters,
        ))
    },
    1765: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small
        })
      var _templateObject,
        object_assign = __webpack_require__(2),
        assign_default = __webpack_require__.n(object_assign),
        bind = __webpack_require__(7),
        bind_default = __webpack_require__.n(bind),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        construct = __webpack_require__(30),
        construct_default = __webpack_require__.n(construct),
        classCallCheck = __webpack_require__(57),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(58),
        createClass_default = __webpack_require__.n(createClass),
        assertThisInitialized = __webpack_require__(483),
        assertThisInitialized_default = __webpack_require__.n(
          assertThisInitialized,
        ),
        inherits = __webpack_require__(59),
        inherits_default = __webpack_require__.n(inherits),
        possibleConstructorReturn = __webpack_require__(76),
        possibleConstructorReturn_default = __webpack_require__.n(
          possibleConstructorReturn,
        ),
        getPrototypeOf = __webpack_require__(48),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        taggedTemplateLiteralLoose = __webpack_require__(13),
        taggedTemplateLiteralLoose_default = __webpack_require__.n(
          taggedTemplateLiteralLoose,
        ),
        OverlayTrigger = __webpack_require__(1788),
        Popover = __webpack_require__(1782)
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !construct_default.a) return !1
          if (construct_default.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                construct_default()(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = getPrototypeOf_default()(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf_default()(this).constructor
            result = construct_default()(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return possibleConstructorReturn_default()(this, result)
        }
      }
      var a = __webpack_require__(14).b.div(
        _templateObject ||
          (_templateObject = taggedTemplateLiteralLoose_default()([
            '\n  /* position: unset;\n  left: 102%;\n  top: 31%; */\n  position: absolute;\n  display: block;\n  @media screen and (device-width: 767px) {\n    /* top: 30%;\n    left: 102%; */\n  }\n  @media screen and (max-width: 766px) {\n    /* top: 30%;\n    left: 105%; */\n  }\n',
          ])),
      )
      !(function (t, e) {
        void 0 === e && (e = {})
        var o = e.insertAt
        if ('undefined' != typeof document) {
          var i = document.head || document.getElementsByTagName('head')[0],
            s = document.createElement('style')
          ;(s.type = 'text/css'),
            'top' === o && i.firstChild
              ? i.insertBefore(s, i.firstChild)
              : i.appendChild(s),
            s.styleSheet
              ? (s.styleSheet.cssText = t)
              : s.appendChild(document.createTextNode(t))
        }
      })('.fade:not(.show){opacity:1!important}', {insertAt: 'top'})
      var tooltip_esm_n = (function (_s) {
        inherits_default()(n, _s)
        var _super = _createSuper(n)
        function n(t) {
          var _context, _this
          return (
            classCallCheck_default()(this, n),
            ((_this = _super.call(this, t)).state = {show: !1}),
            (_this.target = null),
            (_this.handleClick = bind_default()(
              (_context = _this.handleClick),
            ).call(_context, assertThisInitialized_default()(_this))),
            _this
          )
        }
        return (
          createClass_default()(n, [
            {
              key: 'handleClick',
              value: function handleClick(t) {
                t.preventDefault(),
                  this.setState({target: t.target, show: !this.state.show})
              },
            },
            {
              key: 'render',
              value: function render() {
                var _this2 = this
                return react_default.a.createElement(
                  a,
                  {'data-container': 'body'},
                  react_default.a.createElement(
                    OverlayTrigger.a,
                    {
                      trigger: ['focus'],
                      container: this,
                      rootClose: !1,
                      placement: this.props.isMobile ? 'left' : 'bottom',
                      overlay: react_default.a.createElement(
                        Popover.a,
                        {
                          id: this.props.isMobile
                            ? 'popover-positioned-left'
                            : 'popover-positioned-bottom',
                        },
                        this.props.text,
                      ),
                    },
                    react_default.a.createElement(
                      'a',
                      {
                        id: 'toolTip-Icon',
                        href: '#',
                        'data-testid': 'toolTip-Icon',
                        tabIndex: 0,
                        'aria-label':
                          'informative tooltip on ' + this.props.text,
                        'data-toggle': 'tooltip',
                        'data-container': 'body',
                        style: {position: 'relative', cursor: 'pointer'},
                        onClick: this.handleClick,
                        ref: function ref(t) {
                          _this2.target = t
                        },
                      },
                      react_default.a.createElement('i', {
                        className: this.props.icon,
                      }),
                    ),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(react.Component)
      ;(tooltip_esm_n.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'handleClick',
            docblock: null,
            modifiers: [],
            params: [{name: 't', type: null}],
            returns: null,
          },
        ],
        displayName: 'n',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/tooltip/dist/tooltip.esm.js'] = {
            name: 'n',
            docgenInfo: tooltip_esm_n.__docgenInfo,
            path: 'packages/tooltip/dist/tooltip.esm.js',
          })
      var jsx_runtime = __webpack_require__(4),
        tooltip_stories_Template =
          ((__webpack_exports__.default = {
            title: 'components/ToolTipc',
            component: tooltip_esm_n,
            argTypes: {
              text: {
                name: 'text',
                type: {name: 'string', required: !0},
                defaultValue: '',
                description: 'text for tooltip',
                table: {type: {summary: 'string'}, defaultValue: {summary: ''}},
                control: {type: 'text'},
              },
              isMobile: {
                name: 'isMobile',
                type: {name: 'boolean', required: !0},
                defaultValue: '',
                description: 'its mobile or not',
                table: {type: {summary: 'string'}, defaultValue: {summary: ''}},
                control: {type: 'boolean'},
              },
            },
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)('div', {
              style: {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              children: Object(jsx_runtime.jsx)(
                tooltip_esm_n,
                assign_default()({}, args, {icon: 'fa fa-info-circle'}),
              ),
            })
          })
      tooltip_stories_Template.displayName = 'Template'
      var Primary = bind_default()(tooltip_stories_Template).call(
        tooltip_stories_Template,
        {},
      )
      Primary.args = {}
      var Large = bind_default()(tooltip_stories_Template).call(
        tooltip_stories_Template,
        {},
      )
      Large.args = {size: 'large', label: 'Button'}
      var Small = bind_default()(tooltip_stories_Template).call(
        tooltip_stories_Template,
        {},
      )
      ;(Small.args = {size: 'small', label: 'Button'}),
        (Primary.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => (\n  <div\n    style={{\n      position: 'relative',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n    }}\n  >\n    <ToolTipc {...args} icon={'fa fa-info-circle'} />\n  </div>\n)",
            },
          },
          Primary.parameters,
        )),
        (Large.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => (\n  <div\n    style={{\n      position: 'relative',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n    }}\n  >\n    <ToolTipc {...args} icon={'fa fa-info-circle'} />\n  </div>\n)",
            },
          },
          Large.parameters,
        )),
        (Small.parameters = assign_default()(
          {
            storySource: {
              source:
                "args => (\n  <div\n    style={{\n      position: 'relative',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n    }}\n  >\n    <ToolTipc {...args} icon={'fa fa-info-circle'} />\n  </div>\n)",
            },
          },
          Small.parameters,
        ))
    },
    197: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Button
      })
      var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(265),
        _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__,
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__(96),
          __webpack_require__(0),
          __webpack_require__(1446),
          __webpack_require__(4)),
        _excluded = ['primary', 'size', 'backgroundColor', 'label'],
        Button = function Button(_ref) {
          var _ref$primary = _ref.primary,
            primary = void 0 !== _ref$primary && _ref$primary,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'medium' : _ref$size,
            backgroundColor = _ref.backgroundColor,
            label = _ref.label,
            props =
              _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(
                _ref,
                _excluded,
              ),
            mode = primary
              ? 'storybook-button--primary'
              : 'storybook-button--secondary'
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            'button',
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                type: 'button',
                className: [
                  'storybook-button',
                  'storybook-button--' + size,
                  mode,
                ].join(' '),
                style: {backgroundColor: backgroundColor},
              },
              props,
              {children: label},
            ),
          )
        }
      Button.displayName = 'Button'
      try {
        ;(Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: 'Primary UI component for user interaction',
            displayName: 'Button',
            props: {
              primary: {
                defaultValue: {value: 'false'},
                description:
                  'Is this the principal call to action on the page?',
                name: 'primary',
                required: !1,
                type: {name: 'boolean'},
              },
              backgroundColor: {
                defaultValue: null,
                description: 'What background color to use',
                name: 'backgroundColor',
                required: !1,
                type: {name: 'string'},
              },
              size: {
                defaultValue: {value: 'medium'},
                description: 'How large should the button be?',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    {value: '"small"'},
                    {value: '"medium"'},
                    {value: '"large"'},
                  ],
                },
              },
              label: {
                defaultValue: null,
                description: 'Button contents',
                name: 'label',
                required: !0,
                type: {name: 'string'},
              },
              onClick: {
                defaultValue: null,
                description: 'Optional click handler',
                name: 'onClick',
                required: !1,
                type: {name: '() => void'},
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'stories/Button.tsx#Button',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    266: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Header
      })
      __webpack_require__(0)
      var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(1449), __webpack_require__(4)),
        Header = function Header(_ref) {
          var user = _ref.user,
            onLogin = _ref.onLogin,
            onLogout = _ref.onLogout,
            onCreateAccount = _ref.onCreateAccount
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            'header',
            {
              children: Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs,
              )('div', {
                className: 'wrapper',
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                    'div',
                    {
                      children: [
                        Object(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                        )('svg', {
                          width: '32',
                          height: '32',
                          viewBox: '0 0 32 32',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs,
                          )('g', {
                            fill: 'none',
                            fillRule: 'evenodd',
                            children: [
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                              )('path', {
                                d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                                fill: '#FFF',
                              }),
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                              )('path', {
                                d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                                fill: '#555AB9',
                              }),
                              Object(
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                              )('path', {
                                d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                                fill: '#91BAF8',
                              }),
                            ],
                          }),
                        }),
                        Object(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                        )('h1', {children: 'Acme'}),
                      ],
                    },
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    'div',
                    {
                      children: user
                        ? Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                          )(_Button__WEBPACK_IMPORTED_MODULE_1__.a, {
                            size: 'small',
                            onClick: onLogout,
                            label: 'Log out',
                          })
                        : Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs,
                          )(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                            {
                              children: [
                                Object(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                                )(_Button__WEBPACK_IMPORTED_MODULE_1__.a, {
                                  size: 'small',
                                  onClick: onLogin,
                                  label: 'Log in',
                                }),
                                Object(
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx,
                                )(_Button__WEBPACK_IMPORTED_MODULE_1__.a, {
                                  primary: !0,
                                  size: 'small',
                                  onClick: onCreateAccount,
                                  label: 'Sign up',
                                }),
                              ],
                            },
                          ),
                    },
                  ),
                ],
              }),
            },
          )
        }
      Header.displayName = 'Header'
      try {
        ;(Header.displayName = 'Header'),
          (Header.__docgenInfo = {
            description: '',
            displayName: 'Header',
            props: {
              user: {
                defaultValue: null,
                description: '',
                name: 'user',
                required: !1,
                type: {name: '{}'},
              },
              onLogin: {
                defaultValue: null,
                description: '',
                name: 'onLogin',
                required: !0,
                type: {name: '() => void'},
              },
              onLogout: {
                defaultValue: null,
                description: '',
                name: 'onLogout',
                required: !0,
                type: {name: '() => void'},
              },
              onCreateAccount: {
                defaultValue: null,
                description: '',
                name: 'onCreateAccount',
                required: !0,
                type: {name: '() => void'},
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['stories/Header.tsx#Header'] = {
              docgenInfo: Header.__docgenInfo,
              name: 'Header',
              path: 'stories/Header.tsx#Header',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    267: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return l
      })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(13),
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__,
          ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(14),
        e = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div.attrs(
          function (t) {
            return {className: t.classExtra, 'data-testid': t['data-testid']}
          },
        )(
          _templateObject ||
            (_templateObject =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: start;\n  padding-top: 30px;\n\n  background: #f9f9f9 0% 0% no-repeat padding-box;\n  border-radius: 10px;\n  width: 100%;\n  height: fit-content;\n  margin: 30px 0px;\n',
                ],
              )),
        ),
        r = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div.attrs(
          function (t) {
            return {className: t.className}
          },
        )(
          _templateObject2 ||
            (_templateObject2 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  border-bottom: 1px dashed #ccc;\n  width: 100%;\n  margin-bottom: 30px;\n',
                ],
              )),
        ),
        i = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.h2.attrs(function (
          t,
        ) {
          return {className: t.className}
        })(
          _templateObject3 ||
            (_templateObject3 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  &&&& {\n    text-align: left;\n    margin-left: 30px;\n    font: normal normal normal 18px/21px Roboto !important;\n    @media screen and (max-width: 902px) {\n      margin-left: 0px;\n    }\n  }\n',
                ],
              )),
        ),
        n = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div.attrs(
          function (t) {
            return {className: t.className}
          },
        )(
          _templateObject4 ||
            (_templateObject4 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 3px;\n  margin-bottom: 74px;\n  > *:first-child {\n    margin-right: 30px;\n  }\n  @media screen and (max-width: 902px) {\n    > *:first-child {\n      margin-right: 0px;\n      margin-bottom: 15px;\n    }\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n  }\n',
                ],
              )),
        ),
        l = function l(_ref) {
          var _ref$classExtra = _ref.classExtra,
            a = void 0 === _ref$classExtra ? '' : _ref$classExtra,
            _ref$title = _ref.title,
            l = void 0 === _ref$title ? '' : _ref$title,
            s = _ref.children
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            e,
            {classExtra: a, 'data-testid': 'cards container'},
            l &&
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                r,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  i,
                  null,
                  l,
                ),
              ),
            s &&
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                n,
                null,
                s,
              ),
          )
        }
      ;(l.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'l',
        props: {
          classExtra: {defaultValue: {value: '""', computed: !1}, required: !1},
          title: {defaultValue: {value: '""', computed: !1}, required: !1},
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/cards/dist/cards.esm.js'] = {
            name: 'l',
            docgenInfo: l.__docgenInfo,
            path: 'packages/cards/dist/cards.esm.js',
          })
    },
    268: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return s
      })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(13),
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__,
          ),
        react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(14),
        n = styled_components__WEBPACK_IMPORTED_MODULE_3__.b.div(
          _templateObject ||
            (_templateObject =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  border-top: 1px dashed #ccc;\n  padding-top: 2em;\n  padding-bottom: 2em;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  width: 100%;\n  margin-top: 25px;\n  @media screen and (max-width: 767px) {\n    flex-flow: column-reverse nowrap;\n    align-items: center;\n    padding-bottom: 1.5em;\n    padding-top: 2.3em;\n    margin-top: 50px;\n  }\n',
                ],
              )),
        ),
        t = styled_components__WEBPACK_IMPORTED_MODULE_3__.b.input(
          _templateObject2 ||
            (_templateObject2 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  &&& {\n    font: normal normal 300 14px/16px Roboto;\n    text-align: center;\n    background-color: transparent;\n    color: #ff6600ba;\n    text-transform: uppercase;\n    padding: 5px 10px;\n    text-align: center;\n    border: none;\n    @media screen and (max-width: 767px) {\n      margin-left: 0px;\n    }\n\n    &:disabled {\n      background: transparent;\n      border: none;\n      color: #7779;\n      cursor: not-allowed;\n    }\n  }\n',
                ],
              )),
        ),
        r = styled_components__WEBPACK_IMPORTED_MODULE_3__.b.input(
          _templateObject3 ||
            (_templateObject3 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  &&& {\n    transition: background-color 0.2s ease-out;\n    padding: 10px 14px 11px 14px;\n    font: normal normal bold 14px/16px Roboto;\n    letter-spacing: 0px;\n    border-radius: 5px;\n    text-align: center;\n    background-color: #f60;\n    border-color: transparent;\n    color: #fff;\n\n    &:disabled {\n      opacity: 1;\n      color: #999;\n      background-color: #e5e5e5;\n      border: solid 1px #ccc;\n      cursor: not-allowed;\n      &:hover {\n        background-color: #e5e5e5;\n      }\n    }\n    &:hover {\n      background: #777;\n    }\n    @media screen and (min-width: 359px) {\n      margin-bottom: 12px;\n    }\n  }\n',
                ],
              )),
        ),
        o = styled_components__WEBPACK_IMPORTED_MODULE_3__.b.div(
          _templateObject4 ||
            (_templateObject4 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  display: flex;\n  align-items: baseline;\n  margin-top: 20px;\n\n  @media screen and (max-width: 767px) {\n    flex-flow: column;\n    align-items: center;\n    margin-top: -6px;\n    margin-bottom: 13px;\n  }\n',
                ],
              )),
        ),
        i = styled_components__WEBPACK_IMPORTED_MODULE_3__.b.div(
          _templateObject5 ||
            (_templateObject5 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  display: flex;\n  align-items: center;\n  //margin-left: 34px;\n  margin-bottom: 10.6px;\n  align-self: flex-end;\n  margin-bottom: 17.5px;\n  @media screen and (max-width: 767px) {\n    flex-flow: column;\n    margin: 0;\n    margin-top: 22px;\n    align-self: center;\n    margin-bottom: 15px;\n  }\n',
                ],
              )),
        ),
        l = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.b)(function (
          a,
        ) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            'svg',
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 384 512',
                height: '1em',
                width: '1em',
                'data-testid': 'fileicon',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              a,
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('path', {
              d: 'M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zM128.4 336c-17.9 0-32.4 12.1-32.4 27 0 15 14.6 27 32.5 27s32.4-12.1 32.4-27-14.6-27-32.5-27zM224 136V0h-63.6v32h-32V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM95.9 32h32v32h-32zm32.3 384c-33.2 0-58-30.4-51.4-62.9L96.4 256v-32h32v-32h-32v-32h32v-32h-32V96h32V64h32v32h-32v32h32v32h-32v32h32v32h-32v32h22.1c5.7 0 10.7 4.1 11.8 9.7l17.3 87.7c6.4 32.4-18.4 62.6-51.4 62.6z',
              stroke: 'none',
            }),
          )
        })(
          _templateObject6 ||
            (_templateObject6 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  //margin-left: 29px;\n  font-size: 24px;\n  @media screen and (max-width: 767px) {\n    margin-left: 0px;\n    margin-top: 0px;\n  }\n',
                ],
              )),
        ),
        m = styled_components__WEBPACK_IMPORTED_MODULE_3__.b.span.attrs(
          function (e) {
            return {tabindex: e.tabIndex}
          },
        )(
          _templateObject7 ||
            (_templateObject7 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  margin-left: 7px;\n  font: normal normal 300 14px/16px Roboto;\n\n  @media screen and (max-width: 767px) {\n    margin-left: 0px;\n    margin-top: 5px;\n  }\n',
                ],
              )),
        ),
        d = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.b)(function (
          _ref,
        ) {
          var a = _ref.className,
            o = _ref.show,
            i = _ref.disableMessage,
            l = _ref.cleanMessage,
            m = _ref.handleCancel,
            d = _ref.generateMessage,
            p = _ref.disableGenerate,
            c = _ref.querySickLeaves
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            n,
            {className: a},
            !0 === o[0] &&
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(t, {
                type: 'button',
                disabled: i,
                value: l,
                onClick: m,
                'aria-label': 'cleaning function',
                'data-testid': 'clean',
              }),
            !0 === o[1] &&
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(r, {
                type: 'button',
                value: d,
                disabled: p,
                onClick: c,
                'aria-label': 'generate function',
                'data-testid': 'generate',
              }),
          )
        })(
          _templateObject8 ||
            (_templateObject8 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  &&& {\n    margin-left: auto;\n    border: none;\n    width: unset;\n    /* margin-right: 43px; */\n    padding: 0;\n    margin-right: 13px;\n    @media screen and (max-width: 767px) {\n      margin-left: 0px;\n      margin: 0;\n      margin-right: 5px;\n    }\n  }\n',
                ],
              )),
        ),
        p = styled_components__WEBPACK_IMPORTED_MODULE_3__.b.div(
          _templateObject9 ||
            (_templateObject9 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  &&& {\n    margin-left: 56px;\n    margin-top: 30px;\n    margin-right: 19px;\n    @media screen and (max-width: 768px) {\n      margin-top: 56px;\n      margin-left: 0;\n      margin-right: 0px;\n      text-align: center;\n      padding: 0 16px;\n    }\n  }\n',
                ],
              )),
        ),
        c = styled_components__WEBPACK_IMPORTED_MODULE_3__.b.h3(
          _templateObject10 ||
            (_templateObject10 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  &&& {\n    font: normal normal normal 17.6px/21px Roboto;\n    letter-spacing: 0px;\n    color: #999999;\n  }\n',
                ],
              )),
        ),
        s = function s(_ref2) {
          var _ref2$querySickLeaves = _ref2.querySickLeaves,
            a =
              void 0 === _ref2$querySickLeaves
                ? function () {
                    return console.log('hello excel')
                  }
                : _ref2$querySickLeaves,
            _ref2$disabled = _ref2.disabled,
            n = void 0 !== _ref2$disabled && _ref2$disabled,
            _ref2$filename = _ref2.filename,
            t =
              void 0 === _ref2$filename
                ? 'Nombre del reporte.xlsx'
                : _ref2$filename,
            _ref2$btnMessage = _ref2.btnMessage,
            r = void 0 === _ref2$btnMessage ? 'Descargar' : _ref2$btnMessage,
            s = _ref2.messageZipPart1,
            x = _ref2.messageZipPart2
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              p,
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                c,
                {tabIndex: 0},
                s + ' ' + x,
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                o,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  i,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    l,
                    null,
                  ),
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    m,
                    {
                      'aria-label':
                        'filename of generated file when downloading its ' + t,
                      tabIndex: 0,
                    },
                    t,
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(d, {
                  className: 'provedores__buttonsGenerar',
                  generateMessage: r,
                  querySickLeaves: a,
                  disableGenerate: n,
                  show: [!1, !0],
                }),
              ),
            ),
          )
        }
      ;(s.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 's',
        props: {
          querySickLeaves: {
            defaultValue: {
              value: '()=>console.log("hello excel")',
              computed: !1,
            },
            required: !1,
          },
          disabled: {defaultValue: {value: '!1', computed: !1}, required: !1},
          filename: {
            defaultValue: {value: '"Nombre del reporte.xlsx"', computed: !1},
            required: !1,
          },
          btnMessage: {
            defaultValue: {value: '"Descargar"', computed: !1},
            required: !1,
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/btndown/dist/download.esm.js'] = {
            name: 's',
            docgenInfo: s.__docgenInfo,
            path: 'packages/btndown/dist/download.esm.js',
          })
    },
    269: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return l
      })
      var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(95),
        _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(78),
        _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(83),
        _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__,
          ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__,
        ),
        t = function t(_ref) {
          var t = _ref.styles,
            l = _ref.item,
            a = _ref.styleSpan,
            n = _ref.styleValue
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {className: t},
            '' !== l.label
              ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    'div',
                    {className: a},
                    l.label,
                  ),
                  null != n
                    ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        'div',
                        {className: n},
                        l.value,
                      )
                    : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,
                        null,
                        ' ',
                        l.value,
                      ),
                )
              : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'br',
                  {className: 'd-none d-md-block'},
                ),
          )
        }
      !(function (e, t) {
        void 0 === t && (t = {})
        var l = t.insertAt
        if ('undefined' != typeof document) {
          var a = document.head || document.getElementsByTagName('head')[0],
            n = document.createElement('style')
          ;(n.type = 'text/css'),
            'top' === l && a.firstChild
              ? a.insertBefore(n, a.firstChild)
              : a.appendChild(n),
            n.styleSheet
              ? (n.styleSheet.cssText = e)
              : n.appendChild(document.createTextNode(e))
        }
      })(
        '.labelValue{background-color:#fff;border-radius:5px;color:#777;display:flex;font:normal normal 300 14px/17px Roboto;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;text-align:start}@media (max-width:767.999px){.labelValue{margin:0;padding:5px}}@media (min-width:768px){.labelValue{margin:15px;padding:20px}}.labelValue__label{color:#000;font:normal normal normal 14px/17px Roboto!important}',
        {insertAt: 'top'},
      )
      var l = function l(_l) {
        var a = _l.stylesColumn,
          n = _l.dataColumn,
          o = _l.subColumns
        return (
          (function (e, t) {
            var l = {}
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) &&
                _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(
                  t,
                ).call(t, a) < 0 &&
                (l[a] = e[a])
            if (
              null != e &&
              'function' ==
                typeof _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a
            ) {
              var n = 0
              for (
                a =
                  _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(
                    e,
                  );
                n < a.length;
                n++
              )
                _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_0___default()(
                  t,
                ).call(t, a[n]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
                  (l[a[n]] = e[a[n]])
            }
          })(_l, ['stylesColumn', 'dataColumn', 'subColumns']),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {className: 'labelValue', tabIndex: 0},
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'div',
              {className: 'row col-sm-12 p-0'},
              _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(
                n,
              ).call(n, function (l, n) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  {
                    className: a,
                    'aria-describedby': n + '_' + l.value,
                    tabIndex: 0,
                    key: 'labelValueItem_' + n,
                  },
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    t,
                    {
                      id: n + '_' + l.value,
                      item: l,
                      styles: 'col-sm-12 p-0',
                      styleSpan:
                        (!0 === o ? 'col-sm-6' : '') + ' labelValue__label',
                      styleValue: !0 === o ? 'col-sm-6' : null,
                    },
                  ),
                )
              }),
            ),
          )
        )
      }
    },
    270: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return d
      })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(13),
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__,
          ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(14),
        n = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(
          _templateObject ||
            (_templateObject =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n0% {\n\n            transform: rotate(0deg); \n}\n  100% {\n\n            transform: rotate(360deg); \n}\n',
                ],
              )),
        ),
        r = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div(
          _templateObject2 ||
            (_templateObject2 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  ',
                  '\n\n  width: 103%;\n  z-index: 3;\n  margin-left: -23px;\n  height: 100%;\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  ',
                  '\n',
                ],
              )),
          function (_ref) {
            return _ref.noBack
              ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.a)(
                  _templateObject3 ||
                    (_templateObject3 =
                      _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                        [
                          '\n          background-color: transparent;\n        ',
                        ],
                      )),
                )
              : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.a)(
                  _templateObject4 ||
                    (_templateObject4 =
                      _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                        [
                          '\n          background-color: rgba(255, 255, 255, 0.85);\n        ',
                        ],
                      )),
                )
          },
          function (_ref2) {
            return (
              _ref2.loading &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.a)(
                _templateObject5 ||
                  (_templateObject5 =
                    _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                      ['\n      display: block;\n    '],
                    )),
              )
            )
          },
        ),
        i = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div.attrs(
          function (t) {
            return {'data-testid': t['data-testid']}
          },
        )(
          _templateObject6 ||
            (_templateObject6 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  "\n  border-radius: 50%;\n  color: #f60;\n  font-size: 11px;\n  text-indent: -999px;\n  margin: auto auto;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  box-shadow: inset 0 0 0 6px;\n  transform: translateZ(0);\n  top: 50%;\n  margin-top: -25px;\n  &:before,\n  &:after {\n    position: absolute;\n    content: '';\n    width: 27px;\n    height: 52px;\n    background-color: #fff;\n  }\n\n  &:before {\n    border-radius: 50px 0 0 50px;\n    top: -1px;\n    left: -1px;\n    transform-origin: 27px 26px;\n    animation: ",
                  ' 2s infinite ease 1.5s;\n  }\n  &:after {\n    border-radius: 0 50px 50px 0;\n    top: -1px;\n    right: -1px;\n    transform-origin: 1px 26px;\n    animation: ',
                  ' 2s infinite ease;\n  }\n',
                ],
              )),
          n,
          n,
        ),
        p = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.span(
          _templateObject7 ||
            (_templateObject7 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  display: block;\n  overflow: hidden;\n  text-indent: -999px;\n  width: 100%;\n',
                ],
              )),
        ),
        d = function d(_ref3) {
          var e = _ref3.loading,
            _ref3$noBack = _ref3.noBack,
            o = void 0 !== _ref3$noBack && _ref3$noBack
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
            null,
            e &&
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                r,
                {loading: e, noBack: o},
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  i,
                  {'data-testid': 'spinningLoader'},
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    p,
                    null,
                    'cargando... ',
                  ),
                ),
              ),
          )
        }
      ;(d.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'd',
        props: {
          noBack: {defaultValue: {value: '!1', computed: !1}, required: !1},
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/loader/dist/loader.esm.js'] = {
            name: 'd',
            docgenInfo: d.__docgenInfo,
            path: 'packages/loader/dist/loader.esm.js',
          })
    },
    274: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return n
      })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(13),
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__,
          ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(14),
        o = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div(
          _templateObject ||
            (_templateObject =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  &&&& {\n    margin: 20px 0px 0px;\n    background: #fff 0% 0% no-repeat padding-box;\n    border: 1px solid #f60;\n    border-radius: 10px;\n    min-height: 200px;\n    position: relative;\n    border-color: #ccc;\n    ',
                  '\n  }\n  padding-top: 30px;\n',
                ],
              )),
          function (_ref) {
            return 2 === _ref.phase
              ? 'border-color: #ccc'
              : 'border-color: #f60'
          },
        ),
        r = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div.attrs(
          function (e) {
            return {
              tabindex: e.tabIndex,
              'data-testid': e['data-testid'],
              'aria-label': e['aria-label'],
            }
          },
        )(
          _templateObject2 ||
            (_templateObject2 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  position: relative;\n  display: block;\n  min-height: 1px;\n  padding: 1px;\n',
                ],
              )),
        ),
        i = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.span(
          _templateObject3 ||
            (_templateObject3 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  "\n  border: none;\n  background: #f60;\n  line-height: 73px;\n  color: #fff;\n  position: absolute;\n  top: -36.5px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 73px;\n  height: 73px;\n  display: block;\n\n  border: 1px solid #f4f4f4;\n  text-align: center;\n  line-height: 73px;\n  font-size: 36px;\n  font-family: 'Roboto Bold';\n  border-radius: 100%;\n\n  ",
                  '\n\n  @media screen and (device-width: 767px) {\n    top: -67.5px;\n  }\n  @media screen and (max-width: 767px) {\n    top: -67.5px;\n    transform: translateX(-59%);\n  }\n  @media screen and (min-width: 768px) {\n    top: 15px;\n    left: -36.5px;\n    transform: translateX(0);\n  }\n',
                ],
              )),
          function (_ref2) {
            return 2 === _ref2.phase
              ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.a)(
                  _templateObject4 ||
                    (_templateObject4 =
                      _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                        [
                          "\n        border: none;\n        background: #81ba00;\n        line-height: 73px;\n        color: #fff;\n        font-size: 0%;\n        &::before {\n          font-family: 'FontAwesome';\n          content: '\f00c';\n          font-size: 40px;\n        }\n      ",
                        ],
                        [
                          "\n        border: none;\n        background: #81ba00;\n        line-height: 73px;\n        color: #fff;\n        font-size: 0%;\n        &::before {\n          font-family: 'FontAwesome';\n          content: '\\f00c';\n          font-size: 40px;\n        }\n      ",
                        ],
                      )),
                )
              : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.a)(
                  _templateObject5 ||
                    (_templateObject5 =
                      _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                        [''],
                      )),
                )
          },
        ),
        n = function n(_ref3) {
          var t = _ref3.setRef,
            a = _ref3.children,
            _ref3$phase = _ref3.phase,
            n = void 0 === _ref3$phase ? 1 : _ref3$phase,
            p = _ref3.className
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            o,
            {phase: n, ref: t, className: p},
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              r,
              {
                'data-testid': 'phase-1',
                tabIndex: 0,
                'aria-label':
                  'the phase of the container is 1 and the actual phase is ' +
                  n,
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                i,
                {phase: n},
                '1',
              ),
            ),
            a,
          )
        }
      ;(n.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'n',
        props: {
          phase: {defaultValue: {value: '1', computed: !1}, required: !1},
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/phase1/dist/phase1.esm.js'] = {
            name: 'n',
            docgenInfo: n.__docgenInfo,
            path: 'packages/phase1/dist/phase1.esm.js',
          })
    },
    275: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return d
      })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(13),
        _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__,
          ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(14),
        r = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div(
          _templateObject ||
            (_templateObject =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  background: #f9f9f9 0% 0% no-repeat padding-box;\n  border: 1px solid #ccc;\n  padding: 0;\n  border-radius: 10px;\n  position: relative;\n  min-height: 200px;\n  background: #f4f4f4;\n  display: block;\n  margin: 40px 0px 0px;\n  padding: 0;\n  @media screen and (max-width: 767px) {\n    margin: 70px 0px 0px;\n  }\n',
                ],
              )),
        ),
        i = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.span(
          _templateObject2 ||
            (_templateObject2 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  "\n  position: absolute;\n  top: -36.5px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 73px;\n  height: 73px;\n  display: block;\n  background: #e5e5e5;\n  border: 5px solid #f4f4f4;\n  text-align: center;\n  line-height: 63px;\n  font-size: 36px;\n  font-family: 'Roboto Bold';\n  color: #777;\n  border-radius: 100%;\n  @media screen and (min-width: 768px) {\n    top: 15px;\n    left: -36.5px;\n    transform: translateX(0);\n  }\n  ",
                  '\n',
                ],
              )),
          function (_ref) {
            return (
              2 === _ref.phase &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.a)(
                _templateObject3 ||
                  (_templateObject3 =
                    _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                      [
                        '\n      border: none;\n      background: #f60;\n      line-height: 73px;\n      color: #fff;\n    ',
                      ],
                    )),
              )
            )
          },
        ),
        o = styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div.attrs(
          function (e) {
            return {
              tabindex: e.tabIndex,
              'data-testid': e['data-testid'],
              'aria-label': e['aria-label'],
            }
          },
        )(
          _templateObject4 ||
            (_templateObject4 =
              _babel_runtime_corejs3_helpers_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                [
                  '\n  border-radius: 10px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n',
                ],
              )),
        ),
        d = function d(_ref2) {
          var _ref2$setRef = _ref2.setRef,
            a =
              void 0 === _ref2$setRef
                ? function (e) {
                    return e
                  }
                : _ref2$setRef,
            t = _ref2.children,
            _ref2$phase = _ref2.phase,
            d = void 0 === _ref2$phase ? 1 : _ref2$phase,
            n = _ref2.className
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            r,
            {ref: a, className: n},
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              o,
              {
                'data-testid': 'phase-2',
                tabIndex: 0,
                'aria-label':
                  'the phase of the container is 2 and the actual phase is ' +
                  d,
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                i,
                {phase: d},
                '2',
              ),
              t,
            ),
          )
        }
      ;(d.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'd',
        props: {
          setRef: {defaultValue: {value: 'e=>e', computed: !1}, required: !1},
          phase: {defaultValue: {value: '1', computed: !1}, required: !1},
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['packages/phase2/dist/phase2.esm.js'] = {
            name: 'd',
            docgenInfo: d.__docgenInfo,
            path: 'packages/phase2/dist/phase2.esm.js',
          })
    },
    357: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'LoggedIn', function () {
          return LoggedIn
        }),
        __webpack_require__.d(__webpack_exports__, 'LoggedOut', function () {
          return LoggedOut
        })
      var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(2),
        _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__,
          ),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(7),
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__,
          ),
        _Header__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(0), __webpack_require__(266)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4)
      __webpack_exports__.default = {
        title: 'Example/Header',
        component: _Header__WEBPACK_IMPORTED_MODULE_3__.a,
      }
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Header__WEBPACK_IMPORTED_MODULE_3__.a,
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            args,
          ),
        )
      }
      Template.displayName = 'Template'
      var LoggedIn =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      LoggedIn.args = {user: {}}
      var LoggedOut =
        _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(
          Template,
        ).call(Template, {})
      ;(LoggedOut.args = {}),
        (LoggedIn.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Header {...args} />'}},
            LoggedIn.parameters,
          )),
        (LoggedOut.parameters =
          _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(
            {storySource: {source: 'args => <Header {...args} />'}},
            LoggedOut.parameters,
          ))
    },
    850: function (module, exports) {},
    900: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/code-brackets.2e1112d7.svg'
    },
    901: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/colors.a4bd0486.svg'
    },
    902: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/comments.a3859089.svg'
    },
    903: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/direction.b770f9af.svg'
    },
    904: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/flow.edad2ac1.svg'
    },
    905: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/plugin.d494b228.svg'
    },
    906: function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/repo.6d496322.svg'
    },
    907: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/stackalt.dba9fbb3.svg'
    },
    955: function (module, exports, __webpack_require__) {
      __webpack_require__(956),
        __webpack_require__(1117),
        __webpack_require__(1118),
        __webpack_require__(1741),
        __webpack_require__(1737),
        __webpack_require__(1743),
        __webpack_require__(1744),
        __webpack_require__(1742),
        __webpack_require__(1738),
        __webpack_require__(1745),
        __webpack_require__(1739),
        __webpack_require__(1740),
        __webpack_require__(1746),
        (module.exports = __webpack_require__(1423))
    },
  },
  [[955, 2, 3]],
])
//# sourceMappingURL=main.1ac96eaf.iframe.bundle.js.map

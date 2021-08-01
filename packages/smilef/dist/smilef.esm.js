import e from 'react'
!(function (e, t) {
  void 0 === t && (t = {})
  var o = t.insertAt
  if (e && 'undefined' != typeof document) {
    var s = document.head || document.getElementsByTagName('head')[0],
      l = document.createElement('style')
    ;(l.type = 'text/css'),
      'top' === o && s.firstChild
        ? s.insertBefore(l, s.firstChild)
        : s.appendChild(l),
      l.styleSheet
        ? (l.styleSheet.cssText = e)
        : l.appendChild(document.createTextNode(e))
  }
})(
  '.noRowsRecords{background-color:#f9f9f9;border-radius:7px;padding:30px 0 10px;width:100%}@media screen and (min-width:768px){.noRowsRecords{height:215px}}.noRowsRecords__smile{color:#999;display:grid;font-size:135px;height:125px;line-height:1em;margin:auto;place-content:center;text-align:center;width:124px}.noRowsRecords__text{color:#999;font:normal normal normal 18px/21px Roboto;letter-spacing:0;margin-top:25px;padding:0 14px;text-align:center}.noRowsRecords__boldText{color:#999;font:normal normal 700 18px/21px Roboto;letter-spacing:0}',
  {insertAt: 'top'},
)
const t = ({
  sad: t = !1,
  className: o = '',
  message1: s = null,
  message2: l = null,
  classNameSmile: n = '',
  titleId: r = 'smile',
  title: a = null,
}) =>
  e.createElement(
    'div',
    {className: o},
    e.createElement(
      'div',
      {className: 'noRowsRecords'},
      e.createElement(
        'div',
        {className: 'noRowsRecords__smile'},
        t &&
          e.createElement(
            'svg',
            {
              stroke: 'currentColor',
              fill: 'currentColor',
              strokeWidth: 0,
              viewBox: '0 0 496 512',
              className: `noRowsRecords__size ${n}`,
              height: '1em',
              width: '1em',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': r,
            },
            a ? e.createElement('title', {'data-testid': r, id: r}, a) : null,
            e.createElement('path', {
              d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z',
              stroke: 'none',
            }),
          ),
        !1 === t &&
          e.createElement(
            'svg',
            {
              className: `noRowsRecords__size ${n}`,
              stroke: 'currentColor',
              fill: 'currentColor',
              strokeWidth: 0,
              viewBox: '0 0 496 512',
              height: '1em',
              width: '1em',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': r,
            },
            a ? e.createElement('title', {id: r}, a) : null,
            e.createElement('path', {
              d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z',
              stroke: 'none',
            }),
          ),
      ),
      (s || l) &&
        e.createElement(
          'div',
          {className: 'noRowsRecords__text'},
          s && e.createElement('span', null, s),
          l &&
            e.createElement('span', {className: 'noRowsRecords__boldText'}, l),
        ),
    ),
  )
export {t as Smilef}
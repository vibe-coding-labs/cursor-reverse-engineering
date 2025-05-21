'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.__addDisposableResource = __addDisposableResource;
exports.__assign = void 0;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncValues = __asyncValues;
exports.__await = __await;
exports.__awaiter = __awaiter;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldIn = __classPrivateFieldIn;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = void 0;
exports.__decorate = __decorate;
exports.__disposeResources = __disposeResources;
exports.__esDecorate = __esDecorate;
exports.__exportStar = __exportStar;
exports.__extends = __extends;
exports.__generator = __generator;
exports.__importDefault = __importDefault;
exports.__importStar = __importStar;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__metadata = __metadata;
exports.__param = __param;
exports.__propKey = __propKey;
exports.__read = __read;
exports.__rest = __rest;
exports.__runInitializers = __runInitializers;
exports.__setFunctionName = __setFunctionName;
exports.__spread = __spread;
exports.__spreadArray = __spreadArray;
exports.__spreadArrays = __spreadArrays;
exports.__values = __values;
exports['default'] = void 0;
require('child_process');
var _fs = _interopRequireWildcard(require('fs'));
var x = _fs;
var _os = require('os');
var _util = require('util');
var P0 = _interopRequireWildcard(require('https'));
var _nodeFetch = _interopRequireDefault(require('node-fetch'));
var _ref;
var _Ht,
  _se,
  _j,
  _Kt,
  _Jt,
  _Class2,
  _oe,
  _je,
  _Qt,
  _process,
  _B,
  _B2,
  _e5,
  _process2,
  _M,
  _N,
  _R,
  _ce,
  _V2;
function _interopRequireDefault(e) {
  return e && e.__esModule
    ? e
    : {
        default: e,
      };
}
function _interopRequireWildcard(e, t) {
  if ('function' == typeof WeakMap)
    var r = new WeakMap(),
      n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = {
        __proto__: null,
        default: e,
      };
    if (null === e || ('object' != _typeof(e) && 'function' != typeof e)) return f;
    if ((o = t ? n : r)) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t1 in e)
      'default' !== _t1 &&
        {}.hasOwnProperty.call(e, _t1) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t1)) &&
        (i.get || i.set)
          ? o(f, _t1, i)
          : (f[_t1] = e[_t1]));
    return f;
  })(e, t);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return e;
}
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArray(r) {
  if (('undefined' != typeof Symbol && null != r[Symbol.iterator]) || null != r['@@iterator'])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, 'next', n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, 'throw', n);
      }
      _next(void 0);
    });
  };
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && 'function' == typeof p
    ? function (t) {
        return p.apply(e, t);
      }
    : p;
}
function _get() {
  return (
    (_get =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var p = _superPropBase(e, t);
            if (p) {
              var n = Object.getOwnPropertyDescriptor(p, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }),
    _get.apply(null, arguments)
  );
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); );
  return t;
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t['return'] && ((u = t['return']()), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
  if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0,
    },
  })),
    Object.defineProperty(t, 'prototype', {
      writable: !1,
    }),
    e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = 'function' == typeof Map ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ('function' != typeof t)
        throw new TypeError('Super expression must either be null or a function');
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper.prototype = Object.create(t.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        _setPrototypeOf(Wrapper, t)
      );
    }),
    _wrapNativeSuper(t)
  );
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf('[native code]');
  } catch (n) {
    return 'function' == typeof t;
  }
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
function _regeneratorRuntime() {
  'use strict';

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return r;
  };
  var t,
    r = {},
    e = Object.prototype,
    n = e.hasOwnProperty,
    o = 'function' == typeof Symbol ? Symbol : {},
    i = o.iterator || '@@iterator',
    a = o.asyncIterator || '@@asyncIterator',
    u = o.toStringTag || '@@toStringTag';
  function c(t, r, e, n) {
    return Object.defineProperty(t, r, {
      value: e,
      enumerable: !n,
      configurable: !n,
      writable: !n,
    });
  }
  try {
    c({}, '');
  } catch (t) {
    c = function c(t, r, e) {
      return (t[r] = e);
    };
  }
  function h(r, e, n, o) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype);
    return (
      c(
        a,
        '_invoke',
        (function (r, e, n) {
          var o = 1;
          return function (i, a) {
            if (3 === o) throw Error('Generator is already running');
            if (4 === o) {
              if ('throw' === i) throw a;
              return {
                value: t,
                done: !0,
              };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var c = d(u, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (1 === o) throw ((o = 4), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 3;
              var h = s(r, e, n);
              if ('normal' === h.type) {
                if (((o = n.done ? 4 : 2), h.arg === f)) continue;
                return {
                  value: h.arg,
                  done: n.done,
                };
              }
              'throw' === h.type && ((o = 4), (n.method = 'throw'), (n.arg = h.arg));
            }
          };
        })(r, n, new Context(o || [])),
        !0,
      ),
      a
    );
  }
  function s(t, r, e) {
    try {
      return {
        type: 'normal',
        arg: t.call(r, e),
      };
    } catch (t) {
      return {
        type: 'throw',
        arg: t,
      };
    }
  }
  r.wrap = h;
  var f = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var l = {};
  c(l, i, function () {
    return this;
  });
  var p = Object.getPrototypeOf,
    y = p && p(p(x([])));
  y && y !== e && n.call(y, i) && (l = y);
  var v = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l));
  function g(t) {
    ['next', 'throw', 'return'].forEach(function (r) {
      c(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function AsyncIterator(t, r) {
    function e(o, i, a, u) {
      var c = s(t[o], t, i);
      if ('throw' !== c.type) {
        var h = c.arg,
          f = h.value;
        return f && 'object' == _typeof(f) && n.call(f, '__await')
          ? r.resolve(f.__await).then(
              function (t) {
                e('next', t, a, u);
              },
              function (t) {
                e('throw', t, a, u);
              },
            )
          : r.resolve(f).then(
              function (t) {
                (h.value = t), a(h);
              },
              function (t) {
                return e('throw', t, a, u);
              },
            );
      }
      u(c.arg);
    }
    var o;
    c(
      this,
      '_invoke',
      function (t, n) {
        function i() {
          return new r(function (r, o) {
            e(t, n, r, o);
          });
        }
        return (o = o ? o.then(i, i) : i());
      },
      !0,
    );
  }
  function d(r, e) {
    var n = e.method,
      o = r.i[n];
    if (o === t)
      return (
        (e.delegate = null),
        ('throw' === n &&
          r.i['return'] &&
          ((e.method = 'return'), (e.arg = t), d(r, e), 'throw' === e.method)) ||
          ('return' !== n &&
            ((e.method = 'throw'),
            (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
        f
      );
    var i = s(o, r.i, e.arg);
    if ('throw' === i.type) return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), f;
    var a = i.arg;
    return a
      ? a.done
        ? ((e[r.r] = a.value),
          (e.next = r.n),
          'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
          (e.delegate = null),
          f)
        : a
      : ((e.method = 'throw'),
        (e.arg = new TypeError('iterator result is not an object')),
        (e.delegate = null),
        f);
  }
  function w(t) {
    this.tryEntries.push(t);
  }
  function m(r) {
    var e = r[4] || {};
    (e.type = 'normal'), (e.arg = t), (r[4] = e);
  }
  function Context(t) {
    (this.tryEntries = [[-1]]), t.forEach(w, this), this.reset(!0);
  }
  function x(r) {
    if (null != r) {
      var e = r[i];
      if (e) return e.call(r);
      if ('function' == typeof r.next) return r;
      if (!isNaN(r.length)) {
        var o = -1,
          a = function e() {
            for (; ++o < r.length; ) if (n.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
            return (e.value = t), (e.done = !0), e;
          };
        return (a.next = a);
      }
    }
    throw new TypeError(_typeof(r) + ' is not iterable');
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    c(v, 'constructor', GeneratorFunctionPrototype),
    c(GeneratorFunctionPrototype, 'constructor', GeneratorFunction),
    (GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
    (r.isGeneratorFunction = function (t) {
      var r = 'function' == typeof t && t.constructor;
      return !!r && (r === GeneratorFunction || 'GeneratorFunction' === (r.displayName || r.name));
    }),
    (r.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype), c(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(v)),
        t
      );
    }),
    (r.awrap = function (t) {
      return {
        __await: t,
      };
    }),
    g(AsyncIterator.prototype),
    c(AsyncIterator.prototype, a, function () {
      return this;
    }),
    (r.AsyncIterator = AsyncIterator),
    (r.async = function (t, e, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(h(t, e, n, o), i);
      return r.isGeneratorFunction(e)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    g(v),
    c(v, u, 'Generator'),
    c(v, i, function () {
      return this;
    }),
    c(v, 'toString', function () {
      return '[object Generator]';
    }),
    (r.keys = function (t) {
      var r = Object(t),
        e = [];
      for (var n in r) e.unshift(n);
      return function t() {
        for (; e.length; ) if ((n = e.pop()) in r) return (t.value = n), (t.done = !1), t;
        return (t.done = !0), t;
      };
    }),
    (r.values = x),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(r) {
        if (
          ((this.prev = this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(m),
          !r)
        )
          for (var e in this)
            't' === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0][4];
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(r) {
        if (this.done) throw r;
        var e = this;
        function n(t) {
          (a.type = 'throw'), (a.arg = r), (e.next = t);
        }
        for (var o = e.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i[4],
            u = this.prev,
            c = i[1],
            h = i[2];
          if (-1 === i[0]) return n('end'), !1;
          if (!c && !h) throw Error('try statement without catch or finally');
          if (null != i[0] && i[0] <= u) {
            if (u < c) return (this.method = 'next'), (this.arg = t), n(c), !0;
            if (u < h) return n(h), !1;
          }
        }
      },
      abrupt: function abrupt(t, r) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
            var o = n;
            break;
          }
        }
        o && ('break' === t || 'continue' === t) && o[0] <= r && r <= o[2] && (o = null);
        var i = o ? o[4] : {};
        return (
          (i.type = t),
          (i.arg = r),
          o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(i)
        );
      },
      complete: function complete(t, r) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
              ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
              : 'normal' === t.type && r && (this.next = r),
          f
        );
      },
      finish: function finish(t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;
        }
      },
      catch: function _catch(t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e[0] === t) {
            var n = e[4];
            if ('throw' === n.type) {
              var o = n.arg;
              m(e);
            }
            return o;
          }
        }
        throw Error('illegal catch attempt');
      },
      delegateYield: function delegateYield(r, e, n) {
        return (
          (this.delegate = {
            i: x(r),
            r: e,
            n: n,
          }),
          'next' === this.method && (this.arg = t),
          f
        );
      },
    }),
    r
  );
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', {
      writable: !1,
    }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _createForOfIteratorHelper(r, e) {
  var t = ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (!t) {
    if (
      Array.isArray(r) ||
      (t = _unsupportedIterableToArray(r)) ||
      (e && r && 'number' == typeof r.length)
    ) {
      t && (r = t);
      var _n5 = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n5 >= r.length
            ? {
                done: !0,
              }
            : {
                done: !1,
                value: r[_n5++],
              };
        },
        e: function e(r) {
          throw r;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return (a = r.done), r;
    },
    e: function e(r) {
      (u = !0), (o = r);
    },
    f: function f() {
      try {
        a || null == t['return'] || t['return']();
      } finally {
        if (u) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          ? _arrayLikeToArray(r, a)
          : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _typeof(o) {
  '@babel/helpers - typeof';

  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _asyncIterator(r) {
  var n,
    t,
    o,
    e = 2;
  for ('undefined' != typeof Symbol && ((t = Symbol.asyncIterator), (o = Symbol.iterator)); e--; ) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    (t = '@@asyncIterator'), (o = '@@iterator');
  }
  throw new TypeError('Object is not async iterable');
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + ' is not an object.'));
    var n = r.done;
    return Promise.resolve(r.value).then(function (r) {
      return {
        value: r,
        done: n,
      };
    });
  }
  return (
    (AsyncFromSyncIterator = function AsyncFromSyncIterator(r) {
      (this.s = r), (this.n = r.next);
    }),
    (AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: function next() {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      },
      return: function _return(r) {
        var n = this.s['return'];
        return void 0 === n
          ? Promise.resolve({
              value: r,
              done: !0,
            })
          : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      },
      throw: function _throw(r) {
        var n = this.s['return'];
        return void 0 === n
          ? Promise.reject(r)
          : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      },
    }),
    new AsyncFromSyncIterator(r)
  );
}
/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function () {
  try {
    var e =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = '9dcd5ffe-a927-5a0b-8a97-16950e7b65f9'));
  } catch (e) {}
})();
var _fe = function fe(e, t) {
  return (
    (_fe =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (r, i) {
          r.__proto__ = i;
        }) ||
      function (r, i) {
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n]);
      }),
    _fe(e, t)
  );
};
function __extends(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  _fe(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var _assign = (exports.__assign = function __assign() {
  return (
    (exports.__assign = _assign =
      Object.assign ||
      function (t) {
        for (var r, i = 1, n = arguments.length; i < n; i++) {
          r = arguments[i];
          for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        }
        return t;
      }),
    _assign.apply(this, arguments)
  );
});
function __rest(e, t) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
        (r[i[n]] = e[i[n]]);
  return r;
}
function __decorate(e, t, r, i) {
  var n = arguments.length,
    s = n < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, r)) : i,
    o;
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.decorate == 'function'
  )
    s = Reflect.decorate(e, t, r, i);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
}
function __param(e, t) {
  return function (r, i) {
    t(r, i, e);
  };
}
function __esDecorate(e, t, r, i, n, s) {
  function o(R) {
    if (R !== void 0 && typeof R != 'function') throw new TypeError('Function expected');
    return R;
  }
  for (
    var a = i.kind,
      l = a === 'getter' ? 'get' : a === 'setter' ? 'set' : 'value',
      c = !t && e ? (i['static'] ? e : e.prototype) : null,
      u = t || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}),
      f,
      d = !1,
      w = r.length - 1;
    w >= 0;
    w--
  ) {
    var C = {};
    for (var S in i) C[S] = S === 'access' ? {} : i[S];
    for (var S in i.access) C.access[S] = i.access[S];
    C.addInitializer = function (R) {
      if (d) throw new TypeError('Cannot add initializers after decoration has completed');
      s.push(o(R || null));
    };
    var _ = (0, r[w])(
      a === 'accessor'
        ? {
            get: u.get,
            set: u.set,
          }
        : u[l],
      C,
    );
    if (a === 'accessor') {
      if (_ === void 0) continue;
      if (_ === null || _typeof(_) != 'object') throw new TypeError('Object expected');
      (f = o(_.get)) && (u.get = f), (f = o(_.set)) && (u.set = f), (f = o(_.init)) && n.unshift(f);
    } else (f = o(_)) && (a === 'field' ? n.unshift(f) : (u[l] = f));
  }
  c && Object.defineProperty(c, i.name, u), (d = !0);
}
function __runInitializers(e, t, r) {
  for (var i = arguments.length > 2, n = 0; n < t.length; n++)
    r = i ? t[n].call(e, r) : t[n].call(e);
  return i ? r : void 0;
}
function __propKey(e) {
  return _typeof(e) == 'symbol' ? e : ''.concat(e);
}
function __setFunctionName(e, t, r) {
  return (
    _typeof(t) == 'symbol' && (t = t.description ? '['.concat(t.description, ']') : ''),
    Object.defineProperty(e, 'name', {
      configurable: !0,
      value: r ? ''.concat(r, ' ', t) : t,
    })
  );
}
function __metadata(e, t) {
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.metadata == 'function'
  )
    return Reflect.metadata(e, t);
}
function __awaiter(e, t, r, i) {
  function n(s) {
    return s instanceof r
      ? s
      : new r(function (o) {
          o(s);
        });
  }
  return new (r || (r = Promise))(function (s, o) {
    function a(u) {
      try {
        c(i.next(u));
      } catch (f) {
        o(f);
      }
    }
    function l(u) {
      try {
        c(i['throw'](u));
      } catch (f) {
        o(f);
      }
    }
    function c(u) {
      u.done ? s(u.value) : n(u.value).then(a, l);
    }
    c((i = i.apply(e, t || [])).next());
  });
}
function __generator(e, t) {
  var r = {
      label: 0,
      sent: function sent() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    i,
    n,
    s,
    o;
  return (
    (o = {
      next: a(0),
      throw: a(1),
      return: a(2),
    }),
    typeof Symbol == 'function' &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(c) {
    return function (u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (i) throw new TypeError('Generator is already executing.');
    for (; o && ((o = 0), c[0] && (r = 0)), r; )
      try {
        if (
          ((i = 1),
          n &&
            (s =
              c[0] & 2
                ? n['return']
                : c[0]
                  ? n['throw'] || ((s = n['return']) && s.call(n), 0)
                  : n.next) &&
            !(s = s.call(n, c[1])).done)
        )
          return s;
        switch (((n = 0), s && (c = [c[0] & 2, s.value]), c[0])) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return (
              r.label++,
              {
                value: c[1],
                done: !1,
              }
            );
          case 5:
            r.label++, (n = c[1]), (c = [0]);
            continue;
          case 7:
            (c = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((s = r.trys), !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!s || (c[1] > s[0] && c[1] < s[3]))) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < s[1]) {
              (r.label = s[1]), (s = c);
              break;
            }
            if (s && r.label < s[2]) {
              (r.label = s[2]), r.ops.push(c);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (u) {
        (c = [6, u]), (n = 0);
      } finally {
        i = s = 0;
      }
    if (c[0] & 5) throw c[1];
    return {
      value: c[0] ? c[1] : void 0,
      done: !0,
    };
  }
}
var __createBinding = (exports.__createBinding = Object.create
  ? function (e, t, r, i) {
      i === void 0 && (i = r);
      var n = Object.getOwnPropertyDescriptor(t, r);
      (!n || ('get' in n ? !t.__esModule : n.writable || n.configurable)) &&
        (n = {
          enumerable: !0,
          get: function get() {
            return t[r];
          },
        }),
        Object.defineProperty(e, i, n);
    }
  : function (e, t, r, i) {
      i === void 0 && (i = r), (e[i] = t[r]);
    });
function __exportStar(e, t) {
  for (var r in e)
    r !== 'default' && !Object.prototype.hasOwnProperty.call(t, r) && __createBinding(t, e, r);
}
function __values(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    r = t && e[t],
    i = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function next() {
        return (
          e && i >= e.length && (e = void 0),
          {
            value: e && e[i++],
            done: !e,
          }
        );
      },
    };
  throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function __read(e, t) {
  var r = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!r) return e;
  var i = r.call(e),
    n,
    s = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = i.next()).done; ) s.push(n.value);
  } catch (a) {
    o = {
      error: a,
    };
  } finally {
    try {
      n && !n.done && (r = i['return']) && r.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function __spread() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
  return e;
}
function __spreadArrays() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var i = Array(e), n = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
  return i;
}
function __spreadArray(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = t.length, s; i < n; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), (s[i] = t[i]));
  return e.concat(s || Array.prototype.slice.call(t));
}
function __await(e) {
  return this instanceof __await ? ((this.v = e), this) : new __await(e);
}
function __asyncGenerator(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var i = r.apply(e, t || []),
    n,
    s = [];
  return (
    (n = {}),
    a('next'),
    a('throw'),
    a('return', o),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function o(w) {
    return function (C) {
      return Promise.resolve(C).then(w, f);
    };
  }
  function a(w, C) {
    i[w] &&
      ((n[w] = function (S) {
        return new Promise(function (_, R) {
          s.push([w, S, _, R]) > 1 || l(w, S);
        });
      }),
      C && (n[w] = C(n[w])));
  }
  function l(w, C) {
    try {
      c(i[w](C));
    } catch (S) {
      d(s[0][3], S);
    }
  }
  function c(w) {
    w.value instanceof __await ? Promise.resolve(w.value.v).then(u, f) : d(s[0][2], w);
  }
  function u(w) {
    l('next', w);
  }
  function f(w) {
    l('throw', w);
  }
  function d(w, C) {
    w(C), s.shift(), s.length && l(s[0][0], s[0][1]);
  }
}
function __asyncDelegator(e) {
  var t, r;
  return (
    (t = {}),
    i('next'),
    i('throw', function (n) {
      throw n;
    }),
    i('return'),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function i(n, s) {
    t[n] = e[n]
      ? function (o) {
          return (r = !r)
            ? {
                value: __await(e[n](o)),
                done: !1,
              }
            : s
              ? s(o)
              : o;
        }
      : s;
  }
}
function __asyncValues(e) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof __values == 'function' ? __values(e) : e[Symbol.iterator]()),
      (r = {}),
      i('next'),
      i('throw'),
      i('return'),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function i(s) {
    r[s] =
      e[s] &&
      function (o) {
        return new Promise(function (a, l) {
          (o = e[s](o)), n(a, l, o.done, o.value);
        });
      };
  }
  function n(s, o, a, l) {
    Promise.resolve(l).then(function (c) {
      s({
        value: c,
        done: a,
      });
    }, o);
  }
}
function __makeTemplateObject(e, t) {
  return (
    Object.defineProperty
      ? Object.defineProperty(e, 'raw', {
          value: t,
        })
      : (e.raw = t),
    e
  );
}
var n2 = Object.create
  ? function (e, t) {
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        value: t,
      });
    }
  : function (e, t) {
      e['default'] = t;
    };
function __importStar(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== 'default' && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
  return n2(t, e), t;
}
function __importDefault(e) {
  return e && e.__esModule
    ? e
    : {
        default: e,
      };
}
function __classPrivateFieldGet(e, t, r, i) {
  if (r === 'a' && !i) throw new TypeError('Private accessor was defined without a getter');
  if (typeof t == 'function' ? e !== t || !i : !t.has(e))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return r === 'm' ? i : r === 'a' ? i.call(e) : i ? i.value : t.get(e);
}
function __classPrivateFieldSet(e, t, r, i, n) {
  if (i === 'm') throw new TypeError('Private method is not writable');
  if (i === 'a' && !n) throw new TypeError('Private accessor was defined without a setter');
  if (typeof t == 'function' ? e !== t || !n : !t.has(e))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return i === 'a' ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
}
function __classPrivateFieldIn(e, t) {
  if (t === null || (_typeof(t) != 'object' && typeof t != 'function'))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == 'function' ? t === e : e.has(t);
}
function __addDisposableResource(e, t, r) {
  if (t != null) {
    if (_typeof(t) != 'object' && typeof t != 'function') throw new TypeError('Object expected.');
    var i, n;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
      i = t[Symbol.asyncDispose];
    }
    if (i === void 0) {
      if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
      (i = t[Symbol.dispose]), r && (n = i);
    }
    if (typeof i != 'function') throw new TypeError('Object not disposable.');
    n &&
      (i = function i() {
        try {
          n.call(this);
        } catch (s) {
          return Promise.reject(s);
        }
      }),
      e.stack.push({
        value: t,
        dispose: i,
        async: r,
      });
  } else
    r &&
      e.stack.push({
        async: !0,
      });
  return t;
}
var s2 =
  typeof SuppressedError == 'function'
    ? SuppressedError
    : function (e, t, r) {
        var i = new Error(r);
        return (i.name = 'SuppressedError'), (i.error = e), (i.suppressed = t), i;
      };
function __disposeResources(e) {
  function t(i) {
    (e.error = e.hasError ? new s2(i, e.error, 'An error was suppressed during disposal.') : i),
      (e.hasError = !0);
  }
  function r() {
    for (; e.stack.length; ) {
      var i = e.stack.pop();
      try {
        var n = i.dispose && i.dispose.call(i.value);
        if (i.async)
          return Promise.resolve(n).then(r, function (s) {
            return t(s), r();
          });
      } catch (s) {
        t(s);
      }
    }
    if (e.hasError) throw e.error;
  }
  return r();
}
var _default = (exports['default'] = {
  __extends: __extends,
  __assign: _assign,
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __createBinding: __createBinding,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __spreadArrays: __spreadArrays,
  __spreadArray: __spreadArray,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault,
  __classPrivateFieldGet: __classPrivateFieldGet,
  __classPrivateFieldSet: __classPrivateFieldSet,
  __classPrivateFieldIn: __classPrivateFieldIn,
  __addDisposableResource: __addDisposableResource,
  __disposeResources: __disposeResources,
});
var Ne;
function o2(e, t) {
  var r = Object.create(null);
  var _iterator6 = _createForOfIteratorHelper(e),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      var i = _step6.value;
      var n = t(i);
      var s = r[n];
      s || (s = r[n] = []), s.push(i);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return r;
}
var T0 =
    ((Ne = Symbol.toStringTag),
    /*#__PURE__*/ (function () {
      function T0(e, t) {
        _classCallCheck(this, T0);
        (this.b = t), (this.a = new Map()), (this[Ne] = 'SetWithKey');
        var _iterator7 = _createForOfIteratorHelper(e),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var r = _step7.value;
            this.add(r);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
      return _createClass(T0, [
        {
          key: 'size',
          get: function get() {
            return this.a.size;
          },
        },
        {
          key: 'add',
          value: function add(e) {
            var t = this.b(e);
            return this.a.set(t, e), this;
          },
        },
        {
          key: 'delete',
          value: function _delete(e) {
            return this.a['delete'](this.b(e));
          },
        },
        {
          key: 'has',
          value: function has(e) {
            return this.a.has(this.b(e));
          },
        },
        {
          key: 'entries',
          value: /*#__PURE__*/ _regeneratorRuntime().mark(function entries() {
            var _iterator8, _step8, e;
            return _regeneratorRuntime().wrap(
              function entries$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _iterator8 = _createForOfIteratorHelper(this.a.values());
                      _context.prev = 1;
                      _iterator8.s();
                    case 3:
                      if ((_step8 = _iterator8.n()).done) {
                        _context.next = 9;
                        break;
                      }
                      e = _step8.value;
                      _context.next = 7;
                      return [e, e];
                    case 7:
                      _context.next = 3;
                      break;
                    case 9:
                      _context.next = 14;
                      break;
                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context['catch'](1);
                      _iterator8.e(_context.t0);
                    case 14:
                      _context.prev = 14;
                      _iterator8.f();
                      return _context.finish(14);
                    case 17:
                    case 'end':
                      return _context.stop();
                  }
              },
              entries,
              this,
              [[1, 11, 14, 17]],
            );
          }),
        },
        {
          key: 'keys',
          value: function keys() {
            return this.values();
          },
        },
        {
          key: 'values',
          value: /*#__PURE__*/ _regeneratorRuntime().mark(function values() {
            var _iterator9, _step9, e;
            return _regeneratorRuntime().wrap(
              function values$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _iterator9 = _createForOfIteratorHelper(this.a.values());
                      _context2.prev = 1;
                      _iterator9.s();
                    case 3:
                      if ((_step9 = _iterator9.n()).done) {
                        _context2.next = 9;
                        break;
                      }
                      e = _step9.value;
                      _context2.next = 7;
                      return e;
                    case 7:
                      _context2.next = 3;
                      break;
                    case 9:
                      _context2.next = 14;
                      break;
                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2['catch'](1);
                      _iterator9.e(_context2.t0);
                    case 14:
                      _context2.prev = 14;
                      _iterator9.f();
                      return _context2.finish(14);
                    case 17:
                    case 'end':
                      return _context2.stop();
                  }
              },
              values,
              this,
              [[1, 11, 14, 17]],
            );
          }),
        },
        {
          key: 'clear',
          value: function clear() {
            this.a.clear();
          },
        },
        {
          key: 'forEach',
          value: function forEach(e, t) {
            var _this = this;
            this.a.forEach(function (r) {
              return e.call(t, r, r, _this);
            });
          },
        },
        {
          key: Symbol.iterator,
          value: function value() {
            return this.values();
          },
        },
      ]);
    })()),
  a2 = /*#__PURE__*/ (function () {
    function a2() {
      _classCallCheck(this, a2);
      (this.b = []),
        (this.a = function (e) {
          setTimeout(function () {
            throw e.stack
              ? _1.isErrorNoTelemetry(e)
                ? new _1(e.message + '\n\n' + e.stack)
                : new Error(e.message + '\n\n' + e.stack)
              : e;
          }, 0);
        });
    }
    return _createClass(a2, [
      {
        key: 'addListener',
        value: function addListener(e) {
          var _this2 = this;
          return (
            this.b.push(e),
            function () {
              _this2.d(e);
            }
          );
        },
      },
      {
        key: 'c',
        value: function c(e) {
          this.b.forEach(function (t) {
            t(e);
          });
        },
      },
      {
        key: 'd',
        value: function d(e) {
          this.b.splice(this.b.indexOf(e), 1);
        },
      },
      {
        key: 'setUnexpectedErrorHandler',
        value: function setUnexpectedErrorHandler(e) {
          this.a = e;
        },
      },
      {
        key: 'getUnexpectedErrorHandler',
        value: function getUnexpectedErrorHandler() {
          return this.a;
        },
      },
      {
        key: 'onUnexpectedError',
        value: function onUnexpectedError(e) {
          this.a(e), this.c(e);
        },
      },
      {
        key: 'onUnexpectedExternalError',
        value: function onUnexpectedExternalError(e) {
          this.a(e);
        },
      },
    ]);
  })(),
  c2 = new a2();
function F1(e) {
  l2(e) || c2.onUnexpectedError(e);
}
var ue = 'Canceled';
function l2(e) {
  return e instanceof i1 ? !0 : e instanceof Error && e.name === ue && e.message === ue;
}
var i1 = /*#__PURE__*/ (function (_Error) {
    function i1() {
      var _this3;
      _classCallCheck(this, i1);
      (_this3 = _callSuper(this, i1, [ue])), (_this3.name = _this3.message);
      return _this3;
    }
    _inherits(i1, _Error);
    return _createClass(i1);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  _1 = /*#__PURE__*/ (function (_Error2) {
    function Ie(t) {
      var _this4;
      _classCallCheck(this, Ie);
      (_this4 = _callSuper(this, Ie, [t])), (_this4.name = 'CodeExpectedError');
      return _this4;
    }
    _inherits(Ie, _Error2);
    return _createClass(Ie, null, [
      {
        key: 'fromError',
        value: function fromError(t) {
          if (t instanceof Ie) return t;
          var r = new Ie();
          return (r.message = t.message), (r.stack = t.stack), r;
        },
      },
      {
        key: 'isErrorNoTelemetry',
        value: function isErrorNoTelemetry(t) {
          return t.name === 'CodeExpectedError';
        },
      },
    ]);
  })(/*#__PURE__*/ _wrapNativeSuper(Error));
function Re(e, t) {
  var r = this;
  var i = !1,
    n;
  return function () {
    if (i) return n;
    if (((i = !0), t))
      try {
        n = e.apply(r, arguments);
      } finally {
        t();
      }
    else n = e.apply(r, arguments);
    return n;
  };
}
function f2(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var n = r,
    s = i;
  for (; n < s; ) {
    var o = Math.floor((n + s) / 2);
    t(e[o]) ? (n = o + 1) : (s = o);
  }
  return n - 1;
}
var U0 =
    ((_Ht = /*#__PURE__*/ (function () {
      function Ht(t) {
        _classCallCheck(this, Ht);
        (this.e = t), (this.c = 0);
      }
      return _createClass(Ht, [
        {
          key: 'findLastMonotonous',
          value: function findLastMonotonous(t) {
            if (Ht.assertInvariants) {
              if (this.d) {
                var _iterator0 = _createForOfIteratorHelper(this.e),
                  _step0;
                try {
                  for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
                    var i = _step0.value;
                    if (this.d(i) && !t(i))
                      throw new Error(
                        'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.',
                      );
                  }
                } catch (err) {
                  _iterator0.e(err);
                } finally {
                  _iterator0.f();
                }
              }
              this.d = t;
            }
            var r = f2(this.e, t, this.c);
            return (this.c = r + 1), r === -1 ? void 0 : this.e[r];
          },
        },
      ]);
    })()),
    (_Ht.assertInvariants = !1),
    _Ht),
  he;
(function (e) {
  function t(s) {
    return s < 0;
  }
  e.isLessThan = t;
  function r(s) {
    return s <= 0;
  }
  e.isLessThanOrEqual = r;
  function i(s) {
    return s > 0;
  }
  e.isGreaterThan = i;
  function n(s) {
    return s === 0;
  }
  (e.isNeitherLessOrGreaterThan = n),
    (e.greaterThan = 1),
    (e.lessThan = -1),
    (e.neitherLessOrGreaterThan = 0);
})(he || (he = {}));
function u2(e, t) {
  return function (r, i) {
    return t(e(r), e(i));
  };
}
var h2 = function h2(e, t) {
    return e - t;
  },
  z0 =
    ((_se = /*#__PURE__*/ (function () {
      function se(t) {
        _classCallCheck(this, se);
        this.iterate = t;
      }
      return _createClass(se, [
        {
          key: 'forEach',
          value: function forEach(t) {
            this.iterate(function (r) {
              return t(r), !0;
            });
          },
        },
        {
          key: 'toArray',
          value: function toArray() {
            var t = [];
            return (
              this.iterate(function (r) {
                return t.push(r), !0;
              }),
              t
            );
          },
        },
        {
          key: 'filter',
          value: function filter(t) {
            var _this5 = this;
            return new se(function (r) {
              return _this5.iterate(function (i) {
                return t(i) ? r(i) : !0;
              });
            });
          },
        },
        {
          key: 'map',
          value: function map(t) {
            var _this6 = this;
            return new se(function (r) {
              return _this6.iterate(function (i) {
                return r(t(i));
              });
            });
          },
        },
        {
          key: 'some',
          value: function some(t) {
            var r = !1;
            return (
              this.iterate(function (i) {
                return (r = t(i)), !r;
              }),
              r
            );
          },
        },
        {
          key: 'findFirst',
          value: function findFirst(t) {
            var r;
            return (
              this.iterate(function (i) {
                return t(i) ? ((r = i), !1) : !0;
              }),
              r
            );
          },
        },
        {
          key: 'findLast',
          value: function findLast(t) {
            var r;
            return (
              this.iterate(function (i) {
                return t(i) && (r = i), !0;
              }),
              r
            );
          },
        },
        {
          key: 'findLastMaxBy',
          value: function findLastMaxBy(t) {
            var r,
              i = !0;
            return (
              this.iterate(function (n) {
                return (i || he.isGreaterThan(t(n, r))) && ((i = !1), (r = n)), !0;
              }),
              r
            );
          },
        },
      ]);
    })()),
    (_se.empty = new _se(function (t) {})),
    _se),
  Te,
  Ue,
  ze,
  d2 = /*#__PURE__*/ _createClass(function d2(e, t) {
    _classCallCheck(this, d2);
    (this.uri = e), (this.value = t);
  });
function g2(e) {
  return Array.isArray(e);
}
var Fe =
    ((_ref = ((Te = Symbol.toStringTag), Symbol.iterator)),
    (_j = /*#__PURE__*/ (function () {
      function j1(t, r) {
        _classCallCheck(this, j1);
        if (((this[Te] = 'ResourceMap'), t instanceof j1))
          (this.d = new Map(t.d)), (this.e = r !== null && r !== void 0 ? r : j1.c);
        else if (g2(t)) {
          (this.d = new Map()), (this.e = r !== null && r !== void 0 ? r : j1.c);
          var _iterator1 = _createForOfIteratorHelper(t),
            _step1;
          try {
            for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
              var _step1$value = _slicedToArray(_step1.value, 2),
                i = _step1$value[0],
                n = _step1$value[1];
              this.set(i, n);
            }
          } catch (err) {
            _iterator1.e(err);
          } finally {
            _iterator1.f();
          }
        } else (this.d = new Map()), (this.e = t !== null && t !== void 0 ? t : j1.c);
      }
      return _createClass(j1, [
        {
          key: 'set',
          value: function set(t, r) {
            return this.d.set(this.e(t), new d2(t, r)), this;
          },
        },
        {
          key: 'get',
          value: function get(t) {
            var _this$d$get;
            return (_this$d$get = this.d.get(this.e(t))) === null || _this$d$get === void 0
              ? void 0
              : _this$d$get.value;
          },
        },
        {
          key: 'has',
          value: function has(t) {
            return this.d.has(this.e(t));
          },
        },
        {
          key: 'size',
          get: function get() {
            return this.d.size;
          },
        },
        {
          key: 'clear',
          value: function clear() {
            this.d.clear();
          },
        },
        {
          key: 'delete',
          value: function _delete(t) {
            return this.d['delete'](this.e(t));
          },
        },
        {
          key: 'forEach',
          value: function forEach(t, r) {
            _typeof(r) < 'u' && (t = t.bind(r));
            var _iterator10 = _createForOfIteratorHelper(this.d),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                var _step10$value = _slicedToArray(_step10.value, 2),
                  i = _step10$value[0],
                  n = _step10$value[1];
                t(n.value, n.uri, this);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          },
        },
        {
          key: 'values',
          value: /*#__PURE__*/ _regeneratorRuntime().mark(function values() {
            var _iterator11, _step11, t;
            return _regeneratorRuntime().wrap(
              function values$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _iterator11 = _createForOfIteratorHelper(this.d.values());
                      _context3.prev = 1;
                      _iterator11.s();
                    case 3:
                      if ((_step11 = _iterator11.n()).done) {
                        _context3.next = 9;
                        break;
                      }
                      t = _step11.value;
                      _context3.next = 7;
                      return t.value;
                    case 7:
                      _context3.next = 3;
                      break;
                    case 9:
                      _context3.next = 14;
                      break;
                    case 11:
                      _context3.prev = 11;
                      _context3.t0 = _context3['catch'](1);
                      _iterator11.e(_context3.t0);
                    case 14:
                      _context3.prev = 14;
                      _iterator11.f();
                      return _context3.finish(14);
                    case 17:
                    case 'end':
                      return _context3.stop();
                  }
              },
              values,
              this,
              [[1, 11, 14, 17]],
            );
          }),
        },
        {
          key: 'keys',
          value: /*#__PURE__*/ _regeneratorRuntime().mark(function keys() {
            var _iterator12, _step12, t;
            return _regeneratorRuntime().wrap(
              function keys$(_context4) {
                while (1)
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      _iterator12 = _createForOfIteratorHelper(this.d.values());
                      _context4.prev = 1;
                      _iterator12.s();
                    case 3:
                      if ((_step12 = _iterator12.n()).done) {
                        _context4.next = 9;
                        break;
                      }
                      t = _step12.value;
                      _context4.next = 7;
                      return t.uri;
                    case 7:
                      _context4.next = 3;
                      break;
                    case 9:
                      _context4.next = 14;
                      break;
                    case 11:
                      _context4.prev = 11;
                      _context4.t0 = _context4['catch'](1);
                      _iterator12.e(_context4.t0);
                    case 14:
                      _context4.prev = 14;
                      _iterator12.f();
                      return _context4.finish(14);
                    case 17:
                    case 'end':
                      return _context4.stop();
                  }
              },
              keys,
              this,
              [[1, 11, 14, 17]],
            );
          }),
        },
        {
          key: 'entries',
          value: /*#__PURE__*/ _regeneratorRuntime().mark(function entries() {
            var _iterator13, _step13, t;
            return _regeneratorRuntime().wrap(
              function entries$(_context5) {
                while (1)
                  switch ((_context5.prev = _context5.next)) {
                    case 0:
                      _iterator13 = _createForOfIteratorHelper(this.d.values());
                      _context5.prev = 1;
                      _iterator13.s();
                    case 3:
                      if ((_step13 = _iterator13.n()).done) {
                        _context5.next = 9;
                        break;
                      }
                      t = _step13.value;
                      _context5.next = 7;
                      return [t.uri, t.value];
                    case 7:
                      _context5.next = 3;
                      break;
                    case 9:
                      _context5.next = 14;
                      break;
                    case 11:
                      _context5.prev = 11;
                      _context5.t0 = _context5['catch'](1);
                      _iterator13.e(_context5.t0);
                    case 14:
                      _context5.prev = 14;
                      _iterator13.f();
                      return _context5.finish(14);
                    case 17:
                    case 'end':
                      return _context5.stop();
                  }
              },
              entries,
              this,
              [[1, 11, 14, 17]],
            );
          }),
        },
        {
          key: _ref,
          value: /*#__PURE__*/ _regeneratorRuntime().mark(function value() {
            var _iterator14, _step14, _step14$value, t;
            return _regeneratorRuntime().wrap(
              function value$(_context6) {
                while (1)
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      _iterator14 = _createForOfIteratorHelper(this.d);
                      _context6.prev = 1;
                      _iterator14.s();
                    case 3:
                      if ((_step14 = _iterator14.n()).done) {
                        _context6.next = 9;
                        break;
                      }
                      (_step14$value = _slicedToArray(_step14.value, 2)), (t = _step14$value[1]);
                      _context6.next = 7;
                      return [t.uri, t.value];
                    case 7:
                      _context6.next = 3;
                      break;
                    case 9:
                      _context6.next = 14;
                      break;
                    case 11:
                      _context6.prev = 11;
                      _context6.t0 = _context6['catch'](1);
                      _iterator14.e(_context6.t0);
                    case 14:
                      _context6.prev = 14;
                      _iterator14.f();
                      return _context6.finish(14);
                    case 17:
                    case 'end':
                      return _context6.stop();
                  }
              },
              value,
              this,
              [[1, 11, 14, 17]],
            );
          }),
        },
      ]);
    })()),
    (_j.c = function (t) {
      return t.toString();
    }),
    _j),
  F0 = /*#__PURE__*/ (function (_ref2) {
    function F0(e, t) {
      _classCallCheck(this, F0);
      (this[Ue] = 'ResourceSet'),
        !e || typeof e == 'function'
          ? (this.c = new Fe(e))
          : ((this.c = new Fe(t)), e.forEach(this.add, this));
    }
    return _createClass(F0, [
      {
        key: 'size',
        get: function get() {
          return this.c.size;
        },
      },
      {
        key: 'add',
        value: function add(e) {
          return this.c.set(e, e), this;
        },
      },
      {
        key: 'clear',
        value: function clear() {
          this.c.clear();
        },
      },
      {
        key: 'delete',
        value: function _delete(e) {
          return this.c['delete'](e);
        },
      },
      {
        key: 'forEach',
        value: function forEach(e, t) {
          var _this7 = this;
          this.c.forEach(function (r, i) {
            return e.call(t, i, i, _this7);
          });
        },
      },
      {
        key: 'has',
        value: function has(e) {
          return this.c.has(e);
        },
      },
      {
        key: 'entries',
        value: function entries() {
          return this.c.entries();
        },
      },
      {
        key: 'keys',
        value: function keys() {
          return this.c.keys();
        },
      },
      {
        key: 'values',
        value: function values() {
          return this.c.keys();
        },
      },
      {
        key: _ref2,
        value: function value() {
          return this.keys();
        },
      },
    ]);
  })(((Ue = Symbol.toStringTag), Symbol.iterator)),
  qe;
(function (e) {
  (e[(e.None = 0)] = 'None'), (e[(e.AsOld = 1)] = 'AsOld'), (e[(e.AsNew = 2)] = 'AsNew');
})(qe || (qe = {}));
var v2 = /*#__PURE__*/ (function (_ref3) {
    function v2() {
      _classCallCheck(this, v2);
      (this[ze] = 'LinkedMap'),
        (this.c = new Map()),
        (this.d = void 0),
        (this.e = void 0),
        (this.f = 0),
        (this.g = 0);
    }
    return _createClass(v2, [
      {
        key: 'clear',
        value: function clear() {
          this.c.clear(), (this.d = void 0), (this.e = void 0), (this.f = 0), this.g++;
        },
      },
      {
        key: 'isEmpty',
        value: function isEmpty() {
          return !this.d && !this.e;
        },
      },
      {
        key: 'size',
        get: function get() {
          return this.f;
        },
      },
      {
        key: 'first',
        get: function get() {
          var _this$d;
          return (_this$d = this.d) === null || _this$d === void 0 ? void 0 : _this$d.value;
        },
      },
      {
        key: 'last',
        get: function get() {
          var _this$e;
          return (_this$e = this.e) === null || _this$e === void 0 ? void 0 : _this$e.value;
        },
      },
      {
        key: 'has',
        value: function has(e) {
          return this.c.has(e);
        },
      },
      {
        key: 'get',
        value: function get(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = this.c.get(e);
          if (r) return t !== 0 && this.m(r, t), r.value;
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var i = this.c.get(e);
          if (i) (i.value = t), r !== 0 && this.m(i, r);
          else {
            switch (
              ((i = {
                key: e,
                value: t,
                next: void 0,
                previous: void 0,
              }),
              r)
            ) {
              case 0:
                this.k(i);
                break;
              case 1:
                this.j(i);
                break;
              case 2:
                this.k(i);
                break;
              default:
                this.k(i);
                break;
            }
            this.c.set(e, i), this.f++;
          }
          return this;
        },
      },
      {
        key: 'delete',
        value: function _delete(e) {
          return !!this.remove(e);
        },
      },
      {
        key: 'remove',
        value: function remove(e) {
          var t = this.c.get(e);
          if (t) return this.c['delete'](e), this.l(t), this.f--, t.value;
        },
      },
      {
        key: 'shift',
        value: function shift() {
          if (!this.d && !this.e) return;
          if (!this.d || !this.e) throw new Error('Invalid list');
          var e = this.d;
          return this.c['delete'](e.key), this.l(e), this.f--, e.value;
        },
      },
      {
        key: 'forEach',
        value: function forEach(e, t) {
          var r = this.g;
          var i = this.d;
          for (; i; ) {
            if ((t ? e.bind(t)(i.value, i.key, this) : e(i.value, i.key, this), this.g !== r))
              throw new Error('LinkedMap got modified during iteration.');
            i = i.next;
          }
        },
      },
      {
        key: 'keys',
        value: function keys() {
          var e = this,
            t = this.g;
          var r = this.d;
          var i = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return i;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (r) {
                var n = {
                  value: r.key,
                  done: !1,
                };
                return (r = r.next), n;
              } else
                return {
                  value: void 0,
                  done: !0,
                };
            },
          );
          return i;
        },
      },
      {
        key: 'values',
        value: function values() {
          var e = this,
            t = this.g;
          var r = this.d;
          var i = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return i;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (r) {
                var n = {
                  value: r.value,
                  done: !1,
                };
                return (r = r.next), n;
              } else
                return {
                  value: void 0,
                  done: !0,
                };
            },
          );
          return i;
        },
      },
      {
        key: 'entries',
        value: function entries() {
          var e = this,
            t = this.g;
          var r = this.d;
          var i = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return i;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (r) {
                var n = {
                  value: [r.key, r.value],
                  done: !1,
                };
                return (r = r.next), n;
              } else
                return {
                  value: void 0,
                  done: !0,
                };
            },
          );
          return i;
        },
      },
      {
        key: _ref3,
        value: function value() {
          return this.entries();
        },
      },
      {
        key: 'h',
        value: function h(e) {
          if (e >= this.size) return;
          if (e === 0) {
            this.clear();
            return;
          }
          var t = this.d,
            r = this.size;
          for (; t && r > e; ) this.c['delete'](t.key), (t = t.next), r--;
          (this.d = t), (this.f = r), t && (t.previous = void 0), this.g++;
        },
      },
      {
        key: 'i',
        value: function i(e) {
          if (e >= this.size) return;
          if (e === 0) {
            this.clear();
            return;
          }
          var t = this.e,
            r = this.size;
          for (; t && r > e; ) this.c['delete'](t.key), (t = t.previous), r--;
          (this.e = t), (this.f = r), t && (t.next = void 0), this.g++;
        },
      },
      {
        key: 'j',
        value: function j(e) {
          if (!this.d && !this.e) this.e = e;
          else if (this.d) (e.next = this.d), (this.d.previous = e);
          else throw new Error('Invalid list');
          (this.d = e), this.g++;
        },
      },
      {
        key: 'k',
        value: function k(e) {
          if (!this.d && !this.e) this.d = e;
          else if (this.e) (e.previous = this.e), (this.e.next = e);
          else throw new Error('Invalid list');
          (this.e = e), this.g++;
        },
      },
      {
        key: 'l',
        value: function l(e) {
          if (e === this.d && e === this.e) (this.d = void 0), (this.e = void 0);
          else if (e === this.d) {
            if (!e.next) throw new Error('Invalid list');
            (e.next.previous = void 0), (this.d = e.next);
          } else if (e === this.e) {
            if (!e.previous) throw new Error('Invalid list');
            (e.previous.next = void 0), (this.e = e.previous);
          } else {
            var t = e.next,
              r = e.previous;
            if (!t || !r) throw new Error('Invalid list');
            (t.previous = r), (r.next = t);
          }
          (e.next = void 0), (e.previous = void 0), this.g++;
        },
      },
      {
        key: 'm',
        value: function m(e, t) {
          if (!this.d || !this.e) throw new Error('Invalid list');
          if (!(t !== 1 && t !== 2)) {
            if (t === 1) {
              if (e === this.d) return;
              var r = e.next,
                i = e.previous;
              e === this.e ? ((i.next = void 0), (this.e = i)) : ((r.previous = i), (i.next = r)),
                (e.previous = void 0),
                (e.next = this.d),
                (this.d.previous = e),
                (this.d = e),
                this.g++;
            } else if (t === 2) {
              if (e === this.e) return;
              var _r2 = e.next,
                _i4 = e.previous;
              e === this.d
                ? ((_r2.previous = void 0), (this.d = _r2))
                : ((_r2.previous = _i4), (_i4.next = _r2)),
                (e.next = void 0),
                (e.previous = this.e),
                (this.e.next = e),
                (this.e = e),
                this.g++;
            }
          }
        },
      },
      {
        key: 'toJSON',
        value: function toJSON() {
          var e = [];
          return (
            this.forEach(function (t, r) {
              e.push([r, t]);
            }),
            e
          );
        },
      },
      {
        key: 'fromJSON',
        value: function fromJSON(e) {
          this.clear();
          var _iterator15 = _createForOfIteratorHelper(e),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
              var _step15$value = _slicedToArray(_step15.value, 2),
                t = _step15$value[0],
                r = _step15$value[1];
              this.set(t, r);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        },
      },
    ]);
  })(((ze = Symbol.toStringTag), Symbol.iterator)),
  m2 = /*#__PURE__*/ (function (_v) {
    function m2(e) {
      var _this8;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _classCallCheck(this, m2);
      (_this8 = _callSuper(this, m2)), (_this8.n = e), (_this8.o = Math.min(Math.max(0, t), 1));
      return _this8;
    }
    _inherits(m2, _v);
    return _createClass(m2, [
      {
        key: 'limit',
        get: function get() {
          return this.n;
        },
        set: function set(e) {
          (this.n = e), this.p();
        },
      },
      {
        key: 'ratio',
        get: function get() {
          return this.o;
        },
        set: function set(e) {
          (this.o = Math.min(Math.max(0, e), 1)), this.p();
        },
      },
      {
        key: 'get',
        value: function get(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
          return _superPropGet(m2, 'get', this, 3)([e, t]);
        },
      },
      {
        key: 'peek',
        value: function peek(e) {
          return _superPropGet(m2, 'get', this, 3)([e, 0]);
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          return _superPropGet(m2, 'set', this, 3)([e, t, 2]), this;
        },
      },
      {
        key: 'p',
        value: function p() {
          this.size > this.n && this.q(Math.round(this.n * this.o));
        },
      },
    ]);
  })(v2),
  We = /*#__PURE__*/ (function (_m) {
    function We(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _classCallCheck(this, We);
      return _callSuper(this, We, [e, t]);
    }
    _inherits(We, _m);
    return _createClass(We, [
      {
        key: 'q',
        value: function q(e) {
          this.h(e);
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          return _superPropGet(We, 'set', this, 3)([e, t]), this.p(), this;
        },
      },
    ]);
  })(m2),
  w2 = /*#__PURE__*/ (function () {
    function w2() {
      _classCallCheck(this, w2);
      this.c = new Map();
    }
    return _createClass(w2, [
      {
        key: 'add',
        value: function add(e, t) {
          var r = this.c.get(e);
          r || ((r = new Set()), this.c.set(e, r)), r.add(t);
        },
      },
      {
        key: 'delete',
        value: function _delete(e, t) {
          var r = this.c.get(e);
          r && (r['delete'](t), r.size === 0 && this.c['delete'](e));
        },
      },
      {
        key: 'forEach',
        value: function forEach(e, t) {
          var r = this.c.get(e);
          r && r.forEach(t);
        },
      },
      {
        key: 'get',
        value: function get(e) {
          var t = this.c.get(e);
          return t || new Set();
        },
      },
    ]);
  })(),
  de;
(function (e) {
  var _marked = /*#__PURE__*/ _regeneratorRuntime().mark(n),
    _marked2 = /*#__PURE__*/ _regeneratorRuntime().mark(a),
    _marked3 = /*#__PURE__*/ _regeneratorRuntime().mark(d),
    _marked4 = /*#__PURE__*/ _regeneratorRuntime().mark(w),
    _marked5 = /*#__PURE__*/ _regeneratorRuntime().mark(C),
    _marked6 = /*#__PURE__*/ _regeneratorRuntime().mark(S);
  function t(y) {
    return y && _typeof(y) == 'object' && typeof y[Symbol.iterator] == 'function';
  }
  e.is = t;
  var r = Object.freeze([]);
  function i() {
    return r;
  }
  e.empty = i;
  function n(y) {
    return _regeneratorRuntime().wrap(function n$(_context7) {
      while (1)
        switch ((_context7.prev = _context7.next)) {
          case 0:
            _context7.next = 2;
            return y;
          case 2:
          case 'end':
            return _context7.stop();
        }
    }, _marked);
  }
  e.single = n;
  function s(y) {
    return t(y) ? y : n(y);
  }
  e.wrap = s;
  function o(y) {
    return y || r;
  }
  e.from = o;
  function a(y) {
    var E;
    return _regeneratorRuntime().wrap(function a$(_context8) {
      while (1)
        switch ((_context8.prev = _context8.next)) {
          case 0:
            E = y.length - 1;
          case 1:
            if (!(E >= 0)) {
              _context8.next = 7;
              break;
            }
            _context8.next = 4;
            return y[E];
          case 4:
            E--;
            _context8.next = 1;
            break;
          case 7:
          case 'end':
            return _context8.stop();
        }
    }, _marked2);
  }
  e.reverse = a;
  function l(y) {
    return !y || y[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = l;
  function c(y) {
    return y[Symbol.iterator]().next().value;
  }
  e.first = c;
  function u(y, E) {
    var k = 0;
    var _iterator16 = _createForOfIteratorHelper(y),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
        var z = _step16.value;
        if (E(z, k++)) return !0;
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    return !1;
  }
  e.some = u;
  function f(y, E) {
    var _iterator17 = _createForOfIteratorHelper(y),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
        var k = _step17.value;
        if (E(k)) return k;
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }
  e.find = f;
  function d(y, E) {
    var _iterator18, _step18, k;
    return _regeneratorRuntime().wrap(
      function d$(_context9) {
        while (1)
          switch ((_context9.prev = _context9.next)) {
            case 0:
              _iterator18 = _createForOfIteratorHelper(y);
              _context9.prev = 1;
              _iterator18.s();
            case 3:
              if ((_step18 = _iterator18.n()).done) {
                _context9.next = 11;
                break;
              }
              k = _step18.value;
              _context9.t0 = E(k);
              if (!_context9.t0) {
                _context9.next = 9;
                break;
              }
              _context9.next = 9;
              return k;
            case 9:
              _context9.next = 3;
              break;
            case 11:
              _context9.next = 16;
              break;
            case 13:
              _context9.prev = 13;
              _context9.t1 = _context9['catch'](1);
              _iterator18.e(_context9.t1);
            case 16:
              _context9.prev = 16;
              _iterator18.f();
              return _context9.finish(16);
            case 19:
            case 'end':
              return _context9.stop();
          }
      },
      _marked3,
      null,
      [[1, 13, 16, 19]],
    );
  }
  e.filter = d;
  function w(y, E) {
    var k, _iterator19, _step19, z;
    return _regeneratorRuntime().wrap(
      function w$(_context0) {
        while (1)
          switch ((_context0.prev = _context0.next)) {
            case 0:
              k = 0;
              _iterator19 = _createForOfIteratorHelper(y);
              _context0.prev = 2;
              _iterator19.s();
            case 4:
              if ((_step19 = _iterator19.n()).done) {
                _context0.next = 10;
                break;
              }
              z = _step19.value;
              _context0.next = 8;
              return E(z, k++);
            case 8:
              _context0.next = 4;
              break;
            case 10:
              _context0.next = 15;
              break;
            case 12:
              _context0.prev = 12;
              _context0.t0 = _context0['catch'](2);
              _iterator19.e(_context0.t0);
            case 15:
              _context0.prev = 15;
              _iterator19.f();
              return _context0.finish(15);
            case 18:
            case 'end':
              return _context0.stop();
          }
      },
      _marked4,
      null,
      [[2, 12, 15, 18]],
    );
  }
  e.map = w;
  function C(y, E) {
    var k, _iterator20, _step20, z;
    return _regeneratorRuntime().wrap(
      function C$(_context1) {
        while (1)
          switch ((_context1.prev = _context1.next)) {
            case 0:
              k = 0;
              _iterator20 = _createForOfIteratorHelper(y);
              _context1.prev = 2;
              _iterator20.s();
            case 4:
              if ((_step20 = _iterator20.n()).done) {
                _context1.next = 9;
                break;
              }
              z = _step20.value;
              return _context1.delegateYield(E(z, k++), 't0', 7);
            case 7:
              _context1.next = 4;
              break;
            case 9:
              _context1.next = 14;
              break;
            case 11:
              _context1.prev = 11;
              _context1.t1 = _context1['catch'](2);
              _iterator20.e(_context1.t1);
            case 14:
              _context1.prev = 14;
              _iterator20.f();
              return _context1.finish(14);
            case 17:
            case 'end':
              return _context1.stop();
          }
      },
      _marked5,
      null,
      [[2, 11, 14, 17]],
    );
  }
  e.flatMap = C;
  function S() {
    var _len,
      y,
      _key,
      _i5,
      _y,
      E,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function S$(_context10) {
      while (1)
        switch ((_context10.prev = _context10.next)) {
          case 0:
            for (_len = _args10.length, y = new Array(_len), _key = 0; _key < _len; _key++) {
              y[_key] = _args10[_key];
            }
            (_i5 = 0), (_y = y);
          case 2:
            if (!(_i5 < _y.length)) {
              _context10.next = 8;
              break;
            }
            E = _y[_i5];
            return _context10.delegateYield(E, 't0', 5);
          case 5:
            _i5++;
            _context10.next = 2;
            break;
          case 8:
          case 'end':
            return _context10.stop();
        }
    }, _marked6);
  }
  e.concat = S;
  function _(y, E, k) {
    var z = k;
    var _iterator21 = _createForOfIteratorHelper(y),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
        var g1 = _step21.value;
        z = E(z, g1);
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    return z;
  }
  e.reduce = _;
  function R(y, E) {
    var k = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : y.length;
    return /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context11) {
        while (1)
          switch ((_context11.prev = _context11.next)) {
            case 0:
              E < -y.length && (E = 0),
                E < 0 && (E += y.length),
                k < 0 ? (k += y.length) : k > y.length && (k = y.length);
            case 1:
              if (!(E < k)) {
                _context11.next = 7;
                break;
              }
              _context11.next = 4;
              return y[E];
            case 4:
              E++;
              _context11.next = 1;
              break;
            case 7:
            case 'end':
              return _context11.stop();
          }
      }, _callee);
    })();
  }
  e.slice = R;
  function le(y) {
    var E =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var k = [];
    if (E === 0) return [k, y];
    var z = y[Symbol.iterator]();
    for (var g1 = 0; g1 < E; g1++) {
      var T1 = z.next();
      if (T1.done) return [k, e.empty()];
      k.push(T1.value);
    }
    return [
      k,
      _defineProperty({}, Symbol.iterator, function () {
        return z;
      }),
    ];
  }
  e.consume = le;
  function d1(_x) {
    return _d.apply(this, arguments);
  }
  function _d() {
    _d = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(y) {
        var E, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, k;
        return _regeneratorRuntime().wrap(
          function _callee2$(_context12) {
            while (1)
              switch ((_context12.prev = _context12.next)) {
                case 0:
                  E = [];
                  _iteratorAbruptCompletion = false;
                  _didIteratorError = false;
                  _context12.prev = 3;
                  _iterator = _asyncIterator(y);
                case 5:
                  _context12.next = 7;
                  return _iterator.next();
                case 7:
                  if (!(_iteratorAbruptCompletion = !(_step = _context12.sent).done)) {
                    _context12.next = 13;
                    break;
                  }
                  k = _step.value;
                  E.push(k);
                case 10:
                  _iteratorAbruptCompletion = false;
                  _context12.next = 5;
                  break;
                case 13:
                  _context12.next = 19;
                  break;
                case 15:
                  _context12.prev = 15;
                  _context12.t0 = _context12['catch'](3);
                  _didIteratorError = true;
                  _iteratorError = _context12.t0;
                case 19:
                  _context12.prev = 19;
                  _context12.prev = 20;
                  if (!(_iteratorAbruptCompletion && _iterator['return'] != null)) {
                    _context12.next = 24;
                    break;
                  }
                  _context12.next = 24;
                  return _iterator['return']();
                case 24:
                  _context12.prev = 24;
                  if (!_didIteratorError) {
                    _context12.next = 27;
                    break;
                  }
                  throw _iteratorError;
                case 27:
                  return _context12.finish(24);
                case 28:
                  return _context12.finish(19);
                case 29:
                  return _context12.abrupt('return', Promise.resolve(E));
                case 30:
                case 'end':
                  return _context12.stop();
              }
          },
          _callee2,
          null,
          [
            [3, 15, 19, 29],
            [20, , 24, 28],
          ],
        );
      }),
    );
    return _d.apply(this, arguments);
  }
  e.asyncToArray = d1;
})(de || (de = {}));
var p2 = !1,
  m1 = null,
  q0 =
    ((_Kt = /*#__PURE__*/ (function () {
      function Kt() {
        _classCallCheck(this, Kt);
        this.b = new Map();
      }
      return _createClass(Kt, [
        {
          key: 'c',
          value: function c(t) {
            var r = this.b.get(t);
            return (
              r ||
                ((r = {
                  parent: null,
                  source: null,
                  isSingleton: !1,
                  value: t,
                  idx: Kt.a++,
                }),
                this.b.set(t, r)),
              r
            );
          },
        },
        {
          key: 'trackDisposable',
          value: function trackDisposable(t) {
            var r = this.c(t);
            r.source || (r.source = new Error().stack);
          },
        },
        {
          key: 'setParent',
          value: function setParent(t, r) {
            var i = this.c(t);
            i.parent = r;
          },
        },
        {
          key: 'markAsDisposed',
          value: function markAsDisposed(t) {
            this.b['delete'](t);
          },
        },
        {
          key: 'markAsSingleton',
          value: function markAsSingleton(t) {
            this.c(t).isSingleton = !0;
          },
        },
        {
          key: 'f',
          value: function f(t, r) {
            var i = r.get(t);
            if (i) return i;
            var n = t.parent ? this.f(this.c(t.parent), r) : t;
            return r.set(t, n), n;
          },
        },
        {
          key: 'getTrackedDisposables',
          value: function getTrackedDisposables() {
            var _this9 = this;
            var t = new Map();
            return _toConsumableArray(this.b.entries())
              .filter(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                  i = _ref6[1];
                return i.source !== null && !_this9.f(i, t).isSingleton;
              })
              .flatMap(function (_ref7) {
                var _ref8 = _slicedToArray(_ref7, 1),
                  i = _ref8[0];
                return i;
              });
          },
        },
        {
          key: 'computeLeakingDisposables',
          value: function computeLeakingDisposables() {
            var _this0 = this;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var r = arguments.length > 1 ? arguments[1] : undefined;
            var i;
            if (r) i = r;
            else {
              var l = new Map(),
                c = _toConsumableArray(this.b.values()).filter(function (f) {
                  return f.source !== null && !_this0.f(f, l).isSingleton;
                });
              if (c.length === 0) return;
              var u = new Set(
                c.map(function (f) {
                  return f.value;
                }),
              );
              if (
                ((i = c.filter(function (f) {
                  return !(f.parent && u.has(f.parent));
                })),
                i.length === 0)
              )
                throw new Error('There are cyclic diposable chains!');
            }
            if (!i) return;
            function n(l) {
              function c(f, d) {
                for (
                  ;
                  f.length > 0 &&
                  d.some(function (w) {
                    return typeof w == 'string' ? w === f[0] : f[0].match(w);
                  });

                )
                  f.shift();
              }
              var u = l.source
                .split('\n')
                .map(function (f) {
                  return f.trim().replace('at ', '');
                })
                .filter(function (f) {
                  return f !== '';
                });
              return (
                c(u, [
                  'Error',
                  /^trackDisposable \(.*\)$/,
                  /^DisposableTracker.trackDisposable \(.*\)$/,
                ]),
                u.reverse()
              );
            }
            var s = new w2();
            var _iterator22 = _createForOfIteratorHelper(i),
              _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                var _l = _step22.value;
                var _c = n(_l);
                for (var _u = 0; _u <= _c.length; _u++) s.add(_c.slice(0, _u).join('\n'), _l);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
            i.sort(
              u2(function (l) {
                return l.idx;
              }, h2),
            );
            var o = '',
              a = 0;
            var _iterator23 = _createForOfIteratorHelper(i.slice(0, t)),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                var _l2 = _step23.value;
                a++;
                var _c2 = n(_l2),
                  _u2 = [];
                var _loop = function _loop(f) {
                  var d = _c2[f];
                  d = '(shared with '
                    .concat(s.get(_c2.slice(0, f + 1).join('\n')).size, '/')
                    .concat(i.length, ' leaks) at ')
                    .concat(d);
                  var C = s.get(_c2.slice(0, f).join('\n')),
                    S = o2(
                      _toConsumableArray(C).map(function (_) {
                        return n(_)[f];
                      }),
                      function (_) {
                        return _;
                      },
                    );
                  delete S[_c2[f]];
                  for (
                    var _i6 = 0, _Object$entries = Object.entries(S);
                    _i6 < _Object$entries.length;
                    _i6++
                  ) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i6], 2),
                      _ = _Object$entries$_i[0],
                      R = _Object$entries$_i[1];
                    _u2.unshift(
                      '    - stacktraces of '
                        .concat(R.length, ' other leaks continue with ')
                        .concat(_),
                    );
                  }
                  _u2.unshift(d);
                };
                for (var f = 0; f < _c2.length; f++) {
                  _loop(f);
                }
                o += '\n\n\n==================== Leaking disposable '
                  .concat(a, '/')
                  .concat(i.length, ': ')
                  .concat(_l2.value.constructor.name, ' ====================\n')
                  .concat(
                    _u2.join('\n'),
                    '\n============================================================\n\n',
                  );
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
            return (
              i.length > t &&
                (o += '\n\n\n... and '.concat(i.length - t, ' more leaking disposables\n\n')),
              {
                leaks: i,
                details: o,
              }
            );
          },
        },
      ]);
    })()),
    (_Kt.a = 0),
    _Kt);
function y2(e) {
  m1 = e;
}
if (p2) {
  var e = '__is_disposable_tracked__';
  y2(
    new /*#__PURE__*/ ((function () {
      function _class() {
        _classCallCheck(this, _class);
      }
      return _createClass(_class, [
        {
          key: 'trackDisposable',
          value: function trackDisposable(t) {
            var r = new Error('Potentially leaked disposable').stack;
            setTimeout(function () {
              t[e] || console.log(r);
            }, 3e3);
          },
        },
        {
          key: 'setParent',
          value: function setParent(t, r) {
            if (t && t !== P1.None)
              try {
                t[e] = !0;
              } catch (_unused) {}
          },
        },
        {
          key: 'markAsDisposed',
          value: function markAsDisposed(t) {
            if (t && t !== P1.None)
              try {
                t[e] = !0;
              } catch (_unused2) {}
          },
        },
        {
          key: 'markAsSingleton',
          value: function markAsSingleton(t) {},
        },
      ]);
    })())(),
  );
}
function q1(e) {
  var _m2;
  return (_m2 = m1) !== null && _m2 !== void 0 && _m2.trackDisposable(e), e;
}
function W1(e) {
  var _m3;
  (_m3 = m1) === null || _m3 === void 0 || _m3.markAsDisposed(e);
}
function ge(e, t) {
  var _m4;
  (_m4 = m1) === null || _m4 === void 0 || _m4.setParent(e, t);
}
function b2(e, t) {
  if (m1) {
    var _iterator24 = _createForOfIteratorHelper(e),
      _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
        var r = _step24.value;
        m1.setParent(r, t);
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
  }
}
function E1(e) {
  if (de.is(e)) {
    var t = [];
    var _iterator25 = _createForOfIteratorHelper(e),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
        var r = _step25.value;
        if (r)
          try {
            r.dispose();
          } catch (i) {
            t.push(i);
          }
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
    if (t.length === 1) throw t[0];
    if (t.length > 1) throw new AggregateError(t, 'Encountered errors while disposing of store');
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function A2() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }
  var t = ve(function () {
    return E1(e);
  });
  return b2(e, t), t;
}
function ve(e) {
  var t = q1({
    dispose: Re(function () {
      W1(t), e();
    }),
  });
  return t;
}
var me =
    ((_Jt = /*#__PURE__*/ (function () {
      function Jt() {
        _classCallCheck(this, Jt);
        (this.f = new Set()), (this.g = !1), q1(this);
      }
      return _createClass(Jt, [
        {
          key: 'dispose',
          value: function dispose() {
            this.g || (W1(this), (this.g = !0), this.clear());
          },
        },
        {
          key: 'isDisposed',
          get: function get() {
            return this.g;
          },
        },
        {
          key: 'clear',
          value: function clear() {
            if (this.f.size !== 0)
              try {
                E1(this.f);
              } finally {
                this.f.clear();
              }
          },
        },
        {
          key: 'add',
          value: function add(t) {
            if (!t) return t;
            if (t === this) throw new Error('Cannot register a disposable on itself!');
            return (
              ge(t, this),
              this.g
                ? Jt.DISABLE_DISPOSED_WARNING ||
                  console.warn(
                    new Error(
                      'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!',
                    ).stack,
                  )
                : this.f.add(t),
              t
            );
          },
        },
        {
          key: 'delete',
          value: function _delete(t) {
            if (t) {
              if (t === this) throw new Error('Cannot dispose a disposable on itself!');
              this.f['delete'](t), t.dispose();
            }
          },
        },
        {
          key: 'deleteAndLeak',
          value: function deleteAndLeak(t) {
            t && this.f.has(t) && (this.f['delete'](t), ge(t, null));
          },
        },
      ]);
    })()),
    (_Jt.DISABLE_DISPOSED_WARNING = !1),
    _Jt),
  P1 =
    ((_Class2 = /*#__PURE__*/ (function () {
      function P1() {
        _classCallCheck(this, P1);
        (this.B = new me()), q1(this), ge(this.B, this);
      }
      return _createClass(P1, [
        {
          key: 'dispose',
          value: function dispose() {
            W1(this), this.B.dispose();
          },
        },
        {
          key: 'D',
          value: function D(e) {
            if (e === this) throw new Error('Cannot register a disposable on itself!');
            return this.B.add(e);
          },
        },
      ]);
    })()),
    (_Class2.None = Object.freeze({
      dispose: function dispose() {},
    })),
    _Class2),
  C2 = /*#__PURE__*/ (function () {
    function C2() {
      _classCallCheck(this, C2);
      (this.a = new Map()), (this.b = !1), q1(this);
    }
    return _createClass(C2, [
      {
        key: 'dispose',
        value: function dispose() {
          W1(this), (this.b = !0), this.clearAndDisposeAll();
        },
      },
      {
        key: 'clearAndDisposeAll',
        value: function clearAndDisposeAll() {
          if (this.a.size)
            try {
              E1(this.a.values());
            } finally {
              this.a.clear();
            }
        },
      },
      {
        key: 'has',
        value: function has(e) {
          return this.a.has(e);
        },
      },
      {
        key: 'size',
        get: function get() {
          return this.a.size;
        },
      },
      {
        key: 'get',
        value: function get(e) {
          return this.a.get(e);
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          var _this$a$get;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          this.b &&
            console.warn(
              new Error(
                'Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!',
              ).stack,
            ),
            r ||
              ((_this$a$get = this.a.get(e)) !== null &&
                _this$a$get !== void 0 &&
                _this$a$get.dispose()),
            this.a.set(e, t);
        },
      },
      {
        key: 'deleteAndDispose',
        value: function deleteAndDispose(e) {
          var _this$a$get2;
          (_this$a$get2 = this.a.get(e)) !== null &&
            _this$a$get2 !== void 0 &&
            _this$a$get2.dispose(),
            this.a['delete'](e);
        },
      },
      {
        key: 'deleteAndLeak',
        value: function deleteAndLeak(e) {
          var t = this.a.get(e);
          return this.a['delete'](e), t;
        },
      },
      {
        key: 'keys',
        value: function keys() {
          return this.a.keys();
        },
      },
      {
        key: 'values',
        value: function values() {
          return this.a.values();
        },
      },
      {
        key: Symbol.iterator,
        value: function value() {
          return this.a[Symbol.iterator]();
        },
      },
    ]);
  })(),
  W0 =
    ((_oe = /*#__PURE__*/ _createClass(function oe(t) {
      _classCallCheck(this, oe);
      (this.element = t), (this.next = oe.Undefined), (this.prev = oe.Undefined);
    })),
    (_oe.Undefined = new _oe(void 0)),
    _oe),
  $2 = globalThis.performance && typeof globalThis.performance.now == 'function',
  _2 = /*#__PURE__*/ (function () {
    function Zt(t) {
      _classCallCheck(this, Zt);
      (this.c =
        $2 && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)),
        (this.a = this.c()),
        (this.b = -1);
    }
    return _createClass(
      Zt,
      [
        {
          key: 'stop',
          value: function stop() {
            this.b = this.c();
          },
        },
        {
          key: 'reset',
          value: function reset() {
            (this.a = this.c()), (this.b = -1);
          },
        },
        {
          key: 'elapsed',
          value: function elapsed() {
            return this.b !== -1 ? this.b - this.a : this.c() - this.a;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t) {
            return new Zt(t);
          },
        },
      ],
    );
  })(),
  E2 = !1,
  Be = !1,
  P2 = !1,
  Z;
(function (e) {
  e.None = function () {
    return P1.None;
  };
  function t(v) {
    if (P2) {
      var h = v.onDidAddListener,
        m = we.create();
      var g = 0;
      v.onDidAddListener = function () {
        ++g === 2 &&
          (console.warn(
            'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
          ),
          m.print()),
          h === null || h === void 0 ? void 0 : h();
      };
    }
  }
  function r(v, h) {
    return w(v, function () {}, 0, void 0, !0, void 0, h);
  }
  e.defer = r;
  function i(v) {
    return function (h) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var g = arguments.length > 2 ? arguments[2] : undefined;
      var p = !1,
        A;
      return (
        (A = v(
          function (L) {
            if (!p) return A ? A.dispose() : (p = !0), h.call(m, L);
          },
          null,
          g,
        )),
        p && A.dispose(),
        A
      );
    };
  }
  e.once = i;
  function n(v, h) {
    return e.once(e.filter(v, h));
  }
  e.onceIf = n;
  function s(v, h, m) {
    return f(function (g) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var A = arguments.length > 2 ? arguments[2] : undefined;
      return v(
        function (L) {
          return g.call(p, h(L));
        },
        null,
        A,
      );
    }, m);
  }
  e.map = s;
  function o(v, h, m) {
    return f(function (g) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var A = arguments.length > 2 ? arguments[2] : undefined;
      return v(
        function (L) {
          h(L), g.call(p, L);
        },
        null,
        A,
      );
    }, m);
  }
  e.forEach = o;
  function a(v, h, m) {
    return f(function (g) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var A = arguments.length > 2 ? arguments[2] : undefined;
      return v(
        function (L) {
          return h(L) && g.call(p, L);
        },
        null,
        A,
      );
    }, m);
  }
  e.filter = a;
  function l(v) {
    return v;
  }
  e.signal = l;
  function c() {
    for (var _len3 = arguments.length, v = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      v[_key3] = arguments[_key3];
    }
    return function (h) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var g = arguments.length > 2 ? arguments[2] : undefined;
      var p = A2.apply(
        void 0,
        _toConsumableArray(
          v.map(function (A) {
            return A(function (L) {
              return h.call(m, L);
            });
          }),
        ),
      );
      return d(p, g);
    };
  }
  e.any = c;
  function u(v, h, m, g) {
    var p = m;
    return s(
      v,
      function (A) {
        return (p = h(p, A)), p;
      },
      g,
    );
  }
  e.reduce = u;
  function f(v, h) {
    var m;
    var g = {
      onWillAddFirstListener: function onWillAddFirstListener() {
        m = v(p.fire, p);
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        var _m5;
        (_m5 = m) === null || _m5 === void 0 || _m5.dispose();
      },
    };
    h || t(g);
    var p = new H(g);
    return h !== null && h !== void 0 && h.add(p), p.event;
  }
  function d(v, h) {
    return h instanceof Array ? h.push(v) : h && h.add(v), v;
  }
  function w(v, h) {
    var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var g = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var p = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    var A = arguments.length > 5 ? arguments[5] : undefined;
    var L = arguments.length > 6 ? arguments[6] : undefined;
    var j,
      T,
      v1,
      U1 = 0,
      $1;
    var Me = {
      leakWarningThreshold: A,
      onWillAddFirstListener: function onWillAddFirstListener() {
        j = v(function (r2) {
          U1++,
            (T = h(T, r2)),
            g && !v1 && (z1.fire(T), (T = void 0)),
            ($1 = function $1() {
              var i2 = T;
              (T = void 0), (v1 = void 0), (!g || U1 > 1) && z1.fire(i2), (U1 = 0);
            }),
            typeof m == 'number'
              ? (clearTimeout(v1), (v1 = setTimeout($1, m)))
              : v1 === void 0 && ((v1 = 0), queueMicrotask($1));
        });
      },
      onWillRemoveListener: function onWillRemoveListener() {
        var _$;
        p && U1 > 0 && ((_$ = $1) === null || _$ === void 0 ? void 0 : _$());
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        ($1 = void 0), j.dispose();
      },
    };
    L || t(Me);
    var z1 = new H(Me);
    return L !== null && L !== void 0 && L.add(z1), z1.event;
  }
  e.debounce = w;
  function C(v) {
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var m = arguments.length > 2 ? arguments[2] : undefined;
    return e.debounce(
      v,
      function (g, p) {
        return g ? (g.push(p), g) : [p];
      },
      h,
      void 0,
      !0,
      void 0,
      m,
    );
  }
  e.accumulate = C;
  function S(v) {
    var h =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : function (g, p) {
            return g === p;
          };
    var m = arguments.length > 2 ? arguments[2] : undefined;
    var g = !0,
      p;
    return a(
      v,
      function (A) {
        var L = g || !h(A, p);
        return (g = !1), (p = A), L;
      },
      m,
    );
  }
  e.latch = S;
  function _(v, h, m) {
    return [
      e.filter(v, h, m),
      e.filter(
        v,
        function (g) {
          return !h(g);
        },
        m,
      ),
    ];
  }
  e.split = _;
  function R(v) {
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var g = arguments.length > 3 ? arguments[3] : undefined;
    var p = m.slice(),
      A = v(function (T) {
        p ? p.push(T) : j.fire(T);
      });
    g && g.add(A);
    var L = function L() {
        var _p;
        (_p = p) !== null &&
          _p !== void 0 &&
          _p.forEach(function (T) {
            return j.fire(T);
          }),
          (p = null);
      },
      j = new H({
        onWillAddFirstListener: function onWillAddFirstListener() {
          A ||
            ((A = v(function (T) {
              return j.fire(T);
            })),
            g && g.add(A));
        },
        onDidAddFirstListener: function onDidAddFirstListener() {
          p && (h ? setTimeout(L) : L());
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          A && A.dispose(), (A = null);
        },
      });
    return g && g.add(j), j.event;
  }
  e.buffer = R;
  function le(v, h) {
    return function (g, p, A) {
      var L = h(new y());
      return v(
        function (j) {
          var T = L.evaluate(j);
          T !== d1 && g.call(p, T);
        },
        void 0,
        A,
      );
    };
  }
  e.chain = le;
  var d1 = Symbol('HaltChainable');
  var y = /*#__PURE__*/ (function () {
    function y() {
      _classCallCheck(this, y);
      this.f = [];
    }
    return _createClass(y, [
      {
        key: 'map',
        value: function map(h) {
          return this.f.push(h), this;
        },
      },
      {
        key: 'forEach',
        value: function forEach(h) {
          return (
            this.f.push(function (m) {
              return h(m), m;
            }),
            this
          );
        },
      },
      {
        key: 'filter',
        value: function filter(h) {
          return (
            this.f.push(function (m) {
              return h(m) ? m : d1;
            }),
            this
          );
        },
      },
      {
        key: 'reduce',
        value: function reduce(h, m) {
          var g = m;
          return (
            this.f.push(function (p) {
              return (g = h(g, p)), g;
            }),
            this
          );
        },
      },
      {
        key: 'latch',
        value: function latch() {
          var h =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : function (m, g) {
                  return m === g;
                };
          var m = !0,
            g;
          return (
            this.f.push(function (p) {
              var A = m || !h(p, g);
              return (m = !1), (g = p), A ? p : d1;
            }),
            this
          );
        },
      },
      {
        key: 'evaluate',
        value: function evaluate(h) {
          var _iterator26 = _createForOfIteratorHelper(this.f),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
              var m = _step26.value;
              if (((h = m(h)), h === d1)) break;
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
          return h;
        },
      },
    ]);
  })();
  function E(v, h) {
    var m =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (g) {
            return g;
          };
    var g = function g() {
        return L.fire(m.apply(void 0, arguments));
      },
      p = function p() {
        return v.on(h, g);
      },
      A = function A() {
        return v.removeListener(h, g);
      },
      L = new H({
        onWillAddFirstListener: p,
        onDidRemoveLastListener: A,
      });
    return L.event;
  }
  e.fromNodeEventEmitter = E;
  function k(v, h) {
    var m =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (g) {
            return g;
          };
    var g = function g() {
        return L.fire(m.apply(void 0, arguments));
      },
      p = function p() {
        return v.addEventListener(h, g);
      },
      A = function A() {
        return v.removeEventListener(h, g);
      },
      L = new H({
        onWillAddFirstListener: p,
        onDidRemoveLastListener: A,
      });
    return L.event;
  }
  e.fromDOMEventEmitter = k;
  function z(v) {
    return new Promise(function (h) {
      return i(v)(h);
    });
  }
  e.toPromise = z;
  function g1(v) {
    var h = new H();
    return (
      v
        .then(
          function (m) {
            h.fire(m);
          },
          function () {
            h.fire(void 0);
          },
        )
        ['finally'](function () {
          h.dispose();
        }),
      h.event
    );
  }
  e.fromPromise = g1;
  function T1(v, h) {
    return v(function (m) {
      return h.fire(m);
    });
  }
  e.forward = T1;
  function Xt(v, h, m) {
    return (
      h(m),
      v(function (g) {
        return h(g);
      })
    );
  }
  e.runAndSubscribe = Xt;
  var Gt = /*#__PURE__*/ (function () {
    function Gt(h, m) {
      var _this1 = this;
      _classCallCheck(this, Gt);
      (this._observable = h), (this.f = 0), (this.g = !1);
      var g = {
        onWillAddFirstListener: function onWillAddFirstListener() {
          h.addObserver(_this1), _this1._observable.reportChanges();
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          h.removeObserver(_this1);
        },
      };
      m || t(g), (this.emitter = new H(g)), m && m.add(this.emitter);
    }
    return _createClass(Gt, [
      {
        key: 'beginUpdate',
        value: function beginUpdate(h) {
          this.f++;
        },
      },
      {
        key: 'handlePossibleChange',
        value: function handlePossibleChange(h) {},
      },
      {
        key: 'handleChange',
        value: function handleChange(h, m) {
          this.g = !0;
        },
      },
      {
        key: 'endUpdate',
        value: function endUpdate(h) {
          this.f--,
            this.f === 0 &&
              (this._observable.reportChanges(),
              this.g && ((this.g = !1), this.emitter.fire(this._observable.get())));
        },
      },
    ]);
  })();
  function e2(v, h) {
    return new Gt(v, h).emitter.event;
  }
  e.fromObservable = e2;
  function t2(v) {
    return function (h, m, g) {
      var p = 0,
        A = !1;
      var L = {
        beginUpdate: function beginUpdate() {
          p++;
        },
        endUpdate: function endUpdate() {
          p--, p === 0 && (v.reportChanges(), A && ((A = !1), h.call(m)));
        },
        handlePossibleChange: function handlePossibleChange() {},
        handleChange: function handleChange() {
          A = !0;
        },
      };
      v.addObserver(L), v.reportChanges();
      var j = {
        dispose: function dispose() {
          v.removeObserver(L);
        },
      };
      return g instanceof me ? g.add(j) : Array.isArray(g) && g.push(j), j;
    };
  }
  e.fromObservableLight = t2;
})(Z || (Z = {}));
var L2 =
    ((_je = /*#__PURE__*/ (function () {
      function je(t) {
        _classCallCheck(this, je);
        (this.listenerCount = 0),
          (this.invocationCount = 0),
          (this.elapsedOverall = 0),
          (this.durations = []),
          (this.name = ''.concat(t, '_').concat(je.f++)),
          je.all.add(this);
      }
      return _createClass(je, [
        {
          key: 'start',
          value: function start(t) {
            (this.g = new _2()), (this.listenerCount = t);
          },
        },
        {
          key: 'stop',
          value: function stop() {
            if (this.g) {
              var t = this.g.elapsed();
              this.durations.push(t),
                (this.elapsedOverall += t),
                (this.invocationCount += 1),
                (this.g = void 0);
            }
          },
        },
      ]);
    })()),
    (_je.all = new Set()),
    (_je.f = 0),
    _je),
  Ve = -1,
  x2 =
    ((_Qt = /*#__PURE__*/ (function () {
      function Qt(t, r) {
        var i =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : (Qt.f++).toString(16).padStart(3, '0');
        _classCallCheck(this, Qt);
        (this.j = t), (this.threshold = r), (this.name = i), (this.h = 0);
      }
      return _createClass(Qt, [
        {
          key: 'dispose',
          value: function dispose() {
            var _this$g;
            (_this$g = this.g) === null || _this$g === void 0 || _this$g.clear();
          },
        },
        {
          key: 'check',
          value: function check(t, r) {
            var _this10 = this;
            var i = this.threshold;
            if (i <= 0 || r < i) return;
            this.g || (this.g = new Map());
            var n = this.g.get(t.value) || 0;
            if ((this.g.set(t.value, n + 1), (this.h -= 1), this.h <= 0)) {
              this.h = i * 0.5;
              var _this$getMostFrequent = this.getMostFrequentStack(),
                _this$getMostFrequent2 = _slicedToArray(_this$getMostFrequent, 2),
                s = _this$getMostFrequent2[0],
                o = _this$getMostFrequent2[1],
                a = '['
                  .concat(this.name, '] potential listener LEAK detected, having ')
                  .concat(r, ' listeners already. MOST frequent listener (')
                  .concat(o, '):');
              console.warn(a), console.warn(s);
              var l = new S2(a, s);
              this.j(l);
            }
            return function () {
              var s = _this10.g.get(t.value) || 0;
              _this10.g.set(t.value, s - 1);
            };
          },
        },
        {
          key: 'getMostFrequentStack',
          value: function getMostFrequentStack() {
            if (!this.g) return;
            var t,
              r = 0;
            var _iterator27 = _createForOfIteratorHelper(this.g),
              _step27;
            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
                var _step27$value = _slicedToArray(_step27.value, 2),
                  i = _step27$value[0],
                  n = _step27$value[1];
                (!t || r < n) && ((t = [i, n]), (r = n));
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
            return t;
          },
        },
      ]);
    })()),
    (_Qt.f = 1),
    _Qt),
  we = /*#__PURE__*/ (function () {
    function Yt(t) {
      _classCallCheck(this, Yt);
      this.value = t;
    }
    return _createClass(
      Yt,
      [
        {
          key: 'print',
          value: function print() {
            console.warn(this.value.split('\n').slice(2).join('\n'));
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create() {
            var _t$stack;
            var t = new Error();
            return new Yt((_t$stack = t.stack) !== null && _t$stack !== void 0 ? _t$stack : '');
          },
        },
      ],
    );
  })(),
  S2 = /*#__PURE__*/ (function (_Error3) {
    function S2(e, t) {
      var _this11;
      _classCallCheck(this, S2);
      (_this11 = _callSuper(this, S2, [e])),
        (_this11.name = 'ListenerLeakError'),
        (_this11.stack = t);
      return _this11;
    }
    _inherits(S2, _Error3);
    return _createClass(S2);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  k2 = /*#__PURE__*/ (function (_Error4) {
    function k2(e, t) {
      var _this12;
      _classCallCheck(this, k2);
      (_this12 = _callSuper(this, k2, [e])),
        (_this12.name = 'ListenerRefusalError'),
        (_this12.stack = t);
      return _this12;
    }
    _inherits(k2, _Error4);
    return _createClass(k2);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  O2 = 0,
  B1 = /*#__PURE__*/ _createClass(function B1(e) {
    _classCallCheck(this, B1);
    (this.value = e), (this.id = O2++);
  }),
  D2 = 2,
  I2 = function I2(e, t) {
    if (e instanceof B1) t(e);
    else
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        i && t(i);
      }
  },
  V1;
if (E2) {
  var _e2 = [];
  setInterval(function () {
    _e2.length !== 0 &&
      (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"),
      console.warn(_e2.join('\n')),
      (_e2.length = 0));
  }, 3e3),
    (V1 = new FinalizationRegistry(function (t) {
      typeof t == 'string' && _e2.push(t);
    }));
}
var H = /*#__PURE__*/ (function () {
    function H(e) {
      var _this$f, _e$onListenerError, _this$f$leakWarningTh, _this$f2, _this$f3, _this$f4;
      _classCallCheck(this, H);
      (this.z = 0),
        (this.f = e),
        (this.g =
          Ve > 0 ||
          ((_this$f = this.f) !== null && _this$f !== void 0 && _this$f.leakWarningThreshold)
            ? new x2(
                (_e$onListenerError = e === null || e === void 0 ? void 0 : e.onListenerError) !==
                  null && _e$onListenerError !== void 0
                  ? _e$onListenerError
                  : F1,
                (_this$f$leakWarningTh =
                  (_this$f2 = this.f) === null || _this$f2 === void 0
                    ? void 0
                    : _this$f2.leakWarningThreshold) !== null && _this$f$leakWarningTh !== void 0
                  ? _this$f$leakWarningTh
                  : Ve,
              )
            : void 0),
        (this.j =
          (_this$f3 = this.f) !== null && _this$f3 !== void 0 && _this$f3._profName
            ? new L2(this.f._profName)
            : void 0),
        (this.w =
          (_this$f4 = this.f) === null || _this$f4 === void 0 ? void 0 : _this$f4.deliveryQueue);
    }
    return _createClass(H, [
      {
        key: 'dispose',
        value: function dispose() {
          if (!this.m) {
            var _this$w, _this$f5, _this$f5$onDidRemoveL, _this$g2;
            if (
              ((this.m = !0),
              ((_this$w = this.w) === null || _this$w === void 0 ? void 0 : _this$w.current) ===
                this && this.w.reset(),
              this.u)
            ) {
              if (Be) {
                var _e3 = this.u;
                queueMicrotask(function () {
                  I2(_e3, function (t) {
                    var _t$stack2;
                    return (_t$stack2 = t.stack) === null || _t$stack2 === void 0
                      ? void 0
                      : _t$stack2.print();
                  });
                });
              }
              (this.u = void 0), (this.z = 0);
            }
            (_this$f5 = this.f) !== null &&
              _this$f5 !== void 0 &&
              (_this$f5$onDidRemoveL = _this$f5.onDidRemoveLastListener) !== null &&
              _this$f5$onDidRemoveL !== void 0 &&
              _this$f5$onDidRemoveL.call(_this$f5),
              (_this$g2 = this.g) === null || _this$g2 === void 0 ? void 0 : _this$g2.dispose();
          }
        },
      },
      {
        key: 'event',
        get: function get() {
          var _this$q,
            _this13 = this;
          return (
            (_this$q = this.q) !== null && _this$q !== void 0
              ? _this$q
              : (this.q = function (e, t, r) {
                  var _this13$w,
                    _this13$f2,
                    _this13$f2$onWillAddF,
                    _this13$f3,
                    _this13$f3$onDidAddFi,
                    _this13$f4,
                    _this13$f4$onDidAddLi;
                  if (_this13.g && _this13.z > Math.pow(_this13.g.threshold, 2)) {
                    var _this13$g$getMostFreq, _this13$f;
                    var a = '['
                      .concat(
                        _this13.g.name,
                        '] REFUSES to accept new listeners because it exceeded its threshold by far (',
                      )
                      .concat(_this13.z, ' vs ')
                      .concat(_this13.g.threshold, ')');
                    console.warn(a);
                    var l =
                        (_this13$g$getMostFreq = _this13.g.getMostFrequentStack()) !== null &&
                        _this13$g$getMostFreq !== void 0
                          ? _this13$g$getMostFreq
                          : ['UNKNOWN stack', -1],
                      c = new k2(
                        ''
                          .concat(a, '. HINT: Stack shows most frequent listener (')
                          .concat(l[1], '-times)'),
                        l[0],
                      );
                    return (
                      (
                        ((_this13$f = _this13.f) === null || _this13$f === void 0
                          ? void 0
                          : _this13$f.onListenerError) || F1
                      )(c),
                      P1.None
                    );
                  }
                  if (_this13.m) return P1.None;
                  t && (e = e.bind(t));
                  var i = new B1(e);
                  var n, s;
                  _this13.g &&
                    _this13.z >= Math.ceil(_this13.g.threshold * 0.2) &&
                    ((i.stack = we.create()), (n = _this13.g.check(i.stack, _this13.z + 1))),
                    Be && (i.stack = s !== null && s !== void 0 ? s : we.create()),
                    _this13.u
                      ? _this13.u instanceof B1
                        ? ((_this13$w = _this13.w) !== null && _this13$w !== void 0
                            ? _this13$w
                            : (_this13.w = new j2()),
                          (_this13.u = [_this13.u, i]))
                        : _this13.u.push(i)
                      : ((_this13$f2 = _this13.f) !== null &&
                          _this13$f2 !== void 0 &&
                          (_this13$f2$onWillAddF = _this13$f2.onWillAddFirstListener) !== null &&
                          _this13$f2$onWillAddF !== void 0 &&
                          _this13$f2$onWillAddF.call(_this13$f2, _this13),
                        (_this13.u = i),
                        (_this13$f3 = _this13.f) === null ||
                        _this13$f3 === void 0 ||
                        (_this13$f3$onDidAddFi = _this13$f3.onDidAddFirstListener) === null ||
                        _this13$f3$onDidAddFi === void 0
                          ? void 0
                          : _this13$f3$onDidAddFi.call(_this13$f3, _this13)),
                    (_this13$f4 = _this13.f) !== null &&
                      _this13$f4 !== void 0 &&
                      (_this13$f4$onDidAddLi = _this13$f4.onDidAddListener) !== null &&
                      _this13$f4$onDidAddLi !== void 0 &&
                      _this13$f4$onDidAddLi.call(_this13$f4, _this13),
                    _this13.z++;
                  var o = ve(function () {
                    var _V, _n;
                    (_V = V1) !== null && _V !== void 0 && _V.unregister(o),
                      (_n = n) !== null && _n !== void 0 && _n(),
                      _this13.A(i);
                  });
                  if ((r instanceof me ? r.add(o) : Array.isArray(r) && r.push(o), V1)) {
                    var _l3$;
                    var _a = new Error().stack.split('\n').slice(2, 3).join('\n').trim(),
                      _l3 = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(_a);
                    V1.register(
                      o,
                      (_l3$ = _l3 === null || _l3 === void 0 ? void 0 : _l3[2]) !== null &&
                        _l3$ !== void 0
                        ? _l3$
                        : _a,
                      o,
                    );
                  }
                  return o;
                }),
            this.q
          );
        },
      },
      {
        key: 'A',
        value: function A(e) {
          var _this$f6, _this$f6$onWillRemove;
          if (
            ((_this$f6 = this.f) !== null &&
              _this$f6 !== void 0 &&
              (_this$f6$onWillRemove = _this$f6.onWillRemoveListener) !== null &&
              _this$f6$onWillRemove !== void 0 &&
              _this$f6$onWillRemove.call(_this$f6, this),
            !this.u)
          )
            return;
          if (this.z === 1) {
            var _this$f7, _this$f7$onDidRemoveL;
            (this.u = void 0),
              (_this$f7 = this.f) !== null &&
                _this$f7 !== void 0 &&
                (_this$f7$onDidRemoveL = _this$f7.onDidRemoveLastListener) !== null &&
                _this$f7$onDidRemoveL !== void 0 &&
                _this$f7$onDidRemoveL.call(_this$f7, this),
              (this.z = 0);
            return;
          }
          var t = this.u,
            r = t.indexOf(e);
          if (r === -1)
            throw (
              (console.log('disposed?', this.m),
              console.log('size?', this.z),
              console.log('arr?', JSON.stringify(this.u)),
              new Error('Attempted to dispose unknown listener'))
            );
          this.z--, (t[r] = void 0);
          var i = this.w.current === this;
          if (this.z * D2 <= t.length) {
            var n = 0;
            for (var s = 0; s < t.length; s++)
              t[s]
                ? (t[n++] = t[s])
                : i && n < this.w.end && (this.w.end--, n < this.w.i && this.w.i--);
            t.length = n;
          }
        },
      },
      {
        key: 'B',
        value: function B(e, t) {
          var _this$f8;
          if (!e) return;
          var r =
            ((_this$f8 = this.f) === null || _this$f8 === void 0
              ? void 0
              : _this$f8.onListenerError) || F1;
          if (!r) {
            e.value(t);
            return;
          }
          try {
            e.value(t);
          } catch (i) {
            r(i);
          }
        },
      },
      {
        key: 'C',
        value: function C(e) {
          var t = e.current.u;
          for (; e.i < e.end; ) this.B(t[e.i++], e.value);
          e.reset();
        },
      },
      {
        key: 'fire',
        value: function fire(e) {
          var _this$w2, _this$j, _this$j2, _this$j3;
          if (
            ((_this$w2 = this.w) !== null &&
              _this$w2 !== void 0 &&
              _this$w2.current &&
              (this.C(this.w), (_this$j = this.j) !== null && _this$j !== void 0 && _this$j.stop()),
            (_this$j2 = this.j) !== null && _this$j2 !== void 0 && _this$j2.start(this.z),
            this.u)
          )
            if (this.u instanceof B1) this.B(this.u, e);
            else {
              var t = this.w;
              t.enqueue(this, e, this.u.length), this.C(t);
            }
          (_this$j3 = this.j) === null || _this$j3 === void 0 || _this$j3.stop();
        },
      },
      {
        key: 'hasListeners',
        value: function hasListeners() {
          return this.z > 0;
        },
      },
    ]);
  })(),
  j2 = /*#__PURE__*/ (function () {
    function j2() {
      _classCallCheck(this, j2);
      (this.i = -1), (this.end = 0);
    }
    return _createClass(j2, [
      {
        key: 'enqueue',
        value: function enqueue(e, t, r) {
          (this.i = 0), (this.end = r), (this.current = e), (this.value = t);
        },
      },
      {
        key: 'reset',
        value: function reset() {
          (this.i = this.end), (this.current = void 0), (this.value = void 0);
        },
      },
    ]);
  })(),
  He = Object.freeze(function (e, t) {
    var r = setTimeout(e.bind(t), 0);
    return {
      dispose: function dispose() {
        clearTimeout(r);
      },
    };
  }),
  w1;
(function (e) {
  function t(r) {
    return r === e.None || r === e.Cancelled || r instanceof H1
      ? !0
      : !r || _typeof(r) != 'object'
        ? !1
        : typeof r.isCancellationRequested == 'boolean' &&
          typeof r.onCancellationRequested == 'function';
  }
  (e.isCancellationToken = t),
    (e.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: Z.None,
    })),
    (e.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: He,
    }));
})(w1 || (w1 = {}));
var H1 = /*#__PURE__*/ (function () {
    function H1() {
      _classCallCheck(this, H1);
      (this.a = !1), (this.b = null);
    }
    return _createClass(H1, [
      {
        key: 'cancel',
        value: function cancel() {
          this.a || ((this.a = !0), this.b && (this.b.fire(void 0), this.dispose()));
        },
      },
      {
        key: 'isCancellationRequested',
        get: function get() {
          return this.a;
        },
      },
      {
        key: 'onCancellationRequested',
        get: function get() {
          return this.a ? He : (this.b || (this.b = new H()), this.b.event);
        },
      },
      {
        key: 'dispose',
        value: function dispose() {
          this.b && (this.b.dispose(), (this.b = null));
        },
      },
    ]);
  })(),
  Ke = /*#__PURE__*/ (function () {
    function Ke(e) {
      _classCallCheck(this, Ke);
      (this.f = void 0),
        (this.g = void 0),
        (this.g = e && e.onCancellationRequested(this.cancel, this));
    }
    return _createClass(Ke, [
      {
        key: 'token',
        get: function get() {
          return this.f || (this.f = new H1()), this.f;
        },
      },
      {
        key: 'cancel',
        value: function cancel() {
          this.f ? this.f instanceof H1 && this.f.cancel() : (this.f = w1.Cancelled);
        },
      },
      {
        key: 'dispose',
        value: function dispose() {
          var _this$g3;
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          e && this.cancel(),
            (_this$g3 = this.g) !== null && _this$g3 !== void 0 && _this$g3.dispose(),
            this.f ? this.f instanceof H1 && this.f.dispose() : (this.f = w1.None);
        },
      },
    ]);
  })();
function Je() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var B0 =
    Je() === 'pseudo' ||
    ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) < 'u' &&
      document.location &&
      typeof document.location.hash == 'string' &&
      document.location.hash.indexOf('pseudo=true') >= 0),
  p1 = 'en',
  K1 = !1,
  J1 = !1,
  L1 = !1,
  M2 = !1,
  Ze = !1,
  pe = !1,
  N2 = !1,
  R2 = !1,
  T2 = !1,
  U2 = !1,
  Z1 = void 0,
  Q1 = p1,
  Qe = p1,
  z2 = void 0,
  e1 = void 0,
  t1 = globalThis,
  B = void 0;
_typeof(t1.vscode) < 'u' && _typeof(t1.vscode.process) < 'u'
  ? (B = t1.vscode.process)
  : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) < 'u' &&
    typeof ((_process = process) === null ||
    _process === void 0 ||
    (_process = _process.versions) === null ||
    _process === void 0
      ? void 0
      : _process.node) == 'string' &&
    (B = process);
var Ye =
    typeof ((_B = B) === null || _B === void 0 || (_B = _B.versions) === null || _B === void 0
      ? void 0
      : _B.electron) == 'string',
  F2 = Ye && ((_B2 = B) === null || _B2 === void 0 ? void 0 : _B2.type) === 'renderer';
if (_typeof(B) == 'object') {
  (K1 = B.platform === 'win32'),
    (J1 = B.platform === 'darwin'),
    (L1 = B.platform === 'linux'),
    (M2 = L1 && !!B.env.SNAP && !!B.env.SNAP_REVISION),
    (N2 = Ye),
    (T2 = !!B.env.CI || !!B.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
    (Z1 = p1),
    (Q1 = p1);
  var _e4 = B.env.VSCODE_NLS_CONFIG;
  if (_e4)
    try {
      var _t$languagePack;
      var t = JSON.parse(_e4);
      (Z1 = t.userLocale),
        (Qe = t.osLocale),
        (Q1 = t.resolvedLanguage || p1),
        (z2 =
          (_t$languagePack = t.languagePack) === null || _t$languagePack === void 0
            ? void 0
            : _t$languagePack.translationsConfigFile);
    } catch (_unused3) {}
  Ze = !0;
} else
  (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) == 'object' && !F2
    ? ((e1 = navigator.userAgent),
      (K1 = e1.indexOf('Windows') >= 0),
      (J1 = e1.indexOf('Macintosh') >= 0),
      (R2 =
        (e1.indexOf('Macintosh') >= 0 || e1.indexOf('iPad') >= 0 || e1.indexOf('iPhone') >= 0) &&
        !!navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 0),
      (L1 = e1.indexOf('Linux') >= 0),
      (U2 = ((_e5 = e1) === null || _e5 === void 0 ? void 0 : _e5.indexOf('Mobi')) >= 0),
      (pe = !0),
      (Q1 = Je() || p1),
      (Z1 = navigator.language.toLowerCase()),
      (Qe = Z1))
    : console.error('Unable to resolve platform.');
var Xe;
(function (e) {
  (e[(e.Web = 0)] = 'Web'),
    (e[(e.Mac = 1)] = 'Mac'),
    (e[(e.Linux = 2)] = 'Linux'),
    (e[(e.Windows = 3)] = 'Windows');
})(Xe || (Xe = {}));
var ye = 0;
J1 ? (ye = 1) : K1 ? (ye = 3) : L1 && (ye = 2);
var Q = K1,
  be = J1,
  Ge = L1,
  q2 = Ze,
  W2 = pe,
  B2 = pe && typeof t1.importScripts == 'function',
  V2 = B2 ? t1.origin : void 0,
  X = e1,
  n1 = Q1,
  et;
(function (e) {
  function t() {
    return n1;
  }
  e.value = t;
  function r() {
    return n1.length === 2
      ? n1 === 'en'
      : n1.length >= 3
        ? n1[0] === 'e' && n1[1] === 'n' && n1[2] === '-'
        : !1;
  }
  e.isDefaultVariant = r;
  function i() {
    return n1 === 'en';
  }
  e.isDefault = i;
})(et || (et = {}));
var H2 = typeof t1.postMessage == 'function' && !t1.importScripts,
  K2 = (function () {
    if (H2) {
      var _e6 = [];
      t1.addEventListener('message', function (r) {
        if (r.data && r.data.vscodeScheduleAsyncWork)
          for (var i = 0, n = _e6.length; i < n; i++) {
            var s = _e6[i];
            if (s.id === r.data.vscodeScheduleAsyncWork) {
              _e6.splice(i, 1), s.callback();
              return;
            }
          }
      });
      var _t2 = 0;
      return function (r) {
        var i = ++_t2;
        _e6.push({
          id: i,
          callback: r,
        }),
          t1.postMessage(
            {
              vscodeScheduleAsyncWork: i,
            },
            '*',
          );
      };
    }
    return function (e) {
      return setTimeout(e);
    };
  })(),
  tt;
(function (e) {
  (e[(e.Windows = 1)] = 'Windows'),
    (e[(e.Macintosh = 2)] = 'Macintosh'),
    (e[(e.Linux = 3)] = 'Linux');
})(tt || (tt = {}));
var J2 = !!(X && X.indexOf('Chrome') >= 0),
  V0 = !!(X && X.indexOf('Firefox') >= 0),
  H0 = !!(!J2 && X && X.indexOf('Safari') >= 0),
  K0 = !!(X && X.indexOf('Edg/') >= 0),
  J0 = !!(X && X.indexOf('Android') >= 0),
  f1,
  Ae = globalThis.vscode;
if (_typeof(Ae) < 'u' && _typeof(Ae.process) < 'u') {
  var _e7 = Ae.process;
  f1 = {
    get platform() {
      return _e7.platform;
    },
    get arch() {
      return _e7.arch;
    },
    get env() {
      return _e7.env;
    },
    cwd: function cwd() {
      return _e7.cwd();
    },
  };
} else
  (typeof process === 'undefined' ? 'undefined' : _typeof(process)) < 'u' &&
  typeof ((_process2 = process) === null ||
  _process2 === void 0 ||
  (_process2 = _process2.versions) === null ||
  _process2 === void 0
    ? void 0
    : _process2.node) == 'string'
    ? (f1 = {
        get platform() {
          return process.platform;
        },
        get arch() {
          return process.arch;
        },
        get env() {
          return process.env;
        },
        cwd: function cwd() {
          return process.env.VSCODE_CWD || process.cwd();
        },
      })
    : (f1 = {
        get platform() {
          return Q ? 'win32' : be ? 'darwin' : 'linux';
        },
        get arch() {},
        get env() {
          return {};
        },
        cwd: function cwd() {
          return '/';
        },
      });
var x1 = f1.cwd,
  Ce = f1.env,
  Z2 = f1.platform,
  Z0 = f1.arch,
  Q2 = 65,
  Y2 = 97,
  X2 = 90,
  G2 = 122,
  s1 = 46,
  M = 47,
  F = 92,
  o1 = 58,
  er = 63,
  rt = /*#__PURE__*/ (function (_Error5) {
    function rt(e, t, r) {
      var _this14;
      _classCallCheck(this, rt);
      var i;
      typeof t == 'string' && t.indexOf('not ') === 0
        ? ((i = 'must not be'), (t = t.replace(/^not /, '')))
        : (i = 'must be');
      var n = e.indexOf('.') !== -1 ? 'property' : 'argument';
      var s = 'The "'.concat(e, '" ').concat(n, ' ').concat(i, ' of type ').concat(t);
      (s += '. Received type '.concat(_typeof(r))),
        (_this14 = _callSuper(this, rt, [s])),
        (_this14.code = 'ERR_INVALID_ARG_TYPE');
      return _this14;
    }
    _inherits(rt, _Error5);
    return _createClass(rt);
  })(/*#__PURE__*/ _wrapNativeSuper(Error));
function tr(e, t) {
  if (e === null || _typeof(e) != 'object') throw new rt(t, 'Object', e);
}
function D(e, t) {
  if (typeof e != 'string') throw new rt(t, 'string', e);
}
var q = Z2 === 'win32';
function b(e) {
  return e === M || e === F;
}
function $e(e) {
  return e === M;
}
function a1(e) {
  return (e >= Q2 && e <= X2) || (e >= Y2 && e <= G2);
}
function Y1(e, t, r, i) {
  var n = '',
    s = 0,
    o = -1,
    a = 0,
    l = 0;
  for (var c = 0; c <= e.length; ++c) {
    if (c < e.length) l = e.charCodeAt(c);
    else {
      if (i(l)) break;
      l = M;
    }
    if (i(l)) {
      if (!(o === c - 1 || a === 1))
        if (a === 2) {
          if (
            n.length < 2 ||
            s !== 2 ||
            n.charCodeAt(n.length - 1) !== s1 ||
            n.charCodeAt(n.length - 2) !== s1
          ) {
            if (n.length > 2) {
              var u = n.lastIndexOf(r);
              u === -1
                ? ((n = ''), (s = 0))
                : ((n = n.slice(0, u)), (s = n.length - 1 - n.lastIndexOf(r))),
                (o = c),
                (a = 0);
              continue;
            } else if (n.length !== 0) {
              (n = ''), (s = 0), (o = c), (a = 0);
              continue;
            }
          }
          t && ((n += n.length > 0 ? ''.concat(r, '..') : '..'), (s = 2));
        } else
          n.length > 0 ? (n += ''.concat(r).concat(e.slice(o + 1, c))) : (n = e.slice(o + 1, c)),
            (s = c - o - 1);
      (o = c), (a = 0);
    } else l === s1 && a !== -1 ? ++a : (a = -1);
  }
  return n;
}
function rr(e) {
  return e ? ''.concat(e[0] === '.' ? '' : '.').concat(e) : '';
}
function it(e, t) {
  tr(t, 'pathObject');
  var r = t.dir || t.root,
    i = t.base || ''.concat(t.name || '').concat(rr(t.ext));
  return r ? (r === t.root ? ''.concat(r).concat(i) : ''.concat(r).concat(e).concat(i)) : i;
}
var I = {
    resolve: function resolve() {
      var t = '',
        r = '',
        i = !1;
      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }
      for (var n = e.length - 1; n >= -1; n--) {
        var s = void 0;
        if (n >= 0) {
          if (((s = e[n]), D(s, 'paths['.concat(n, ']')), s.length === 0)) continue;
        } else
          t.length === 0
            ? (s = x1())
            : ((s = Ce['='.concat(t)] || x1()),
              (s === void 0 ||
                (s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === F)) &&
                (s = ''.concat(t, '\\')));
        var o = s.length;
        var a = 0,
          l = '',
          c = !1;
        var u = s.charCodeAt(0);
        if (o === 1) b(u) && ((a = 1), (c = !0));
        else if (b(u)) {
          if (((c = !0), b(s.charCodeAt(1)))) {
            var f = 2,
              d = f;
            for (; f < o && !b(s.charCodeAt(f)); ) f++;
            if (f < o && f !== d) {
              var w = s.slice(d, f);
              for (d = f; f < o && b(s.charCodeAt(f)); ) f++;
              if (f < o && f !== d) {
                for (d = f; f < o && !b(s.charCodeAt(f)); ) f++;
                (f === o || f !== d) &&
                  ((l = '\\\\'.concat(w, '\\').concat(s.slice(d, f))), (a = f));
              }
            }
          } else a = 1;
        } else
          a1(u) &&
            s.charCodeAt(1) === o1 &&
            ((l = s.slice(0, 2)), (a = 2), o > 2 && b(s.charCodeAt(2)) && ((c = !0), (a = 3)));
        if (l.length > 0)
          if (t.length > 0) {
            if (l.toLowerCase() !== t.toLowerCase()) continue;
          } else t = l;
        if (i) {
          if (t.length > 0) break;
        } else if (((r = ''.concat(s.slice(a), '\\').concat(r)), (i = c), c && t.length > 0)) break;
      }
      return (
        (r = Y1(r, !i, '\\', b)), i ? ''.concat(t, '\\').concat(r) : ''.concat(t).concat(r) || '.'
      );
    },
    normalize: function normalize(e) {
      D(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var r = 0,
        i,
        n = !1;
      var s = e.charCodeAt(0);
      if (t === 1) return $e(s) ? '\\' : e;
      if (b(s)) {
        if (((n = !0), b(e.charCodeAt(1)))) {
          var a = 2,
            l = a;
          for (; a < t && !b(e.charCodeAt(a)); ) a++;
          if (a < t && a !== l) {
            var c = e.slice(l, a);
            for (l = a; a < t && b(e.charCodeAt(a)); ) a++;
            if (a < t && a !== l) {
              for (l = a; a < t && !b(e.charCodeAt(a)); ) a++;
              if (a === t) return '\\\\'.concat(c, '\\').concat(e.slice(l), '\\');
              a !== l && ((i = '\\\\'.concat(c, '\\').concat(e.slice(l, a))), (r = a));
            }
          }
        } else r = 1;
      } else
        a1(s) &&
          e.charCodeAt(1) === o1 &&
          ((i = e.slice(0, 2)), (r = 2), t > 2 && b(e.charCodeAt(2)) && ((n = !0), (r = 3)));
      var o = r < t ? Y1(e.slice(r), !n, '\\', b) : '';
      return (
        o.length === 0 && !n && (o = '.'),
        o.length > 0 && b(e.charCodeAt(t - 1)) && (o += '\\'),
        i === void 0
          ? n
            ? '\\'.concat(o)
            : o
          : n
            ? ''.concat(i, '\\').concat(o)
            : ''.concat(i).concat(o)
      );
    },
    isAbsolute: function isAbsolute(e) {
      D(e, 'path');
      var t = e.length;
      if (t === 0) return !1;
      var r = e.charCodeAt(0);
      return b(r) || (t > 2 && a1(r) && e.charCodeAt(1) === o1 && b(e.charCodeAt(2)));
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t, r;
      for (var s = 0; s < arguments.length; ++s) {
        var o = s < 0 || arguments.length <= s ? undefined : arguments[s];
        D(o, 'path'), o.length > 0 && (t === void 0 ? (t = r = o) : (t += '\\'.concat(o)));
      }
      if (t === void 0) return '.';
      var i = !0,
        n = 0;
      if (typeof r == 'string' && b(r.charCodeAt(0))) {
        ++n;
        var _s = r.length;
        _s > 1 && b(r.charCodeAt(1)) && (++n, _s > 2 && (b(r.charCodeAt(2)) ? ++n : (i = !1)));
      }
      if (i) {
        for (; n < t.length && b(t.charCodeAt(n)); ) n++;
        n >= 2 && (t = '\\'.concat(t.slice(n)));
      }
      return I.normalize(t);
    },
    relative: function relative(e, t) {
      if ((D(e, 'from'), D(t, 'to'), e === t)) return '';
      var r = I.resolve(e),
        i = I.resolve(t);
      if (r === i || ((e = r.toLowerCase()), (t = i.toLowerCase()), e === t)) return '';
      var n = 0;
      for (; n < e.length && e.charCodeAt(n) === F; ) n++;
      var s = e.length;
      for (; s - 1 > n && e.charCodeAt(s - 1) === F; ) s--;
      var o = s - n;
      var a = 0;
      for (; a < t.length && t.charCodeAt(a) === F; ) a++;
      var l = t.length;
      for (; l - 1 > a && t.charCodeAt(l - 1) === F; ) l--;
      var c = l - a,
        u = o < c ? o : c;
      var f = -1,
        d = 0;
      for (; d < u; d++) {
        var C = e.charCodeAt(n + d);
        if (C !== t.charCodeAt(a + d)) break;
        C === F && (f = d);
      }
      if (d !== u) {
        if (f === -1) return i;
      } else {
        if (c > u) {
          if (t.charCodeAt(a + d) === F) return i.slice(a + d + 1);
          if (d === 2) return i.slice(a + d);
        }
        o > u && (e.charCodeAt(n + d) === F ? (f = d) : d === 2 && (f = 3)), f === -1 && (f = 0);
      }
      var w = '';
      for (d = n + f + 1; d <= s; ++d)
        (d === s || e.charCodeAt(d) === F) && (w += w.length === 0 ? '..' : '\\..');
      return (
        (a += f),
        w.length > 0
          ? ''.concat(w).concat(i.slice(a, l))
          : (i.charCodeAt(a) === F && ++a, i.slice(a, l))
      );
    },
    toNamespacedPath: function toNamespacedPath(e) {
      if (typeof e != 'string' || e.length === 0) return e;
      var t = I.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === F) {
        if (t.charCodeAt(1) === F) {
          var r = t.charCodeAt(2);
          if (r !== er && r !== s1) return '\\\\?\\UNC\\'.concat(t.slice(2));
        }
      } else if (a1(t.charCodeAt(0)) && t.charCodeAt(1) === o1 && t.charCodeAt(2) === F)
        return '\\\\?\\'.concat(t);
      return e;
    },
    dirname: function dirname(e) {
      D(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var r = -1,
        i = 0;
      var n = e.charCodeAt(0);
      if (t === 1) return b(n) ? e : '.';
      if (b(n)) {
        if (((r = i = 1), b(e.charCodeAt(1)))) {
          var a = 2,
            l = a;
          for (; a < t && !b(e.charCodeAt(a)); ) a++;
          if (a < t && a !== l) {
            for (l = a; a < t && b(e.charCodeAt(a)); ) a++;
            if (a < t && a !== l) {
              for (l = a; a < t && !b(e.charCodeAt(a)); ) a++;
              if (a === t) return e;
              a !== l && (r = i = a + 1);
            }
          }
        }
      } else
        a1(n) && e.charCodeAt(1) === o1 && ((r = t > 2 && b(e.charCodeAt(2)) ? 3 : 2), (i = r));
      var s = -1,
        o = !0;
      for (var _a2 = t - 1; _a2 >= i; --_a2)
        if (b(e.charCodeAt(_a2))) {
          if (!o) {
            s = _a2;
            break;
          }
        } else o = !1;
      if (s === -1) {
        if (r === -1) return '.';
        s = r;
      }
      return e.slice(0, s);
    },
    basename: function basename(e, t) {
      t !== void 0 && D(t, 'suffix'), D(e, 'path');
      var r = 0,
        i = -1,
        n = !0,
        s;
      if (
        (e.length >= 2 && a1(e.charCodeAt(0)) && e.charCodeAt(1) === o1 && (r = 2),
        t !== void 0 && t.length > 0 && t.length <= e.length)
      ) {
        if (t === e) return '';
        var o = t.length - 1,
          a = -1;
        for (s = e.length - 1; s >= r; --s) {
          var l = e.charCodeAt(s);
          if (b(l)) {
            if (!n) {
              r = s + 1;
              break;
            }
          } else
            a === -1 && ((n = !1), (a = s + 1)),
              o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (i = s) : ((o = -1), (i = a)));
        }
        return r === i ? (i = a) : i === -1 && (i = e.length), e.slice(r, i);
      }
      for (s = e.length - 1; s >= r; --s)
        if (b(e.charCodeAt(s))) {
          if (!n) {
            r = s + 1;
            break;
          }
        } else i === -1 && ((n = !1), (i = s + 1));
      return i === -1 ? '' : e.slice(r, i);
    },
    extname: function extname(e) {
      D(e, 'path');
      var t = 0,
        r = -1,
        i = 0,
        n = -1,
        s = !0,
        o = 0;
      e.length >= 2 && e.charCodeAt(1) === o1 && a1(e.charCodeAt(0)) && (t = i = 2);
      for (var a = e.length - 1; a >= t; --a) {
        var l = e.charCodeAt(a);
        if (b(l)) {
          if (!s) {
            i = a + 1;
            break;
          }
          continue;
        }
        n === -1 && ((s = !1), (n = a + 1)),
          l === s1 ? (r === -1 ? (r = a) : o !== 1 && (o = 1)) : r !== -1 && (o = -1);
      }
      return r === -1 || n === -1 || o === 0 || (o === 1 && r === n - 1 && r === i + 1)
        ? ''
        : e.slice(r, n);
    },
    format: it.bind(null, '\\'),
    parse: function parse(e) {
      D(e, 'path');
      var t = {
        root: '',
        dir: '',
        base: '',
        ext: '',
        name: '',
      };
      if (e.length === 0) return t;
      var r = e.length;
      var i = 0,
        n = e.charCodeAt(0);
      if (r === 1) return b(n) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
      if (b(n)) {
        if (((i = 1), b(e.charCodeAt(1)))) {
          var f = 2,
            d = f;
          for (; f < r && !b(e.charCodeAt(f)); ) f++;
          if (f < r && f !== d) {
            for (d = f; f < r && b(e.charCodeAt(f)); ) f++;
            if (f < r && f !== d) {
              for (d = f; f < r && !b(e.charCodeAt(f)); ) f++;
              f === r ? (i = f) : f !== d && (i = f + 1);
            }
          }
        }
      } else if (a1(n) && e.charCodeAt(1) === o1) {
        if (r <= 2) return (t.root = t.dir = e), t;
        if (((i = 2), b(e.charCodeAt(2)))) {
          if (r === 3) return (t.root = t.dir = e), t;
          i = 3;
        }
      }
      i > 0 && (t.root = e.slice(0, i));
      var s = -1,
        o = i,
        a = -1,
        l = !0,
        c = e.length - 1,
        u = 0;
      for (; c >= i; --c) {
        if (((n = e.charCodeAt(c)), b(n))) {
          if (!l) {
            o = c + 1;
            break;
          }
          continue;
        }
        a === -1 && ((l = !1), (a = c + 1)),
          n === s1 ? (s === -1 ? (s = c) : u !== 1 && (u = 1)) : s !== -1 && (u = -1);
      }
      return (
        a !== -1 &&
          (s === -1 || u === 0 || (u === 1 && s === a - 1 && s === o + 1)
            ? (t.base = t.name = e.slice(o, a))
            : ((t.name = e.slice(o, s)), (t.base = e.slice(o, a)), (t.ext = e.slice(s, a)))),
        o > 0 && o !== i ? (t.dir = e.slice(0, o - 1)) : (t.dir = t.root),
        t
      );
    },
    sep: '\\',
    delimiter: ';',
    win32: null,
    posix: null,
  },
  ir = (function () {
    if (q) {
      var _e8 = /\\/g;
      return function () {
        var t = x1().replace(_e8, '/');
        return t.slice(t.indexOf('/'));
      };
    }
    return function () {
      return x1();
    };
  })(),
  P = {
    resolve: function resolve() {
      var t = '',
        r = !1;
      for (var i = arguments.length - 1; i >= -1 && !r; i--) {
        var n = i >= 0 ? (i < 0 || arguments.length <= i ? undefined : arguments[i]) : ir();
        D(n, 'paths['.concat(i, ']')),
          n.length !== 0 && ((t = ''.concat(n, '/').concat(t)), (r = n.charCodeAt(0) === M));
      }
      return (t = Y1(t, !r, '/', $e)), r ? '/'.concat(t) : t.length > 0 ? t : '.';
    },
    normalize: function normalize(e) {
      if ((D(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === M,
        r = e.charCodeAt(e.length - 1) === M;
      return (
        (e = Y1(e, !t, '/', $e)),
        e.length === 0 ? (t ? '/' : r ? './' : '.') : (r && (e += '/'), t ? '/'.concat(e) : e)
      );
    },
    isAbsolute: function isAbsolute(e) {
      return D(e, 'path'), e.length > 0 && e.charCodeAt(0) === M;
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t;
      for (var r = 0; r < arguments.length; ++r) {
        var i = r < 0 || arguments.length <= r ? undefined : arguments[r];
        D(i, 'path'), i.length > 0 && (t === void 0 ? (t = i) : (t += '/'.concat(i)));
      }
      return t === void 0 ? '.' : P.normalize(t);
    },
    relative: function relative(e, t) {
      if ((D(e, 'from'), D(t, 'to'), e === t || ((e = P.resolve(e)), (t = P.resolve(t)), e === t)))
        return '';
      var r = 1,
        i = e.length,
        n = i - r,
        s = 1,
        o = t.length - s,
        a = n < o ? n : o;
      var l = -1,
        c = 0;
      for (; c < a; c++) {
        var f = e.charCodeAt(r + c);
        if (f !== t.charCodeAt(s + c)) break;
        f === M && (l = c);
      }
      if (c === a)
        if (o > a) {
          if (t.charCodeAt(s + c) === M) return t.slice(s + c + 1);
          if (c === 0) return t.slice(s + c);
        } else n > a && (e.charCodeAt(r + c) === M ? (l = c) : c === 0 && (l = 0));
      var u = '';
      for (c = r + l + 1; c <= i; ++c)
        (c === i || e.charCodeAt(c) === M) && (u += u.length === 0 ? '..' : '/..');
      return ''.concat(u).concat(t.slice(s + l));
    },
    toNamespacedPath: function toNamespacedPath(e) {
      return e;
    },
    dirname: function dirname(e) {
      if ((D(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === M;
      var r = -1,
        i = !0;
      for (var n = e.length - 1; n >= 1; --n)
        if (e.charCodeAt(n) === M) {
          if (!i) {
            r = n;
            break;
          }
        } else i = !1;
      return r === -1 ? (t ? '/' : '.') : t && r === 1 ? '//' : e.slice(0, r);
    },
    basename: function basename(e, t) {
      t !== void 0 && D(t, 'ext'), D(e, 'path');
      var r = 0,
        i = -1,
        n = !0,
        s;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return '';
        var o = t.length - 1,
          a = -1;
        for (s = e.length - 1; s >= 0; --s) {
          var l = e.charCodeAt(s);
          if (l === M) {
            if (!n) {
              r = s + 1;
              break;
            }
          } else
            a === -1 && ((n = !1), (a = s + 1)),
              o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (i = s) : ((o = -1), (i = a)));
        }
        return r === i ? (i = a) : i === -1 && (i = e.length), e.slice(r, i);
      }
      for (s = e.length - 1; s >= 0; --s)
        if (e.charCodeAt(s) === M) {
          if (!n) {
            r = s + 1;
            break;
          }
        } else i === -1 && ((n = !1), (i = s + 1));
      return i === -1 ? '' : e.slice(r, i);
    },
    extname: function extname(e) {
      D(e, 'path');
      var t = -1,
        r = 0,
        i = -1,
        n = !0,
        s = 0;
      for (var o = e.length - 1; o >= 0; --o) {
        var a = e.charCodeAt(o);
        if (a === M) {
          if (!n) {
            r = o + 1;
            break;
          }
          continue;
        }
        i === -1 && ((n = !1), (i = o + 1)),
          a === s1 ? (t === -1 ? (t = o) : s !== 1 && (s = 1)) : t !== -1 && (s = -1);
      }
      return t === -1 || i === -1 || s === 0 || (s === 1 && t === i - 1 && t === r + 1)
        ? ''
        : e.slice(t, i);
    },
    format: it.bind(null, '/'),
    parse: function parse(e) {
      D(e, 'path');
      var t = {
        root: '',
        dir: '',
        base: '',
        ext: '',
        name: '',
      };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0) === M;
      var i;
      r ? ((t.root = '/'), (i = 1)) : (i = 0);
      var n = -1,
        s = 0,
        o = -1,
        a = !0,
        l = e.length - 1,
        c = 0;
      for (; l >= i; --l) {
        var u = e.charCodeAt(l);
        if (u === M) {
          if (!a) {
            s = l + 1;
            break;
          }
          continue;
        }
        o === -1 && ((a = !1), (o = l + 1)),
          u === s1 ? (n === -1 ? (n = l) : c !== 1 && (c = 1)) : n !== -1 && (c = -1);
      }
      if (o !== -1) {
        var _u3 = s === 0 && r ? 1 : s;
        n === -1 || c === 0 || (c === 1 && n === o - 1 && n === s + 1)
          ? (t.base = t.name = e.slice(_u3, o))
          : ((t.name = e.slice(_u3, n)), (t.base = e.slice(_u3, o)), (t.ext = e.slice(n, o)));
      }
      return s > 0 ? (t.dir = e.slice(0, s - 1)) : r && (t.dir = '/'), t;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  };
(P.win32 = I.win32 = I), (P.posix = I.posix = P);
var nt = q ? I.normalize : P.normalize,
  st = q ? I.isAbsolute : P.isAbsolute,
  K = q ? I.join : P.join,
  nr = q ? I.resolve : P.resolve,
  sr = q ? I.relative : P.relative,
  ot = q ? I.dirname : P.dirname,
  Q0 = q ? I.basename : P.basename,
  Y0 = q ? I.extname : P.extname,
  X0 = q ? I.format : P.format,
  G0 = q ? I.parse : P.parse,
  e4 = q ? I.toNamespacedPath : P.toNamespacedPath,
  X1 = q ? I.sep : P.sep,
  or = q ? I.delimiter : P.delimiter;
function ar(e) {
  return e;
}
var cr = /*#__PURE__*/ (function () {
    function cr(e, t) {
      _classCallCheck(this, cr);
      (this.a = void 0),
        (this.b = void 0),
        typeof e == 'function'
          ? ((this.c = e), (this.d = ar))
          : ((this.c = t), (this.d = e.getCacheKey));
    }
    return _createClass(cr, [
      {
        key: 'get',
        value: function get(e) {
          var t = this.d(e);
          return this.b !== t && ((this.b = t), (this.a = this.c(e))), this.a;
        },
      },
    ]);
  })(),
  _e = /*#__PURE__*/ (function () {
    function _e(e) {
      _classCallCheck(this, _e);
      (this.d = e), (this.a = !1);
    }
    return _createClass(_e, [
      {
        key: 'hasValue',
        get: function get() {
          return this.a;
        },
      },
      {
        key: 'value',
        get: function get() {
          if (!this.a)
            try {
              this.b = this.d();
            } catch (e) {
              this.c = e;
            } finally {
              this.a = !0;
            }
          if (this.c) throw this.c;
          return this.b;
        },
      },
      {
        key: 'rawValue',
        get: function get() {
          return this.b;
        },
      },
    ]);
  })();
function lr(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function fr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; r < i && n < s; r++, n++) {
    var l = e.charCodeAt(r),
      c = t.charCodeAt(n);
    if (l < c) return -1;
    if (l > c) return 1;
  }
  var o = i - r,
    a = s - n;
  return o < a ? -1 : o > a ? 1 : 0;
}
function at(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; r < i && n < s; r++, n++) {
    var l = e.charCodeAt(r),
      c = t.charCodeAt(n);
    if (l === c) continue;
    if (l >= 128 || c >= 128) return fr(e.toLowerCase(), t.toLowerCase(), r, i, n, s);
    ct(l) && (l -= 32), ct(c) && (c -= 32);
    var u = l - c;
    if (u !== 0) return u;
  }
  var o = i - r,
    a = s - n;
  return o < a ? -1 : o > a ? 1 : 0;
}
function ct(e) {
  return e >= 97 && e <= 122;
}
function lt(e) {
  return e >= 65 && e <= 90;
}
function ur(e, t) {
  return e.length === t.length && at(e, t) === 0;
}
function hr(e, t) {
  var r = t.length;
  return t.length > e.length ? !1 : at(e, t, 0, r) === 0;
}
var t4 = '\uFEFF',
  ft;
(function (e) {
  (e[(e.Other = 0)] = 'Other'),
    (e[(e.Prepend = 1)] = 'Prepend'),
    (e[(e.CR = 2)] = 'CR'),
    (e[(e.LF = 3)] = 'LF'),
    (e[(e.Control = 4)] = 'Control'),
    (e[(e.Extend = 5)] = 'Extend'),
    (e[(e.Regional_Indicator = 6)] = 'Regional_Indicator'),
    (e[(e.SpacingMark = 7)] = 'SpacingMark'),
    (e[(e.L = 8)] = 'L'),
    (e[(e.V = 9)] = 'V'),
    (e[(e.T = 10)] = 'T'),
    (e[(e.LV = 11)] = 'LV'),
    (e[(e.LVT = 12)] = 'LVT'),
    (e[(e.ZWJ = 13)] = 'ZWJ'),
    (e[(e.Extended_Pictographic = 14)] = 'Extended_Pictographic');
})(ft || (ft = {}));
var r4 =
  ((_M = /*#__PURE__*/ (function () {
    function M1() {
      _classCallCheck(this, M1);
      this.d = dr();
    }
    return _createClass(
      M1,
      [
        {
          key: 'getGraphemeBreakType',
          value: function getGraphemeBreakType(t) {
            if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
            if (t < 127) return 0;
            var r = this.d,
              i = r.length / 3;
            var n = 1;
            for (; n <= i; )
              if (t < r[3 * n]) n = 2 * n;
              else if (t > r[3 * n + 1]) n = 2 * n + 1;
              else return r[3 * n + 2];
            return 0;
          },
        },
      ],
      [
        {
          key: 'getInstance',
          value: function getInstance() {
            return M1.c || (M1.c = new M1()), M1.c;
          },
        },
      ],
    );
  })()),
  (_M.c = null),
  _M);
function dr() {
  return JSON.parse(
    '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
  );
}
var ut;
(function (e) {
  (e[(e.zwj = 8205)] = 'zwj'),
    (e[(e.emojiVariantSelector = 65039)] = 'emojiVariantSelector'),
    (e[(e.enclosingKeyCap = 8419)] = 'enclosingKeyCap');
})(ut || (ut = {}));
var i4 =
    ((_N = /*#__PURE__*/ (function () {
      function N1(t) {
        _classCallCheck(this, N1);
        this.f = t;
      }
      return _createClass(
        N1,
        [
          {
            key: 'isAmbiguous',
            value: function isAmbiguous(t) {
              return this.f.has(t);
            },
          },
          {
            key: 'containsAmbiguousCharacter',
            value: function containsAmbiguousCharacter(t) {
              for (var r = 0; r < t.length; r++) {
                var i = t.codePointAt(r);
                if (typeof i == 'number' && this.isAmbiguous(i)) return !0;
              }
              return !1;
            },
          },
          {
            key: 'getPrimaryConfusable',
            value: function getPrimaryConfusable(t) {
              return this.f.get(t);
            },
          },
          {
            key: 'getConfusableCodePoints',
            value: function getConfusableCodePoints() {
              return new Set(this.f.keys());
            },
          },
        ],
        [
          {
            key: 'getInstance',
            value: function getInstance(t) {
              return N1.d.get(Array.from(t));
            },
          },
          {
            key: 'getLocales',
            value: function getLocales() {
              return N1.e.value;
            },
          },
        ],
      );
    })()),
    (_N.c = new _e(function () {
      return JSON.parse(
        '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
      );
    })),
    (_N.d = new cr(
      {
        getCacheKey: JSON.stringify,
      },
      function (t) {
        function r(u) {
          var f = new Map();
          for (var d = 0; d < u.length; d += 2) f.set(u[d], u[d + 1]);
          return f;
        }
        function i(u, f) {
          var d = new Map(u);
          var _iterator28 = _createForOfIteratorHelper(f),
            _step28;
          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
              var _step28$value = _slicedToArray(_step28.value, 2),
                w = _step28$value[0],
                C = _step28$value[1];
              d.set(w, C);
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }
          return d;
        }
        function n(u, f) {
          if (!u) return f;
          var d = new Map();
          var _iterator29 = _createForOfIteratorHelper(u),
            _step29;
          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
              var _step29$value = _slicedToArray(_step29.value, 2),
                w = _step29$value[0],
                C = _step29$value[1];
              f.has(w) && d.set(w, C);
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
          return d;
        }
        var s = _N.c.value;
        var o = t.filter(function (u) {
          return !u.startsWith('_') && u in s;
        });
        o.length === 0 && (o = ['_default']);
        var a;
        var _iterator30 = _createForOfIteratorHelper(o),
          _step30;
        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
            var u = _step30.value;
            var f = r(s[u]);
            a = n(a, f);
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
        var l = r(s._common),
          c = i(l, a);
        return new _N(c);
      },
    )),
    (_N.e = new _e(function () {
      return Object.keys(_N.c.value).filter(function (t) {
        return !t.startsWith('_');
      });
    })),
    _N),
  n4 =
    ((_R = /*#__PURE__*/ (function () {
      function R1() {
        _classCallCheck(this, R1);
      }
      return _createClass(R1, null, [
        {
          key: 'c',
          value: function c() {
            return JSON.parse(
              '[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]',
            );
          },
        },
        {
          key: 'e',
          value: function e() {
            return this.d || (this.d = new Set(R1.c())), this.d;
          },
        },
        {
          key: 'isInvisibleCharacter',
          value: function isInvisibleCharacter(t) {
            return R1.e().has(t);
          },
        },
        {
          key: 'containsInvisibleCharacter',
          value: function containsInvisibleCharacter(t) {
            for (var r = 0; r < t.length; r++) {
              var i = t.codePointAt(r);
              if (typeof i == 'number' && R1.isInvisibleCharacter(i)) return !0;
            }
            return !1;
          },
        },
        {
          key: 'codePoints',
          get: function get() {
            return R1.e();
          },
        },
      ]);
    })()),
    (_R.d = void 0),
    _R);
function gr(e) {
  return typeof e == 'string';
}
function vr(e) {
  return _typeof(e) > 'u';
}
function mr(e) {
  return vr(e) || e === null;
}
function c1(e) {
  return e === 47 || e === 92;
}
function ht(e) {
  return e.replace(/[\\/]/g, P.sep);
}
function wr(e) {
  return e.indexOf('/') === -1 && (e = ht(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = '/' + e), e;
}
function dt(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : P.sep;
  if (!e) return '';
  var r = e.length,
    i = e.charCodeAt(0);
  if (c1(i)) {
    if (c1(e.charCodeAt(1)) && !c1(e.charCodeAt(2))) {
      var s = 3;
      var o = s;
      for (; s < r && !c1(e.charCodeAt(s)); s++);
      if (o !== s && !c1(e.charCodeAt(s + 1))) {
        for (s += 1; s < r; s++)
          if (c1(e.charCodeAt(s))) return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (gt(i) && e.charCodeAt(1) === 58)
    return c1(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  var n = e.indexOf('://');
  if (n !== -1) {
    for (n += 3; n < r; n++) if (c1(e.charCodeAt(n))) return e.slice(0, n + 1);
  }
  return '';
}
function Ee(e, t, r) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : X1;
  if (e === t) return !0;
  if (!e || !t || t.length > e.length) return !1;
  if (r) {
    if (!hr(e, t)) return !1;
    if (t.length === e.length) return !0;
    var s = t.length;
    return t.charAt(t.length - 1) === i && s--, e.charAt(s) === i;
  }
  return t.charAt(t.length - 1) !== i && (t += i), e.indexOf(t) === 0;
}
function gt(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function pr(e) {
  var t = nt(e);
  return Q
    ? e.length > 3
      ? !1
      : yr(t) && (e.length === 2 || t.charCodeAt(2) === 92)
    : t === P.sep;
}
function yr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Q;
  return t ? gt(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : !1;
}
var br = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  Ar = 'BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789';
function Cr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  var i = '';
  for (var s = 0; s < r; s++) {
    var o = void 0;
    s === 0 && Q && !t && (r === 3 || r === 4) ? (o = Ar) : (o = br),
      (i += o.charAt(Math.floor(Math.random() * o.length)));
  }
  var n;
  return t ? (n = ''.concat(t, '-').concat(i)) : (n = i), e ? K(e, n) : n;
}
var $r = /^\w[\w\d+.-]*$/,
  _r = /^\//,
  Er = /^\/\//;
function Pr(e, t) {
  if (!e.scheme && t)
    throw new Error(
      '[UriError]: Scheme is missing: {scheme: "", authority: "'
        .concat(e.authority, '", path: "')
        .concat(e.path, '", query: "')
        .concat(e.query, '", fragment: "')
        .concat(e.fragment, '"}'),
    );
  if (e.scheme && !$r.test(e.scheme))
    throw new Error('[UriError]: Scheme contains illegal characters.');
  if (e.path) {
    if (e.authority) {
      if (!_r.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
        );
    } else if (Er.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
      );
  }
}
function Lr(e, t) {
  return !e && !t ? 'file' : e;
}
function xr(e, t) {
  switch (e) {
    case 'https':
    case 'http':
    case 'file':
      t ? t[0] !== Y && (t = Y + t) : (t = Y);
      break;
  }
  return t;
}
var O = '',
  Y = '/',
  Sr = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
  W = /*#__PURE__*/ (function () {
    function ae(t, r, i, n, s) {
      var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      _classCallCheck(this, ae);
      _typeof(t) == 'object'
        ? ((this.scheme = t.scheme || O),
          (this.authority = t.authority || O),
          (this.path = t.path || O),
          (this.query = t.query || O),
          (this.fragment = t.fragment || O))
        : ((this.scheme = Lr(t, o)),
          (this.authority = r || O),
          (this.path = xr(this.scheme, i || O)),
          (this.query = n || O),
          (this.fragment = s || O),
          Pr(this, o));
    }
    return _createClass(
      ae,
      [
        {
          key: 'fsPath',
          get: function get() {
            return G1(this, !1);
          },
        },
        {
          key: 'with',
          value: function _with(t) {
            if (!t) return this;
            var r = t.scheme,
              i = t.authority,
              n = t.path,
              s = t.query,
              o = t.fragment;
            return (
              r === void 0 ? (r = this.scheme) : r === null && (r = O),
              i === void 0 ? (i = this.authority) : i === null && (i = O),
              n === void 0 ? (n = this.path) : n === null && (n = O),
              s === void 0 ? (s = this.query) : s === null && (s = O),
              o === void 0 ? (o = this.fragment) : o === null && (o = O),
              r === this.scheme &&
              i === this.authority &&
              n === this.path &&
              s === this.query &&
              o === this.fragment
                ? this
                : new y1(r, i, n, s, o)
            );
          },
        },
        {
          key: 'toString',
          value: function toString() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            return Pe(this, t);
          },
        },
        {
          key: 'toJSON',
          value: function toJSON() {
            return this;
          },
        },
        {
          key: Symbol['for']('debug.description'),
          value: function value() {
            return 'URI('.concat(this.toString(), ')');
          },
        },
      ],
      [
        {
          key: 'isUri',
          value: function isUri(t) {
            return t instanceof ae
              ? !0
              : t
                ? typeof t.authority == 'string' &&
                  typeof t.fragment == 'string' &&
                  typeof t.path == 'string' &&
                  typeof t.query == 'string' &&
                  typeof t.scheme == 'string' &&
                  typeof t.fsPath == 'string' &&
                  typeof t['with'] == 'function' &&
                  typeof t.toString == 'function'
                : !1;
          },
        },
        {
          key: 'parse',
          value: function parse(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var i = Sr.exec(t);
            return i
              ? new y1(i[2] || O, ee(i[4] || O), ee(i[5] || O), ee(i[7] || O), ee(i[9] || O), r)
              : new y1(O, O, O, O, O);
          },
        },
        {
          key: 'file',
          value: function file(t) {
            var r = O;
            if ((Q && (t = t.replace(/\\/g, Y)), t[0] === Y && t[1] === Y)) {
              var i = t.indexOf(Y, 2);
              i === -1
                ? ((r = t.substring(2)), (t = Y))
                : ((r = t.substring(2, i)), (t = t.substring(i) || Y));
            }
            return new y1('file', r, t, O, O);
          },
        },
        {
          key: 'from',
          value: function from(t, r) {
            return new y1(t.scheme, t.authority, t.path, t.query, t.fragment, r);
          },
        },
        {
          key: 'joinPath',
          value: function joinPath(t) {
            if (!t.path) throw new Error('[UriError]: cannot call joinPath on URI without path');
            var i;
            for (
              var _len5 = arguments.length, r = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1;
              _key5 < _len5;
              _key5++
            ) {
              r[_key5 - 1] = arguments[_key5];
            }
            return (
              Q && t.scheme === 'file'
                ? (i = ae.file(I.join.apply(I, [G1(t, !0)].concat(r))).path)
                : (i = P.join.apply(P, [t.path].concat(r))),
              t['with']({
                path: i,
              })
            );
          },
        },
        {
          key: 'revive',
          value: function revive(t) {
            if (t) {
              if (t instanceof ae) return t;
              {
                var _t$external, _t$fsPath;
                var r = new y1(t);
                return (
                  (r._formatted =
                    (_t$external = t.external) !== null && _t$external !== void 0
                      ? _t$external
                      : null),
                  (r._fsPath =
                    t._sep === vt
                      ? (_t$fsPath = t.fsPath) !== null && _t$fsPath !== void 0
                        ? _t$fsPath
                        : null
                      : null),
                  r
                );
              }
            } else return t;
          },
        },
      ],
    );
  })(),
  vt = Q ? 1 : void 0,
  y1 = /*#__PURE__*/ (function (_W) {
    function y1() {
      var _this15;
      _classCallCheck(this, y1);
      (_this15 = _callSuper(this, y1, arguments)),
        (_this15._formatted = null),
        (_this15._fsPath = null);
      return _this15;
    }
    _inherits(y1, _W);
    return _createClass(y1, [
      {
        key: 'fsPath',
        get: function get() {
          return this._fsPath || (this._fsPath = G1(this, !1)), this._fsPath;
        },
      },
      {
        key: 'toString',
        value: function toString() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          return e
            ? Pe(this, !0)
            : (this._formatted || (this._formatted = Pe(this, !1)), this._formatted);
        },
      },
      {
        key: 'toJSON',
        value: function toJSON() {
          var e = {
            $mid: 1,
          };
          return (
            this._fsPath && ((e.fsPath = this._fsPath), (e._sep = vt)),
            this._formatted && (e.external = this._formatted),
            this.path && (e.path = this.path),
            this.scheme && (e.scheme = this.scheme),
            this.authority && (e.authority = this.authority),
            this.query && (e.query = this.query),
            this.fragment && (e.fragment = this.fragment),
            e
          );
        },
      },
    ]);
  })(W),
  mt = {
    58: '%3A',
    47: '%2F',
    63: '%3F',
    35: '%23',
    91: '%5B',
    93: '%5D',
    64: '%40',
    33: '%21',
    36: '%24',
    38: '%26',
    39: '%27',
    40: '%28',
    41: '%29',
    42: '%2A',
    43: '%2B',
    44: '%2C',
    59: '%3B',
    61: '%3D',
    32: '%20',
  };
function wt(e, t, r) {
  var i,
    n = -1;
  for (var s = 0; s < e.length; s++) {
    var o = e.charCodeAt(s);
    if (
      (o >= 97 && o <= 122) ||
      (o >= 65 && o <= 90) ||
      (o >= 48 && o <= 57) ||
      o === 45 ||
      o === 46 ||
      o === 95 ||
      o === 126 ||
      (t && o === 47) ||
      (r && o === 91) ||
      (r && o === 93) ||
      (r && o === 58)
    )
      n !== -1 && ((i += encodeURIComponent(e.substring(n, s))), (n = -1)),
        i !== void 0 && (i += e.charAt(s));
    else {
      i === void 0 && (i = e.substr(0, s));
      var a = mt[o];
      a !== void 0
        ? (n !== -1 && ((i += encodeURIComponent(e.substring(n, s))), (n = -1)), (i += a))
        : n === -1 && (n = s);
    }
  }
  return n !== -1 && (i += encodeURIComponent(e.substring(n))), i !== void 0 ? i : e;
}
function kr(e) {
  var t;
  for (var r = 0; r < e.length; r++) {
    var i = e.charCodeAt(r);
    i === 35 || i === 63
      ? (t === void 0 && (t = e.substr(0, r)), (t += mt[i]))
      : t !== void 0 && (t += e[r]);
  }
  return t !== void 0 ? t : e;
}
function G1(e, t) {
  var r;
  return (
    e.authority && e.path.length > 1 && e.scheme === 'file'
      ? (r = '//'.concat(e.authority).concat(e.path))
      : e.path.charCodeAt(0) === 47 &&
          ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
            (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
          e.path.charCodeAt(2) === 58
        ? t
          ? (r = e.path.substr(1))
          : (r = e.path[1].toLowerCase() + e.path.substr(2))
        : (r = e.path),
    Q && (r = r.replace(/\//g, '\\')),
    r
  );
}
function Pe(e, t) {
  var r = t ? kr : wt;
  var i = '',
    n = e.scheme,
    s = e.authority,
    o = e.path,
    a = e.query,
    l = e.fragment;
  if ((n && ((i += n), (i += ':')), (s || n === 'file') && ((i += Y), (i += Y)), s)) {
    var c = s.indexOf('@');
    if (c !== -1) {
      var u = s.substr(0, c);
      (s = s.substr(c + 1)),
        (c = u.lastIndexOf(':')),
        c === -1
          ? (i += r(u, !1, !1))
          : ((i += r(u.substr(0, c), !1, !1)), (i += ':'), (i += r(u.substr(c + 1), !1, !0))),
        (i += '@');
    }
    (s = s.toLowerCase()),
      (c = s.lastIndexOf(':')),
      c === -1 ? (i += r(s, !1, !0)) : ((i += r(s.substr(0, c), !1, !0)), (i += s.substr(c)));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      var _c3 = o.charCodeAt(1);
      _c3 >= 65 &&
        _c3 <= 90 &&
        (o = '/'.concat(String.fromCharCode(_c3 + 32), ':').concat(o.substr(3)));
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      var _c4 = o.charCodeAt(0);
      _c4 >= 65 &&
        _c4 <= 90 &&
        (o = ''.concat(String.fromCharCode(_c4 + 32), ':').concat(o.substr(2)));
    }
    i += r(o, !0, !1);
  }
  return a && ((i += '?'), (i += r(a, !1, !1))), l && ((i += '#'), (i += t ? l : wt(l, !1, !1))), i;
}
function pt(e) {
  try {
    return decodeURIComponent(e);
  } catch (_unused4) {
    return e.length > 3 ? e.substr(0, 3) + pt(e.substr(3)) : e;
  }
}
var yt = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function ee(e) {
  return e.match(yt)
    ? e.replace(yt, function (t) {
        return pt(t);
      })
    : e;
}
var N;
(function (e) {
  (e.inMemory = 'inmemory'),
    (e.vscode = 'vscode'),
    (e.internal = 'private'),
    (e.walkThrough = 'walkThrough'),
    (e.walkThroughSnippet = 'walkThroughSnippet'),
    (e.http = 'http'),
    (e.https = 'https'),
    (e.file = 'file'),
    (e.mailto = 'mailto'),
    (e.untitled = 'untitled'),
    (e.data = 'data'),
    (e.command = 'command'),
    (e.vscodeRemote = 'vscode-remote'),
    (e.vscodeRemoteResource = 'vscode-remote-resource'),
    (e.vscodeManagedRemoteResource = 'vscode-managed-remote-resource'),
    (e.vscodeUserData = 'vscode-userdata'),
    (e.vscodeCustomEditor = 'vscode-custom-editor'),
    (e.vscodeNotebook = 'vscode-notebook'),
    (e.vscodeNotebookCell = 'vscode-notebook-cell'),
    (e.vscodeNotebookCellMetadata = 'vscode-notebook-cell-metadata'),
    (e.vscodeNotebookCellMetadataDiff = 'vscode-notebook-cell-metadata-diff'),
    (e.vscodeNotebookCellOutput = 'vscode-notebook-cell-output'),
    (e.vscodeNotebookCellOutputDiff = 'vscode-notebook-cell-output-diff'),
    (e.vscodeNotebookMetadata = 'vscode-notebook-metadata'),
    (e.vscodeInteractiveInput = 'vscode-interactive-input'),
    (e.vscodeSettings = 'vscode-settings'),
    (e.vscodeWorkspaceTrust = 'vscode-workspace-trust'),
    (e.vscodeTerminal = 'vscode-terminal'),
    (e.vscodeChatCodeBlock = 'vscode-chat-code-block'),
    (e.vscodeChatCodeCompareBlock = 'vscode-chat-code-compare-block'),
    (e.vscodeChatSesssion = 'vscode-chat-editor'),
    (e.webviewPanel = 'webview-panel'),
    (e.vscodeWebview = 'vscode-webview'),
    (e.extension = 'extension'),
    (e.aiChat = 'cursor.aichat'),
    (e.notepad = 'cursor.notepad'),
    (e.contextObject = 'cursor.context-object'),
    (e.composer = 'cursor.composer'),
    (e.aiSettings = 'cursor.aisettings'),
    (e.tinderDiffEditor = 'cursor.tinderdiffeditor'),
    (e.vscodeFileResource = 'vscode-file'),
    (e.tmp = 'tmp'),
    (e.vsls = 'vsls'),
    (e.vscodeSourceControl = 'vscode-scm'),
    (e.commentsInput = 'comment'),
    (e.codeSetting = 'code-setting'),
    (e.cursorDev = 'cursor-dev'),
    (e.outputChannel = 'output'),
    (e.accessibleView = 'accessible-view'),
    (e.backgroundComposer = 'cursor.backgroundcomposer'),
    (e.bugbot = 'cursor.bugbot');
})(N || (N = {}));
var Or = 'tkn',
  Dr = /*#__PURE__*/ (function () {
    function Dr() {
      _classCallCheck(this, Dr);
      (this.a = Object.create(null)),
        (this.b = Object.create(null)),
        (this.c = Object.create(null)),
        (this.d = 'http'),
        (this.e = null),
        (this.f = '/');
    }
    return _createClass(Dr, [
      {
        key: 'setPreferredWebSchema',
        value: function setPreferredWebSchema(e) {
          this.d = e;
        },
      },
      {
        key: 'setDelegate',
        value: function setDelegate(e) {
          this.e = e;
        },
      },
      {
        key: 'setServerRootPath',
        value: function setServerRootPath(e, t) {
          this.f = jr(e, t);
        },
      },
      {
        key: 'getServerRootPath',
        value: function getServerRootPath() {
          return this.f;
        },
      },
      {
        key: 'g',
        get: function get() {
          return P.join(this.f, N.vscodeRemoteResource);
        },
      },
      {
        key: 'set',
        value: function set(e, t, r) {
          (this.a[e] = t), (this.b[e] = r);
        },
      },
      {
        key: 'setConnectionToken',
        value: function setConnectionToken(e, t) {
          this.c[e] = t;
        },
      },
      {
        key: 'getPreferredWebSchema',
        value: function getPreferredWebSchema() {
          return this.d;
        },
      },
      {
        key: 'rewrite',
        value: function rewrite(e) {
          if (this.e)
            try {
              return this.e(e);
            } catch (o) {
              return F1(o), e;
            }
          var t = e.authority;
          var r = this.a[t];
          r && r.indexOf(':') !== -1 && r.indexOf('[') === -1 && (r = '['.concat(r, ']'));
          var i = this.b[t],
            n = this.c[t];
          var s = 'path='.concat(encodeURIComponent(e.path));
          return (
            typeof n == 'string' && (s += '&'.concat(Or, '=').concat(encodeURIComponent(n))),
            W.from({
              scheme: W2 ? this.d : N.vscodeRemoteResource,
              authority: ''.concat(r, ':').concat(i),
              path: this.g,
              query: s,
            })
          );
        },
      },
    ]);
  })(),
  Ir = new Dr();
function jr(e, t) {
  var _e$quality, _e$commit;
  return P.join(
    t !== null && t !== void 0 ? t : '/',
    ''
      .concat((_e$quality = e.quality) !== null && _e$quality !== void 0 ? _e$quality : 'oss', '-')
      .concat((_e$commit = e.commit) !== null && _e$commit !== void 0 ? _e$commit : 'dev'),
  );
}
var Mr = 'vscode-app',
  Nr =
    ((_ce = /*#__PURE__*/ (function () {
      function ce() {
        _classCallCheck(this, ce);
      }
      return _createClass(ce, [
        {
          key: 'asBrowserUri',
          value: function asBrowserUri(t) {
            var r = this.b(t);
            return this.uriToBrowserUri(r);
          },
        },
        {
          key: 'uriToBrowserUri',
          value: function uriToBrowserUri(t) {
            return t.scheme === N.vscodeRemote
              ? Ir.rewrite(t)
              : t.scheme === N.file &&
                  (q2 || V2 === ''.concat(N.vscodeFileResource, '://').concat(ce.a))
                ? t['with']({
                    scheme: N.vscodeFileResource,
                    authority: t.authority || ce.a,
                    query: null,
                    fragment: null,
                  })
                : t;
          },
        },
        {
          key: 'asFileUri',
          value: function asFileUri(t) {
            var r = this.b(t);
            return this.uriToFileUri(r);
          },
        },
        {
          key: 'uriToFileUri',
          value: function uriToFileUri(t) {
            return t.scheme === N.vscodeFileResource
              ? t['with']({
                  scheme: N.file,
                  authority: t.authority !== ce.a ? t.authority : null,
                  query: null,
                  fragment: null,
                })
              : t;
          },
        },
        {
          key: 'b',
          value: function b(t, r) {
            if (W.isUri(t)) return t;
            if (globalThis._VSCODE_FILE_ROOT) {
              var i = globalThis._VSCODE_FILE_ROOT;
              if (/^\w[\w\d+.-]*:\/\//.test(i)) return W.joinPath(W.parse(i, !0), t);
              var n = K(i, t);
              return W.file(n);
            }
            return W.parse(r.toUrl(t));
          },
        },
      ]);
    })()),
    (_ce.a = Mr),
    _ce),
  s4 = new Nr(),
  bt;
(function (e) {
  var t = new Map([
    [
      '1',
      {
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    ],
    [
      '2',
      {
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
    ],
    [
      '3',
      {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
    ],
  ]);
  e.CoopAndCoep = Object.freeze(t.get('3'));
  var r = 'vscode-coi';
  function i(s) {
    var _o;
    var o;
    typeof s == 'string'
      ? (o = new URL(s).searchParams)
      : s instanceof URL
        ? (o = s.searchParams)
        : W.isUri(s) && (o = new URL(s.toString(!0)).searchParams);
    var a = (_o = o) === null || _o === void 0 ? void 0 : _o.get(r);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = i;
  function n(s, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    var l = o && a ? '3' : a ? '2' : '1';
    s instanceof URLSearchParams ? s.set(r, l) : (s[r] = l);
  }
  e.addSearchParam = n;
})(bt || (bt = {}));
function r1(e) {
  return G1(e, !0);
}
var Le = /*#__PURE__*/ (function () {
    function Le(e) {
      _classCallCheck(this, Le);
      this.a = e;
    }
    return _createClass(Le, [
      {
        key: 'compare',
        value: function compare(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return e === t ? 0 : lr(this.getComparisonKey(e, r), this.getComparisonKey(t, r));
        },
      },
      {
        key: 'isEqual',
        value: function isEqual(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return e === t
            ? !0
            : !e || !t
              ? !1
              : this.getComparisonKey(e, r) === this.getComparisonKey(t, r);
        },
      },
      {
        key: 'getComparisonKey',
        value: function getComparisonKey(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          return e['with']({
            path: this.a(e) ? e.path.toLowerCase() : void 0,
            fragment: t ? null : void 0,
          }).toString();
        },
      },
      {
        key: 'ignorePathCasing',
        value: function ignorePathCasing(e) {
          return this.a(e);
        },
      },
      {
        key: 'isEqualOrParent',
        value: function isEqualOrParent(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          if (e.scheme === t.scheme) {
            if (e.scheme === N.file)
              return (
                Ee(r1(e), r1(t), this.a(e)) &&
                e.query === t.query &&
                (r || e.fragment === t.fragment)
              );
            if (At(e.authority, t.authority))
              return (
                Ee(e.path, t.path, this.a(e), '/') &&
                e.query === t.query &&
                (r || e.fragment === t.fragment)
              );
          }
          return !1;
        },
      },
      {
        key: 'joinPath',
        value: function joinPath(e) {
          for (
            var _len6 = arguments.length, t = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1;
            _key6 < _len6;
            _key6++
          ) {
            t[_key6 - 1] = arguments[_key6];
          }
          return W.joinPath.apply(W, [e].concat(t));
        },
      },
      {
        key: 'basenameOrAuthority',
        value: function basenameOrAuthority(e) {
          return Tr(e) || e.authority;
        },
      },
      {
        key: 'basename',
        value: function basename(e) {
          return P.basename(e.path);
        },
      },
      {
        key: 'extname',
        value: function extname(e) {
          return P.extname(e.path);
        },
      },
      {
        key: 'dirname',
        value: function dirname(e) {
          if (e.path.length === 0) return e;
          var t;
          return (
            e.scheme === N.file
              ? (t = W.file(ot(r1(e))).path)
              : ((t = P.dirname(e.path)),
                e.authority &&
                  t.length &&
                  t.charCodeAt(0) !== 47 &&
                  (console.error('dirname("'.concat(e.toString, ')) resulted in a relative path')),
                  (t = '/'))),
            e['with']({
              path: t,
            })
          );
        },
      },
      {
        key: 'normalizePath',
        value: function normalizePath(e) {
          if (!e.path.length) return e;
          var t;
          return (
            e.scheme === N.file ? (t = W.file(nt(r1(e))).path) : (t = P.normalize(e.path)),
            e['with']({
              path: t,
            })
          );
        },
      },
      {
        key: 'relativePath',
        value: function relativePath(e, t) {
          if (e.scheme !== t.scheme || !At(e.authority, t.authority)) return;
          if (e.scheme === N.file) {
            var n = sr(r1(e), r1(t));
            return Q ? ht(n) : n;
          }
          var r = e.path || '/';
          var i = t.path || '/';
          if (this.a(e)) {
            var _n2 = 0;
            for (
              var s = Math.min(r.length, i.length);
              _n2 < s &&
              !(
                r.charCodeAt(_n2) !== i.charCodeAt(_n2) &&
                r.charAt(_n2).toLowerCase() !== i.charAt(_n2).toLowerCase()
              );
              _n2++
            );
            r = i.substr(0, _n2) + r.substr(_n2);
          }
          return P.relative(r, i);
        },
      },
      {
        key: 'resolvePath',
        value: function resolvePath(e, t) {
          if (e.scheme === N.file) {
            var r = W.file(nr(r1(e), t));
            return e['with']({
              authority: r.authority,
              path: r.path,
            });
          }
          return (
            (t = wr(t)),
            e['with']({
              path: P.resolve(e.path, t),
            })
          );
        },
      },
      {
        key: 'isAbsolutePath',
        value: function isAbsolutePath(e) {
          return !!e.path && e.path[0] === '/';
        },
      },
      {
        key: 'isEqualAuthority',
        value: function isEqualAuthority(e, t) {
          return e === t || (e !== void 0 && t !== void 0 && ur(e, t));
        },
      },
      {
        key: 'hasTrailingPathSeparator',
        value: function hasTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : X1;
          if (e.scheme === N.file) {
            var r = r1(e);
            return r.length > dt(r).length && r[r.length - 1] === t;
          } else {
            var _r3 = e.path;
            return (
              _r3.length > 1 &&
              _r3.charCodeAt(_r3.length - 1) === 47 &&
              !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath)
            );
          }
        },
      },
      {
        key: 'removeTrailingPathSeparator',
        value: function removeTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : X1;
          return Ct(e, t)
            ? e['with']({
                path: e.path.substr(0, e.path.length - 1),
              })
            : e;
        },
      },
      {
        key: 'addTrailingPathSeparator',
        value: function addTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : X1;
          var r = !1;
          if (e.scheme === N.file) {
            var i = r1(e);
            r = i !== void 0 && i.length === dt(i).length && i[i.length - 1] === t;
          } else {
            t = '/';
            var _i7 = e.path;
            r = _i7.length === 1 && _i7.charCodeAt(_i7.length - 1) === 47;
          }
          return !r && !Ct(e, t)
            ? e['with']({
                path: e.path + '/',
              })
            : e;
        },
      },
    ]);
  })(),
  $ = new Le(function () {
    return !1;
  }),
  Rr = new Le(function (e) {
    return e.scheme === N.file ? !Ge : !0;
  }),
  o4 = new Le(function (e) {
    return !0;
  }),
  a4 = $.isEqual.bind($),
  c4 = $.isEqualOrParent.bind($),
  l4 = $.getComparisonKey.bind($),
  f4 = $.basenameOrAuthority.bind($),
  Tr = $.basename.bind($),
  u4 = $.extname.bind($),
  h4 = $.dirname.bind($),
  d4 = $.joinPath.bind($),
  g4 = $.normalizePath.bind($),
  v4 = $.relativePath.bind($),
  m4 = $.resolvePath.bind($),
  w4 = $.isAbsolutePath.bind($),
  At = $.isEqualAuthority.bind($),
  Ct = $.hasTrailingPathSeparator.bind($),
  p4 = $.removeTrailingPathSeparator.bind($),
  y4 = $.addTrailingPathSeparator.bind($),
  $t;
(function (e) {
  (e.META_DATA_LABEL = 'label'),
    (e.META_DATA_DESCRIPTION = 'description'),
    (e.META_DATA_SIZE = 'size'),
    (e.META_DATA_MIME = 'mime');
  function t(r) {
    var i = new Map();
    r.path
      .substring(r.path.indexOf(';') + 1, r.path.lastIndexOf(';'))
      .split(';')
      .forEach(function (o) {
        var _o$split = o.split(':'),
          _o$split2 = _slicedToArray(_o$split, 2),
          a = _o$split2[0],
          l = _o$split2[1];
        a && l && i.set(a, l);
      });
    var s = r.path.substring(0, r.path.indexOf(';'));
    return s && i.set(e.META_DATA_MIME, s), i;
  }
  e.parseMetaData = t;
})($t || ($t = {}));
var b4 = Symbol('MicrotaskDelay');
function xe(e) {
  var t = new Ke(),
    r = e(t.token),
    i = new Promise(function (n, s) {
      var o = t.token.onCancellationRequested(function () {
        o.dispose(), s(new i1());
      });
      Promise.resolve(r).then(
        function (a) {
          o.dispose(), t.dispose(), n(a);
        },
        function (a) {
          o.dispose(), t.dispose(), s(a);
        },
      );
    });
  return new /*#__PURE__*/ ((function () {
    function _class2() {
      _classCallCheck(this, _class2);
    }
    return _createClass(_class2, [
      {
        key: 'cancel',
        value: function cancel() {
          t.cancel(), t.dispose();
        },
      },
      {
        key: 'then',
        value: function then(n, s) {
          return i.then(n, s);
        },
      },
      {
        key: 'catch',
        value: function _catch(n) {
          return this.then(void 0, n);
        },
      },
      {
        key: 'finally',
        value: function _finally(n) {
          return i['finally'](n);
        },
      },
    ]);
  })())();
}
function _t(e, t) {
  return t
    ? new Promise(function (r, i) {
        var n = setTimeout(function () {
            s.dispose(), r();
          }, e),
          s = t.onCancellationRequested(function () {
            clearTimeout(n), s.dispose(), i(new i1());
          });
      })
    : xe(function (r) {
        return _t(e, r);
      });
}
var Ur = /*#__PURE__*/ (function () {
    function Ur(e) {
      _classCallCheck(this, Ur);
      (this.a = 0), (this.b = !1), (this.f = e), (this.g = []), (this.d = 0), (this.h = new H());
    }
    return _createClass(Ur, [
      {
        key: 'whenIdle',
        value: function whenIdle() {
          return this.size > 0 ? Z.toPromise(this.onDrained) : Promise.resolve();
        },
      },
      {
        key: 'onDrained',
        get: function get() {
          return this.h.event;
        },
      },
      {
        key: 'size',
        get: function get() {
          return this.a;
        },
      },
      {
        key: 'queue',
        value: function queue(e) {
          var _this16 = this;
          if (this.b) throw new Error('Object has been disposed');
          return (
            this.a++,
            new Promise(function (t, r) {
              _this16.g.push({
                factory: e,
                c: t,
                e: r,
              }),
                _this16.j();
            })
          );
        },
      },
      {
        key: 'j',
        value: function j() {
          var _this17 = this;
          for (; this.g.length && this.d < this.f; ) {
            var _e9 = this.g.shift();
            this.d++;
            var _t3 = _e9.factory();
            _t3.then(_e9.c, _e9.e),
              _t3.then(
                function () {
                  return _this17.k();
                },
                function () {
                  return _this17.k();
                },
              );
          }
        },
      },
      {
        key: 'k',
        value: function k() {
          this.b || (this.d--, --this.a === 0 && this.h.fire(), this.g.length > 0 && this.j());
        },
      },
      {
        key: 'clear',
        value: function clear() {
          if (this.b) throw new Error('Object has been disposed');
          (this.g.length = 0), (this.a = this.d);
        },
      },
      {
        key: 'dispose',
        value: function dispose() {
          (this.b = !0), (this.g.length = 0), (this.a = 0), this.h.dispose();
        },
      },
    ]);
  })(),
  zr = /*#__PURE__*/ (function (_Ur) {
    function zr() {
      _classCallCheck(this, zr);
      return _callSuper(this, zr, [1]);
    }
    _inherits(zr, _Ur);
    return _createClass(zr);
  })(Ur),
  Fr = /*#__PURE__*/ (function () {
    function Fr() {
      _classCallCheck(this, Fr);
      (this.a = new Map()), (this.b = new Set()), (this.d = void 0), (this.f = 0);
    }
    return _createClass(Fr, [
      {
        key: 'whenDrained',
        value: (function () {
          var _whenDrained = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
              var e;
              return _regeneratorRuntime().wrap(
                function _callee3$(_context13) {
                  while (1)
                    switch ((_context13.prev = _context13.next)) {
                      case 0:
                        if (!this.g()) {
                          _context13.next = 2;
                          break;
                        }
                        return _context13.abrupt('return');
                      case 2:
                        e = new Wr();
                        return _context13.abrupt('return', (this.b.add(e), e.p));
                      case 4:
                      case 'end':
                        return _context13.stop();
                    }
                },
                _callee3,
                this,
              );
            }),
          );
          function whenDrained() {
            return _whenDrained.apply(this, arguments);
          }
          return whenDrained;
        })(),
      },
      {
        key: 'g',
        value: function g() {
          var _iterator31 = _createForOfIteratorHelper(this.a),
            _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
              var _step31$value = _slicedToArray(_step31.value, 2),
                _e0 = _step31$value[1];
              if (_e0.size > 0) return !1;
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
          return !0;
        },
      },
      {
        key: 'queueSize',
        value: function queueSize(e) {
          var _this$a$get$size, _this$a$get3;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $;
          var r = t.getComparisonKey(e);
          return (_this$a$get$size =
            (_this$a$get3 = this.a.get(r)) === null || _this$a$get3 === void 0
              ? void 0
              : _this$a$get3.size) !== null && _this$a$get$size !== void 0
            ? _this$a$get$size
            : 0;
        },
      },
      {
        key: 'queueFor',
        value: function queueFor(e, t) {
          var _this18 = this;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $;
          var i = r.getComparisonKey(e);
          var n = this.a.get(i);
          if (!n) {
            n = new zr();
            var s = this.f++,
              o = Z.once(n.onDrained)(function () {
                var _n3, _this18$d, _this18$d2;
                (_n3 = n) !== null && _n3 !== void 0 && _n3.dispose(),
                  _this18.a['delete'](i),
                  _this18.h(),
                  (_this18$d = _this18.d) !== null &&
                    _this18$d !== void 0 &&
                    _this18$d.deleteAndDispose(s),
                  ((_this18$d2 = _this18.d) === null || _this18$d2 === void 0
                    ? void 0
                    : _this18$d2.size) === 0 && (_this18.d.dispose(), (_this18.d = void 0));
              });
            this.d || (this.d = new C2()), this.d.set(s, o), this.a.set(i, n);
          }
          return n.queue(t);
        },
      },
      {
        key: 'h',
        value: function h() {
          this.g() && this.j();
        },
      },
      {
        key: 'j',
        value: function j() {
          var _iterator32 = _createForOfIteratorHelper(this.b),
            _step32;
          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
              var _e1 = _step32.value;
              _e1.complete();
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }
          this.b.clear();
        },
      },
      {
        key: 'dispose',
        value: function dispose() {
          var _this$d2;
          var _iterator33 = _createForOfIteratorHelper(this.a),
            _step33;
          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
              var _step33$value = _slicedToArray(_step33.value, 2),
                _e10 = _step33$value[1];
              _e10.dispose();
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }
          this.a.clear(),
            this.j(),
            (_this$d2 = this.d) === null || _this$d2 === void 0 ? void 0 : _this$d2.dispose();
        },
      },
    ]);
  })(),
  qr,
  Se;
(function () {
  typeof globalThis.requestIdleCallback != 'function' ||
  typeof globalThis.cancelIdleCallback != 'function'
    ? (Se = function Se(e, t, r) {
        K2(function () {
          if (i) return;
          var n = Date.now() + 15;
          t(
            Object.freeze({
              didTimeout: !0,
              timeRemaining: function timeRemaining() {
                return Math.max(0, n - Date.now());
              },
            }),
          );
        });
        var i = !1;
        return {
          dispose: function dispose() {
            i || (i = !0);
          },
        };
      })
    : (Se = function Se(e, t, r) {
        var i = e.requestIdleCallback(
          t,
          typeof r == 'number'
            ? {
                timeout: r,
              }
            : void 0,
        );
        var n = !1;
        return {
          dispose: function dispose() {
            n || ((n = !0), e.cancelIdleCallback(i));
          },
        };
      }),
    (qr = function qr(e, t) {
      return Se(globalThis, e, t);
    });
})();
var Et;
(function (e) {
  (e[(e.Resolved = 0)] = 'Resolved'), (e[(e.Rejected = 1)] = 'Rejected');
})(Et || (Et = {}));
var Wr = /*#__PURE__*/ (function () {
    function Wr() {
      var _this19 = this;
      _classCallCheck(this, Wr);
      this.p = new Promise(function (e, t) {
        (_this19.a = e), (_this19.b = t);
      });
    }
    return _createClass(Wr, [
      {
        key: 'isRejected',
        get: function get() {
          var _this$d3;
          return (
            ((_this$d3 = this.d) === null || _this$d3 === void 0 ? void 0 : _this$d3.outcome) === 1
          );
        },
      },
      {
        key: 'isResolved',
        get: function get() {
          var _this$d4;
          return (
            ((_this$d4 = this.d) === null || _this$d4 === void 0 ? void 0 : _this$d4.outcome) === 0
          );
        },
      },
      {
        key: 'isSettled',
        get: function get() {
          return !!this.d;
        },
      },
      {
        key: 'value',
        get: function get() {
          var _this$d5, _this$d6;
          return ((_this$d5 = this.d) === null || _this$d5 === void 0
            ? void 0
            : _this$d5.outcome) === 0
            ? (_this$d6 = this.d) === null || _this$d6 === void 0
              ? void 0
              : _this$d6.value
            : void 0;
        },
      },
      {
        key: 'complete',
        value: function complete(e) {
          var _this20 = this;
          return new Promise(function (t) {
            _this20.a(e),
              (_this20.d = {
                outcome: 0,
                value: e,
              }),
              t();
          });
        },
      },
      {
        key: 'error',
        value: function error(e) {
          var _this21 = this;
          return new Promise(function (t) {
            _this21.b(e),
              (_this21.d = {
                outcome: 1,
                value: e,
              }),
              t();
          });
        },
      },
      {
        key: 'cancel',
        value: function cancel() {
          return this.error(new i1());
        },
      },
    ]);
  })(),
  Pt;
(function (e) {
  function t(_x2) {
    return _t4.apply(this, arguments);
  }
  function _t4() {
    _t4 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(i) {
        var n, s;
        return _regeneratorRuntime().wrap(function _callee5$(_context15) {
          while (1)
            switch ((_context15.prev = _context15.next)) {
              case 0:
                _context15.next = 2;
                return Promise.all(
                  i.map(function (o) {
                    return o.then(
                      function (a) {
                        return a;
                      },
                      function (a) {
                        n || (n = a);
                      },
                    );
                  }),
                );
              case 2:
                s = _context15.sent;
                if (!(_typeof(n) < 'u')) {
                  _context15.next = 5;
                  break;
                }
                throw n;
              case 5:
                return _context15.abrupt('return', s);
              case 6:
              case 'end':
                return _context15.stop();
            }
        }, _callee5);
      }),
    );
    return _t4.apply(this, arguments);
  }
  e.settled = t;
  function r(i) {
    return new Promise(
      /*#__PURE__*/ (function () {
        var _ref9 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(n, s) {
            return _regeneratorRuntime().wrap(
              function _callee4$(_context14) {
                while (1)
                  switch ((_context14.prev = _context14.next)) {
                    case 0:
                      _context14.prev = 0;
                      _context14.next = 3;
                      return i(n, s);
                    case 3:
                      _context14.next = 8;
                      break;
                    case 5:
                      _context14.prev = 5;
                      _context14.t0 = _context14['catch'](0);
                      s(_context14.t0);
                    case 8:
                    case 'end':
                      return _context14.stop();
                  }
              },
              _callee4,
              null,
              [[0, 5]],
            );
          }),
        );
        return function (_x3, _x4) {
          return _ref9.apply(this, arguments);
        };
      })(),
    );
  }
  e.withAsyncBody = r;
})(Pt || (Pt = {}));
var Lt;
(function (e) {
  (e[(e.Initial = 0)] = 'Initial'),
    (e[(e.DoneOK = 1)] = 'DoneOK'),
    (e[(e.DoneError = 2)] = 'DoneError');
})(Lt || (Lt = {}));
var A4 =
  ((_V2 = /*#__PURE__*/ (function () {
    function V(t, r) {
      var _this22 = this;
      _classCallCheck(this, V);
      (this.a = 0),
        (this.b = []),
        (this.d = null),
        (this.f = r),
        (this.g = new H()),
        queueMicrotask(
          /*#__PURE__*/ _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
              var i;
              return _regeneratorRuntime().wrap(
                function _callee6$(_context16) {
                  while (1)
                    switch ((_context16.prev = _context16.next)) {
                      case 0:
                        i = {
                          emitOne: function emitOne(n) {
                            return _this22.h(n);
                          },
                          emitMany: function emitMany(n) {
                            return _this22.j(n);
                          },
                          reject: function reject(n) {
                            return _this22.l(n);
                          },
                        };
                        _context16.prev = 1;
                        _context16.next = 4;
                        return Promise.resolve(t(i));
                      case 4:
                        _this22.k();
                        _context16.next = 10;
                        break;
                      case 7:
                        _context16.prev = 7;
                        _context16.t0 = _context16['catch'](1);
                        _this22.l(_context16.t0);
                      case 10:
                        _context16.prev = 10;
                        (i.emitOne = void 0), (i.emitMany = void 0), (i.reject = void 0);
                        return _context16.finish(10);
                      case 13:
                      case 'end':
                        return _context16.stop();
                    }
                },
                _callee6,
                null,
                [[1, 7, 10, 13]],
              );
            }),
          ),
        );
    }
    return _createClass(
      V,
      [
        {
          key: Symbol.asyncIterator,
          value: function value() {
            var _this23 = this;
            var t = 0;
            return {
              next: (function () {
                var _next2 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7() {
                    return _regeneratorRuntime().wrap(function _callee7$(_context17) {
                      while (1)
                        switch ((_context17.prev = _context17.next)) {
                          case 0:
                            if (!(_this23.a === 2)) {
                              _context17.next = 2;
                              break;
                            }
                            throw _this23.d;
                          case 2:
                            if (!(t < _this23.b.length)) {
                              _context17.next = 4;
                              break;
                            }
                            return _context17.abrupt('return', {
                              done: !1,
                              value: _this23.b[t++],
                            });
                          case 4:
                            if (!(_this23.a === 1)) {
                              _context17.next = 6;
                              break;
                            }
                            return _context17.abrupt('return', {
                              done: !0,
                              value: void 0,
                            });
                          case 6:
                            _context17.next = 8;
                            return Z.toPromise(_this23.g.event);
                          case 8:
                            if (!0) {
                              _context17.next = 0;
                              break;
                            }
                          case 9:
                          case 'end':
                            return _context17.stop();
                        }
                    }, _callee7);
                  }),
                );
                function next() {
                  return _next2.apply(this, arguments);
                }
                return next;
              })(),
              return: (function () {
                var _return2 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8() {
                    var _this23$f;
                    return _regeneratorRuntime().wrap(function _callee8$(_context18) {
                      while (1)
                        switch ((_context18.prev = _context18.next)) {
                          case 0:
                            return _context18.abrupt(
                              'return',
                              ((_this23$f = _this23.f) !== null &&
                                _this23$f !== void 0 &&
                                _this23$f.call(_this23),
                              {
                                done: !0,
                                value: void 0,
                              }),
                            );
                          case 1:
                          case 'end':
                            return _context18.stop();
                        }
                    }, _callee8);
                  }),
                );
                function _return() {
                  return _return2.apply(this, arguments);
                }
                return _return;
              })(),
            };
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return V.map(this, t);
          },
        },
        {
          key: 'filter',
          value: function filter(t) {
            return V.filter(this, t);
          },
        },
        {
          key: 'coalesce',
          value: function coalesce() {
            return V.coalesce(this);
          },
        },
        {
          key: 'toPromise',
          value: function toPromise() {
            return V.toPromise(this);
          },
        },
        {
          key: 'h',
          value: function h(t) {
            this.a === 0 && (this.b.push(t), this.g.fire());
          },
        },
        {
          key: 'j',
          value: function j(t) {
            this.a === 0 && ((this.b = this.b.concat(t)), this.g.fire());
          },
        },
        {
          key: 'k',
          value: function k() {
            this.a === 0 && ((this.a = 1), this.g.fire());
          },
        },
        {
          key: 'l',
          value: function l(t) {
            this.a === 0 && ((this.a = 2), (this.d = t), this.g.fire());
          },
        },
      ],
      [
        {
          key: 'fromArray',
          value: function fromArray(t) {
            return new V(function (r) {
              r.emitMany(t);
            });
          },
        },
        {
          key: 'fromPromise',
          value: function fromPromise(t) {
            return new V(
              /*#__PURE__*/ (function () {
                var _ref1 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9(r) {
                    return _regeneratorRuntime().wrap(function _callee9$(_context19) {
                      while (1)
                        switch ((_context19.prev = _context19.next)) {
                          case 0:
                            _context19.t0 = r;
                            _context19.next = 3;
                            return t;
                          case 3:
                            _context19.t1 = _context19.sent;
                            _context19.t0.emitMany.call(_context19.t0, _context19.t1);
                          case 5:
                          case 'end':
                            return _context19.stop();
                        }
                    }, _callee9);
                  }),
                );
                return function (_x5) {
                  return _ref1.apply(this, arguments);
                };
              })(),
            );
          },
        },
        {
          key: 'fromPromisesResolveOrder',
          value: function fromPromisesResolveOrder(t) {
            return new V(
              /*#__PURE__*/ (function () {
                var _ref10 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee1(r) {
                    return _regeneratorRuntime().wrap(function _callee1$(_context21) {
                      while (1)
                        switch ((_context21.prev = _context21.next)) {
                          case 0:
                            _context21.next = 2;
                            return Promise.all(
                              t.map(
                                /*#__PURE__*/ (function () {
                                  var _ref11 = _asyncToGenerator(
                                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee0(i) {
                                      return _regeneratorRuntime().wrap(function _callee0$(
                                        _context20,
                                      ) {
                                        while (1)
                                          switch ((_context20.prev = _context20.next)) {
                                            case 0:
                                              _context20.t0 = r;
                                              _context20.next = 3;
                                              return i;
                                            case 3:
                                              _context20.t1 = _context20.sent;
                                              return _context20.abrupt(
                                                'return',
                                                _context20.t0.emitOne.call(
                                                  _context20.t0,
                                                  _context20.t1,
                                                ),
                                              );
                                            case 5:
                                            case 'end':
                                              return _context20.stop();
                                          }
                                      }, _callee0);
                                    }),
                                  );
                                  return function (_x7) {
                                    return _ref11.apply(this, arguments);
                                  };
                                })(),
                              ),
                            );
                          case 2:
                          case 'end':
                            return _context21.stop();
                        }
                    }, _callee1);
                  }),
                );
                return function (_x6) {
                  return _ref10.apply(this, arguments);
                };
              })(),
            );
          },
        },
        {
          key: 'merge',
          value: function merge(t) {
            return new V(
              /*#__PURE__*/ (function () {
                var _ref12 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(r) {
                    return _regeneratorRuntime().wrap(function _callee11$(_context23) {
                      while (1)
                        switch ((_context23.prev = _context23.next)) {
                          case 0:
                            _context23.next = 2;
                            return Promise.all(
                              t.map(
                                /*#__PURE__*/ (function () {
                                  var _ref13 = _asyncToGenerator(
                                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee10(i) {
                                      var _iteratorAbruptCompletion2,
                                        _didIteratorError2,
                                        _iteratorError2,
                                        _iterator2,
                                        _step2,
                                        n;
                                      return _regeneratorRuntime().wrap(
                                        function _callee10$(_context22) {
                                          while (1)
                                            switch ((_context22.prev = _context22.next)) {
                                              case 0:
                                                _iteratorAbruptCompletion2 = false;
                                                _didIteratorError2 = false;
                                                _context22.prev = 2;
                                                _iterator2 = _asyncIterator(i);
                                              case 4:
                                                _context22.next = 6;
                                                return _iterator2.next();
                                              case 6:
                                                if (
                                                  !(_iteratorAbruptCompletion2 = !(_step2 =
                                                    _context22.sent).done)
                                                ) {
                                                  _context22.next = 12;
                                                  break;
                                                }
                                                n = _step2.value;
                                                r.emitOne(n);
                                              case 9:
                                                _iteratorAbruptCompletion2 = false;
                                                _context22.next = 4;
                                                break;
                                              case 12:
                                                _context22.next = 18;
                                                break;
                                              case 14:
                                                _context22.prev = 14;
                                                _context22.t0 = _context22['catch'](2);
                                                _didIteratorError2 = true;
                                                _iteratorError2 = _context22.t0;
                                              case 18:
                                                _context22.prev = 18;
                                                _context22.prev = 19;
                                                if (
                                                  !(
                                                    _iteratorAbruptCompletion2 &&
                                                    _iterator2['return'] != null
                                                  )
                                                ) {
                                                  _context22.next = 23;
                                                  break;
                                                }
                                                _context22.next = 23;
                                                return _iterator2['return']();
                                              case 23:
                                                _context22.prev = 23;
                                                if (!_didIteratorError2) {
                                                  _context22.next = 26;
                                                  break;
                                                }
                                                throw _iteratorError2;
                                              case 26:
                                                return _context22.finish(23);
                                              case 27:
                                                return _context22.finish(18);
                                              case 28:
                                              case 'end':
                                                return _context22.stop();
                                            }
                                        },
                                        _callee10,
                                        null,
                                        [
                                          [2, 14, 18, 28],
                                          [19, , 23, 27],
                                        ],
                                      );
                                    }),
                                  );
                                  return function (_x9) {
                                    return _ref13.apply(this, arguments);
                                  };
                                })(),
                              ),
                            );
                          case 2:
                          case 'end':
                            return _context23.stop();
                        }
                    }, _callee11);
                  }),
                );
                return function (_x8) {
                  return _ref12.apply(this, arguments);
                };
              })(),
            );
          },
        },
        {
          key: 'map',
          value: function map(t, r) {
            return new V(
              /*#__PURE__*/ (function () {
                var _ref14 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee12(i) {
                    var _iteratorAbruptCompletion3,
                      _didIteratorError3,
                      _iteratorError3,
                      _iterator3,
                      _step3,
                      n;
                    return _regeneratorRuntime().wrap(
                      function _callee12$(_context24) {
                        while (1)
                          switch ((_context24.prev = _context24.next)) {
                            case 0:
                              _iteratorAbruptCompletion3 = false;
                              _didIteratorError3 = false;
                              _context24.prev = 2;
                              _iterator3 = _asyncIterator(t);
                            case 4:
                              _context24.next = 6;
                              return _iterator3.next();
                            case 6:
                              if (
                                !(_iteratorAbruptCompletion3 = !(_step3 = _context24.sent).done)
                              ) {
                                _context24.next = 12;
                                break;
                              }
                              n = _step3.value;
                              i.emitOne(r(n));
                            case 9:
                              _iteratorAbruptCompletion3 = false;
                              _context24.next = 4;
                              break;
                            case 12:
                              _context24.next = 18;
                              break;
                            case 14:
                              _context24.prev = 14;
                              _context24.t0 = _context24['catch'](2);
                              _didIteratorError3 = true;
                              _iteratorError3 = _context24.t0;
                            case 18:
                              _context24.prev = 18;
                              _context24.prev = 19;
                              if (!(_iteratorAbruptCompletion3 && _iterator3['return'] != null)) {
                                _context24.next = 23;
                                break;
                              }
                              _context24.next = 23;
                              return _iterator3['return']();
                            case 23:
                              _context24.prev = 23;
                              if (!_didIteratorError3) {
                                _context24.next = 26;
                                break;
                              }
                              throw _iteratorError3;
                            case 26:
                              return _context24.finish(23);
                            case 27:
                              return _context24.finish(18);
                            case 28:
                            case 'end':
                              return _context24.stop();
                          }
                      },
                      _callee12,
                      null,
                      [
                        [2, 14, 18, 28],
                        [19, , 23, 27],
                      ],
                    );
                  }),
                );
                return function (_x0) {
                  return _ref14.apply(this, arguments);
                };
              })(),
            );
          },
        },
        {
          key: 'filter',
          value: function filter(t, r) {
            return new V(
              /*#__PURE__*/ (function () {
                var _ref15 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13(i) {
                    var _iteratorAbruptCompletion4,
                      _didIteratorError4,
                      _iteratorError4,
                      _iterator4,
                      _step4,
                      n;
                    return _regeneratorRuntime().wrap(
                      function _callee13$(_context25) {
                        while (1)
                          switch ((_context25.prev = _context25.next)) {
                            case 0:
                              _iteratorAbruptCompletion4 = false;
                              _didIteratorError4 = false;
                              _context25.prev = 2;
                              _iterator4 = _asyncIterator(t);
                            case 4:
                              _context25.next = 6;
                              return _iterator4.next();
                            case 6:
                              if (
                                !(_iteratorAbruptCompletion4 = !(_step4 = _context25.sent).done)
                              ) {
                                _context25.next = 12;
                                break;
                              }
                              n = _step4.value;
                              r(n) && i.emitOne(n);
                            case 9:
                              _iteratorAbruptCompletion4 = false;
                              _context25.next = 4;
                              break;
                            case 12:
                              _context25.next = 18;
                              break;
                            case 14:
                              _context25.prev = 14;
                              _context25.t0 = _context25['catch'](2);
                              _didIteratorError4 = true;
                              _iteratorError4 = _context25.t0;
                            case 18:
                              _context25.prev = 18;
                              _context25.prev = 19;
                              if (!(_iteratorAbruptCompletion4 && _iterator4['return'] != null)) {
                                _context25.next = 23;
                                break;
                              }
                              _context25.next = 23;
                              return _iterator4['return']();
                            case 23:
                              _context25.prev = 23;
                              if (!_didIteratorError4) {
                                _context25.next = 26;
                                break;
                              }
                              throw _iteratorError4;
                            case 26:
                              return _context25.finish(23);
                            case 27:
                              return _context25.finish(18);
                            case 28:
                            case 'end':
                              return _context25.stop();
                          }
                      },
                      _callee13,
                      null,
                      [
                        [2, 14, 18, 28],
                        [19, , 23, 27],
                      ],
                    );
                  }),
                );
                return function (_x1) {
                  return _ref15.apply(this, arguments);
                };
              })(),
            );
          },
        },
        {
          key: 'coalesce',
          value: function coalesce(t) {
            return V.filter(t, function (r) {
              return !!r;
            });
          },
        },
        {
          key: 'toPromise',
          value: (function () {
            var _toPromise = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14(t) {
                var r,
                  _iteratorAbruptCompletion5,
                  _didIteratorError5,
                  _iteratorError5,
                  _iterator5,
                  _step5,
                  i;
                return _regeneratorRuntime().wrap(
                  function _callee14$(_context26) {
                    while (1)
                      switch ((_context26.prev = _context26.next)) {
                        case 0:
                          r = [];
                          _iteratorAbruptCompletion5 = false;
                          _didIteratorError5 = false;
                          _context26.prev = 3;
                          _iterator5 = _asyncIterator(t);
                        case 5:
                          _context26.next = 7;
                          return _iterator5.next();
                        case 7:
                          if (!(_iteratorAbruptCompletion5 = !(_step5 = _context26.sent).done)) {
                            _context26.next = 13;
                            break;
                          }
                          i = _step5.value;
                          r.push(i);
                        case 10:
                          _iteratorAbruptCompletion5 = false;
                          _context26.next = 5;
                          break;
                        case 13:
                          _context26.next = 19;
                          break;
                        case 15:
                          _context26.prev = 15;
                          _context26.t0 = _context26['catch'](3);
                          _didIteratorError5 = true;
                          _iteratorError5 = _context26.t0;
                        case 19:
                          _context26.prev = 19;
                          _context26.prev = 20;
                          if (!(_iteratorAbruptCompletion5 && _iterator5['return'] != null)) {
                            _context26.next = 24;
                            break;
                          }
                          _context26.next = 24;
                          return _iterator5['return']();
                        case 24:
                          _context26.prev = 24;
                          if (!_didIteratorError5) {
                            _context26.next = 27;
                            break;
                          }
                          throw _iteratorError5;
                        case 27:
                          return _context26.finish(24);
                        case 28:
                          return _context26.finish(19);
                        case 29:
                          return _context26.abrupt('return', r);
                        case 30:
                        case 'end':
                          return _context26.stop();
                      }
                  },
                  _callee14,
                  null,
                  [
                    [3, 15, 19, 29],
                    [20, , 24, 28],
                  ],
                );
              }),
            );
            function toPromise(_x10) {
              return _toPromise.apply(this, arguments);
            }
            return toPromise;
          })(),
        },
      ],
    );
  })()),
  (_V2.EMPTY = _V2.fromArray([])),
  _V2);
function Br(e, t) {
  return new Promise(function (r, i) {
    var n = [];
    Vr(e, {
      onData: function onData(s) {
        t && n.push(s);
      },
      onError: function onError(s) {
        t ? i(s) : r(void 0);
      },
      onEnd: function onEnd() {
        r(t ? t(n) : void 0);
      },
    });
  });
}
function Vr(e, t, r) {
  e.on('error', function (i) {
    (r === null || r === void 0 ? void 0 : r.isCancellationRequested) || t.onError(i);
  }),
    e.on('end', function () {
      (r === null || r === void 0 ? void 0 : r.isCancellationRequested) || t.onEnd();
    }),
    e.on('data', function (i) {
      (r === null || r === void 0 ? void 0 : r.isCancellationRequested) || t.onData(i);
    });
}
var te = (typeof Buffer === 'undefined' ? 'undefined' : _typeof(Buffer)) < 'u',
  Hr = new _e(function () {
    return new Uint8Array(256);
  }),
  ke,
  Oe,
  G = /*#__PURE__*/ (function () {
    function J(t) {
      _classCallCheck(this, J);
      (this.buffer = t), (this.byteLength = this.buffer.byteLength);
    }
    return _createClass(
      J,
      [
        {
          key: 'clone',
          value: function clone() {
            var t = J.alloc(this.byteLength);
            return t.set(this), t;
          },
        },
        {
          key: 'toString',
          value: function toString() {
            return te
              ? this.buffer.toString()
              : (Oe || (Oe = new TextDecoder()), Oe.decode(this.buffer));
          },
        },
        {
          key: 'slice',
          value: function slice(t, r) {
            return new J(this.buffer.subarray(t, r));
          },
        },
        {
          key: 'set',
          value: function set(t, r) {
            if (t instanceof J) this.buffer.set(t.buffer, r);
            else if (t instanceof Uint8Array) this.buffer.set(t, r);
            else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), r);
            else if (ArrayBuffer.isView(t))
              this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), r);
            else throw new Error("Unknown argument 'array'");
          },
        },
        {
          key: 'readUInt32BE',
          value: function readUInt32BE(t) {
            return Jr(this.buffer, t);
          },
        },
        {
          key: 'writeUInt32BE',
          value: function writeUInt32BE(t, r) {
            Zr(this.buffer, t, r);
          },
        },
        {
          key: 'readUInt32LE',
          value: function readUInt32LE(t) {
            return Qr(this.buffer, t);
          },
        },
        {
          key: 'writeUInt32LE',
          value: function writeUInt32LE(t, r) {
            Yr(this.buffer, t, r);
          },
        },
        {
          key: 'readUInt8',
          value: function readUInt8(t) {
            return Xr(this.buffer, t);
          },
        },
        {
          key: 'writeUInt8',
          value: function writeUInt8(t, r) {
            Gr(this.buffer, t, r);
          },
        },
        {
          key: 'indexOf',
          value: function indexOf(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return Kr(this.buffer, t instanceof J ? t.buffer : t, r);
          },
        },
      ],
      [
        {
          key: 'alloc',
          value: function alloc(t) {
            return te ? new J(Buffer.allocUnsafe(t)) : new J(new Uint8Array(t));
          },
        },
        {
          key: 'wrap',
          value: function wrap(t) {
            return (
              te && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)),
              new J(t)
            );
          },
        },
        {
          key: 'fromString',
          value: function fromString(t, r) {
            return !((r !== null && r !== void 0 && r.dontUseNodeBuffer) || !1) && te
              ? new J(Buffer.from(t))
              : (ke || (ke = new TextEncoder()), new J(ke.encode(t)));
          },
        },
        {
          key: 'fromByteArray',
          value: function fromByteArray(t) {
            var r = J.alloc(t.length);
            for (var i = 0, n = t.length; i < n; i++) r.buffer[i] = t[i];
            return r;
          },
        },
        {
          key: 'concat',
          value: function concat(t, r) {
            if (_typeof(r) > 'u') {
              r = 0;
              for (var s = 0, o = t.length; s < o; s++) r += t[s].byteLength;
            }
            var i = J.alloc(r);
            var n = 0;
            for (var _s2 = 0, _o2 = t.length; _s2 < _o2; _s2++) {
              var a = t[_s2];
              i.set(a, n), (n += a.byteLength);
            }
            return i;
          },
        },
      ],
    );
  })();
function Kr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var i = t.byteLength,
    n = e.byteLength;
  if (i === 0) return 0;
  if (i === 1) return e.indexOf(t[0]);
  if (i > n - r) return -1;
  var s = Hr.value;
  s.fill(t.length);
  for (var c = 0; c < t.length; c++) s[t[c]] = t.length - c - 1;
  var o = r + t.length - 1,
    a = o,
    l = -1;
  for (; o < n; )
    if (e[o] === t[a]) {
      if (a === 0) {
        l = o;
        break;
      }
      o--, a--;
    } else (o += Math.max(t.length - a, s[e[o]])), (a = t.length - 1);
  return l;
}
function Jr(e, t) {
  return e[t] * Math.pow(2, 24) + e[t + 1] * Math.pow(2, 16) + e[t + 2] * Math.pow(2, 8) + e[t + 3];
}
function Zr(e, t, r) {
  (e[r + 3] = t),
    (t = t >>> 8),
    (e[r + 2] = t),
    (t = t >>> 8),
    (e[r + 1] = t),
    (t = t >>> 8),
    (e[r] = t);
}
function Qr(e, t) {
  return (
    ((e[t + 0] << 0) >>> 0) |
    ((e[t + 1] << 8) >>> 0) |
    ((e[t + 2] << 16) >>> 0) |
    ((e[t + 3] << 24) >>> 0)
  );
}
function Yr(e, t, r) {
  (e[r + 0] = t & 255),
    (t = t >>> 8),
    (e[r + 1] = t & 255),
    (t = t >>> 8),
    (e[r + 2] = t & 255),
    (t = t >>> 8),
    (e[r + 3] = t & 255);
}
function Xr(e, t) {
  return e[t];
}
function Gr(e, t, r) {
  e[r] = t;
}
function e0(e) {
  return Br(e, function (t) {
    return G.concat(t);
  });
}
var St;
(function (e) {
  (e[(e.stdout = 0)] = 'stdout'), (e[(e.stderr = 1)] = 'stderr');
})(St || (St = {}));
var kt;
(function (e) {
  (e[(e.Success = 0)] = 'Success'),
    (e[(e.Unknown = 1)] = 'Unknown'),
    (e[(e.AccessDenied = 2)] = 'AccessDenied'),
    (e[(e.ProcessNotFound = 3)] = 'ProcessNotFound');
})(kt || (kt = {}));
var r0 = new We(1e4);
function Ot(e) {
  return n0(e, 'NFC', r0);
}
var E4 = new We(1e4),
  i0 = /[^\u0000-\u0080]/;
function n0(e, t, r) {
  if (!e) return e;
  var i = r.get(e);
  if (i) return i;
  var n;
  return i0.test(e) ? (n = e.normalize(t)) : (n = e), r.set(e, n), n;
}
var k1;
(function (e) {
  (e[(e.UNLINK = 0)] = 'UNLINK'), (e[(e.MOVE = 1)] = 'MOVE');
})(k1 || (k1 = {}));
function Dt(_x11) {
  return _Dt.apply(this, arguments);
}
function _Dt() {
  _Dt = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee22(e) {
      var t,
        r,
        _args34 = arguments;
      return _regeneratorRuntime().wrap(function _callee22$(_context34) {
        while (1)
          switch ((_context34.prev = _context34.next)) {
            case 0:
              t = _args34.length > 1 && _args34[1] !== undefined ? _args34[1] : k1.UNLINK;
              r = _args34.length > 2 ? _args34[2] : undefined;
              if (!pr(e)) {
                _context34.next = 4;
                break;
              }
              throw new Error('rimraf - will refuse to recursively delete root');
            case 4:
              return _context34.abrupt('return', t === k1.UNLINK ? De(e) : s0(e, r));
            case 5:
            case 'end':
              return _context34.stop();
          }
      }, _callee22);
    }),
  );
  return _Dt.apply(this, arguments);
}
function s0(_x12) {
  return _s3.apply(this, arguments);
}
function _s3() {
  _s3 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee23(e) {
      var t,
        _args35 = arguments;
      return _regeneratorRuntime().wrap(
        function _callee23$(_context35) {
          while (1)
            switch ((_context35.prev = _context35.next)) {
              case 0:
                t =
                  _args35.length > 1 && _args35[1] !== undefined
                    ? _args35[1]
                    : Cr((0, _os.tmpdir)());
                _context35.prev = 1;
                _context35.prev = 2;
                _context35.next = 5;
                return x.promises.rename(e, t);
              case 5:
                _context35.next = 10;
                break;
              case 7:
                _context35.prev = 7;
                _context35.t0 = _context35['catch'](2);
                return _context35.abrupt(
                  'return',
                  _context35.t0.code === 'ENOENT' ? void 0 : De(e),
                );
              case 10:
                De(t)['catch'](function (r) {});
                _context35.next = 17;
                break;
              case 13:
                _context35.prev = 13;
                _context35.t1 = _context35['catch'](1);
                if (!(_context35.t1.code !== 'ENOENT')) {
                  _context35.next = 17;
                  break;
                }
                throw _context35.t1;
              case 17:
              case 'end':
                return _context35.stop();
            }
        },
        _callee23,
        null,
        [
          [1, 13],
          [2, 7],
        ],
      );
    }),
  );
  return _s3.apply(this, arguments);
}
function De(_x13) {
  return _De.apply(this, arguments);
}
function _De() {
  _De = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee24(e) {
      return _regeneratorRuntime().wrap(function _callee24$(_context36) {
        while (1)
          switch ((_context36.prev = _context36.next)) {
            case 0:
              return _context36.abrupt(
                'return',
                x.promises.rm(e, {
                  recursive: !0,
                  force: !0,
                  maxRetries: 3,
                }),
              );
            case 1:
            case 'end':
              return _context36.stop();
          }
      }, _callee24);
    }),
  );
  return _De.apply(this, arguments);
}
function re(_x14, _x15) {
  return _re.apply(this, arguments);
}
function _re() {
  _re = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee25(e, t) {
      return _regeneratorRuntime().wrap(function _callee25$(_context37) {
        while (1)
          switch ((_context37.prev = _context37.next)) {
            case 0:
              _context37.t0 = a0;
              _context37.next = 3;
              return t ? o0(e) : x.promises.readdir(e);
            case 3:
              _context37.t1 = _context37.sent;
              return _context37.abrupt('return', (0, _context37.t0)(_context37.t1));
            case 5:
            case 'end':
              return _context37.stop();
          }
      }, _callee25);
    }),
  );
  return _re.apply(this, arguments);
}
function o0(_x16) {
  return _o3.apply(this, arguments);
}
function _o3() {
  _o3 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee26(e) {
      var t, r, _iterator37, _step37, _loop2;
      return _regeneratorRuntime().wrap(
        function _callee26$(_context39) {
          while (1)
            switch ((_context39.prev = _context39.next)) {
              case 0:
                _context39.prev = 0;
                _context39.next = 3;
                return x.promises.readdir(e, {
                  withFileTypes: !0,
                });
              case 3:
                return _context39.abrupt('return', _context39.sent);
              case 6:
                _context39.prev = 6;
                _context39.t0 = _context39['catch'](0);
                console.warn(
                  '[node.js fs] readdir with filetypes failed with error: ',
                  _context39.t0,
                );
              case 9:
                t = [];
                _context39.next = 12;
                return re(e);
              case 12:
                r = _context39.sent;
                _iterator37 = _createForOfIteratorHelper(r);
                _context39.prev = 14;
                _loop2 = /*#__PURE__*/ _regeneratorRuntime().mark(function _loop2() {
                  var i, n, s, o, a;
                  return _regeneratorRuntime().wrap(
                    function _loop2$(_context38) {
                      while (1)
                        switch ((_context38.prev = _context38.next)) {
                          case 0:
                            i = _step37.value;
                            (n = !1), (s = !1), (o = !1);
                            _context38.prev = 2;
                            _context38.next = 5;
                            return x.promises.lstat(K(e, i));
                          case 5:
                            a = _context38.sent;
                            (n = a.isFile()), (s = a.isDirectory()), (o = a.isSymbolicLink());
                            _context38.next = 12;
                            break;
                          case 9:
                            _context38.prev = 9;
                            _context38.t0 = _context38['catch'](2);
                            console.warn(
                              '[node.js fs] unexpected error from lstat after readdir: ',
                              _context38.t0,
                            );
                          case 12:
                            t.push({
                              name: i,
                              isFile: function isFile() {
                                return n;
                              },
                              isDirectory: function isDirectory() {
                                return s;
                              },
                              isSymbolicLink: function isSymbolicLink() {
                                return o;
                              },
                            });
                          case 13:
                          case 'end':
                            return _context38.stop();
                        }
                    },
                    _loop2,
                    null,
                    [[2, 9]],
                  );
                });
                _iterator37.s();
              case 17:
                if ((_step37 = _iterator37.n()).done) {
                  _context39.next = 21;
                  break;
                }
                return _context39.delegateYield(_loop2(), 't1', 19);
              case 19:
                _context39.next = 17;
                break;
              case 21:
                _context39.next = 26;
                break;
              case 23:
                _context39.prev = 23;
                _context39.t2 = _context39['catch'](14);
                _iterator37.e(_context39.t2);
              case 26:
                _context39.prev = 26;
                _iterator37.f();
                return _context39.finish(26);
              case 29:
                return _context39.abrupt('return', t);
              case 30:
              case 'end':
                return _context39.stop();
            }
        },
        _callee26,
        null,
        [
          [0, 6],
          [14, 23, 26, 29],
        ],
      );
    }),
  );
  return _o3.apply(this, arguments);
}
function a0(e) {
  return e.map(function (t) {
    return typeof t == 'string' ? (be ? Ot(t) : t) : ((t.name = be ? Ot(t.name) : t.name), t);
  });
}
function c0(_x17) {
  return _c5.apply(this, arguments);
}
function _c5() {
  _c5 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee27(e) {
      var t, r, _iterator38, _step38, i;
      return _regeneratorRuntime().wrap(
        function _callee27$(_context40) {
          while (1)
            switch ((_context40.prev = _context40.next)) {
              case 0:
                _context40.next = 2;
                return re(e);
              case 2:
                t = _context40.sent;
                r = [];
                _iterator38 = _createForOfIteratorHelper(t);
                _context40.prev = 5;
                _iterator38.s();
              case 7:
                if ((_step38 = _iterator38.n()).done) {
                  _context40.next = 16;
                  break;
                }
                i = _step38.value;
                _context40.next = 11;
                return O1.existsDirectory(K(e, i));
              case 11:
                _context40.t0 = _context40.sent;
                if (!_context40.t0) {
                  _context40.next = 14;
                  break;
                }
                r.push(i);
              case 14:
                _context40.next = 7;
                break;
              case 16:
                _context40.next = 21;
                break;
              case 18:
                _context40.prev = 18;
                _context40.t1 = _context40['catch'](5);
                _iterator38.e(_context40.t1);
              case 21:
                _context40.prev = 21;
                _iterator38.f();
                return _context40.finish(21);
              case 24:
                return _context40.abrupt('return', r);
              case 25:
              case 'end':
                return _context40.stop();
            }
        },
        _callee27,
        null,
        [[5, 18, 21, 24]],
      );
    }),
  );
  return _c5.apply(this, arguments);
}
var O1;
(function (e) {
  function t(_x18) {
    return _t5.apply(this, arguments);
  }
  function _t5() {
    _t5 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee15(n) {
        var s, _s4;
        return _regeneratorRuntime().wrap(
          function _callee15$(_context27) {
            while (1)
              switch ((_context27.prev = _context27.next)) {
                case 0:
                  _context27.prev = 0;
                  _context27.next = 3;
                  return x.promises.lstat(n);
                case 3:
                  s = _context27.sent;
                  if (s.isSymbolicLink()) {
                    _context27.next = 6;
                    break;
                  }
                  return _context27.abrupt('return', {
                    stat: s,
                  });
                case 6:
                  _context27.next = 10;
                  break;
                case 8:
                  _context27.prev = 8;
                  _context27.t0 = _context27['catch'](0);
                case 10:
                  _context27.prev = 10;
                  _context27.next = 13;
                  return x.promises.stat(n);
                case 13:
                  _context27.t1 = _context27.sent;
                  _context27.t2 =
                    (_s4 = s) !== null && _s4 !== void 0 && _s4.isSymbolicLink()
                      ? {
                          dangling: !1,
                        }
                      : void 0;
                  return _context27.abrupt('return', {
                    stat: _context27.t1,
                    symbolicLink: _context27.t2,
                  });
                case 18:
                  _context27.prev = 18;
                  _context27.t3 = _context27['catch'](10);
                  if (!(_context27.t3.code === 'ENOENT' && s)) {
                    _context27.next = 22;
                    break;
                  }
                  return _context27.abrupt('return', {
                    stat: s,
                    symbolicLink: {
                      dangling: !0,
                    },
                  });
                case 22:
                  if (!(Q && _context27.t3.code === 'EACCES')) {
                    _context27.next = 40;
                    break;
                  }
                  _context27.prev = 23;
                  _context27.t4 = x.promises;
                  _context27.next = 27;
                  return x.promises.readlink(n);
                case 27:
                  _context27.t5 = _context27.sent;
                  _context27.next = 30;
                  return _context27.t4.stat.call(_context27.t4, _context27.t5);
                case 30:
                  _context27.t6 = _context27.sent;
                  _context27.t7 = {
                    dangling: !1,
                  };
                  return _context27.abrupt('return', {
                    stat: _context27.t6,
                    symbolicLink: _context27.t7,
                  });
                case 35:
                  _context27.prev = 35;
                  _context27.t8 = _context27['catch'](23);
                  if (!(_context27.t8.code === 'ENOENT' && s)) {
                    _context27.next = 39;
                    break;
                  }
                  return _context27.abrupt('return', {
                    stat: s,
                    symbolicLink: {
                      dangling: !0,
                    },
                  });
                case 39:
                  throw _context27.t8;
                case 40:
                  throw _context27.t3;
                case 41:
                case 'end':
                  return _context27.stop();
              }
          },
          _callee15,
          null,
          [
            [0, 8],
            [10, 18],
            [23, 35],
          ],
        );
      }),
    );
    return _t5.apply(this, arguments);
  }
  e.stat = t;
  function r(_x19) {
    return _r4.apply(this, arguments);
  }
  function _r4() {
    _r4 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee16(n) {
        var _yield$e$stat, s, o;
        return _regeneratorRuntime().wrap(
          function _callee16$(_context28) {
            while (1)
              switch ((_context28.prev = _context28.next)) {
                case 0:
                  _context28.prev = 0;
                  _context28.next = 3;
                  return e.stat(n);
                case 3:
                  _yield$e$stat = _context28.sent;
                  s = _yield$e$stat.stat;
                  o = _yield$e$stat.symbolicLink;
                  return _context28.abrupt(
                    'return',
                    s.isFile() && (o === null || o === void 0 ? void 0 : o.dangling) !== !0,
                  );
                case 9:
                  _context28.prev = 9;
                  _context28.t0 = _context28['catch'](0);
                case 11:
                  return _context28.abrupt('return', !1);
                case 12:
                case 'end':
                  return _context28.stop();
              }
          },
          _callee16,
          null,
          [[0, 9]],
        );
      }),
    );
    return _r4.apply(this, arguments);
  }
  e.existsFile = r;
  function i(_x20) {
    return _i8.apply(this, arguments);
  }
  function _i8() {
    _i8 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee17(n) {
        var _yield$e$stat2, s, o;
        return _regeneratorRuntime().wrap(
          function _callee17$(_context29) {
            while (1)
              switch ((_context29.prev = _context29.next)) {
                case 0:
                  _context29.prev = 0;
                  _context29.next = 3;
                  return e.stat(n);
                case 3:
                  _yield$e$stat2 = _context29.sent;
                  s = _yield$e$stat2.stat;
                  o = _yield$e$stat2.symbolicLink;
                  return _context29.abrupt(
                    'return',
                    s.isDirectory() && (o === null || o === void 0 ? void 0 : o.dangling) !== !0,
                  );
                case 9:
                  _context29.prev = 9;
                  _context29.t0 = _context29['catch'](0);
                case 11:
                  return _context29.abrupt('return', !1);
                case 12:
                case 'end':
                  return _context29.stop();
              }
          },
          _callee17,
          null,
          [[0, 9]],
        );
      }),
    );
    return _i8.apply(this, arguments);
  }
  e.existsDirectory = i;
})(O1 || (O1 = {}));
var l0 = new Fr();
function f0(e, t, r) {
  return l0.queueFor(
    W.file(e),
    function () {
      var i = d0(r);
      return new Promise(function (n, s) {
        return h0(e, t, i, function (o) {
          return o ? s(o) : n();
        });
      });
    },
    Rr,
  );
}
var It = !0;
function u0(e) {
  It = e;
}
function h0(e, t, r, i) {
  if (!It)
    return x.writeFile(
      e,
      t,
      {
        mode: r.mode,
        flag: r.flag,
      },
      i,
    );
  x.open(e, r.flag, r.mode, function (n, s) {
    if (n) return i(n);
    x.writeFile(s, t, function (o) {
      if (o)
        return x.close(s, function () {
          return i(o);
        });
      x.fdatasync(s, function (a) {
        return (
          a &&
            (console.warn(
              '[node.js fs] fdatasync is now disabled for this session because it failed: ',
              a,
            ),
            u0(!1)),
          x.close(s, function (l) {
            return i(l);
          })
        );
      });
    });
  });
}
function d0(e) {
  return e
    ? {
        mode: typeof e.mode == 'number' ? e.mode : 438,
        flag: typeof e.flag == 'string' ? e.flag : 'w',
      }
    : {
        mode: 438,
        flag: 'w',
      };
}
function g0(_x21, _x22) {
  return _g.apply(this, arguments);
}
function _g() {
  _g = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee28(e, t) {
      var r,
        _args41 = arguments;
      return _regeneratorRuntime().wrap(
        function _callee28$(_context41) {
          while (1)
            switch ((_context41.prev = _context41.next)) {
              case 0:
                r = _args41.length > 2 && _args41[2] !== undefined ? _args41[2] : 6e4;
                if (!(e !== t)) {
                  _context41.next = 22;
                  break;
                }
                _context41.prev = 2;
                if (!(Q && typeof r == 'number')) {
                  _context41.next = 8;
                  break;
                }
                _context41.next = 6;
                return jt(e, t, Date.now(), r);
              case 6:
                _context41.next = 10;
                break;
              case 8:
                _context41.next = 10;
                return x.promises.rename(e, t);
              case 10:
                _context41.next = 22;
                break;
              case 12:
                _context41.prev = 12;
                _context41.t0 = _context41['catch'](2);
                if (
                  !(
                    (e.toLowerCase() !== t.toLowerCase() && _context41.t0.code === 'EXDEV') ||
                    e.endsWith('.')
                  )
                ) {
                  _context41.next = 21;
                  break;
                }
                _context41.next = 17;
                return Mt(e, t, {
                  preserveSymlinks: !1,
                });
              case 17:
                _context41.next = 19;
                return Dt(e, k1.MOVE);
              case 19:
                _context41.next = 22;
                break;
              case 21:
                throw _context41.t0;
              case 22:
              case 'end':
                return _context41.stop();
            }
        },
        _callee28,
        null,
        [[2, 12]],
      );
    }),
  );
  return _g.apply(this, arguments);
}
function jt(_x23, _x24, _x25, _x26) {
  return _jt.apply(this, arguments);
}
function _jt() {
  _jt = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee29(e, t, r, i) {
      var n,
        o,
        _yield$O1$stat,
        a,
        _args42 = arguments;
      return _regeneratorRuntime().wrap(
        function _callee29$(_context42) {
          while (1)
            switch ((_context42.prev = _context42.next)) {
              case 0:
                n = _args42.length > 4 && _args42[4] !== undefined ? _args42[4] : 0;
                _context42.prev = 1;
                _context42.next = 4;
                return x.promises.rename(e, t);
              case 4:
                return _context42.abrupt('return', _context42.sent);
              case 7:
                _context42.prev = 7;
                _context42.t0 = _context42['catch'](1);
                if (
                  !(
                    _context42.t0.code !== 'EACCES' &&
                    _context42.t0.code !== 'EPERM' &&
                    _context42.t0.code !== 'EBUSY'
                  )
                ) {
                  _context42.next = 11;
                  break;
                }
                throw _context42.t0;
              case 11:
                if (!(Date.now() - r >= i)) {
                  _context42.next = 13;
                  break;
                }
                throw (
                  (console.error(
                    '[node.js fs] rename failed after '
                      .concat(n, ' retries with error: ')
                      .concat(_context42.t0),
                  ),
                  _context42.t0)
                );
              case 13:
                if (!(n === 0)) {
                  _context42.next = 27;
                  break;
                }
                o = !1;
                _context42.prev = 15;
                _context42.next = 18;
                return O1.stat(t);
              case 18:
                _yield$O1$stat = _context42.sent;
                a = _yield$O1$stat.stat;
                a.isFile() || (o = !0);
                _context42.next = 25;
                break;
              case 23:
                _context42.prev = 23;
                _context42.t1 = _context42['catch'](15);
              case 25:
                if (!o) {
                  _context42.next = 27;
                  break;
                }
                throw _context42.t0;
              case 27:
                _context42.next = 29;
                return _t(Math.min(100, n * 10));
              case 29:
                return _context42.abrupt('return', jt(e, t, r, i, n + 1));
              case 30:
              case 'end':
                return _context42.stop();
            }
        },
        _callee29,
        null,
        [
          [1, 7],
          [15, 23],
        ],
      );
    }),
  );
  return _jt.apply(this, arguments);
}
function Mt(_x27, _x28, _x29) {
  return _Mt.apply(this, arguments);
}
function _Mt() {
  _Mt = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee30(e, t, r) {
      return _regeneratorRuntime().wrap(function _callee30$(_context43) {
        while (1)
          switch ((_context43.prev = _context43.next)) {
            case 0:
              return _context43.abrupt(
                'return',
                Rt(e, t, {
                  root: {
                    source: e,
                    target: t,
                  },
                  options: r,
                  handledSourcePaths: new Set(),
                }),
              );
            case 1:
            case 'end':
              return _context43.stop();
          }
      }, _callee30);
    }),
  );
  return _Mt.apply(this, arguments);
}
var Nt = 511;
function Rt(_x30, _x31, _x32) {
  return _Rt.apply(this, arguments);
}
function _Rt() {
  _Rt = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee31(e, t, r) {
      var _yield$O1$stat2, i, n;
      return _regeneratorRuntime().wrap(
        function _callee31$(_context44) {
          while (1)
            switch ((_context44.prev = _context44.next)) {
              case 0:
                if (!r.handledSourcePaths.has(e)) {
                  _context44.next = 2;
                  break;
                }
                return _context44.abrupt('return');
              case 2:
                r.handledSourcePaths.add(e);
                _context44.next = 5;
                return O1.stat(e);
              case 5:
                _yield$O1$stat2 = _context44.sent;
                i = _yield$O1$stat2.stat;
                n = _yield$O1$stat2.symbolicLink;
                if (!n) {
                  _context44.next = 20;
                  break;
                }
                if (!r.options.preserveSymlinks) {
                  _context44.next = 18;
                  break;
                }
                _context44.prev = 10;
                _context44.next = 13;
                return w0(e, t, r);
              case 13:
                return _context44.abrupt('return', _context44.sent);
              case 16:
                _context44.prev = 16;
                _context44.t0 = _context44['catch'](10);
              case 18:
                if (!n.dangling) {
                  _context44.next = 20;
                  break;
                }
                return _context44.abrupt('return');
              case 20:
                return _context44.abrupt(
                  'return',
                  i.isDirectory() ? v0(e, t, i.mode & Nt, r) : m0(e, t, i.mode & Nt),
                );
              case 21:
              case 'end':
                return _context44.stop();
            }
        },
        _callee31,
        null,
        [[10, 16]],
      );
    }),
  );
  return _Rt.apply(this, arguments);
}
function v0(_x33, _x34, _x35, _x36) {
  return _v2.apply(this, arguments);
}
function _v2() {
  _v2 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee32(e, t, r, i) {
      var n, _iterator39, _step39, s;
      return _regeneratorRuntime().wrap(
        function _callee32$(_context45) {
          while (1)
            switch ((_context45.prev = _context45.next)) {
              case 0:
                _context45.next = 2;
                return x.promises.mkdir(t, {
                  recursive: !0,
                  mode: r,
                });
              case 2:
                _context45.next = 4;
                return re(e);
              case 4:
                n = _context45.sent;
                _iterator39 = _createForOfIteratorHelper(n);
                _context45.prev = 6;
                _iterator39.s();
              case 8:
                if ((_step39 = _iterator39.n()).done) {
                  _context45.next = 14;
                  break;
                }
                s = _step39.value;
                _context45.next = 12;
                return Rt(K(e, s), K(t, s), i);
              case 12:
                _context45.next = 8;
                break;
              case 14:
                _context45.next = 19;
                break;
              case 16:
                _context45.prev = 16;
                _context45.t0 = _context45['catch'](6);
                _iterator39.e(_context45.t0);
              case 19:
                _context45.prev = 19;
                _iterator39.f();
                return _context45.finish(19);
              case 22:
              case 'end':
                return _context45.stop();
            }
        },
        _callee32,
        null,
        [[6, 16, 19, 22]],
      );
    }),
  );
  return _v2.apply(this, arguments);
}
function m0(_x37, _x38, _x39) {
  return _m6.apply(this, arguments);
}
function _m6() {
  _m6 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee33(e, t, r) {
      return _regeneratorRuntime().wrap(function _callee33$(_context46) {
        while (1)
          switch ((_context46.prev = _context46.next)) {
            case 0:
              _context46.next = 2;
              return x.promises.copyFile(e, t);
            case 2:
              _context46.next = 4;
              return x.promises.chmod(t, r);
            case 4:
            case 'end':
              return _context46.stop();
          }
      }, _callee33);
    }),
  );
  return _m6.apply(this, arguments);
}
function w0(_x40, _x41, _x42) {
  return _w.apply(this, arguments);
}
function _w() {
  _w = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee34(e, t, r) {
      var i;
      return _regeneratorRuntime().wrap(function _callee34$(_context47) {
        while (1)
          switch ((_context47.prev = _context47.next)) {
            case 0:
              _context47.next = 2;
              return x.promises.readlink(e);
            case 2:
              i = _context47.sent;
              Ee(i, r.root.source, !Ge) &&
                (i = K(r.root.target, i.substr(r.root.source.length + 1)));
              _context47.next = 6;
              return x.promises.symlink(i, t);
            case 6:
            case 'end':
              return _context47.stop();
          }
      }, _callee34);
    }),
  );
  return _w.apply(this, arguments);
}
var p0 = new /*#__PURE__*/ ((function () {
    function _class3() {
      _classCallCheck(this, _class3);
    }
    return _createClass(_class3, [
      {
        key: 'read',
        get: function get() {
          return function (e, t, r, i, n) {
            return new Promise(function (s, o) {
              x.read(e, t, r, i, n, function (a, l, c) {
                return a
                  ? o(a)
                  : s({
                      bytesRead: l,
                      buffer: c,
                    });
              });
            });
          };
        },
      },
      {
        key: 'write',
        get: function get() {
          return function (e, t, r, i, n) {
            return new Promise(function (s, o) {
              x.write(e, t, r, i, n, function (a, l, c) {
                return a
                  ? o(a)
                  : s({
                      bytesWritten: l,
                      buffer: c,
                    });
              });
            });
          };
        },
      },
      {
        key: 'fdatasync',
        get: function get() {
          return (0, _util.promisify)(x.fdatasync);
        },
      },
      {
        key: 'open',
        get: function get() {
          return (0, _util.promisify)(x.open);
        },
      },
      {
        key: 'close',
        get: function get() {
          return (0, _util.promisify)(x.close);
        },
      },
      {
        key: 'realpath',
        get: function get() {
          return (0, _util.promisify)(x.realpath);
        },
      },
      {
        key: 'ftruncate',
        get: function get() {
          return (0, _util.promisify)(x.ftruncate);
        },
      },
      {
        key: 'exists',
        value: (function () {
          var _exists = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee18(e) {
              return _regeneratorRuntime().wrap(
                function _callee18$(_context30) {
                  while (1)
                    switch ((_context30.prev = _context30.next)) {
                      case 0:
                        _context30.prev = 0;
                        _context30.next = 3;
                        return x.promises.access(e);
                      case 3:
                        return _context30.abrupt('return', !0);
                      case 6:
                        _context30.prev = 6;
                        _context30.t0 = _context30['catch'](0);
                        return _context30.abrupt('return', !1);
                      case 9:
                      case 'end':
                        return _context30.stop();
                    }
                },
                _callee18,
                null,
                [[0, 6]],
              );
            }),
          );
          function exists(_x43) {
            return _exists.apply(this, arguments);
          }
          return exists;
        })(),
      },
      {
        key: 'readdir',
        get: function get() {
          return re;
        },
      },
      {
        key: 'readDirsInDir',
        get: function get() {
          return c0;
        },
      },
      {
        key: 'writeFile',
        get: function get() {
          return f0;
        },
      },
      {
        key: 'rm',
        get: function get() {
          return Dt;
        },
      },
      {
        key: 'rename',
        get: function get() {
          return g0;
        },
      },
      {
        key: 'copy',
        get: function get() {
          return Mt;
        },
      },
    ]);
  })())(),
  Tt;
(function (e) {
  function t(_x44, _x45, _x46) {
    return _t6.apply(this, arguments);
  }
  function _t6() {
    _t6 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20(r, i, n) {
        var o, _o4, _iterator34, _step34, a, l, c;
        return _regeneratorRuntime().wrap(
          function _callee20$(_context32) {
            while (1)
              switch ((_context32.prev = _context32.next)) {
                case 0:
                  _o4 = function _o6() {
                    _o4 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee19(a) {
                        var l;
                        return _regeneratorRuntime().wrap(
                          function _callee19$(_context31) {
                            while (1)
                              switch ((_context31.prev = _context31.next)) {
                                case 0:
                                  _context31.next = 2;
                                  return p0.exists(a);
                                case 2:
                                  if (!_context31.sent) {
                                    _context31.next = 17;
                                    break;
                                  }
                                  _context31.prev = 3;
                                  _context31.next = 6;
                                  return _fs.promises.stat(a);
                                case 6:
                                  l = _context31.sent;
                                  _context31.next = 16;
                                  break;
                                case 9:
                                  _context31.prev = 9;
                                  _context31.t0 = _context31['catch'](3);
                                  _context31.t1 = _context31.t0.message.startsWith('EACCES');
                                  if (!_context31.t1) {
                                    _context31.next = 16;
                                    break;
                                  }
                                  _context31.next = 15;
                                  return _fs.promises.lstat(a);
                                case 15:
                                  l = _context31.sent;
                                case 16:
                                  return _context31.abrupt('return', l ? !l.isDirectory() : !1);
                                case 17:
                                  return _context31.abrupt('return', !1);
                                case 18:
                                case 'end':
                                  return _context31.stop();
                              }
                          },
                          _callee19,
                          null,
                          [[3, 9]],
                        );
                      }),
                    );
                    return _o4.apply(this, arguments);
                  };
                  o = function _o5(_x47) {
                    return _o4.apply(this, arguments);
                  };
                  if (!st(r)) {
                    _context32.next = 4;
                    break;
                  }
                  return _context32.abrupt('return', r);
                case 4:
                  if (
                    !(i === void 0 && (i = x1()),
                    ot(r) !== '.' ||
                      (n === void 0 && gr(Ce.PATH) && (n = Ce.PATH.split(or)),
                      n === void 0 || n.length === 0))
                  ) {
                    _context32.next = 6;
                    break;
                  }
                  return _context32.abrupt('return', K(i, r));
                case 6:
                  _iterator34 = _createForOfIteratorHelper(n);
                  _context32.prev = 7;
                  _iterator34.s();
                case 9:
                  if ((_step34 = _iterator34.n()).done) {
                    _context32.next = 30;
                    break;
                  }
                  a = _step34.value;
                  l = void 0;
                  st(a) ? (l = K(a, r)) : (l = K(i, a, r));
                  _context32.next = 15;
                  return o(l);
                case 15:
                  if (!_context32.sent) {
                    _context32.next = 17;
                    break;
                  }
                  return _context32.abrupt('return', l);
                case 17:
                  c = l + '.com';
                  _context32.next = 20;
                  return o(c);
                case 20:
                  _context32.t0 = _context32.sent;
                  if (_context32.t0) {
                    _context32.next = 26;
                    break;
                  }
                  c = l + '.exe';
                  _context32.next = 25;
                  return o(c);
                case 25:
                  _context32.t0 = _context32.sent;
                case 26:
                  if (!_context32.t0) {
                    _context32.next = 28;
                    break;
                  }
                  return _context32.abrupt('return', c);
                case 28:
                  _context32.next = 9;
                  break;
                case 30:
                  _context32.next = 35;
                  break;
                case 32:
                  _context32.prev = 32;
                  _context32.t1 = _context32['catch'](7);
                  _iterator34.e(_context32.t1);
                case 35:
                  _context32.prev = 35;
                  _iterator34.f();
                  return _context32.finish(35);
                case 38:
                  return _context32.abrupt('return', K(i, r));
                case 39:
                case 'end':
                  return _context32.stop();
              }
          },
          _callee20,
          null,
          [[7, 32, 35, 38]],
        );
      }),
    );
    return _t6.apply(this, arguments);
  }
  e.findExecutable = t;
})(Tt || (Tt = {}));
function y0(e, t, r) {
  var i = null,
    n = null;
  if (
    (typeof r.value == 'function'
      ? ((i = 'value'),
        (n = r.value),
        n.length !== 0 &&
          console.warn('Memoize should only be used in functions with zero parameters'))
      : typeof r.get == 'function' && ((i = 'get'), (n = r.get)),
    !n)
  )
    throw new Error('not supported');
  var s = '$memoize$'.concat(t);
  r[i] = function () {
    for (var _len7 = arguments.length, o = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      o[_key7] = arguments[_key7];
    }
    return (
      this.hasOwnProperty(s) ||
        Object.defineProperty(this, s, {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n.apply(this, o),
        }),
      this[s]
    );
  };
}
function ie(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!e || t > 200) return e;
  if (_typeof(e) == 'object') {
    switch (e.$mid) {
      case 1:
        return W.revive(e);
      case 2:
        return new RegExp(e.source, e.flags);
      case 17:
        return new Date(e.source);
    }
    if (e instanceof G || e instanceof Uint8Array) return e;
    if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) e[r] = ie(e[r], t + 1);
    else for (var _r5 in e) Object.hasOwnProperty.call(e, _r5) && (e[_r5] = ie(e[_r5], t + 1));
  }
  return e;
}
var Ut;
(function (e) {
  (e[(e.Promise = 100)] = 'Promise'),
    (e[(e.PromiseCancel = 101)] = 'PromiseCancel'),
    (e[(e.EventListen = 102)] = 'EventListen'),
    (e[(e.EventDispose = 103)] = 'EventDispose');
})(Ut || (Ut = {}));
function b1(e) {
  switch (e) {
    case 100:
      return 'req';
    case 101:
      return 'cancel';
    case 102:
      return 'subscribe';
    case 103:
      return 'unsubscribe';
  }
}
var zt;
(function (e) {
  (e[(e.Initialize = 200)] = 'Initialize'),
    (e[(e.PromiseSuccess = 201)] = 'PromiseSuccess'),
    (e[(e.PromiseError = 202)] = 'PromiseError'),
    (e[(e.PromiseErrorObj = 203)] = 'PromiseErrorObj'),
    (e[(e.EventFire = 204)] = 'EventFire');
})(zt || (zt = {}));
function ne(e) {
  switch (e) {
    case 200:
      return 'init';
    case 201:
      return 'reply:';
    case 202:
    case 203:
      return 'replyErr:';
    case 204:
      return 'event:';
  }
}
var u1;
(function (e) {
  (e[(e.Uninitialized = 0)] = 'Uninitialized'), (e[(e.Idle = 1)] = 'Idle');
})(u1 || (u1 = {}));
function A1(e) {
  var t = 0;
  for (var r = 0; ; r += 7) {
    var i = e.read(1);
    if (((t |= (i.buffer[0] & 127) << r), !(i.buffer[0] & 128))) return t;
  }
}
var b0 = l1(0);
function C1(e, t) {
  if (t === 0) {
    e.write(b0);
    return;
  }
  var r = 0;
  for (var n = t; n !== 0; n = n >>> 7) r++;
  var i = G.alloc(r);
  for (var _n4 = 0; t !== 0; _n4++)
    (i.buffer[_n4] = t & 127), (t = t >>> 7), t > 0 && (i.buffer[_n4] |= 128);
  e.write(i);
}
var Ft = /*#__PURE__*/ (function () {
    function Ft(e) {
      _classCallCheck(this, Ft);
      (this.b = e), (this.a = 0);
    }
    return _createClass(Ft, [
      {
        key: 'read',
        value: function read(e) {
          var t = this.b.slice(this.a, this.a + e);
          return (this.a += t.byteLength), t;
        },
      },
    ]);
  })(),
  qt = /*#__PURE__*/ (function () {
    function qt() {
      _classCallCheck(this, qt);
      this.a = [];
    }
    return _createClass(qt, [
      {
        key: 'buffer',
        get: function get() {
          return G.concat(this.a);
        },
      },
      {
        key: 'write',
        value: function write(e) {
          this.a.push(e);
        },
      },
    ]);
  })(),
  U;
(function (e) {
  (e[(e.Undefined = 0)] = 'Undefined'),
    (e[(e.String = 1)] = 'String'),
    (e[(e.Buffer = 2)] = 'Buffer'),
    (e[(e.VSBuffer = 3)] = 'VSBuffer'),
    (e[(e.Array = 4)] = 'Array'),
    (e[(e.Object = 5)] = 'Object'),
    (e[(e.Int = 6)] = 'Int');
})(U || (U = {}));
function l1(e) {
  var t = G.alloc(1);
  return t.writeUInt8(e, 0), t;
}
var h1 = {
    Undefined: l1(U.Undefined),
    String: l1(U.String),
    Buffer: l1(U.Buffer),
    VSBuffer: l1(U.VSBuffer),
    Array: l1(U.Array),
    Object: l1(U.Object),
    Uint: l1(U.Int),
  },
  A0 = (typeof Buffer === 'undefined' ? 'undefined' : _typeof(Buffer)) < 'u';
function D1(e, t) {
  if (_typeof(t) > 'u') e.write(h1.Undefined);
  else if (typeof t == 'string') {
    var r = G.fromString(t);
    e.write(h1.String), C1(e, r.byteLength), e.write(r);
  } else if (A0 && Buffer.isBuffer(t)) {
    var _r6 = G.wrap(t);
    e.write(h1.Buffer), C1(e, _r6.byteLength), e.write(_r6);
  } else if (t instanceof G) e.write(h1.VSBuffer), C1(e, t.byteLength), e.write(t);
  else if (Array.isArray(t)) {
    e.write(h1.Array), C1(e, t.length);
    var _iterator35 = _createForOfIteratorHelper(t),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
        var _r7 = _step35.value;
        D1(e, _r7);
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
  } else if (typeof t == 'number' && (t | 0) === t) e.write(h1.Uint), C1(e, t);
  else {
    var _r8 = G.fromString(JSON.stringify(t));
    e.write(h1.Object), C1(e, _r8.byteLength), e.write(_r8);
  }
}
function I1(e) {
  switch (e.read(1).readUInt8(0)) {
    case U.Undefined:
      return;
    case U.String:
      return e.read(A1(e)).toString();
    case U.Buffer:
      return e.read(A1(e)).buffer;
    case U.VSBuffer:
      return e.read(A1(e));
    case U.Array: {
      var r = A1(e),
        i = [];
      for (var n = 0; n < r; n++) i.push(I1(e));
      return i;
    }
    case U.Object:
      return JSON.parse(e.read(A1(e)).toString());
    case U.Int:
      return A1(e);
  }
}
var C0 = /*#__PURE__*/ (function () {
    function C0(e, t) {
      var _this24 = this;
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e3;
      _classCallCheck(this, C0);
      (this.h = e),
        (this.j = t),
        (this.k = r),
        (this.l = i),
        (this.b = new Map()),
        (this.d = new Map()),
        (this.g = new Map()),
        (this.f = this.h.onMessage(function (n) {
          return _this24.q(n);
        })),
        this.m({
          type: 200,
        });
    }
    return _createClass(C0, [
      {
        key: 'registerChannel',
        value: function registerChannel(e, t) {
          var _this25 = this;
          this.b.set(e, t),
            setTimeout(function () {
              return _this25.w(e);
            }, 0);
        },
      },
      {
        key: 'm',
        value: function m(e) {
          switch (e.type) {
            case 200: {
              var _this$k;
              var _t7 = this.o([e.type]);
              (_this$k = this.k) === null ||
                _this$k === void 0 ||
                _this$k.logOutgoing(_t7, 0, 1, ne(e.type));
              return;
            }
            case 201:
            case 202:
            case 204:
            case 203: {
              var _this$k2;
              var _t8 = this.o([e.type, e.id], e.data);
              (_this$k2 = this.k) === null ||
                _this$k2 === void 0 ||
                _this$k2.logOutgoing(_t8, e.id, 1, ne(e.type), e.data);
              return;
            }
          }
        },
      },
      {
        key: 'o',
        value: function o(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
          var r = new qt();
          return D1(r, e), D1(r, t), this.p(r.buffer);
        },
      },
      {
        key: 'p',
        value: function p(e) {
          try {
            return this.h.send(e), e.byteLength;
          } catch (_unused9) {
            return 0;
          }
        },
      },
      {
        key: 'q',
        value: function q(e) {
          var _this$k3, _this$k4, _this$k5, _this$k6;
          var t = new Ft(e),
            r = I1(t),
            i = I1(t),
            n = r[0];
          switch (n) {
            case 100:
              return (
                (_this$k3 = this.k) !== null &&
                  _this$k3 !== void 0 &&
                  _this$k3.logIncoming(
                    e.byteLength,
                    r[1],
                    1,
                    ''.concat(b1(n), ': ').concat(r[2], '.').concat(r[3]),
                    i,
                  ),
                this.s({
                  type: n,
                  id: r[1],
                  channelName: r[2],
                  name: r[3],
                  arg: i,
                })
              );
            case 102:
              return (
                (_this$k4 = this.k) !== null &&
                  _this$k4 !== void 0 &&
                  _this$k4.logIncoming(
                    e.byteLength,
                    r[1],
                    1,
                    ''.concat(b1(n), ': ').concat(r[2], '.').concat(r[3]),
                    i,
                  ),
                this.t({
                  type: n,
                  id: r[1],
                  channelName: r[2],
                  name: r[3],
                  arg: i,
                })
              );
            case 101:
              return (
                (_this$k5 = this.k) !== null &&
                  _this$k5 !== void 0 &&
                  _this$k5.logIncoming(e.byteLength, r[1], 1, ''.concat(b1(n))),
                this.u({
                  type: n,
                  id: r[1],
                })
              );
            case 103:
              return (
                (_this$k6 = this.k) !== null &&
                  _this$k6 !== void 0 &&
                  _this$k6.logIncoming(e.byteLength, r[1], 1, ''.concat(b1(n))),
                this.u({
                  type: n,
                  id: r[1],
                })
              );
          }
        },
      },
      {
        key: 's',
        value: function s(e) {
          var _this26 = this;
          var t = this.b.get(e.channelName);
          if (!t) {
            this.v(e);
            return;
          }
          var r = new Ke();
          var i;
          try {
            i = t.call(this.j, e.name, e.arg, r.token);
          } catch (o) {
            i = Promise.reject(o);
          }
          var n = e.id;
          i.then(
            function (o) {
              _this26.m({
                id: n,
                data: o,
                type: 201,
              });
            },
            function (o) {
              o instanceof Error
                ? _this26.m({
                    id: n,
                    data: {
                      message: o.message,
                      name: o.name,
                      stack: o.stack ? o.stack.split('\n') : void 0,
                    },
                    type: 202,
                  })
                : _this26.m({
                    id: n,
                    data: o,
                    type: 203,
                  });
            },
          )['finally'](function () {
            s.dispose(), _this26.d['delete'](e.id);
          });
          var s = ve(function () {
            return r.cancel();
          });
          this.d.set(e.id, s);
        },
      },
      {
        key: 't',
        value: function t(e) {
          var _this27 = this;
          var t = this.b.get(e.channelName);
          if (!t) {
            this.v(e);
            return;
          }
          var r = e.id,
            n = t.listen(
              this.j,
              e.name,
              e.arg,
            )(function (s) {
              return _this27.m({
                id: r,
                data: s,
                type: 204,
              });
            });
          this.d.set(e.id, n);
        },
      },
      {
        key: 'u',
        value: function u(e) {
          var t = this.d.get(e.id);
          t && (t.dispose(), this.d['delete'](e.id));
        },
      },
      {
        key: 'v',
        value: function v(e) {
          var _this28 = this;
          var t = this.g.get(e.channelName);
          t || ((t = []), this.g.set(e.channelName, t));
          var r = setTimeout(function () {
            console.error('Unknown channel: '.concat(e.channelName)),
              e.type === 100 &&
                _this28.m({
                  id: e.id,
                  data: {
                    name: 'Unknown channel',
                    message: "Channel name '"
                      .concat(e.channelName, "' timed out after ")
                      .concat(_this28.l, 'ms'),
                    stack: void 0,
                  },
                  type: 202,
                });
          }, this.l);
          t.push({
            request: e,
            timeoutTimer: r,
          });
        },
      },
      {
        key: 'w',
        value: function w(e) {
          var t = this.g.get(e);
          if (t) {
            var _iterator36 = _createForOfIteratorHelper(t),
              _step36;
            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
                var r = _step36.value;
                switch ((clearTimeout(r.timeoutTimer), r.request.type)) {
                  case 100:
                    this.s(r.request);
                    break;
                  case 102:
                    this.t(r.request);
                    break;
                }
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
            this.g['delete'](e);
          }
        },
      },
      {
        key: 'dispose',
        value: function dispose() {
          this.f && (this.f.dispose(), (this.f = null)), E1(this.d.values()), this.d.clear();
        },
      },
    ]);
  })(),
  Wt;
(function (e) {
  (e[(e.LocalSide = 0)] = 'LocalSide'), (e[(e.OtherSide = 1)] = 'OtherSide');
})(Wt || (Wt = {}));
var $0 = /*#__PURE__*/ (function () {
  function $0(e) {
    var _this29 = this;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, $0);
    (this.l = e),
      (this.a = !1),
      (this.b = u1.Uninitialized),
      (this.d = new Set()),
      (this.f = new Map()),
      (this.g = 0),
      (this.k = new H()),
      (this.onDidInitialize = this.k.event),
      (this.h = this.l.onMessage(function (r) {
        return _this29.s(r);
      })),
      (this.j = t);
  }
  return _createClass($0, [
    {
      key: 'getChannel',
      value: function getChannel(e) {
        var t = this;
        return {
          call: function call(r, i, n) {
            return t.a ? Promise.reject(new i1()) : t.m(e, r, i, n);
          },
          listen: function listen(r, i) {
            return t.a ? Z.None : t.o(e, r, i);
          },
        };
      },
    },
    {
      key: 'm',
      value: function m(e, t, r) {
        var _this30 = this;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : w1.None;
        var n = this.g++,
          o = {
            id: n,
            type: 100,
            channelName: e,
            name: t,
            arg: r,
          };
        if (i.isCancellationRequested) return Promise.reject(new i1());
        var a, l;
        return new Promise(function (u, f) {
          if (i.isCancellationRequested) return f(new i1());
          var d = function d() {
            var S = function S(_) {
              switch (_.type) {
                case 201:
                  _this30.f['delete'](n), u(_.data);
                  break;
                case 202: {
                  _this30.f['delete'](n);
                  var R = new Error(_.data.message);
                  (R.stack = Array.isArray(_.data.stack) ? _.data.stack.join('\n') : _.data.stack),
                    (R.name = _.data.name),
                    f(R);
                  break;
                }
                case 203:
                  _this30.f['delete'](n), f(_.data);
                  break;
              }
            };
            _this30.f.set(n, S), _this30.p(o);
          };
          var w = null;
          _this30.b === u1.Idle
            ? d()
            : ((w = xe(function (S) {
                return _this30.u();
              })),
              w.then(function () {
                (w = null), d();
              }));
          var C = function C() {
            w
              ? (w.cancel(), (w = null))
              : _this30.p({
                  id: n,
                  type: 101,
                }),
              f(new i1());
          };
          (a = i.onCancellationRequested(C)),
            (l = {
              dispose: Re(function () {
                C(), a.dispose();
              }),
            }),
            _this30.d.add(l);
        })['finally'](function () {
          a.dispose(), _this30.d['delete'](l);
        });
      },
    },
    {
      key: 'o',
      value: function o(e, t, r) {
        var _this31 = this;
        var i = this.g++,
          s = {
            id: i,
            type: 102,
            channelName: e,
            name: t,
            arg: r,
          };
        var o = null;
        var a = new H({
            onWillAddFirstListener: function onWillAddFirstListener() {
              var c = function c() {
                _this31.d.add(a), _this31.p(s);
              };
              _this31.b === u1.Idle
                ? c()
                : ((o = xe(function (u) {
                    return _this31.u();
                  })),
                  o.then(function () {
                    (o = null), c();
                  }));
            },
            onDidRemoveLastListener: function onDidRemoveLastListener() {
              o
                ? (o.cancel(), (o = null))
                : (_this31.d['delete'](a),
                  _this31.p({
                    id: i,
                    type: 103,
                  }));
            },
          }),
          l = function l(c) {
            return a.fire(c.data);
          };
        return this.f.set(i, l), a.event;
      },
    },
    {
      key: 'p',
      value: function p(e) {
        switch (e.type) {
          case 100:
          case 102: {
            var _this$j4;
            var _t9 = this.q([e.type, e.id, e.channelName, e.name], e.arg);
            (_this$j4 = this.j) === null ||
              _this$j4 === void 0 ||
              _this$j4.logOutgoing(
                _t9,
                e.id,
                0,
                ''.concat(b1(e.type), ': ').concat(e.channelName, '.').concat(e.name),
                e.arg,
              );
            return;
          }
          case 101:
          case 103: {
            var _this$j5;
            var _t0 = this.q([e.type, e.id]);
            (_this$j5 = this.j) === null ||
              _this$j5 === void 0 ||
              _this$j5.logOutgoing(_t0, e.id, 0, b1(e.type));
            return;
          }
        }
      },
    },
    {
      key: 'q',
      value: function q(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
        var r = new qt();
        return D1(r, e), D1(r, t), this.r(r.buffer);
      },
    },
    {
      key: 'r',
      value: function r(e) {
        try {
          return this.l.send(e), e.byteLength;
        } catch (_unused0) {
          return 0;
        }
      },
    },
    {
      key: 's',
      value: function s(e) {
        var _this$j6, _this$j7;
        var t = new Ft(e),
          r = I1(t),
          i = I1(t),
          n = r[0];
        switch (n) {
          case 200:
            return (
              (_this$j6 = this.j) !== null &&
                _this$j6 !== void 0 &&
                _this$j6.logIncoming(e.byteLength, 0, 0, ne(n)),
              this.t({
                type: r[0],
              })
            );
          case 201:
          case 202:
          case 204:
          case 203:
            return (
              (_this$j7 = this.j) !== null &&
                _this$j7 !== void 0 &&
                _this$j7.logIncoming(e.byteLength, r[1], 0, ne(n), i),
              this.t({
                type: r[0],
                id: r[1],
                data: i,
              })
            );
        }
      },
    },
    {
      key: 't',
      value: function t(e) {
        var _this$f$get;
        if (e.type === 200) {
          (this.b = u1.Idle), this.k.fire();
          return;
        }
        (_this$f$get = this.f.get(e.id)) === null || _this$f$get === void 0 || _this$f$get(e);
      },
    },
    {
      key: 'onDidInitializePromise',
      get: function get() {
        return Z.toPromise(this.onDidInitialize);
      },
    },
    {
      key: 'u',
      value: function u() {
        return this.b === u1.Idle ? Promise.resolve() : this.onDidInitializePromise;
      },
    },
    {
      key: 'dispose',
      value: function dispose() {
        (this.a = !0),
          this.h && (this.h.dispose(), (this.h = null)),
          E1(this.d.values()),
          this.d.clear();
      },
    },
  ]);
})();
__decorate([y0], $0.prototype, 'onDidInitializePromise', null);
var Bt;
(function (e) {
  function t(s, o, a) {
    var l = s,
      c = a && a.disableMarshalling,
      u = new Map();
    for (var f in l) i(f) && u.set(f, Z.buffer(l[f], !0, void 0, o));
    return new /*#__PURE__*/ ((function () {
      function _class4() {
        _classCallCheck(this, _class4);
      }
      return _createClass(_class4, [
        {
          key: 'listen',
          value: function listen(f, d, w) {
            var C = u.get(d);
            if (C) return C;
            var S = l[d];
            if (typeof S == 'function') {
              if (n(d)) return S.call(l, w);
              if (i(d)) return u.set(d, Z.buffer(l[d], !0, void 0, o)), u.get(d);
            }
            throw new _1('Event not found: '.concat(d));
          },
        },
        {
          key: 'call',
          value: function call(f, d, w) {
            var C = l[d];
            if (typeof C == 'function') {
              if (!c && Array.isArray(w)) for (var _ = 0; _ < w.length; _++) w[_] = ie(w[_]);
              var S = C.apply(l, w);
              return S instanceof Promise || (S = Promise.resolve(S)), S;
            }
            throw new _1('Method not found: '.concat(d));
          },
        },
      ]);
    })())();
  }
  e.fromService = t;
  function r(s, o) {
    var a = o && o.disableMarshalling;
    return new Proxy(
      {},
      {
        get: function get(l, c) {
          var _o$properties;
          if (typeof c == 'string')
            return o !== null &&
              o !== void 0 &&
              (_o$properties = o.properties) !== null &&
              _o$properties !== void 0 &&
              _o$properties.has(c)
              ? o.properties.get(c)
              : n(c)
                ? function (u) {
                    return s.listen(c, u);
                  }
                : i(c)
                  ? s.listen(c)
                  : /*#__PURE__*/ _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee21() {
                        var f,
                          _len8,
                          u,
                          _key8,
                          d,
                          _args33 = arguments;
                        return _regeneratorRuntime().wrap(function _callee21$(_context33) {
                          while (1)
                            switch ((_context33.prev = _context33.next)) {
                              case 0:
                                for (
                                  _len8 = _args33.length, u = new Array(_len8), _key8 = 0;
                                  _key8 < _len8;
                                  _key8++
                                ) {
                                  u[_key8] = _args33[_key8];
                                }
                                o && !mr(o.context) ? (f = [o.context].concat(u)) : (f = u);
                                _context33.next = 4;
                                return s.call(c, f);
                              case 4:
                                d = _context33.sent;
                                return _context33.abrupt('return', a ? d : ie(d));
                              case 6:
                              case 'end':
                                return _context33.stop();
                            }
                        }, _callee21);
                      }),
                    );
          throw new _1('Property not found: '.concat(String(c)));
        },
      },
    );
  }
  e.toService = r;
  function i(s) {
    return s[0] === 'o' && s[1] === 'n' && lt(s.charCodeAt(2));
  }
  function n(s) {
    return /^onDynamic/.test(s) && lt(s.charCodeAt(9));
  }
})(Bt || (Bt = {}));
var _0 = /*#__PURE__*/ (function (_C) {
    function _0(e) {
      var _this32;
      _classCallCheck(this, _0);
      (_this32 = _callSuper(this, _0, [
        {
          send: function send(t) {
            try {
              var _process$send, _process3;
              (_process$send = (_process3 = process).send) === null ||
                _process$send === void 0 ||
                _process$send.call(_process3, t.buffer.toString('base64'));
            } catch (_unused1) {}
          },
          onMessage: Z.fromNodeEventEmitter(process, 'message', function (t) {
            return G.wrap(Buffer.from(t, 'base64'));
          }),
        },
        e,
      ])),
        process.once('disconnect', function () {
          return _this32.dispose();
        });
      return _this32;
    }
    _inherits(_0, _C);
    return _createClass(_0);
  })(C0),
  E0 = /*#__PURE__*/ (function () {
    function E0(e) {
      _classCallCheck(this, E0);
      this.b = e;
    }
    return _createClass(E0, [
      {
        key: 'listen',
        value: function listen(e, t) {
          throw new Error('Event not found: '.concat(t));
        },
      },
      {
        key: 'call',
        value: function call(e, t, _ref17) {
          var r = _ref17.eventName,
            i = _ref17.data;
          return t === 'capture'
            ? (this.b.forEach(function (n) {
                return n.capture(r, i);
              }),
              Promise.resolve(null))
            : t === 'registerAuthId'
              ? (this.b.forEach(function (n) {
                  return n.registerAuthId(i);
                }),
                Promise.resolve(null))
              : (this.b.forEach(function (n) {
                  return n.log(r, i);
                }),
                Promise.resolve(null));
        },
      },
    ]);
  })();
var x0 = /*#__PURE__*/ (function () {
  function x0(e, t, r, i, n) {
    _classCallCheck(this, x0);
    (this.e = e),
      (this.f = t),
      (this.g = r),
      (this.h = n),
      this.g || (this.g = {}),
      typeof i == 'function' ? (this.a = i()) : (this.a = i),
      (this.b = null);
  }
  return _createClass(x0, [
    {
      key: 'registerAuthId',
      value: function registerAuthId(e) {
        this.c = e;
      },
    },
    {
      key: 'i',
      value: function i(e) {},
    },
    {
      key: 'log',
      value: function log(e, t) {},
    },
    {
      key: 'capture',
      value: function capture(e, t) {},
    },
    {
      key: 'flush',
      value: function flush() {
        var _this33 = this;
        return this.a
          ? new Promise(function (e) {
              _this33.i(function (t) {
                t.unload(!0, function () {
                  (_this33.a = void 0), e(void 0);
                });
              });
            })
          : Promise.resolve(void 0);
      },
    },
  ]);
})();
function S0(_x48, _x49) {
  return _S.apply(this, arguments);
}
function _S() {
  _S = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee35(e, t) {
      var _r$res$statusCode;
      var r, i, n;
      return _regeneratorRuntime().wrap(function _callee35$(_context48) {
        while (1)
          switch ((_context48.prev = _context48.next)) {
            case 0:
              _context48.next = 2;
              return t.request(e, w1.None);
            case 2:
              r = _context48.sent;
              _context48.next = 5;
              return e0(r.stream);
            case 5:
              i = _context48.sent.toString();
              n =
                (_r$res$statusCode = r.res.statusCode) !== null && _r$res$statusCode !== void 0
                  ? _r$res$statusCode
                  : 200;
              return _context48.abrupt('return', {
                headers: r.res.headers,
                statusCode: n,
                responseData: i,
              });
            case 8:
            case 'end':
              return _context48.stop();
          }
      }, _callee35);
    }),
  );
  return _S.apply(this, arguments);
}
function k0(_x50) {
  return _k.apply(this, arguments);
}
function _k() {
  _k = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee36(e) {
      var t;
      return _regeneratorRuntime().wrap(function _callee36$(_context49) {
        while (1)
          switch ((_context49.prev = _context49.next)) {
            case 0:
              t = {
                method: e.type,
                headers: e.headers,
              };
              return _context49.abrupt(
                'return',
                new Promise(function (i, n) {
                  var _e$url;
                  var s = P0.request(
                    (_e$url = e.url) !== null && _e$url !== void 0 ? _e$url : '',
                    t,
                    function (o) {
                      o.on('data', function (a) {
                        var _o$statusCode;
                        i({
                          headers: o.headers,
                          statusCode:
                            (_o$statusCode = o.statusCode) !== null && _o$statusCode !== void 0
                              ? _o$statusCode
                              : 200,
                          responseData: a.toString(),
                        });
                      }),
                        o.on('error', function (a) {
                          n(a);
                        });
                    },
                  );
                  s.write(e.data, function (o) {
                    o && n(o);
                  }),
                    s.end();
                }),
              );
            case 2:
            case 'end':
              return _context49.stop();
          }
      }, _callee36);
    }),
  );
  return _k.apply(this, arguments);
}
function O0(_x51, _x52, _x53) {
  return _O.apply(this, arguments);
}
function _O() {
  _O = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee37(e, t, r) {
      var i, n, s;
      return _regeneratorRuntime().wrap(
        function _callee37$(_context50) {
          while (1)
            switch ((_context50.prev = _context50.next)) {
              case 0:
                (i = typeof t.data == 'string' ? t.data : new TextDecoder().decode(t.data)),
                  (n = {
                    type: 'POST',
                    headers: _objectSpread(
                      _objectSpread({}, t.headers),
                      {},
                      {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(t.data).toString(),
                      },
                    ),
                    url: t.urlString,
                    data: i,
                  });
                _context50.prev = 1;
                if (!e) {
                  _context50.next = 8;
                  break;
                }
                _context50.next = 5;
                return S0(n, e);
              case 5:
                _context50.t0 = _context50.sent;
                _context50.next = 11;
                break;
              case 8:
                _context50.next = 10;
                return k0(n);
              case 10:
                _context50.t0 = _context50.sent;
              case 11:
                s = _context50.t0;
                r(s.statusCode, s.headers, s.responseData);
                _context50.next = 18;
                break;
              case 15:
                _context50.prev = 15;
                _context50.t1 = _context50['catch'](1);
                r(0, {});
              case 18:
              case 'end':
                return _context50.stop();
            }
        },
        _callee37,
        null,
        [[1, 15]],
      );
    }),
  );
  return _O.apply(this, arguments);
}
var D0 = /*#__PURE__*/ (function (_x54) {
    function D0(e, t, r, i, n) {
      _classCallCheck(this, D0);
      var s = {
        sendPOST: function sendPOST(o, a) {
          O0(e, o, a);
        },
      };
      return _callSuper(this, D0, [t, r, i, n, s]);
    }
    _inherits(D0, _x54);
    return _createClass(D0, [
      {
        key: 'fetch',
        value: function fetch(e, t) {
          return (0, _nodeFetch['default'])(e, t);
        },
      },
    ]);
  })(x0),
  Vt = new D0(void 0, !1, process.argv[2], JSON.parse(process.argv[3]), process.argv[4]);
process.once('exit', function () {
  return Vt.flush();
});
var I0 = new E0([Vt]),
  j0 = new _0('telemetry');
j0.registerChannel('telemetryAppender', I0);

//# debugId=9dcd5ffe-a927-5a0b-8a97-16950e7b65f9

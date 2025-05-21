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
var _ref;
var _Ft,
  _Z,
  _A,
  _Ut,
  _qt,
  _Class2,
  _G,
  _Se,
  _Bt,
  _process,
  _K,
  _K2,
  _e5,
  _process2,
  _$,
  _E,
  _N,
  _X,
  _J,
  _Oe;
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
    for (var _t6 in e)
      'default' !== _t6 &&
        {}.hasOwnProperty.call(e, _t6) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t6)) &&
        (i.get || i.set)
          ? o(f, _t6, i)
          : (f[_t6] = e[_t6]));
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
function _createForOfIteratorHelper(r, e) {
  var t = ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (!t) {
    if (
      Array.isArray(r) ||
      (t = _unsupportedIterableToArray(r)) ||
      (e && r && 'number' == typeof r.length)
    ) {
      t && (r = t);
      var _n7 = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n7 >= r.length
            ? {
                done: !0,
              }
            : {
                done: !1,
                value: r[_n7++],
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
      (e._sentryDebugIds[n] = '5f009cf4-e4e6-5aaa-bfda-8ff6a2385421'));
  } catch (e) {}
})();
var _te = function te(e, t) {
  return (
    (_te =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (r, n) {
          r.__proto__ = n;
        }) ||
      function (r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
      }),
    _te(e, t)
  );
};
function __extends(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  _te(e, t);
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
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        }
        return t;
      }),
    _assign.apply(this, arguments)
  );
});
function __rest(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
function __decorate(e, t, r, n) {
  var i = arguments.length,
    s = i < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    l;
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.decorate == 'function'
  )
    s = Reflect.decorate(e, t, r, n);
  else
    for (var o = e.length - 1; o >= 0; o--)
      (l = e[o]) && (s = (i < 3 ? l(s) : i > 3 ? l(t, r, s) : l(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function __param(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function __esDecorate(e, t, r, n, i, s) {
  function l(P) {
    if (P !== void 0 && typeof P != 'function') throw new TypeError('Function expected');
    return P;
  }
  for (
    var o = n.kind,
      u = o === 'getter' ? 'get' : o === 'setter' ? 'set' : 'value',
      a = !t && e ? (n['static'] ? e : e.prototype) : null,
      c = t || (a ? Object.getOwnPropertyDescriptor(a, n.name) : {}),
      f,
      h = !1,
      m = r.length - 1;
    m >= 0;
    m--
  ) {
    var v = {};
    for (var C in n) v[C] = C === 'access' ? {} : n[C];
    for (var C in n.access) v.access[C] = n.access[C];
    v.addInitializer = function (P) {
      if (h) throw new TypeError('Cannot add initializers after decoration has completed');
      s.push(l(P || null));
    };
    var b = (0, r[m])(
      o === 'accessor'
        ? {
            get: c.get,
            set: c.set,
          }
        : c[u],
      v,
    );
    if (o === 'accessor') {
      if (b === void 0) continue;
      if (b === null || _typeof(b) != 'object') throw new TypeError('Object expected');
      (f = l(b.get)) && (c.get = f), (f = l(b.set)) && (c.set = f), (f = l(b.init)) && i.unshift(f);
    } else (f = l(b)) && (o === 'field' ? i.unshift(f) : (c[u] = f));
  }
  a && Object.defineProperty(a, n.name, c), (h = !0);
}
function __runInitializers(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
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
function __awaiter(e, t, r, n) {
  function i(s) {
    return s instanceof r
      ? s
      : new r(function (l) {
          l(s);
        });
  }
  return new (r || (r = Promise))(function (s, l) {
    function o(c) {
      try {
        a(n.next(c));
      } catch (f) {
        l(f);
      }
    }
    function u(c) {
      try {
        a(n['throw'](c));
      } catch (f) {
        l(f);
      }
    }
    function a(c) {
      c.done ? s(c.value) : i(c.value).then(o, u);
    }
    a((n = n.apply(e, t || [])).next());
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
    n,
    i,
    s,
    l;
  return (
    (l = {
      next: o(0),
      throw: o(1),
      return: o(2),
    }),
    typeof Symbol == 'function' &&
      (l[Symbol.iterator] = function () {
        return this;
      }),
    l
  );
  function o(a) {
    return function (c) {
      return u([a, c]);
    };
  }
  function u(a) {
    if (n) throw new TypeError('Generator is already executing.');
    for (; l && ((l = 0), a[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          i &&
            (s =
              a[0] & 2
                ? i['return']
                : a[0]
                  ? i['throw'] || ((s = i['return']) && s.call(i), 0)
                  : i.next) &&
            !(s = s.call(i, a[1])).done)
        )
          return s;
        switch (((i = 0), s && (a = [a[0] & 2, s.value]), a[0])) {
          case 0:
          case 1:
            s = a;
            break;
          case 4:
            return (
              r.label++,
              {
                value: a[1],
                done: !1,
              }
            );
          case 5:
            r.label++, (i = a[1]), (a = [0]);
            continue;
          case 7:
            (a = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((s = r.trys), !(s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (a[0] === 3 && (!s || (a[1] > s[0] && a[1] < s[3]))) {
              r.label = a[1];
              break;
            }
            if (a[0] === 6 && r.label < s[1]) {
              (r.label = s[1]), (s = a);
              break;
            }
            if (s && r.label < s[2]) {
              (r.label = s[2]), r.ops.push(a);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        a = t.call(e, r);
      } catch (c) {
        (a = [6, c]), (i = 0);
      } finally {
        n = s = 0;
      }
    if (a[0] & 5) throw a[1];
    return {
      value: a[0] ? a[1] : void 0,
      done: !0,
    };
  }
}
var __createBinding = (exports.__createBinding = Object.create
  ? function (e, t, r, n) {
      n === void 0 && (n = r);
      var i = Object.getOwnPropertyDescriptor(t, r);
      (!i || ('get' in i ? !t.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function get() {
            return t[r];
          },
        }),
        Object.defineProperty(e, n, i);
    }
  : function (e, t, r, n) {
      n === void 0 && (n = r), (e[n] = t[r]);
    });
function __exportStar(e, t) {
  for (var r in e)
    r !== 'default' && !Object.prototype.hasOwnProperty.call(t, r) && __createBinding(t, e, r);
}
function __values(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function next() {
        return (
          e && n >= e.length && (e = void 0),
          {
            value: e && e[n++],
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
  var n = r.call(e),
    i,
    s = [],
    l;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) s.push(i.value);
  } catch (o) {
    l = {
      error: o,
    };
  } finally {
    try {
      i && !i.done && (r = n['return']) && r.call(n);
    } finally {
      if (l) throw l.error;
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
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], l = 0, o = s.length; l < o; l++, i++) n[i] = s[l];
  return n;
}
function __spreadArray(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
  return e.concat(s || Array.prototype.slice.call(t));
}
function __await(e) {
  return this instanceof __await ? ((this.v = e), this) : new __await(e);
}
function __asyncGenerator(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var n = r.apply(e, t || []),
    i,
    s = [];
  return (
    (i = {}),
    o('next'),
    o('throw'),
    o('return', l),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function l(m) {
    return function (v) {
      return Promise.resolve(v).then(m, f);
    };
  }
  function o(m, v) {
    n[m] &&
      ((i[m] = function (C) {
        return new Promise(function (b, P) {
          s.push([m, C, b, P]) > 1 || u(m, C);
        });
      }),
      v && (i[m] = v(i[m])));
  }
  function u(m, v) {
    try {
      a(n[m](v));
    } catch (C) {
      h(s[0][3], C);
    }
  }
  function a(m) {
    m.value instanceof __await ? Promise.resolve(m.value.v).then(c, f) : h(s[0][2], m);
  }
  function c(m) {
    u('next', m);
  }
  function f(m) {
    u('throw', m);
  }
  function h(m, v) {
    m(v), s.shift(), s.length && u(s[0][0], s[0][1]);
  }
}
function __asyncDelegator(e) {
  var t, r;
  return (
    (t = {}),
    n('next'),
    n('throw', function (i) {
      throw i;
    }),
    n('return'),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function n(i, s) {
    t[i] = e[i]
      ? function (l) {
          return (r = !r)
            ? {
                value: __await(e[i](l)),
                done: !1,
              }
            : s
              ? s(l)
              : l;
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
      n('next'),
      n('throw'),
      n('return'),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(s) {
    r[s] =
      e[s] &&
      function (l) {
        return new Promise(function (o, u) {
          (l = e[s](l)), i(o, u, l.done, l.value);
        });
      };
  }
  function i(s, l, o, u) {
    Promise.resolve(u).then(function (a) {
      s({
        value: a,
        done: o,
      });
    }, l);
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
var Kt = Object.create
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
  return Kt(t, e), t;
}
function __importDefault(e) {
  return e && e.__esModule
    ? e
    : {
        default: e,
      };
}
function __classPrivateFieldGet(e, t, r, n) {
  if (r === 'a' && !n) throw new TypeError('Private accessor was defined without a getter');
  if (typeof t == 'function' ? e !== t || !n : !t.has(e))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return r === 'm' ? n : r === 'a' ? n.call(e) : n ? n.value : t.get(e);
}
function __classPrivateFieldSet(e, t, r, n, i) {
  if (n === 'm') throw new TypeError('Private method is not writable');
  if (n === 'a' && !i) throw new TypeError('Private accessor was defined without a setter');
  if (typeof t == 'function' ? e !== t || !i : !t.has(e))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return n === 'a' ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
}
function __classPrivateFieldIn(e, t) {
  if (t === null || (_typeof(t) != 'object' && typeof t != 'function'))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == 'function' ? t === e : e.has(t);
}
function __addDisposableResource(e, t, r) {
  if (t != null) {
    if (_typeof(t) != 'object' && typeof t != 'function') throw new TypeError('Object expected.');
    var n, i;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
      (n = t[Symbol.dispose]), r && (i = n);
    }
    if (typeof n != 'function') throw new TypeError('Object not disposable.');
    i &&
      (n = function n() {
        try {
          i.call(this);
        } catch (s) {
          return Promise.reject(s);
        }
      }),
      e.stack.push({
        value: t,
        dispose: n,
        async: r,
      });
  } else
    r &&
      e.stack.push({
        async: !0,
      });
  return t;
}
var Jt =
  typeof SuppressedError == 'function'
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return (n.name = 'SuppressedError'), (n.error = e), (n.suppressed = t), n;
      };
function __disposeResources(e) {
  function t(n) {
    (e.error = e.hasError ? new Jt(n, e.error, 'An error was suppressed during disposal.') : n),
      (e.hasError = !0);
  }
  function r() {
    for (; e.stack.length; ) {
      var n = e.stack.pop();
      try {
        var i = n.dispose && n.dispose.call(n.value);
        if (n.async)
          return Promise.resolve(i).then(r, function (s) {
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
function Qt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = r,
    s = n;
  for (; i < s; ) {
    var l = Math.floor((i + s) / 2);
    t(e[l]) ? (i = l + 1) : (s = l);
  }
  return i - 1;
}
var C2 =
    ((_Ft = /*#__PURE__*/ (function () {
      function Ft(t) {
        _classCallCheck(this, Ft);
        (this.e = t), (this.c = 0);
      }
      return _createClass(Ft, [
        {
          key: 'findLastMonotonous',
          value: function findLastMonotonous(t) {
            if (Ft.assertInvariants) {
              if (this.d) {
                var _iterator7 = _createForOfIteratorHelper(this.e),
                  _step7;
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                    var n = _step7.value;
                    if (this.d(n) && !t(n))
                      throw new Error(
                        'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.',
                      );
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
              this.d = t;
            }
            var r = Qt(this.e, t, this.c);
            return (this.c = r + 1), r === -1 ? void 0 : this.e[r];
          },
        },
      ]);
    })()),
    (_Ft.assertInvariants = !1),
    _Ft),
  Zt = /*#__PURE__*/ (function () {
    function Zt() {
      _classCallCheck(this, Zt);
      (this.b = []),
        (this.a = function (e) {
          setTimeout(function () {
            throw e.stack
              ? ne.isErrorNoTelemetry(e)
                ? new ne(e.message + '\n\n' + e.stack)
                : new Error(e.message + '\n\n' + e.stack)
              : e;
          }, 0);
        });
    }
    return _createClass(Zt, [
      {
        key: 'addListener',
        value: function addListener(e) {
          var _this = this;
          return (
            this.b.push(e),
            function () {
              _this.d(e);
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
  Gt = new Zt();
function k1(e) {
  Yt(e) || Gt.onUnexpectedError(e);
}
function Te(e) {
  if (e instanceof Error) {
    var t = e.name,
      r = e.message,
      n = e.stacktrace || e.stack;
    return {
      $isError: !0,
      name: t,
      message: r,
      stack: n,
      noTelemetry: ne.isErrorNoTelemetry(e),
    };
  }
  return e;
}
var re = 'Canceled';
function Yt(e) {
  return e instanceof Xt ? !0 : e instanceof Error && e.name === re && e.message === re;
}
var Xt = /*#__PURE__*/ (function (_Error) {
    function Xt() {
      var _this2;
      _classCallCheck(this, Xt);
      (_this2 = _callSuper(this, Xt, [re])), (_this2.name = _this2.message);
      return _this2;
    }
    _inherits(Xt, _Error);
    return _createClass(Xt);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  ne = /*#__PURE__*/ (function (_Error2) {
    function ke(t) {
      var _this3;
      _classCallCheck(this, ke);
      (_this3 = _callSuper(this, ke, [t])), (_this3.name = 'CodeExpectedError');
      return _this3;
    }
    _inherits(ke, _Error2);
    return _createClass(ke, null, [
      {
        key: 'fromError',
        value: function fromError(t) {
          if (t instanceof ke) return t;
          var r = new ke();
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
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  ie;
(function (e) {
  function t(s) {
    return s < 0;
  }
  e.isLessThan = t;
  function r(s) {
    return s <= 0;
  }
  e.isLessThanOrEqual = r;
  function n(s) {
    return s > 0;
  }
  e.isGreaterThan = n;
  function i(s) {
    return s === 0;
  }
  (e.isNeitherLessOrGreaterThan = i),
    (e.greaterThan = 1),
    (e.lessThan = -1),
    (e.neitherLessOrGreaterThan = 0);
})(ie || (ie = {}));
function er(e, t) {
  return function (r, n) {
    return t(e(r), e(n));
  };
}
var tr = function tr(e, t) {
    return e - t;
  },
  L2 =
    ((_Z = /*#__PURE__*/ (function () {
      function Z1(t) {
        _classCallCheck(this, Z1);
        this.iterate = t;
      }
      return _createClass(Z1, [
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
            var _this4 = this;
            return new Z1(function (r) {
              return _this4.iterate(function (n) {
                return t(n) ? r(n) : !0;
              });
            });
          },
        },
        {
          key: 'map',
          value: function map(t) {
            var _this5 = this;
            return new Z1(function (r) {
              return _this5.iterate(function (n) {
                return r(t(n));
              });
            });
          },
        },
        {
          key: 'some',
          value: function some(t) {
            var r = !1;
            return (
              this.iterate(function (n) {
                return (r = t(n)), !r;
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
              this.iterate(function (n) {
                return t(n) ? ((r = n), !1) : !0;
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
              this.iterate(function (n) {
                return t(n) && (r = n), !0;
              }),
              r
            );
          },
        },
        {
          key: 'findLastMaxBy',
          value: function findLastMaxBy(t) {
            var r,
              n = !0;
            return (
              this.iterate(function (i) {
                return (n || ie.isGreaterThan(t(i, r))) && ((n = !1), (r = i)), !0;
              }),
              r
            );
          },
        },
      ]);
    })()),
    (_Z.empty = new _Z(function (t) {})),
    _Z),
  Ie;
function rr(e, t) {
  var r = Object.create(null);
  var _iterator8 = _createForOfIteratorHelper(e),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var n = _step8.value;
      var i = t(n);
      var s = r[i];
      s || (s = r[i] = []), s.push(n);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  return r;
}
var A2 =
  ((Ie = Symbol.toStringTag),
  /*#__PURE__*/ (function () {
    function A2(e, t) {
      _classCallCheck(this, A2);
      (this.b = t), (this.a = new Map()), (this[Ie] = 'SetWithKey');
      var _iterator9 = _createForOfIteratorHelper(e),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var r = _step9.value;
          this.add(r);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
    return _createClass(A2, [
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
          var _iterator0, _step0, e;
          return _regeneratorRuntime().wrap(
            function entries$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _iterator0 = _createForOfIteratorHelper(this.a.values());
                    _context.prev = 1;
                    _iterator0.s();
                  case 3:
                    if ((_step0 = _iterator0.n()).done) {
                      _context.next = 9;
                      break;
                    }
                    e = _step0.value;
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
                    _iterator0.e(_context.t0);
                  case 14:
                    _context.prev = 14;
                    _iterator0.f();
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
          var _iterator1, _step1, e;
          return _regeneratorRuntime().wrap(
            function values$(_context2) {
              while (1)
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _iterator1 = _createForOfIteratorHelper(this.a.values());
                    _context2.prev = 1;
                    _iterator1.s();
                  case 3:
                    if ((_step1 = _iterator1.n()).done) {
                      _context2.next = 9;
                      break;
                    }
                    e = _step1.value;
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
                    _iterator1.e(_context2.t0);
                  case 14:
                    _context2.prev = 14;
                    _iterator1.f();
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
          var _this6 = this;
          this.a.forEach(function (r) {
            return e.call(t, r, r, _this6);
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
  })());
function nr(e, t) {
  var r = this;
  var n = !1,
    i;
  return function () {
    if (n) return i;
    if (((n = !0), t))
      try {
        i = e.apply(r, arguments);
      } finally {
        t();
      }
    else i = e.apply(r, arguments);
    return i;
  };
}
var De,
  Me,
  je,
  ir = /*#__PURE__*/ _createClass(function ir(e, t) {
    _classCallCheck(this, ir);
    (this.uri = e), (this.value = t);
  });
function sr(e) {
  return Array.isArray(e);
}
var Fe =
    ((_ref = ((De = Symbol.toStringTag), Symbol.iterator)),
    (_A = /*#__PURE__*/ (function () {
      function A1(t, r) {
        _classCallCheck(this, A1);
        if (((this[De] = 'ResourceMap'), t instanceof A1))
          (this.d = new Map(t.d)), (this.e = r !== null && r !== void 0 ? r : A1.c);
        else if (sr(t)) {
          (this.d = new Map()), (this.e = r !== null && r !== void 0 ? r : A1.c);
          var _iterator10 = _createForOfIteratorHelper(t),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
              var _step10$value = _slicedToArray(_step10.value, 2),
                n = _step10$value[0],
                i = _step10$value[1];
              this.set(n, i);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        } else (this.d = new Map()), (this.e = t !== null && t !== void 0 ? t : A1.c);
      }
      return _createClass(A1, [
        {
          key: 'set',
          value: function set(t, r) {
            return this.d.set(this.e(t), new ir(t, r)), this;
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
            var _iterator11 = _createForOfIteratorHelper(this.d),
              _step11;
            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                var _step11$value = _slicedToArray(_step11.value, 2),
                  n = _step11$value[0],
                  i = _step11$value[1];
                t(i.value, i.uri, this);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          },
        },
        {
          key: 'values',
          value: /*#__PURE__*/ _regeneratorRuntime().mark(function values() {
            var _iterator12, _step12, t;
            return _regeneratorRuntime().wrap(
              function values$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _iterator12 = _createForOfIteratorHelper(this.d.values());
                      _context3.prev = 1;
                      _iterator12.s();
                    case 3:
                      if ((_step12 = _iterator12.n()).done) {
                        _context3.next = 9;
                        break;
                      }
                      t = _step12.value;
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
                      _iterator12.e(_context3.t0);
                    case 14:
                      _context3.prev = 14;
                      _iterator12.f();
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
            var _iterator13, _step13, t;
            return _regeneratorRuntime().wrap(
              function keys$(_context4) {
                while (1)
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      _iterator13 = _createForOfIteratorHelper(this.d.values());
                      _context4.prev = 1;
                      _iterator13.s();
                    case 3:
                      if ((_step13 = _iterator13.n()).done) {
                        _context4.next = 9;
                        break;
                      }
                      t = _step13.value;
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
                      _iterator13.e(_context4.t0);
                    case 14:
                      _context4.prev = 14;
                      _iterator13.f();
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
            var _iterator14, _step14, t;
            return _regeneratorRuntime().wrap(
              function entries$(_context5) {
                while (1)
                  switch ((_context5.prev = _context5.next)) {
                    case 0:
                      _iterator14 = _createForOfIteratorHelper(this.d.values());
                      _context5.prev = 1;
                      _iterator14.s();
                    case 3:
                      if ((_step14 = _iterator14.n()).done) {
                        _context5.next = 9;
                        break;
                      }
                      t = _step14.value;
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
                      _iterator14.e(_context5.t0);
                    case 14:
                      _context5.prev = 14;
                      _iterator14.f();
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
            var _iterator15, _step15, _step15$value, t;
            return _regeneratorRuntime().wrap(
              function value$(_context6) {
                while (1)
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      _iterator15 = _createForOfIteratorHelper(this.d);
                      _context6.prev = 1;
                      _iterator15.s();
                    case 3:
                      if ((_step15 = _iterator15.n()).done) {
                        _context6.next = 9;
                        break;
                      }
                      (_step15$value = _slicedToArray(_step15.value, 2)), (t = _step15$value[1]);
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
                      _iterator15.e(_context6.t0);
                    case 14:
                      _context6.prev = 14;
                      _iterator15.f();
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
    (_A.c = function (t) {
      return t.toString();
    }),
    _A),
  $2 = /*#__PURE__*/ (function (_ref2) {
    function $2(e, t) {
      _classCallCheck(this, $2);
      (this[Me] = 'ResourceSet'),
        !e || typeof e == 'function'
          ? (this.c = new Fe(e))
          : ((this.c = new Fe(t)), e.forEach(this.add, this));
    }
    return _createClass($2, [
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
          this.c.forEach(function (r, n) {
            return e.call(t, n, n, _this7);
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
  })(((Me = Symbol.toStringTag), Symbol.iterator)),
  Ue;
(function (e) {
  (e[(e.None = 0)] = 'None'), (e[(e.AsOld = 1)] = 'AsOld'), (e[(e.AsNew = 2)] = 'AsNew');
})(Ue || (Ue = {}));
var or = /*#__PURE__*/ (function (_ref3) {
    function or() {
      _classCallCheck(this, or);
      (this[je] = 'LinkedMap'),
        (this.c = new Map()),
        (this.d = void 0),
        (this.e = void 0),
        (this.f = 0),
        (this.g = 0);
    }
    return _createClass(or, [
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
          var n = this.c.get(e);
          if (n) (n.value = t), r !== 0 && this.m(n, r);
          else {
            switch (
              ((n = {
                key: e,
                value: t,
                next: void 0,
                previous: void 0,
              }),
              r)
            ) {
              case 0:
                this.k(n);
                break;
              case 1:
                this.j(n);
                break;
              case 2:
                this.k(n);
                break;
              default:
                this.k(n);
                break;
            }
            this.c.set(e, n), this.f++;
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
          var n = this.d;
          for (; n; ) {
            if ((t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this), this.g !== r))
              throw new Error('LinkedMap got modified during iteration.');
            n = n.next;
          }
        },
      },
      {
        key: 'keys',
        value: function keys() {
          var e = this,
            t = this.g;
          var r = this.d;
          var n = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return n;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (r) {
                var i = {
                  value: r.key,
                  done: !1,
                };
                return (r = r.next), i;
              } else
                return {
                  value: void 0,
                  done: !0,
                };
            },
          );
          return n;
        },
      },
      {
        key: 'values',
        value: function values() {
          var e = this,
            t = this.g;
          var r = this.d;
          var n = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return n;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (r) {
                var i = {
                  value: r.value,
                  done: !1,
                };
                return (r = r.next), i;
              } else
                return {
                  value: void 0,
                  done: !0,
                };
            },
          );
          return n;
        },
      },
      {
        key: 'entries',
        value: function entries() {
          var e = this,
            t = this.g;
          var r = this.d;
          var n = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return n;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (r) {
                var i = {
                  value: [r.key, r.value],
                  done: !1,
                };
                return (r = r.next), i;
              } else
                return {
                  value: void 0,
                  done: !0,
                };
            },
          );
          return n;
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
                n = e.previous;
              e === this.e ? ((n.next = void 0), (this.e = n)) : ((r.previous = n), (n.next = r)),
                (e.previous = void 0),
                (e.next = this.d),
                (this.d.previous = e),
                (this.d = e),
                this.g++;
            } else if (t === 2) {
              if (e === this.e) return;
              var _r2 = e.next,
                _n5 = e.previous;
              e === this.d
                ? ((_r2.previous = void 0), (this.d = _r2))
                : ((_r2.previous = _n5), (_n5.next = _r2)),
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
          var _iterator16 = _createForOfIteratorHelper(e),
            _step16;
          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
              var _step16$value = _slicedToArray(_step16.value, 2),
                t = _step16$value[0],
                r = _step16$value[1];
              this.set(t, r);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        },
      },
    ]);
  })(((je = Symbol.toStringTag), Symbol.iterator)),
  lr = /*#__PURE__*/ (function (_or) {
    function lr(e) {
      var _this8;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _classCallCheck(this, lr);
      (_this8 = _callSuper(this, lr)), (_this8.n = e), (_this8.o = Math.min(Math.max(0, t), 1));
      return _this8;
    }
    _inherits(lr, _or);
    return _createClass(lr, [
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
          return _superPropGet(lr, 'get', this, 3)([e, t]);
        },
      },
      {
        key: 'peek',
        value: function peek(e) {
          return _superPropGet(lr, 'get', this, 3)([e, 0]);
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          return _superPropGet(lr, 'set', this, 3)([e, t, 2]), this;
        },
      },
      {
        key: 'p',
        value: function p() {
          this.size > this.n && this.q(Math.round(this.n * this.o));
        },
      },
    ]);
  })(or),
  ar = /*#__PURE__*/ (function (_lr) {
    function ar(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _classCallCheck(this, ar);
      return _callSuper(this, ar, [e, t]);
    }
    _inherits(ar, _lr);
    return _createClass(ar, [
      {
        key: 'q',
        value: function q(e) {
          this.h(e);
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          return _superPropGet(ar, 'set', this, 3)([e, t]), this.p(), this;
        },
      },
    ]);
  })(lr),
  ur = /*#__PURE__*/ (function () {
    function ur() {
      _classCallCheck(this, ur);
      this.c = new Map();
    }
    return _createClass(ur, [
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
  se;
(function (e) {
  var _marked = /*#__PURE__*/ _regeneratorRuntime().mark(i),
    _marked2 = /*#__PURE__*/ _regeneratorRuntime().mark(o),
    _marked3 = /*#__PURE__*/ _regeneratorRuntime().mark(h),
    _marked4 = /*#__PURE__*/ _regeneratorRuntime().mark(m),
    _marked5 = /*#__PURE__*/ _regeneratorRuntime().mark(v),
    _marked6 = /*#__PURE__*/ _regeneratorRuntime().mark(C);
  function t(y) {
    return y && _typeof(y) == 'object' && typeof y[Symbol.iterator] == 'function';
  }
  e.is = t;
  var r = Object.freeze([]);
  function n() {
    return r;
  }
  e.empty = n;
  function i(y) {
    return _regeneratorRuntime().wrap(function i$(_context7) {
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
  e.single = i;
  function s(y) {
    return t(y) ? y : i(y);
  }
  e.wrap = s;
  function l(y) {
    return y || r;
  }
  e.from = l;
  function o(y) {
    var A;
    return _regeneratorRuntime().wrap(function o$(_context8) {
      while (1)
        switch ((_context8.prev = _context8.next)) {
          case 0:
            A = y.length - 1;
          case 1:
            if (!(A >= 0)) {
              _context8.next = 7;
              break;
            }
            _context8.next = 4;
            return y[A];
          case 4:
            A--;
            _context8.next = 1;
            break;
          case 7:
          case 'end':
            return _context8.stop();
        }
    }, _marked2);
  }
  e.reverse = o;
  function u(y) {
    return !y || y[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = u;
  function a(y) {
    return y[Symbol.iterator]().next().value;
  }
  e.first = a;
  function c(y, A) {
    var x = 0;
    var _iterator17 = _createForOfIteratorHelper(y),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
        var j = _step17.value;
        if (A(j, x++)) return !0;
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return !1;
  }
  e.some = c;
  function f(y, A) {
    var _iterator18 = _createForOfIteratorHelper(y),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
        var x = _step18.value;
        if (A(x)) return x;
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }
  e.find = f;
  function h(y, A) {
    var _iterator19, _step19, x;
    return _regeneratorRuntime().wrap(
      function h$(_context9) {
        while (1)
          switch ((_context9.prev = _context9.next)) {
            case 0:
              _iterator19 = _createForOfIteratorHelper(y);
              _context9.prev = 1;
              _iterator19.s();
            case 3:
              if ((_step19 = _iterator19.n()).done) {
                _context9.next = 11;
                break;
              }
              x = _step19.value;
              _context9.t0 = A(x);
              if (!_context9.t0) {
                _context9.next = 9;
                break;
              }
              _context9.next = 9;
              return x;
            case 9:
              _context9.next = 3;
              break;
            case 11:
              _context9.next = 16;
              break;
            case 13:
              _context9.prev = 13;
              _context9.t1 = _context9['catch'](1);
              _iterator19.e(_context9.t1);
            case 16:
              _context9.prev = 16;
              _iterator19.f();
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
  e.filter = h;
  function m(y, A) {
    var x, _iterator20, _step20, j;
    return _regeneratorRuntime().wrap(
      function m$(_context0) {
        while (1)
          switch ((_context0.prev = _context0.next)) {
            case 0:
              x = 0;
              _iterator20 = _createForOfIteratorHelper(y);
              _context0.prev = 2;
              _iterator20.s();
            case 4:
              if ((_step20 = _iterator20.n()).done) {
                _context0.next = 10;
                break;
              }
              j = _step20.value;
              _context0.next = 8;
              return A(j, x++);
            case 8:
              _context0.next = 4;
              break;
            case 10:
              _context0.next = 15;
              break;
            case 12:
              _context0.prev = 12;
              _context0.t0 = _context0['catch'](2);
              _iterator20.e(_context0.t0);
            case 15:
              _context0.prev = 15;
              _iterator20.f();
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
  e.map = m;
  function v(y, A) {
    var x, _iterator21, _step21, j;
    return _regeneratorRuntime().wrap(
      function v$(_context1) {
        while (1)
          switch ((_context1.prev = _context1.next)) {
            case 0:
              x = 0;
              _iterator21 = _createForOfIteratorHelper(y);
              _context1.prev = 2;
              _iterator21.s();
            case 4:
              if ((_step21 = _iterator21.n()).done) {
                _context1.next = 9;
                break;
              }
              j = _step21.value;
              return _context1.delegateYield(A(j, x++), 't0', 7);
            case 7:
              _context1.next = 4;
              break;
            case 9:
              _context1.next = 14;
              break;
            case 11:
              _context1.prev = 11;
              _context1.t1 = _context1['catch'](2);
              _iterator21.e(_context1.t1);
            case 14:
              _context1.prev = 14;
              _iterator21.f();
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
  e.flatMap = v;
  function C() {
    var _len,
      y,
      _key,
      _i,
      _y,
      A,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function C$(_context10) {
      while (1)
        switch ((_context10.prev = _context10.next)) {
          case 0:
            for (_len = _args10.length, y = new Array(_len), _key = 0; _key < _len; _key++) {
              y[_key] = _args10[_key];
            }
            (_i = 0), (_y = y);
          case 2:
            if (!(_i < _y.length)) {
              _context10.next = 8;
              break;
            }
            A = _y[_i];
            return _context10.delegateYield(A, 't0', 5);
          case 5:
            _i++;
            _context10.next = 2;
            break;
          case 8:
          case 'end':
            return _context10.stop();
        }
    }, _marked6);
  }
  e.concat = C;
  function b(y, A, x) {
    var j = x;
    var _iterator22 = _createForOfIteratorHelper(y),
      _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        var T = _step22.value;
        j = A(j, T);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return j;
  }
  e.reduce = b;
  function P(y, A) {
    var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : y.length;
    return /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context11) {
        while (1)
          switch ((_context11.prev = _context11.next)) {
            case 0:
              A < -y.length && (A = 0),
                A < 0 && (A += y.length),
                x < 0 ? (x += y.length) : x > y.length && (x = y.length);
            case 1:
              if (!(A < x)) {
                _context11.next = 7;
                break;
              }
              _context11.next = 4;
              return y[A];
            case 4:
              A++;
              _context11.next = 1;
              break;
            case 7:
            case 'end':
              return _context11.stop();
          }
      }, _callee);
    })();
  }
  e.slice = P;
  function N(y) {
    var A =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var x = [];
    if (A === 0) return [x, y];
    var j = y[Symbol.iterator]();
    for (var T = 0; T < A; T++) {
      var B = j.next();
      if (B.done) return [x, e.empty()];
      x.push(B.value);
    }
    return [
      x,
      _defineProperty({}, Symbol.iterator, function () {
        return j;
      }),
    ];
  }
  e.consume = N;
  function M(_x) {
    return _M.apply(this, arguments);
  }
  function _M() {
    _M = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(y) {
        var A, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, x;
        return _regeneratorRuntime().wrap(
          function _callee2$(_context12) {
            while (1)
              switch ((_context12.prev = _context12.next)) {
                case 0:
                  A = [];
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
                  x = _step.value;
                  A.push(x);
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
                  return _context12.abrupt('return', Promise.resolve(A));
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
    return _M.apply(this, arguments);
  }
  e.asyncToArray = M;
})(se || (se = {}));
var cr = !1,
  m1 = null,
  E2 =
    ((_Ut = /*#__PURE__*/ (function () {
      function Ut() {
        _classCallCheck(this, Ut);
        this.b = new Map();
      }
      return _createClass(Ut, [
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
                  idx: Ut.a++,
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
            var n = this.c(t);
            n.parent = r;
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
            var n = r.get(t);
            if (n) return n;
            var i = t.parent ? this.f(this.c(t.parent), r) : t;
            return r.set(t, i), i;
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
                  n = _ref6[1];
                return n.source !== null && !_this9.f(n, t).isSingleton;
              })
              .flatMap(function (_ref7) {
                var _ref8 = _slicedToArray(_ref7, 1),
                  n = _ref8[0];
                return n;
              });
          },
        },
        {
          key: 'computeLeakingDisposables',
          value: function computeLeakingDisposables() {
            var _this0 = this;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var r = arguments.length > 1 ? arguments[1] : undefined;
            var n;
            if (r) n = r;
            else {
              var u = new Map(),
                a = _toConsumableArray(this.b.values()).filter(function (f) {
                  return f.source !== null && !_this0.f(f, u).isSingleton;
                });
              if (a.length === 0) return;
              var c = new Set(
                a.map(function (f) {
                  return f.value;
                }),
              );
              if (
                ((n = a.filter(function (f) {
                  return !(f.parent && c.has(f.parent));
                })),
                n.length === 0)
              )
                throw new Error('There are cyclic diposable chains!');
            }
            if (!n) return;
            function i(u) {
              function a(f, h) {
                for (
                  ;
                  f.length > 0 &&
                  h.some(function (m) {
                    return typeof m == 'string' ? m === f[0] : f[0].match(m);
                  });

                )
                  f.shift();
              }
              var c = u.source
                .split('\n')
                .map(function (f) {
                  return f.trim().replace('at ', '');
                })
                .filter(function (f) {
                  return f !== '';
                });
              return (
                a(c, [
                  'Error',
                  /^trackDisposable \(.*\)$/,
                  /^DisposableTracker.trackDisposable \(.*\)$/,
                ]),
                c.reverse()
              );
            }
            var s = new ur();
            var _iterator23 = _createForOfIteratorHelper(n),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                var _u = _step23.value;
                var _a = i(_u);
                for (var _c = 0; _c <= _a.length; _c++) s.add(_a.slice(0, _c).join('\n'), _u);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
            n.sort(
              er(function (u) {
                return u.idx;
              }, tr),
            );
            var l = '',
              o = 0;
            var _iterator24 = _createForOfIteratorHelper(n.slice(0, t)),
              _step24;
            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
                var _u2 = _step24.value;
                o++;
                var _a2 = i(_u2),
                  _c2 = [];
                var _loop = function _loop(f) {
                  var h = _a2[f];
                  h = '(shared with '
                    .concat(s.get(_a2.slice(0, f + 1).join('\n')).size, '/')
                    .concat(n.length, ' leaks) at ')
                    .concat(h);
                  var v = s.get(_a2.slice(0, f).join('\n')),
                    C = rr(
                      _toConsumableArray(v).map(function (b) {
                        return i(b)[f];
                      }),
                      function (b) {
                        return b;
                      },
                    );
                  delete C[_a2[f]];
                  for (
                    var _i2 = 0, _Object$entries = Object.entries(C);
                    _i2 < _Object$entries.length;
                    _i2++
                  ) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                      b = _Object$entries$_i[0],
                      P = _Object$entries$_i[1];
                    _c2.unshift(
                      '    - stacktraces of '
                        .concat(P.length, ' other leaks continue with ')
                        .concat(b),
                    );
                  }
                  _c2.unshift(h);
                };
                for (var f = 0; f < _a2.length; f++) {
                  _loop(f);
                }
                l += '\n\n\n==================== Leaking disposable '
                  .concat(o, '/')
                  .concat(n.length, ': ')
                  .concat(_u2.value.constructor.name, ' ====================\n')
                  .concat(
                    _c2.join('\n'),
                    '\n============================================================\n\n',
                  );
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
            return (
              n.length > t &&
                (l += '\n\n\n... and '.concat(n.length - t, ' more leaking disposables\n\n')),
              {
                leaks: n,
                details: l,
              }
            );
          },
        },
      ]);
    })()),
    (_Ut.a = 0),
    _Ut);
function fr(e) {
  m1 = e;
}
if (cr) {
  var e = '__is_disposable_tracked__';
  fr(
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
            if (t && t !== y1.None)
              try {
                t[e] = !0;
              } catch (_unused) {}
          },
        },
        {
          key: 'markAsDisposed',
          value: function markAsDisposed(t) {
            if (t && t !== y1.None)
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
function oe(e) {
  var _m;
  return (_m = m1) !== null && _m !== void 0 && _m.trackDisposable(e), e;
}
function le(e) {
  var _m2;
  (_m2 = m1) === null || _m2 === void 0 || _m2.markAsDisposed(e);
}
function ae(e, t) {
  var _m3;
  (_m3 = m1) === null || _m3 === void 0 || _m3.setParent(e, t);
}
function hr(e, t) {
  if (m1) {
    var _iterator25 = _createForOfIteratorHelper(e),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
        var r = _step25.value;
        m1.setParent(r, t);
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
  }
}
function qe(e) {
  if (se.is(e)) {
    var t = [];
    var _iterator26 = _createForOfIteratorHelper(e),
      _step26;
    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
        var r = _step26.value;
        if (r)
          try {
            r.dispose();
          } catch (n) {
            t.push(n);
          }
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }
    if (t.length === 1) throw t[0];
    if (t.length > 1) throw new AggregateError(t, 'Encountered errors while disposing of store');
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function dr() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }
  var t = We(function () {
    return qe(e);
  });
  return hr(e, t), t;
}
function We(e) {
  var t = oe({
    dispose: nr(function () {
      le(t), e();
    }),
  });
  return t;
}
var ue =
    ((_qt = /*#__PURE__*/ (function () {
      function qt() {
        _classCallCheck(this, qt);
        (this.f = new Set()), (this.g = !1), oe(this);
      }
      return _createClass(qt, [
        {
          key: 'dispose',
          value: function dispose() {
            this.g || (le(this), (this.g = !0), this.clear());
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
                qe(this.f);
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
              ae(t, this),
              this.g
                ? qt.DISABLE_DISPOSED_WARNING ||
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
            t && this.f.has(t) && (this.f['delete'](t), ae(t, null));
          },
        },
      ]);
    })()),
    (_qt.DISABLE_DISPOSED_WARNING = !1),
    _qt),
  y1 =
    ((_Class2 = /*#__PURE__*/ (function () {
      function y1() {
        _classCallCheck(this, y1);
        (this.B = new ue()), oe(this), ae(this.B, this);
      }
      return _createClass(y1, [
        {
          key: 'dispose',
          value: function dispose() {
            le(this), this.B.dispose();
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
  N2 =
    ((_G = /*#__PURE__*/ _createClass(function G1(t) {
      _classCallCheck(this, G1);
      (this.element = t), (this.next = G1.Undefined), (this.prev = G1.Undefined);
    })),
    (_G.Undefined = new _G(void 0)),
    _G),
  mr = globalThis.performance && typeof globalThis.performance.now == 'function',
  vr = /*#__PURE__*/ (function () {
    function Wt(t) {
      _classCallCheck(this, Wt);
      (this.c =
        mr && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)),
        (this.a = this.c()),
        (this.b = -1);
    }
    return _createClass(
      Wt,
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
            return new Wt(t);
          },
        },
      ],
    );
  })(),
  gr = !1,
  Be = !1,
  br = !1,
  S1;
(function (e) {
  e.None = function () {
    return y1.None;
  };
  function t(p) {
    if (br) {
      var d = p.onDidAddListener,
        w = ce.create();
      var g = 0;
      p.onDidAddListener = function () {
        ++g === 2 &&
          (console.warn(
            'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
          ),
          w.print()),
          d === null || d === void 0 ? void 0 : d();
      };
    }
  }
  function r(p, d) {
    return m(p, function () {}, 0, void 0, !0, void 0, d);
  }
  e.defer = r;
  function n(p) {
    return function (d) {
      var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var g = arguments.length > 2 ? arguments[2] : undefined;
      var L = !1,
        E;
      return (
        (E = p(
          function (S) {
            if (!L) return E ? E.dispose() : (L = !0), d.call(w, S);
          },
          null,
          g,
        )),
        L && E.dispose(),
        E
      );
    };
  }
  e.once = n;
  function i(p, d) {
    return e.once(e.filter(p, d));
  }
  e.onceIf = i;
  function s(p, d, w) {
    return f(function (g) {
      var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var E = arguments.length > 2 ? arguments[2] : undefined;
      return p(
        function (S) {
          return g.call(L, d(S));
        },
        null,
        E,
      );
    }, w);
  }
  e.map = s;
  function l(p, d, w) {
    return f(function (g) {
      var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var E = arguments.length > 2 ? arguments[2] : undefined;
      return p(
        function (S) {
          d(S), g.call(L, S);
        },
        null,
        E,
      );
    }, w);
  }
  e.forEach = l;
  function o(p, d, w) {
    return f(function (g) {
      var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var E = arguments.length > 2 ? arguments[2] : undefined;
      return p(
        function (S) {
          return d(S) && g.call(L, S);
        },
        null,
        E,
      );
    }, w);
  }
  e.filter = o;
  function u(p) {
    return p;
  }
  e.signal = u;
  function a() {
    for (var _len3 = arguments.length, p = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      p[_key3] = arguments[_key3];
    }
    return function (d) {
      var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var g = arguments.length > 2 ? arguments[2] : undefined;
      var L = dr.apply(
        void 0,
        _toConsumableArray(
          p.map(function (E) {
            return E(function (S) {
              return d.call(w, S);
            });
          }),
        ),
      );
      return h(L, g);
    };
  }
  e.any = a;
  function c(p, d, w, g) {
    var L = w;
    return s(
      p,
      function (E) {
        return (L = d(L, E)), L;
      },
      g,
    );
  }
  e.reduce = c;
  function f(p, d) {
    var w;
    var g = {
      onWillAddFirstListener: function onWillAddFirstListener() {
        w = p(L.fire, L);
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        var _w;
        (_w = w) === null || _w === void 0 || _w.dispose();
      },
    };
    d || t(g);
    var L = new G(g);
    return d !== null && d !== void 0 && d.add(L), L.event;
  }
  function h(p, d) {
    return d instanceof Array ? d.push(p) : d && d.add(p), p;
  }
  function m(p, d) {
    var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var g = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var L = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    var E = arguments.length > 5 ? arguments[5] : undefined;
    var S = arguments.length > 6 ? arguments[6] : undefined;
    var F,
      z,
      d1,
      P1 = 0,
      w1;
    var Re = {
      leakWarningThreshold: E,
      onWillAddFirstListener: function onWillAddFirstListener() {
        F = p(function (Ht) {
          P1++,
            (z = d(z, Ht)),
            g && !d1 && (_1.fire(z), (z = void 0)),
            (w1 = function w1() {
              var Vt = z;
              (z = void 0), (d1 = void 0), (!g || P1 > 1) && _1.fire(Vt), (P1 = 0);
            }),
            typeof w == 'number'
              ? (clearTimeout(d1), (d1 = setTimeout(w1, w)))
              : d1 === void 0 && ((d1 = 0), queueMicrotask(w1));
        });
      },
      onWillRemoveListener: function onWillRemoveListener() {
        var _w2;
        L && P1 > 0 && ((_w2 = w1) === null || _w2 === void 0 ? void 0 : _w2());
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        (w1 = void 0), F.dispose();
      },
    };
    S || t(Re);
    var _1 = new G(Re);
    return S !== null && S !== void 0 && S.add(_1), _1.event;
  }
  e.debounce = m;
  function v(p) {
    var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var w = arguments.length > 2 ? arguments[2] : undefined;
    return e.debounce(
      p,
      function (g, L) {
        return g ? (g.push(L), g) : [L];
      },
      d,
      void 0,
      !0,
      void 0,
      w,
    );
  }
  e.accumulate = v;
  function C(p) {
    var d =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : function (g, L) {
            return g === L;
          };
    var w = arguments.length > 2 ? arguments[2] : undefined;
    var g = !0,
      L;
    return o(
      p,
      function (E) {
        var S = g || !d(E, L);
        return (g = !1), (L = E), S;
      },
      w,
    );
  }
  e.latch = C;
  function b(p, d, w) {
    return [
      e.filter(p, d, w),
      e.filter(
        p,
        function (g) {
          return !d(g);
        },
        w,
      ),
    ];
  }
  e.split = b;
  function P(p) {
    var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var g = arguments.length > 3 ? arguments[3] : undefined;
    var L = w.slice(),
      E = p(function (z) {
        L ? L.push(z) : F.fire(z);
      });
    g && g.add(E);
    var S = function S() {
        var _L;
        (_L = L) !== null &&
          _L !== void 0 &&
          _L.forEach(function (z) {
            return F.fire(z);
          }),
          (L = null);
      },
      F = new G({
        onWillAddFirstListener: function onWillAddFirstListener() {
          E ||
            ((E = p(function (z) {
              return F.fire(z);
            })),
            g && g.add(E));
        },
        onDidAddFirstListener: function onDidAddFirstListener() {
          L && (d ? setTimeout(S) : S());
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          E && E.dispose(), (E = null);
        },
      });
    return g && g.add(F), F.event;
  }
  e.buffer = P;
  function N(p, d) {
    return function (g, L, E) {
      var S = d(new y());
      return p(
        function (F) {
          var z = S.evaluate(F);
          z !== M && g.call(L, z);
        },
        void 0,
        E,
      );
    };
  }
  e.chain = N;
  var M = Symbol('HaltChainable');
  var y = /*#__PURE__*/ (function () {
    function y() {
      _classCallCheck(this, y);
      this.f = [];
    }
    return _createClass(y, [
      {
        key: 'map',
        value: function map(d) {
          return this.f.push(d), this;
        },
      },
      {
        key: 'forEach',
        value: function forEach(d) {
          return (
            this.f.push(function (w) {
              return d(w), w;
            }),
            this
          );
        },
      },
      {
        key: 'filter',
        value: function filter(d) {
          return (
            this.f.push(function (w) {
              return d(w) ? w : M;
            }),
            this
          );
        },
      },
      {
        key: 'reduce',
        value: function reduce(d, w) {
          var g = w;
          return (
            this.f.push(function (L) {
              return (g = d(g, L)), g;
            }),
            this
          );
        },
      },
      {
        key: 'latch',
        value: function latch() {
          var d =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : function (w, g) {
                  return w === g;
                };
          var w = !0,
            g;
          return (
            this.f.push(function (L) {
              var E = w || !d(L, g);
              return (w = !1), (g = L), E ? L : M;
            }),
            this
          );
        },
      },
      {
        key: 'evaluate',
        value: function evaluate(d) {
          var _iterator27 = _createForOfIteratorHelper(this.f),
            _step27;
          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
              var w = _step27.value;
              if (((d = w(d)), d === M)) break;
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
          return d;
        },
      },
    ]);
  })();
  function A(p, d) {
    var w =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (g) {
            return g;
          };
    var g = function g() {
        return S.fire(w.apply(void 0, arguments));
      },
      L = function L() {
        return p.on(d, g);
      },
      E = function E() {
        return p.removeListener(d, g);
      },
      S = new G({
        onWillAddFirstListener: L,
        onDidRemoveLastListener: E,
      });
    return S.event;
  }
  e.fromNodeEventEmitter = A;
  function x(p, d) {
    var w =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (g) {
            return g;
          };
    var g = function g() {
        return S.fire(w.apply(void 0, arguments));
      },
      L = function L() {
        return p.addEventListener(d, g);
      },
      E = function E() {
        return p.removeEventListener(d, g);
      },
      S = new G({
        onWillAddFirstListener: L,
        onDidRemoveLastListener: E,
      });
    return S.event;
  }
  e.fromDOMEventEmitter = x;
  function j(p) {
    return new Promise(function (d) {
      return n(p)(d);
    });
  }
  e.toPromise = j;
  function T(p) {
    var d = new G();
    return (
      p
        .then(
          function (w) {
            d.fire(w);
          },
          function () {
            d.fire(void 0);
          },
        )
        ['finally'](function () {
          d.dispose();
        }),
      d.event
    );
  }
  e.fromPromise = T;
  function B(p, d) {
    return p(function (w) {
      return d.fire(w);
    });
  }
  e.forward = B;
  function u1(p, d, w) {
    return (
      d(w),
      p(function (g) {
        return d(g);
      })
    );
  }
  e.runAndSubscribe = u1;
  var c1 = /*#__PURE__*/ (function () {
    function c1(d, w) {
      var _this1 = this;
      _classCallCheck(this, c1);
      (this._observable = d), (this.f = 0), (this.g = !1);
      var g = {
        onWillAddFirstListener: function onWillAddFirstListener() {
          d.addObserver(_this1), _this1._observable.reportChanges();
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          d.removeObserver(_this1);
        },
      };
      w || t(g), (this.emitter = new G(g)), w && w.add(this.emitter);
    }
    return _createClass(c1, [
      {
        key: 'beginUpdate',
        value: function beginUpdate(d) {
          this.f++;
        },
      },
      {
        key: 'handlePossibleChange',
        value: function handlePossibleChange(d) {},
      },
      {
        key: 'handleChange',
        value: function handleChange(d, w) {
          this.g = !0;
        },
      },
      {
        key: 'endUpdate',
        value: function endUpdate(d) {
          this.f--,
            this.f === 0 &&
              (this._observable.reportChanges(),
              this.g && ((this.g = !1), this.emitter.fire(this._observable.get())));
        },
      },
    ]);
  })();
  function x1(p, d) {
    return new c1(p, d).emitter.event;
  }
  e.fromObservable = x1;
  function ee(p) {
    return function (d, w, g) {
      var L = 0,
        E = !1;
      var S = {
        beginUpdate: function beginUpdate() {
          L++;
        },
        endUpdate: function endUpdate() {
          L--, L === 0 && (p.reportChanges(), E && ((E = !1), d.call(w)));
        },
        handlePossibleChange: function handlePossibleChange() {},
        handleChange: function handleChange() {
          E = !0;
        },
      };
      p.addObserver(S), p.reportChanges();
      var F = {
        dispose: function dispose() {
          p.removeObserver(S);
        },
      };
      return g instanceof ue ? g.add(F) : Array.isArray(g) && g.push(F), F;
    };
  }
  e.fromObservableLight = ee;
})(S1 || (S1 = {}));
var pr =
    ((_Se = /*#__PURE__*/ (function () {
      function Se(t) {
        _classCallCheck(this, Se);
        (this.listenerCount = 0),
          (this.invocationCount = 0),
          (this.elapsedOverall = 0),
          (this.durations = []),
          (this.name = ''.concat(t, '_').concat(Se.f++)),
          Se.all.add(this);
      }
      return _createClass(Se, [
        {
          key: 'start',
          value: function start(t) {
            (this.g = new vr()), (this.listenerCount = t);
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
    (_Se.all = new Set()),
    (_Se.f = 0),
    _Se),
  ze = -1,
  wr =
    ((_Bt = /*#__PURE__*/ (function () {
      function Bt(t, r) {
        var n =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : (Bt.f++).toString(16).padStart(3, '0');
        _classCallCheck(this, Bt);
        (this.j = t), (this.threshold = r), (this.name = n), (this.h = 0);
      }
      return _createClass(Bt, [
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
            var n = this.threshold;
            if (n <= 0 || r < n) return;
            this.g || (this.g = new Map());
            var i = this.g.get(t.value) || 0;
            if ((this.g.set(t.value, i + 1), (this.h -= 1), this.h <= 0)) {
              this.h = n * 0.5;
              var _this$getMostFrequent = this.getMostFrequentStack(),
                _this$getMostFrequent2 = _slicedToArray(_this$getMostFrequent, 2),
                s = _this$getMostFrequent2[0],
                l = _this$getMostFrequent2[1],
                o = '['
                  .concat(this.name, '] potential listener LEAK detected, having ')
                  .concat(r, ' listeners already. MOST frequent listener (')
                  .concat(l, '):');
              console.warn(o), console.warn(s);
              var u = new yr(o, s);
              this.j(u);
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
            var _iterator28 = _createForOfIteratorHelper(this.g),
              _step28;
            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
                var _step28$value = _slicedToArray(_step28.value, 2),
                  n = _step28$value[0],
                  i = _step28$value[1];
                (!t || r < i) && ((t = [n, i]), (r = i));
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
            return t;
          },
        },
      ]);
    })()),
    (_Bt.f = 1),
    _Bt),
  ce = /*#__PURE__*/ (function () {
    function zt(t) {
      _classCallCheck(this, zt);
      this.value = t;
    }
    return _createClass(
      zt,
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
            return new zt((_t$stack = t.stack) !== null && _t$stack !== void 0 ? _t$stack : '');
          },
        },
      ],
    );
  })(),
  yr = /*#__PURE__*/ (function (_Error3) {
    function yr(e, t) {
      var _this11;
      _classCallCheck(this, yr);
      (_this11 = _callSuper(this, yr, [e])),
        (_this11.name = 'ListenerLeakError'),
        (_this11.stack = t);
      return _this11;
    }
    _inherits(yr, _Error3);
    return _createClass(yr);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  Cr = /*#__PURE__*/ (function (_Error4) {
    function Cr(e, t) {
      var _this12;
      _classCallCheck(this, Cr);
      (_this12 = _callSuper(this, Cr, [e])),
        (_this12.name = 'ListenerRefusalError'),
        (_this12.stack = t);
      return _this12;
    }
    _inherits(Cr, _Error4);
    return _createClass(Cr);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  Lr = 0,
  O1 = /*#__PURE__*/ _createClass(function O1(e) {
    _classCallCheck(this, O1);
    (this.value = e), (this.id = Lr++);
  }),
  Ar = 2,
  $r = function $r(e, t) {
    if (e instanceof O1) t(e);
    else
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n && t(n);
      }
  },
  R1;
if (gr) {
  var _e2 = [];
  setInterval(function () {
    _e2.length !== 0 &&
      (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"),
      console.warn(_e2.join('\n')),
      (_e2.length = 0));
  }, 3e3),
    (R1 = new FinalizationRegistry(function (t) {
      typeof t == 'string' && _e2.push(t);
    }));
}
var G = /*#__PURE__*/ (function () {
    function G(e) {
      var _this$f, _e$onListenerError, _this$f$leakWarningTh, _this$f2, _this$f3, _this$f4;
      _classCallCheck(this, G);
      (this.z = 0),
        (this.f = e),
        (this.g =
          ze > 0 ||
          ((_this$f = this.f) !== null && _this$f !== void 0 && _this$f.leakWarningThreshold)
            ? new wr(
                (_e$onListenerError = e === null || e === void 0 ? void 0 : e.onListenerError) !==
                  null && _e$onListenerError !== void 0
                  ? _e$onListenerError
                  : k1,
                (_this$f$leakWarningTh =
                  (_this$f2 = this.f) === null || _this$f2 === void 0
                    ? void 0
                    : _this$f2.leakWarningThreshold) !== null && _this$f$leakWarningTh !== void 0
                  ? _this$f$leakWarningTh
                  : ze,
              )
            : void 0),
        (this.j =
          (_this$f3 = this.f) !== null && _this$f3 !== void 0 && _this$f3._profName
            ? new pr(this.f._profName)
            : void 0),
        (this.w =
          (_this$f4 = this.f) === null || _this$f4 === void 0 ? void 0 : _this$f4.deliveryQueue);
    }
    return _createClass(G, [
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
                  $r(_e3, function (t) {
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
                    var o = '['
                      .concat(
                        _this13.g.name,
                        '] REFUSES to accept new listeners because it exceeded its threshold by far (',
                      )
                      .concat(_this13.z, ' vs ')
                      .concat(_this13.g.threshold, ')');
                    console.warn(o);
                    var u =
                        (_this13$g$getMostFreq = _this13.g.getMostFrequentStack()) !== null &&
                        _this13$g$getMostFreq !== void 0
                          ? _this13$g$getMostFreq
                          : ['UNKNOWN stack', -1],
                      a = new Cr(
                        ''
                          .concat(o, '. HINT: Stack shows most frequent listener (')
                          .concat(u[1], '-times)'),
                        u[0],
                      );
                    return (
                      (
                        ((_this13$f = _this13.f) === null || _this13$f === void 0
                          ? void 0
                          : _this13$f.onListenerError) || k1
                      )(a),
                      y1.None
                    );
                  }
                  if (_this13.m) return y1.None;
                  t && (e = e.bind(t));
                  var n = new O1(e);
                  var i, s;
                  _this13.g &&
                    _this13.z >= Math.ceil(_this13.g.threshold * 0.2) &&
                    ((n.stack = ce.create()), (i = _this13.g.check(n.stack, _this13.z + 1))),
                    Be && (n.stack = s !== null && s !== void 0 ? s : ce.create()),
                    _this13.u
                      ? _this13.u instanceof O1
                        ? ((_this13$w = _this13.w) !== null && _this13$w !== void 0
                            ? _this13$w
                            : (_this13.w = new Er()),
                          (_this13.u = [_this13.u, n]))
                        : _this13.u.push(n)
                      : ((_this13$f2 = _this13.f) !== null &&
                          _this13$f2 !== void 0 &&
                          (_this13$f2$onWillAddF = _this13$f2.onWillAddFirstListener) !== null &&
                          _this13$f2$onWillAddF !== void 0 &&
                          _this13$f2$onWillAddF.call(_this13$f2, _this13),
                        (_this13.u = n),
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
                  var l = We(function () {
                    var _R, _i3;
                    (_R = R1) !== null && _R !== void 0 && _R.unregister(l),
                      (_i3 = i) !== null && _i3 !== void 0 && _i3(),
                      _this13.A(n);
                  });
                  if ((r instanceof ue ? r.add(l) : Array.isArray(r) && r.push(l), R1)) {
                    var _u3$;
                    var _o = new Error().stack.split('\n').slice(2, 3).join('\n').trim(),
                      _u3 = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(_o);
                    R1.register(
                      l,
                      (_u3$ = _u3 === null || _u3 === void 0 ? void 0 : _u3[2]) !== null &&
                        _u3$ !== void 0
                        ? _u3$
                        : _o,
                      l,
                    );
                  }
                  return l;
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
          var n = this.w.current === this;
          if (this.z * Ar <= t.length) {
            var i = 0;
            for (var s = 0; s < t.length; s++)
              t[s]
                ? (t[i++] = t[s])
                : n && i < this.w.end && (this.w.end--, i < this.w.i && this.w.i--);
            t.length = i;
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
              : _this$f8.onListenerError) || k1;
          if (!r) {
            e.value(t);
            return;
          }
          try {
            e.value(t);
          } catch (n) {
            r(n);
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
            if (this.u instanceof O1) this.B(this.u, e);
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
  Er = /*#__PURE__*/ (function () {
    function Er() {
      _classCallCheck(this, Er);
      (this.i = -1), (this.end = 0);
    }
    return _createClass(Er, [
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
  T1;
(function (e) {
  function t(r) {
    return r === e.None || r === e.Cancelled || r instanceof I1
      ? !0
      : !r || _typeof(r) != 'object'
        ? !1
        : typeof r.isCancellationRequested == 'boolean' &&
          typeof r.onCancellationRequested == 'function';
  }
  (e.isCancellationToken = t),
    (e.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: S1.None,
    })),
    (e.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: He,
    }));
})(T1 || (T1 = {}));
var I1 = /*#__PURE__*/ (function () {
    function I1() {
      _classCallCheck(this, I1);
      (this.a = !1), (this.b = null);
    }
    return _createClass(I1, [
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
          return this.a ? He : (this.b || (this.b = new G()), this.b.event);
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
  Nr = /*#__PURE__*/ (function () {
    function Nr(e) {
      _classCallCheck(this, Nr);
      (this.f = void 0),
        (this.g = void 0),
        (this.g = e && e.onCancellationRequested(this.cancel, this));
    }
    return _createClass(Nr, [
      {
        key: 'token',
        get: function get() {
          return this.f || (this.f = new I1()), this.f;
        },
      },
      {
        key: 'cancel',
        value: function cancel() {
          this.f ? this.f instanceof I1 && this.f.cancel() : (this.f = T1.Cancelled);
        },
      },
      {
        key: 'dispose',
        value: function dispose() {
          var _this$g3;
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          e && this.cancel(),
            (_this$g3 = this.g) !== null && _this$g3 !== void 0 && _this$g3.dispose(),
            this.f ? this.f instanceof I1 && this.f.dispose() : (this.f = T1.None);
        },
      },
    ]);
  })();
function Ve() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var x2 =
    Ve() === 'pseudo' ||
    ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) < 'u' &&
      document.location &&
      typeof document.location.hash == 'string' &&
      document.location.hash.indexOf('pseudo=true') >= 0),
  v1 = 'en',
  D1 = !1,
  M1 = !1,
  C1 = !1,
  xr = !1,
  Ke = !1,
  fe = !1,
  Pr = !1,
  _r = !1,
  kr = !1,
  Sr = !1,
  j1 = void 0,
  F1 = v1,
  Je = v1,
  Or = void 0,
  e1 = void 0,
  t1 = globalThis,
  K = void 0;
_typeof(t1.vscode) < 'u' && _typeof(t1.vscode.process) < 'u'
  ? (K = t1.vscode.process)
  : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) < 'u' &&
    typeof ((_process = process) === null ||
    _process === void 0 ||
    (_process = _process.versions) === null ||
    _process === void 0
      ? void 0
      : _process.node) == 'string' &&
    (K = process);
var Qe =
    typeof ((_K = K) === null || _K === void 0 || (_K = _K.versions) === null || _K === void 0
      ? void 0
      : _K.electron) == 'string',
  Rr = Qe && ((_K2 = K) === null || _K2 === void 0 ? void 0 : _K2.type) === 'renderer';
if (_typeof(K) == 'object') {
  (D1 = K.platform === 'win32'),
    (M1 = K.platform === 'darwin'),
    (C1 = K.platform === 'linux'),
    (xr = C1 && !!K.env.SNAP && !!K.env.SNAP_REVISION),
    (Pr = Qe),
    (kr = !!K.env.CI || !!K.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
    (j1 = v1),
    (F1 = v1);
  var _e4 = K.env.VSCODE_NLS_CONFIG;
  if (_e4)
    try {
      var _t$languagePack;
      var t = JSON.parse(_e4);
      (j1 = t.userLocale),
        (Je = t.osLocale),
        (F1 = t.resolvedLanguage || v1),
        (Or =
          (_t$languagePack = t.languagePack) === null || _t$languagePack === void 0
            ? void 0
            : _t$languagePack.translationsConfigFile);
    } catch (_unused3) {}
  Ke = !0;
} else
  (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) == 'object' && !Rr
    ? ((e1 = navigator.userAgent),
      (D1 = e1.indexOf('Windows') >= 0),
      (M1 = e1.indexOf('Macintosh') >= 0),
      (_r =
        (e1.indexOf('Macintosh') >= 0 || e1.indexOf('iPad') >= 0 || e1.indexOf('iPhone') >= 0) &&
        !!navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 0),
      (C1 = e1.indexOf('Linux') >= 0),
      (Sr = ((_e5 = e1) === null || _e5 === void 0 ? void 0 : _e5.indexOf('Mobi')) >= 0),
      (fe = !0),
      (F1 = Ve() || v1),
      (j1 = navigator.language.toLowerCase()),
      (Je = j1))
    : console.error('Unable to resolve platform.');
var Ze;
(function (e) {
  (e[(e.Web = 0)] = 'Web'),
    (e[(e.Mac = 1)] = 'Mac'),
    (e[(e.Linux = 2)] = 'Linux'),
    (e[(e.Windows = 3)] = 'Windows');
})(Ze || (Ze = {}));
var he = 0;
M1 ? (he = 1) : D1 ? (he = 3) : C1 && (he = 2);
var g1 = D1,
  Tr = M1,
  Ge = C1,
  Ir = Ke,
  Dr = fe,
  Mr = fe && typeof t1.importScripts == 'function',
  jr = Mr ? t1.origin : void 0,
  Y = e1,
  n1 = F1,
  Ye;
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
  function n() {
    return n1 === 'en';
  }
  e.isDefault = n;
})(Ye || (Ye = {}));
var Fr = typeof t1.postMessage == 'function' && !t1.importScripts,
  Ur = (function () {
    if (Fr) {
      var _e6 = [];
      t1.addEventListener('message', function (r) {
        if (r.data && r.data.vscodeScheduleAsyncWork)
          for (var n = 0, i = _e6.length; n < i; n++) {
            var s = _e6[n];
            if (s.id === r.data.vscodeScheduleAsyncWork) {
              _e6.splice(n, 1), s.callback();
              return;
            }
          }
      });
      var _t2 = 0;
      return function (r) {
        var n = ++_t2;
        _e6.push({
          id: n,
          callback: r,
        }),
          t1.postMessage(
            {
              vscodeScheduleAsyncWork: n,
            },
            '*',
          );
      };
    }
    return function (e) {
      return setTimeout(e);
    };
  })(),
  Xe;
(function (e) {
  (e[(e.Windows = 1)] = 'Windows'),
    (e[(e.Macintosh = 2)] = 'Macintosh'),
    (e[(e.Linux = 3)] = 'Linux');
})(Xe || (Xe = {}));
var qr = !!(Y && Y.indexOf('Chrome') >= 0),
  P2 = !!(Y && Y.indexOf('Firefox') >= 0),
  _2 = !!(!qr && Y && Y.indexOf('Safari') >= 0),
  k2 = !!(Y && Y.indexOf('Edg/') >= 0),
  S2 = !!(Y && Y.indexOf('Android') >= 0),
  f1,
  de = globalThis.vscode;
if (_typeof(de) < 'u' && _typeof(de.process) < 'u') {
  var _e7 = de.process;
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
          return g1 ? 'win32' : Tr ? 'darwin' : 'linux';
        },
        get arch() {},
        get env() {
          return {};
        },
        cwd: function cwd() {
          return '/';
        },
      });
var U1 = f1.cwd,
  Wr = f1.env,
  Br = f1.platform,
  O2 = f1.arch,
  zr = 65,
  Hr = 97,
  Vr = 90,
  Kr = 122,
  i1 = 46,
  U = 47,
  H = 92,
  s1 = 58,
  Jr = 63,
  et = /*#__PURE__*/ (function (_Error5) {
    function et(e, t, r) {
      var _this14;
      _classCallCheck(this, et);
      var n;
      typeof t == 'string' && t.indexOf('not ') === 0
        ? ((n = 'must not be'), (t = t.replace(/^not /, '')))
        : (n = 'must be');
      var i = e.indexOf('.') !== -1 ? 'property' : 'argument';
      var s = 'The "'.concat(e, '" ').concat(i, ' ').concat(n, ' of type ').concat(t);
      (s += '. Received type '.concat(_typeof(r))),
        (_this14 = _callSuper(this, et, [s])),
        (_this14.code = 'ERR_INVALID_ARG_TYPE');
      return _this14;
    }
    _inherits(et, _Error5);
    return _createClass(et);
  })(/*#__PURE__*/ _wrapNativeSuper(Error));
function Qr(e, t) {
  if (e === null || _typeof(e) != 'object') throw new et(t, 'Object', e);
}
function I(e, t) {
  if (typeof e != 'string') throw new et(t, 'string', e);
}
var V = Br === 'win32';
function $(e) {
  return e === U || e === H;
}
function me(e) {
  return e === U;
}
function o1(e) {
  return (e >= zr && e <= Vr) || (e >= Hr && e <= Kr);
}
function q1(e, t, r, n) {
  var i = '',
    s = 0,
    l = -1,
    o = 0,
    u = 0;
  for (var a = 0; a <= e.length; ++a) {
    if (a < e.length) u = e.charCodeAt(a);
    else {
      if (n(u)) break;
      u = U;
    }
    if (n(u)) {
      if (!(l === a - 1 || o === 1))
        if (o === 2) {
          if (
            i.length < 2 ||
            s !== 2 ||
            i.charCodeAt(i.length - 1) !== i1 ||
            i.charCodeAt(i.length - 2) !== i1
          ) {
            if (i.length > 2) {
              var c = i.lastIndexOf(r);
              c === -1
                ? ((i = ''), (s = 0))
                : ((i = i.slice(0, c)), (s = i.length - 1 - i.lastIndexOf(r))),
                (l = a),
                (o = 0);
              continue;
            } else if (i.length !== 0) {
              (i = ''), (s = 0), (l = a), (o = 0);
              continue;
            }
          }
          t && ((i += i.length > 0 ? ''.concat(r, '..') : '..'), (s = 2));
        } else
          i.length > 0 ? (i += ''.concat(r).concat(e.slice(l + 1, a))) : (i = e.slice(l + 1, a)),
            (s = a - l - 1);
      (l = a), (o = 0);
    } else u === i1 && o !== -1 ? ++o : (o = -1);
  }
  return i;
}
function Zr(e) {
  return e ? ''.concat(e[0] === '.' ? '' : '.').concat(e) : '';
}
function tt(e, t) {
  Qr(t, 'pathObject');
  var r = t.dir || t.root,
    n = t.base || ''.concat(t.name || '').concat(Zr(t.ext));
  return r ? (r === t.root ? ''.concat(r).concat(n) : ''.concat(r).concat(e).concat(n)) : n;
}
var D = {
    resolve: function resolve() {
      var t = '',
        r = '',
        n = !1;
      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }
      for (var i = e.length - 1; i >= -1; i--) {
        var s = void 0;
        if (i >= 0) {
          if (((s = e[i]), I(s, 'paths['.concat(i, ']')), s.length === 0)) continue;
        } else
          t.length === 0
            ? (s = U1())
            : ((s = Wr['='.concat(t)] || U1()),
              (s === void 0 ||
                (s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === H)) &&
                (s = ''.concat(t, '\\')));
        var l = s.length;
        var o = 0,
          u = '',
          a = !1;
        var c = s.charCodeAt(0);
        if (l === 1) $(c) && ((o = 1), (a = !0));
        else if ($(c)) {
          if (((a = !0), $(s.charCodeAt(1)))) {
            var f = 2,
              h = f;
            for (; f < l && !$(s.charCodeAt(f)); ) f++;
            if (f < l && f !== h) {
              var m = s.slice(h, f);
              for (h = f; f < l && $(s.charCodeAt(f)); ) f++;
              if (f < l && f !== h) {
                for (h = f; f < l && !$(s.charCodeAt(f)); ) f++;
                (f === l || f !== h) &&
                  ((u = '\\\\'.concat(m, '\\').concat(s.slice(h, f))), (o = f));
              }
            }
          } else o = 1;
        } else
          o1(c) &&
            s.charCodeAt(1) === s1 &&
            ((u = s.slice(0, 2)), (o = 2), l > 2 && $(s.charCodeAt(2)) && ((a = !0), (o = 3)));
        if (u.length > 0)
          if (t.length > 0) {
            if (u.toLowerCase() !== t.toLowerCase()) continue;
          } else t = u;
        if (n) {
          if (t.length > 0) break;
        } else if (((r = ''.concat(s.slice(o), '\\').concat(r)), (n = a), a && t.length > 0)) break;
      }
      return (
        (r = q1(r, !n, '\\', $)), n ? ''.concat(t, '\\').concat(r) : ''.concat(t).concat(r) || '.'
      );
    },
    normalize: function normalize(e) {
      I(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var r = 0,
        n,
        i = !1;
      var s = e.charCodeAt(0);
      if (t === 1) return me(s) ? '\\' : e;
      if ($(s)) {
        if (((i = !0), $(e.charCodeAt(1)))) {
          var o = 2,
            u = o;
          for (; o < t && !$(e.charCodeAt(o)); ) o++;
          if (o < t && o !== u) {
            var a = e.slice(u, o);
            for (u = o; o < t && $(e.charCodeAt(o)); ) o++;
            if (o < t && o !== u) {
              for (u = o; o < t && !$(e.charCodeAt(o)); ) o++;
              if (o === t) return '\\\\'.concat(a, '\\').concat(e.slice(u), '\\');
              o !== u && ((n = '\\\\'.concat(a, '\\').concat(e.slice(u, o))), (r = o));
            }
          }
        } else r = 1;
      } else
        o1(s) &&
          e.charCodeAt(1) === s1 &&
          ((n = e.slice(0, 2)), (r = 2), t > 2 && $(e.charCodeAt(2)) && ((i = !0), (r = 3)));
      var l = r < t ? q1(e.slice(r), !i, '\\', $) : '';
      return (
        l.length === 0 && !i && (l = '.'),
        l.length > 0 && $(e.charCodeAt(t - 1)) && (l += '\\'),
        n === void 0
          ? i
            ? '\\'.concat(l)
            : l
          : i
            ? ''.concat(n, '\\').concat(l)
            : ''.concat(n).concat(l)
      );
    },
    isAbsolute: function isAbsolute(e) {
      I(e, 'path');
      var t = e.length;
      if (t === 0) return !1;
      var r = e.charCodeAt(0);
      return $(r) || (t > 2 && o1(r) && e.charCodeAt(1) === s1 && $(e.charCodeAt(2)));
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t, r;
      for (var s = 0; s < arguments.length; ++s) {
        var l = s < 0 || arguments.length <= s ? undefined : arguments[s];
        I(l, 'path'), l.length > 0 && (t === void 0 ? (t = r = l) : (t += '\\'.concat(l)));
      }
      if (t === void 0) return '.';
      var n = !0,
        i = 0;
      if (typeof r == 'string' && $(r.charCodeAt(0))) {
        ++i;
        var _s = r.length;
        _s > 1 && $(r.charCodeAt(1)) && (++i, _s > 2 && ($(r.charCodeAt(2)) ? ++i : (n = !1)));
      }
      if (n) {
        for (; i < t.length && $(t.charCodeAt(i)); ) i++;
        i >= 2 && (t = '\\'.concat(t.slice(i)));
      }
      return D.normalize(t);
    },
    relative: function relative(e, t) {
      if ((I(e, 'from'), I(t, 'to'), e === t)) return '';
      var r = D.resolve(e),
        n = D.resolve(t);
      if (r === n || ((e = r.toLowerCase()), (t = n.toLowerCase()), e === t)) return '';
      var i = 0;
      for (; i < e.length && e.charCodeAt(i) === H; ) i++;
      var s = e.length;
      for (; s - 1 > i && e.charCodeAt(s - 1) === H; ) s--;
      var l = s - i;
      var o = 0;
      for (; o < t.length && t.charCodeAt(o) === H; ) o++;
      var u = t.length;
      for (; u - 1 > o && t.charCodeAt(u - 1) === H; ) u--;
      var a = u - o,
        c = l < a ? l : a;
      var f = -1,
        h = 0;
      for (; h < c; h++) {
        var v = e.charCodeAt(i + h);
        if (v !== t.charCodeAt(o + h)) break;
        v === H && (f = h);
      }
      if (h !== c) {
        if (f === -1) return n;
      } else {
        if (a > c) {
          if (t.charCodeAt(o + h) === H) return n.slice(o + h + 1);
          if (h === 2) return n.slice(o + h);
        }
        l > c && (e.charCodeAt(i + h) === H ? (f = h) : h === 2 && (f = 3)), f === -1 && (f = 0);
      }
      var m = '';
      for (h = i + f + 1; h <= s; ++h)
        (h === s || e.charCodeAt(h) === H) && (m += m.length === 0 ? '..' : '\\..');
      return (
        (o += f),
        m.length > 0
          ? ''.concat(m).concat(n.slice(o, u))
          : (n.charCodeAt(o) === H && ++o, n.slice(o, u))
      );
    },
    toNamespacedPath: function toNamespacedPath(e) {
      if (typeof e != 'string' || e.length === 0) return e;
      var t = D.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === H) {
        if (t.charCodeAt(1) === H) {
          var r = t.charCodeAt(2);
          if (r !== Jr && r !== i1) return '\\\\?\\UNC\\'.concat(t.slice(2));
        }
      } else if (o1(t.charCodeAt(0)) && t.charCodeAt(1) === s1 && t.charCodeAt(2) === H)
        return '\\\\?\\'.concat(t);
      return e;
    },
    dirname: function dirname(e) {
      I(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var r = -1,
        n = 0;
      var i = e.charCodeAt(0);
      if (t === 1) return $(i) ? e : '.';
      if ($(i)) {
        if (((r = n = 1), $(e.charCodeAt(1)))) {
          var o = 2,
            u = o;
          for (; o < t && !$(e.charCodeAt(o)); ) o++;
          if (o < t && o !== u) {
            for (u = o; o < t && $(e.charCodeAt(o)); ) o++;
            if (o < t && o !== u) {
              for (u = o; o < t && !$(e.charCodeAt(o)); ) o++;
              if (o === t) return e;
              o !== u && (r = n = o + 1);
            }
          }
        }
      } else
        o1(i) && e.charCodeAt(1) === s1 && ((r = t > 2 && $(e.charCodeAt(2)) ? 3 : 2), (n = r));
      var s = -1,
        l = !0;
      for (var _o2 = t - 1; _o2 >= n; --_o2)
        if ($(e.charCodeAt(_o2))) {
          if (!l) {
            s = _o2;
            break;
          }
        } else l = !1;
      if (s === -1) {
        if (r === -1) return '.';
        s = r;
      }
      return e.slice(0, s);
    },
    basename: function basename(e, t) {
      t !== void 0 && I(t, 'suffix'), I(e, 'path');
      var r = 0,
        n = -1,
        i = !0,
        s;
      if (
        (e.length >= 2 && o1(e.charCodeAt(0)) && e.charCodeAt(1) === s1 && (r = 2),
        t !== void 0 && t.length > 0 && t.length <= e.length)
      ) {
        if (t === e) return '';
        var l = t.length - 1,
          o = -1;
        for (s = e.length - 1; s >= r; --s) {
          var u = e.charCodeAt(s);
          if ($(u)) {
            if (!i) {
              r = s + 1;
              break;
            }
          } else
            o === -1 && ((i = !1), (o = s + 1)),
              l >= 0 && (u === t.charCodeAt(l) ? --l === -1 && (n = s) : ((l = -1), (n = o)));
        }
        return r === n ? (n = o) : n === -1 && (n = e.length), e.slice(r, n);
      }
      for (s = e.length - 1; s >= r; --s)
        if ($(e.charCodeAt(s))) {
          if (!i) {
            r = s + 1;
            break;
          }
        } else n === -1 && ((i = !1), (n = s + 1));
      return n === -1 ? '' : e.slice(r, n);
    },
    extname: function extname(e) {
      I(e, 'path');
      var t = 0,
        r = -1,
        n = 0,
        i = -1,
        s = !0,
        l = 0;
      e.length >= 2 && e.charCodeAt(1) === s1 && o1(e.charCodeAt(0)) && (t = n = 2);
      for (var o = e.length - 1; o >= t; --o) {
        var u = e.charCodeAt(o);
        if ($(u)) {
          if (!s) {
            n = o + 1;
            break;
          }
          continue;
        }
        i === -1 && ((s = !1), (i = o + 1)),
          u === i1 ? (r === -1 ? (r = o) : l !== 1 && (l = 1)) : r !== -1 && (l = -1);
      }
      return r === -1 || i === -1 || l === 0 || (l === 1 && r === i - 1 && r === n + 1)
        ? ''
        : e.slice(r, i);
    },
    format: tt.bind(null, '\\'),
    parse: function parse(e) {
      I(e, 'path');
      var t = {
        root: '',
        dir: '',
        base: '',
        ext: '',
        name: '',
      };
      if (e.length === 0) return t;
      var r = e.length;
      var n = 0,
        i = e.charCodeAt(0);
      if (r === 1) return $(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
      if ($(i)) {
        if (((n = 1), $(e.charCodeAt(1)))) {
          var f = 2,
            h = f;
          for (; f < r && !$(e.charCodeAt(f)); ) f++;
          if (f < r && f !== h) {
            for (h = f; f < r && $(e.charCodeAt(f)); ) f++;
            if (f < r && f !== h) {
              for (h = f; f < r && !$(e.charCodeAt(f)); ) f++;
              f === r ? (n = f) : f !== h && (n = f + 1);
            }
          }
        }
      } else if (o1(i) && e.charCodeAt(1) === s1) {
        if (r <= 2) return (t.root = t.dir = e), t;
        if (((n = 2), $(e.charCodeAt(2)))) {
          if (r === 3) return (t.root = t.dir = e), t;
          n = 3;
        }
      }
      n > 0 && (t.root = e.slice(0, n));
      var s = -1,
        l = n,
        o = -1,
        u = !0,
        a = e.length - 1,
        c = 0;
      for (; a >= n; --a) {
        if (((i = e.charCodeAt(a)), $(i))) {
          if (!u) {
            l = a + 1;
            break;
          }
          continue;
        }
        o === -1 && ((u = !1), (o = a + 1)),
          i === i1 ? (s === -1 ? (s = a) : c !== 1 && (c = 1)) : s !== -1 && (c = -1);
      }
      return (
        o !== -1 &&
          (s === -1 || c === 0 || (c === 1 && s === o - 1 && s === l + 1)
            ? (t.base = t.name = e.slice(l, o))
            : ((t.name = e.slice(l, s)), (t.base = e.slice(l, o)), (t.ext = e.slice(s, o)))),
        l > 0 && l !== n ? (t.dir = e.slice(0, l - 1)) : (t.dir = t.root),
        t
      );
    },
    sep: '\\',
    delimiter: ';',
    win32: null,
    posix: null,
  },
  Gr = (function () {
    if (V) {
      var _e8 = /\\/g;
      return function () {
        var t = U1().replace(_e8, '/');
        return t.slice(t.indexOf('/'));
      };
    }
    return function () {
      return U1();
    };
  })(),
  _ = {
    resolve: function resolve() {
      var t = '',
        r = !1;
      for (var n = arguments.length - 1; n >= -1 && !r; n--) {
        var i = n >= 0 ? (n < 0 || arguments.length <= n ? undefined : arguments[n]) : Gr();
        I(i, 'paths['.concat(n, ']')),
          i.length !== 0 && ((t = ''.concat(i, '/').concat(t)), (r = i.charCodeAt(0) === U));
      }
      return (t = q1(t, !r, '/', me)), r ? '/'.concat(t) : t.length > 0 ? t : '.';
    },
    normalize: function normalize(e) {
      if ((I(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === U,
        r = e.charCodeAt(e.length - 1) === U;
      return (
        (e = q1(e, !t, '/', me)),
        e.length === 0 ? (t ? '/' : r ? './' : '.') : (r && (e += '/'), t ? '/'.concat(e) : e)
      );
    },
    isAbsolute: function isAbsolute(e) {
      return I(e, 'path'), e.length > 0 && e.charCodeAt(0) === U;
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t;
      for (var r = 0; r < arguments.length; ++r) {
        var n = r < 0 || arguments.length <= r ? undefined : arguments[r];
        I(n, 'path'), n.length > 0 && (t === void 0 ? (t = n) : (t += '/'.concat(n)));
      }
      return t === void 0 ? '.' : _.normalize(t);
    },
    relative: function relative(e, t) {
      if ((I(e, 'from'), I(t, 'to'), e === t || ((e = _.resolve(e)), (t = _.resolve(t)), e === t)))
        return '';
      var r = 1,
        n = e.length,
        i = n - r,
        s = 1,
        l = t.length - s,
        o = i < l ? i : l;
      var u = -1,
        a = 0;
      for (; a < o; a++) {
        var f = e.charCodeAt(r + a);
        if (f !== t.charCodeAt(s + a)) break;
        f === U && (u = a);
      }
      if (a === o)
        if (l > o) {
          if (t.charCodeAt(s + a) === U) return t.slice(s + a + 1);
          if (a === 0) return t.slice(s + a);
        } else i > o && (e.charCodeAt(r + a) === U ? (u = a) : a === 0 && (u = 0));
      var c = '';
      for (a = r + u + 1; a <= n; ++a)
        (a === n || e.charCodeAt(a) === U) && (c += c.length === 0 ? '..' : '/..');
      return ''.concat(c).concat(t.slice(s + u));
    },
    toNamespacedPath: function toNamespacedPath(e) {
      return e;
    },
    dirname: function dirname(e) {
      if ((I(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === U;
      var r = -1,
        n = !0;
      for (var i = e.length - 1; i >= 1; --i)
        if (e.charCodeAt(i) === U) {
          if (!n) {
            r = i;
            break;
          }
        } else n = !1;
      return r === -1 ? (t ? '/' : '.') : t && r === 1 ? '//' : e.slice(0, r);
    },
    basename: function basename(e, t) {
      t !== void 0 && I(t, 'ext'), I(e, 'path');
      var r = 0,
        n = -1,
        i = !0,
        s;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return '';
        var l = t.length - 1,
          o = -1;
        for (s = e.length - 1; s >= 0; --s) {
          var u = e.charCodeAt(s);
          if (u === U) {
            if (!i) {
              r = s + 1;
              break;
            }
          } else
            o === -1 && ((i = !1), (o = s + 1)),
              l >= 0 && (u === t.charCodeAt(l) ? --l === -1 && (n = s) : ((l = -1), (n = o)));
        }
        return r === n ? (n = o) : n === -1 && (n = e.length), e.slice(r, n);
      }
      for (s = e.length - 1; s >= 0; --s)
        if (e.charCodeAt(s) === U) {
          if (!i) {
            r = s + 1;
            break;
          }
        } else n === -1 && ((i = !1), (n = s + 1));
      return n === -1 ? '' : e.slice(r, n);
    },
    extname: function extname(e) {
      I(e, 'path');
      var t = -1,
        r = 0,
        n = -1,
        i = !0,
        s = 0;
      for (var l = e.length - 1; l >= 0; --l) {
        var o = e.charCodeAt(l);
        if (o === U) {
          if (!i) {
            r = l + 1;
            break;
          }
          continue;
        }
        n === -1 && ((i = !1), (n = l + 1)),
          o === i1 ? (t === -1 ? (t = l) : s !== 1 && (s = 1)) : t !== -1 && (s = -1);
      }
      return t === -1 || n === -1 || s === 0 || (s === 1 && t === n - 1 && t === r + 1)
        ? ''
        : e.slice(t, n);
    },
    format: tt.bind(null, '/'),
    parse: function parse(e) {
      I(e, 'path');
      var t = {
        root: '',
        dir: '',
        base: '',
        ext: '',
        name: '',
      };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0) === U;
      var n;
      r ? ((t.root = '/'), (n = 1)) : (n = 0);
      var i = -1,
        s = 0,
        l = -1,
        o = !0,
        u = e.length - 1,
        a = 0;
      for (; u >= n; --u) {
        var c = e.charCodeAt(u);
        if (c === U) {
          if (!o) {
            s = u + 1;
            break;
          }
          continue;
        }
        l === -1 && ((o = !1), (l = u + 1)),
          c === i1 ? (i === -1 ? (i = u) : a !== 1 && (a = 1)) : i !== -1 && (a = -1);
      }
      if (l !== -1) {
        var _c3 = s === 0 && r ? 1 : s;
        i === -1 || a === 0 || (a === 1 && i === l - 1 && i === s + 1)
          ? (t.base = t.name = e.slice(_c3, l))
          : ((t.name = e.slice(_c3, i)), (t.base = e.slice(_c3, l)), (t.ext = e.slice(i, l)));
      }
      return s > 0 ? (t.dir = e.slice(0, s - 1)) : r && (t.dir = '/'), t;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  };
(_.win32 = D.win32 = D), (_.posix = D.posix = _);
var Yr = V ? D.normalize : _.normalize,
  R2 = V ? D.isAbsolute : _.isAbsolute,
  Xr = V ? D.join : _.join,
  en = V ? D.resolve : _.resolve,
  rt = V ? D.relative : _.relative,
  tn = V ? D.dirname : _.dirname,
  rn = V ? D.basename : _.basename,
  nn = V ? D.extname : _.extname,
  T2 = V ? D.format : _.format,
  I2 = V ? D.parse : _.parse,
  D2 = V ? D.toNamespacedPath : _.toNamespacedPath,
  l1 = V ? D.sep : _.sep,
  M2 = V ? D.delimiter : _.delimiter;
function sn(e) {
  return e;
}
var on = /*#__PURE__*/ (function () {
    function on(e, t) {
      _classCallCheck(this, on);
      (this.a = void 0),
        (this.b = void 0),
        typeof e == 'function'
          ? ((this.c = e), (this.d = sn))
          : ((this.c = t), (this.d = e.getCacheKey));
    }
    return _createClass(on, [
      {
        key: 'get',
        value: function get(e) {
          var t = this.d(e);
          return this.b !== t && ((this.b = t), (this.a = this.c(e))), this.a;
        },
      },
    ]);
  })(),
  ve = /*#__PURE__*/ (function () {
    function ve(e) {
      _classCallCheck(this, ve);
      (this.d = e), (this.a = !1);
    }
    return _createClass(ve, [
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
function ge(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
}
function ln(e, t) {
  if (!e || !t) return e;
  var r = t.length;
  if (r === 0 || e.length === 0) return e;
  var n = 0;
  for (; e.indexOf(t, n) === n; ) n = n + r;
  return e.substring(n);
}
function an(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!e) throw new Error('Cannot create regex from empty string');
  t || (e = ge(e)),
    r.wholeWord &&
      (/\B/.test(e.charAt(0)) || (e = '\\b' + e),
      /\B/.test(e.charAt(e.length - 1)) || (e = e + '\\b'));
  var n = '';
  return (
    r.global && (n += 'g'),
    r.matchCase || (n += 'i'),
    r.multiline && (n += 'm'),
    r.unicode && (n += 'u'),
    new RegExp(e, n)
  );
}
function un(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function cn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; r < n && i < s; r++, i++) {
    var u = e.charCodeAt(r),
      a = t.charCodeAt(i);
    if (u < a) return -1;
    if (u > a) return 1;
  }
  var l = n - r,
    o = s - i;
  return l < o ? -1 : l > o ? 1 : 0;
}
function nt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; r < n && i < s; r++, i++) {
    var u = e.charCodeAt(r),
      a = t.charCodeAt(i);
    if (u === a) continue;
    if (u >= 128 || a >= 128) return cn(e.toLowerCase(), t.toLowerCase(), r, n, i, s);
    it(u) && (u -= 32), it(a) && (a -= 32);
    var c = u - a;
    if (c !== 0) return c;
  }
  var l = n - r,
    o = s - i;
  return l < o ? -1 : l > o ? 1 : 0;
}
function it(e) {
  return e >= 97 && e <= 122;
}
function st(e) {
  return e >= 65 && e <= 90;
}
function fn(e, t) {
  return e.length === t.length && nt(e, t) === 0;
}
function hn(e, t) {
  var r = t.length;
  return t.length > e.length ? !1 : nt(e, t, 0, r) === 0;
}
var j2 = '\uFEFF',
  ot;
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
})(ot || (ot = {}));
var F2 =
  ((_$ = /*#__PURE__*/ (function () {
    function $1() {
      _classCallCheck(this, $1);
      this.d = dn();
    }
    return _createClass(
      $1,
      [
        {
          key: 'getGraphemeBreakType',
          value: function getGraphemeBreakType(t) {
            if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
            if (t < 127) return 0;
            var r = this.d,
              n = r.length / 3;
            var i = 1;
            for (; i <= n; )
              if (t < r[3 * i]) i = 2 * i;
              else if (t > r[3 * i + 1]) i = 2 * i + 1;
              else return r[3 * i + 2];
            return 0;
          },
        },
      ],
      [
        {
          key: 'getInstance',
          value: function getInstance() {
            return $1.c || ($1.c = new $1()), $1.c;
          },
        },
      ],
    );
  })()),
  (_$.c = null),
  _$);
function dn() {
  return JSON.parse(
    '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
  );
}
var lt;
(function (e) {
  (e[(e.zwj = 8205)] = 'zwj'),
    (e[(e.emojiVariantSelector = 65039)] = 'emojiVariantSelector'),
    (e[(e.enclosingKeyCap = 8419)] = 'enclosingKeyCap');
})(lt || (lt = {}));
var U2 =
    ((_E = /*#__PURE__*/ (function () {
      function E1(t) {
        _classCallCheck(this, E1);
        this.f = t;
      }
      return _createClass(
        E1,
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
                var n = t.codePointAt(r);
                if (typeof n == 'number' && this.isAmbiguous(n)) return !0;
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
              return E1.d.get(Array.from(t));
            },
          },
          {
            key: 'getLocales',
            value: function getLocales() {
              return E1.e.value;
            },
          },
        ],
      );
    })()),
    (_E.c = new ve(function () {
      return JSON.parse(
        '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
      );
    })),
    (_E.d = new on(
      {
        getCacheKey: JSON.stringify,
      },
      function (t) {
        function r(c) {
          var f = new Map();
          for (var h = 0; h < c.length; h += 2) f.set(c[h], c[h + 1]);
          return f;
        }
        function n(c, f) {
          var h = new Map(c);
          var _iterator29 = _createForOfIteratorHelper(f),
            _step29;
          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
              var _step29$value = _slicedToArray(_step29.value, 2),
                m = _step29$value[0],
                v = _step29$value[1];
              h.set(m, v);
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
          return h;
        }
        function i(c, f) {
          if (!c) return f;
          var h = new Map();
          var _iterator30 = _createForOfIteratorHelper(c),
            _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
              var _step30$value = _slicedToArray(_step30.value, 2),
                m = _step30$value[0],
                v = _step30$value[1];
              f.has(m) && h.set(m, v);
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
          return h;
        }
        var s = _E.c.value;
        var l = t.filter(function (c) {
          return !c.startsWith('_') && c in s;
        });
        l.length === 0 && (l = ['_default']);
        var o;
        var _iterator31 = _createForOfIteratorHelper(l),
          _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
            var c = _step31.value;
            var f = r(s[c]);
            o = i(o, f);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
        var u = r(s._common),
          a = n(u, o);
        return new _E(a);
      },
    )),
    (_E.e = new ve(function () {
      return Object.keys(_E.c.value).filter(function (t) {
        return !t.startsWith('_');
      });
    })),
    _E),
  q2 =
    ((_N = /*#__PURE__*/ (function () {
      function N1() {
        _classCallCheck(this, N1);
      }
      return _createClass(N1, null, [
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
            return this.d || (this.d = new Set(N1.c())), this.d;
          },
        },
        {
          key: 'isInvisibleCharacter',
          value: function isInvisibleCharacter(t) {
            return N1.e().has(t);
          },
        },
        {
          key: 'containsInvisibleCharacter',
          value: function containsInvisibleCharacter(t) {
            for (var r = 0; r < t.length; r++) {
              var n = t.codePointAt(r);
              if (typeof n == 'number' && N1.isInvisibleCharacter(n)) return !0;
            }
            return !1;
          },
        },
        {
          key: 'codePoints',
          get: function get() {
            return N1.e();
          },
        },
      ]);
    })()),
    (_N.d = void 0),
    _N);
function a1(e) {
  return e === 47 || e === 92;
}
function at(e) {
  return e.replace(/[\\/]/g, _.sep);
}
function mn(e) {
  return e.indexOf('/') === -1 && (e = at(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = '/' + e), e;
}
function ut(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _.sep;
  if (!e) return '';
  var r = e.length,
    n = e.charCodeAt(0);
  if (a1(n)) {
    if (a1(e.charCodeAt(1)) && !a1(e.charCodeAt(2))) {
      var s = 3;
      var l = s;
      for (; s < r && !a1(e.charCodeAt(s)); s++);
      if (l !== s && !a1(e.charCodeAt(s + 1))) {
        for (s += 1; s < r; s++)
          if (a1(e.charCodeAt(s))) return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (vn(n) && e.charCodeAt(1) === 58)
    return a1(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  var i = e.indexOf('://');
  if (i !== -1) {
    for (i += 3; i < r; i++) if (a1(e.charCodeAt(i))) return e.slice(0, i + 1);
  }
  return '';
}
function be(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : l1;
  if (e === t) return !0;
  if (!e || !t || t.length > e.length) return !1;
  if (r) {
    if (!hn(e, t)) return !1;
    if (t.length === e.length) return !0;
    var s = t.length;
    return t.charAt(t.length - 1) === n && s--, e.charAt(s) === n;
  }
  return t.charAt(t.length - 1) !== n && (t += n), e.indexOf(t) === 0;
}
function vn(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
var gn = /^\w[\w\d+.-]*$/,
  bn = /^\//,
  pn = /^\/\//;
function wn(e, t) {
  if (!e.scheme && t)
    throw new Error(
      '[UriError]: Scheme is missing: {scheme: "", authority: "'
        .concat(e.authority, '", path: "')
        .concat(e.path, '", query: "')
        .concat(e.query, '", fragment: "')
        .concat(e.fragment, '"}'),
    );
  if (e.scheme && !gn.test(e.scheme))
    throw new Error('[UriError]: Scheme contains illegal characters.');
  if (e.path) {
    if (e.authority) {
      if (!bn.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
        );
    } else if (pn.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
      );
  }
}
function yn(e, t) {
  return !e && !t ? 'file' : e;
}
function Cn(e, t) {
  switch (e) {
    case 'https':
    case 'http':
    case 'file':
      t ? t[0] !== Z && (t = Z + t) : (t = Z);
      break;
  }
  return t;
}
var O = '',
  Z = '/',
  Ln = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
  q = /*#__PURE__*/ (function () {
    function Y1(t, r, n, i, s) {
      var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      _classCallCheck(this, Y1);
      _typeof(t) == 'object'
        ? ((this.scheme = t.scheme || O),
          (this.authority = t.authority || O),
          (this.path = t.path || O),
          (this.query = t.query || O),
          (this.fragment = t.fragment || O))
        : ((this.scheme = yn(t, l)),
          (this.authority = r || O),
          (this.path = Cn(this.scheme, n || O)),
          (this.query = i || O),
          (this.fragment = s || O),
          wn(this, l));
    }
    return _createClass(
      Y1,
      [
        {
          key: 'fsPath',
          get: function get() {
            return W1(this, !1);
          },
        },
        {
          key: 'with',
          value: function _with(t) {
            if (!t) return this;
            var r = t.scheme,
              n = t.authority,
              i = t.path,
              s = t.query,
              l = t.fragment;
            return (
              r === void 0 ? (r = this.scheme) : r === null && (r = O),
              n === void 0 ? (n = this.authority) : n === null && (n = O),
              i === void 0 ? (i = this.path) : i === null && (i = O),
              s === void 0 ? (s = this.query) : s === null && (s = O),
              l === void 0 ? (l = this.fragment) : l === null && (l = O),
              r === this.scheme &&
              n === this.authority &&
              i === this.path &&
              s === this.query &&
              l === this.fragment
                ? this
                : new b1(r, n, i, s, l)
            );
          },
        },
        {
          key: 'toString',
          value: function toString() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            return pe(this, t);
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
            return t instanceof Y1
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
            var n = Ln.exec(t);
            return n
              ? new b1(n[2] || O, B1(n[4] || O), B1(n[5] || O), B1(n[7] || O), B1(n[9] || O), r)
              : new b1(O, O, O, O, O);
          },
        },
        {
          key: 'file',
          value: function file(t) {
            var r = O;
            if ((g1 && (t = t.replace(/\\/g, Z)), t[0] === Z && t[1] === Z)) {
              var n = t.indexOf(Z, 2);
              n === -1
                ? ((r = t.substring(2)), (t = Z))
                : ((r = t.substring(2, n)), (t = t.substring(n) || Z));
            }
            return new b1('file', r, t, O, O);
          },
        },
        {
          key: 'from',
          value: function from(t, r) {
            return new b1(t.scheme, t.authority, t.path, t.query, t.fragment, r);
          },
        },
        {
          key: 'joinPath',
          value: function joinPath(t) {
            if (!t.path) throw new Error('[UriError]: cannot call joinPath on URI without path');
            var n;
            for (
              var _len5 = arguments.length, r = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1;
              _key5 < _len5;
              _key5++
            ) {
              r[_key5 - 1] = arguments[_key5];
            }
            return (
              g1 && t.scheme === 'file'
                ? (n = Y1.file(D.join.apply(D, [W1(t, !0)].concat(r))).path)
                : (n = _.join.apply(_, [t.path].concat(r))),
              t['with']({
                path: n,
              })
            );
          },
        },
        {
          key: 'revive',
          value: function revive(t) {
            if (t) {
              if (t instanceof Y1) return t;
              {
                var _t$external, _t$fsPath;
                var r = new b1(t);
                return (
                  (r._formatted =
                    (_t$external = t.external) !== null && _t$external !== void 0
                      ? _t$external
                      : null),
                  (r._fsPath =
                    t._sep === ct
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
  ct = g1 ? 1 : void 0,
  b1 = /*#__PURE__*/ (function (_q) {
    function b1() {
      var _this15;
      _classCallCheck(this, b1);
      (_this15 = _callSuper(this, b1, arguments)),
        (_this15._formatted = null),
        (_this15._fsPath = null);
      return _this15;
    }
    _inherits(b1, _q);
    return _createClass(b1, [
      {
        key: 'fsPath',
        get: function get() {
          return this._fsPath || (this._fsPath = W1(this, !1)), this._fsPath;
        },
      },
      {
        key: 'toString',
        value: function toString() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          return e
            ? pe(this, !0)
            : (this._formatted || (this._formatted = pe(this, !1)), this._formatted);
        },
      },
      {
        key: 'toJSON',
        value: function toJSON() {
          var e = {
            $mid: 1,
          };
          return (
            this._fsPath && ((e.fsPath = this._fsPath), (e._sep = ct)),
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
  })(q),
  ft = {
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
function ht(e, t, r) {
  var n,
    i = -1;
  for (var s = 0; s < e.length; s++) {
    var l = e.charCodeAt(s);
    if (
      (l >= 97 && l <= 122) ||
      (l >= 65 && l <= 90) ||
      (l >= 48 && l <= 57) ||
      l === 45 ||
      l === 46 ||
      l === 95 ||
      l === 126 ||
      (t && l === 47) ||
      (r && l === 91) ||
      (r && l === 93) ||
      (r && l === 58)
    )
      i !== -1 && ((n += encodeURIComponent(e.substring(i, s))), (i = -1)),
        n !== void 0 && (n += e.charAt(s));
    else {
      n === void 0 && (n = e.substr(0, s));
      var o = ft[l];
      o !== void 0
        ? (i !== -1 && ((n += encodeURIComponent(e.substring(i, s))), (i = -1)), (n += o))
        : i === -1 && (i = s);
    }
  }
  return i !== -1 && (n += encodeURIComponent(e.substring(i))), n !== void 0 ? n : e;
}
function An(e) {
  var t;
  for (var r = 0; r < e.length; r++) {
    var n = e.charCodeAt(r);
    n === 35 || n === 63
      ? (t === void 0 && (t = e.substr(0, r)), (t += ft[n]))
      : t !== void 0 && (t += e[r]);
  }
  return t !== void 0 ? t : e;
}
function W1(e, t) {
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
    g1 && (r = r.replace(/\//g, '\\')),
    r
  );
}
function pe(e, t) {
  var r = t ? An : ht;
  var n = '',
    i = e.scheme,
    s = e.authority,
    l = e.path,
    o = e.query,
    u = e.fragment;
  if ((i && ((n += i), (n += ':')), (s || i === 'file') && ((n += Z), (n += Z)), s)) {
    var a = s.indexOf('@');
    if (a !== -1) {
      var c = s.substr(0, a);
      (s = s.substr(a + 1)),
        (a = c.lastIndexOf(':')),
        a === -1
          ? (n += r(c, !1, !1))
          : ((n += r(c.substr(0, a), !1, !1)), (n += ':'), (n += r(c.substr(a + 1), !1, !0))),
        (n += '@');
    }
    (s = s.toLowerCase()),
      (a = s.lastIndexOf(':')),
      a === -1 ? (n += r(s, !1, !0)) : ((n += r(s.substr(0, a), !1, !0)), (n += s.substr(a)));
  }
  if (l) {
    if (l.length >= 3 && l.charCodeAt(0) === 47 && l.charCodeAt(2) === 58) {
      var _a3 = l.charCodeAt(1);
      _a3 >= 65 &&
        _a3 <= 90 &&
        (l = '/'.concat(String.fromCharCode(_a3 + 32), ':').concat(l.substr(3)));
    } else if (l.length >= 2 && l.charCodeAt(1) === 58) {
      var _a4 = l.charCodeAt(0);
      _a4 >= 65 &&
        _a4 <= 90 &&
        (l = ''.concat(String.fromCharCode(_a4 + 32), ':').concat(l.substr(2)));
    }
    n += r(l, !0, !1);
  }
  return o && ((n += '?'), (n += r(o, !1, !1))), u && ((n += '#'), (n += t ? u : ht(u, !1, !1))), n;
}
function dt(e) {
  try {
    return decodeURIComponent(e);
  } catch (_unused4) {
    return e.length > 3 ? e.substr(0, 3) + dt(e.substr(3)) : e;
  }
}
var mt = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function B1(e) {
  return e.match(mt)
    ? e.replace(mt, function (t) {
        return dt(t);
      })
    : e;
}
var W;
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
})(W || (W = {}));
var $n = 'tkn',
  En = /*#__PURE__*/ (function () {
    function En() {
      _classCallCheck(this, En);
      (this.a = Object.create(null)),
        (this.b = Object.create(null)),
        (this.c = Object.create(null)),
        (this.d = 'http'),
        (this.e = null),
        (this.f = '/');
    }
    return _createClass(En, [
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
          this.f = xn(e, t);
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
          return _.join(this.f, W.vscodeRemoteResource);
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
            } catch (l) {
              return k1(l), e;
            }
          var t = e.authority;
          var r = this.a[t];
          r && r.indexOf(':') !== -1 && r.indexOf('[') === -1 && (r = '['.concat(r, ']'));
          var n = this.b[t],
            i = this.c[t];
          var s = 'path='.concat(encodeURIComponent(e.path));
          return (
            typeof i == 'string' && (s += '&'.concat($n, '=').concat(encodeURIComponent(i))),
            q.from({
              scheme: Dr ? this.d : W.vscodeRemoteResource,
              authority: ''.concat(r, ':').concat(n),
              path: this.g,
              query: s,
            })
          );
        },
      },
    ]);
  })(),
  Nn = new En();
function xn(e, t) {
  var _e$quality, _e$commit;
  return _.join(
    t !== null && t !== void 0 ? t : '/',
    ''
      .concat((_e$quality = e.quality) !== null && _e$quality !== void 0 ? _e$quality : 'oss', '-')
      .concat((_e$commit = e.commit) !== null && _e$commit !== void 0 ? _e$commit : 'dev'),
  );
}
var Pn = 'vscode-app',
  _n =
    ((_X = /*#__PURE__*/ (function () {
      function X1() {
        _classCallCheck(this, X1);
      }
      return _createClass(X1, [
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
            return t.scheme === W.vscodeRemote
              ? Nn.rewrite(t)
              : t.scheme === W.file &&
                  (Ir || jr === ''.concat(W.vscodeFileResource, '://').concat(X1.a))
                ? t['with']({
                    scheme: W.vscodeFileResource,
                    authority: t.authority || X1.a,
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
            return t.scheme === W.vscodeFileResource
              ? t['with']({
                  scheme: W.file,
                  authority: t.authority !== X1.a ? t.authority : null,
                  query: null,
                  fragment: null,
                })
              : t;
          },
        },
        {
          key: 'b',
          value: function b(t, r) {
            if (q.isUri(t)) return t;
            if (globalThis._VSCODE_FILE_ROOT) {
              var n = globalThis._VSCODE_FILE_ROOT;
              if (/^\w[\w\d+.-]*:\/\//.test(n)) return q.joinPath(q.parse(n, !0), t);
              var i = Xr(n, t);
              return q.file(i);
            }
            return q.parse(r.toUrl(t));
          },
        },
      ]);
    })()),
    (_X.a = Pn),
    _X),
  kn = new _n(),
  vt;
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
  function n(s) {
    var _l;
    var l;
    typeof s == 'string'
      ? (l = new URL(s).searchParams)
      : s instanceof URL
        ? (l = s.searchParams)
        : q.isUri(s) && (l = new URL(s.toString(!0)).searchParams);
    var o = (_l = l) === null || _l === void 0 ? void 0 : _l.get(r);
    if (o) return t.get(o);
  }
  e.getHeadersFromQuery = n;
  function i(s, l, o) {
    if (!globalThis.crossOriginIsolated) return;
    var u = l && o ? '3' : o ? '2' : '1';
    s instanceof URLSearchParams ? s.set(r, u) : (s[r] = u);
  }
  e.addSearchParam = i;
})(vt || (vt = {}));
function r1(e) {
  return W1(e, !0);
}
var L1 = /*#__PURE__*/ (function () {
    function L1(e) {
      _classCallCheck(this, L1);
      this.a = e;
    }
    return _createClass(L1, [
      {
        key: 'compare',
        value: function compare(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return e === t ? 0 : un(this.getComparisonKey(e, r), this.getComparisonKey(t, r));
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
            if (e.scheme === W.file)
              return (
                be(r1(e), r1(t), this.a(e)) &&
                e.query === t.query &&
                (r || e.fragment === t.fragment)
              );
            if (gt(e.authority, t.authority))
              return (
                be(e.path, t.path, this.a(e), '/') &&
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
          return q.joinPath.apply(q, [e].concat(t));
        },
      },
      {
        key: 'basenameOrAuthority',
        value: function basenameOrAuthority(e) {
          return Sn(e) || e.authority;
        },
      },
      {
        key: 'basename',
        value: function basename(e) {
          return _.basename(e.path);
        },
      },
      {
        key: 'extname',
        value: function extname(e) {
          return _.extname(e.path);
        },
      },
      {
        key: 'dirname',
        value: function dirname(e) {
          if (e.path.length === 0) return e;
          var t;
          return (
            e.scheme === W.file
              ? (t = q.file(tn(r1(e))).path)
              : ((t = _.dirname(e.path)),
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
            e.scheme === W.file ? (t = q.file(Yr(r1(e))).path) : (t = _.normalize(e.path)),
            e['with']({
              path: t,
            })
          );
        },
      },
      {
        key: 'relativePath',
        value: function relativePath(e, t) {
          if (e.scheme !== t.scheme || !gt(e.authority, t.authority)) return;
          if (e.scheme === W.file) {
            var i = rt(r1(e), r1(t));
            return g1 ? at(i) : i;
          }
          var r = e.path || '/';
          var n = t.path || '/';
          if (this.a(e)) {
            var _i4 = 0;
            for (
              var s = Math.min(r.length, n.length);
              _i4 < s &&
              !(
                r.charCodeAt(_i4) !== n.charCodeAt(_i4) &&
                r.charAt(_i4).toLowerCase() !== n.charAt(_i4).toLowerCase()
              );
              _i4++
            );
            r = n.substr(0, _i4) + r.substr(_i4);
          }
          return _.relative(r, n);
        },
      },
      {
        key: 'resolvePath',
        value: function resolvePath(e, t) {
          if (e.scheme === W.file) {
            var r = q.file(en(r1(e), t));
            return e['with']({
              authority: r.authority,
              path: r.path,
            });
          }
          return (
            (t = mn(t)),
            e['with']({
              path: _.resolve(e.path, t),
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
          return e === t || (e !== void 0 && t !== void 0 && fn(e, t));
        },
      },
      {
        key: 'hasTrailingPathSeparator',
        value: function hasTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l1;
          if (e.scheme === W.file) {
            var r = r1(e);
            return r.length > ut(r).length && r[r.length - 1] === t;
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
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l1;
          return bt(e, t)
            ? e['with']({
                path: e.path.substr(0, e.path.length - 1),
              })
            : e;
        },
      },
      {
        key: 'addTrailingPathSeparator',
        value: function addTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l1;
          var r = !1;
          if (e.scheme === W.file) {
            var n = r1(e);
            r = n !== void 0 && n.length === ut(n).length && n[n.length - 1] === t;
          } else {
            t = '/';
            var _n6 = e.path;
            r = _n6.length === 1 && _n6.charCodeAt(_n6.length - 1) === 47;
          }
          return !r && !bt(e, t)
            ? e['with']({
                path: e.path + '/',
              })
            : e;
        },
      },
    ]);
  })(),
  k = new L1(function () {
    return !1;
  }),
  W2 = new L1(function (e) {
    return e.scheme === W.file ? !Ge : !0;
  }),
  B2 = new L1(function (e) {
    return !0;
  }),
  z2 = k.isEqual.bind(k),
  H2 = k.isEqualOrParent.bind(k),
  V2 = k.getComparisonKey.bind(k),
  K2 = k.basenameOrAuthority.bind(k),
  Sn = k.basename.bind(k),
  J2 = k.extname.bind(k),
  Q2 = k.dirname.bind(k),
  Z2 = k.joinPath.bind(k),
  G2 = k.normalizePath.bind(k),
  Y2 = k.relativePath.bind(k),
  X2 = k.resolvePath.bind(k),
  ei = k.isAbsolutePath.bind(k),
  gt = k.isEqualAuthority.bind(k),
  bt = k.hasTrailingPathSeparator.bind(k),
  ti = k.removeTrailingPathSeparator.bind(k),
  ri = k.addTrailingPathSeparator.bind(k),
  pt;
(function (e) {
  (e.META_DATA_LABEL = 'label'),
    (e.META_DATA_DESCRIPTION = 'description'),
    (e.META_DATA_SIZE = 'size'),
    (e.META_DATA_MIME = 'mime');
  function t(r) {
    var n = new Map();
    r.path
      .substring(r.path.indexOf(';') + 1, r.path.lastIndexOf(';'))
      .split(';')
      .forEach(function (l) {
        var _l$split = l.split(':'),
          _l$split2 = _slicedToArray(_l$split, 2),
          o = _l$split2[0],
          u = _l$split2[1];
        o && u && n.set(o, u);
      });
    var s = r.path.substring(0, r.path.indexOf(';'));
    return s && n.set(e.META_DATA_MIME, s), n;
  }
  e.parseMetaData = t;
})(pt || (pt = {}));
var ni = Symbol('MicrotaskDelay');
function we(e) {
  return !!e && typeof e.then == 'function';
}
var On, ye;
(function () {
  typeof globalThis.requestIdleCallback != 'function' ||
  typeof globalThis.cancelIdleCallback != 'function'
    ? (ye = function ye(e, t, r) {
        Ur(function () {
          if (n) return;
          var i = Date.now() + 15;
          t(
            Object.freeze({
              didTimeout: !0,
              timeRemaining: function timeRemaining() {
                return Math.max(0, i - Date.now());
              },
            }),
          );
        });
        var n = !1;
        return {
          dispose: function dispose() {
            n || (n = !0);
          },
        };
      })
    : (ye = function ye(e, t, r) {
        var n = e.requestIdleCallback(
          t,
          typeof r == 'number'
            ? {
                timeout: r,
              }
            : void 0,
        );
        var i = !1;
        return {
          dispose: function dispose() {
            i || ((i = !0), e.cancelIdleCallback(n));
          },
        };
      }),
    (On = function On(e, t) {
      return ye(globalThis, e, t);
    });
})();
var wt;
(function (e) {
  (e[(e.Resolved = 0)] = 'Resolved'), (e[(e.Rejected = 1)] = 'Rejected');
})(wt || (wt = {}));
var Ce;
(function (e) {
  function t(_x2) {
    return _t3.apply(this, arguments);
  }
  function _t3() {
    _t3 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(n) {
        var i, s;
        return _regeneratorRuntime().wrap(function _callee4$(_context14) {
          while (1)
            switch ((_context14.prev = _context14.next)) {
              case 0:
                _context14.next = 2;
                return Promise.all(
                  n.map(function (l) {
                    return l.then(
                      function (o) {
                        return o;
                      },
                      function (o) {
                        i || (i = o);
                      },
                    );
                  }),
                );
              case 2:
                s = _context14.sent;
                if (!(_typeof(i) < 'u')) {
                  _context14.next = 5;
                  break;
                }
                throw i;
              case 5:
                return _context14.abrupt('return', s);
              case 6:
              case 'end':
                return _context14.stop();
            }
        }, _callee4);
      }),
    );
    return _t3.apply(this, arguments);
  }
  e.settled = t;
  function r(n) {
    return new Promise(
      /*#__PURE__*/ (function () {
        var _ref9 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(i, s) {
            return _regeneratorRuntime().wrap(
              function _callee3$(_context13) {
                while (1)
                  switch ((_context13.prev = _context13.next)) {
                    case 0:
                      _context13.prev = 0;
                      _context13.next = 3;
                      return n(i, s);
                    case 3:
                      _context13.next = 8;
                      break;
                    case 5:
                      _context13.prev = 5;
                      _context13.t0 = _context13['catch'](0);
                      s(_context13.t0);
                    case 8:
                    case 'end':
                      return _context13.stop();
                  }
              },
              _callee3,
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
})(Ce || (Ce = {}));
var yt;
(function (e) {
  (e[(e.Initial = 0)] = 'Initial'),
    (e[(e.DoneOK = 1)] = 'DoneOK'),
    (e[(e.DoneError = 2)] = 'DoneError');
})(yt || (yt = {}));
var ii =
    ((_J = /*#__PURE__*/ (function () {
      function J(t, r) {
        var _this16 = this;
        _classCallCheck(this, J);
        (this.a = 0),
          (this.b = []),
          (this.d = null),
          (this.f = r),
          (this.g = new G()),
          queueMicrotask(
            /*#__PURE__*/ _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5() {
                var n;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context15) {
                    while (1)
                      switch ((_context15.prev = _context15.next)) {
                        case 0:
                          n = {
                            emitOne: function emitOne(i) {
                              return _this16.h(i);
                            },
                            emitMany: function emitMany(i) {
                              return _this16.j(i);
                            },
                            reject: function reject(i) {
                              return _this16.l(i);
                            },
                          };
                          _context15.prev = 1;
                          _context15.next = 4;
                          return Promise.resolve(t(n));
                        case 4:
                          _this16.k();
                          _context15.next = 10;
                          break;
                        case 7:
                          _context15.prev = 7;
                          _context15.t0 = _context15['catch'](1);
                          _this16.l(_context15.t0);
                        case 10:
                          _context15.prev = 10;
                          (n.emitOne = void 0), (n.emitMany = void 0), (n.reject = void 0);
                          return _context15.finish(10);
                        case 13:
                        case 'end':
                          return _context15.stop();
                      }
                  },
                  _callee5,
                  null,
                  [[1, 7, 10, 13]],
                );
              }),
            ),
          );
      }
      return _createClass(
        J,
        [
          {
            key: Symbol.asyncIterator,
            value: function value() {
              var _this17 = this;
              var t = 0;
              return {
                next: (function () {
                  var _next2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
                      return _regeneratorRuntime().wrap(function _callee6$(_context16) {
                        while (1)
                          switch ((_context16.prev = _context16.next)) {
                            case 0:
                              if (!(_this17.a === 2)) {
                                _context16.next = 2;
                                break;
                              }
                              throw _this17.d;
                            case 2:
                              if (!(t < _this17.b.length)) {
                                _context16.next = 4;
                                break;
                              }
                              return _context16.abrupt('return', {
                                done: !1,
                                value: _this17.b[t++],
                              });
                            case 4:
                              if (!(_this17.a === 1)) {
                                _context16.next = 6;
                                break;
                              }
                              return _context16.abrupt('return', {
                                done: !0,
                                value: void 0,
                              });
                            case 6:
                              _context16.next = 8;
                              return S1.toPromise(_this17.g.event);
                            case 8:
                              if (!0) {
                                _context16.next = 0;
                                break;
                              }
                            case 9:
                            case 'end':
                              return _context16.stop();
                          }
                      }, _callee6);
                    }),
                  );
                  function next() {
                    return _next2.apply(this, arguments);
                  }
                  return next;
                })(),
                return: (function () {
                  var _return2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7() {
                      var _this17$f;
                      return _regeneratorRuntime().wrap(function _callee7$(_context17) {
                        while (1)
                          switch ((_context17.prev = _context17.next)) {
                            case 0:
                              return _context17.abrupt(
                                'return',
                                ((_this17$f = _this17.f) !== null &&
                                  _this17$f !== void 0 &&
                                  _this17$f.call(_this17),
                                {
                                  done: !0,
                                  value: void 0,
                                }),
                              );
                            case 1:
                            case 'end':
                              return _context17.stop();
                          }
                      }, _callee7);
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
              return J.map(this, t);
            },
          },
          {
            key: 'filter',
            value: function filter(t) {
              return J.filter(this, t);
            },
          },
          {
            key: 'coalesce',
            value: function coalesce() {
              return J.coalesce(this);
            },
          },
          {
            key: 'toPromise',
            value: function toPromise() {
              return J.toPromise(this);
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
              return new J(function (r) {
                r.emitMany(t);
              });
            },
          },
          {
            key: 'fromPromise',
            value: function fromPromise(t) {
              return new J(
                /*#__PURE__*/ (function () {
                  var _ref1 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8(r) {
                      return _regeneratorRuntime().wrap(function _callee8$(_context18) {
                        while (1)
                          switch ((_context18.prev = _context18.next)) {
                            case 0:
                              _context18.t0 = r;
                              _context18.next = 3;
                              return t;
                            case 3:
                              _context18.t1 = _context18.sent;
                              _context18.t0.emitMany.call(_context18.t0, _context18.t1);
                            case 5:
                            case 'end':
                              return _context18.stop();
                          }
                      }, _callee8);
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
              return new J(
                /*#__PURE__*/ (function () {
                  var _ref10 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee0(r) {
                      return _regeneratorRuntime().wrap(function _callee0$(_context20) {
                        while (1)
                          switch ((_context20.prev = _context20.next)) {
                            case 0:
                              _context20.next = 2;
                              return Promise.all(
                                t.map(
                                  /*#__PURE__*/ (function () {
                                    var _ref11 = _asyncToGenerator(
                                      /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee9(n) {
                                          return _regeneratorRuntime().wrap(function _callee9$(
                                            _context19,
                                          ) {
                                            while (1)
                                              switch ((_context19.prev = _context19.next)) {
                                                case 0:
                                                  _context19.t0 = r;
                                                  _context19.next = 3;
                                                  return n;
                                                case 3:
                                                  _context19.t1 = _context19.sent;
                                                  return _context19.abrupt(
                                                    'return',
                                                    _context19.t0.emitOne.call(
                                                      _context19.t0,
                                                      _context19.t1,
                                                    ),
                                                  );
                                                case 5:
                                                case 'end':
                                                  return _context19.stop();
                                              }
                                          }, _callee9);
                                        },
                                      ),
                                    );
                                    return function (_x7) {
                                      return _ref11.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            case 2:
                            case 'end':
                              return _context20.stop();
                          }
                      }, _callee0);
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
              return new J(
                /*#__PURE__*/ (function () {
                  var _ref12 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee10(r) {
                      return _regeneratorRuntime().wrap(function _callee10$(_context22) {
                        while (1)
                          switch ((_context22.prev = _context22.next)) {
                            case 0:
                              _context22.next = 2;
                              return Promise.all(
                                t.map(
                                  /*#__PURE__*/ (function () {
                                    var _ref13 = _asyncToGenerator(
                                      /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee1(n) {
                                          var _iteratorAbruptCompletion2,
                                            _didIteratorError2,
                                            _iteratorError2,
                                            _iterator2,
                                            _step2,
                                            i;
                                          return _regeneratorRuntime().wrap(
                                            function _callee1$(_context21) {
                                              while (1)
                                                switch ((_context21.prev = _context21.next)) {
                                                  case 0:
                                                    _iteratorAbruptCompletion2 = false;
                                                    _didIteratorError2 = false;
                                                    _context21.prev = 2;
                                                    _iterator2 = _asyncIterator(n);
                                                  case 4:
                                                    _context21.next = 6;
                                                    return _iterator2.next();
                                                  case 6:
                                                    if (
                                                      !(_iteratorAbruptCompletion2 = !(_step2 =
                                                        _context21.sent).done)
                                                    ) {
                                                      _context21.next = 12;
                                                      break;
                                                    }
                                                    i = _step2.value;
                                                    r.emitOne(i);
                                                  case 9:
                                                    _iteratorAbruptCompletion2 = false;
                                                    _context21.next = 4;
                                                    break;
                                                  case 12:
                                                    _context21.next = 18;
                                                    break;
                                                  case 14:
                                                    _context21.prev = 14;
                                                    _context21.t0 = _context21['catch'](2);
                                                    _didIteratorError2 = true;
                                                    _iteratorError2 = _context21.t0;
                                                  case 18:
                                                    _context21.prev = 18;
                                                    _context21.prev = 19;
                                                    if (
                                                      !(
                                                        _iteratorAbruptCompletion2 &&
                                                        _iterator2['return'] != null
                                                      )
                                                    ) {
                                                      _context21.next = 23;
                                                      break;
                                                    }
                                                    _context21.next = 23;
                                                    return _iterator2['return']();
                                                  case 23:
                                                    _context21.prev = 23;
                                                    if (!_didIteratorError2) {
                                                      _context21.next = 26;
                                                      break;
                                                    }
                                                    throw _iteratorError2;
                                                  case 26:
                                                    return _context21.finish(23);
                                                  case 27:
                                                    return _context21.finish(18);
                                                  case 28:
                                                  case 'end':
                                                    return _context21.stop();
                                                }
                                            },
                                            _callee1,
                                            null,
                                            [
                                              [2, 14, 18, 28],
                                              [19, , 23, 27],
                                            ],
                                          );
                                        },
                                      ),
                                    );
                                    return function (_x9) {
                                      return _ref13.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            case 2:
                            case 'end':
                              return _context22.stop();
                          }
                      }, _callee10);
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
              return new J(
                /*#__PURE__*/ (function () {
                  var _ref14 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(n) {
                      var _iteratorAbruptCompletion3,
                        _didIteratorError3,
                        _iteratorError3,
                        _iterator3,
                        _step3,
                        i;
                      return _regeneratorRuntime().wrap(
                        function _callee11$(_context23) {
                          while (1)
                            switch ((_context23.prev = _context23.next)) {
                              case 0:
                                _iteratorAbruptCompletion3 = false;
                                _didIteratorError3 = false;
                                _context23.prev = 2;
                                _iterator3 = _asyncIterator(t);
                              case 4:
                                _context23.next = 6;
                                return _iterator3.next();
                              case 6:
                                if (
                                  !(_iteratorAbruptCompletion3 = !(_step3 = _context23.sent).done)
                                ) {
                                  _context23.next = 12;
                                  break;
                                }
                                i = _step3.value;
                                n.emitOne(r(i));
                              case 9:
                                _iteratorAbruptCompletion3 = false;
                                _context23.next = 4;
                                break;
                              case 12:
                                _context23.next = 18;
                                break;
                              case 14:
                                _context23.prev = 14;
                                _context23.t0 = _context23['catch'](2);
                                _didIteratorError3 = true;
                                _iteratorError3 = _context23.t0;
                              case 18:
                                _context23.prev = 18;
                                _context23.prev = 19;
                                if (!(_iteratorAbruptCompletion3 && _iterator3['return'] != null)) {
                                  _context23.next = 23;
                                  break;
                                }
                                _context23.next = 23;
                                return _iterator3['return']();
                              case 23:
                                _context23.prev = 23;
                                if (!_didIteratorError3) {
                                  _context23.next = 26;
                                  break;
                                }
                                throw _iteratorError3;
                              case 26:
                                return _context23.finish(23);
                              case 27:
                                return _context23.finish(18);
                              case 28:
                              case 'end':
                                return _context23.stop();
                            }
                        },
                        _callee11,
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
              return new J(
                /*#__PURE__*/ (function () {
                  var _ref15 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee12(n) {
                      var _iteratorAbruptCompletion4,
                        _didIteratorError4,
                        _iteratorError4,
                        _iterator4,
                        _step4,
                        i;
                      return _regeneratorRuntime().wrap(
                        function _callee12$(_context24) {
                          while (1)
                            switch ((_context24.prev = _context24.next)) {
                              case 0:
                                _iteratorAbruptCompletion4 = false;
                                _didIteratorError4 = false;
                                _context24.prev = 2;
                                _iterator4 = _asyncIterator(t);
                              case 4:
                                _context24.next = 6;
                                return _iterator4.next();
                              case 6:
                                if (
                                  !(_iteratorAbruptCompletion4 = !(_step4 = _context24.sent).done)
                                ) {
                                  _context24.next = 12;
                                  break;
                                }
                                i = _step4.value;
                                r(i) && n.emitOne(i);
                              case 9:
                                _iteratorAbruptCompletion4 = false;
                                _context24.next = 4;
                                break;
                              case 12:
                                _context24.next = 18;
                                break;
                              case 14:
                                _context24.prev = 14;
                                _context24.t0 = _context24['catch'](2);
                                _didIteratorError4 = true;
                                _iteratorError4 = _context24.t0;
                              case 18:
                                _context24.prev = 18;
                                _context24.prev = 19;
                                if (!(_iteratorAbruptCompletion4 && _iterator4['return'] != null)) {
                                  _context24.next = 23;
                                  break;
                                }
                                _context24.next = 23;
                                return _iterator4['return']();
                              case 23:
                                _context24.prev = 23;
                                if (!_didIteratorError4) {
                                  _context24.next = 26;
                                  break;
                                }
                                throw _iteratorError4;
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
              return J.filter(t, function (r) {
                return !!r;
              });
            },
          },
          {
            key: 'toPromise',
            value: (function () {
              var _toPromise = _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13(t) {
                  var r,
                    _iteratorAbruptCompletion5,
                    _didIteratorError5,
                    _iteratorError5,
                    _iterator5,
                    _step5,
                    n;
                  return _regeneratorRuntime().wrap(
                    function _callee13$(_context25) {
                      while (1)
                        switch ((_context25.prev = _context25.next)) {
                          case 0:
                            r = [];
                            _iteratorAbruptCompletion5 = false;
                            _didIteratorError5 = false;
                            _context25.prev = 3;
                            _iterator5 = _asyncIterator(t);
                          case 5:
                            _context25.next = 7;
                            return _iterator5.next();
                          case 7:
                            if (!(_iteratorAbruptCompletion5 = !(_step5 = _context25.sent).done)) {
                              _context25.next = 13;
                              break;
                            }
                            n = _step5.value;
                            r.push(n);
                          case 10:
                            _iteratorAbruptCompletion5 = false;
                            _context25.next = 5;
                            break;
                          case 13:
                            _context25.next = 19;
                            break;
                          case 15:
                            _context25.prev = 15;
                            _context25.t0 = _context25['catch'](3);
                            _didIteratorError5 = true;
                            _iteratorError5 = _context25.t0;
                          case 19:
                            _context25.prev = 19;
                            _context25.prev = 20;
                            if (!(_iteratorAbruptCompletion5 && _iterator5['return'] != null)) {
                              _context25.next = 24;
                              break;
                            }
                            _context25.next = 24;
                            return _iterator5['return']();
                          case 24:
                            _context25.prev = 24;
                            if (!_didIteratorError5) {
                              _context25.next = 27;
                              break;
                            }
                            throw _iteratorError5;
                          case 27:
                            return _context25.finish(24);
                          case 28:
                            return _context25.finish(19);
                          case 29:
                            return _context25.abrupt('return', r);
                          case 30:
                          case 'end':
                            return _context25.stop();
                        }
                    },
                    _callee13,
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
    (_J.EMPTY = _J.fromArray([])),
    _J),
  z1 = '**',
  Ct = '/',
  H1 = '[/\\\\]',
  V1 = '[^/\\\\]',
  Rn = /\//g;
function Lt(e, t) {
  switch (e) {
    case 0:
      return '';
    case 1:
      return ''.concat(V1, '*?');
    default:
      return '(?:'
        .concat(H1, '|')
        .concat(V1, '+')
        .concat(H1)
        .concat(t ? '|'.concat(H1).concat(V1, '+') : '', ')*?');
  }
}
function At(e, t) {
  if (!e) return [];
  var r = [];
  var n = !1,
    i = !1,
    s = '';
  var _iterator32 = _createForOfIteratorHelper(e),
    _step32;
  try {
    for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
      var l = _step32.value;
      switch (l) {
        case t:
          if (!n && !i) {
            r.push(s), (s = '');
            continue;
          }
          break;
        case '{':
          n = !0;
          break;
        case '}':
          n = !1;
          break;
        case '[':
          i = !0;
          break;
        case ']':
          i = !1;
          break;
      }
      s += l;
    }
  } catch (err) {
    _iterator32.e(err);
  } finally {
    _iterator32.f();
  }
  return s && r.push(s), r;
}
function $t(e) {
  if (!e) return '';
  var t = '';
  var r = At(e, Ct);
  if (
    r.every(function (n) {
      return n === z1;
    })
  )
    t = '.*';
  else {
    var n = !1;
    r.forEach(function (i, s) {
      if (i === z1) {
        if (n) return;
        t += Lt(2, s === r.length - 1);
      } else {
        var l = !1,
          o = '',
          u = !1,
          a = '';
        var _iterator33 = _createForOfIteratorHelper(i),
          _step33;
        try {
          for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
            var c = _step33.value;
            if (c !== '}' && l) {
              o += c;
              continue;
            }
            if (u && (c !== ']' || !a)) {
              var f = void 0;
              c === '-'
                ? (f = c)
                : (c === '^' || c === '!') && !a
                  ? (f = '^')
                  : c === Ct
                    ? (f = '')
                    : (f = ge(c)),
                (a += f);
              continue;
            }
            switch (c) {
              case '{':
                l = !0;
                continue;
              case '[':
                u = !0;
                continue;
              case '}': {
                var h = '(?:'.concat(
                  At(o, ',')
                    .map(function (m) {
                      return $t(m);
                    })
                    .join('|'),
                  ')',
                );
                (t += h), (l = !1), (o = '');
                break;
              }
              case ']': {
                (t += '[' + a + ']'), (u = !1), (a = '');
                break;
              }
              case '?':
                t += V1;
                continue;
              case '*':
                t += Lt(1);
                continue;
              default:
                t += ge(c);
            }
          }
        } catch (err) {
          _iterator33.e(err);
        } finally {
          _iterator33.f();
        }
        s < r.length - 1 && (r[s + 1] !== z1 || s + 2 < r.length) && (t += H1);
      }
      n = i === z1;
    });
  }
  return t;
}
var Tn = /^\*\*\/\*\.[\w\.-]+$/,
  In = /^\*\*\/([\w\.-]+)\/?$/,
  Dn = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/,
  Mn = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/,
  jn = /^\*\*((\/[\w\.-]+)+)\/?$/,
  Fn = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
  Et = new ar(1e4),
  Nt = function Nt() {
    return !1;
  },
  X = function X() {
    return null;
  };
function Le(e, t) {
  if (!e) return X;
  var r;
  typeof e != 'string' ? (r = e.pattern) : (r = e), (r = r.trim());
  var n = ''.concat(r, '_').concat(!!t.trimForExclusions);
  var i = Et.get(n);
  if (i) return xt(i, e);
  var s;
  return (
    Tn.test(r)
      ? (i = Un(r.substr(4), r))
      : (s = In.exec(Ae(r, t)))
        ? (i = qn(s[1], r))
        : (t.trimForExclusions ? Mn : Dn).test(r)
          ? (i = Wn(r, t))
          : (s = jn.exec(Ae(r, t)))
            ? (i = Pt(s[1].substr(1), r, !0))
            : (s = Fn.exec(Ae(r, t)))
              ? (i = Pt(s[1], r, !1))
              : (i = Bn(r)),
    Et.set(n, i),
    xt(i, e)
  );
}
function xt(e, t) {
  if (typeof t == 'string') return e;
  var r = function r(n, i) {
    return be(n, t.base, !Ge) ? e(ln(n.substr(t.base.length), l1), i) : null;
  };
  return (
    (r.allBasenames = e.allBasenames),
    (r.allPaths = e.allPaths),
    (r.basenames = e.basenames),
    (r.patterns = e.patterns),
    r
  );
}
function Ae(e, t) {
  return t.trimForExclusions && e.endsWith('/**') ? e.substr(0, e.length - 2) : e;
}
function Un(e, t) {
  return function (r, n) {
    return typeof r == 'string' && r.endsWith(e) ? t : null;
  };
}
function qn(e, t) {
  var r = '/'.concat(e),
    n = '\\'.concat(e),
    i = function i(l, o) {
      return typeof l != 'string'
        ? null
        : o
          ? o === e
            ? t
            : null
          : l === e || l.endsWith(r) || l.endsWith(n)
            ? t
            : null;
    },
    s = [e];
  return (i.basenames = s), (i.patterns = [t]), (i.allBasenames = s), i;
}
function Wn(e, t) {
  var r = _t(
      e
        .slice(1, -1)
        .split(',')
        .map(function (o) {
          return Le(o, t);
        })
        .filter(function (o) {
          return o !== X;
        }),
      e,
    ),
    n = r.length;
  if (!n) return X;
  if (n === 1) return r[0];
  var i = function i(o, u) {
      for (var a = 0, c = r.length; a < c; a++) if (r[a](o, u)) return e;
      return null;
    },
    s = r.find(function (o) {
      return !!o.allBasenames;
    });
  s && (i.allBasenames = s.allBasenames);
  var l = r.reduce(function (o, u) {
    return u.allPaths ? o.concat(u.allPaths) : o;
  }, []);
  return l.length && (i.allPaths = l), i;
}
function Pt(e, t, r) {
  var n = l1 === _.sep,
    i = n ? e : e.replace(Rn, l1),
    s = l1 + i,
    l = _.sep + e;
  var o;
  return (
    r
      ? (o = function o(u, a) {
          return typeof u == 'string' &&
            (u === i || u.endsWith(s) || (!n && (u === e || u.endsWith(l))))
            ? t
            : null;
        })
      : (o = function o(u, a) {
          return typeof u == 'string' && (u === i || (!n && u === e)) ? t : null;
        }),
    (o.allPaths = [(r ? '*/' : './') + e]),
    o
  );
}
function Bn(e) {
  try {
    var _t4 = new RegExp('^'.concat($t(e), '$'));
    return function (r) {
      return (_t4.lastIndex = 0), typeof r == 'string' && _t4.test(r) ? e : null;
    };
  } catch (_unused5) {
    return X;
  }
}
function K1(e, t, r) {
  return !e || typeof t != 'string' ? !1 : $e(e)(t, void 0, r);
}
function $e(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return Nt;
  if (typeof e == 'string' || zn(e)) {
    var r = Le(e, t);
    if (r === X) return Nt;
    var n = function n(i, s) {
      return !!r(i, s);
    };
    return (
      r.allBasenames && (n.allBasenames = r.allBasenames),
      r.allPaths && (n.allPaths = r.allPaths),
      n
    );
  }
  return Hn(e, t);
}
function zn(e) {
  var t = e;
  return t ? typeof t.base == 'string' && typeof t.pattern == 'string' : !1;
}
function Hn(e, t) {
  var r = _t(
      Object.getOwnPropertyNames(e)
        .map(function (o) {
          return Vn(o, e[o], t);
        })
        .filter(function (o) {
          return o !== X;
        }),
    ),
    n = r.length;
  if (!n) return X;
  if (
    !r.some(function (o) {
      return !!o.requiresSiblings;
    })
  ) {
    if (n === 1) return r[0];
    var o = function o(c, f) {
        var h;
        for (var m = 0, v = r.length; m < v; m++) {
          var C = r[m](c, f);
          if (typeof C == 'string') return C;
          we(C) && (h || (h = []), h.push(C));
        }
        return h
          ? _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14() {
                var _iterator34, _step34, _m4, _v;
                return _regeneratorRuntime().wrap(
                  function _callee14$(_context26) {
                    while (1)
                      switch ((_context26.prev = _context26.next)) {
                        case 0:
                          _iterator34 = _createForOfIteratorHelper(h);
                          _context26.prev = 1;
                          _iterator34.s();
                        case 3:
                          if ((_step34 = _iterator34.n()).done) {
                            _context26.next = 12;
                            break;
                          }
                          _m4 = _step34.value;
                          _context26.next = 7;
                          return _m4;
                        case 7:
                          _v = _context26.sent;
                          if (!(typeof _v == 'string')) {
                            _context26.next = 10;
                            break;
                          }
                          return _context26.abrupt('return', _v);
                        case 10:
                          _context26.next = 3;
                          break;
                        case 12:
                          _context26.next = 17;
                          break;
                        case 14:
                          _context26.prev = 14;
                          _context26.t0 = _context26['catch'](1);
                          _iterator34.e(_context26.t0);
                        case 17:
                          _context26.prev = 17;
                          _iterator34.f();
                          return _context26.finish(17);
                        case 20:
                          return _context26.abrupt('return', null);
                        case 21:
                        case 'end':
                          return _context26.stop();
                      }
                  },
                  _callee14,
                  null,
                  [[1, 14, 17, 20]],
                );
              }),
            )()
          : null;
      },
      u = r.find(function (c) {
        return !!c.allBasenames;
      });
    u && (o.allBasenames = u.allBasenames);
    var a = r.reduce(function (c, f) {
      return f.allPaths ? c.concat(f.allPaths) : c;
    }, []);
    return a.length && (o.allPaths = a), o;
  }
  var i = function i(o, u, a) {
      var c, f;
      for (var h = 0, m = r.length; h < m; h++) {
        var v = r[h];
        v.requiresSiblings &&
          a &&
          (u || (u = rn(o)), c || (c = u.substr(0, u.length - nn(o).length)));
        var C = v(o, u, c, a);
        if (typeof C == 'string') return C;
        we(C) && (f || (f = []), f.push(C));
      }
      return f
        ? _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee15() {
              var _iterator35, _step35, _h, _m5;
              return _regeneratorRuntime().wrap(
                function _callee15$(_context27) {
                  while (1)
                    switch ((_context27.prev = _context27.next)) {
                      case 0:
                        _iterator35 = _createForOfIteratorHelper(f);
                        _context27.prev = 1;
                        _iterator35.s();
                      case 3:
                        if ((_step35 = _iterator35.n()).done) {
                          _context27.next = 12;
                          break;
                        }
                        _h = _step35.value;
                        _context27.next = 7;
                        return _h;
                      case 7:
                        _m5 = _context27.sent;
                        if (!(typeof _m5 == 'string')) {
                          _context27.next = 10;
                          break;
                        }
                        return _context27.abrupt('return', _m5);
                      case 10:
                        _context27.next = 3;
                        break;
                      case 12:
                        _context27.next = 17;
                        break;
                      case 14:
                        _context27.prev = 14;
                        _context27.t0 = _context27['catch'](1);
                        _iterator35.e(_context27.t0);
                      case 17:
                        _context27.prev = 17;
                        _iterator35.f();
                        return _context27.finish(17);
                      case 20:
                        return _context27.abrupt('return', null);
                      case 21:
                      case 'end':
                        return _context27.stop();
                    }
                },
                _callee15,
                null,
                [[1, 14, 17, 20]],
              );
            }),
          )()
        : null;
    },
    s = r.find(function (o) {
      return !!o.allBasenames;
    });
  s && (i.allBasenames = s.allBasenames);
  var l = r.reduce(function (o, u) {
    return u.allPaths ? o.concat(u.allPaths) : o;
  }, []);
  return l.length && (i.allPaths = l), i;
}
function Vn(e, t, r) {
  if (t === !1) return X;
  var n = Le(e, r);
  if (n === X) return X;
  if (typeof t == 'boolean') return n;
  if (t) {
    var i = t.when;
    if (typeof i == 'string') {
      var s = function s(l, o, u, a) {
        if (!a || !n(l, o)) return null;
        var c = i.replace('$(basename)', function () {
            return u;
          }),
          f = a(c);
        return we(f)
          ? f.then(function (h) {
              return h ? e : null;
            })
          : f
            ? e
            : null;
      };
      return (s.requiresSiblings = !0), s;
    }
  }
  return n;
}
function _t(e, t) {
  var r = e.filter(function (o) {
    return !!o.basenames;
  });
  if (r.length < 2) return e;
  var n = r.reduce(function (o, u) {
    var a = u.basenames;
    return a ? o.concat(a) : o;
  }, []);
  var i;
  if (t) {
    i = [];
    for (var o = 0, u = n.length; o < u; o++) i.push(t);
  } else
    i = r.reduce(function (o, u) {
      var a = u.patterns;
      return a ? o.concat(a) : o;
    }, []);
  var s = function s(o, u) {
    if (typeof o != 'string') return null;
    if (!u) {
      var c;
      for (c = o.length; c > 0; c--) {
        var f = o.charCodeAt(c - 1);
        if (f === 47 || f === 92) break;
      }
      u = o.substr(c);
    }
    var a = n.indexOf(u);
    return a !== -1 ? i[a] : null;
  };
  (s.basenames = n), (s.patterns = i), (s.allBasenames = n);
  var l = e.filter(function (o) {
    return !o.basenames;
  });
  return l.push(s), l;
}
var Kn =
    ((_Oe = /*#__PURE__*/ (function () {
      function Oe() {
        _classCallCheck(this, Oe);
      }
      return _createClass(Oe, null, [
        {
          key: 'getChannel',
          value: function getChannel(t) {
            return t.getChannel(Oe.CHANNEL_NAME);
          },
        },
        {
          key: 'setChannel',
          value: function setChannel(t, r) {
            t.setChannel(Oe.CHANNEL_NAME, r);
          },
        },
      ]);
    })()),
    (_Oe.CHANNEL_NAME = 'localFileSearchWorkerHost'),
    _Oe),
  kt = /*#__PURE__*/ (function () {
    function h1(t, r) {
      _classCallCheck(this, h1);
      (this.lineNumber = t), (this.column = r);
    }
    return _createClass(
      h1,
      [
        {
          key: 'with',
          value: function _with() {
            var t =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lineNumber;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.column;
            return t === this.lineNumber && r === this.column ? this : new h1(t, r);
          },
        },
        {
          key: 'delta',
          value: function delta() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this['with'](this.lineNumber + t, this.column + r);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return h1.equals(this, t);
          },
        },
        {
          key: 'isBefore',
          value: function isBefore(t) {
            return h1.isBefore(this, t);
          },
        },
        {
          key: 'isBeforeOrEqual',
          value: function isBeforeOrEqual(t) {
            return h1.isBeforeOrEqual(this, t);
          },
        },
        {
          key: 'clone',
          value: function clone() {
            return new h1(this.lineNumber, this.column);
          },
        },
        {
          key: 'toString',
          value: function toString() {
            return '(' + this.lineNumber + ',' + this.column + ')';
          },
        },
        {
          key: 'toJSON',
          value: function toJSON() {
            return {
              lineNumber: this.lineNumber,
              column: this.column,
            };
          },
        },
      ],
      [
        {
          key: 'equals',
          value: function equals(t, r) {
            return !t && !r
              ? !0
              : !!t && !!r && t.lineNumber === r.lineNumber && t.column === r.column;
          },
        },
        {
          key: 'isBefore',
          value: function isBefore(t, r) {
            return t.lineNumber < r.lineNumber
              ? !0
              : r.lineNumber < t.lineNumber
                ? !1
                : t.column < r.column;
          },
        },
        {
          key: 'isBeforeOrEqual',
          value: function isBeforeOrEqual(t, r) {
            return t.lineNumber < r.lineNumber
              ? !0
              : r.lineNumber < t.lineNumber
                ? !1
                : t.column <= r.column;
          },
        },
        {
          key: 'compare',
          value: function compare(t, r) {
            var n = t.lineNumber | 0,
              i = r.lineNumber | 0;
            if (n === i) {
              var s = t.column | 0,
                l = r.column | 0;
              return s - l;
            }
            return n - i;
          },
        },
        {
          key: 'lift',
          value: function lift(t) {
            return new h1(t.lineNumber, t.column);
          },
        },
        {
          key: 'isIPosition',
          value: function isIPosition(t) {
            return t && typeof t.lineNumber == 'number' && typeof t.column == 'number';
          },
        },
      ],
    );
  })(),
  St = /*#__PURE__*/ (function () {
    function R(t, r, n, i) {
      _classCallCheck(this, R);
      var s, l, o, u;
      t == null || typeof t == 'number' || Number.isNaN(t)
        ? ((s = t), (l = r), (o = n), (u = i))
        : 'startLineNumber' in t && 'startColumn' in t
          ? ((s = t.startLineNumber), (l = t.startColumn), (o = t.endLineNumber), (u = t.endColumn))
          : ((s = t.startLineNumber), (l = 1), (o = t.endLineNumberExclusive), (u = 1)),
        s > o || (s === o && l > u)
          ? ((this.startLineNumber = o),
            (this.startColumn = u),
            (this.endLineNumber = s),
            (this.endColumn = l))
          : ((this.startLineNumber = s),
            (this.startColumn = l),
            (this.endLineNumber = o),
            (this.endColumn = u));
    }
    return _createClass(
      R,
      [
        {
          key: 'asIRange',
          value: function asIRange() {
            return {
              startLineNumber: this.startLineNumber,
              startColumn: this.startColumn,
              endLineNumber: this.endLineNumber,
              endColumn: this.endColumn,
            };
          },
        },
        {
          key: 'isEmpty',
          value: function isEmpty() {
            return R.isEmpty(this);
          },
        },
        {
          key: 'containsPosition',
          value: function containsPosition(t) {
            return R.containsPosition(this, t);
          },
        },
        {
          key: 'containsRange',
          value: function containsRange(t) {
            return R.containsRange(this, t);
          },
        },
        {
          key: 'strictContainsRange',
          value: function strictContainsRange(t) {
            return R.strictContainsRange(this, t);
          },
        },
        {
          key: 'plusRange',
          value: function plusRange(t) {
            return R.plusRange(this, t);
          },
        },
        {
          key: 'intersectRanges',
          value: function intersectRanges(t) {
            return R.intersectRanges(this, t);
          },
        },
        {
          key: 'whereIs',
          value: function whereIs(t) {
            return t.endLineNumber < this.startLineNumber ||
              (t.endLineNumber === this.startLineNumber && t.endColumn <= this.startColumn)
              ? 'before'
              : t.startLineNumber > this.endLineNumber ||
                  (t.startLineNumber === this.endLineNumber && t.startColumn >= this.endColumn)
                ? 'after'
                : 'overlapping';
          },
        },
        {
          key: 'equalsRange',
          value: function equalsRange(t) {
            return R.equalsRange(this, t);
          },
        },
        {
          key: 'getEndPosition',
          value: function getEndPosition() {
            return R.getEndPosition(this);
          },
        },
        {
          key: 'getStartPosition',
          value: function getStartPosition() {
            return R.getStartPosition(this);
          },
        },
        {
          key: 'toString',
          value: function toString() {
            return (
              '[' +
              this.startLineNumber +
              ',' +
              this.startColumn +
              ' -> ' +
              this.endLineNumber +
              ',' +
              this.endColumn +
              ']'
            );
          },
        },
        {
          key: 'setEndPosition',
          value: function setEndPosition(t, r) {
            return new R(this.startLineNumber, this.startColumn, t, r);
          },
        },
        {
          key: 'setStartPosition',
          value: function setStartPosition(t, r) {
            return new R(t, r, this.endLineNumber, this.endColumn);
          },
        },
        {
          key: 'collapseToStart',
          value: function collapseToStart() {
            return R.collapseToStart(this);
          },
        },
        {
          key: 'collapseToEnd',
          value: function collapseToEnd() {
            return R.collapseToEnd(this);
          },
        },
        {
          key: 'delta',
          value: function delta(t) {
            return new R(
              this.startLineNumber + t,
              this.startColumn,
              this.endLineNumber + t,
              this.endColumn,
            );
          },
        },
        {
          key: 'toJSON',
          value: function toJSON() {
            return this;
          },
        },
      ],
      [
        {
          key: 'isEmpty',
          value: function isEmpty(t) {
            return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
          },
        },
        {
          key: 'containsPosition',
          value: function containsPosition(t, r) {
            return !(
              r.lineNumber < t.startLineNumber ||
              r.lineNumber > t.endLineNumber ||
              (r.lineNumber === t.startLineNumber && r.column < t.startColumn) ||
              (r.lineNumber === t.endLineNumber && r.column > t.endColumn)
            );
          },
        },
        {
          key: 'strictContainsPosition',
          value: function strictContainsPosition(t, r) {
            return !(
              r.lineNumber < t.startLineNumber ||
              r.lineNumber > t.endLineNumber ||
              (r.lineNumber === t.startLineNumber && r.column <= t.startColumn) ||
              (r.lineNumber === t.endLineNumber && r.column >= t.endColumn)
            );
          },
        },
        {
          key: 'containsRange',
          value: function containsRange(t, r) {
            return !(
              r.startLineNumber < t.startLineNumber ||
              r.endLineNumber < t.startLineNumber ||
              r.startLineNumber > t.endLineNumber ||
              r.endLineNumber > t.endLineNumber ||
              (r.startLineNumber === t.startLineNumber && r.startColumn < t.startColumn) ||
              (r.endLineNumber === t.endLineNumber && r.endColumn > t.endColumn)
            );
          },
        },
        {
          key: 'strictContainsRange',
          value: function strictContainsRange(t, r) {
            return !(
              r.startLineNumber < t.startLineNumber ||
              r.endLineNumber < t.startLineNumber ||
              r.startLineNumber > t.endLineNumber ||
              r.endLineNumber > t.endLineNumber ||
              (r.startLineNumber === t.startLineNumber && r.startColumn <= t.startColumn) ||
              (r.endLineNumber === t.endLineNumber && r.endColumn >= t.endColumn)
            );
          },
        },
        {
          key: 'getRangeAbove',
          value: function getRangeAbove(t, r) {
            var n = Math.max(t.startLineNumber - r, 1),
              i = t.startLineNumber;
            return new R(n, t.startColumn, i, t.startColumn);
          },
        },
        {
          key: 'getRangeOnBelow',
          value: function getRangeOnBelow(t, r, n) {
            var i = t.endLineNumber,
              s = Math.min(t.endLineNumber + r, n);
            return new R(i, t.endColumn, s, t.endColumn);
          },
        },
        {
          key: 'getExtendedRange',
          value: function getExtendedRange(t, r, n) {
            var i = Math.max(t.startLineNumber - r, 0),
              s = Math.min(t.endLineNumber + r, n);
            return new R(i, t.startColumn, s, t.endColumn);
          },
        },
        {
          key: 'plusRange',
          value: function plusRange(t, r) {
            var n, i, s, l;
            return (
              r.startLineNumber < t.startLineNumber
                ? ((n = r.startLineNumber), (i = r.startColumn))
                : r.startLineNumber === t.startLineNumber
                  ? ((n = r.startLineNumber), (i = Math.min(r.startColumn, t.startColumn)))
                  : ((n = t.startLineNumber), (i = t.startColumn)),
              r.endLineNumber > t.endLineNumber
                ? ((s = r.endLineNumber), (l = r.endColumn))
                : r.endLineNumber === t.endLineNumber
                  ? ((s = r.endLineNumber), (l = Math.max(r.endColumn, t.endColumn)))
                  : ((s = t.endLineNumber), (l = t.endColumn)),
              new R(n, i, s, l)
            );
          },
        },
        {
          key: 'intersectRanges',
          value: function intersectRanges(t, r) {
            var n = t.startLineNumber,
              i = t.startColumn,
              s = t.endLineNumber,
              l = t.endColumn;
            var o = r.startLineNumber,
              u = r.startColumn,
              a = r.endLineNumber,
              c = r.endColumn;
            return (
              n < o ? ((n = o), (i = u)) : n === o && (i = Math.max(i, u)),
              s > a ? ((s = a), (l = c)) : s === a && (l = Math.min(l, c)),
              n > s || (n === s && i > l) ? null : new R(n, i, s, l)
            );
          },
        },
        {
          key: 'inverseEditRange',
          value: function inverseEditRange(t, r) {
            return {
              startLineNumber: t.startLineNumber,
              startColumn: t.startColumn,
              endLineNumber: t.startLineNumber + r.split('\n').length - 1,
              endColumn:
                r.lastIndexOf('\n') === -1
                  ? t.startColumn + r.length
                  : r.length - r.lastIndexOf('\n'),
            };
          },
        },
        {
          key: 'rangeAfterEdit',
          value: function rangeAfterEdit(t, r) {
            var n = R.lift(t).whereIs(r.range);
            switch (n) {
              case 'overlapping':
                throw new Error('Range is overlapping. The range after edit is ambiguous.');
              case 'after':
                return t;
              case 'before': {
                var i =
                  r.text.split('\n').length - 1 - (r.range.endLineNumber - r.range.startLineNumber);
                if (r.range.endLineNumber < t.startLineNumber)
                  return {
                    startLineNumber: t.startLineNumber + i,
                    startColumn: t.startColumn,
                    endLineNumber: t.endLineNumber + i,
                    endColumn: t.endColumn,
                  };
                {
                  var s =
                      r.text.lastIndexOf('\n') === -1
                        ? r.text.length
                        : r.text.length - r.text.lastIndexOf('\n') - 1,
                    l =
                      r.range.startLineNumber === r.range.endLineNumber
                        ? r.range.endColumn - r.range.startColumn
                        : r.range.endColumn - 1,
                    o = s - l;
                  return {
                    startLineNumber: t.startLineNumber + i,
                    startColumn: t.startColumn + o,
                    endLineNumber: t.endLineNumber + i,
                    endColumn:
                      t.startLineNumber === t.endLineNumber ? t.endColumn + o : t.endColumn,
                  };
                }
              }
              default: {
                var _i5 = n;
                return t;
              }
            }
          },
        },
        {
          key: 'equalsRange',
          value: function equalsRange(t, r) {
            return !t && !r
              ? !0
              : !!t &&
                  !!r &&
                  t.startLineNumber === r.startLineNumber &&
                  t.startColumn === r.startColumn &&
                  t.endLineNumber === r.endLineNumber &&
                  t.endColumn === r.endColumn;
          },
        },
        {
          key: 'getEndPosition',
          value: function getEndPosition(t) {
            return new kt(t.endLineNumber, t.endColumn);
          },
        },
        {
          key: 'getStartPosition',
          value: function getStartPosition(t) {
            return new kt(t.startLineNumber, t.startColumn);
          },
        },
        {
          key: 'collapseToStart',
          value: function collapseToStart(t) {
            return new R(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
          },
        },
        {
          key: 'collapseToEnd',
          value: function collapseToEnd(t) {
            return new R(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
          },
        },
        {
          key: 'fromPositions',
          value: function fromPositions(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
            return new R(t.lineNumber, t.column, r.lineNumber, r.column);
          },
        },
        {
          key: 'lift',
          value: function lift(t) {
            return t ? new R(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
          },
        },
        {
          key: 'isIRange',
          value: function isIRange(t) {
            return (
              t &&
              typeof t.startLineNumber == 'number' &&
              typeof t.startColumn == 'number' &&
              typeof t.endLineNumber == 'number' &&
              typeof t.endColumn == 'number'
            );
          },
        },
        {
          key: 'areIntersectingOrTouching',
          value: function areIntersectingOrTouching(t, r) {
            return !(
              t.endLineNumber < r.startLineNumber ||
              (t.endLineNumber === r.startLineNumber && t.endColumn < r.startColumn) ||
              r.endLineNumber < t.startLineNumber ||
              (r.endLineNumber === t.startLineNumber && r.endColumn < t.startColumn)
            );
          },
        },
        {
          key: 'areIntersecting',
          value: function areIntersecting(t, r) {
            return !(
              t.endLineNumber < r.startLineNumber ||
              (t.endLineNumber === r.startLineNumber && t.endColumn <= r.startColumn) ||
              r.endLineNumber < t.startLineNumber ||
              (r.endLineNumber === t.startLineNumber && r.endColumn <= t.startColumn)
            );
          },
        },
        {
          key: 'compareRangesUsingStarts',
          value: function compareRangesUsingStarts(t, r) {
            if (t && r) {
              var s = t.startLineNumber | 0,
                l = r.startLineNumber | 0;
              if (s === l) {
                var o = t.startColumn | 0,
                  u = r.startColumn | 0;
                if (o === u) {
                  var a = t.endLineNumber | 0,
                    c = r.endLineNumber | 0;
                  if (a === c) {
                    var f = t.endColumn | 0,
                      h = r.endColumn | 0;
                    return f - h;
                  }
                  return a - c;
                }
                return o - u;
              }
              return s - l;
            }
            return (t ? 1 : 0) - (r ? 1 : 0);
          },
        },
        {
          key: 'compareRangesUsingEnds',
          value: function compareRangesUsingEnds(t, r) {
            return t.endLineNumber === r.endLineNumber
              ? t.endColumn === r.endColumn
                ? t.startLineNumber === r.startLineNumber
                  ? t.startColumn - r.startColumn
                  : t.startLineNumber - r.startLineNumber
                : t.endColumn - r.endColumn
              : t.endLineNumber - r.endLineNumber;
          },
        },
        {
          key: 'spansMultipleLines',
          value: function spansMultipleLines(t) {
            return t.endLineNumber > t.startLineNumber;
          },
        },
      ],
    );
  })(),
  Jn = function Jn(e, t, r) {
    var n;
    if (e[0] === 255 && e[1] === 254) n = new TextDecoder('utf-16le').decode(e);
    else if (e[0] === 254 && e[1] === 255) n = new TextDecoder('utf-16be').decode(e);
    else if (
      ((n = new TextDecoder('utf8').decode(e)), n.slice(0, 1e3).includes('\uFFFD') && e.includes(0))
    )
      return [];
    var i = [],
      s = [];
    var l = null,
      o = r.remainingResultQuota;
    for (; o >= 0 && (l = t.exec(n)); )
      s.push({
        matchStartIndex: l.index,
        matchedText: l[0],
      }),
        o--;
    if (s.length) {
      var u = new Set(),
        a = new Set(),
        c = [],
        f = function f(b) {
          return n.slice(c[b].start, c[b].end);
        };
      var h = 0,
        m = null;
      var v = /\r?\n/g;
      for (; (m = v.exec(n)); )
        c.push({
          start: h,
          end: m.index,
        }),
          (h = m.index + m[0].length);
      h < n.length &&
        c.push({
          start: h,
          end: n.length,
        });
      var C = 0;
      var _iterator36 = _createForOfIteratorHelper(s),
        _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
          var _step36$value = _step36.value,
            b = _step36$value.matchStartIndex,
            P = _step36$value.matchedText;
          if (o < 0) break;
          for (; c[C + 1] && b > c[C].end; ) C++;
          var N = C;
          for (; c[N + 1] && b + P.length > c[N].end; ) N++;
          if (r.surroundingContext)
            for (var T = Math.max(0, C - r.surroundingContext); T < C; T++) u.add(T);
          var M = '',
            y = 0;
          for (var _T = C; _T <= N; _T++) {
            var _r$previewOptions;
            var B = f(_T);
            (_r$previewOptions = r.previewOptions) !== null &&
              _r$previewOptions !== void 0 &&
              _r$previewOptions.charsPerLine &&
              B.length > r.previewOptions.charsPerLine &&
              ((y = Math.max(b - c[C].start - 20, 0)),
              (B = B.substr(y, r.previewOptions.charsPerLine))),
              (M += ''.concat(B, '\n')),
              a.add(_T);
          }
          var A = new St(C, b - c[C].start, N, b + P.length - c[N].start),
            x = new St(0, b - c[C].start - y, N - C, b + P.length - c[N].start - (N === C ? y : 0)),
            j = {
              rangeLocations: [
                {
                  source: A,
                  preview: x,
                },
              ],
              previewText: M,
            };
          if ((i.push(j), r.surroundingContext))
            for (var _T2 = N + 1; _T2 <= Math.min(N + r.surroundingContext, c.length - 1); _T2++)
              u.add(_T2);
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
      var _iterator37 = _createForOfIteratorHelper(u),
        _step37;
      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done; ) {
          var _b = _step37.value;
          a.has(_b) ||
            i.push({
              text: f(_b),
              lineNumber: _b + 1,
            });
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }
    }
    return i;
  },
  Qn = /*#__PURE__*/ (function () {
    function Qn(e, t, r) {
      _classCallCheck(this, Qn);
      if (((this.b = t), (this.c = r), t[t.length - 1] === '\\'))
        throw Error('Unexpected path format, do not use trailing backslashes');
      t[t.length - 1] !== '/' && (t += '/'), (this.a = this.e(e, this.b, this.c));
    }
    return _createClass(Qn, [
      {
        key: 'updateContents',
        value: function updateContents(e) {
          this.a = this.e(e, this.b, this.c);
        },
      },
      {
        key: 'isPathIncludedInTraversal',
        value: function isPathIncludedInTraversal(e, t) {
          if (e[0] !== '/' || e[e.length - 1] === '/')
            throw Error(
              'Unexpected path format, expectred to begin with slash and end without. got:' + e,
            );
          return !this.a(e, t);
        },
      },
      {
        key: 'isArbitraryPathIgnored',
        value: function isArbitraryPathIgnored(e, t) {
          if (e[0] !== '/' || e[e.length - 1] === '/')
            throw Error(
              'Unexpected path format, expectred to begin with slash and end without. got:' + e,
            );
          var r = e.split('/').filter(function (s) {
            return s;
          });
          var n = !1,
            i = '';
          for (var s = 0; s < r.length; s++) {
            var l = s === r.length - 1,
              o = r[s];
            if (((i = i + '/' + o), !this.isPathIncludedInTraversal(i, l ? t : !0))) {
              n = !0;
              break;
            }
          }
          return n;
        },
      },
      {
        key: 'd',
        value: function d(e, t, r) {
          var _this18 = this;
          var n = e.map(function (s) {
              return _this18.f(s, t);
            }),
            i = Object.create(null);
          var _iterator38 = _createForOfIteratorHelper(n),
            _step38;
          try {
            for (_iterator38.s(); !(_step38 = _iterator38.n()).done; ) {
              var s = _step38.value;
              i[s] = !0;
            }
          } catch (err) {
            _iterator38.e(err);
          } finally {
            _iterator38.f();
          }
          return $e(i, {
            trimForExclusions: r,
          });
        },
      },
      {
        key: 'e',
        value: function e(_e9, t, r) {
          var n = _e9
              .split('\n')
              .map(function (v) {
                return v.trim();
              })
              .filter(function (v) {
                return v && v[0] !== '#';
              }),
            i = n.filter(function (v) {
              return !v.endsWith('/');
            }),
            s = i.filter(function (v) {
              return !v.includes('!');
            }),
            l = this.d(s, t, !0),
            o = i
              .filter(function (v) {
                return v.includes('!');
              })
              .map(function (v) {
                return v.replace(/!/g, '');
              }),
            u = this.d(o, t, !1),
            a = n.filter(function (v) {
              return !v.includes('!');
            }),
            c = this.d(a, t, !0),
            f = n
              .filter(function (v) {
                return v.includes('!');
              })
              .map(function (v) {
                return v.replace(/!/g, '');
              }),
            h = this.d(f, t, !1);
          return function (v, C) {
            return v.startsWith(t)
              ? (C && c(v) && !h(v)) || (l(v) && !u(v))
                ? !0
                : r
                  ? r.a(v, C)
                  : !1
              : !1;
          };
        },
      },
      {
        key: 'f',
        value: function f(e, t) {
          var r = e.indexOf('/');
          return (
            r === -1 || r === e.length - 1
              ? (e = '**/' + e)
              : (r === 0
                  ? t.slice(-1) === '/' && (e = e.slice(1))
                  : t.slice(-1) !== '/' && (e = '/' + e),
                (e = t + e)),
            e
          );
        },
      },
    ]);
  })(),
  J1 = (typeof Buffer === 'undefined' ? 'undefined' : _typeof(Buffer)) < 'u',
  Zn = new ve(function () {
    return new Uint8Array(256);
  }),
  Ee,
  Ne,
  Gn = /*#__PURE__*/ (function () {
    function Q(t) {
      _classCallCheck(this, Q);
      (this.buffer = t), (this.byteLength = this.buffer.byteLength);
    }
    return _createClass(
      Q,
      [
        {
          key: 'clone',
          value: function clone() {
            var t = Q.alloc(this.byteLength);
            return t.set(this), t;
          },
        },
        {
          key: 'toString',
          value: function toString() {
            return J1
              ? this.buffer.toString()
              : (Ne || (Ne = new TextDecoder()), Ne.decode(this.buffer));
          },
        },
        {
          key: 'slice',
          value: function slice(t, r) {
            return new Q(this.buffer.subarray(t, r));
          },
        },
        {
          key: 'set',
          value: function set(t, r) {
            if (t instanceof Q) this.buffer.set(t.buffer, r);
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
            return Xn(this.buffer, t);
          },
        },
        {
          key: 'writeUInt32BE',
          value: function writeUInt32BE(t, r) {
            e2(this.buffer, t, r);
          },
        },
        {
          key: 'readUInt32LE',
          value: function readUInt32LE(t) {
            return t2(this.buffer, t);
          },
        },
        {
          key: 'writeUInt32LE',
          value: function writeUInt32LE(t, r) {
            r2(this.buffer, t, r);
          },
        },
        {
          key: 'readUInt8',
          value: function readUInt8(t) {
            return n2(this.buffer, t);
          },
        },
        {
          key: 'writeUInt8',
          value: function writeUInt8(t, r) {
            i2(this.buffer, t, r);
          },
        },
        {
          key: 'indexOf',
          value: function indexOf(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return Yn(this.buffer, t instanceof Q ? t.buffer : t, r);
          },
        },
      ],
      [
        {
          key: 'alloc',
          value: function alloc(t) {
            return J1 ? new Q(Buffer.allocUnsafe(t)) : new Q(new Uint8Array(t));
          },
        },
        {
          key: 'wrap',
          value: function wrap(t) {
            return (
              J1 && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)),
              new Q(t)
            );
          },
        },
        {
          key: 'fromString',
          value: function fromString(t, r) {
            return !((r !== null && r !== void 0 && r.dontUseNodeBuffer) || !1) && J1
              ? new Q(Buffer.from(t))
              : (Ee || (Ee = new TextEncoder()), new Q(Ee.encode(t)));
          },
        },
        {
          key: 'fromByteArray',
          value: function fromByteArray(t) {
            var r = Q.alloc(t.length);
            for (var n = 0, i = t.length; n < i; n++) r.buffer[n] = t[n];
            return r;
          },
        },
        {
          key: 'concat',
          value: function concat(t, r) {
            if (_typeof(r) > 'u') {
              r = 0;
              for (var s = 0, l = t.length; s < l; s++) r += t[s].byteLength;
            }
            var n = Q.alloc(r);
            var i = 0;
            for (var _s2 = 0, _l2 = t.length; _s2 < _l2; _s2++) {
              var o = t[_s2];
              n.set(o, i), (i += o.byteLength);
            }
            return n;
          },
        },
      ],
    );
  })();
function Yn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = t.byteLength,
    i = e.byteLength;
  if (n === 0) return 0;
  if (n === 1) return e.indexOf(t[0]);
  if (n > i - r) return -1;
  var s = Zn.value;
  s.fill(t.length);
  for (var a = 0; a < t.length; a++) s[t[a]] = t.length - a - 1;
  var l = r + t.length - 1,
    o = l,
    u = -1;
  for (; l < i; )
    if (e[l] === t[o]) {
      if (o === 0) {
        u = l;
        break;
      }
      l--, o--;
    } else (l += Math.max(t.length - o, s[e[l]])), (o = t.length - 1);
  return u;
}
function Xn(e, t) {
  return e[t] * Math.pow(2, 24) + e[t + 1] * Math.pow(2, 16) + e[t + 2] * Math.pow(2, 8) + e[t + 3];
}
function e2(e, t, r) {
  (e[r + 3] = t),
    (t = t >>> 8),
    (e[r + 2] = t),
    (t = t >>> 8),
    (e[r + 1] = t),
    (t = t >>> 8),
    (e[r] = t);
}
function t2(e, t) {
  return (
    ((e[t + 0] << 0) >>> 0) |
    ((e[t + 1] << 8) >>> 0) |
    ((e[t + 2] << 16) >>> 0) |
    ((e[t + 3] << 24) >>> 0)
  );
}
function r2(e, t, r) {
  (e[r + 0] = t & 255),
    (t = t >>> 8),
    (e[r + 1] = t & 255),
    (t = t >>> 8),
    (e[r + 2] = t & 255),
    (t = t >>> 8),
    (e[r + 3] = t & 255);
}
function n2(e, t) {
  return e[t];
}
function i2(e, t, r) {
  e[r] = t;
}
function Q1(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!e || t > 200) return e;
  if (_typeof(e) == 'object') {
    switch (e.$mid) {
      case 1:
        return q.revive(e);
      case 2:
        return new RegExp(e.source, e.flags);
      case 17:
        return new Date(e.source);
    }
    if (e instanceof Gn || e instanceof Uint8Array) return e;
    if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) e[r] = Q1(e[r], t + 1);
    else for (var _r4 in e) Object.hasOwnProperty.call(e, _r4) && (e[_r4] = Q1(e[_r4], t + 1));
  }
  return e;
}
var Ot = !1,
  s2 = +new Date(),
  Rt = {},
  p1 = /*#__PURE__*/ (function () {
    var _ref18 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee16(e, t) {
        var _Rt$e;
        var r, n, i, s;
        return _regeneratorRuntime().wrap(function _callee16$(_context28) {
          while (1)
            switch ((_context28.prev = _context28.next)) {
              case 0:
                if (Ot) {
                  _context28.next = 2;
                  break;
                }
                return _context28.abrupt('return', t());
              case 2:
                (r = Date.now()),
                  (n = ((_Rt$e = Rt[e]) !== null && _Rt$e !== void 0 ? _Rt$e : 0) + 1);
                console.info(e, n, 'starting', Math.round((r - s2) * 10) / 1e4), (Rt[e] = n);
                _context28.next = 6;
                return t();
              case 6:
                i = _context28.sent;
                s = Date.now();
                return _context28.abrupt('return', (console.info(e, n, 'took', s - r), i));
              case 9:
              case 'end':
                return _context28.stop();
            }
        }, _callee16);
      }),
    );
    return function p1(_x11, _x12) {
      return _ref18.apply(this, arguments);
    };
  })();
function o2(e) {
  return new l2(e);
}
var l2 = /*#__PURE__*/ (function () {
  function l2(e) {
    _classCallCheck(this, l2);
    (this.cancellationTokens = new Map()), (this.d = Kn.getChannel(e));
  }
  return _createClass(l2, [
    {
      key: '$cancelQuery',
      value: function $cancelQuery(e) {
        var _this$cancellationTok;
        (_this$cancellationTok = this.cancellationTokens.get(e)) === null ||
          _this$cancellationTok === void 0 ||
          _this$cancellationTok.cancel();
      },
    },
    {
      key: 'g',
      value: function g(e) {
        var t = new Nr();
        return this.cancellationTokens.set(e, t), t;
      },
    },
    {
      key: '$listDirectory',
      value: (function () {
        var _$listDirectory = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee17(e, t, r, n, i) {
            var _this19 = this;
            var s, l, o, u, a, c, f, h;
            return _regeneratorRuntime().wrap(
              function _callee17$(_context29) {
                while (1)
                  switch ((_context29.prev = _context29.next)) {
                    case 0:
                      (s = xe(r)),
                        (l = new L1(function () {
                          return n;
                        })),
                        (o = this.g(i)),
                        (u = []);
                      (a = !1), (c = 0);
                      (f = t.maxResults || 512),
                        (h = t.filePattern
                          ? function (m) {
                              return t.filePattern.split('').every(function (v) {
                                return m.includes(v);
                              });
                            }
                          : function (m) {
                              return !0;
                            });
                      _context29.next = 5;
                      return p1('listDirectory', function () {
                        return _this19.h(
                          e,
                          Tt(t),
                          s,
                          l,
                          function (m) {
                            if (h(m.name))
                              return c++, f && c > f && ((a = !0), o.cancel()), u.push(m.path);
                          },
                          o.token,
                        );
                      });
                    case 5:
                      return _context29.abrupt('return', {
                        results: u,
                        limitHit: a,
                      });
                    case 6:
                    case 'end':
                      return _context29.stop();
                  }
              },
              _callee17,
              this,
            );
          }),
        );
        function $listDirectory(_x13, _x14, _x15, _x16, _x17) {
          return _$listDirectory.apply(this, arguments);
        }
        return $listDirectory;
      })(),
    },
    {
      key: '$searchDirectory',
      value: (function () {
        var _$searchDirectory = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee21(e, t, r, n, i) {
            var _this20 = this;
            var s, l;
            return _regeneratorRuntime().wrap(function _callee21$(_context33) {
              while (1)
                switch ((_context33.prev = _context33.next)) {
                  case 0:
                    (s = xe(r)),
                      (l = new L1(function () {
                        return n;
                      }));
                    return _context33.abrupt(
                      'return',
                      p1(
                        'searchInFiles',
                        /*#__PURE__*/ _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20() {
                            var o, u, a, c, f, h, m, v;
                            return _regeneratorRuntime().wrap(function _callee20$(_context32) {
                              while (1)
                                switch ((_context32.prev = _context32.next)) {
                                  case 0:
                                    (o = _this20.g(i)),
                                      (u = []),
                                      (a = a2(t.contentPattern)),
                                      (c = []);
                                    (f = 0), (h = 0);
                                    (m = !1),
                                      (v = /*#__PURE__*/ (function () {
                                        var _ref20 = _asyncToGenerator(
                                          /*#__PURE__*/ _regeneratorRuntime().mark(
                                            function _callee18(C) {
                                              var _t$surroundingContext;
                                              var b, P, N, M;
                                              return _regeneratorRuntime().wrap(function _callee18$(
                                                _context30,
                                              ) {
                                                while (1)
                                                  switch ((_context30.prev = _context30.next)) {
                                                    case 0:
                                                      if (!o.token.isCancellationRequested) {
                                                        _context30.next = 2;
                                                        break;
                                                      }
                                                      return _context30.abrupt('return');
                                                    case 2:
                                                      f++;
                                                      _context30.next = 5;
                                                      return C.resolve();
                                                    case 5:
                                                      b = _context30.sent;
                                                      if (!o.token.isCancellationRequested) {
                                                        _context30.next = 8;
                                                        break;
                                                      }
                                                      return _context30.abrupt('return');
                                                    case 8:
                                                      (P = new Uint8Array(b)),
                                                        (N = Jn(P, a, {
                                                          surroundingContext:
                                                            (_t$surroundingContext =
                                                              t.surroundingContext) !== null &&
                                                            _t$surroundingContext !== void 0
                                                              ? _t$surroundingContext
                                                              : 0,
                                                          previewOptions: t.previewOptions,
                                                          remainingResultQuota: t.maxResults
                                                            ? t.maxResults - h
                                                            : 1e4,
                                                        }));
                                                      if (N.length) {
                                                        (h += N.length),
                                                          t.maxResults &&
                                                            h > t.maxResults &&
                                                            o.cancel();
                                                        M = {
                                                          resource: q.joinPath(s.folder, C.path),
                                                          results: N,
                                                        };
                                                        _this20.d.$sendTextSearchMatch(M, i),
                                                          u.push(M);
                                                      }
                                                    case 10:
                                                    case 'end':
                                                      return _context30.stop();
                                                  }
                                              }, _callee18);
                                            },
                                          ),
                                        );
                                        return function v(_x23) {
                                          return _ref20.apply(this, arguments);
                                        };
                                      })());
                                    _context32.next = 5;
                                    return p1('walkFolderToResolve', function () {
                                      return _this20.h(
                                        e,
                                        Tt(t),
                                        s,
                                        l,
                                        /*#__PURE__*/ (function () {
                                          var _ref21 = _asyncToGenerator(
                                            /*#__PURE__*/ _regeneratorRuntime().mark(
                                              function _callee19(C) {
                                                return _regeneratorRuntime().wrap(
                                                  function _callee19$(_context31) {
                                                    while (1)
                                                      switch ((_context31.prev = _context31.next)) {
                                                        case 0:
                                                          return _context31.abrupt(
                                                            'return',
                                                            c.push(v(C)),
                                                          );
                                                        case 1:
                                                        case 'end':
                                                          return _context31.stop();
                                                      }
                                                  },
                                                  _callee19,
                                                );
                                              },
                                            ),
                                          );
                                          return function (_x24) {
                                            return _ref21.apply(this, arguments);
                                          };
                                        })(),
                                        o.token,
                                      );
                                    });
                                  case 5:
                                    _context32.next = 7;
                                    return p1('resolveOngoingProcesses', function () {
                                      return Promise.all(c);
                                    });
                                  case 7:
                                    Ot && console.log('Searched in', f, 'files');
                                    return _context32.abrupt('return', {
                                      results: u,
                                      limitHit: m,
                                    });
                                  case 9:
                                  case 'end':
                                    return _context32.stop();
                                }
                            }, _callee20);
                          }),
                        ),
                      ),
                    );
                  case 2:
                  case 'end':
                    return _context33.stop();
                }
            }, _callee21);
          }),
        );
        function $searchDirectory(_x18, _x19, _x20, _x21, _x22) {
          return _$searchDirectory.apply(this, arguments);
        }
        return $searchDirectory;
      })(),
    },
    {
      key: 'h',
      value: (function () {
        var _h2 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee27(e, t, r, n, i, s) {
            var _r$excludePattern;
            var l, o, u, a, c, f, h, _m6, _v2, C;
            return _regeneratorRuntime().wrap(function _callee27$(_context39) {
              while (1)
                switch ((_context39.prev = _context39.next)) {
                  case 0:
                    l =
                      (_r$excludePattern = r.excludePattern) === null ||
                      _r$excludePattern === void 0
                        ? void 0
                        : _r$excludePattern.map(function (b) {
                            var _b$pattern;
                            return $e(
                              (_b$pattern = b.pattern) !== null && _b$pattern !== void 0
                                ? _b$pattern
                                : {},
                              {
                                trimForExclusions: !0,
                              },
                            );
                          });
                    o = function o(b, P, N) {
                      return l === null || l === void 0
                        ? void 0
                        : l.some(function (M) {
                            return M(b, P, N);
                          });
                    };
                    u = function u(b, P, N) {
                      return (b = b.slice(1)), !!(o(b, P, N) || u2(t, b));
                    };
                    a = function a(b, P, N) {
                      return (b = b.slice(1)), !(o(b, P, N) || !c2(t, b, n));
                    };
                    c = function c(b, P) {
                      return {
                        type: 'file',
                        name: b.name,
                        path: P,
                        resolve: function resolve() {
                          return b.getFile().then(function (M) {
                            return M.arrayBuffer();
                          });
                        },
                      };
                    };
                    f = function f(b) {
                      return b.kind === 'directory';
                    };
                    h = function h(b) {
                      return b.kind === 'file';
                    };
                    _m6 = /*#__PURE__*/ (function () {
                      var _ref22 = _asyncToGenerator(
                        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee24(b, P, N) {
                          var y, M;
                          return _regeneratorRuntime().wrap(function _callee24$(_context36) {
                            while (1)
                              switch ((_context36.prev = _context36.next)) {
                                case 0:
                                  if (r.disregardIgnoreFiles) {
                                    _context36.next = 6;
                                    break;
                                  }
                                  _context36.next = 3;
                                  return Promise.all([
                                    b.getFileHandle('.gitignore')['catch'](function (A) {}),
                                    b.getFileHandle('.ignore')['catch'](function (A) {}),
                                  ]);
                                case 3:
                                  y = _context36.sent;
                                  _context36.next = 6;
                                  return Promise.all(
                                    y.map(
                                      /*#__PURE__*/ (function () {
                                        var _ref23 = _asyncToGenerator(
                                          /*#__PURE__*/ _regeneratorRuntime().mark(
                                            function _callee22(A) {
                                              var x;
                                              return _regeneratorRuntime().wrap(function _callee22$(
                                                _context34,
                                              ) {
                                                while (1)
                                                  switch ((_context34.prev = _context34.next)) {
                                                    case 0:
                                                      if (A) {
                                                        _context34.next = 2;
                                                        break;
                                                      }
                                                      return _context34.abrupt('return');
                                                    case 2:
                                                      _context34.t0 = new TextDecoder('utf8');
                                                      _context34.t1 = Uint8Array;
                                                      _context34.next = 6;
                                                      return A.getFile();
                                                    case 6:
                                                      _context34.next = 8;
                                                      return _context34.sent.arrayBuffer();
                                                    case 8:
                                                      _context34.t2 = _context34.sent;
                                                      _context34.t3 = new _context34.t1(
                                                        _context34.t2,
                                                      );
                                                      x = _context34.t0.decode.call(
                                                        _context34.t0,
                                                        _context34.t3,
                                                      );
                                                      N = new Qn(x, P, N);
                                                    case 12:
                                                    case 'end':
                                                      return _context34.stop();
                                                  }
                                              }, _callee22);
                                            },
                                          ),
                                        );
                                        return function (_x34) {
                                          return _ref23.apply(this, arguments);
                                        };
                                      })(),
                                    ),
                                  );
                                case 6:
                                  M = Ce.withAsyncBody(
                                    /*#__PURE__*/ (function () {
                                      var _ref24 = _asyncToGenerator(
                                        /*#__PURE__*/ _regeneratorRuntime().mark(
                                          function _callee23(y) {
                                            var A,
                                              x,
                                              j,
                                              T,
                                              _iteratorAbruptCompletion6,
                                              _didIteratorError6,
                                              _iteratorError6,
                                              _iterator6,
                                              _step6,
                                              B,
                                              _i6,
                                              _j,
                                              _j$_i,
                                              _B,
                                              u1,
                                              c1,
                                              x1;
                                            return _regeneratorRuntime().wrap(
                                              function _callee23$(_context35) {
                                                while (1)
                                                  switch ((_context35.prev = _context35.next)) {
                                                    case 0:
                                                      (A = []), (x = []), (j = []), (T = new Set());
                                                      _iteratorAbruptCompletion6 = false;
                                                      _didIteratorError6 = false;
                                                      _context35.prev = 3;
                                                      _iterator6 = _asyncIterator(b.entries());
                                                    case 5:
                                                      _context35.next = 7;
                                                      return _iterator6.next();
                                                    case 7:
                                                      if (
                                                        !(_iteratorAbruptCompletion6 = !(_step6 =
                                                          _context35.sent).done)
                                                      ) {
                                                        _context35.next = 13;
                                                        break;
                                                      }
                                                      B = _step6.value;
                                                      j.push(B), T.add(B[0]);
                                                    case 10:
                                                      _iteratorAbruptCompletion6 = false;
                                                      _context35.next = 5;
                                                      break;
                                                    case 13:
                                                      _context35.next = 19;
                                                      break;
                                                    case 15:
                                                      _context35.prev = 15;
                                                      _context35.t0 = _context35['catch'](3);
                                                      _didIteratorError6 = true;
                                                      _iteratorError6 = _context35.t0;
                                                    case 19:
                                                      _context35.prev = 19;
                                                      _context35.prev = 20;
                                                      if (
                                                        !(
                                                          _iteratorAbruptCompletion6 &&
                                                          _iterator6['return'] != null
                                                        )
                                                      ) {
                                                        _context35.next = 24;
                                                        break;
                                                      }
                                                      _context35.next = 24;
                                                      return _iterator6['return']();
                                                    case 24:
                                                      _context35.prev = 24;
                                                      if (!_didIteratorError6) {
                                                        _context35.next = 27;
                                                        break;
                                                      }
                                                      throw _iteratorError6;
                                                    case 27:
                                                      return _context35.finish(24);
                                                    case 28:
                                                      return _context35.finish(19);
                                                    case 29:
                                                      (_i6 = 0), (_j = j);
                                                    case 30:
                                                      if (!(_i6 < _j.length)) {
                                                        _context35.next = 42;
                                                        break;
                                                      }
                                                      (_j$_i = _slicedToArray(_j[_i6], 2)),
                                                        (_B = _j$_i[0]),
                                                        (u1 = _j$_i[1]);
                                                      if (!s.isCancellationRequested) {
                                                        _context35.next = 34;
                                                        break;
                                                      }
                                                      return _context35.abrupt('break', 42);
                                                    case 34:
                                                      c1 = P + _B;
                                                      if (
                                                        !(
                                                          N &&
                                                          !N.isPathIncludedInTraversal(
                                                            c1,
                                                            u1.kind === 'directory',
                                                          )
                                                        )
                                                      ) {
                                                        _context35.next = 37;
                                                        break;
                                                      }
                                                      return _context35.abrupt('continue', 39);
                                                    case 37:
                                                      x1 = function x1(ee) {
                                                        return T.has(ee);
                                                      };
                                                      f(u1) && !u(c1, _B, x1)
                                                        ? x.push(_m6(u1, c1 + '/', N))
                                                        : h(u1) &&
                                                          a(c1, _B, x1) &&
                                                          A.push(c(u1, c1));
                                                    case 39:
                                                      _i6++;
                                                      _context35.next = 30;
                                                      break;
                                                    case 42:
                                                      _context35.t1 = y;
                                                      _context35.t2 = [];
                                                      _context35.t3 = _toConsumableArray;
                                                      _context35.next = 47;
                                                      return Promise.all(x);
                                                    case 47:
                                                      _context35.t4 = _context35.sent;
                                                      _context35.t5 = (0, _context35.t3)(
                                                        _context35.t4,
                                                      );
                                                      _context35.t6 = A;
                                                      _context35.t7 = _context35.t2.concat.call(
                                                        _context35.t2,
                                                        _context35.t5,
                                                        _context35.t6,
                                                      );
                                                      (0, _context35.t1)(_context35.t7);
                                                    case 52:
                                                    case 'end':
                                                      return _context35.stop();
                                                  }
                                              },
                                              _callee23,
                                              null,
                                              [
                                                [3, 15, 19, 29],
                                                [20, , 24, 28],
                                              ],
                                            );
                                          },
                                        ),
                                      );
                                      return function (_x35) {
                                        return _ref24.apply(this, arguments);
                                      };
                                    })(),
                                  );
                                  return _context36.abrupt('return', {
                                    type: 'dir',
                                    name: b.name,
                                    entries: M,
                                  });
                                case 8:
                                case 'end':
                                  return _context36.stop();
                              }
                          }, _callee24);
                        }),
                      );
                      return function m(_x31, _x32, _x33) {
                        return _ref22.apply(this, arguments);
                      };
                    })();
                    _v2 = /*#__PURE__*/ (function () {
                      var _ref25 = _asyncToGenerator(
                        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee26(b, P) {
                          return _regeneratorRuntime().wrap(function _callee26$(_context38) {
                            while (1)
                              switch ((_context38.prev = _context38.next)) {
                                case 0:
                                  _context38.t0 = s.isCancellationRequested;
                                  if (_context38.t0) {
                                    _context38.next = 8;
                                    break;
                                  }
                                  _context38.t1 = Promise;
                                  _context38.next = 5;
                                  return b.entries;
                                case 5:
                                  _context38.t2 = _context38.sent
                                    .sort(function (N, M) {
                                      return (
                                        -(N.type === 'dir' ? 0 : 1) + (M.type === 'dir' ? 0 : 1)
                                      );
                                    })
                                    .map(
                                      /*#__PURE__*/ (function () {
                                        var _ref26 = _asyncToGenerator(
                                          /*#__PURE__*/ _regeneratorRuntime().mark(
                                            function _callee25(N) {
                                              return _regeneratorRuntime().wrap(function _callee25$(
                                                _context37,
                                              ) {
                                                while (1)
                                                  switch ((_context37.prev = _context37.next)) {
                                                    case 0:
                                                      return _context37.abrupt(
                                                        'return',
                                                        N.type === 'dir' ? _v2(N, P) : P(N),
                                                      );
                                                    case 1:
                                                    case 'end':
                                                      return _context37.stop();
                                                  }
                                              }, _callee25);
                                            },
                                          ),
                                        );
                                        return function (_x38) {
                                          return _ref26.apply(this, arguments);
                                        };
                                      })(),
                                    );
                                  _context38.next = 8;
                                  return _context38.t1.all.call(_context38.t1, _context38.t2);
                                case 8:
                                case 'end':
                                  return _context38.stop();
                              }
                          }, _callee26);
                        }),
                      );
                      return function v(_x36, _x37) {
                        return _ref25.apply(this, arguments);
                      };
                    })();
                    _context39.next = 11;
                    return p1('process', function () {
                      return _m6(e, '/');
                    });
                  case 11:
                    C = _context39.sent;
                    _context39.next = 14;
                    return p1('resolve', function () {
                      return _v2(C, i);
                    });
                  case 14:
                  case 'end':
                    return _context39.stop();
                }
            }, _callee27);
          }),
        );
        function h(_x25, _x26, _x27, _x28, _x29, _x30) {
          return _h2.apply(this, arguments);
        }
        return h;
      })(),
    },
  ]);
})();
function a2(e) {
  return an(e.pattern, !!e.isRegExp, {
    wholeWord: e.isWordMatch,
    global: !0,
    matchCase: e.isCaseSensitive,
    multiline: !0,
    unicode: !0,
  });
}
function xe(e) {
  var _e$excludePattern;
  return Q1(
    _objectSpread(
      _objectSpread({}, Q1(e)),
      {},
      {
        excludePattern:
          (_e$excludePattern = e.excludePattern) === null || _e$excludePattern === void 0
            ? void 0
            : _e$excludePattern.map(function (t) {
                return {
                  folder: q.revive(t.folder),
                  pattern: t.pattern,
                };
              }),
        folder: q.revive(e.folder),
      },
    ),
  );
}
function Tt(e) {
  var _e$extraFileResources;
  return _objectSpread(
    _objectSpread({}, e),
    {},
    {
      extraFileResources:
        (_e$extraFileResources = e.extraFileResources) === null || _e$extraFileResources === void 0
          ? void 0
          : _e$extraFileResources.map(function (t) {
              return q.revive(t);
            }),
      folderQueries: e.folderQueries.map(function (t) {
        return xe(t);
      }),
    },
  );
}
function u2(e, t) {
  return !!(e.excludePattern && K1(e.excludePattern, t));
}
function c2(e, t, r) {
  return e.excludePattern && K1(e.excludePattern, t)
    ? !1
    : e.includePattern || e.usingSearchPaths
      ? e.includePattern && K1(e.includePattern, t)
        ? !0
        : e.usingSearchPaths
          ? !!e.folderQueries &&
            e.folderQueries.some(function (n) {
              var i = n.folder,
                s = q.file(t);
              if (r.isEqualOrParent(s, i)) {
                var _l3 = rt(i.path, s.path);
                return !n.includePattern || !!K1(n.includePattern, _l3);
              } else return !1;
            })
          : !1
      : !0;
}
var Pe = 'default',
  f2 = '$initialize',
  It;
(function (e) {
  (e[(e.Request = 0)] = 'Request'),
    (e[(e.Reply = 1)] = 'Reply'),
    (e[(e.SubscribeEvent = 2)] = 'SubscribeEvent'),
    (e[(e.Event = 3)] = 'Event'),
    (e[(e.UnsubscribeEvent = 4)] = 'UnsubscribeEvent');
})(It || (It = {}));
var h2 = /*#__PURE__*/ _createClass(function h2(e, t, r, n, i) {
    _classCallCheck(this, h2);
    (this.vsWorker = e),
      (this.req = t),
      (this.channel = r),
      (this.method = n),
      (this.args = i),
      (this.type = 0);
  }),
  Dt = /*#__PURE__*/ _createClass(function Dt(e, t, r, n) {
    _classCallCheck(this, Dt);
    (this.vsWorker = e), (this.seq = t), (this.res = r), (this.err = n), (this.type = 1);
  }),
  d2 = /*#__PURE__*/ _createClass(function d2(e, t, r, n, i) {
    _classCallCheck(this, d2);
    (this.vsWorker = e),
      (this.req = t),
      (this.channel = r),
      (this.eventName = n),
      (this.arg = i),
      (this.type = 2);
  }),
  m2 = /*#__PURE__*/ _createClass(function m2(e, t, r) {
    _classCallCheck(this, m2);
    (this.vsWorker = e), (this.req = t), (this.event = r), (this.type = 3);
  }),
  v2 = /*#__PURE__*/ _createClass(function v2(e, t) {
    _classCallCheck(this, v2);
    (this.vsWorker = e), (this.req = t), (this.type = 4);
  }),
  g2 = /*#__PURE__*/ (function () {
    function g2(e) {
      _classCallCheck(this, g2);
      (this.a = -1),
        (this.g = e),
        (this.b = 0),
        (this.c = Object.create(null)),
        (this.d = new Map()),
        (this.f = new Map());
    }
    return _createClass(g2, [
      {
        key: 'setWorkerId',
        value: function setWorkerId(e) {
          this.a = e;
        },
      },
      {
        key: 'sendMessage',
        value: function sendMessage(e, t, r) {
          var _this21 = this;
          var n = String(++this.b);
          return new Promise(function (i, s) {
            (_this21.c[n] = {
              resolve: i,
              reject: s,
            }),
              _this21.o(new h2(_this21.a, n, e, t, r));
          });
        },
      },
      {
        key: 'listen',
        value: function listen(e, t, r) {
          var _this22 = this;
          var n = null;
          var i = new G({
            onWillAddFirstListener: function onWillAddFirstListener() {
              (n = String(++_this22.b)),
                _this22.d.set(n, i),
                _this22.o(new d2(_this22.a, n, e, t, r));
            },
            onDidRemoveLastListener: function onDidRemoveLastListener() {
              _this22.d['delete'](n), _this22.o(new v2(_this22.a, n)), (n = null);
            },
          });
          return i.event;
        },
      },
      {
        key: 'handleMessage',
        value: function handleMessage(e) {
          !e || !e.vsWorker || (this.a !== -1 && e.vsWorker !== this.a) || this.h(e);
        },
      },
      {
        key: 'createProxyToRemoteChannel',
        value: function createProxyToRemoteChannel(e, t) {
          var _this23 = this;
          var r = {
            get: function get(n, i) {
              return (
                typeof i == 'string' &&
                  !n[i] &&
                  (jt(i)
                    ? (n[i] = function (s) {
                        return _this23.listen(e, i, s);
                      })
                    : Mt(i)
                      ? (n[i] = _this23.listen(e, i, void 0))
                      : i.charCodeAt(0) === 36 &&
                        (n[i] = /*#__PURE__*/ _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee28() {
                            var _len7,
                              s,
                              _key7,
                              _args40 = arguments;
                            return _regeneratorRuntime().wrap(function _callee28$(_context40) {
                              while (1)
                                switch ((_context40.prev = _context40.next)) {
                                  case 0:
                                    for (
                                      _len7 = _args40.length, s = new Array(_len7), _key7 = 0;
                                      _key7 < _len7;
                                      _key7++
                                    ) {
                                      s[_key7] = _args40[_key7];
                                    }
                                    _context40.next = 3;
                                    return t === null || t === void 0 ? void 0 : t();
                                  case 3:
                                    return _context40.abrupt(
                                      'return',
                                      _this23.sendMessage(e, i, s),
                                    );
                                  case 4:
                                  case 'end':
                                    return _context40.stop();
                                }
                            }, _callee28);
                          }),
                        ))),
                n[i]
              );
            },
          };
          return new Proxy(Object.create(null), r);
        },
      },
      {
        key: 'h',
        value: function h(e) {
          switch (e.type) {
            case 1:
              return this.j(e);
            case 0:
              return this.k(e);
            case 2:
              return this.l(e);
            case 3:
              return this.m(e);
            case 4:
              return this.n(e);
          }
        },
      },
      {
        key: 'j',
        value: function j(e) {
          if (!this.c[e.seq]) {
            console.warn('Got reply to unknown seq');
            return;
          }
          var t = this.c[e.seq];
          if ((delete this.c[e.seq], e.err)) {
            var r = e.err;
            e.err.$isError &&
              ((r = new Error()),
              (r.name = e.err.name),
              (r.message = e.err.message),
              (r.stack = e.err.stack)),
              t.reject(r);
            return;
          }
          t.resolve(e.res);
        },
      },
      {
        key: 'k',
        value: function k(e) {
          var _this24 = this;
          var t = e.req;
          this.g.handleMessage(e.channel, e.method, e.args).then(
            function (n) {
              _this24.o(new Dt(_this24.a, t, n, void 0));
            },
            function (n) {
              n.detail instanceof Error && (n.detail = Te(n.detail)),
                _this24.o(new Dt(_this24.a, t, void 0, Te(n)));
            },
          );
        },
      },
      {
        key: 'l',
        value: function l(e) {
          var _this25 = this;
          var t = e.req,
            r = this.g.handleEvent(
              e.channel,
              e.eventName,
              e.arg,
            )(function (n) {
              _this25.o(new m2(_this25.a, t, n));
            });
          this.f.set(t, r);
        },
      },
      {
        key: 'm',
        value: function m(e) {
          if (!this.d.has(e.req)) {
            console.warn('Got event for unknown req');
            return;
          }
          this.d.get(e.req).fire(e.event);
        },
      },
      {
        key: 'n',
        value: function n(e) {
          if (!this.f.has(e.req)) {
            console.warn('Got unsubscribe for unknown req');
            return;
          }
          this.f.get(e.req).dispose(), this.f['delete'](e.req);
        },
      },
      {
        key: 'o',
        value: function o(e) {
          var t = [];
          if (e.type === 0)
            for (var r = 0; r < e.args.length; r++)
              e.args[r] instanceof ArrayBuffer && t.push(e.args[r]);
          else e.type === 1 && e.res instanceof ArrayBuffer && t.push(e.res);
          this.g.sendMessage(e, t);
        },
      },
    ]);
  })();
function Mt(e) {
  return e[0] === 'o' && e[1] === 'n' && st(e.charCodeAt(2));
}
function jt(e) {
  return /^onDynamic/.test(e) && st(e.charCodeAt(9));
}
var b2 = /*#__PURE__*/ (function () {
    function b2(e, t) {
      var _this26 = this;
      _classCallCheck(this, b2);
      (this.d = new Map()),
        (this.f = new Map()),
        (this.a = t),
        (this.b = null),
        (this.c = new g2({
          sendMessage: function sendMessage(r, n) {
            e(r, n);
          },
          handleMessage: function handleMessage(r, n, i) {
            return _this26.g(r, n, i);
          },
          handleEvent: function handleEvent(r, n, i) {
            return _this26.h(r, n, i);
          },
        }));
    }
    return _createClass(b2, [
      {
        key: 'onmessage',
        value: function onmessage(e) {
          this.c.handleMessage(e);
        },
      },
      {
        key: 'g',
        value: function g(e, t, r) {
          if (e === Pe && t === f2) return this.j(r[0], r[1], r[2]);
          var n = e === Pe ? this.b : this.d.get(e);
          if (!n)
            return Promise.reject(new Error('Missing channel '.concat(e, ' on worker thread')));
          if (typeof n[t] != 'function')
            return Promise.reject(
              new Error('Missing method '.concat(t, ' on worker thread channel ').concat(e)),
            );
          try {
            return Promise.resolve(n[t].apply(n, r));
          } catch (i) {
            return Promise.reject(i);
          }
        },
      },
      {
        key: 'h',
        value: function h(e, t, r) {
          var n = e === Pe ? this.b : this.d.get(e);
          if (!n) throw new Error('Missing channel '.concat(e, ' on worker thread'));
          if (jt(t)) {
            var i = n[t].call(n, r);
            if (typeof i != 'function')
              throw new Error('Missing dynamic event '.concat(t, ' on request handler.'));
            return i;
          }
          if (Mt(t)) {
            var _i7 = n[t];
            if (typeof _i7 != 'function')
              throw new Error('Missing event '.concat(t, ' on request handler.'));
            return _i7;
          }
          throw new Error('Malformed event name '.concat(t));
        },
      },
      {
        key: 'setChannel',
        value: function setChannel(e, t) {
          this.d.set(e, t);
        },
      },
      {
        key: 'getChannel',
        value: function getChannel(e) {
          if (!this.f.has(e)) {
            var _t5 = this.c.createProxyToRemoteChannel(e);
            this.f.set(e, _t5);
          }
          return this.f.get(e);
        },
      },
      {
        key: 'j',
        value: (function () {
          var _j2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee29(e, t, r) {
              var _this27 = this;
              return _regeneratorRuntime().wrap(
                function _callee29$(_context41) {
                  while (1)
                    switch ((_context41.prev = _context41.next)) {
                      case 0:
                        if (!(this.c.setWorkerId(e), this.a)) {
                          _context41.next = 3;
                          break;
                        }
                        this.b = this.a(this);
                        return _context41.abrupt('return');
                      case 3:
                        return _context41.abrupt(
                          'return',
                          (t &&
                            (_typeof(t.baseUrl) < 'u' && delete t.baseUrl,
                            _typeof(t.paths) < 'u' &&
                              _typeof(t.paths.vs) < 'u' &&
                              delete t.paths.vs,
                            _typeof(t.trustedTypesPolicy) < 'u' && delete t.trustedTypesPolicy,
                            (t.catchError = !0),
                            globalThis.require.config(t)),
                          (function (specifier) {
                            return new Promise(function (r) {
                              return r(specifier);
                            }).then(function (s) {
                              return _interopRequireWildcard(require(s));
                            });
                          })(''.concat(kn.asBrowserUri(''.concat(r, '.js')).toString(!0))).then(
                            function (i) {
                              if (((_this27.b = i.create(_this27)), !_this27.b))
                                throw new Error('No RequestHandler!');
                            },
                          )),
                        );
                      case 4:
                      case 'end':
                        return _context41.stop();
                    }
                },
                _callee29,
                this,
              );
            }),
          );
          function j(_x39, _x40, _x41) {
            return _j2.apply(this, arguments);
          }
          return j;
        })(),
      },
    ]);
  })(),
  _e = !1;
function p2(e) {
  if (_e) return;
  _e = !0;
  var t = new b2(
    function (r) {
      return globalThis.postMessage(r);
    },
    function (r) {
      return e(r);
    },
  );
  globalThis.onmessage = function (r) {
    t.onmessage(r.data);
  };
}
function w2(e) {
  globalThis.onmessage = function (t) {
    _e || p2(e);
  };
}
w2(o2);

//# debugId=5f009cf4-e4e6-5aaa-bfda-8ff6a2385421

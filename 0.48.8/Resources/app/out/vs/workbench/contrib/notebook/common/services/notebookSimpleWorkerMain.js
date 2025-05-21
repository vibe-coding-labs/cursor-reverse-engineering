'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
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
var _Yr,
  _Me,
  _ie,
  _Zr,
  _Xr,
  _Class2,
  _Pe,
  _j,
  _Qr,
  _se,
  _oe,
  _le,
  _ei,
  _process,
  _st,
  _st2,
  _dt,
  _process2,
  _De,
  _ot,
  _z,
  _ue,
  _Class3,
  _ri,
  _ii,
  _Fe,
  _qe;
function _interopRequireWildcard(e, t) {
  if ('function' == typeof WeakMap)
    var r = new WeakMap(),
      n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = { __proto__: null, default: e };
    if (null === e || ('object' != _typeof(e) && 'function' != typeof e)) return f;
    if ((o = t ? n : r)) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t21 in e)
      'default' !== _t21 &&
        {}.hasOwnProperty.call(e, _t21) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t21)) &&
        (i.get || i.set)
          ? o(f, _t21, i)
          : (f[_t21] = e[_t21]));
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
      ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
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
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
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
              return { value: t, done: !0 };
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
                return { value: h.arg, done: n.done };
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
      return { type: 'normal', arg: t.call(r, e) };
    } catch (t) {
      return { type: 'throw', arg: t };
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
      return { __await: t };
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
          (this.delegate = { i: x(r), r: e, n: n }), 'next' === this.method && (this.arg = t), f
        );
      },
    }),
    r
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
      var _n16 = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n16 >= r.length ? { done: !0 } : { done: !1, value: r[_n16++] };
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
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
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
          constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 },
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
    Object.defineProperty(e, 'prototype', { writable: !1 }),
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
      return { value: r, done: n };
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
          ? Promise.resolve({ value: r, done: !0 })
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
 *--------------------------------------------------------*/ !(function () {
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
      (e._sentryDebugIds[n] = '20aaf69e-4e75-5c2f-b3d3-9800181b50a2'));
  } catch (e) {}
})();
var _Ue = function Ue(e, t) {
  return (
    (_Ue =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }),
    _Ue(e, t)
  );
};
function __extends(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  _Ue(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var _assign = (exports.__assign = function __assign() {
  return (
    (exports.__assign = _assign =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    _assign.apply(this, arguments)
  );
});
function __rest(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function __decorate(e, t, n, r) {
  var i = arguments.length,
    s = i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    o;
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.decorate == 'function'
  )
    s = Reflect.decorate(e, t, n, r);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (o = e[l]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
  return i > 3 && s && Object.defineProperty(t, n, s), s;
}
function __param(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function __esDecorate(e, t, n, r, i, s) {
  function o(N) {
    if (N !== void 0 && typeof N != 'function') throw new TypeError('Function expected');
    return N;
  }
  for (
    var l = r.kind,
      a = l === 'getter' ? 'get' : l === 'setter' ? 'set' : 'value',
      u = !t && e ? (r['static'] ? e : e.prototype) : null,
      c = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
      h,
      f = !1,
      d = n.length - 1;
    d >= 0;
    d--
  ) {
    var b = {};
    for (var g in r) b[g] = g === 'access' ? {} : r[g];
    for (var g in r.access) b.access[g] = r.access[g];
    b.addInitializer = function (N) {
      if (f) throw new TypeError('Cannot add initializers after decoration has completed');
      s.push(o(N || null));
    };
    var m = (0, n[d])(l === 'accessor' ? { get: c.get, set: c.set } : c[a], b);
    if (l === 'accessor') {
      if (m === void 0) continue;
      if (m === null || _typeof(m) != 'object') throw new TypeError('Object expected');
      (h = o(m.get)) && (c.get = h), (h = o(m.set)) && (c.set = h), (h = o(m.init)) && i.unshift(h);
    } else (h = o(m)) && (l === 'field' ? i.unshift(h) : (c[a] = h));
  }
  u && Object.defineProperty(u, r.name, c), (f = !0);
}
function __runInitializers(e, t, n) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    n = r ? t[i].call(e, n) : t[i].call(e);
  return r ? n : void 0;
}
function __propKey(e) {
  return _typeof(e) == 'symbol' ? e : ''.concat(e);
}
function __setFunctionName(e, t, n) {
  return (
    _typeof(t) == 'symbol' && (t = t.description ? '['.concat(t.description, ']') : ''),
    Object.defineProperty(e, 'name', { configurable: !0, value: n ? ''.concat(n, ' ', t) : t })
  );
}
function __metadata(e, t) {
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.metadata == 'function'
  )
    return Reflect.metadata(e, t);
}
function __awaiter(e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (o) {
          o(s);
        });
  }
  return new (n || (n = Promise))(function (s, o) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (h) {
        o(h);
      }
    }
    function a(c) {
      try {
        u(r['throw'](c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function __generator(e, t) {
  var n = {
      label: 0,
      sent: function sent() {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    s,
    o;
  return (
    (o = { next: l(0), throw: l(1), return: l(2) }),
    typeof Symbol == 'function' &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function l(u) {
    return function (c) {
      return a([u, c]);
    };
  }
  function a(u) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; o && ((o = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          i &&
            (s =
              u[0] & 2
                ? i['return']
                : u[0]
                  ? i['throw'] || ((s = i['return']) && s.call(i), 0)
                  : i.next) &&
            !(s = s.call(i, u[1])).done)
        )
          return s;
        switch (((i = 0), s && (u = [u[0] & 2, s.value]), u[0])) {
          case 0:
          case 1:
            s = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (i = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((s = n.trys), !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!s || (u[1] > s[0] && u[1] < s[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < s[1]) {
              (n.label = s[1]), (s = u);
              break;
            }
            if (s && n.label < s[2]) {
              (n.label = s[2]), n.ops.push(u);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (c) {
        (u = [6, c]), (i = 0);
      } finally {
        r = s = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var __createBinding = (exports.__createBinding = Object.create
  ? function (e, t, n, r) {
      r === void 0 && (r = n);
      var i = Object.getOwnPropertyDescriptor(t, n);
      (!i || ('get' in i ? !t.__esModule : i.writable || i.configurable)) &&
        (i = {
          enumerable: !0,
          get: function get() {
            return t[n];
          },
        }),
        Object.defineProperty(e, r, i);
    }
  : function (e, t, n, r) {
      r === void 0 && (r = n), (e[r] = t[n]);
    });
function __exportStar(e, t) {
  for (var n in e)
    n !== 'default' && !Object.prototype.hasOwnProperty.call(t, n) && __createBinding(t, e, n);
}
function __values(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function next() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      },
    };
  throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function __read(e, t) {
  var n = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    i,
    s = [],
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) s.push(i.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      i && !i.done && (n = r['return']) && n.call(r);
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
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var s = arguments[t], o = 0, l = s.length; o < l; o++, i++) r[i] = s[o];
  return r;
}
function __spreadArray(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
function __await(e) {
  return this instanceof __await ? ((this.v = e), this) : new __await(e);
}
function __asyncGenerator(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var r = n.apply(e, t || []),
    i,
    s = [];
  return (
    (i = {}),
    l('next'),
    l('throw'),
    l('return', o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(d) {
    return function (b) {
      return Promise.resolve(b).then(d, h);
    };
  }
  function l(d, b) {
    r[d] &&
      ((i[d] = function (g) {
        return new Promise(function (m, N) {
          s.push([d, g, m, N]) > 1 || a(d, g);
        });
      }),
      b && (i[d] = b(i[d])));
  }
  function a(d, b) {
    try {
      u(r[d](b));
    } catch (g) {
      f(s[0][3], g);
    }
  }
  function u(d) {
    d.value instanceof __await ? Promise.resolve(d.value.v).then(c, h) : f(s[0][2], d);
  }
  function c(d) {
    a('next', d);
  }
  function h(d) {
    a('throw', d);
  }
  function f(d, b) {
    d(b), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function __asyncDelegator(e) {
  var t, n;
  return (
    (t = {}),
    r('next'),
    r('throw', function (i) {
      throw i;
    }),
    r('return'),
    (t[Symbol.iterator] = function () {
      return this;
    }),
    t
  );
  function r(i, s) {
    t[i] = e[i]
      ? function (o) {
          return (n = !n) ? { value: __await(e[i](o)), done: !1 } : s ? s(o) : o;
        }
      : s;
  }
}
function __asyncValues(e) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof __values == 'function' ? __values(e) : e[Symbol.iterator]()),
      (n = {}),
      r('next'),
      r('throw'),
      r('return'),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(s) {
    n[s] =
      e[s] &&
      function (o) {
        return new Promise(function (l, a) {
          (o = e[s](o)), i(l, a, o.done, o.value);
        });
      };
  }
  function i(s, o, l, a) {
    Promise.resolve(a).then(function (u) {
      s({ value: u, done: l });
    }, o);
  }
}
function __makeTemplateObject(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e;
}
var wi = Object.create
  ? function (e, t) {
      Object.defineProperty(e, 'default', { enumerable: !0, value: t });
    }
  : function (e, t) {
      e['default'] = t;
    };
function __importStar(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== 'default' && Object.prototype.hasOwnProperty.call(e, n) && __createBinding(t, e, n);
  return wi(t, e), t;
}
function __importDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function __classPrivateFieldGet(e, t, n, r) {
  if (n === 'a' && !r) throw new TypeError('Private accessor was defined without a getter');
  if (typeof t == 'function' ? e !== t || !r : !t.has(e))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return n === 'm' ? r : n === 'a' ? r.call(e) : r ? r.value : t.get(e);
}
function __classPrivateFieldSet(e, t, n, r, i) {
  if (r === 'm') throw new TypeError('Private method is not writable');
  if (r === 'a' && !i) throw new TypeError('Private accessor was defined without a setter');
  if (typeof t == 'function' ? e !== t || !i : !t.has(e))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return r === 'a' ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
}
function __classPrivateFieldIn(e, t) {
  if (t === null || (_typeof(t) != 'object' && typeof t != 'function'))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == 'function' ? t === e : e.has(t);
}
function __addDisposableResource(e, t, n) {
  if (t != null) {
    if (_typeof(t) != 'object' && typeof t != 'function') throw new TypeError('Object expected.');
    var r, i;
    if (n) {
      if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
      r = t[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
      (r = t[Symbol.dispose]), n && (i = r);
    }
    if (typeof r != 'function') throw new TypeError('Object not disposable.');
    i &&
      (r = function r() {
        try {
          i.call(this);
        } catch (s) {
          return Promise.reject(s);
        }
      }),
      e.stack.push({ value: t, dispose: r, async: n });
  } else n && e.stack.push({ async: !0 });
  return t;
}
var Ci =
  typeof SuppressedError == 'function'
    ? SuppressedError
    : function (e, t, n) {
        var r = new Error(n);
        return (r.name = 'SuppressedError'), (r.error = e), (r.suppressed = t), r;
      };
function __disposeResources(e) {
  function t(r) {
    (e.error = e.hasError ? new Ci(r, e.error, 'An error was suppressed during disposal.') : r),
      (e.hasError = !0);
  }
  function n() {
    for (; e.stack.length; ) {
      var r = e.stack.pop();
      try {
        var i = r.dispose && r.dispose.call(r.value);
        if (r.async)
          return Promise.resolve(i).then(n, function (s) {
            return t(s), n();
          });
      } catch (s) {
        t(s);
      }
    }
    if (e.hasError) throw e.error;
  }
  return n();
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
var Nt = /*#__PURE__*/ (function () {
    function Nt(e, t, n, r) {
      _classCallCheck(this, Nt);
      (this.originalStart = e),
        (this.originalLength = t),
        (this.modifiedStart = n),
        (this.modifiedLength = r);
    }
    return _createClass(Nt, [
      {
        key: 'getOriginalEnd',
        value: function getOriginalEnd() {
          return this.originalStart + this.originalLength;
        },
      },
      {
        key: 'getModifiedEnd',
        value: function getModifiedEnd() {
          return this.modifiedStart + this.modifiedLength;
        },
      },
    ]);
  })(),
  je = /*#__PURE__*/ (function () {
    function je(e) {
      _classCallCheck(this, je);
      (this.d = e), (this.a = !1);
    }
    return _createClass(je, [
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
  })(),
  Li = /*#__PURE__*/ (function () {
    function Li() {
      _classCallCheck(this, Li);
      (this.b = []),
        (this.a = function (e) {
          setTimeout(function () {
            throw e.stack
              ? Be.isErrorNoTelemetry(e)
                ? new Be(e.message + '\n\n' + e.stack)
                : new Error(e.message + '\n\n' + e.stack)
              : e;
          }, 0);
        });
    }
    return _createClass(Li, [
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
  yi = new Li();
function fe(e) {
  Ni(e) || yi.onUnexpectedError(e);
}
function W1(e) {
  if (e instanceof Error) {
    var t = e.name,
      n = e.message,
      r = e.stacktrace || e.stack;
    return { $isError: !0, name: t, message: n, stack: r, noTelemetry: Be.isErrorNoTelemetry(e) };
  }
  return e;
}
var ze = 'Canceled';
function Ni(e) {
  return e instanceof Ai ? !0 : e instanceof Error && e.name === ze && e.message === ze;
}
var Ai = /*#__PURE__*/ (function (_Error) {
  function Ai() {
    var _this2;
    _classCallCheck(this, Ai);
    (_this2 = _callSuper(this, Ai, [ze])), (_this2.name = _this2.message);
    return _this2;
  }
  _inherits(Ai, _Error);
  return _createClass(Ai);
})(/*#__PURE__*/ _wrapNativeSuper(Error));
function Ei(e) {
  return e ? new Error('Illegal state: '.concat(e)) : new Error('Illegal state');
}
var Be = /*#__PURE__*/ (function (_Error2) {
  function U1(t) {
    var _this3;
    _classCallCheck(this, U1);
    (_this3 = _callSuper(this, U1, [t])), (_this3.name = 'CodeExpectedError');
    return _this3;
  }
  _inherits(U1, _Error2);
  return _createClass(U1, null, [
    {
      key: 'fromError',
      value: function fromError(t) {
        if (t instanceof U1) return t;
        var n = new U1();
        return (n.message = t.message), (n.stack = t.stack), n;
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
function $i(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = n,
    s = r;
  for (; i < s; ) {
    var o = Math.floor((i + s) / 2);
    t(e[o]) ? (i = o + 1) : (s = o);
  }
  return i - 1;
}
var Jo =
    ((_Yr = /*#__PURE__*/ (function () {
      function Yr(t) {
        _classCallCheck(this, Yr);
        (this.e = t), (this.c = 0);
      }
      return _createClass(Yr, [
        {
          key: 'findLastMonotonous',
          value: function findLastMonotonous(t) {
            if (Yr.assertInvariants) {
              if (this.d) {
                var _iterator6 = _createForOfIteratorHelper(this.e),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                    var r = _step6.value;
                    if (this.d(r) && !t(r))
                      throw new Error(
                        'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.',
                      );
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
              this.d = t;
            }
            var n = $i(this.e, t, this.c);
            return (this.c = n + 1), n === -1 ? void 0 : this.e[n];
          },
        },
      ]);
    })()),
    (_Yr.assertInvariants = !1),
    _Yr),
  Te;
(function (e) {
  function t(s) {
    return s < 0;
  }
  e.isLessThan = t;
  function n(s) {
    return s <= 0;
  }
  e.isLessThanOrEqual = n;
  function r(s) {
    return s > 0;
  }
  e.isGreaterThan = r;
  function i(s) {
    return s === 0;
  }
  (e.isNeitherLessOrGreaterThan = i),
    (e.greaterThan = 1),
    (e.lessThan = -1),
    (e.neitherLessOrGreaterThan = 0);
})(Te || (Te = {}));
function xi(e, t) {
  return function (n, r) {
    return t(e(n), e(r));
  };
}
var Si = function Si(e, t) {
    return e - t;
  },
  Yo =
    ((_Me = /*#__PURE__*/ (function () {
      function Me(t) {
        _classCallCheck(this, Me);
        this.iterate = t;
      }
      return _createClass(Me, [
        {
          key: 'forEach',
          value: function forEach(t) {
            this.iterate(function (n) {
              return t(n), !0;
            });
          },
        },
        {
          key: 'toArray',
          value: function toArray() {
            var t = [];
            return (
              this.iterate(function (n) {
                return t.push(n), !0;
              }),
              t
            );
          },
        },
        {
          key: 'filter',
          value: function filter(t) {
            var _this4 = this;
            return new Me(function (n) {
              return _this4.iterate(function (r) {
                return t(r) ? n(r) : !0;
              });
            });
          },
        },
        {
          key: 'map',
          value: function map(t) {
            var _this5 = this;
            return new Me(function (n) {
              return _this5.iterate(function (r) {
                return n(t(r));
              });
            });
          },
        },
        {
          key: 'some',
          value: function some(t) {
            var n = !1;
            return (
              this.iterate(function (r) {
                return (n = t(r)), !n;
              }),
              n
            );
          },
        },
        {
          key: 'findFirst',
          value: function findFirst(t) {
            var n;
            return (
              this.iterate(function (r) {
                return t(r) ? ((n = r), !1) : !0;
              }),
              n
            );
          },
        },
        {
          key: 'findLast',
          value: function findLast(t) {
            var n;
            return (
              this.iterate(function (r) {
                return t(r) && (n = r), !0;
              }),
              n
            );
          },
        },
        {
          key: 'findLastMaxBy',
          value: function findLastMaxBy(t) {
            var n,
              r = !0;
            return (
              this.iterate(function (i) {
                return (r || Te.isGreaterThan(t(i, n))) && ((r = !1), (n = i)), !0;
              }),
              n
            );
          },
        },
      ]);
    })()),
    (_Me.empty = new _Me(function (t) {})),
    _Me),
  V1;
function Ii(e, t) {
  var n = Object.create(null);
  var _iterator7 = _createForOfIteratorHelper(e),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var r = _step7.value;
      var i = t(r);
      var s = n[i];
      s || (s = n[i] = []), s.push(r);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return n;
}
var Zo =
    ((V1 = Symbol.toStringTag),
    /*#__PURE__*/ (function () {
      function Zo(e, t) {
        _classCallCheck(this, Zo);
        (this.b = t), (this.a = new Map()), (this[V1] = 'SetWithKey');
        var _iterator8 = _createForOfIteratorHelper(e),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            var n = _step8.value;
            this.add(n);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      return _createClass(Zo, [
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
            var _iterator9, _step9, e;
            return _regeneratorRuntime().wrap(
              function entries$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _iterator9 = _createForOfIteratorHelper(this.a.values());
                      _context.prev = 1;
                      _iterator9.s();
                    case 3:
                      if ((_step9 = _iterator9.n()).done) {
                        _context.next = 9;
                        break;
                      }
                      e = _step9.value;
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
                      _iterator9.e(_context.t0);
                    case 14:
                      _context.prev = 14;
                      _iterator9.f();
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
            var _iterator0, _step0, e;
            return _regeneratorRuntime().wrap(
              function values$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _iterator0 = _createForOfIteratorHelper(this.a.values());
                      _context2.prev = 1;
                      _iterator0.s();
                    case 3:
                      if ((_step0 = _iterator0.n()).done) {
                        _context2.next = 9;
                        break;
                      }
                      e = _step0.value;
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
                      _iterator0.e(_context2.t0);
                    case 14:
                      _context2.prev = 14;
                      _iterator0.f();
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
            this.a.forEach(function (n) {
              return e.call(t, n, n, _this6);
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
  G1,
  H1,
  J1,
  _i = /*#__PURE__*/ _createClass(function _i(e, t) {
    _classCallCheck(this, _i);
    (this.uri = e), (this.value = t);
  });
function Oi(e) {
  return Array.isArray(e);
}
var We =
    ((_ref = ((G1 = Symbol.toStringTag), Symbol.iterator)),
    (_ie = /*#__PURE__*/ (function () {
      function ie(t, n) {
        _classCallCheck(this, ie);
        if (((this[G1] = 'ResourceMap'), t instanceof ie))
          (this.d = new Map(t.d)), (this.e = n !== null && n !== void 0 ? n : ie.c);
        else if (Oi(t)) {
          (this.d = new Map()), (this.e = n !== null && n !== void 0 ? n : ie.c);
          var _iterator1 = _createForOfIteratorHelper(t),
            _step1;
          try {
            for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
              var _step1$value = _slicedToArray(_step1.value, 2),
                r = _step1$value[0],
                i = _step1$value[1];
              this.set(r, i);
            }
          } catch (err) {
            _iterator1.e(err);
          } finally {
            _iterator1.f();
          }
        } else (this.d = new Map()), (this.e = t !== null && t !== void 0 ? t : ie.c);
      }
      return _createClass(ie, [
        {
          key: 'set',
          value: function set(t, n) {
            return this.d.set(this.e(t), new _i(t, n)), this;
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
          value: function forEach(t, n) {
            _typeof(n) < 'u' && (t = t.bind(n));
            var _iterator10 = _createForOfIteratorHelper(this.d),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                var _step10$value = _slicedToArray(_step10.value, 2),
                  r = _step10$value[0],
                  i = _step10$value[1];
                t(i.value, i.uri, this);
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
    (_ie.c = function (t) {
      return t.toString();
    }),
    _ie),
  Xo = /*#__PURE__*/ (function (_ref2) {
    function Xo(e, t) {
      _classCallCheck(this, Xo);
      (this[H1] = 'ResourceSet'),
        !e || typeof e == 'function'
          ? (this.c = new We(e))
          : ((this.c = new We(t)), e.forEach(this.add, this));
    }
    return _createClass(Xo, [
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
          this.c.forEach(function (n, r) {
            return e.call(t, r, r, _this7);
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
  })(((H1 = Symbol.toStringTag), Symbol.iterator)),
  Y1;
(function (e) {
  (e[(e.None = 0)] = 'None'), (e[(e.AsOld = 1)] = 'AsOld'), (e[(e.AsNew = 2)] = 'AsNew');
})(Y1 || (Y1 = {}));
var Mi = /*#__PURE__*/ (function (_ref3) {
    function Mi() {
      _classCallCheck(this, Mi);
      (this[J1] = 'LinkedMap'),
        (this.c = new Map()),
        (this.d = void 0),
        (this.e = void 0),
        (this.f = 0),
        (this.g = 0);
    }
    return _createClass(Mi, [
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
          var n = this.c.get(e);
          if (n) return t !== 0 && this.m(n, t), n.value;
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var r = this.c.get(e);
          if (r) (r.value = t), n !== 0 && this.m(r, n);
          else {
            switch (((r = { key: e, value: t, next: void 0, previous: void 0 }), n)) {
              case 0:
                this.k(r);
                break;
              case 1:
                this.j(r);
                break;
              case 2:
                this.k(r);
                break;
              default:
                this.k(r);
                break;
            }
            this.c.set(e, r), this.f++;
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
          var n = this.g;
          var r = this.d;
          for (; r; ) {
            if ((t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this.g !== n))
              throw new Error('LinkedMap got modified during iteration.');
            r = r.next;
          }
        },
      },
      {
        key: 'keys',
        value: function keys() {
          var e = this,
            t = this.g;
          var n = this.d;
          var r = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return r;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (n) {
                var i = { value: n.key, done: !1 };
                return (n = n.next), i;
              } else return { value: void 0, done: !0 };
            },
          );
          return r;
        },
      },
      {
        key: 'values',
        value: function values() {
          var e = this,
            t = this.g;
          var n = this.d;
          var r = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return r;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (n) {
                var i = { value: n.value, done: !1 };
                return (n = n.next), i;
              } else return { value: void 0, done: !0 };
            },
          );
          return r;
        },
      },
      {
        key: 'entries',
        value: function entries() {
          var e = this,
            t = this.g;
          var n = this.d;
          var r = _defineProperty(
            _defineProperty({}, Symbol.iterator, function () {
              return r;
            }),
            'next',
            function next() {
              if (e.g !== t) throw new Error('LinkedMap got modified during iteration.');
              if (n) {
                var i = { value: [n.key, n.value], done: !1 };
                return (n = n.next), i;
              } else return { value: void 0, done: !0 };
            },
          );
          return r;
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
            n = this.size;
          for (; t && n > e; ) this.c['delete'](t.key), (t = t.next), n--;
          (this.d = t), (this.f = n), t && (t.previous = void 0), this.g++;
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
            n = this.size;
          for (; t && n > e; ) this.c['delete'](t.key), (t = t.previous), n--;
          (this.e = t), (this.f = n), t && (t.next = void 0), this.g++;
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
              n = e.previous;
            if (!t || !n) throw new Error('Invalid list');
            (t.previous = n), (n.next = t);
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
              var n = e.next,
                r = e.previous;
              e === this.e ? ((r.next = void 0), (this.e = r)) : ((n.previous = r), (r.next = n)),
                (e.previous = void 0),
                (e.next = this.d),
                (this.d.previous = e),
                (this.d = e),
                this.g++;
            } else if (t === 2) {
              if (e === this.e) return;
              var _n2 = e.next,
                _r5 = e.previous;
              e === this.d
                ? ((_n2.previous = void 0), (this.d = _n2))
                : ((_n2.previous = _r5), (_r5.next = _n2)),
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
            this.forEach(function (t, n) {
              e.push([n, t]);
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
                n = _step15$value[1];
              this.set(t, n);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        },
      },
    ]);
  })(((J1 = Symbol.toStringTag), Symbol.iterator)),
  Pi = /*#__PURE__*/ (function (_Mi) {
    function Pi(e) {
      var _this8;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _classCallCheck(this, Pi);
      (_this8 = _callSuper(this, Pi)), (_this8.n = e), (_this8.o = Math.min(Math.max(0, t), 1));
      return _this8;
    }
    _inherits(Pi, _Mi);
    return _createClass(Pi, [
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
          return _superPropGet(Pi, 'get', this, 3)([e, t]);
        },
      },
      {
        key: 'peek',
        value: function peek(e) {
          return _superPropGet(Pi, 'get', this, 3)([e, 0]);
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          return _superPropGet(Pi, 'set', this, 3)([e, t, 2]), this;
        },
      },
      {
        key: 'p',
        value: function p() {
          this.size > this.n && this.q(Math.round(this.n * this.o));
        },
      },
    ]);
  })(Mi),
  Z1 = /*#__PURE__*/ (function (_Pi) {
    function Z1(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _classCallCheck(this, Z1);
      return _callSuper(this, Z1, [e, t]);
    }
    _inherits(Z1, _Pi);
    return _createClass(Z1, [
      {
        key: 'q',
        value: function q(e) {
          this.h(e);
        },
      },
      {
        key: 'set',
        value: function set(e, t) {
          return _superPropGet(Z1, 'set', this, 3)([e, t]), this.p(), this;
        },
      },
    ]);
  })(Pi),
  Ri = /*#__PURE__*/ (function () {
    function Ri() {
      _classCallCheck(this, Ri);
      this.c = new Map();
    }
    return _createClass(Ri, [
      {
        key: 'add',
        value: function add(e, t) {
          var n = this.c.get(e);
          n || ((n = new Set()), this.c.set(e, n)), n.add(t);
        },
      },
      {
        key: 'delete',
        value: function _delete(e, t) {
          var n = this.c.get(e);
          n && (n['delete'](t), n.size === 0 && this.c['delete'](e));
        },
      },
      {
        key: 'forEach',
        value: function forEach(e, t) {
          var n = this.c.get(e);
          n && n.forEach(t);
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
  })();
function Di(e, t) {
  var n = this;
  var r = !1,
    i;
  return function () {
    if (r) return i;
    if (((r = !0), t))
      try {
        i = e.apply(n, arguments);
      } finally {
        t();
      }
    else i = e.apply(n, arguments);
    return i;
  };
}
var de;
(function (e) {
  var _marked = /*#__PURE__*/ _regeneratorRuntime().mark(i),
    _marked2 = /*#__PURE__*/ _regeneratorRuntime().mark(l),
    _marked3 = /*#__PURE__*/ _regeneratorRuntime().mark(f),
    _marked4 = /*#__PURE__*/ _regeneratorRuntime().mark(d),
    _marked5 = /*#__PURE__*/ _regeneratorRuntime().mark(b),
    _marked6 = /*#__PURE__*/ _regeneratorRuntime().mark(g);
  function t(C) {
    return C && _typeof(C) == 'object' && typeof C[Symbol.iterator] == 'function';
  }
  e.is = t;
  var n = Object.freeze([]);
  function r() {
    return n;
  }
  e.empty = r;
  function i(C) {
    return _regeneratorRuntime().wrap(function i$(_context7) {
      while (1)
        switch ((_context7.prev = _context7.next)) {
          case 0:
            _context7.next = 2;
            return C;
          case 2:
          case 'end':
            return _context7.stop();
        }
    }, _marked);
  }
  e.single = i;
  function s(C) {
    return t(C) ? C : i(C);
  }
  e.wrap = s;
  function o(C) {
    return C || n;
  }
  e.from = o;
  function l(C) {
    var A;
    return _regeneratorRuntime().wrap(function l$(_context8) {
      while (1)
        switch ((_context8.prev = _context8.next)) {
          case 0:
            A = C.length - 1;
          case 1:
            if (!(A >= 0)) {
              _context8.next = 7;
              break;
            }
            _context8.next = 4;
            return C[A];
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
  e.reverse = l;
  function a(C) {
    return !C || C[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = a;
  function u(C) {
    return C[Symbol.iterator]().next().value;
  }
  e.first = u;
  function c(C, A) {
    var x = 0;
    var _iterator16 = _createForOfIteratorHelper(C),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
        var R = _step16.value;
        if (A(R, x++)) return !0;
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    return !1;
  }
  e.some = c;
  function h(C, A) {
    var _iterator17 = _createForOfIteratorHelper(C),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
        var x = _step17.value;
        if (A(x)) return x;
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }
  e.find = h;
  function f(C, A) {
    var _iterator18, _step18, x;
    return _regeneratorRuntime().wrap(
      function f$(_context9) {
        while (1)
          switch ((_context9.prev = _context9.next)) {
            case 0:
              _iterator18 = _createForOfIteratorHelper(C);
              _context9.prev = 1;
              _iterator18.s();
            case 3:
              if ((_step18 = _iterator18.n()).done) {
                _context9.next = 11;
                break;
              }
              x = _step18.value;
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
  e.filter = f;
  function d(C, A) {
    var x, _iterator19, _step19, R;
    return _regeneratorRuntime().wrap(
      function d$(_context0) {
        while (1)
          switch ((_context0.prev = _context0.next)) {
            case 0:
              x = 0;
              _iterator19 = _createForOfIteratorHelper(C);
              _context0.prev = 2;
              _iterator19.s();
            case 4:
              if ((_step19 = _iterator19.n()).done) {
                _context0.next = 10;
                break;
              }
              R = _step19.value;
              _context0.next = 8;
              return A(R, x++);
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
  e.map = d;
  function b(C, A) {
    var x, _iterator20, _step20, R;
    return _regeneratorRuntime().wrap(
      function b$(_context1) {
        while (1)
          switch ((_context1.prev = _context1.next)) {
            case 0:
              x = 0;
              _iterator20 = _createForOfIteratorHelper(C);
              _context1.prev = 2;
              _iterator20.s();
            case 4:
              if ((_step20 = _iterator20.n()).done) {
                _context1.next = 9;
                break;
              }
              R = _step20.value;
              return _context1.delegateYield(A(R, x++), 't0', 7);
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
  e.flatMap = b;
  function g() {
    var _len,
      C,
      _key,
      _i2,
      _C,
      A,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function g$(_context10) {
      while (1)
        switch ((_context10.prev = _context10.next)) {
          case 0:
            for (_len = _args10.length, C = new Array(_len), _key = 0; _key < _len; _key++) {
              C[_key] = _args10[_key];
            }
            (_i2 = 0), (_C = C);
          case 2:
            if (!(_i2 < _C.length)) {
              _context10.next = 8;
              break;
            }
            A = _C[_i2];
            return _context10.delegateYield(A, 't0', 5);
          case 5:
            _i2++;
            _context10.next = 2;
            break;
          case 8:
          case 'end':
            return _context10.stop();
        }
    }, _marked6);
  }
  e.concat = g;
  function m(C, A, x) {
    var R = x;
    var _iterator21 = _createForOfIteratorHelper(C),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
        var M = _step21.value;
        R = A(R, M);
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    return R;
  }
  e.reduce = m;
  function N(C, A) {
    var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : C.length;
    return /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context11) {
        while (1)
          switch ((_context11.prev = _context11.next)) {
            case 0:
              A < -C.length && (A = 0),
                A < 0 && (A += C.length),
                x < 0 ? (x += C.length) : x > C.length && (x = C.length);
            case 1:
              if (!(A < x)) {
                _context11.next = 7;
                break;
              }
              _context11.next = 4;
              return C[A];
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
  e.slice = N;
  function S(C) {
    var A =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var x = [];
    if (A === 0) return [x, C];
    var R = C[Symbol.iterator]();
    for (var M = 0; M < A; M++) {
      var W = R.next();
      if (W.done) return [x, e.empty()];
      x.push(W.value);
    }
    return [
      x,
      _defineProperty({}, Symbol.iterator, function () {
        return R;
      }),
    ];
  }
  e.consume = S;
  function $(_x) {
    return _$.apply(this, arguments);
  }
  function _$() {
    _$ = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(C) {
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
                  _iterator = _asyncIterator(C);
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
    return _$.apply(this, arguments);
  }
  e.asyncToArray = $;
})(de || (de = {}));
var ki = !1,
  qt = null,
  Ko =
    ((_Zr = /*#__PURE__*/ (function () {
      function Zr() {
        _classCallCheck(this, Zr);
        this.b = new Map();
      }
      return _createClass(Zr, [
        {
          key: 'c',
          value: function c(t) {
            var n = this.b.get(t);
            return (
              n ||
                ((n = { parent: null, source: null, isSingleton: !1, value: t, idx: Zr.a++ }),
                this.b.set(t, n)),
              n
            );
          },
        },
        {
          key: 'trackDisposable',
          value: function trackDisposable(t) {
            var n = this.c(t);
            n.source || (n.source = new Error().stack);
          },
        },
        {
          key: 'setParent',
          value: function setParent(t, n) {
            var r = this.c(t);
            r.parent = n;
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
          value: function f(t, n) {
            var r = n.get(t);
            if (r) return r;
            var i = t.parent ? this.f(this.c(t.parent), n) : t;
            return n.set(t, i), i;
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
                  r = _ref6[1];
                return r.source !== null && !_this9.f(r, t).isSingleton;
              })
              .flatMap(function (_ref7) {
                var _ref8 = _slicedToArray(_ref7, 1),
                  r = _ref8[0];
                return r;
              });
          },
        },
        {
          key: 'computeLeakingDisposables',
          value: function computeLeakingDisposables() {
            var _this0 = this;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var n = arguments.length > 1 ? arguments[1] : undefined;
            var r;
            if (n) r = n;
            else {
              var a = new Map(),
                u = _toConsumableArray(this.b.values()).filter(function (h) {
                  return h.source !== null && !_this0.f(h, a).isSingleton;
                });
              if (u.length === 0) return;
              var c = new Set(
                u.map(function (h) {
                  return h.value;
                }),
              );
              if (
                ((r = u.filter(function (h) {
                  return !(h.parent && c.has(h.parent));
                })),
                r.length === 0)
              )
                throw new Error('There are cyclic diposable chains!');
            }
            if (!r) return;
            function i(a) {
              function u(h, f) {
                for (
                  ;
                  h.length > 0 &&
                  f.some(function (d) {
                    return typeof d == 'string' ? d === h[0] : h[0].match(d);
                  });

                )
                  h.shift();
              }
              var c = a.source
                .split('\n')
                .map(function (h) {
                  return h.trim().replace('at ', '');
                })
                .filter(function (h) {
                  return h !== '';
                });
              return (
                u(c, [
                  'Error',
                  /^trackDisposable \(.*\)$/,
                  /^DisposableTracker.trackDisposable \(.*\)$/,
                ]),
                c.reverse()
              );
            }
            var s = new Ri();
            var _iterator22 = _createForOfIteratorHelper(r),
              _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                var _a = _step22.value;
                var _u = i(_a);
                for (var _c = 0; _c <= _u.length; _c++) s.add(_u.slice(0, _c).join('\n'), _a);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
            r.sort(
              xi(function (a) {
                return a.idx;
              }, Si),
            );
            var o = '',
              l = 0;
            var _iterator23 = _createForOfIteratorHelper(r.slice(0, t)),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                var _a2 = _step23.value;
                l++;
                var _u2 = i(_a2),
                  _c2 = [];
                var _loop = function _loop(h) {
                  var f = _u2[h];
                  f = '(shared with '
                    .concat(s.get(_u2.slice(0, h + 1).join('\n')).size, '/')
                    .concat(r.length, ' leaks) at ')
                    .concat(f);
                  var b = s.get(_u2.slice(0, h).join('\n')),
                    g = Ii(
                      _toConsumableArray(b).map(function (m) {
                        return i(m)[h];
                      }),
                      function (m) {
                        return m;
                      },
                    );
                  delete g[_u2[h]];
                  for (
                    var _i3 = 0, _Object$entries = Object.entries(g);
                    _i3 < _Object$entries.length;
                    _i3++
                  ) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
                      m = _Object$entries$_i[0],
                      N = _Object$entries$_i[1];
                    _c2.unshift(
                      '    - stacktraces of '
                        .concat(N.length, ' other leaks continue with ')
                        .concat(m),
                    );
                  }
                  _c2.unshift(f);
                };
                for (var h = 0; h < _u2.length; h++) {
                  _loop(h);
                }
                o += '\n\n\n==================== Leaking disposable '
                  .concat(l, '/')
                  .concat(r.length, ': ')
                  .concat(_a2.value.constructor.name, ' ====================\n')
                  .concat(
                    _c2.join('\n'),
                    '\n============================================================\n\n',
                  );
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
            return (
              r.length > t &&
                (o += '\n\n\n... and '.concat(r.length - t, ' more leaking disposables\n\n')),
              { leaks: r, details: o }
            );
          },
        },
      ]);
    })()),
    (_Zr.a = 0),
    _Zr);
function Fi(e) {
  qt = e;
}
if (ki) {
  var e = '__is_disposable_tracked__';
  Fi(
    new /*#__PURE__*/ ((function () {
      function _class() {
        _classCallCheck(this, _class);
      }
      return _createClass(_class, [
        {
          key: 'trackDisposable',
          value: function trackDisposable(t) {
            var n = new Error('Potentially leaked disposable').stack;
            setTimeout(function () {
              t[e] || console.log(n);
            }, 3e3);
          },
        },
        {
          key: 'setParent',
          value: function setParent(t, n) {
            if (t && t !== Ut.None)
              try {
                t[e] = !0;
              } catch (_unused) {}
          },
        },
        {
          key: 'markAsDisposed',
          value: function markAsDisposed(t) {
            if (t && t !== Ut.None)
              try {
                t[e] = !0;
              } catch (_unused2) {}
          },
        },
        { key: 'markAsSingleton', value: function markAsSingleton(t) {} },
      ]);
    })())(),
  );
}
function Ve(e) {
  var _qt;
  return (_qt = qt) !== null && _qt !== void 0 && _qt.trackDisposable(e), e;
}
function Ge(e) {
  var _qt2;
  (_qt2 = qt) === null || _qt2 === void 0 || _qt2.markAsDisposed(e);
}
function He(e, t) {
  var _qt3;
  (_qt3 = qt) === null || _qt3 === void 0 || _qt3.setParent(e, t);
}
function qi(e, t) {
  if (qt) {
    var _iterator24 = _createForOfIteratorHelper(e),
      _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
        var n = _step24.value;
        qt.setParent(n, t);
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
  }
}
function X1(e) {
  if (de.is(e)) {
    var t = [];
    var _iterator25 = _createForOfIteratorHelper(e),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
        var n = _step25.value;
        if (n)
          try {
            n.dispose();
          } catch (r) {
            t.push(r);
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
function Ui() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }
  var t = K1(function () {
    return X1(e);
  });
  return qi(e, t), t;
}
function K1(e) {
  var t = Ve({
    dispose: Di(function () {
      Ge(t), e();
    }),
  });
  return t;
}
var Je =
    ((_Xr = /*#__PURE__*/ (function () {
      function Xr() {
        _classCallCheck(this, Xr);
        (this.f = new Set()), (this.g = !1), Ve(this);
      }
      return _createClass(Xr, [
        {
          key: 'dispose',
          value: function dispose() {
            this.g || (Ge(this), (this.g = !0), this.clear());
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
                X1(this.f);
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
              He(t, this),
              this.g
                ? Xr.DISABLE_DISPOSED_WARNING ||
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
            t && this.f.has(t) && (this.f['delete'](t), He(t, null));
          },
        },
      ]);
    })()),
    (_Xr.DISABLE_DISPOSED_WARNING = !1),
    _Xr),
  Ut =
    ((_Class2 = /*#__PURE__*/ (function () {
      function Ut() {
        _classCallCheck(this, Ut);
        (this.B = new Je()), Ve(this), He(this.B, this);
      }
      return _createClass(Ut, [
        {
          key: 'dispose',
          value: function dispose() {
            Ge(this), this.B.dispose();
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
    (_Class2.None = Object.freeze({ dispose: function dispose() {} })),
    _Class2),
  ge = (typeof Buffer === 'undefined' ? 'undefined' : _typeof(Buffer)) < 'u',
  ji = new je(function () {
    return new Uint8Array(256);
  }),
  Ye,
  Ze,
  Xe = /*#__PURE__*/ (function () {
    function lt(t) {
      _classCallCheck(this, lt);
      (this.buffer = t), (this.byteLength = this.buffer.byteLength);
    }
    return _createClass(
      lt,
      [
        {
          key: 'clone',
          value: function clone() {
            var t = lt.alloc(this.byteLength);
            return t.set(this), t;
          },
        },
        {
          key: 'toString',
          value: function toString() {
            return ge
              ? this.buffer.toString()
              : (Ze || (Ze = new TextDecoder()), Ze.decode(this.buffer));
          },
        },
        {
          key: 'slice',
          value: function slice(t, n) {
            return new lt(this.buffer.subarray(t, n));
          },
        },
        {
          key: 'set',
          value: function set(t, n) {
            if (t instanceof lt) this.buffer.set(t.buffer, n);
            else if (t instanceof Uint8Array) this.buffer.set(t, n);
            else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), n);
            else if (ArrayBuffer.isView(t))
              this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), n);
            else throw new Error("Unknown argument 'array'");
          },
        },
        {
          key: 'readUInt32BE',
          value: function readUInt32BE(t) {
            return me(this.buffer, t);
          },
        },
        {
          key: 'writeUInt32BE',
          value: function writeUInt32BE(t, n) {
            pe(this.buffer, t, n);
          },
        },
        {
          key: 'readUInt32LE',
          value: function readUInt32LE(t) {
            return Wi(this.buffer, t);
          },
        },
        {
          key: 'writeUInt32LE',
          value: function writeUInt32LE(t, n) {
            Vi(this.buffer, t, n);
          },
        },
        {
          key: 'readUInt8',
          value: function readUInt8(t) {
            return Gi(this.buffer, t);
          },
        },
        {
          key: 'writeUInt8',
          value: function writeUInt8(t, n) {
            Hi(this.buffer, t, n);
          },
        },
        {
          key: 'indexOf',
          value: function indexOf(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return zi(this.buffer, t instanceof lt ? t.buffer : t, n);
          },
        },
      ],
      [
        {
          key: 'alloc',
          value: function alloc(t) {
            return ge ? new lt(Buffer.allocUnsafe(t)) : new lt(new Uint8Array(t));
          },
        },
        {
          key: 'wrap',
          value: function wrap(t) {
            return (
              ge && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)),
              new lt(t)
            );
          },
        },
        {
          key: 'fromString',
          value: function fromString(t, n) {
            return !((n !== null && n !== void 0 && n.dontUseNodeBuffer) || !1) && ge
              ? new lt(Buffer.from(t))
              : (Ye || (Ye = new TextEncoder()), new lt(Ye.encode(t)));
          },
        },
        {
          key: 'fromByteArray',
          value: function fromByteArray(t) {
            var n = lt.alloc(t.length);
            for (var r = 0, i = t.length; r < i; r++) n.buffer[r] = t[r];
            return n;
          },
        },
        {
          key: 'concat',
          value: function concat(t, n) {
            if (_typeof(n) > 'u') {
              n = 0;
              for (var s = 0, o = t.length; s < o; s++) n += t[s].byteLength;
            }
            var r = lt.alloc(n);
            var i = 0;
            for (var _s2 = 0, _o2 = t.length; _s2 < _o2; _s2++) {
              var l = t[_s2];
              r.set(l, i), (i += l.byteLength);
            }
            return r;
          },
        },
      ],
    );
  })();
function zi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = t.byteLength,
    i = e.byteLength;
  if (r === 0) return 0;
  if (r === 1) return e.indexOf(t[0]);
  if (r > i - n) return -1;
  var s = ji.value;
  s.fill(t.length);
  for (var u = 0; u < t.length; u++) s[t[u]] = t.length - u - 1;
  var o = n + t.length - 1,
    l = o,
    a = -1;
  for (; o < i; )
    if (e[o] === t[l]) {
      if (l === 0) {
        a = o;
        break;
      }
      o--, l--;
    } else (o += Math.max(t.length - l, s[e[o]])), (l = t.length - 1);
  return a;
}
function Bi(e, t) {
  return ((e[t + 0] << 0) >>> 0) | ((e[t + 1] << 8) >>> 0);
}
function Ti(e, t, n) {
  (e[n + 0] = t & 255), (t = t >>> 8), (e[n + 1] = t & 255);
}
function me(e, t) {
  return e[t] * Math.pow(2, 24) + e[t + 1] * Math.pow(2, 16) + e[t + 2] * Math.pow(2, 8) + e[t + 3];
}
function pe(e, t, n) {
  (e[n + 3] = t),
    (t = t >>> 8),
    (e[n + 2] = t),
    (t = t >>> 8),
    (e[n + 1] = t),
    (t = t >>> 8),
    (e[n] = t);
}
function Wi(e, t) {
  return (
    ((e[t + 0] << 0) >>> 0) |
    ((e[t + 1] << 8) >>> 0) |
    ((e[t + 2] << 16) >>> 0) |
    ((e[t + 3] << 24) >>> 0)
  );
}
function Vi(e, t, n) {
  (e[n + 0] = t & 255),
    (t = t >>> 8),
    (e[n + 1] = t & 255),
    (t = t >>> 8),
    (e[n + 2] = t & 255),
    (t = t >>> 8),
    (e[n + 3] = t & 255);
}
function Gi(e, t) {
  return e[t];
}
function Hi(e, t, n) {
  e[n] = t;
}
function Q1(e) {
  var t = 0,
    n = 0,
    r = 0;
  var i = new Uint8Array(Math.floor((e.length / 4) * 3)),
    s = function s(l) {
      switch (n) {
        case 3:
          (i[r++] = t | l), (n = 0);
          break;
        case 2:
          (i[r++] = t | (l >>> 2)), (t = l << 6), (n = 3);
          break;
        case 1:
          (i[r++] = t | (l >>> 4)), (t = l << 4), (n = 2);
          break;
        default:
          (t = l << 2), (n = 1);
      }
    };
  for (var l = 0; l < e.length; l++) {
    var a = e.charCodeAt(l);
    if (a >= 65 && a <= 90) s(a - 65);
    else if (a >= 97 && a <= 122) s(a - 97 + 26);
    else if (a >= 48 && a <= 57) s(a - 48 + 52);
    else if (a === 43 || a === 45) s(62);
    else if (a === 47 || a === 95) s(63);
    else {
      if (a === 61) break;
      throw new SyntaxError('Unexpected base64 character '.concat(e[l]));
    }
  }
  var o = r;
  for (; n > 0; ) s(0);
  return Xe.wrap(i).slice(0, o);
}
var Ji = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  Yi = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
function tn(_ref9) {
  var e = _ref9.buffer;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r = n ? Yi : Ji;
  var i = '';
  var s = e.byteLength % 3;
  var o = 0;
  for (; o < e.byteLength - s; o += 3) {
    var l = e[o + 0],
      a = e[o + 1],
      u = e[o + 2];
    (i += r[l >>> 2]),
      (i += r[((l << 4) | (a >>> 4)) & 63]),
      (i += r[((a << 2) | (u >>> 6)) & 63]),
      (i += r[u & 63]);
  }
  if (s === 1) {
    var _l2 = e[o + 0];
    (i += r[_l2 >>> 2]), (i += r[(_l2 << 4) & 63]), t && (i += '==');
  } else if (s === 2) {
    var _l3 = e[o + 0],
      _a3 = e[o + 1];
    (i += r[_l3 >>> 2]),
      (i += r[((_l3 << 4) | (_a3 >>> 4)) & 63]),
      (i += r[(_a3 << 2) & 63]),
      t && (i += '=');
  }
  return i;
}
var z =
    ((_Pe = /*#__PURE__*/ _createClass(function Pe(t) {
      _classCallCheck(this, Pe);
      (this.element = t), (this.next = Pe.Undefined), (this.prev = Pe.Undefined);
    })),
    (_Pe.Undefined = new _Pe(void 0)),
    _Pe),
  Zi = /*#__PURE__*/ (function () {
    function Zi() {
      _classCallCheck(this, Zi);
      (this.a = z.Undefined), (this.b = z.Undefined), (this.c = 0);
    }
    return _createClass(Zi, [
      {
        key: 'size',
        get: function get() {
          return this.c;
        },
      },
      {
        key: 'first',
        get: function get() {
          return this.a;
        },
      },
      {
        key: 'isEmpty',
        value: function isEmpty() {
          return this.a === z.Undefined;
        },
      },
      {
        key: 'clear',
        value: function clear() {
          var e = this.a;
          for (; e !== z.Undefined; ) {
            var t = e.next;
            (e.prev = z.Undefined), (e.next = z.Undefined), (e = t);
          }
          (this.a = z.Undefined), (this.b = z.Undefined), (this.c = 0);
        },
      },
      {
        key: 'unshift',
        value: function unshift(e) {
          return this.d(e, !1);
        },
      },
      {
        key: 'push',
        value: function push(e) {
          return this.d(e, !0);
        },
      },
      {
        key: 'd',
        value: function d(e, t) {
          var _this1 = this;
          var n = new z(e);
          if (this.a === z.Undefined) (this.a = n), (this.b = n);
          else if (t) {
            var i = this.b;
            (this.b = n), (n.prev = i), (i.next = n);
          } else {
            var _i4 = this.a;
            (this.a = n), (n.next = _i4), (_i4.prev = n);
          }
          this.c += 1;
          var r = !1;
          return function () {
            r || ((r = !0), _this1.e(n));
          };
        },
      },
      {
        key: 'shift',
        value: function shift() {
          if (this.a !== z.Undefined) {
            var _e3 = this.a.element;
            return this.e(this.a), _e3;
          }
        },
      },
      {
        key: 'pop',
        value: function pop() {
          if (this.b !== z.Undefined) {
            var _e4 = this.b.element;
            return this.e(this.b), _e4;
          }
        },
      },
      {
        key: 'remove',
        value: function remove(e) {
          this.e(e);
        },
      },
      {
        key: 'e',
        value: function e(_e2) {
          if (_e2.prev !== z.Undefined && _e2.next !== z.Undefined) {
            var t = _e2.prev;
            (t.next = _e2.next), (_e2.next.prev = t);
          } else
            _e2.prev === z.Undefined && _e2.next === z.Undefined
              ? ((this.a = z.Undefined), (this.b = z.Undefined))
              : _e2.next === z.Undefined
                ? ((this.b = this.b.prev), (this.b.next = z.Undefined))
                : _e2.prev === z.Undefined && ((this.a = this.a.next), (this.a.prev = z.Undefined));
          this.c -= 1;
        },
      },
      {
        key: Symbol.iterator,
        value: /*#__PURE__*/ _regeneratorRuntime().mark(function value() {
          var e;
          return _regeneratorRuntime().wrap(
            function value$(_context13) {
              while (1)
                switch ((_context13.prev = _context13.next)) {
                  case 0:
                    e = this.a;
                  case 1:
                    if (!(e !== z.Undefined)) {
                      _context13.next = 7;
                      break;
                    }
                    _context13.next = 4;
                    return e.element;
                  case 4:
                    e = e.next;
                  case 5:
                    _context13.next = 1;
                    break;
                  case 7:
                  case 'end':
                    return _context13.stop();
                }
            },
            value,
            this,
          );
        }),
      },
    ]);
  })(),
  Xi = globalThis.performance && typeof globalThis.performance.now == 'function',
  Ki = /*#__PURE__*/ (function () {
    function Kr(t) {
      _classCallCheck(this, Kr);
      (this.c =
        Xi && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)),
        (this.a = this.c()),
        (this.b = -1);
    }
    return _createClass(
      Kr,
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
            return new Kr(t);
          },
        },
      ],
    );
  })(),
  Qi = !1,
  en = !1,
  ts = !1,
  be;
(function (e) {
  e.None = function () {
    return Ut.None;
  };
  function t(L) {
    if (ts) {
      var p = L.onDidAddListener,
        y = Ke.create();
      var v = 0;
      L.onDidAddListener = function () {
        ++v === 2 &&
          (console.warn(
            'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
          ),
          y.print()),
          p === null || p === void 0 ? void 0 : p();
      };
    }
  }
  function n(L, p) {
    return d(L, function () {}, 0, void 0, !0, void 0, p);
  }
  e.defer = n;
  function r(L) {
    return function (p) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var v = arguments.length > 2 ? arguments[2] : undefined;
      var E = !1,
        O;
      return (
        (O = L(
          function (D) {
            if (!E) return O ? O.dispose() : (E = !0), p.call(y, D);
          },
          null,
          v,
        )),
        E && O.dispose(),
        O
      );
    };
  }
  e.once = r;
  function i(L, p) {
    return e.once(e.filter(L, p));
  }
  e.onceIf = i;
  function s(L, p, y) {
    return h(function (v) {
      var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var O = arguments.length > 2 ? arguments[2] : undefined;
      return L(
        function (D) {
          return v.call(E, p(D));
        },
        null,
        O,
      );
    }, y);
  }
  e.map = s;
  function o(L, p, y) {
    return h(function (v) {
      var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var O = arguments.length > 2 ? arguments[2] : undefined;
      return L(
        function (D) {
          p(D), v.call(E, D);
        },
        null,
        O,
      );
    }, y);
  }
  e.forEach = o;
  function l(L, p, y) {
    return h(function (v) {
      var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var O = arguments.length > 2 ? arguments[2] : undefined;
      return L(
        function (D) {
          return p(D) && v.call(E, D);
        },
        null,
        O,
      );
    }, y);
  }
  e.filter = l;
  function a(L) {
    return L;
  }
  e.signal = a;
  function u() {
    for (var _len3 = arguments.length, L = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      L[_key3] = arguments[_key3];
    }
    return function (p) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var v = arguments.length > 2 ? arguments[2] : undefined;
      var E = Ui.apply(
        void 0,
        _toConsumableArray(
          L.map(function (O) {
            return O(function (D) {
              return p.call(y, D);
            });
          }),
        ),
      );
      return f(E, v);
    };
  }
  e.any = u;
  function c(L, p, y, v) {
    var E = y;
    return s(
      L,
      function (O) {
        return (E = p(E, O)), E;
      },
      v,
    );
  }
  e.reduce = c;
  function h(L, p) {
    var y;
    var v = {
      onWillAddFirstListener: function onWillAddFirstListener() {
        y = L(E.fire, E);
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        var _y;
        (_y = y) === null || _y === void 0 || _y.dispose();
      },
    };
    p || t(v);
    var E = new at(v);
    return p !== null && p !== void 0 && p.add(E), E.event;
  }
  function f(L, p) {
    return p instanceof Array ? p.push(L) : p && p.add(L), L;
  }
  function d(L, p) {
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var v = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var E = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    var O = arguments.length > 5 ? arguments[5] : undefined;
    var D = arguments.length > 6 ? arguments[6] : undefined;
    var G,
      Y,
      Ft,
      he = 0,
      Ht;
    var T1 = {
      leakWarningThreshold: O,
      onWillAddFirstListener: function onWillAddFirstListener() {
        G = L(function (bi) {
          he++,
            (Y = p(Y, bi)),
            v && !Ft && (ce.fire(Y), (Y = void 0)),
            (Ht = function Ht() {
              var vi = Y;
              (Y = void 0), (Ft = void 0), (!v || he > 1) && ce.fire(vi), (he = 0);
            }),
            typeof y == 'number'
              ? (clearTimeout(Ft), (Ft = setTimeout(Ht, y)))
              : Ft === void 0 && ((Ft = 0), queueMicrotask(Ht));
        });
      },
      onWillRemoveListener: function onWillRemoveListener() {
        var _Ht;
        E && he > 0 && ((_Ht = Ht) === null || _Ht === void 0 ? void 0 : _Ht());
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        (Ht = void 0), G.dispose();
      },
    };
    D || t(T1);
    var ce = new at(T1);
    return D !== null && D !== void 0 && D.add(ce), ce.event;
  }
  e.debounce = d;
  function b(L) {
    var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 ? arguments[2] : undefined;
    return e.debounce(
      L,
      function (v, E) {
        return v ? (v.push(E), v) : [E];
      },
      p,
      void 0,
      !0,
      void 0,
      y,
    );
  }
  e.accumulate = b;
  function g(L) {
    var p =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : function (v, E) {
            return v === E;
          };
    var y = arguments.length > 2 ? arguments[2] : undefined;
    var v = !0,
      E;
    return l(
      L,
      function (O) {
        var D = v || !p(O, E);
        return (v = !1), (E = O), D;
      },
      y,
    );
  }
  e.latch = g;
  function m(L, p, y) {
    return [
      e.filter(L, p, y),
      e.filter(
        L,
        function (v) {
          return !p(v);
        },
        y,
      ),
    ];
  }
  e.split = m;
  function N(L) {
    var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var v = arguments.length > 3 ? arguments[3] : undefined;
    var E = y.slice(),
      O = L(function (Y) {
        E ? E.push(Y) : G.fire(Y);
      });
    v && v.add(O);
    var D = function D() {
        var _E;
        (_E = E) !== null &&
          _E !== void 0 &&
          _E.forEach(function (Y) {
            return G.fire(Y);
          }),
          (E = null);
      },
      G = new at({
        onWillAddFirstListener: function onWillAddFirstListener() {
          O ||
            ((O = L(function (Y) {
              return G.fire(Y);
            })),
            v && v.add(O));
        },
        onDidAddFirstListener: function onDidAddFirstListener() {
          E && (p ? setTimeout(D) : D());
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          O && O.dispose(), (O = null);
        },
      });
    return v && v.add(G), G.event;
  }
  e.buffer = N;
  function S(L, p) {
    return function (v, E, O) {
      var D = p(new C());
      return L(
        function (G) {
          var Y = D.evaluate(G);
          Y !== $ && v.call(E, Y);
        },
        void 0,
        O,
      );
    };
  }
  e.chain = S;
  var $ = Symbol('HaltChainable');
  var C = /*#__PURE__*/ (function () {
    function C() {
      _classCallCheck(this, C);
      this.f = [];
    }
    return _createClass(C, [
      {
        key: 'map',
        value: function map(p) {
          return this.f.push(p), this;
        },
      },
      {
        key: 'forEach',
        value: function forEach(p) {
          return (
            this.f.push(function (y) {
              return p(y), y;
            }),
            this
          );
        },
      },
      {
        key: 'filter',
        value: function filter(p) {
          return (
            this.f.push(function (y) {
              return p(y) ? y : $;
            }),
            this
          );
        },
      },
      {
        key: 'reduce',
        value: function reduce(p, y) {
          var v = y;
          return (
            this.f.push(function (E) {
              return (v = p(v, E)), v;
            }),
            this
          );
        },
      },
      {
        key: 'latch',
        value: function latch() {
          var p =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : function (y, v) {
                  return y === v;
                };
          var y = !0,
            v;
          return (
            this.f.push(function (E) {
              var O = y || !p(E, v);
              return (y = !1), (v = E), O ? E : $;
            }),
            this
          );
        },
      },
      {
        key: 'evaluate',
        value: function evaluate(p) {
          var _iterator26 = _createForOfIteratorHelper(this.f),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
              var y = _step26.value;
              if (((p = y(p)), p === $)) break;
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
          return p;
        },
      },
    ]);
  })();
  function A(L, p) {
    var y =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (v) {
            return v;
          };
    var v = function v() {
        return D.fire(y.apply(void 0, arguments));
      },
      E = function E() {
        return L.on(p, v);
      },
      O = function O() {
        return L.removeListener(p, v);
      },
      D = new at({ onWillAddFirstListener: E, onDidRemoveLastListener: O });
    return D.event;
  }
  e.fromNodeEventEmitter = A;
  function x(L, p) {
    var y =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (v) {
            return v;
          };
    var v = function v() {
        return D.fire(y.apply(void 0, arguments));
      },
      E = function E() {
        return L.addEventListener(p, v);
      },
      O = function O() {
        return L.removeEventListener(p, v);
      },
      D = new at({ onWillAddFirstListener: E, onDidRemoveLastListener: O });
    return D.event;
  }
  e.fromDOMEventEmitter = x;
  function R(L) {
    return new Promise(function (p) {
      return r(L)(p);
    });
  }
  e.toPromise = R;
  function M(L) {
    var p = new at();
    return (
      L.then(
        function (y) {
          p.fire(y);
        },
        function () {
          p.fire(void 0);
        },
      )['finally'](function () {
        p.dispose();
      }),
      p.event
    );
  }
  e.fromPromise = M;
  function W(L, p) {
    return L(function (y) {
      return p.fire(y);
    });
  }
  e.forward = W;
  function tt(L, p, y) {
    return (
      p(y),
      L(function (v) {
        return p(v);
      })
    );
  }
  e.runAndSubscribe = tt;
  var q = /*#__PURE__*/ (function () {
    function q(p, y) {
      var _this10 = this;
      _classCallCheck(this, q);
      (this._observable = p), (this.f = 0), (this.g = !1);
      var v = {
        onWillAddFirstListener: function onWillAddFirstListener() {
          p.addObserver(_this10), _this10._observable.reportChanges();
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          p.removeObserver(_this10);
        },
      };
      y || t(v), (this.emitter = new at(v)), y && y.add(this.emitter);
    }
    return _createClass(q, [
      {
        key: 'beginUpdate',
        value: function beginUpdate(p) {
          this.f++;
        },
      },
      { key: 'handlePossibleChange', value: function handlePossibleChange(p) {} },
      {
        key: 'handleChange',
        value: function handleChange(p, y) {
          this.g = !0;
        },
      },
      {
        key: 'endUpdate',
        value: function endUpdate(p) {
          this.f--,
            this.f === 0 &&
              (this._observable.reportChanges(),
              this.g && ((this.g = !1), this.emitter.fire(this._observable.get())));
        },
      },
    ]);
  })();
  function I(L, p) {
    return new q(L, p).emitter.event;
  }
  e.fromObservable = I;
  function yt(L) {
    return function (p, y, v) {
      var E = 0,
        O = !1;
      var D = {
        beginUpdate: function beginUpdate() {
          E++;
        },
        endUpdate: function endUpdate() {
          E--, E === 0 && (L.reportChanges(), O && ((O = !1), p.call(y)));
        },
        handlePossibleChange: function handlePossibleChange() {},
        handleChange: function handleChange() {
          O = !0;
        },
      };
      L.addObserver(D), L.reportChanges();
      var G = {
        dispose: function dispose() {
          L.removeObserver(D);
        },
      };
      return v instanceof Je ? v.add(G) : Array.isArray(v) && v.push(G), G;
    };
  }
  e.fromObservableLight = yt;
})(be || (be = {}));
var es =
    ((_j = /*#__PURE__*/ (function () {
      function j1(t) {
        _classCallCheck(this, j1);
        (this.listenerCount = 0),
          (this.invocationCount = 0),
          (this.elapsedOverall = 0),
          (this.durations = []),
          (this.name = ''.concat(t, '_').concat(j1.f++)),
          j1.all.add(this);
      }
      return _createClass(j1, [
        {
          key: 'start',
          value: function start(t) {
            (this.g = new Ki()), (this.listenerCount = t);
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
    (_j.all = new Set()),
    (_j.f = 0),
    _j),
  nn = -1,
  ns =
    ((_Qr = /*#__PURE__*/ (function () {
      function Qr(t, n) {
        var r =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : (Qr.f++).toString(16).padStart(3, '0');
        _classCallCheck(this, Qr);
        (this.j = t), (this.threshold = n), (this.name = r), (this.h = 0);
      }
      return _createClass(Qr, [
        {
          key: 'dispose',
          value: function dispose() {
            var _this$g;
            (_this$g = this.g) === null || _this$g === void 0 || _this$g.clear();
          },
        },
        {
          key: 'check',
          value: function check(t, n) {
            var _this11 = this;
            var r = this.threshold;
            if (r <= 0 || n < r) return;
            this.g || (this.g = new Map());
            var i = this.g.get(t.value) || 0;
            if ((this.g.set(t.value, i + 1), (this.h -= 1), this.h <= 0)) {
              this.h = r * 0.5;
              var _this$getMostFrequent = this.getMostFrequentStack(),
                _this$getMostFrequent2 = _slicedToArray(_this$getMostFrequent, 2),
                s = _this$getMostFrequent2[0],
                o = _this$getMostFrequent2[1],
                l = '['
                  .concat(this.name, '] potential listener LEAK detected, having ')
                  .concat(n, ' listeners already. MOST frequent listener (')
                  .concat(o, '):');
              console.warn(l), console.warn(s);
              var a = new rs(l, s);
              this.j(a);
            }
            return function () {
              var s = _this11.g.get(t.value) || 0;
              _this11.g.set(t.value, s - 1);
            };
          },
        },
        {
          key: 'getMostFrequentStack',
          value: function getMostFrequentStack() {
            if (!this.g) return;
            var t,
              n = 0;
            var _iterator27 = _createForOfIteratorHelper(this.g),
              _step27;
            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
                var _step27$value = _slicedToArray(_step27.value, 2),
                  r = _step27$value[0],
                  i = _step27$value[1];
                (!t || n < i) && ((t = [r, i]), (n = i));
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
    (_Qr.f = 1),
    _Qr),
  Ke = /*#__PURE__*/ (function () {
    function ti(t) {
      _classCallCheck(this, ti);
      this.value = t;
    }
    return _createClass(
      ti,
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
            return new ti((_t$stack = t.stack) !== null && _t$stack !== void 0 ? _t$stack : '');
          },
        },
      ],
    );
  })(),
  rs = /*#__PURE__*/ (function (_Error3) {
    function rs(e, t) {
      var _this12;
      _classCallCheck(this, rs);
      (_this12 = _callSuper(this, rs, [e])),
        (_this12.name = 'ListenerLeakError'),
        (_this12.stack = t);
      return _this12;
    }
    _inherits(rs, _Error3);
    return _createClass(rs);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  is = /*#__PURE__*/ (function (_Error4) {
    function is(e, t) {
      var _this13;
      _classCallCheck(this, is);
      (_this13 = _callSuper(this, is, [e])),
        (_this13.name = 'ListenerRefusalError'),
        (_this13.stack = t);
      return _this13;
    }
    _inherits(is, _Error4);
    return _createClass(is);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  ss = 0,
  ve = /*#__PURE__*/ _createClass(function ve(e) {
    _classCallCheck(this, ve);
    (this.value = e), (this.id = ss++);
  }),
  os = 2,
  ls = function ls(e, t) {
    if (e instanceof ve) t(e);
    else
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r && t(r);
      }
  },
  we;
if (Qi) {
  var _e5 = [];
  setInterval(function () {
    _e5.length !== 0 &&
      (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"),
      console.warn(_e5.join('\n')),
      (_e5.length = 0));
  }, 3e3),
    (we = new FinalizationRegistry(function (t) {
      typeof t == 'string' && _e5.push(t);
    }));
}
var at = /*#__PURE__*/ (function () {
    function at(e) {
      var _this$f, _e$onListenerError, _this$f$leakWarningTh, _this$f2, _this$f3, _this$f4;
      _classCallCheck(this, at);
      (this.z = 0),
        (this.f = e),
        (this.g =
          nn > 0 ||
          ((_this$f = this.f) !== null && _this$f !== void 0 && _this$f.leakWarningThreshold)
            ? new ns(
                (_e$onListenerError = e === null || e === void 0 ? void 0 : e.onListenerError) !==
                  null && _e$onListenerError !== void 0
                  ? _e$onListenerError
                  : fe,
                (_this$f$leakWarningTh =
                  (_this$f2 = this.f) === null || _this$f2 === void 0
                    ? void 0
                    : _this$f2.leakWarningThreshold) !== null && _this$f$leakWarningTh !== void 0
                  ? _this$f$leakWarningTh
                  : nn,
              )
            : void 0),
        (this.j =
          (_this$f3 = this.f) !== null && _this$f3 !== void 0 && _this$f3._profName
            ? new es(this.f._profName)
            : void 0),
        (this.w =
          (_this$f4 = this.f) === null || _this$f4 === void 0 ? void 0 : _this$f4.deliveryQueue);
    }
    return _createClass(at, [
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
              if (en) {
                var _e6 = this.u;
                queueMicrotask(function () {
                  ls(_e6, function (t) {
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
            _this14 = this;
          return (
            (_this$q = this.q) !== null && _this$q !== void 0
              ? _this$q
              : (this.q = function (e, t, n) {
                  var _this14$w,
                    _this14$f2,
                    _this14$f2$onWillAddF,
                    _this14$f3,
                    _this14$f3$onDidAddFi,
                    _this14$f4,
                    _this14$f4$onDidAddLi;
                  if (_this14.g && _this14.z > Math.pow(_this14.g.threshold, 2)) {
                    var _this14$g$getMostFreq, _this14$f;
                    var l = '['
                      .concat(
                        _this14.g.name,
                        '] REFUSES to accept new listeners because it exceeded its threshold by far (',
                      )
                      .concat(_this14.z, ' vs ')
                      .concat(_this14.g.threshold, ')');
                    console.warn(l);
                    var a =
                        (_this14$g$getMostFreq = _this14.g.getMostFrequentStack()) !== null &&
                        _this14$g$getMostFreq !== void 0
                          ? _this14$g$getMostFreq
                          : ['UNKNOWN stack', -1],
                      u = new is(
                        ''
                          .concat(l, '. HINT: Stack shows most frequent listener (')
                          .concat(a[1], '-times)'),
                        a[0],
                      );
                    return (
                      (
                        ((_this14$f = _this14.f) === null || _this14$f === void 0
                          ? void 0
                          : _this14$f.onListenerError) || fe
                      )(u),
                      Ut.None
                    );
                  }
                  if (_this14.m) return Ut.None;
                  t && (e = e.bind(t));
                  var r = new ve(e);
                  var i, s;
                  _this14.g &&
                    _this14.z >= Math.ceil(_this14.g.threshold * 0.2) &&
                    ((r.stack = Ke.create()), (i = _this14.g.check(r.stack, _this14.z + 1))),
                    en && (r.stack = s !== null && s !== void 0 ? s : Ke.create()),
                    _this14.u
                      ? _this14.u instanceof ve
                        ? ((_this14$w = _this14.w) !== null && _this14$w !== void 0
                            ? _this14$w
                            : (_this14.w = new as()),
                          (_this14.u = [_this14.u, r]))
                        : _this14.u.push(r)
                      : ((_this14$f2 = _this14.f) !== null &&
                          _this14$f2 !== void 0 &&
                          (_this14$f2$onWillAddF = _this14$f2.onWillAddFirstListener) !== null &&
                          _this14$f2$onWillAddF !== void 0 &&
                          _this14$f2$onWillAddF.call(_this14$f2, _this14),
                        (_this14.u = r),
                        (_this14$f3 = _this14.f) === null ||
                        _this14$f3 === void 0 ||
                        (_this14$f3$onDidAddFi = _this14$f3.onDidAddFirstListener) === null ||
                        _this14$f3$onDidAddFi === void 0
                          ? void 0
                          : _this14$f3$onDidAddFi.call(_this14$f3, _this14)),
                    (_this14$f4 = _this14.f) !== null &&
                      _this14$f4 !== void 0 &&
                      (_this14$f4$onDidAddLi = _this14$f4.onDidAddListener) !== null &&
                      _this14$f4$onDidAddLi !== void 0 &&
                      _this14$f4$onDidAddLi.call(_this14$f4, _this14),
                    _this14.z++;
                  var o = K1(function () {
                    var _we, _i5;
                    (_we = we) !== null && _we !== void 0 && _we.unregister(o),
                      (_i5 = i) !== null && _i5 !== void 0 && _i5(),
                      _this14.A(r);
                  });
                  if ((n instanceof Je ? n.add(o) : Array.isArray(n) && n.push(o), we)) {
                    var _a4$;
                    var _l4 = new Error().stack.split('\n').slice(2, 3).join('\n').trim(),
                      _a4 = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(_l4);
                    we.register(
                      o,
                      (_a4$ = _a4 === null || _a4 === void 0 ? void 0 : _a4[2]) !== null &&
                        _a4$ !== void 0
                        ? _a4$
                        : _l4,
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
            n = t.indexOf(e);
          if (n === -1)
            throw (
              (console.log('disposed?', this.m),
              console.log('size?', this.z),
              console.log('arr?', JSON.stringify(this.u)),
              new Error('Attempted to dispose unknown listener'))
            );
          this.z--, (t[n] = void 0);
          var r = this.w.current === this;
          if (this.z * os <= t.length) {
            var i = 0;
            for (var s = 0; s < t.length; s++)
              t[s]
                ? (t[i++] = t[s])
                : r && i < this.w.end && (this.w.end--, i < this.w.i && this.w.i--);
            t.length = i;
          }
        },
      },
      {
        key: 'B',
        value: function B(e, t) {
          var _this$f8;
          if (!e) return;
          var n =
            ((_this$f8 = this.f) === null || _this$f8 === void 0
              ? void 0
              : _this$f8.onListenerError) || fe;
          if (!n) {
            e.value(t);
            return;
          }
          try {
            e.value(t);
          } catch (r) {
            n(r);
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
            if (this.u instanceof ve) this.B(this.u, e);
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
  as = /*#__PURE__*/ (function () {
    function as() {
      _classCallCheck(this, as);
      (this.i = -1), (this.end = 0);
    }
    return _createClass(as, [
      {
        key: 'enqueue',
        value: function enqueue(e, t, n) {
          (this.i = 0), (this.end = n), (this.current = e), (this.value = t);
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
  rn = Object.freeze(function (e, t) {
    var n = setTimeout(e.bind(t), 0);
    return {
      dispose: function dispose() {
        clearTimeout(n);
      },
    };
  }),
  sn;
(function (e) {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof us
      ? !0
      : !n || _typeof(n) != 'object'
        ? !1
        : typeof n.isCancellationRequested == 'boolean' &&
          typeof n.onCancellationRequested == 'function';
  }
  (e.isCancellationToken = t),
    (e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: be.None })),
    (e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: rn }));
})(sn || (sn = {}));
var us = /*#__PURE__*/ (function () {
  function us() {
    _classCallCheck(this, us);
    (this.a = !1), (this.b = null);
  }
  return _createClass(us, [
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
        return this.a ? rn : (this.b || (this.b = new at()), this.b.event);
      },
    },
    {
      key: 'dispose',
      value: function dispose() {
        this.b && (this.b.dispose(), (this.b = null));
      },
    },
  ]);
})();
function hs(e) {
  return e;
}
var cs = /*#__PURE__*/ (function () {
  function cs(e, t) {
    _classCallCheck(this, cs);
    (this.a = void 0),
      (this.b = void 0),
      typeof e == 'function'
        ? ((this.c = e), (this.d = hs))
        : ((this.c = t), (this.d = e.getCacheKey));
  }
  return _createClass(cs, [
    {
      key: 'get',
      value: function get(e) {
        var t = this.d(e);
        return this.b !== t && ((this.b = t), (this.a = this.c(e))), this.a;
      },
    },
  ]);
})();
function fs(e) {
  return !e || typeof e != 'string' ? !0 : e.trim().length === 0;
}
function ds(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
}
function gs(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!e) throw new Error('Cannot create regex from empty string');
  t || (e = ds(e)),
    n.wholeWord &&
      (/\B/.test(e.charAt(0)) || (e = '\\b' + e),
      /\B/.test(e.charAt(e.length - 1)) || (e = e + '\\b'));
  var r = '';
  return (
    n.global && (r += 'g'),
    n.matchCase || (r += 'i'),
    n.multiline && (r += 'm'),
    n.unicode && (r += 'u'),
    new RegExp(e, r)
  );
}
function ms(e) {
  return e.split(/\r\n|\r|\n/);
}
function Qe(e) {
  for (var t = 0, n = e.length; t < n; t++) {
    var r = e.charCodeAt(t);
    if (r !== 32 && r !== 9) return t;
  }
  return -1;
}
function ps(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.length - 1;
  for (var n = t; n >= 0; n--) {
    var r = e.charCodeAt(n);
    if (r !== 32 && r !== 9) return n;
  }
  return -1;
}
function bs(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function vs(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; n < r && i < s; n++, i++) {
    var a = e.charCodeAt(n),
      u = t.charCodeAt(i);
    if (a < u) return -1;
    if (a > u) return 1;
  }
  var o = r - n,
    l = s - i;
  return o < l ? -1 : o > l ? 1 : 0;
}
function on(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; n < r && i < s; n++, i++) {
    var a = e.charCodeAt(n),
      u = t.charCodeAt(i);
    if (a === u) continue;
    if (a >= 128 || u >= 128) return vs(e.toLowerCase(), t.toLowerCase(), n, r, i, s);
    ln(a) && (a -= 32), ln(u) && (u -= 32);
    var c = a - u;
    if (c !== 0) return c;
  }
  var o = r - n,
    l = s - i;
  return o < l ? -1 : o > l ? 1 : 0;
}
function ln(e) {
  return e >= 97 && e <= 122;
}
function an(e) {
  return e >= 65 && e <= 90;
}
function ws(e, t) {
  return e.length === t.length && on(e, t) === 0;
}
function Cs(e, t) {
  var n = t.length;
  return t.length > e.length ? !1 : on(e, t, 0, n) === 0;
}
function t1(e) {
  return 55296 <= e && e <= 56319;
}
function e1(e) {
  return 56320 <= e && e <= 57343;
}
function un(e, t) {
  return ((e - 55296) << 10) + (t - 56320) + 65536;
}
function Ls(e, t, n) {
  var r = e.charCodeAt(n);
  if (t1(r) && n + 1 < t) {
    var i = e.charCodeAt(n + 1);
    if (e1(i)) return un(r, i);
  }
  return r;
}
var n1 = void 0;
function ys() {
  return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
}
function hn(e) {
  return n1 || (n1 = ys()), n1.test(e);
}
var Ns = /^[\t\n\r\x20-\x7E]*$/;
function As(e) {
  return Ns.test(e);
}
var Es = /[\u2028\u2029]/;
function cn(e) {
  return Es.test(e);
}
var $s = '\uFEFF';
function xs(e) {
  return !!(e && e.length > 0 && e.charCodeAt(0) === 65279);
}
var fn;
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
})(fn || (fn = {}));
var Qo =
  ((_se = /*#__PURE__*/ (function () {
    function se() {
      _classCallCheck(this, se);
      this.d = Ss();
    }
    return _createClass(
      se,
      [
        {
          key: 'getGraphemeBreakType',
          value: function getGraphemeBreakType(t) {
            if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
            if (t < 127) return 0;
            var n = this.d,
              r = n.length / 3;
            var i = 1;
            for (; i <= r; )
              if (t < n[3 * i]) i = 2 * i;
              else if (t > n[3 * i + 1]) i = 2 * i + 1;
              else return n[3 * i + 2];
            return 0;
          },
        },
      ],
      [
        {
          key: 'getInstance',
          value: function getInstance() {
            return se.c || (se.c = new se()), se.c;
          },
        },
      ],
    );
  })()),
  (_se.c = null),
  _se);
function Ss() {
  return JSON.parse(
    '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
  );
}
var dn;
(function (e) {
  (e[(e.zwj = 8205)] = 'zwj'),
    (e[(e.emojiVariantSelector = 65039)] = 'emojiVariantSelector'),
    (e[(e.enclosingKeyCap = 8419)] = 'enclosingKeyCap');
})(dn || (dn = {}));
var tl =
    ((_oe = /*#__PURE__*/ (function () {
      function oe(t) {
        _classCallCheck(this, oe);
        this.f = t;
      }
      return _createClass(
        oe,
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
              for (var n = 0; n < t.length; n++) {
                var r = t.codePointAt(n);
                if (typeof r == 'number' && this.isAmbiguous(r)) return !0;
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
              return oe.d.get(Array.from(t));
            },
          },
          {
            key: 'getLocales',
            value: function getLocales() {
              return oe.e.value;
            },
          },
        ],
      );
    })()),
    (_oe.c = new je(function () {
      return JSON.parse(
        '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
      );
    })),
    (_oe.d = new cs({ getCacheKey: JSON.stringify }, function (t) {
      function n(c) {
        var h = new Map();
        for (var f = 0; f < c.length; f += 2) h.set(c[f], c[f + 1]);
        return h;
      }
      function r(c, h) {
        var f = new Map(c);
        var _iterator28 = _createForOfIteratorHelper(h),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
            var _step28$value = _slicedToArray(_step28.value, 2),
              d = _step28$value[0],
              b = _step28$value[1];
            f.set(d, b);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
        return f;
      }
      function i(c, h) {
        if (!c) return h;
        var f = new Map();
        var _iterator29 = _createForOfIteratorHelper(c),
          _step29;
        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
            var _step29$value = _slicedToArray(_step29.value, 2),
              d = _step29$value[0],
              b = _step29$value[1];
            h.has(d) && f.set(d, b);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
        return f;
      }
      var s = _oe.c.value;
      var o = t.filter(function (c) {
        return !c.startsWith('_') && c in s;
      });
      o.length === 0 && (o = ['_default']);
      var l;
      var _iterator30 = _createForOfIteratorHelper(o),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
          var c = _step30.value;
          var h = n(s[c]);
          l = i(l, h);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
      var a = n(s._common),
        u = r(a, l);
      return new _oe(u);
    })),
    (_oe.e = new je(function () {
      return Object.keys(_oe.c.value).filter(function (t) {
        return !t.startsWith('_');
      });
    })),
    _oe),
  el =
    ((_le = /*#__PURE__*/ (function () {
      function le() {
        _classCallCheck(this, le);
      }
      return _createClass(le, null, [
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
            return this.d || (this.d = new Set(le.c())), this.d;
          },
        },
        {
          key: 'isInvisibleCharacter',
          value: function isInvisibleCharacter(t) {
            return le.e().has(t);
          },
        },
        {
          key: 'containsInvisibleCharacter',
          value: function containsInvisibleCharacter(t) {
            for (var n = 0; n < t.length; n++) {
              var r = t.codePointAt(n);
              if (typeof r == 'number' && le.isInvisibleCharacter(r)) return !0;
            }
            return !1;
          },
        },
        {
          key: 'codePoints',
          get: function get() {
            return le.e();
          },
        },
      ]);
    })()),
    (_le.d = void 0),
    _le);
function At(e, t) {
  switch (_typeof(e)) {
    case 'object':
      return e === null ? ut(349, t) : Array.isArray(e) ? _s(e, t) : Os(e, t);
    case 'string':
      return r1(e, t);
    case 'boolean':
      return Is(e, t);
    case 'number':
      return ut(e, t);
    case 'undefined':
      return ut(937, t);
    default:
      return ut(617, t);
  }
}
function ut(e, t) {
  return ((t << 5) - t + e) | 0;
}
function Is(e, t) {
  return ut(e ? 433 : 863, t);
}
function r1(e, t) {
  t = ut(149417, t);
  for (var n = 0, r = e.length; n < r; n++) t = ut(e.charCodeAt(n), t);
  return t;
}
function _s(e, t) {
  return (
    (t = ut(104579, t)),
    e.reduce(function (n, r) {
      return At(r, n);
    }, t)
  );
}
function Os(e, t) {
  return (
    (t = ut(181387, t)),
    Object.keys(e)
      .sort()
      .reduce(function (n, r) {
        return (n = r1(r, n)), At(e[r], n);
      }, t)
  );
}
var gn;
(function (e) {
  (e[(e.BLOCK_SIZE = 64)] = 'BLOCK_SIZE'),
    (e[(e.UNICODE_REPLACEMENT = 65533)] = 'UNICODE_REPLACEMENT');
})(gn || (gn = {}));
function i1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 32;
  var r = n - t,
    i = ~((1 << r) - 1);
  return ((e << t) | ((i & e) >>> r)) >>> 0;
}
function Jt(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
  return e instanceof ArrayBuffer
    ? Array.from(new Uint8Array(e))
        .map(function (n) {
          return n.toString(16).padStart(2, '0');
        })
        .join('')
    : (e >>> 0).toString(16).padStart(t / 4, '0');
}
var nl =
    ((_ei = /*#__PURE__*/ (function () {
      function ei() {
        _classCallCheck(this, ei);
        (this.h = 1732584193),
          (this.l = 4023233417),
          (this.m = 2562383102),
          (this.n = 271733878),
          (this.o = 3285377520),
          (this.p = new Uint8Array(67)),
          (this.q = new DataView(this.p.buffer)),
          (this.r = 0),
          (this.t = 0),
          (this.u = 0),
          (this.v = !1);
      }
      return _createClass(ei, [
        {
          key: 'update',
          value: function update(t) {
            var n = t.length;
            if (n === 0) return;
            var r = this.p;
            var i = this.r,
              s = this.u,
              o,
              l;
            for (s !== 0 ? ((o = s), (l = -1), (s = 0)) : ((o = t.charCodeAt(0)), (l = 0)); ; ) {
              var a = o;
              if (t1(o)) {
                if (l + 1 < n) {
                  var u = t.charCodeAt(l + 1);
                  e1(u) ? (l++, (a = un(o, u))) : (a = 65533);
                } else {
                  s = o;
                  break;
                }
              } else e1(o) && (a = 65533);
              if (((i = this.w(r, i, a)), l++, l < n)) o = t.charCodeAt(l);
              else break;
            }
            (this.r = i), (this.u = s);
          },
        },
        {
          key: 'w',
          value: function w(t, n, r) {
            return (
              r < 128
                ? (t[n++] = r)
                : r < 2048
                  ? ((t[n++] = 192 | ((r & 1984) >>> 6)), (t[n++] = 128 | ((r & 63) >>> 0)))
                  : r < 65536
                    ? ((t[n++] = 224 | ((r & 61440) >>> 12)),
                      (t[n++] = 128 | ((r & 4032) >>> 6)),
                      (t[n++] = 128 | ((r & 63) >>> 0)))
                    : ((t[n++] = 240 | ((r & 1835008) >>> 18)),
                      (t[n++] = 128 | ((r & 258048) >>> 12)),
                      (t[n++] = 128 | ((r & 4032) >>> 6)),
                      (t[n++] = 128 | ((r & 63) >>> 0))),
              n >= 64 &&
                (this.y(),
                (n -= 64),
                (this.t += 64),
                (t[0] = t[64]),
                (t[1] = t[65]),
                (t[2] = t[66])),
              n
            );
          },
        },
        {
          key: 'digest',
          value: function digest() {
            return (
              this.v ||
                ((this.v = !0),
                this.u && ((this.u = 0), (this.r = this.w(this.p, this.r, 65533))),
                (this.t += this.r),
                this.x()),
              Jt(this.h) + Jt(this.l) + Jt(this.m) + Jt(this.n) + Jt(this.o)
            );
          },
        },
        {
          key: 'x',
          value: function x() {
            (this.p[this.r++] = 128),
              this.p.subarray(this.r).fill(0),
              this.r > 56 && (this.y(), this.p.fill(0));
            var t = 8 * this.t;
            this.q.setUint32(56, Math.floor(t / 4294967296), !1),
              this.q.setUint32(60, t % 4294967296, !1),
              this.y();
          },
        },
        {
          key: 'y',
          value: function y() {
            var t = ei.g,
              n = this.q;
            for (var h = 0; h < 64; h += 4) t.setUint32(h, n.getUint32(h, !1), !1);
            for (var _h = 64; _h < 320; _h += 4)
              t.setUint32(
                _h,
                i1(
                  t.getUint32(_h - 12, !1) ^
                    t.getUint32(_h - 32, !1) ^
                    t.getUint32(_h - 56, !1) ^
                    t.getUint32(_h - 64, !1),
                  1,
                ),
                !1,
              );
            var r = this.h,
              i = this.l,
              s = this.m,
              o = this.n,
              l = this.o,
              a,
              u,
              c;
            for (var _h2 = 0; _h2 < 80; _h2++)
              _h2 < 20
                ? ((a = (i & s) | (~i & o)), (u = 1518500249))
                : _h2 < 40
                  ? ((a = i ^ s ^ o), (u = 1859775393))
                  : _h2 < 60
                    ? ((a = (i & s) | (i & o) | (s & o)), (u = 2400959708))
                    : ((a = i ^ s ^ o), (u = 3395469782)),
                (c = (i1(r, 5) + a + l + u + t.getUint32(_h2 * 4, !1)) & 4294967295),
                (l = o),
                (o = s),
                (s = i1(i, 30)),
                (i = r),
                (r = c);
            (this.h = (this.h + r) & 4294967295),
              (this.l = (this.l + i) & 4294967295),
              (this.m = (this.m + s) & 4294967295),
              (this.n = (this.n + o) & 4294967295),
              (this.o = (this.o + l) & 4294967295);
          },
        },
      ]);
    })()),
    (_ei.g = new DataView(new ArrayBuffer(320))),
    _ei),
  jt = /*#__PURE__*/ (function () {
    function jt() {
      _classCallCheck(this, jt);
    }
    return _createClass(jt, null, [
      {
        key: 'Assert',
        value: function Assert(e, t) {
          if (!e) throw new Error(t);
        },
      },
    ]);
  })(),
  zt = /*#__PURE__*/ (function () {
    function zt() {
      _classCallCheck(this, zt);
    }
    return _createClass(zt, null, [
      {
        key: 'Copy',
        value: function Copy(e, t, n, r, i) {
          for (var s = 0; s < i; s++) n[r + s] = e[t + s];
        },
      },
      {
        key: 'Copy2',
        value: function Copy2(e, t, n, r, i) {
          for (var s = 0; s < i; s++) n[r + s] = e[t + s];
        },
      },
    ]);
  })(),
  mn;
(function (e) {
  e[(e.MaxDifferencesHistory = 1447)] = 'MaxDifferencesHistory';
})(mn || (mn = {}));
var pn = /*#__PURE__*/ (function () {
    function pn() {
      _classCallCheck(this, pn);
      (this.a = []), (this.b = 1073741824), (this.c = 1073741824), (this.d = 0), (this.e = 0);
    }
    return _createClass(pn, [
      {
        key: 'MarkNextChange',
        value: function MarkNextChange() {
          (this.d > 0 || this.e > 0) && this.a.push(new Nt(this.b, this.d, this.c, this.e)),
            (this.d = 0),
            (this.e = 0),
            (this.b = 1073741824),
            (this.c = 1073741824);
        },
      },
      {
        key: 'AddOriginalElement',
        value: function AddOriginalElement(e, t) {
          (this.b = Math.min(this.b, e)), (this.c = Math.min(this.c, t)), this.d++;
        },
      },
      {
        key: 'AddModifiedElement',
        value: function AddModifiedElement(e, t) {
          (this.b = Math.min(this.b, e)), (this.c = Math.min(this.c, t)), this.e++;
        },
      },
      {
        key: 'getChanges',
        value: function getChanges() {
          return (this.d > 0 || this.e > 0) && this.MarkNextChange(), this.a;
        },
      },
      {
        key: 'getReverseChanges',
        value: function getReverseChanges() {
          return (this.d > 0 || this.e > 0) && this.MarkNextChange(), this.a.reverse(), this.a;
        },
      },
    ]);
  })(),
  Ms = /*#__PURE__*/ (function () {
    function Vt(t, n) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      _classCallCheck(this, Vt);
      (this.a = r), (this.b = t), (this.c = n);
      var _Vt$o = Vt.o(t),
        _Vt$o2 = _slicedToArray(_Vt$o, 3),
        i = _Vt$o2[0],
        s = _Vt$o2[1],
        o = _Vt$o2[2],
        _Vt$o3 = Vt.o(n),
        _Vt$o4 = _slicedToArray(_Vt$o3, 3),
        l = _Vt$o4[0],
        a = _Vt$o4[1],
        u = _Vt$o4[2];
      (this.d = o && u),
        (this.e = i),
        (this.f = s),
        (this.g = l),
        (this.h = a),
        (this.k = []),
        (this.m = []);
    }
    return _createClass(
      Vt,
      [
        {
          key: 'p',
          value: function p(t, n) {
            return this.f[t] !== this.h[n] ? !1 : this.d ? this.e[t] === this.g[n] : !0;
          },
        },
        {
          key: 'q',
          value: function q(t, n) {
            if (!this.p(t, n)) return !1;
            var r = Vt.r(this.b, t),
              i = Vt.r(this.c, n);
            return r === i;
          },
        },
        {
          key: 's',
          value: function s(t, n) {
            return this.f[t] !== this.f[n] ? !1 : this.d ? this.e[t] === this.e[n] : !0;
          },
        },
        {
          key: 'u',
          value: function u(t, n) {
            return this.h[t] !== this.h[n] ? !1 : this.d ? this.g[t] === this.g[n] : !0;
          },
        },
        {
          key: 'ComputeDiff',
          value: function ComputeDiff(t) {
            return this.v(0, this.f.length - 1, 0, this.h.length - 1, t);
          },
        },
        {
          key: 'v',
          value: function v(t, n, r, i, s) {
            var o = [!1];
            var l = this.w(t, n, r, i, o);
            return s && (l = this.z(l)), { quitEarly: o[0], changes: l };
          },
        },
        {
          key: 'w',
          value: function w(t, n, r, i, s) {
            for (s[0] = !1; t <= n && r <= i && this.p(t, r); ) t++, r++;
            for (; n >= t && i >= r && this.p(n, i); ) n--, i--;
            if (t > n || r > i) {
              var h;
              return (
                r <= i
                  ? (jt.Assert(
                      t === n + 1,
                      'originalStart should only be one more than originalEnd',
                    ),
                    (h = [new Nt(t, 0, r, i - r + 1)]))
                  : t <= n
                    ? (jt.Assert(
                        r === i + 1,
                        'modifiedStart should only be one more than modifiedEnd',
                      ),
                      (h = [new Nt(t, n - t + 1, r, 0)]))
                    : (jt.Assert(
                        t === n + 1,
                        'originalStart should only be one more than originalEnd',
                      ),
                      jt.Assert(
                        r === i + 1,
                        'modifiedStart should only be one more than modifiedEnd',
                      ),
                      (h = [])),
                h
              );
            }
            var o = [0],
              l = [0],
              a = this.y(t, n, r, i, o, l, s),
              u = o[0],
              c = l[0];
            if (a !== null) return a;
            if (!s[0]) {
              var _h3 = this.w(t, u, r, c, s);
              var f = [];
              return (
                s[0]
                  ? (f = [new Nt(u + 1, n - (u + 1) + 1, c + 1, i - (c + 1) + 1)])
                  : (f = this.w(u + 1, n, c + 1, i, s)),
                this.H(_h3, f)
              );
            }
            return [new Nt(t, n - t + 1, r, i - r + 1)];
          },
        },
        {
          key: 'x',
          value: function x(t, n, r, i, s, o, l, a, u, c, h, f, d, b, g, m, N, S) {
            var $ = null,
              C = null,
              A = new pn(),
              x = n,
              R = r,
              M = d[0] - m[0] - i,
              W = -1073741824,
              tt = this.k.length - 1;
            do {
              var q = M + t;
              q === x || (q < R && u[q - 1] < u[q + 1])
                ? ((h = u[q + 1]),
                  (b = h - M - i),
                  h < W && A.MarkNextChange(),
                  (W = h),
                  A.AddModifiedElement(h + 1, b),
                  (M = q + 1 - t))
                : ((h = u[q - 1] + 1),
                  (b = h - M - i),
                  h < W && A.MarkNextChange(),
                  (W = h - 1),
                  A.AddOriginalElement(h, b + 1),
                  (M = q - 1 - t)),
                tt >= 0 && ((u = this.k[tt]), (t = u[0]), (x = 1), (R = u.length - 1));
            } while (--tt >= -1);
            if ((($ = A.getReverseChanges()), S[0])) {
              var _q = d[0] + 1,
                I = m[0] + 1;
              if ($ !== null && $.length > 0) {
                var yt = $[$.length - 1];
                (_q = Math.max(_q, yt.getOriginalEnd())), (I = Math.max(I, yt.getModifiedEnd()));
              }
              C = [new Nt(_q, f - _q + 1, I, g - I + 1)];
            } else {
              (A = new pn()),
                (x = o),
                (R = l),
                (M = d[0] - m[0] - a),
                (W = 1073741824),
                (tt = N ? this.m.length - 1 : this.m.length - 2);
              do {
                var _q2 = M + s;
                _q2 === x || (_q2 < R && c[_q2 - 1] >= c[_q2 + 1])
                  ? ((h = c[_q2 + 1] - 1),
                    (b = h - M - a),
                    h > W && A.MarkNextChange(),
                    (W = h + 1),
                    A.AddOriginalElement(h + 1, b + 1),
                    (M = _q2 + 1 - s))
                  : ((h = c[_q2 - 1]),
                    (b = h - M - a),
                    h > W && A.MarkNextChange(),
                    (W = h),
                    A.AddModifiedElement(h + 1, b + 1),
                    (M = _q2 - 1 - s)),
                  tt >= 0 && ((c = this.m[tt]), (s = c[0]), (x = 1), (R = c.length - 1));
              } while (--tt >= -1);
              C = A.getChanges();
            }
            return this.H($, C);
          },
        },
        {
          key: 'y',
          value: function y(t, n, r, i, s, o, l) {
            var a = 0,
              u = 0,
              c = 0,
              h = 0,
              f = 0,
              d = 0;
            t--, r--, (s[0] = 0), (o[0] = 0), (this.k = []), (this.m = []);
            var b = n - t + (i - r),
              g = b + 1,
              m = new Int32Array(g),
              N = new Int32Array(g),
              S = i - r,
              $ = n - t,
              C = t - r,
              A = n - i,
              R = ($ - S) % 2 === 0;
            (m[S] = t), (N[$] = n), (l[0] = !1);
            for (var M = 1; M <= b / 2 + 1; M++) {
              var W = 0,
                tt = 0;
              (c = this.J(S - M, M, S, g)), (h = this.J(S + M, M, S, g));
              for (var I = c; I <= h; I += 2) {
                I === c || (I < h && m[I - 1] < m[I + 1]) ? (a = m[I + 1]) : (a = m[I - 1] + 1),
                  (u = a - (I - S) - C);
                var yt = a;
                for (; a < n && u < i && this.p(a + 1, u + 1); ) a++, u++;
                if (
                  ((m[I] = a),
                  a + u > W + tt && ((W = a), (tt = u)),
                  !R && Math.abs(I - $) <= M - 1 && a >= N[I])
                )
                  return (
                    (s[0] = a),
                    (o[0] = u),
                    yt <= N[I] && M <= 1448
                      ? this.x(S, c, h, C, $, f, d, A, m, N, a, n, s, u, i, o, R, l)
                      : null
                  );
              }
              var q = (W - t + (tt - r) - M) / 2;
              if (this.a !== null && !this.a(W, q))
                return (
                  (l[0] = !0),
                  (s[0] = W),
                  (o[0] = tt),
                  q > 0 && M <= 1448
                    ? this.x(S, c, h, C, $, f, d, A, m, N, a, n, s, u, i, o, R, l)
                    : (t++, r++, [new Nt(t, n - t + 1, r, i - r + 1)])
                );
              (f = this.J($ - M, M, $, g)), (d = this.J($ + M, M, $, g));
              for (var _I = f; _I <= d; _I += 2) {
                _I === f || (_I < d && N[_I - 1] >= N[_I + 1])
                  ? (a = N[_I + 1] - 1)
                  : (a = N[_I - 1]),
                  (u = a - (_I - $) - A);
                var _yt = a;
                for (; a > t && u > r && this.p(a, u); ) a--, u--;
                if (((N[_I] = a), R && Math.abs(_I - S) <= M && a <= m[_I]))
                  return (
                    (s[0] = a),
                    (o[0] = u),
                    _yt >= m[_I] && M <= 1448
                      ? this.x(S, c, h, C, $, f, d, A, m, N, a, n, s, u, i, o, R, l)
                      : null
                  );
              }
              if (M <= 1447) {
                var _I2 = new Int32Array(h - c + 2);
                (_I2[0] = S - c + 1),
                  zt.Copy2(m, c, _I2, 1, h - c + 1),
                  this.k.push(_I2),
                  (_I2 = new Int32Array(d - f + 2)),
                  (_I2[0] = $ - f + 1),
                  zt.Copy2(N, f, _I2, 1, d - f + 1),
                  this.m.push(_I2);
              }
            }
            return this.x(S, c, h, C, $, f, d, A, m, N, a, n, s, u, i, o, R, l);
          },
        },
        {
          key: 'z',
          value: function z(t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n],
                i = n < t.length - 1 ? t[n + 1].originalStart : this.f.length,
                s = n < t.length - 1 ? t[n + 1].modifiedStart : this.h.length,
                o = r.originalLength > 0,
                l = r.modifiedLength > 0;
              for (
                ;
                r.originalStart + r.originalLength < i &&
                r.modifiedStart + r.modifiedLength < s &&
                (!o || this.s(r.originalStart, r.originalStart + r.originalLength)) &&
                (!l || this.u(r.modifiedStart, r.modifiedStart + r.modifiedLength));

              ) {
                var u = this.q(r.originalStart, r.modifiedStart);
                if (
                  this.q(r.originalStart + r.originalLength, r.modifiedStart + r.modifiedLength) &&
                  !u
                )
                  break;
                r.originalStart++, r.modifiedStart++;
              }
              var a = [null];
              if (n < t.length - 1 && this.I(t[n], t[n + 1], a)) {
                (t[n] = a[0]), t.splice(n + 1, 1), n--;
                continue;
              }
            }
            for (var _n3 = t.length - 1; _n3 >= 0; _n3--) {
              var _r6 = t[_n3];
              var _i6 = 0,
                _s3 = 0;
              if (_n3 > 0) {
                var h = t[_n3 - 1];
                (_i6 = h.originalStart + h.originalLength),
                  (_s3 = h.modifiedStart + h.modifiedLength);
              }
              var _o3 = _r6.originalLength > 0,
                _l5 = _r6.modifiedLength > 0;
              var _a5 = 0,
                _u3 = this.G(
                  _r6.originalStart,
                  _r6.originalLength,
                  _r6.modifiedStart,
                  _r6.modifiedLength,
                );
              for (var _h4 = 1; ; _h4++) {
                var f = _r6.originalStart - _h4,
                  d = _r6.modifiedStart - _h4;
                if (
                  f < _i6 ||
                  d < _s3 ||
                  (_o3 && !this.s(f, f + _r6.originalLength)) ||
                  (_l5 && !this.u(d, d + _r6.modifiedLength))
                )
                  break;
                var g =
                  (f === _i6 && d === _s3 ? 5 : 0) +
                  this.G(f, _r6.originalLength, d, _r6.modifiedLength);
                g > _u3 && ((_u3 = g), (_a5 = _h4));
              }
              (_r6.originalStart -= _a5), (_r6.modifiedStart -= _a5);
              var c = [null];
              if (_n3 > 0 && this.I(t[_n3 - 1], t[_n3], c)) {
                (t[_n3 - 1] = c[0]), t.splice(_n3, 1), _n3++;
                continue;
              }
            }
            if (this.d)
              for (var _n4 = 1, _r7 = t.length; _n4 < _r7; _n4++) {
                var _i7 = t[_n4 - 1],
                  _s4 = t[_n4],
                  _o4 = _s4.originalStart - _i7.originalStart - _i7.originalLength,
                  _l6 = _i7.originalStart,
                  _a6 = _s4.originalStart + _s4.originalLength,
                  _u4 = _a6 - _l6,
                  _c3 = _i7.modifiedStart,
                  _h5 = _s4.modifiedStart + _s4.modifiedLength,
                  _f = _h5 - _c3;
                if (_o4 < 5 && _u4 < 20 && _f < 20) {
                  var _d = this.A(_l6, _u4, _c3, _f, _o4);
                  if (_d) {
                    var _d2 = _slicedToArray(_d, 2),
                      b = _d2[0],
                      _g = _d2[1];
                    (b !== _i7.originalStart + _i7.originalLength ||
                      _g !== _i7.modifiedStart + _i7.modifiedLength) &&
                      ((_i7.originalLength = b - _i7.originalStart),
                      (_i7.modifiedLength = _g - _i7.modifiedStart),
                      (_s4.originalStart = b + _o4),
                      (_s4.modifiedStart = _g + _o4),
                      (_s4.originalLength = _a6 - _s4.originalStart),
                      (_s4.modifiedLength = _h5 - _s4.modifiedStart));
                  }
                }
              }
            return t;
          },
        },
        {
          key: 'A',
          value: function A(t, n, r, i, s) {
            if (n < s || i < s) return null;
            var o = t + n - s + 1,
              l = r + i - s + 1;
            var a = 0,
              u = 0,
              c = 0;
            for (var h = t; h < o; h++)
              for (var f = r; f < l; f++) {
                var d = this.B(h, f, s);
                d > 0 && d > a && ((a = d), (u = h), (c = f));
              }
            return a > 0 ? [u, c] : null;
          },
        },
        {
          key: 'B',
          value: function B(t, n, r) {
            var i = 0;
            for (var s = 0; s < r; s++) {
              if (!this.p(t + s, n + s)) return 0;
              i += this.e[t + s].length;
            }
            return i;
          },
        },
        {
          key: 'C',
          value: function C(t) {
            return t <= 0 || t >= this.f.length - 1 ? !0 : this.d && /^\s*$/.test(this.e[t]);
          },
        },
        {
          key: 'D',
          value: function D(t, n) {
            if (this.C(t) || this.C(t - 1)) return !0;
            if (n > 0) {
              var r = t + n;
              if (this.C(r - 1) || this.C(r)) return !0;
            }
            return !1;
          },
        },
        {
          key: 'E',
          value: function E(t) {
            return t <= 0 || t >= this.h.length - 1 ? !0 : this.d && /^\s*$/.test(this.g[t]);
          },
        },
        {
          key: 'F',
          value: function F(t, n) {
            if (this.E(t) || this.E(t - 1)) return !0;
            if (n > 0) {
              var r = t + n;
              if (this.E(r - 1) || this.E(r)) return !0;
            }
            return !1;
          },
        },
        {
          key: 'G',
          value: function G(t, n, r, i) {
            var s = this.D(t, n) ? 1 : 0,
              o = this.F(r, i) ? 1 : 0;
            return s + o;
          },
        },
        {
          key: 'H',
          value: function H(t, n) {
            var r = [];
            if (t.length === 0 || n.length === 0) return n.length > 0 ? n : t;
            if (this.I(t[t.length - 1], n[0], r)) {
              var i = new Array(t.length + n.length - 1);
              return (
                zt.Copy(t, 0, i, 0, t.length - 1),
                (i[t.length - 1] = r[0]),
                zt.Copy(n, 1, i, t.length, n.length - 1),
                i
              );
            } else {
              var _i8 = new Array(t.length + n.length);
              return zt.Copy(t, 0, _i8, 0, t.length), zt.Copy(n, 0, _i8, t.length, n.length), _i8;
            }
          },
        },
        {
          key: 'I',
          value: function I(t, n, r) {
            if (
              (jt.Assert(
                t.originalStart <= n.originalStart,
                'Left change is not less than or equal to right change',
              ),
              jt.Assert(
                t.modifiedStart <= n.modifiedStart,
                'Left change is not less than or equal to right change',
              ),
              t.originalStart + t.originalLength >= n.originalStart ||
                t.modifiedStart + t.modifiedLength >= n.modifiedStart)
            ) {
              var i = t.originalStart;
              var s = t.originalLength;
              var o = t.modifiedStart;
              var l = t.modifiedLength;
              return (
                t.originalStart + t.originalLength >= n.originalStart &&
                  (s = n.originalStart + n.originalLength - t.originalStart),
                t.modifiedStart + t.modifiedLength >= n.modifiedStart &&
                  (l = n.modifiedStart + n.modifiedLength - t.modifiedStart),
                (r[0] = new Nt(i, s, o, l)),
                !0
              );
            } else return (r[0] = null), !1;
          },
        },
        {
          key: 'J',
          value: function J(t, n, r, i) {
            if (t >= 0 && t < i) return t;
            var s = r,
              o = i - r - 1,
              l = n % 2 === 0;
            if (t < 0) {
              var a = s % 2 === 0;
              return l === a ? 0 : 1;
            } else {
              var _a7 = o % 2 === 0;
              return l === _a7 ? i - 1 : i - 2;
            }
          },
        },
      ],
      [
        {
          key: 'n',
          value: function n(t) {
            return t.length > 0 && typeof t[0] == 'string';
          },
        },
        {
          key: 'o',
          value: function o(t) {
            var n = t.getElements();
            if (Vt.n(n)) {
              var r = new Int32Array(n.length);
              for (var i = 0, s = n.length; i < s; i++) r[i] = r1(n[i], 0);
              return [n, r, !0];
            }
            return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1];
          },
        },
        {
          key: 'r',
          value: function r(t, n) {
            return typeof t.getStrictElement == 'function' ? t.getStrictElement(n) : null;
          },
        },
      ],
    );
  })();
function Ps() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function bn() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var Rs =
  bn() === 'pseudo' ||
  ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) < 'u' &&
    document.location &&
    typeof document.location.hash == 'string' &&
    document.location.hash.indexOf('pseudo=true') >= 0);
function vn(e, t) {
  var n;
  return (
    t.length === 0
      ? (n = e)
      : (n = e.replace(/\{(\d+)\}/g, function (r, i) {
          var s = i[0],
            o = t[s];
          var l = r;
          return (
            typeof o == 'string'
              ? (l = o)
              : (typeof o == 'number' || typeof o == 'boolean' || o === void 0 || o === null) &&
                (l = String(o)),
            l
          );
        })),
    Rs && (n = '\uFF3B' + n.replace(/[aouei]/g, '$&$&') + '\uFF3D'),
    n
  );
}
function et(e, t) {
  for (
    var _len4 = arguments.length, n = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2;
    _key4 < _len4;
    _key4++
  ) {
    n[_key4 - 2] = arguments[_key4];
  }
  return vn(typeof e == 'number' ? Ds(e, t) : t, n);
}
function Ds(e, t) {
  var _Ps;
  var n = (_Ps = Ps()) === null || _Ps === void 0 ? void 0 : _Ps[e];
  if (typeof n != 'string') {
    if (typeof t == 'string') return t;
    throw new Error('!!! NLS MISSING: '.concat(e, ' !!!'));
  }
  return n;
}
var _t = 'en',
  Ce = !1,
  Le = !1,
  Yt = !1,
  ks = !1,
  wn = !1,
  s1 = !1,
  Fs = !1,
  qs = !1,
  Us = !1,
  js = !1,
  ye = void 0,
  Ne = _t,
  Cn = _t,
  zs = void 0,
  dt = void 0,
  gt = globalThis,
  st = void 0;
_typeof(gt.vscode) < 'u' && _typeof(gt.vscode.process) < 'u'
  ? (st = gt.vscode.process)
  : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) < 'u' &&
    typeof ((_process = process) === null ||
    _process === void 0 ||
    (_process = _process.versions) === null ||
    _process === void 0
      ? void 0
      : _process.node) == 'string' &&
    (st = process);
var Ln =
    typeof ((_st = st) === null || _st === void 0 || (_st = _st.versions) === null || _st === void 0
      ? void 0
      : _st.electron) == 'string',
  Bs = Ln && ((_st2 = st) === null || _st2 === void 0 ? void 0 : _st2.type) === 'renderer';
if (_typeof(st) == 'object') {
  (Ce = st.platform === 'win32'),
    (Le = st.platform === 'darwin'),
    (Yt = st.platform === 'linux'),
    (ks = Yt && !!st.env.SNAP && !!st.env.SNAP_REVISION),
    (Fs = Ln),
    (Us = !!st.env.CI || !!st.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
    (ye = _t),
    (Ne = _t);
  var _e7 = st.env.VSCODE_NLS_CONFIG;
  if (_e7)
    try {
      var _t$languagePack;
      var t = JSON.parse(_e7);
      (ye = t.userLocale),
        (Cn = t.osLocale),
        (Ne = t.resolvedLanguage || _t),
        (zs =
          (_t$languagePack = t.languagePack) === null || _t$languagePack === void 0
            ? void 0
            : _t$languagePack.translationsConfigFile);
    } catch (_unused3) {}
  wn = !0;
} else
  (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) == 'object' && !Bs
    ? ((dt = navigator.userAgent),
      (Ce = dt.indexOf('Windows') >= 0),
      (Le = dt.indexOf('Macintosh') >= 0),
      (qs =
        (dt.indexOf('Macintosh') >= 0 || dt.indexOf('iPad') >= 0 || dt.indexOf('iPhone') >= 0) &&
        !!navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 0),
      (Yt = dt.indexOf('Linux') >= 0),
      (js = ((_dt = dt) === null || _dt === void 0 ? void 0 : _dt.indexOf('Mobi')) >= 0),
      (s1 = !0),
      (Ne = bn() || _t),
      (ye = navigator.language.toLowerCase()),
      (Cn = ye))
    : console.error('Unable to resolve platform.');
var yn;
(function (e) {
  (e[(e.Web = 0)] = 'Web'),
    (e[(e.Mac = 1)] = 'Mac'),
    (e[(e.Linux = 2)] = 'Linux'),
    (e[(e.Windows = 3)] = 'Windows');
})(yn || (yn = {}));
var o1 = 0;
Le ? (o1 = 1) : Ce ? (o1 = 3) : Yt && (o1 = 2);
var Ot = Ce,
  l1 = Le,
  Nn = Yt,
  Ts = wn,
  a1 = s1,
  Ws = s1 && typeof gt.importScripts == 'function',
  Vs = Ws ? gt.origin : void 0,
  ft = dt,
  Et = Ne,
  An;
(function (e) {
  function t() {
    return Et;
  }
  e.value = t;
  function n() {
    return Et.length === 2
      ? Et === 'en'
      : Et.length >= 3
        ? Et[0] === 'e' && Et[1] === 'n' && Et[2] === '-'
        : !1;
  }
  e.isDefaultVariant = n;
  function r() {
    return Et === 'en';
  }
  e.isDefault = r;
})(An || (An = {}));
var Gs = typeof gt.postMessage == 'function' && !gt.importScripts,
  Hs = (function () {
    if (Gs) {
      var _e8 = [];
      gt.addEventListener('message', function (n) {
        if (n.data && n.data.vscodeScheduleAsyncWork)
          for (var r = 0, i = _e8.length; r < i; r++) {
            var s = _e8[r];
            if (s.id === n.data.vscodeScheduleAsyncWork) {
              _e8.splice(r, 1), s.callback();
              return;
            }
          }
      });
      var _t2 = 0;
      return function (n) {
        var r = ++_t2;
        _e8.push({ id: r, callback: n }), gt.postMessage({ vscodeScheduleAsyncWork: r }, '*');
      };
    }
    return function (e) {
      return setTimeout(e);
    };
  })(),
  En;
(function (e) {
  (e[(e.Windows = 1)] = 'Windows'),
    (e[(e.Macintosh = 2)] = 'Macintosh'),
    (e[(e.Linux = 3)] = 'Linux');
})(En || (En = {}));
var $n = !!(ft && ft.indexOf('Chrome') >= 0),
  Js = !!(ft && ft.indexOf('Firefox') >= 0),
  Ys = !!(!$n && ft && ft.indexOf('Safari') >= 0),
  Zs = !!(ft && ft.indexOf('Edg/') >= 0),
  rl = !!(ft && ft.indexOf('Android') >= 0),
  Mt,
  u1 = globalThis.vscode;
if (_typeof(u1) < 'u' && _typeof(u1.process) < 'u') {
  var _e9 = u1.process;
  Mt = {
    get platform() {
      return _e9.platform;
    },
    get arch() {
      return _e9.arch;
    },
    get env() {
      return _e9.env;
    },
    cwd: function cwd() {
      return _e9.cwd();
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
    ? (Mt = {
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
    : (Mt = {
        get platform() {
          return Ot ? 'win32' : l1 ? 'darwin' : 'linux';
        },
        get arch() {},
        get env() {
          return {};
        },
        cwd: function cwd() {
          return '/';
        },
      });
var Ae = Mt.cwd,
  Xs = Mt.env,
  Ks = Mt.platform,
  il = Mt.arch,
  Qs = 65,
  t0 = 97,
  e0 = 90,
  n0 = 122,
  $t = 46,
  H = 47,
  nt = 92,
  xt = 58,
  r0 = 63,
  xn = /*#__PURE__*/ (function (_Error5) {
    function xn(e, t, n) {
      var _this15;
      _classCallCheck(this, xn);
      var r;
      typeof t == 'string' && t.indexOf('not ') === 0
        ? ((r = 'must not be'), (t = t.replace(/^not /, '')))
        : (r = 'must be');
      var i = e.indexOf('.') !== -1 ? 'property' : 'argument';
      var s = 'The "'.concat(e, '" ').concat(i, ' ').concat(r, ' of type ').concat(t);
      (s += '. Received type '.concat(_typeof(n))),
        (_this15 = _callSuper(this, xn, [s])),
        (_this15.code = 'ERR_INVALID_ARG_TYPE');
      return _this15;
    }
    _inherits(xn, _Error5);
    return _createClass(xn);
  })(/*#__PURE__*/ _wrapNativeSuper(Error));
function i0(e, t) {
  if (e === null || _typeof(e) != 'object') throw new xn(t, 'Object', e);
}
function B(e, t) {
  if (typeof e != 'string') throw new xn(t, 'string', e);
}
var rt = Ks === 'win32';
function _(e) {
  return e === H || e === nt;
}
function h1(e) {
  return e === H;
}
function St(e) {
  return (e >= Qs && e <= e0) || (e >= t0 && e <= n0);
}
function Ee(e, t, n, r) {
  var i = '',
    s = 0,
    o = -1,
    l = 0,
    a = 0;
  for (var u = 0; u <= e.length; ++u) {
    if (u < e.length) a = e.charCodeAt(u);
    else {
      if (r(a)) break;
      a = H;
    }
    if (r(a)) {
      if (!(o === u - 1 || l === 1))
        if (l === 2) {
          if (
            i.length < 2 ||
            s !== 2 ||
            i.charCodeAt(i.length - 1) !== $t ||
            i.charCodeAt(i.length - 2) !== $t
          ) {
            if (i.length > 2) {
              var c = i.lastIndexOf(n);
              c === -1
                ? ((i = ''), (s = 0))
                : ((i = i.slice(0, c)), (s = i.length - 1 - i.lastIndexOf(n))),
                (o = u),
                (l = 0);
              continue;
            } else if (i.length !== 0) {
              (i = ''), (s = 0), (o = u), (l = 0);
              continue;
            }
          }
          t && ((i += i.length > 0 ? ''.concat(n, '..') : '..'), (s = 2));
        } else
          i.length > 0 ? (i += ''.concat(n).concat(e.slice(o + 1, u))) : (i = e.slice(o + 1, u)),
            (s = u - o - 1);
      (o = u), (l = 0);
    } else a === $t && l !== -1 ? ++l : (l = -1);
  }
  return i;
}
function s0(e) {
  return e ? ''.concat(e[0] === '.' ? '' : '.').concat(e) : '';
}
function Sn(e, t) {
  i0(t, 'pathObject');
  var n = t.dir || t.root,
    r = t.base || ''.concat(t.name || '').concat(s0(t.ext));
  return n ? (n === t.root ? ''.concat(n).concat(r) : ''.concat(n).concat(e).concat(r)) : r;
}
var T = {
    resolve: function resolve() {
      var t = '',
        n = '',
        r = !1;
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }
      for (var i = e.length - 1; i >= -1; i--) {
        var s = void 0;
        if (i >= 0) {
          if (((s = e[i]), B(s, 'paths['.concat(i, ']')), s.length === 0)) continue;
        } else
          t.length === 0
            ? (s = Ae())
            : ((s = Xs['='.concat(t)] || Ae()),
              (s === void 0 ||
                (s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === nt)) &&
                (s = ''.concat(t, '\\')));
        var o = s.length;
        var l = 0,
          a = '',
          u = !1;
        var c = s.charCodeAt(0);
        if (o === 1) _(c) && ((l = 1), (u = !0));
        else if (_(c)) {
          if (((u = !0), _(s.charCodeAt(1)))) {
            var h = 2,
              f = h;
            for (; h < o && !_(s.charCodeAt(h)); ) h++;
            if (h < o && h !== f) {
              var d = s.slice(f, h);
              for (f = h; h < o && _(s.charCodeAt(h)); ) h++;
              if (h < o && h !== f) {
                for (f = h; h < o && !_(s.charCodeAt(h)); ) h++;
                (h === o || h !== f) &&
                  ((a = '\\\\'.concat(d, '\\').concat(s.slice(f, h))), (l = h));
              }
            }
          } else l = 1;
        } else
          St(c) &&
            s.charCodeAt(1) === xt &&
            ((a = s.slice(0, 2)), (l = 2), o > 2 && _(s.charCodeAt(2)) && ((u = !0), (l = 3)));
        if (a.length > 0)
          if (t.length > 0) {
            if (a.toLowerCase() !== t.toLowerCase()) continue;
          } else t = a;
        if (r) {
          if (t.length > 0) break;
        } else if (((n = ''.concat(s.slice(l), '\\').concat(n)), (r = u), u && t.length > 0)) break;
      }
      return (
        (n = Ee(n, !r, '\\', _)), r ? ''.concat(t, '\\').concat(n) : ''.concat(t).concat(n) || '.'
      );
    },
    normalize: function normalize(e) {
      B(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var n = 0,
        r,
        i = !1;
      var s = e.charCodeAt(0);
      if (t === 1) return h1(s) ? '\\' : e;
      if (_(s)) {
        if (((i = !0), _(e.charCodeAt(1)))) {
          var l = 2,
            a = l;
          for (; l < t && !_(e.charCodeAt(l)); ) l++;
          if (l < t && l !== a) {
            var u = e.slice(a, l);
            for (a = l; l < t && _(e.charCodeAt(l)); ) l++;
            if (l < t && l !== a) {
              for (a = l; l < t && !_(e.charCodeAt(l)); ) l++;
              if (l === t) return '\\\\'.concat(u, '\\').concat(e.slice(a), '\\');
              l !== a && ((r = '\\\\'.concat(u, '\\').concat(e.slice(a, l))), (n = l));
            }
          }
        } else n = 1;
      } else
        St(s) &&
          e.charCodeAt(1) === xt &&
          ((r = e.slice(0, 2)), (n = 2), t > 2 && _(e.charCodeAt(2)) && ((i = !0), (n = 3)));
      var o = n < t ? Ee(e.slice(n), !i, '\\', _) : '';
      return (
        o.length === 0 && !i && (o = '.'),
        o.length > 0 && _(e.charCodeAt(t - 1)) && (o += '\\'),
        r === void 0
          ? i
            ? '\\'.concat(o)
            : o
          : i
            ? ''.concat(r, '\\').concat(o)
            : ''.concat(r).concat(o)
      );
    },
    isAbsolute: function isAbsolute(e) {
      B(e, 'path');
      var t = e.length;
      if (t === 0) return !1;
      var n = e.charCodeAt(0);
      return _(n) || (t > 2 && St(n) && e.charCodeAt(1) === xt && _(e.charCodeAt(2)));
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t, n;
      for (var s = 0; s < arguments.length; ++s) {
        var o = s < 0 || arguments.length <= s ? undefined : arguments[s];
        B(o, 'path'), o.length > 0 && (t === void 0 ? (t = n = o) : (t += '\\'.concat(o)));
      }
      if (t === void 0) return '.';
      var r = !0,
        i = 0;
      if (typeof n == 'string' && _(n.charCodeAt(0))) {
        ++i;
        var _s5 = n.length;
        _s5 > 1 && _(n.charCodeAt(1)) && (++i, _s5 > 2 && (_(n.charCodeAt(2)) ? ++i : (r = !1)));
      }
      if (r) {
        for (; i < t.length && _(t.charCodeAt(i)); ) i++;
        i >= 2 && (t = '\\'.concat(t.slice(i)));
      }
      return T.normalize(t);
    },
    relative: function relative(e, t) {
      if ((B(e, 'from'), B(t, 'to'), e === t)) return '';
      var n = T.resolve(e),
        r = T.resolve(t);
      if (n === r || ((e = n.toLowerCase()), (t = r.toLowerCase()), e === t)) return '';
      var i = 0;
      for (; i < e.length && e.charCodeAt(i) === nt; ) i++;
      var s = e.length;
      for (; s - 1 > i && e.charCodeAt(s - 1) === nt; ) s--;
      var o = s - i;
      var l = 0;
      for (; l < t.length && t.charCodeAt(l) === nt; ) l++;
      var a = t.length;
      for (; a - 1 > l && t.charCodeAt(a - 1) === nt; ) a--;
      var u = a - l,
        c = o < u ? o : u;
      var h = -1,
        f = 0;
      for (; f < c; f++) {
        var b = e.charCodeAt(i + f);
        if (b !== t.charCodeAt(l + f)) break;
        b === nt && (h = f);
      }
      if (f !== c) {
        if (h === -1) return r;
      } else {
        if (u > c) {
          if (t.charCodeAt(l + f) === nt) return r.slice(l + f + 1);
          if (f === 2) return r.slice(l + f);
        }
        o > c && (e.charCodeAt(i + f) === nt ? (h = f) : f === 2 && (h = 3)), h === -1 && (h = 0);
      }
      var d = '';
      for (f = i + h + 1; f <= s; ++f)
        (f === s || e.charCodeAt(f) === nt) && (d += d.length === 0 ? '..' : '\\..');
      return (
        (l += h),
        d.length > 0
          ? ''.concat(d).concat(r.slice(l, a))
          : (r.charCodeAt(l) === nt && ++l, r.slice(l, a))
      );
    },
    toNamespacedPath: function toNamespacedPath(e) {
      if (typeof e != 'string' || e.length === 0) return e;
      var t = T.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === nt) {
        if (t.charCodeAt(1) === nt) {
          var n = t.charCodeAt(2);
          if (n !== r0 && n !== $t) return '\\\\?\\UNC\\'.concat(t.slice(2));
        }
      } else if (St(t.charCodeAt(0)) && t.charCodeAt(1) === xt && t.charCodeAt(2) === nt)
        return '\\\\?\\'.concat(t);
      return e;
    },
    dirname: function dirname(e) {
      B(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var n = -1,
        r = 0;
      var i = e.charCodeAt(0);
      if (t === 1) return _(i) ? e : '.';
      if (_(i)) {
        if (((n = r = 1), _(e.charCodeAt(1)))) {
          var l = 2,
            a = l;
          for (; l < t && !_(e.charCodeAt(l)); ) l++;
          if (l < t && l !== a) {
            for (a = l; l < t && _(e.charCodeAt(l)); ) l++;
            if (l < t && l !== a) {
              for (a = l; l < t && !_(e.charCodeAt(l)); ) l++;
              if (l === t) return e;
              l !== a && (n = r = l + 1);
            }
          }
        }
      } else
        St(i) && e.charCodeAt(1) === xt && ((n = t > 2 && _(e.charCodeAt(2)) ? 3 : 2), (r = n));
      var s = -1,
        o = !0;
      for (var _l7 = t - 1; _l7 >= r; --_l7)
        if (_(e.charCodeAt(_l7))) {
          if (!o) {
            s = _l7;
            break;
          }
        } else o = !1;
      if (s === -1) {
        if (n === -1) return '.';
        s = n;
      }
      return e.slice(0, s);
    },
    basename: function basename(e, t) {
      t !== void 0 && B(t, 'suffix'), B(e, 'path');
      var n = 0,
        r = -1,
        i = !0,
        s;
      if (
        (e.length >= 2 && St(e.charCodeAt(0)) && e.charCodeAt(1) === xt && (n = 2),
        t !== void 0 && t.length > 0 && t.length <= e.length)
      ) {
        if (t === e) return '';
        var o = t.length - 1,
          l = -1;
        for (s = e.length - 1; s >= n; --s) {
          var a = e.charCodeAt(s);
          if (_(a)) {
            if (!i) {
              n = s + 1;
              break;
            }
          } else
            l === -1 && ((i = !1), (l = s + 1)),
              o >= 0 && (a === t.charCodeAt(o) ? --o === -1 && (r = s) : ((o = -1), (r = l)));
        }
        return n === r ? (r = l) : r === -1 && (r = e.length), e.slice(n, r);
      }
      for (s = e.length - 1; s >= n; --s)
        if (_(e.charCodeAt(s))) {
          if (!i) {
            n = s + 1;
            break;
          }
        } else r === -1 && ((i = !1), (r = s + 1));
      return r === -1 ? '' : e.slice(n, r);
    },
    extname: function extname(e) {
      B(e, 'path');
      var t = 0,
        n = -1,
        r = 0,
        i = -1,
        s = !0,
        o = 0;
      e.length >= 2 && e.charCodeAt(1) === xt && St(e.charCodeAt(0)) && (t = r = 2);
      for (var l = e.length - 1; l >= t; --l) {
        var a = e.charCodeAt(l);
        if (_(a)) {
          if (!s) {
            r = l + 1;
            break;
          }
          continue;
        }
        i === -1 && ((s = !1), (i = l + 1)),
          a === $t ? (n === -1 ? (n = l) : o !== 1 && (o = 1)) : n !== -1 && (o = -1);
      }
      return n === -1 || i === -1 || o === 0 || (o === 1 && n === i - 1 && n === r + 1)
        ? ''
        : e.slice(n, i);
    },
    format: Sn.bind(null, '\\'),
    parse: function parse(e) {
      B(e, 'path');
      var t = { root: '', dir: '', base: '', ext: '', name: '' };
      if (e.length === 0) return t;
      var n = e.length;
      var r = 0,
        i = e.charCodeAt(0);
      if (n === 1) return _(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
      if (_(i)) {
        if (((r = 1), _(e.charCodeAt(1)))) {
          var h = 2,
            f = h;
          for (; h < n && !_(e.charCodeAt(h)); ) h++;
          if (h < n && h !== f) {
            for (f = h; h < n && _(e.charCodeAt(h)); ) h++;
            if (h < n && h !== f) {
              for (f = h; h < n && !_(e.charCodeAt(h)); ) h++;
              h === n ? (r = h) : h !== f && (r = h + 1);
            }
          }
        }
      } else if (St(i) && e.charCodeAt(1) === xt) {
        if (n <= 2) return (t.root = t.dir = e), t;
        if (((r = 2), _(e.charCodeAt(2)))) {
          if (n === 3) return (t.root = t.dir = e), t;
          r = 3;
        }
      }
      r > 0 && (t.root = e.slice(0, r));
      var s = -1,
        o = r,
        l = -1,
        a = !0,
        u = e.length - 1,
        c = 0;
      for (; u >= r; --u) {
        if (((i = e.charCodeAt(u)), _(i))) {
          if (!a) {
            o = u + 1;
            break;
          }
          continue;
        }
        l === -1 && ((a = !1), (l = u + 1)),
          i === $t ? (s === -1 ? (s = u) : c !== 1 && (c = 1)) : s !== -1 && (c = -1);
      }
      return (
        l !== -1 &&
          (s === -1 || c === 0 || (c === 1 && s === l - 1 && s === o + 1)
            ? (t.base = t.name = e.slice(o, l))
            : ((t.name = e.slice(o, s)), (t.base = e.slice(o, l)), (t.ext = e.slice(s, l)))),
        o > 0 && o !== r ? (t.dir = e.slice(0, o - 1)) : (t.dir = t.root),
        t
      );
    },
    sep: '\\',
    delimiter: ';',
    win32: null,
    posix: null,
  },
  o0 = (function () {
    if (rt) {
      var _e0 = /\\/g;
      return function () {
        var t = Ae().replace(_e0, '/');
        return t.slice(t.indexOf('/'));
      };
    }
    return function () {
      return Ae();
    };
  })(),
  k = {
    resolve: function resolve() {
      var t = '',
        n = !1;
      for (var r = arguments.length - 1; r >= -1 && !n; r--) {
        var i = r >= 0 ? (r < 0 || arguments.length <= r ? undefined : arguments[r]) : o0();
        B(i, 'paths['.concat(r, ']')),
          i.length !== 0 && ((t = ''.concat(i, '/').concat(t)), (n = i.charCodeAt(0) === H));
      }
      return (t = Ee(t, !n, '/', h1)), n ? '/'.concat(t) : t.length > 0 ? t : '.';
    },
    normalize: function normalize(e) {
      if ((B(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === H,
        n = e.charCodeAt(e.length - 1) === H;
      return (
        (e = Ee(e, !t, '/', h1)),
        e.length === 0 ? (t ? '/' : n ? './' : '.') : (n && (e += '/'), t ? '/'.concat(e) : e)
      );
    },
    isAbsolute: function isAbsolute(e) {
      return B(e, 'path'), e.length > 0 && e.charCodeAt(0) === H;
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t;
      for (var n = 0; n < arguments.length; ++n) {
        var r = n < 0 || arguments.length <= n ? undefined : arguments[n];
        B(r, 'path'), r.length > 0 && (t === void 0 ? (t = r) : (t += '/'.concat(r)));
      }
      return t === void 0 ? '.' : k.normalize(t);
    },
    relative: function relative(e, t) {
      if ((B(e, 'from'), B(t, 'to'), e === t || ((e = k.resolve(e)), (t = k.resolve(t)), e === t)))
        return '';
      var n = 1,
        r = e.length,
        i = r - n,
        s = 1,
        o = t.length - s,
        l = i < o ? i : o;
      var a = -1,
        u = 0;
      for (; u < l; u++) {
        var h = e.charCodeAt(n + u);
        if (h !== t.charCodeAt(s + u)) break;
        h === H && (a = u);
      }
      if (u === l)
        if (o > l) {
          if (t.charCodeAt(s + u) === H) return t.slice(s + u + 1);
          if (u === 0) return t.slice(s + u);
        } else i > l && (e.charCodeAt(n + u) === H ? (a = u) : u === 0 && (a = 0));
      var c = '';
      for (u = n + a + 1; u <= r; ++u)
        (u === r || e.charCodeAt(u) === H) && (c += c.length === 0 ? '..' : '/..');
      return ''.concat(c).concat(t.slice(s + a));
    },
    toNamespacedPath: function toNamespacedPath(e) {
      return e;
    },
    dirname: function dirname(e) {
      if ((B(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === H;
      var n = -1,
        r = !0;
      for (var i = e.length - 1; i >= 1; --i)
        if (e.charCodeAt(i) === H) {
          if (!r) {
            n = i;
            break;
          }
        } else r = !1;
      return n === -1 ? (t ? '/' : '.') : t && n === 1 ? '//' : e.slice(0, n);
    },
    basename: function basename(e, t) {
      t !== void 0 && B(t, 'ext'), B(e, 'path');
      var n = 0,
        r = -1,
        i = !0,
        s;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return '';
        var o = t.length - 1,
          l = -1;
        for (s = e.length - 1; s >= 0; --s) {
          var a = e.charCodeAt(s);
          if (a === H) {
            if (!i) {
              n = s + 1;
              break;
            }
          } else
            l === -1 && ((i = !1), (l = s + 1)),
              o >= 0 && (a === t.charCodeAt(o) ? --o === -1 && (r = s) : ((o = -1), (r = l)));
        }
        return n === r ? (r = l) : r === -1 && (r = e.length), e.slice(n, r);
      }
      for (s = e.length - 1; s >= 0; --s)
        if (e.charCodeAt(s) === H) {
          if (!i) {
            n = s + 1;
            break;
          }
        } else r === -1 && ((i = !1), (r = s + 1));
      return r === -1 ? '' : e.slice(n, r);
    },
    extname: function extname(e) {
      B(e, 'path');
      var t = -1,
        n = 0,
        r = -1,
        i = !0,
        s = 0;
      for (var o = e.length - 1; o >= 0; --o) {
        var l = e.charCodeAt(o);
        if (l === H) {
          if (!i) {
            n = o + 1;
            break;
          }
          continue;
        }
        r === -1 && ((i = !1), (r = o + 1)),
          l === $t ? (t === -1 ? (t = o) : s !== 1 && (s = 1)) : t !== -1 && (s = -1);
      }
      return t === -1 || r === -1 || s === 0 || (s === 1 && t === r - 1 && t === n + 1)
        ? ''
        : e.slice(t, r);
    },
    format: Sn.bind(null, '/'),
    parse: function parse(e) {
      B(e, 'path');
      var t = { root: '', dir: '', base: '', ext: '', name: '' };
      if (e.length === 0) return t;
      var n = e.charCodeAt(0) === H;
      var r;
      n ? ((t.root = '/'), (r = 1)) : (r = 0);
      var i = -1,
        s = 0,
        o = -1,
        l = !0,
        a = e.length - 1,
        u = 0;
      for (; a >= r; --a) {
        var c = e.charCodeAt(a);
        if (c === H) {
          if (!l) {
            s = a + 1;
            break;
          }
          continue;
        }
        o === -1 && ((l = !1), (o = a + 1)),
          c === $t ? (i === -1 ? (i = a) : u !== 1 && (u = 1)) : i !== -1 && (u = -1);
      }
      if (o !== -1) {
        var _c4 = s === 0 && n ? 1 : s;
        i === -1 || u === 0 || (u === 1 && i === o - 1 && i === s + 1)
          ? (t.base = t.name = e.slice(_c4, o))
          : ((t.name = e.slice(_c4, i)), (t.base = e.slice(_c4, o)), (t.ext = e.slice(i, o)));
      }
      return s > 0 ? (t.dir = e.slice(0, s - 1)) : n && (t.dir = '/'), t;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  };
(k.win32 = T.win32 = T), (k.posix = T.posix = k);
var l0 = rt ? T.normalize : k.normalize,
  sl = rt ? T.isAbsolute : k.isAbsolute,
  a0 = rt ? T.join : k.join,
  u0 = rt ? T.resolve : k.resolve,
  h0 = rt ? T.relative : k.relative,
  c0 = rt ? T.dirname : k.dirname,
  ol = rt ? T.basename : k.basename,
  ll = rt ? T.extname : k.extname,
  al = rt ? T.format : k.format,
  ul = rt ? T.parse : k.parse,
  hl = rt ? T.toNamespacedPath : k.toNamespacedPath,
  $e = rt ? T.sep : k.sep,
  cl = rt ? T.delimiter : k.delimiter,
  f0 = /^\w[\w\d+.-]*$/,
  d0 = /^\//,
  g0 = /^\/\//;
function m0(e, t) {
  if (!e.scheme && t)
    throw new Error(
      '[UriError]: Scheme is missing: {scheme: "", authority: "'
        .concat(e.authority, '", path: "')
        .concat(e.path, '", query: "')
        .concat(e.query, '", fragment: "')
        .concat(e.fragment, '"}'),
    );
  if (e.scheme && !f0.test(e.scheme))
    throw new Error('[UriError]: Scheme contains illegal characters.');
  if (e.path) {
    if (e.authority) {
      if (!d0.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
        );
    } else if (g0.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
      );
  }
}
function p0(e, t) {
  return !e && !t ? 'file' : e;
}
function b0(e, t) {
  switch (e) {
    case 'https':
    case 'http':
    case 'file':
      t ? t[0] !== ht && (t = ht + t) : (t = ht);
      break;
  }
  return t;
}
var U = '',
  ht = '/',
  v0 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
  X = /*#__PURE__*/ (function () {
    function Re(t, n, r, i, s) {
      var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      _classCallCheck(this, Re);
      _typeof(t) == 'object'
        ? ((this.scheme = t.scheme || U),
          (this.authority = t.authority || U),
          (this.path = t.path || U),
          (this.query = t.query || U),
          (this.fragment = t.fragment || U))
        : ((this.scheme = p0(t, o)),
          (this.authority = n || U),
          (this.path = b0(this.scheme, r || U)),
          (this.query = i || U),
          (this.fragment = s || U),
          m0(this, o));
    }
    return _createClass(
      Re,
      [
        {
          key: 'fsPath',
          get: function get() {
            return xe(this, !1);
          },
        },
        {
          key: 'with',
          value: function _with(t) {
            if (!t) return this;
            var n = t.scheme,
              r = t.authority,
              i = t.path,
              s = t.query,
              o = t.fragment;
            return (
              n === void 0 ? (n = this.scheme) : n === null && (n = U),
              r === void 0 ? (r = this.authority) : r === null && (r = U),
              i === void 0 ? (i = this.path) : i === null && (i = U),
              s === void 0 ? (s = this.query) : s === null && (s = U),
              o === void 0 ? (o = this.fragment) : o === null && (o = U),
              n === this.scheme &&
              r === this.authority &&
              i === this.path &&
              s === this.query &&
              o === this.fragment
                ? this
                : new Bt(n, r, i, s, o)
            );
          },
        },
        {
          key: 'toString',
          value: function toString() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            return c1(this, t);
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
            return t instanceof Re
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
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var r = v0.exec(t);
            return r
              ? new Bt(r[2] || U, Se(r[4] || U), Se(r[5] || U), Se(r[7] || U), Se(r[9] || U), n)
              : new Bt(U, U, U, U, U);
          },
        },
        {
          key: 'file',
          value: function file(t) {
            var n = U;
            if ((Ot && (t = t.replace(/\\/g, ht)), t[0] === ht && t[1] === ht)) {
              var r = t.indexOf(ht, 2);
              r === -1
                ? ((n = t.substring(2)), (t = ht))
                : ((n = t.substring(2, r)), (t = t.substring(r) || ht));
            }
            return new Bt('file', n, t, U, U);
          },
        },
        {
          key: 'from',
          value: function from(t, n) {
            return new Bt(t.scheme, t.authority, t.path, t.query, t.fragment, n);
          },
        },
        {
          key: 'joinPath',
          value: function joinPath(t) {
            if (!t.path) throw new Error('[UriError]: cannot call joinPath on URI without path');
            var r;
            for (
              var _len6 = arguments.length, n = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1;
              _key6 < _len6;
              _key6++
            ) {
              n[_key6 - 1] = arguments[_key6];
            }
            return (
              Ot && t.scheme === 'file'
                ? (r = Re.file(T.join.apply(T, [xe(t, !0)].concat(n))).path)
                : (r = k.join.apply(k, [t.path].concat(n))),
              t['with']({ path: r })
            );
          },
        },
        {
          key: 'revive',
          value: function revive(t) {
            if (t) {
              if (t instanceof Re) return t;
              {
                var _t$external, _t$fsPath;
                var n = new Bt(t);
                return (
                  (n._formatted =
                    (_t$external = t.external) !== null && _t$external !== void 0
                      ? _t$external
                      : null),
                  (n._fsPath =
                    t._sep === In
                      ? (_t$fsPath = t.fsPath) !== null && _t$fsPath !== void 0
                        ? _t$fsPath
                        : null
                      : null),
                  n
                );
              }
            } else return t;
          },
        },
      ],
    );
  })(),
  In = Ot ? 1 : void 0,
  Bt = /*#__PURE__*/ (function (_X) {
    function Bt() {
      var _this16;
      _classCallCheck(this, Bt);
      (_this16 = _callSuper(this, Bt, arguments)),
        (_this16._formatted = null),
        (_this16._fsPath = null);
      return _this16;
    }
    _inherits(Bt, _X);
    return _createClass(Bt, [
      {
        key: 'fsPath',
        get: function get() {
          return this._fsPath || (this._fsPath = xe(this, !1)), this._fsPath;
        },
      },
      {
        key: 'toString',
        value: function toString() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          return e
            ? c1(this, !0)
            : (this._formatted || (this._formatted = c1(this, !1)), this._formatted);
        },
      },
      {
        key: 'toJSON',
        value: function toJSON() {
          var e = { $mid: 1 };
          return (
            this._fsPath && ((e.fsPath = this._fsPath), (e._sep = In)),
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
  })(X),
  _n = {
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
function On(e, t, n) {
  var r,
    i = -1;
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
      (n && o === 91) ||
      (n && o === 93) ||
      (n && o === 58)
    )
      i !== -1 && ((r += encodeURIComponent(e.substring(i, s))), (i = -1)),
        r !== void 0 && (r += e.charAt(s));
    else {
      r === void 0 && (r = e.substr(0, s));
      var l = _n[o];
      l !== void 0
        ? (i !== -1 && ((r += encodeURIComponent(e.substring(i, s))), (i = -1)), (r += l))
        : i === -1 && (i = s);
    }
  }
  return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
}
function w0(e) {
  var t;
  for (var n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    r === 35 || r === 63
      ? (t === void 0 && (t = e.substr(0, n)), (t += _n[r]))
      : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function xe(e, t) {
  var n;
  return (
    e.authority && e.path.length > 1 && e.scheme === 'file'
      ? (n = '//'.concat(e.authority).concat(e.path))
      : e.path.charCodeAt(0) === 47 &&
          ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
            (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
          e.path.charCodeAt(2) === 58
        ? t
          ? (n = e.path.substr(1))
          : (n = e.path[1].toLowerCase() + e.path.substr(2))
        : (n = e.path),
    Ot && (n = n.replace(/\//g, '\\')),
    n
  );
}
function c1(e, t) {
  var n = t ? w0 : On;
  var r = '',
    i = e.scheme,
    s = e.authority,
    o = e.path,
    l = e.query,
    a = e.fragment;
  if ((i && ((r += i), (r += ':')), (s || i === 'file') && ((r += ht), (r += ht)), s)) {
    var u = s.indexOf('@');
    if (u !== -1) {
      var c = s.substr(0, u);
      (s = s.substr(u + 1)),
        (u = c.lastIndexOf(':')),
        u === -1
          ? (r += n(c, !1, !1))
          : ((r += n(c.substr(0, u), !1, !1)), (r += ':'), (r += n(c.substr(u + 1), !1, !0))),
        (r += '@');
    }
    (s = s.toLowerCase()),
      (u = s.lastIndexOf(':')),
      u === -1 ? (r += n(s, !1, !0)) : ((r += n(s.substr(0, u), !1, !0)), (r += s.substr(u)));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      var _u5 = o.charCodeAt(1);
      _u5 >= 65 &&
        _u5 <= 90 &&
        (o = '/'.concat(String.fromCharCode(_u5 + 32), ':').concat(o.substr(3)));
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      var _u6 = o.charCodeAt(0);
      _u6 >= 65 &&
        _u6 <= 90 &&
        (o = ''.concat(String.fromCharCode(_u6 + 32), ':').concat(o.substr(2)));
    }
    r += n(o, !0, !1);
  }
  return l && ((r += '?'), (r += n(l, !1, !1))), a && ((r += '#'), (r += t ? a : On(a, !1, !1))), r;
}
function Mn(e) {
  try {
    return decodeURIComponent(e);
  } catch (_unused4) {
    return e.length > 3 ? e.substr(0, 3) + Mn(e.substr(3)) : e;
  }
}
var Pn = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Se(e) {
  return e.match(Pn)
    ? e.replace(Pn, function (t) {
        return Mn(t);
      })
    : e;
}
var mt = /*#__PURE__*/ (function () {
    function Dt(t, n) {
      _classCallCheck(this, Dt);
      (this.lineNumber = t), (this.column = n);
    }
    return _createClass(
      Dt,
      [
        {
          key: 'with',
          value: function _with() {
            var t =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lineNumber;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.column;
            return t === this.lineNumber && n === this.column ? this : new Dt(t, n);
          },
        },
        {
          key: 'delta',
          value: function delta() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this['with'](this.lineNumber + t, this.column + n);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return Dt.equals(this, t);
          },
        },
        {
          key: 'isBefore',
          value: function isBefore(t) {
            return Dt.isBefore(this, t);
          },
        },
        {
          key: 'isBeforeOrEqual',
          value: function isBeforeOrEqual(t) {
            return Dt.isBeforeOrEqual(this, t);
          },
        },
        {
          key: 'clone',
          value: function clone() {
            return new Dt(this.lineNumber, this.column);
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
            return { lineNumber: this.lineNumber, column: this.column };
          },
        },
      ],
      [
        {
          key: 'equals',
          value: function equals(t, n) {
            return !t && !n
              ? !0
              : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
          },
        },
        {
          key: 'isBefore',
          value: function isBefore(t, n) {
            return t.lineNumber < n.lineNumber
              ? !0
              : n.lineNumber < t.lineNumber
                ? !1
                : t.column < n.column;
          },
        },
        {
          key: 'isBeforeOrEqual',
          value: function isBeforeOrEqual(t, n) {
            return t.lineNumber < n.lineNumber
              ? !0
              : n.lineNumber < t.lineNumber
                ? !1
                : t.column <= n.column;
          },
        },
        {
          key: 'compare',
          value: function compare(t, n) {
            var r = t.lineNumber | 0,
              i = n.lineNumber | 0;
            if (r === i) {
              var s = t.column | 0,
                o = n.column | 0;
              return s - o;
            }
            return r - i;
          },
        },
        {
          key: 'lift',
          value: function lift(t) {
            return new Dt(t.lineNumber, t.column);
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
  J = /*#__PURE__*/ (function () {
    function j(t, n, r, i) {
      _classCallCheck(this, j);
      var s, o, l, a;
      t == null || typeof t == 'number' || Number.isNaN(t)
        ? ((s = t), (o = n), (l = r), (a = i))
        : 'startLineNumber' in t && 'startColumn' in t
          ? ((s = t.startLineNumber), (o = t.startColumn), (l = t.endLineNumber), (a = t.endColumn))
          : ((s = t.startLineNumber), (o = 1), (l = t.endLineNumberExclusive), (a = 1)),
        s > l || (s === l && o > a)
          ? ((this.startLineNumber = l),
            (this.startColumn = a),
            (this.endLineNumber = s),
            (this.endColumn = o))
          : ((this.startLineNumber = s),
            (this.startColumn = o),
            (this.endLineNumber = l),
            (this.endColumn = a));
    }
    return _createClass(
      j,
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
            return j.isEmpty(this);
          },
        },
        {
          key: 'containsPosition',
          value: function containsPosition(t) {
            return j.containsPosition(this, t);
          },
        },
        {
          key: 'containsRange',
          value: function containsRange(t) {
            return j.containsRange(this, t);
          },
        },
        {
          key: 'strictContainsRange',
          value: function strictContainsRange(t) {
            return j.strictContainsRange(this, t);
          },
        },
        {
          key: 'plusRange',
          value: function plusRange(t) {
            return j.plusRange(this, t);
          },
        },
        {
          key: 'intersectRanges',
          value: function intersectRanges(t) {
            return j.intersectRanges(this, t);
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
            return j.equalsRange(this, t);
          },
        },
        {
          key: 'getEndPosition',
          value: function getEndPosition() {
            return j.getEndPosition(this);
          },
        },
        {
          key: 'getStartPosition',
          value: function getStartPosition() {
            return j.getStartPosition(this);
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
          value: function setEndPosition(t, n) {
            return new j(this.startLineNumber, this.startColumn, t, n);
          },
        },
        {
          key: 'setStartPosition',
          value: function setStartPosition(t, n) {
            return new j(t, n, this.endLineNumber, this.endColumn);
          },
        },
        {
          key: 'collapseToStart',
          value: function collapseToStart() {
            return j.collapseToStart(this);
          },
        },
        {
          key: 'collapseToEnd',
          value: function collapseToEnd() {
            return j.collapseToEnd(this);
          },
        },
        {
          key: 'delta',
          value: function delta(t) {
            return new j(
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
          value: function containsPosition(t, n) {
            return !(
              n.lineNumber < t.startLineNumber ||
              n.lineNumber > t.endLineNumber ||
              (n.lineNumber === t.startLineNumber && n.column < t.startColumn) ||
              (n.lineNumber === t.endLineNumber && n.column > t.endColumn)
            );
          },
        },
        {
          key: 'strictContainsPosition',
          value: function strictContainsPosition(t, n) {
            return !(
              n.lineNumber < t.startLineNumber ||
              n.lineNumber > t.endLineNumber ||
              (n.lineNumber === t.startLineNumber && n.column <= t.startColumn) ||
              (n.lineNumber === t.endLineNumber && n.column >= t.endColumn)
            );
          },
        },
        {
          key: 'containsRange',
          value: function containsRange(t, n) {
            return !(
              n.startLineNumber < t.startLineNumber ||
              n.endLineNumber < t.startLineNumber ||
              n.startLineNumber > t.endLineNumber ||
              n.endLineNumber > t.endLineNumber ||
              (n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn) ||
              (n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn)
            );
          },
        },
        {
          key: 'strictContainsRange',
          value: function strictContainsRange(t, n) {
            return !(
              n.startLineNumber < t.startLineNumber ||
              n.endLineNumber < t.startLineNumber ||
              n.startLineNumber > t.endLineNumber ||
              n.endLineNumber > t.endLineNumber ||
              (n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn) ||
              (n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn)
            );
          },
        },
        {
          key: 'getRangeAbove',
          value: function getRangeAbove(t, n) {
            var r = Math.max(t.startLineNumber - n, 1),
              i = t.startLineNumber;
            return new j(r, t.startColumn, i, t.startColumn);
          },
        },
        {
          key: 'getRangeOnBelow',
          value: function getRangeOnBelow(t, n, r) {
            var i = t.endLineNumber,
              s = Math.min(t.endLineNumber + n, r);
            return new j(i, t.endColumn, s, t.endColumn);
          },
        },
        {
          key: 'getExtendedRange',
          value: function getExtendedRange(t, n, r) {
            var i = Math.max(t.startLineNumber - n, 0),
              s = Math.min(t.endLineNumber + n, r);
            return new j(i, t.startColumn, s, t.endColumn);
          },
        },
        {
          key: 'plusRange',
          value: function plusRange(t, n) {
            var r, i, s, o;
            return (
              n.startLineNumber < t.startLineNumber
                ? ((r = n.startLineNumber), (i = n.startColumn))
                : n.startLineNumber === t.startLineNumber
                  ? ((r = n.startLineNumber), (i = Math.min(n.startColumn, t.startColumn)))
                  : ((r = t.startLineNumber), (i = t.startColumn)),
              n.endLineNumber > t.endLineNumber
                ? ((s = n.endLineNumber), (o = n.endColumn))
                : n.endLineNumber === t.endLineNumber
                  ? ((s = n.endLineNumber), (o = Math.max(n.endColumn, t.endColumn)))
                  : ((s = t.endLineNumber), (o = t.endColumn)),
              new j(r, i, s, o)
            );
          },
        },
        {
          key: 'intersectRanges',
          value: function intersectRanges(t, n) {
            var r = t.startLineNumber,
              i = t.startColumn,
              s = t.endLineNumber,
              o = t.endColumn;
            var l = n.startLineNumber,
              a = n.startColumn,
              u = n.endLineNumber,
              c = n.endColumn;
            return (
              r < l ? ((r = l), (i = a)) : r === l && (i = Math.max(i, a)),
              s > u ? ((s = u), (o = c)) : s === u && (o = Math.min(o, c)),
              r > s || (r === s && i > o) ? null : new j(r, i, s, o)
            );
          },
        },
        {
          key: 'inverseEditRange',
          value: function inverseEditRange(t, n) {
            return {
              startLineNumber: t.startLineNumber,
              startColumn: t.startColumn,
              endLineNumber: t.startLineNumber + n.split('\n').length - 1,
              endColumn:
                n.lastIndexOf('\n') === -1
                  ? t.startColumn + n.length
                  : n.length - n.lastIndexOf('\n'),
            };
          },
        },
        {
          key: 'rangeAfterEdit',
          value: function rangeAfterEdit(t, n) {
            var r = j.lift(t).whereIs(n.range);
            switch (r) {
              case 'overlapping':
                throw new Error('Range is overlapping. The range after edit is ambiguous.');
              case 'after':
                return t;
              case 'before': {
                var i =
                  n.text.split('\n').length - 1 - (n.range.endLineNumber - n.range.startLineNumber);
                if (n.range.endLineNumber < t.startLineNumber)
                  return {
                    startLineNumber: t.startLineNumber + i,
                    startColumn: t.startColumn,
                    endLineNumber: t.endLineNumber + i,
                    endColumn: t.endColumn,
                  };
                {
                  var s =
                      n.text.lastIndexOf('\n') === -1
                        ? n.text.length
                        : n.text.length - n.text.lastIndexOf('\n') - 1,
                    o =
                      n.range.startLineNumber === n.range.endLineNumber
                        ? n.range.endColumn - n.range.startColumn
                        : n.range.endColumn - 1,
                    l = s - o;
                  return {
                    startLineNumber: t.startLineNumber + i,
                    startColumn: t.startColumn + l,
                    endLineNumber: t.endLineNumber + i,
                    endColumn:
                      t.startLineNumber === t.endLineNumber ? t.endColumn + l : t.endColumn,
                  };
                }
              }
              default: {
                var _i9 = r;
                return t;
              }
            }
          },
        },
        {
          key: 'equalsRange',
          value: function equalsRange(t, n) {
            return !t && !n
              ? !0
              : !!t &&
                  !!n &&
                  t.startLineNumber === n.startLineNumber &&
                  t.startColumn === n.startColumn &&
                  t.endLineNumber === n.endLineNumber &&
                  t.endColumn === n.endColumn;
          },
        },
        {
          key: 'getEndPosition',
          value: function getEndPosition(t) {
            return new mt(t.endLineNumber, t.endColumn);
          },
        },
        {
          key: 'getStartPosition',
          value: function getStartPosition(t) {
            return new mt(t.startLineNumber, t.startColumn);
          },
        },
        {
          key: 'collapseToStart',
          value: function collapseToStart(t) {
            return new j(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
          },
        },
        {
          key: 'collapseToEnd',
          value: function collapseToEnd(t) {
            return new j(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
          },
        },
        {
          key: 'fromPositions',
          value: function fromPositions(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
            return new j(t.lineNumber, t.column, n.lineNumber, n.column);
          },
        },
        {
          key: 'lift',
          value: function lift(t) {
            return t ? new j(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
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
          value: function areIntersectingOrTouching(t, n) {
            return !(
              t.endLineNumber < n.startLineNumber ||
              (t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn) ||
              n.endLineNumber < t.startLineNumber ||
              (n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn)
            );
          },
        },
        {
          key: 'areIntersecting',
          value: function areIntersecting(t, n) {
            return !(
              t.endLineNumber < n.startLineNumber ||
              (t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn) ||
              n.endLineNumber < t.startLineNumber ||
              (n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn)
            );
          },
        },
        {
          key: 'compareRangesUsingStarts',
          value: function compareRangesUsingStarts(t, n) {
            if (t && n) {
              var s = t.startLineNumber | 0,
                o = n.startLineNumber | 0;
              if (s === o) {
                var l = t.startColumn | 0,
                  a = n.startColumn | 0;
                if (l === a) {
                  var u = t.endLineNumber | 0,
                    c = n.endLineNumber | 0;
                  if (u === c) {
                    var h = t.endColumn | 0,
                      f = n.endColumn | 0;
                    return h - f;
                  }
                  return u - c;
                }
                return l - a;
              }
              return s - o;
            }
            return (t ? 1 : 0) - (n ? 1 : 0);
          },
        },
        {
          key: 'compareRangesUsingEnds',
          value: function compareRangesUsingEnds(t, n) {
            return t.endLineNumber === n.endLineNumber
              ? t.endColumn === n.endColumn
                ? t.startLineNumber === n.startLineNumber
                  ? t.startColumn - n.startColumn
                  : t.startLineNumber - n.startLineNumber
                : t.endColumn - n.endColumn
              : t.endLineNumber - n.endLineNumber;
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
  })();
function Rn(e, t) {
  var n = Object.create(null);
  for (var _i0 = 0, _Object$entries2 = Object.entries(e); _i0 < _Object$entries2.length; _i0++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i0], 2),
      r = _Object$entries2$_i[0],
      i = _Object$entries2$_i[1];
    t(r, i) && (n[r] = i);
  }
  return n;
}
var fl = (function () {
    if (
      (typeof crypto === 'undefined' ? 'undefined' : _typeof(crypto)) == 'object' &&
      typeof crypto.randomUUID == 'function'
    )
      return crypto.randomUUID.bind(crypto);
    var e;
    (typeof crypto === 'undefined' ? 'undefined' : _typeof(crypto)) == 'object' &&
    typeof crypto.getRandomValues == 'function'
      ? (e = crypto.getRandomValues.bind(crypto))
      : (e = function e(r) {
          for (var i = 0; i < r.length; i++) r[i] = Math.floor(Math.random() * 256);
          return r;
        });
    var t = new Uint8Array(16),
      n = [];
    for (var r = 0; r < 256; r++) n.push(r.toString(16).padStart(2, '0'));
    return function () {
      e(t), (t[6] = (t[6] & 15) | 64), (t[8] = (t[8] & 63) | 128);
      var i = 0,
        s = '';
      return (
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += '-'),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += '-'),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += '-'),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += '-'),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        (s += n[t[i++]]),
        s
      );
    };
  })(),
  Dn;
(function (e) {
  (e[(e.Left = 1)] = 'Left'),
    (e[(e.Center = 2)] = 'Center'),
    (e[(e.Right = 4)] = 'Right'),
    (e[(e.Full = 7)] = 'Full');
})(Dn || (Dn = {}));
var kn;
(function (e) {
  (e[(e.Left = 1)] = 'Left'), (e[(e.Center = 2)] = 'Center'), (e[(e.Right = 3)] = 'Right');
})(kn || (kn = {}));
var Fn;
(function (e) {
  (e[(e.Inline = 1)] = 'Inline'), (e[(e.Gutter = 2)] = 'Gutter');
})(Fn || (Fn = {}));
var qn;
(function (e) {
  (e[(e.Normal = 1)] = 'Normal'), (e[(e.Underlined = 2)] = 'Underlined');
})(qn || (qn = {}));
var Un;
(function (e) {
  (e[(e.Both = 0)] = 'Both'),
    (e[(e.Right = 1)] = 'Right'),
    (e[(e.Left = 2)] = 'Left'),
    (e[(e.None = 3)] = 'None');
})(Un || (Un = {}));
var jn;
(function (e) {
  (e[(e.TextDefined = 0)] = 'TextDefined'), (e[(e.LF = 1)] = 'LF'), (e[(e.CRLF = 2)] = 'CRLF');
})(jn || (jn = {}));
var zn;
(function (e) {
  (e[(e.LF = 1)] = 'LF'), (e[(e.CRLF = 2)] = 'CRLF');
})(zn || (zn = {}));
var Bn;
(function (e) {
  (e[(e.LF = 0)] = 'LF'), (e[(e.CRLF = 1)] = 'CRLF');
})(Bn || (Bn = {}));
var f1 = /*#__PURE__*/ _createClass(function f1(e, t) {
    _classCallCheck(this, f1);
    (this._findMatchBrand = void 0), (this.range = e), (this.matches = t);
  }),
  Tn;
(function (e) {
  (e[(e.AlwaysGrowsWhenTypingAtEdges = 0)] = 'AlwaysGrowsWhenTypingAtEdges'),
    (e[(e.NeverGrowsWhenTypingAtEdges = 1)] = 'NeverGrowsWhenTypingAtEdges'),
    (e[(e.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
    (e[(e.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter');
})(Tn || (Tn = {}));
var Wn;
(function (e) {
  (e[(e.Left = 0)] = 'Left'),
    (e[(e.Right = 1)] = 'Right'),
    (e[(e.None = 2)] = 'None'),
    (e[(e.LeftOfInjectedText = 3)] = 'LeftOfInjectedText'),
    (e[(e.RightOfInjectedText = 4)] = 'RightOfInjectedText');
})(Wn || (Wn = {}));
var Vn;
(function (e) {
  e[(e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3)] = 'FIRST_LINE_DETECTION_LENGTH_LIMIT';
})(Vn || (Vn = {}));
var C0 = /*#__PURE__*/ _createClass(function C0(e, t, n) {
    _classCallCheck(this, C0);
    (this.regex = e), (this.wordSeparators = t), (this.simpleSearch = n);
  }),
  L0 = /*#__PURE__*/ _createClass(function L0(e, t, n) {
    _classCallCheck(this, L0);
    (this.reverseEdits = e), (this.changes = t), (this.trimAutoWhitespaceLineNumbers = n);
  }),
  d1 = /*#__PURE__*/ (function () {
    function d1(e, t) {
      _classCallCheck(this, d1);
      (this.piece = e),
        (this.color = t),
        (this.size_left = 0),
        (this.lf_left = 0),
        (this.parent = this),
        (this.left = this),
        (this.right = this);
    }
    return _createClass(d1, [
      {
        key: 'next',
        value: function next() {
          if (this.right !== w) return g1(this.right);
          var e = this;
          for (; e.parent !== w && e.parent.left !== e; ) e = e.parent;
          return e.parent === w ? w : e.parent;
        },
      },
      {
        key: 'prev',
        value: function prev() {
          if (this.left !== w) return Hn(this.left);
          var e = this;
          for (; e.parent !== w && e.parent.right !== e; ) e = e.parent;
          return e.parent === w ? w : e.parent;
        },
      },
      {
        key: 'detach',
        value: function detach() {
          (this.parent = null), (this.left = null), (this.right = null);
        },
      },
    ]);
  })(),
  Gn;
(function (e) {
  (e[(e.Black = 0)] = 'Black'), (e[(e.Red = 1)] = 'Red');
})(Gn || (Gn = {}));
var w = new d1(null, 0);
(w.parent = w), (w.left = w), (w.right = w), (w.color = 0);
function g1(e) {
  for (; e.left !== w; ) e = e.left;
  return e;
}
function Hn(e) {
  for (; e.right !== w; ) e = e.right;
  return e;
}
function m1(e) {
  return e === w ? 0 : e.size_left + e.piece.length + m1(e.right);
}
function p1(e) {
  return e === w ? 0 : e.lf_left + e.piece.lineFeedCnt + p1(e.right);
}
function b1() {
  w.parent = w;
}
function Zt(e, t) {
  var n = t.right;
  (n.size_left += t.size_left + (t.piece ? t.piece.length : 0)),
    (n.lf_left += t.lf_left + (t.piece ? t.piece.lineFeedCnt : 0)),
    (t.right = n.left),
    n.left !== w && (n.left.parent = t),
    (n.parent = t.parent),
    t.parent === w
      ? (e.root = n)
      : t.parent.left === t
        ? (t.parent.left = n)
        : (t.parent.right = n),
    (n.left = t),
    (t.parent = n);
}
function Xt(e, t) {
  var n = t.left;
  (t.left = n.right),
    n.right !== w && (n.right.parent = t),
    (n.parent = t.parent),
    (t.size_left -= n.size_left + (n.piece ? n.piece.length : 0)),
    (t.lf_left -= n.lf_left + (n.piece ? n.piece.lineFeedCnt : 0)),
    t.parent === w
      ? (e.root = n)
      : t === t.parent.right
        ? (t.parent.right = n)
        : (t.parent.left = n),
    (n.right = t),
    (t.parent = n);
}
function Ie(e, t) {
  var n, r;
  if (
    (t.left === w
      ? ((r = t), (n = r.right))
      : t.right === w
        ? ((r = t), (n = r.left))
        : ((r = g1(t.right)), (n = r.right)),
    r === e.root)
  ) {
    (e.root = n), (n.color = 0), t.detach(), b1(), (e.root.parent = w);
    return;
  }
  var i = r.color === 1;
  if (
    (r === r.parent.left ? (r.parent.left = n) : (r.parent.right = n),
    r === t
      ? ((n.parent = r.parent), Kt(e, n))
      : (r.parent === t ? (n.parent = r) : (n.parent = r.parent),
        Kt(e, n),
        (r.left = t.left),
        (r.right = t.right),
        (r.parent = t.parent),
        (r.color = t.color),
        t === e.root
          ? (e.root = r)
          : t === t.parent.left
            ? (t.parent.left = r)
            : (t.parent.right = r),
        r.left !== w && (r.left.parent = r),
        r.right !== w && (r.right.parent = r),
        (r.size_left = t.size_left),
        (r.lf_left = t.lf_left),
        Kt(e, r)),
    t.detach(),
    n.parent.left === n)
  ) {
    var o = m1(n),
      l = p1(n);
    if (o !== n.parent.size_left || l !== n.parent.lf_left) {
      var a = o - n.parent.size_left,
        u = l - n.parent.lf_left;
      (n.parent.size_left = o), (n.parent.lf_left = l), pt(e, n.parent, a, u);
    }
  }
  if ((Kt(e, n.parent), i)) {
    b1();
    return;
  }
  var s;
  for (; n !== e.root && n.color === 0; )
    n === n.parent.left
      ? ((s = n.parent.right),
        s.color === 1 &&
          ((s.color = 0), (n.parent.color = 1), Zt(e, n.parent), (s = n.parent.right)),
        s.left.color === 0 && s.right.color === 0
          ? ((s.color = 1), (n = n.parent))
          : (s.right.color === 0 &&
              ((s.left.color = 0), (s.color = 1), Xt(e, s), (s = n.parent.right)),
            (s.color = n.parent.color),
            (n.parent.color = 0),
            (s.right.color = 0),
            Zt(e, n.parent),
            (n = e.root)))
      : ((s = n.parent.left),
        s.color === 1 &&
          ((s.color = 0), (n.parent.color = 1), Xt(e, n.parent), (s = n.parent.left)),
        s.left.color === 0 && s.right.color === 0
          ? ((s.color = 1), (n = n.parent))
          : (s.left.color === 0 &&
              ((s.right.color = 0), (s.color = 1), Zt(e, s), (s = n.parent.left)),
            (s.color = n.parent.color),
            (n.parent.color = 0),
            (s.left.color = 0),
            Xt(e, n.parent),
            (n = e.root)));
  (n.color = 0), b1();
}
function Jn(e, t) {
  for (Kt(e, t); t !== e.root && t.parent.color === 1; )
    if (t.parent === t.parent.parent.left) {
      var n = t.parent.parent.right;
      n.color === 1
        ? ((t.parent.color = 0), (n.color = 0), (t.parent.parent.color = 1), (t = t.parent.parent))
        : (t === t.parent.right && ((t = t.parent), Zt(e, t)),
          (t.parent.color = 0),
          (t.parent.parent.color = 1),
          Xt(e, t.parent.parent));
    } else {
      var _n5 = t.parent.parent.left;
      _n5.color === 1
        ? ((t.parent.color = 0),
          (_n5.color = 0),
          (t.parent.parent.color = 1),
          (t = t.parent.parent))
        : (t === t.parent.left && ((t = t.parent), Xt(e, t)),
          (t.parent.color = 0),
          (t.parent.parent.color = 1),
          Zt(e, t.parent.parent));
    }
  e.root.color = 0;
}
function pt(e, t, n, r) {
  for (; t !== e.root && t !== w; )
    t.parent.left === t && ((t.parent.size_left += n), (t.parent.lf_left += r)), (t = t.parent);
}
function Kt(e, t) {
  var n = 0,
    r = 0;
  if (t !== e.root) {
    for (; t !== e.root && t === t.parent.right; ) t = t.parent;
    if (t !== e.root)
      for (
        t = t.parent,
          n = m1(t.left) - t.size_left,
          r = p1(t.left) - t.lf_left,
          t.size_left += n,
          t.lf_left += r;
        t !== e.root && (n !== 0 || r !== 0);

      )
        t.parent.left === t && ((t.parent.size_left += n), (t.parent.lf_left += r)), (t = t.parent);
  }
}
var y0 = 60,
  N0 = y0 * 60,
  v1 = N0 * 24,
  dl = v1 * 7,
  gl = v1 * 30,
  ml = v1 * 365,
  A0 = {
    DateTimeFormat: function DateTimeFormat(e, t) {
      try {
        return new Intl.DateTimeFormat(e, t);
      } catch (_unused5) {
        return new Intl.DateTimeFormat(void 0, t);
      }
    },
    Collator: function Collator(e, t) {
      try {
        return new Intl.Collator(e, t);
      } catch (_unused6) {
        return new Intl.Collator(void 0, t);
      }
    },
    Segmenter: function Segmenter(e, t) {
      try {
        return new Intl.Segmenter(e, t);
      } catch (_unused7) {
        return new Intl.Segmenter(void 0, t);
      }
    },
    Locale: function Locale(e, t) {
      try {
        return new Intl.Locale(e, t);
      } catch (_unused8) {
        return new Intl.Locale(_t, t);
      }
    },
  },
  Yn;
(function (e) {
  (e[(e.MAX_SAFE_SMALL_INTEGER = 1073741824)] = 'MAX_SAFE_SMALL_INTEGER'),
    (e[(e.MIN_SAFE_SMALL_INTEGER = -1073741824)] = 'MIN_SAFE_SMALL_INTEGER'),
    (e[(e.MAX_UINT_8 = 255)] = 'MAX_UINT_8'),
    (e[(e.MAX_UINT_16 = 65535)] = 'MAX_UINT_16'),
    (e[(e.MAX_UINT_32 = 4294967295)] = 'MAX_UINT_32'),
    (e[(e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536)] = 'UNICODE_SUPPLEMENTARY_PLANE_BEGIN');
})(Yn || (Yn = {}));
function Zn(e) {
  return e < 0 ? 0 : e > 255 ? 255 : e | 0;
}
function Tt(e) {
  return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0;
}
var E0 = /*#__PURE__*/ (function () {
    function ni(t) {
      _classCallCheck(this, ni);
      var n = Zn(t);
      (this.c = n), (this.a = ni.d(n)), (this.b = new Map());
    }
    return _createClass(
      ni,
      [
        {
          key: 'set',
          value: function set(t, n) {
            var r = Zn(n);
            t >= 0 && t < 256 ? (this.a[t] = r) : this.b.set(t, r);
          },
        },
        {
          key: 'get',
          value: function get(t) {
            return t >= 0 && t < 256 ? this.a[t] : this.b.get(t) || this.c;
          },
        },
        {
          key: 'clear',
          value: function clear() {
            this.a.fill(this.c), this.b.clear();
          },
        },
      ],
      [
        {
          key: 'd',
          value: function d(t) {
            var n = new Uint8Array(256);
            return n.fill(t), n;
          },
        },
      ],
    );
  })(),
  Xn;
(function (e) {
  (e[(e.False = 0)] = 'False'), (e[(e.True = 1)] = 'True');
})(Xn || (Xn = {}));
var Kn;
(function (e) {
  (e[(e.Regular = 0)] = 'Regular'),
    (e[(e.Whitespace = 1)] = 'Whitespace'),
    (e[(e.WordSeparator = 2)] = 'WordSeparator');
})(Kn || (Kn = {}));
var $0 = /*#__PURE__*/ (function (_E2) {
    function $0(e, t) {
      var _this17;
      _classCallCheck(this, $0);
      (_this17 = _callSuper(this, $0, [0])),
        (_this17.e = null),
        (_this17.f = null),
        (_this17.g = []),
        (_this17.intlSegmenterLocales = t),
        _this17.intlSegmenterLocales.length > 0
          ? (_this17.e = A0.Segmenter(_this17.intlSegmenterLocales, { granularity: 'word' }))
          : (_this17.e = null);
      for (var n = 0, r = e.length; n < r; n++) _this17.set(e.charCodeAt(n), 2);
      _this17.set(32, 1), _this17.set(9, 1);
      return _this17;
    }
    _inherits($0, _E2);
    return _createClass($0, [
      {
        key: 'findPrevIntlWordBeforeOrAtOffset',
        value: function findPrevIntlWordBeforeOrAtOffset(e, t) {
          var n = null;
          var _iterator31 = _createForOfIteratorHelper(this.h(e)),
            _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
              var r = _step31.value;
              if (r.index > t) break;
              n = r;
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
          return n;
        },
      },
      {
        key: 'findNextIntlWordAtOrAfterOffset',
        value: function findNextIntlWordAtOrAfterOffset(e, t) {
          var _iterator32 = _createForOfIteratorHelper(this.h(e)),
            _step32;
          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
              var n = _step32.value;
              if (!(n.index < t)) return n;
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }
          return null;
        },
      },
      {
        key: 'h',
        value: function h(e) {
          return this.e
            ? this.f === e
              ? this.g
              : ((this.f = e), (this.g = this.j(this.e.segment(e))), this.g)
            : [];
        },
      },
      {
        key: 'j',
        value: function j(e) {
          var t = [];
          var _iterator33 = _createForOfIteratorHelper(e),
            _step33;
          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
              var n = _step33.value;
              this.k(n) && t.push(n);
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }
          return t;
        },
      },
      {
        key: 'k',
        value: function k(e) {
          return !!e.isWordLike;
        },
      },
    ]);
  })(E0),
  Qn = new Z1(10);
function x0(e, t) {
  var n = ''.concat(e, '/').concat(t.join(','));
  var r = Qn.get(n);
  return r || ((r = new $0(e, t)), Qn.set(n, r)), r;
}
var S0 = /*#__PURE__*/ (function () {
  function S0(e, t, n, r) {
    _classCallCheck(this, S0);
    (this.searchString = e), (this.isRegex = t), (this.matchCase = n), (this.wordSeparators = r);
  }
  return _createClass(S0, [
    {
      key: 'parseSearchRequest',
      value: function parseSearchRequest() {
        if (this.searchString === '') return null;
        var e;
        this.isRegex ? (e = I0(this.searchString)) : (e = this.searchString.indexOf('\n') >= 0);
        var t = null;
        try {
          t = gs(this.searchString, this.isRegex, {
            matchCase: this.matchCase,
            wholeWord: !1,
            multiline: e,
            global: !0,
            unicode: !0,
          });
        } catch (_unused9) {
          return null;
        }
        if (!t) return null;
        var n = !this.isRegex && !e;
        return (
          n &&
            this.searchString.toLowerCase() !== this.searchString.toUpperCase() &&
            (n = this.matchCase),
          new C0(
            t,
            this.wordSeparators ? x0(this.wordSeparators, []) : null,
            n ? this.searchString : null,
          )
        );
      },
    },
  ]);
})();
function I0(e) {
  if (!e || e.length === 0) return !1;
  for (var _t3 = 0, n = e.length; _t3 < n; _t3++) {
    var r = e.charCodeAt(_t3);
    if (r === 10) return !0;
    if (r === 92) {
      if ((_t3++, _t3 >= n)) break;
      var i = e.charCodeAt(_t3);
      if (i === 110 || i === 114 || i === 87) return !0;
    }
  }
  return !1;
}
function tr(e, t, n) {
  if (!n) return new f1(e, null);
  var r = [];
  for (var i = 0, s = t.length; i < s; i++) r[i] = t[i];
  return new f1(e, r);
}
function _0(e, t, n, r, i) {
  if (r === 0) return !0;
  var s = t.charCodeAt(r - 1);
  if (e.get(s) !== 0 || s === 13 || s === 10) return !0;
  if (i > 0) {
    var o = t.charCodeAt(r);
    if (e.get(o) !== 0) return !0;
  }
  return !1;
}
function O0(e, t, n, r, i) {
  if (r + i === n) return !0;
  var s = t.charCodeAt(r + i);
  if (e.get(s) !== 0 || s === 13 || s === 10) return !0;
  if (i > 0) {
    var o = t.charCodeAt(r + i - 1);
    if (e.get(o) !== 0) return !0;
  }
  return !1;
}
function er(e, t, n, r, i) {
  return _0(e, t, n, r, i) && O0(e, t, n, r, i);
}
var M0 = /*#__PURE__*/ (function () {
    function M0(e, t) {
      _classCallCheck(this, M0);
      (this._wordSeparators = e), (this.a = t), (this.b = -1), (this.c = 0);
    }
    return _createClass(M0, [
      {
        key: 'reset',
        value: function reset(e) {
          (this.a.lastIndex = e), (this.b = -1), (this.c = 0);
        },
      },
      {
        key: 'next',
        value: function next(e) {
          var t = e.length;
          var n;
          do {
            if (this.b + this.c === t || ((n = this.a.exec(e)), !n)) return null;
            var r = n.index,
              i = n[0].length;
            if (r === this.b && i === this.c) {
              if (i === 0) {
                Ls(e, t, this.a.lastIndex) > 65535
                  ? (this.a.lastIndex += 2)
                  : (this.a.lastIndex += 1);
                continue;
              }
              return null;
            }
            if (
              ((this.b = r),
              (this.c = i),
              !this._wordSeparators || er(this._wordSeparators, e, t, r, i))
            )
              return n;
          } while (n);
          return null;
        },
      },
    ]);
  })(),
  bt = 65535;
function nr(e) {
  var t;
  return (
    e[e.length - 1] < 65536 ? (t = new Uint16Array(e.length)) : (t = new Uint32Array(e.length)),
    t.set(e, 0),
    t
  );
}
var P0 = /*#__PURE__*/ _createClass(function P0(e, t, n, r, i) {
  _classCallCheck(this, P0);
  (this.lineStarts = e), (this.cr = t), (this.lf = n), (this.crlf = r), (this.isBasicASCII = i);
});
function vt(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
  var n = [0];
  var r = 1;
  for (var i = 0, s = e.length; i < s; i++) {
    var o = e.charCodeAt(i);
    o === 13
      ? i + 1 < s && e.charCodeAt(i + 1) === 10
        ? ((n[r++] = i + 2), i++)
        : (n[r++] = i + 1)
      : o === 10 && (n[r++] = i + 1);
  }
  return t ? nr(n) : n;
}
function R0(e, t) {
  (e.length = 0), (e[0] = 0);
  var n = 1,
    r = 0,
    i = 0,
    s = 0,
    o = !0;
  for (var a = 0, u = t.length; a < u; a++) {
    var c = t.charCodeAt(a);
    c === 13
      ? a + 1 < u && t.charCodeAt(a + 1) === 10
        ? (s++, (e[n++] = a + 2), a++)
        : (r++, (e[n++] = a + 1))
      : c === 10
        ? (i++, (e[n++] = a + 1))
        : o && c !== 9 && (c < 32 || c > 126) && (o = !1);
  }
  var l = new P0(nr(e), r, i, s, o);
  return (e.length = 0), l;
}
var K = /*#__PURE__*/ _createClass(function K(e, t, n, r, i) {
    _classCallCheck(this, K);
    (this.bufferIndex = e),
      (this.start = t),
      (this.end = n),
      (this.lineFeedCnt = r),
      (this.length = i);
  }),
  Pt = /*#__PURE__*/ _createClass(function Pt(e, t) {
    _classCallCheck(this, Pt);
    (this.buffer = e), (this.lineStarts = t);
  }),
  D0 = /*#__PURE__*/ (function () {
    function D0(e, t) {
      var _this18 = this;
      _classCallCheck(this, D0);
      (this.a = []),
        (this.c = e),
        (this.d = t),
        (this.b = 0),
        e.root !== w &&
          e.iterate(e.root, function (n) {
            return n !== w && _this18.a.push(n.piece), !0;
          });
    }
    return _createClass(D0, [
      {
        key: 'read',
        value: function read() {
          return this.a.length === 0
            ? this.b === 0
              ? (this.b++, this.d)
              : null
            : this.b > this.a.length - 1
              ? null
              : this.b === 0
                ? this.d + this.c.getPieceContent(this.a[this.b++])
                : this.c.getPieceContent(this.a[this.b++]);
        },
      },
    ]);
  })(),
  k0 = /*#__PURE__*/ (function () {
    function k0(e) {
      _classCallCheck(this, k0);
      (this.a = e), (this.b = []);
    }
    return _createClass(k0, [
      {
        key: 'get',
        value: function get(e) {
          for (var _t4 = this.b.length - 1; _t4 >= 0; _t4--) {
            var n = this.b[_t4];
            if (n.nodeStartOffset <= e && n.nodeStartOffset + n.node.piece.length >= e) return n;
          }
          return null;
        },
      },
      {
        key: 'get2',
        value: function get2(e) {
          for (var _t5 = this.b.length - 1; _t5 >= 0; _t5--) {
            var n = this.b[_t5];
            if (
              n.nodeStartLineNumber &&
              n.nodeStartLineNumber < e &&
              n.nodeStartLineNumber + n.node.piece.lineFeedCnt >= e
            )
              return n;
          }
          return null;
        },
      },
      {
        key: 'set',
        value: function set(e) {
          this.b.length >= this.a && this.b.shift(), this.b.push(e);
        },
      },
      {
        key: 'validate',
        value: function validate(e) {
          var t = !1;
          var n = this.b;
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            if (i.node.parent === null || i.nodeStartOffset >= e) {
              (n[r] = null), (t = !0);
              continue;
            }
          }
          if (t) {
            var _r8 = [];
            var _iterator34 = _createForOfIteratorHelper(n),
              _step34;
            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done; ) {
                var _i1 = _step34.value;
                _i1 !== null && _r8.push(_i1);
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }
            this.b = _r8;
          }
        },
      },
    ]);
  })(),
  F0 = /*#__PURE__*/ (function () {
    function F0(e, t, n) {
      _classCallCheck(this, F0);
      this.create(e, t, n);
    }
    return _createClass(F0, [
      {
        key: 'create',
        value: function create(e, t, n) {
          (this.a = [new Pt('', [0])]),
            (this.g = { line: 0, column: 0 }),
            (this.root = w),
            (this.b = 1),
            (this.c = 0),
            (this.d = t),
            (this.e = t.length),
            (this.f = n);
          var r = null;
          for (var i = 0, s = e.length; i < s; i++)
            if (e[i].buffer.length > 0) {
              e[i].lineStarts || (e[i].lineStarts = vt(e[i].buffer));
              var o = new K(
                i + 1,
                { line: 0, column: 0 },
                {
                  line: e[i].lineStarts.length - 1,
                  column: e[i].buffer.length - e[i].lineStarts[e[i].lineStarts.length - 1],
                },
                e[i].lineStarts.length - 1,
                e[i].buffer.length,
              );
              this.a.push(e[i]), (r = this.S(r, o));
            }
          (this.h = new k0(1)), (this.j = { lineNumber: 0, value: '' }), this.y();
        },
      },
      {
        key: 'normalizeEOL',
        value: function normalizeEOL(e) {
          var _this19 = this;
          var t = bt,
            n = t - Math.floor(t / 3),
            r = n * 2;
          var i = '',
            s = 0;
          var o = [];
          if (
            (this.iterate(this.root, function (l) {
              var a = _this19.R(l),
                u = a.length;
              if (s <= n || s + u < r) return (i += a), (s += u), !0;
              var c = i.replace(/\r\n|\r|\n/g, e);
              return o.push(new Pt(c, vt(c))), (i = a), (s = u), !0;
            }),
            s > 0)
          ) {
            var l = i.replace(/\r\n|\r|\n/g, e);
            o.push(new Pt(l, vt(l)));
          }
          this.create(o, e, !0);
        },
      },
      {
        key: 'getEOL',
        value: function getEOL() {
          return this.d;
        },
      },
      {
        key: 'setEOL',
        value: function setEOL(e) {
          (this.d = e), (this.e = this.d.length), this.normalizeEOL(e);
        },
      },
      {
        key: 'createSnapshot',
        value: function createSnapshot(e) {
          return new D0(this, e);
        },
      },
      {
        key: 'equal',
        value: function equal(e) {
          var _this20 = this;
          if (this.getLength() !== e.getLength() || this.getLineCount() !== e.getLineCount())
            return !1;
          var t = 0;
          return this.iterate(this.root, function (r) {
            if (r === w) return !0;
            var i = _this20.R(r),
              s = i.length,
              o = e.G(t),
              l = e.G(t + s),
              a = e.getValueInRange2(o, l);
            return (t += s), i === a;
          });
        },
      },
      {
        key: 'getOffsetAt',
        value: function getOffsetAt(e, t) {
          var n = 0,
            r = this.root;
          for (; r !== w; )
            if (r.left !== w && r.lf_left + 1 >= e) r = r.left;
            else if (r.lf_left + r.piece.lineFeedCnt + 1 >= e) {
              n += r.size_left;
              var i = this.B(r, e - r.lf_left - 2);
              return (n += i + t - 1);
            } else
              (e -= r.lf_left + r.piece.lineFeedCnt),
                (n += r.size_left + r.piece.length),
                (r = r.right);
          return n;
        },
      },
      {
        key: 'getPositionAt',
        value: function getPositionAt(e) {
          (e = Math.floor(e)), (e = Math.max(0, e));
          var t = this.root,
            n = 0;
          var r = e;
          for (; t !== w; )
            if (t.size_left !== 0 && t.size_left >= e) t = t.left;
            else if (t.size_left + t.piece.length >= e) {
              var i = this.A(t, e - t.size_left);
              if (((n += t.lf_left + i.index), i.index === 0)) {
                var s = this.getOffsetAt(n + 1, 1),
                  o = r - s;
                return new mt(n + 1, o + 1);
              }
              return new mt(n + 1, i.remainder + 1);
            } else if (
              ((e -= t.size_left + t.piece.length),
              (n += t.lf_left + t.piece.lineFeedCnt),
              t.right === w)
            ) {
              var _i10 = this.getOffsetAt(n + 1, 1),
                _s6 = r - e - _i10;
              return new mt(n + 1, _s6 + 1);
            } else t = t.right;
          return new mt(1, 1);
        },
      },
      {
        key: 'getValueInRange',
        value: function getValueInRange(e, t) {
          if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) return '';
          var n = this.H(e.startLineNumber, e.startColumn),
            r = this.H(e.endLineNumber, e.endColumn),
            i = this.getValueInRange2(n, r);
          return t
            ? t !== this.d || !this.f
              ? i.replace(/\r\n|\r|\n/g, t)
              : t === this.getEOL() && this.f
                ? i
                : i.replace(/\r\n|\r|\n/g, t)
            : i;
        },
      },
      {
        key: 'getValueInRange2',
        value: function getValueInRange2(e, t) {
          if (e.node === t.node) {
            var o = e.node,
              l = this.a[o.piece.bufferIndex].buffer,
              a = this.u(o.piece.bufferIndex, o.piece.start);
            return l.substring(a + e.remainder, a + t.remainder);
          }
          var n = e.node;
          var r = this.a[n.piece.bufferIndex].buffer,
            i = this.u(n.piece.bufferIndex, n.piece.start);
          var s = r.substring(i + e.remainder, i + n.piece.length);
          for (n = n.next(); n !== w; ) {
            var _o5 = this.a[n.piece.bufferIndex].buffer,
              _l8 = this.u(n.piece.bufferIndex, n.piece.start);
            if (n === t.node) {
              s += _o5.substring(_l8, _l8 + t.remainder);
              break;
            } else s += _o5.substr(_l8, n.piece.length);
            n = n.next();
          }
          return s;
        },
      },
      {
        key: 'getLinesContent',
        value: function getLinesContent() {
          var _this21 = this;
          var e = [];
          var t = 0,
            n = '',
            r = !1;
          return (
            this.iterate(this.root, function (i) {
              if (i === w) return !0;
              var s = i.piece;
              var o = s.length;
              if (o === 0) return !0;
              var l = _this21.a[s.bufferIndex].buffer,
                a = _this21.a[s.bufferIndex].lineStarts,
                u = s.start.line,
                c = s.end.line;
              var h = a[u] + s.start.column;
              if (
                r &&
                (l.charCodeAt(h) === 10 && (h++, o--), (e[t++] = n), (n = ''), (r = !1), o === 0)
              )
                return !0;
              if (u === c)
                return (
                  !_this21.f && l.charCodeAt(h + o - 1) === 13
                    ? ((r = !0), (n += l.substr(h, o - 1)))
                    : (n += l.substr(h, o)),
                  !0
                );
              (n += _this21.f
                ? l.substring(h, Math.max(h, a[u + 1] - _this21.e))
                : l.substring(h, a[u + 1]).replace(/(\r\n|\r|\n)$/, '')),
                (e[t++] = n);
              for (var f = u + 1; f < c; f++)
                (n = _this21.f
                  ? l.substring(a[f], a[f + 1] - _this21.e)
                  : l.substring(a[f], a[f + 1]).replace(/(\r\n|\r|\n)$/, '')),
                  (e[t++] = n);
              return (
                !_this21.f && l.charCodeAt(a[c] + s.end.column - 1) === 13
                  ? ((r = !0), s.end.column === 0 ? t-- : (n = l.substr(a[c], s.end.column - 1)))
                  : (n = l.substr(a[c], s.end.column)),
                !0
              );
            }),
            r && ((e[t++] = n), (n = '')),
            (e[t++] = n),
            e
          );
        },
      },
      {
        key: 'getLength',
        value: function getLength() {
          return this.c;
        },
      },
      {
        key: 'getLineCount',
        value: function getLineCount() {
          return this.b;
        },
      },
      {
        key: 'getLineContent',
        value: function getLineContent(e) {
          return this.j.lineNumber === e
            ? this.j.value
            : ((this.j.lineNumber = e),
              e === this.b
                ? (this.j.value = this.getLineRawContent(e))
                : this.f
                  ? (this.j.value = this.getLineRawContent(e, this.e))
                  : (this.j.value = this.getLineRawContent(e).replace(/(\r\n|\r|\n)$/, '')),
              this.j.value);
        },
      },
      {
        key: 'l',
        value: function l(e) {
          if (e.remainder === e.node.piece.length) {
            var _t7 = e.node.next();
            if (!_t7) return 0;
            var n = this.a[_t7.piece.bufferIndex],
              r = this.u(_t7.piece.bufferIndex, _t7.piece.start);
            return n.buffer.charCodeAt(r);
          } else {
            var _t8 = this.a[e.node.piece.bufferIndex],
              _r9 = this.u(e.node.piece.bufferIndex, e.node.piece.start) + e.remainder;
            return _t8.buffer.charCodeAt(_r9);
          }
        },
      },
      {
        key: 'getLineCharCode',
        value: function getLineCharCode(e, t) {
          var n = this.H(e, t + 1);
          return this.l(n);
        },
      },
      {
        key: 'getLineLength',
        value: function getLineLength(e) {
          if (e === this.getLineCount()) {
            var _t9 = this.getOffsetAt(e, 1);
            return this.getLength() - _t9;
          }
          return this.getOffsetAt(e + 1, 1) - this.getOffsetAt(e, 1) - this.e;
        },
      },
      {
        key: 'getCharCode',
        value: function getCharCode(e) {
          var t = this.G(e);
          return this.l(t);
        },
      },
      {
        key: 'getNearestChunk',
        value: function getNearestChunk(e) {
          var t = this.G(e);
          if (t.remainder === t.node.piece.length) {
            var n = t.node.next();
            if (!n || n === w) return '';
            var r = this.a[n.piece.bufferIndex],
              i = this.u(n.piece.bufferIndex, n.piece.start);
            return r.buffer.substring(i, i + n.piece.length);
          } else {
            var _n7 = this.a[t.node.piece.bufferIndex],
              _r0 = this.u(t.node.piece.bufferIndex, t.node.piece.start),
              _i11 = _r0 + t.remainder,
              s = _r0 + t.node.piece.length;
            return _n7.buffer.substring(_i11, s);
          }
        },
      },
      {
        key: 'findMatchesInNode',
        value: function findMatchesInNode(e, t, n, r, i, s, o, l, a, u, c) {
          var h = this.a[e.piece.bufferIndex],
            f = this.u(e.piece.bufferIndex, e.piece.start),
            d = this.u(e.piece.bufferIndex, i),
            b = this.u(e.piece.bufferIndex, s);
          var g;
          var m = { line: 0, column: 0 };
          var N, S;
          t._wordSeparators
            ? ((N = h.buffer.substring(d, b)),
              (S = function S($) {
                return $ + d;
              }),
              t.reset(0))
            : ((N = h.buffer),
              (S = function S($) {
                return $;
              }),
              t.reset(d));
          do
            if (((g = t.next(N)), g)) {
              if (S(g.index) >= b) return u;
              this.s(e, S(g.index) - f, m);
              var $ = this.t(e.piece.bufferIndex, i, m),
                C = m.line === i.line ? m.column - i.column + r : m.column + 1,
                A = C + g[0].length;
              if (
                ((c[u++] = tr(new J(n + $, C, n + $, A), g, l)),
                S(g.index) + g[0].length >= b || u >= a)
              )
                return u;
            }
          while (g);
          return u;
        },
      },
      {
        key: 'findMatchesLineByLine',
        value: function findMatchesLineByLine(e, t, n, r) {
          var i = [];
          var s = 0;
          var o = new M0(t.wordSeparators, t.regex);
          var l = this.H(e.startLineNumber, e.startColumn);
          if (l === null) return [];
          var a = this.H(e.endLineNumber, e.endColumn);
          if (a === null) return [];
          var u = this.s(l.node, l.remainder);
          var c = this.s(a.node, a.remainder);
          if (l.node === a.node)
            return (
              this.findMatchesInNode(
                l.node,
                o,
                e.startLineNumber,
                e.startColumn,
                u,
                c,
                t,
                n,
                r,
                s,
                i,
              ),
              i
            );
          var h = e.startLineNumber,
            f = l.node;
          for (; f !== a.node; ) {
            var b = this.t(f.piece.bufferIndex, u, f.piece.end);
            if (b >= 1) {
              var m = this.a[f.piece.bufferIndex].lineStarts,
                N = this.u(f.piece.bufferIndex, f.piece.start),
                S = m[u.line + b],
                $ = h === e.startLineNumber ? e.startColumn : 1;
              if (
                ((s = this.findMatchesInNode(f, o, h, $, u, this.s(f, S - N), t, n, r, s, i)),
                s >= r)
              )
                return i;
              h += b;
            }
            var g = h === e.startLineNumber ? e.startColumn - 1 : 0;
            if (h === e.endLineNumber) {
              var _m = this.getLineContent(h).substring(g, e.endColumn - 1);
              return (s = this.n(t, o, _m, e.endLineNumber, g, s, i, n, r)), i;
            }
            if (((s = this.n(t, o, this.getLineContent(h).substr(g), h, g, s, i, n, r)), s >= r))
              return i;
            h++, (l = this.H(h, 1)), (f = l.node), (u = this.s(l.node, l.remainder));
          }
          if (h === e.endLineNumber) {
            var _b = h === e.startLineNumber ? e.startColumn - 1 : 0,
              _g2 = this.getLineContent(h).substring(_b, e.endColumn - 1);
            return (s = this.n(t, o, _g2, e.endLineNumber, _b, s, i, n, r)), i;
          }
          var d = h === e.startLineNumber ? e.startColumn : 1;
          return (s = this.findMatchesInNode(a.node, o, h, d, u, c, t, n, r, s, i)), i;
        },
      },
      {
        key: 'n',
        value: function n(e, t, _n6, r, i, s, o, l, a) {
          var u = e.wordSeparators;
          if (!l && e.simpleSearch) {
            var h = e.simpleSearch,
              f = h.length,
              d = _n6.length;
            var b = -f;
            for (; (b = _n6.indexOf(h, b + f)) !== -1; )
              if (
                (!u || er(u, _n6, d, b, f)) &&
                ((o[s++] = new f1(new J(r, b + 1 + i, r, b + 1 + f + i), null)), s >= a)
              )
                return s;
            return s;
          }
          var c;
          t.reset(0);
          do
            if (
              ((c = t.next(_n6)),
              c &&
                ((o[s++] = tr(new J(r, c.index + 1 + i, r, c.index + 1 + c[0].length + i), c, l)),
                s >= a))
            )
              return s;
          while (c);
          return s;
        },
      },
      {
        key: 'insert',
        value: function insert(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          if (
            ((this.f = this.f && n), (this.j.lineNumber = 0), (this.j.value = ''), this.root !== w)
          ) {
            var _this$G = this.G(e),
              r = _this$G.node,
              i = _this$G.remainder,
              s = _this$G.nodeStartOffset,
              o = r.piece,
              l = o.bufferIndex,
              a = this.s(r, i);
            if (
              r.piece.bufferIndex === 0 &&
              o.end.line === this.g.line &&
              o.end.column === this.g.column &&
              s + o.length === e &&
              t.length < bt
            ) {
              this.F(r, t), this.y();
              return;
            }
            if (s === e) this.o(t, r), this.h.validate(e);
            else if (s + r.piece.length > e) {
              var u = [];
              var c = new K(
                o.bufferIndex,
                a,
                o.end,
                this.t(o.bufferIndex, a, o.end),
                this.u(l, o.end) - this.u(l, a),
              );
              if (this.K() && this.M(t) && this.I(r, i) === 10) {
                var b = { line: c.start.line + 1, column: 0 };
                (c = new K(c.bufferIndex, b, c.end, this.t(c.bufferIndex, b, c.end), c.length - 1)),
                  (t += '\n');
              }
              if (this.K() && this.L(t)) {
                if (this.I(r, i - 1) === 13) {
                  var _b2 = this.s(r, i - 1);
                  this.C(r, _b2), (t = '\r' + t), r.piece.length === 0 && u.push(r);
                } else this.C(r, a);
              } else this.C(r, a);
              var h = this.w(t);
              c.length > 0 && this.S(r, c);
              var f = r;
              for (var d = 0; d < h.length; d++) f = this.S(f, h[d]);
              this.v(u);
            } else this.q(t, r);
          } else {
            var _r1 = this.w(t);
            var _i12 = this.T(null, _r1[0]);
            for (var _s7 = 1; _s7 < _r1.length; _s7++) _i12 = this.S(_i12, _r1[_s7]);
          }
          this.y();
        },
      },
      {
        key: 'delete',
        value: function _delete(e, t) {
          if (((this.j.lineNumber = 0), (this.j.value = ''), t <= 0 || this.root === w)) return;
          var n = this.G(e),
            r = this.G(e + t),
            i = n.node,
            s = r.node;
          if (i === s) {
            var h = this.s(i, n.remainder),
              f = this.s(i, r.remainder);
            if (n.nodeStartOffset === e) {
              if (t === i.piece.length) {
                var d = i.next();
                Ie(this, i), this.N(d), this.y();
                return;
              }
              this.D(i, f), this.h.validate(e), this.N(i), this.y();
              return;
            }
            if (n.nodeStartOffset + i.piece.length === e + t) {
              this.C(i, h), this.O(i), this.y();
              return;
            }
            this.E(i, h, f), this.y();
            return;
          }
          var o = [],
            l = this.s(i, n.remainder);
          this.C(i, l), this.h.validate(e), i.piece.length === 0 && o.push(i);
          var a = this.s(s, r.remainder);
          this.D(s, a), s.piece.length === 0 && o.push(s);
          var u = i.next();
          for (var _h6 = u; _h6 !== w && _h6 !== s; _h6 = _h6.next()) o.push(_h6);
          var c = i.piece.length === 0 ? i.prev() : i;
          this.v(o), this.O(c), this.y();
        },
      },
      {
        key: 'o',
        value: function o(e, t) {
          var n = [];
          if (this.K() && this.M(e) && this.L(t)) {
            var s = t.piece,
              _o6 = { line: s.start.line + 1, column: 0 },
              l = new K(s.bufferIndex, _o6, s.end, this.t(s.bufferIndex, _o6, s.end), s.length - 1);
            (t.piece = l), (e += '\n'), pt(this, t, -1, -1), t.piece.length === 0 && n.push(t);
          }
          var r = this.w(e);
          var i = this.T(t, r[r.length - 1]);
          for (var _s8 = r.length - 2; _s8 >= 0; _s8--) i = this.T(i, r[_s8]);
          this.N(i), this.v(n);
        },
      },
      {
        key: 'q',
        value: function q(e, t) {
          this.Q(e, t) && (e += '\n');
          var n = this.w(e),
            r = this.S(t, n[0]);
          var i = r;
          for (var s = 1; s < n.length; s++) i = this.S(i, n[s]);
          this.N(r);
        },
      },
      {
        key: 's',
        value: function s(e, t, n) {
          var r = e.piece,
            i = e.piece.bufferIndex,
            s = this.a[i].lineStarts,
            l = s[r.start.line] + r.start.column + t;
          var a = r.start.line,
            u = r.end.line,
            c = 0,
            h = 0,
            f = 0;
          for (; a <= u && ((c = (a + (u - a) / 2) | 0), (f = s[c]), c !== u); )
            if (((h = s[c + 1]), l < f)) u = c - 1;
            else if (l >= h) a = c + 1;
            else break;
          return n ? ((n.line = c), (n.column = l - f), null) : { line: c, column: l - f };
        },
      },
      {
        key: 't',
        value: function t(e, _t6, n) {
          if (n.column === 0) return n.line - _t6.line;
          var r = this.a[e].lineStarts;
          if (n.line === r.length - 1) return n.line - _t6.line;
          var i = r[n.line + 1],
            s = r[n.line] + n.column;
          if (i > s + 1) return n.line - _t6.line;
          var o = s - 1;
          return this.a[e].buffer.charCodeAt(o) === 13 ? n.line - _t6.line + 1 : n.line - _t6.line;
        },
      },
      {
        key: 'u',
        value: function u(e, t) {
          return this.a[e].lineStarts[t.line] + t.column;
        },
      },
      {
        key: 'v',
        value: function v(e) {
          for (var _t0 = 0; _t0 < e.length; _t0++) Ie(this, e[_t0]);
        },
      },
      {
        key: 'w',
        value: function w(e) {
          if (e.length > bt) {
            var u = [];
            for (; e.length > bt; ) {
              var h = e.charCodeAt(bt - 1);
              var f = void 0;
              h === 13 || (h >= 55296 && h <= 56319)
                ? ((f = e.substring(0, bt - 1)), (e = e.substring(bt - 1)))
                : ((f = e.substring(0, bt)), (e = e.substring(bt)));
              var d = vt(f);
              u.push(
                new K(
                  this.a.length,
                  { line: 0, column: 0 },
                  { line: d.length - 1, column: f.length - d[d.length - 1] },
                  d.length - 1,
                  f.length,
                ),
              ),
                this.a.push(new Pt(f, d));
            }
            var c = vt(e);
            return (
              u.push(
                new K(
                  this.a.length,
                  { line: 0, column: 0 },
                  { line: c.length - 1, column: e.length - c[c.length - 1] },
                  c.length - 1,
                  e.length,
                ),
              ),
              this.a.push(new Pt(e, c)),
              u
            );
          }
          var t = this.a[0].buffer.length;
          var n = vt(e, !1);
          var r = this.g;
          if (
            this.a[0].lineStarts[this.a[0].lineStarts.length - 1] === t &&
            t !== 0 &&
            this.L(e) &&
            this.M(this.a[0].buffer)
          ) {
            (this.g = { line: this.g.line, column: this.g.column + 1 }), (r = this.g);
            for (var _u7 = 0; _u7 < n.length; _u7++) n[_u7] += t + 1;
            (this.a[0].lineStarts = this.a[0].lineStarts.concat(n.slice(1))),
              (this.a[0].buffer += '_' + e),
              (t += 1);
          } else {
            if (t !== 0) for (var _u8 = 0; _u8 < n.length; _u8++) n[_u8] += t;
            (this.a[0].lineStarts = this.a[0].lineStarts.concat(n.slice(1))),
              (this.a[0].buffer += e);
          }
          var i = this.a[0].buffer.length,
            s = this.a[0].lineStarts.length - 1,
            o = i - this.a[0].lineStarts[s],
            l = { line: s, column: o },
            a = new K(0, r, l, this.t(0, r, l), i - t);
          return (this.g = l), [a];
        },
      },
      {
        key: 'getLinesRawContent',
        value: function getLinesRawContent() {
          return this.U(this.root);
        },
      },
      {
        key: 'getLineRawContent',
        value: function getLineRawContent(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = this.root,
            r = '';
          var i = this.h.get2(e);
          if (i) {
            n = i.node;
            var s = this.B(n, e - i.nodeStartLineNumber - 1),
              o = this.a[n.piece.bufferIndex].buffer,
              l = this.u(n.piece.bufferIndex, n.piece.start);
            if (i.nodeStartLineNumber + n.piece.lineFeedCnt === e)
              r = o.substring(l + s, l + n.piece.length);
            else {
              var a = this.B(n, e - i.nodeStartLineNumber);
              return o.substring(l + s, l + a - t);
            }
          } else {
            var _s9 = 0;
            var _o7 = e;
            for (; n !== w; )
              if (n.left !== w && n.lf_left >= e - 1) n = n.left;
              else if (n.lf_left + n.piece.lineFeedCnt > e - 1) {
                var _l9 = this.B(n, e - n.lf_left - 2),
                  _a8 = this.B(n, e - n.lf_left - 1),
                  u = this.a[n.piece.bufferIndex].buffer,
                  c = this.u(n.piece.bufferIndex, n.piece.start);
                return (
                  (_s9 += n.size_left),
                  this.h.set({
                    node: n,
                    nodeStartOffset: _s9,
                    nodeStartLineNumber: _o7 - (e - 1 - n.lf_left),
                  }),
                  u.substring(c + _l9, c + _a8 - t)
                );
              } else if (n.lf_left + n.piece.lineFeedCnt === e - 1) {
                var _l0 = this.B(n, e - n.lf_left - 2),
                  _a9 = this.a[n.piece.bufferIndex].buffer,
                  _u9 = this.u(n.piece.bufferIndex, n.piece.start);
                r = _a9.substring(_u9 + _l0, _u9 + n.piece.length);
                break;
              } else
                (e -= n.lf_left + n.piece.lineFeedCnt),
                  (_s9 += n.size_left + n.piece.length),
                  (n = n.right);
          }
          for (n = n.next(); n !== w; ) {
            var _s0 = this.a[n.piece.bufferIndex].buffer;
            if (n.piece.lineFeedCnt > 0) {
              var _o8 = this.B(n, 0),
                _l1 = this.u(n.piece.bufferIndex, n.piece.start);
              return (r += _s0.substring(_l1, _l1 + _o8 - t)), r;
            } else {
              var _o9 = this.u(n.piece.bufferIndex, n.piece.start);
              r += _s0.substr(_o9, n.piece.length);
            }
            n = n.next();
          }
          return r;
        },
      },
      {
        key: 'y',
        value: function y() {
          var e = this.root,
            t = 1,
            n = 0;
          for (; e !== w; )
            (t += e.lf_left + e.piece.lineFeedCnt),
              (n += e.size_left + e.piece.length),
              (e = e.right);
          (this.b = t), (this.c = n), this.h.validate(this.c);
        },
      },
      {
        key: 'A',
        value: function A(e, t) {
          var n = e.piece,
            r = this.s(e, t),
            i = r.line - n.start.line;
          if (this.u(n.bufferIndex, n.end) - this.u(n.bufferIndex, n.start) === t) {
            var s = this.t(e.piece.bufferIndex, n.start, r);
            if (s !== i) return { index: s, remainder: 0 };
          }
          return { index: i, remainder: r.column };
        },
      },
      {
        key: 'B',
        value: function B(e, t) {
          if (t < 0) return 0;
          var n = e.piece,
            r = this.a[n.bufferIndex].lineStarts,
            i = n.start.line + t + 1;
          return i > n.end.line
            ? r[n.end.line] + n.end.column - r[n.start.line] - n.start.column
            : r[i] - r[n.start.line] - n.start.column;
        },
      },
      {
        key: 'C',
        value: function C(e, t) {
          var n = e.piece,
            r = n.lineFeedCnt,
            i = this.u(n.bufferIndex, n.end),
            s = t,
            o = this.u(n.bufferIndex, s),
            l = this.t(n.bufferIndex, n.start, s),
            a = l - r,
            u = o - i,
            c = n.length + u;
          (e.piece = new K(n.bufferIndex, n.start, s, l, c)), pt(this, e, u, a);
        },
      },
      {
        key: 'D',
        value: function D(e, t) {
          var n = e.piece,
            r = n.lineFeedCnt,
            i = this.u(n.bufferIndex, n.start),
            s = t,
            o = this.t(n.bufferIndex, s, n.end),
            l = this.u(n.bufferIndex, s),
            a = o - r,
            u = i - l,
            c = n.length + u;
          (e.piece = new K(n.bufferIndex, s, n.end, o, c)), pt(this, e, u, a);
        },
      },
      {
        key: 'E',
        value: function E(e, t, n) {
          var r = e.piece,
            i = r.start,
            s = r.end,
            o = r.length,
            l = r.lineFeedCnt,
            a = t,
            u = this.t(r.bufferIndex, r.start, a),
            c = this.u(r.bufferIndex, t) - this.u(r.bufferIndex, i);
          (e.piece = new K(r.bufferIndex, r.start, a, u, c)), pt(this, e, c - o, u - l);
          var h = new K(
              r.bufferIndex,
              n,
              s,
              this.t(r.bufferIndex, n, s),
              this.u(r.bufferIndex, s) - this.u(r.bufferIndex, n),
            ),
            f = this.S(e, h);
          this.N(f);
        },
      },
      {
        key: 'F',
        value: function F(e, t) {
          this.Q(t, e) && (t += '\n');
          var n = this.K() && this.L(t) && this.M(e),
            r = this.a[0].buffer.length;
          this.a[0].buffer += t;
          var i = vt(t, !1);
          for (var f = 0; f < i.length; f++) i[f] += r;
          if (n) {
            var _f2 = this.a[0].lineStarts[this.a[0].lineStarts.length - 2];
            this.a[0].lineStarts.pop(), (this.g = { line: this.g.line - 1, column: r - _f2 });
          }
          this.a[0].lineStarts = this.a[0].lineStarts.concat(i.slice(1));
          var s = this.a[0].lineStarts.length - 1,
            o = this.a[0].buffer.length - this.a[0].lineStarts[s],
            l = { line: s, column: o },
            a = e.piece.length + t.length,
            u = e.piece.lineFeedCnt,
            c = this.t(0, e.piece.start, l),
            h = c - u;
          (e.piece = new K(e.piece.bufferIndex, e.piece.start, l, c, a)),
            (this.g = l),
            pt(this, e, t.length, h);
        },
      },
      {
        key: 'G',
        value: function G(e) {
          var t = this.root;
          var n = this.h.get(e);
          if (n)
            return {
              node: n.node,
              nodeStartOffset: n.nodeStartOffset,
              remainder: e - n.nodeStartOffset,
            };
          var r = 0;
          for (; t !== w; )
            if (t.size_left > e) t = t.left;
            else if (t.size_left + t.piece.length >= e) {
              r += t.size_left;
              var i = { node: t, remainder: e - t.size_left, nodeStartOffset: r };
              return this.h.set(i), i;
            } else
              (e -= t.size_left + t.piece.length),
                (r += t.size_left + t.piece.length),
                (t = t.right);
          return null;
        },
      },
      {
        key: 'H',
        value: function H(e, t) {
          var n = this.root,
            r = 0;
          for (; n !== w; )
            if (n.left !== w && n.lf_left >= e - 1) n = n.left;
            else if (n.lf_left + n.piece.lineFeedCnt > e - 1) {
              var i = this.B(n, e - n.lf_left - 2),
                s = this.B(n, e - n.lf_left - 1);
              return (
                (r += n.size_left),
                { node: n, remainder: Math.min(i + t - 1, s), nodeStartOffset: r }
              );
            } else if (n.lf_left + n.piece.lineFeedCnt === e - 1) {
              var _i13 = this.B(n, e - n.lf_left - 2);
              if (_i13 + t - 1 <= n.piece.length)
                return { node: n, remainder: _i13 + t - 1, nodeStartOffset: r };
              t -= n.piece.length - _i13;
              break;
            } else
              (e -= n.lf_left + n.piece.lineFeedCnt),
                (r += n.size_left + n.piece.length),
                (n = n.right);
          for (n = n.next(); n !== w; ) {
            if (n.piece.lineFeedCnt > 0) {
              var _i14 = this.B(n, 0),
                _s1 = this.J(n);
              return { node: n, remainder: Math.min(t - 1, _i14), nodeStartOffset: _s1 };
            } else if (n.piece.length >= t - 1) {
              var _i15 = this.J(n);
              return { node: n, remainder: t - 1, nodeStartOffset: _i15 };
            } else t -= n.piece.length;
            n = n.next();
          }
          return null;
        },
      },
      {
        key: 'I',
        value: function I(e, t) {
          if (e.piece.lineFeedCnt < 1) return -1;
          var n = this.a[e.piece.bufferIndex],
            r = this.u(e.piece.bufferIndex, e.piece.start) + t;
          return n.buffer.charCodeAt(r);
        },
      },
      {
        key: 'J',
        value: function J(e) {
          if (!e) return 0;
          var t = e.size_left;
          for (; e !== this.root; )
            e.parent.right === e && (t += e.parent.size_left + e.parent.piece.length),
              (e = e.parent);
          return t;
        },
      },
      {
        key: 'K',
        value: function K() {
          return !(this.f && this.d === '\n');
        },
      },
      {
        key: 'L',
        value: function L(e) {
          if (typeof e == 'string') return e.charCodeAt(0) === 10;
          if (e === w || e.piece.lineFeedCnt === 0) return !1;
          var t = e.piece,
            n = this.a[t.bufferIndex].lineStarts,
            r = t.start.line,
            i = n[r] + t.start.column;
          return r === n.length - 1 || n[r + 1] > i + 1
            ? !1
            : this.a[t.bufferIndex].buffer.charCodeAt(i) === 10;
        },
      },
      {
        key: 'M',
        value: function M(e) {
          return typeof e == 'string'
            ? e.charCodeAt(e.length - 1) === 13
            : e === w || e.piece.lineFeedCnt === 0
              ? !1
              : this.I(e, e.piece.length - 1) === 13;
        },
      },
      {
        key: 'N',
        value: function N(e) {
          if (this.K() && this.L(e)) {
            var _t1 = e.prev();
            this.M(_t1) && this.P(_t1, e);
          }
        },
      },
      {
        key: 'O',
        value: function O(e) {
          if (this.K() && this.M(e)) {
            var _t10 = e.next();
            this.L(_t10) && this.P(e, _t10);
          }
        },
      },
      {
        key: 'P',
        value: function P(e, t) {
          var n = [],
            r = this.a[e.piece.bufferIndex].lineStarts;
          var i;
          e.piece.end.column === 0
            ? (i = {
                line: e.piece.end.line - 1,
                column: r[e.piece.end.line] - r[e.piece.end.line - 1] - 1,
              })
            : (i = { line: e.piece.end.line, column: e.piece.end.column - 1 });
          var s = e.piece.length - 1,
            o = e.piece.lineFeedCnt - 1;
          (e.piece = new K(e.piece.bufferIndex, e.piece.start, i, o, s)),
            pt(this, e, -1, -1),
            e.piece.length === 0 && n.push(e);
          var l = { line: t.piece.start.line + 1, column: 0 },
            a = t.piece.length - 1,
            u = this.t(t.piece.bufferIndex, l, t.piece.end);
          (t.piece = new K(t.piece.bufferIndex, l, t.piece.end, u, a)),
            pt(this, t, -1, -1),
            t.piece.length === 0 && n.push(t);
          var c = this.w('\r\n');
          this.S(e, c[0]);
          for (var h = 0; h < n.length; h++) Ie(this, n[h]);
        },
      },
      {
        key: 'Q',
        value: function Q(e, t) {
          if (this.K() && this.M(e)) {
            var n = t.next();
            if (this.L(n)) {
              if (((e += '\n'), n.piece.length === 1)) Ie(this, n);
              else {
                var r = n.piece,
                  i = { line: r.start.line + 1, column: 0 },
                  s = r.length - 1,
                  o = this.t(r.bufferIndex, i, r.end);
                (n.piece = new K(r.bufferIndex, i, r.end, o, s)), pt(this, n, -1, -1);
              }
              return !0;
            }
          }
          return !1;
        },
      },
      {
        key: 'iterate',
        value: function iterate(e, t) {
          if (e === w) return t(w);
          var n = this.iterate(e.left, t);
          return n && t(e) && this.iterate(e.right, t);
        },
      },
      {
        key: 'R',
        value: function R(e) {
          if (e === w) return '';
          var t = this.a[e.piece.bufferIndex],
            n = e.piece,
            r = this.u(n.bufferIndex, n.start),
            i = this.u(n.bufferIndex, n.end);
          return t.buffer.substring(r, i);
        },
      },
      {
        key: 'getPieceContent',
        value: function getPieceContent(e) {
          var t = this.a[e.bufferIndex],
            n = this.u(e.bufferIndex, e.start),
            r = this.u(e.bufferIndex, e.end);
          return t.buffer.substring(n, r);
        },
      },
      {
        key: 'S',
        value: function S(e, t) {
          var n = new d1(t, 1);
          if (
            ((n.left = w),
            (n.right = w),
            (n.parent = w),
            (n.size_left = 0),
            (n.lf_left = 0),
            this.root === w)
          )
            (this.root = n), (n.color = 0);
          else if (e.right === w) (e.right = n), (n.parent = e);
          else {
            var i = g1(e.right);
            (i.left = n), (n.parent = i);
          }
          return Jn(this, n), n;
        },
      },
      {
        key: 'T',
        value: function T(e, t) {
          var n = new d1(t, 1);
          if (
            ((n.left = w),
            (n.right = w),
            (n.parent = w),
            (n.size_left = 0),
            (n.lf_left = 0),
            this.root === w)
          )
            (this.root = n), (n.color = 0);
          else if (e.left === w) (e.left = n), (n.parent = e);
          else {
            var r = Hn(e.left);
            (r.right = n), (n.parent = r);
          }
          return Jn(this, n), n;
        },
      },
      {
        key: 'U',
        value: function U(e) {
          var _this22 = this;
          var t = '';
          return (
            this.iterate(e, function (n) {
              return (t += _this22.R(n)), !0;
            }),
            t
          );
        },
      },
    ]);
  })(),
  rr;
(function (e) {
  (e[(e.Unknown = 0)] = 'Unknown'),
    (e[(e.Invalid = 3)] = 'Invalid'),
    (e[(e.LF = 1)] = 'LF'),
    (e[(e.CRLF = 2)] = 'CRLF');
})(rr || (rr = {}));
function w1(e) {
  var t = 0,
    n = 0,
    r = 0,
    i = 0;
  for (var s = 0, o = e.length; s < o; s++) {
    var l = e.charCodeAt(s);
    l === 13
      ? (t === 0 && (n = s),
        t++,
        s + 1 < o && e.charCodeAt(s + 1) === 10 ? ((i |= 2), s++) : (i |= 3),
        (r = s + 1))
      : l === 10 && ((i |= 1), t === 0 && (n = s), t++, (r = s + 1));
  }
  return t === 0 && (n = e.length), [t, n, e.length - r, i];
}
var C1;
function q0() {
  return C1 || (C1 = new TextDecoder('UTF-16LE')), C1;
}
function U0(e, t, n) {
  var r = new Uint16Array(e.buffer, t, n);
  return n > 0 && (r[0] === 65279 || r[0] === 65534) ? j0(e, t, n) : q0().decode(r);
}
function j0(e, t, n) {
  var r = [];
  var i = 0;
  for (var s = 0; s < n; s++) {
    var o = Bi(e, t);
    (t += 2), (r[i++] = String.fromCharCode(o));
  }
  return r.join('');
}
function _e(e) {
  return e.replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}
var z0 = /*#__PURE__*/ (function () {
    function ct(t, n, r, i) {
      _classCallCheck(this, ct);
      (this.oldPosition = t), (this.oldText = n), (this.newPosition = r), (this.newText = i);
    }
    return _createClass(
      ct,
      [
        {
          key: 'oldLength',
          get: function get() {
            return this.oldText.length;
          },
        },
        {
          key: 'oldEnd',
          get: function get() {
            return this.oldPosition + this.oldText.length;
          },
        },
        {
          key: 'newLength',
          get: function get() {
            return this.newText.length;
          },
        },
        {
          key: 'newEnd',
          get: function get() {
            return this.newPosition + this.newText.length;
          },
        },
        {
          key: 'shift',
          value: function shift(t) {
            return new ct(this.oldPosition + t, this.oldText, this.newPosition + t, this.newText);
          },
        },
        {
          key: 'toString',
          value: function toString() {
            return this.oldText.length === 0
              ? '(insert@'.concat(this.oldPosition, ' "').concat(_e(this.newText), '")')
              : this.newText.length === 0
                ? '(delete@'.concat(this.oldPosition, ' "').concat(_e(this.oldText), '")')
                : '(replace@'
                    .concat(this.oldPosition, ' "')
                    .concat(_e(this.oldText), '" with "')
                    .concat(_e(this.newText), '")');
          },
        },
        {
          key: 'writeSize',
          value: function writeSize() {
            return 8 + ct.a(this.oldText) + ct.a(this.newText);
          },
        },
        {
          key: 'write',
          value: function write(t, n) {
            return (
              pe(t, this.oldPosition, n),
              (n += 4),
              pe(t, this.newPosition, n),
              (n += 4),
              (n = ct.c(t, this.oldText, n)),
              (n = ct.c(t, this.newText, n)),
              n
            );
          },
        },
      ],
      [
        {
          key: 'a',
          value: function a(t) {
            return 4 + 2 * t.length;
          },
        },
        {
          key: 'c',
          value: function c(t, n, r) {
            var i = n.length;
            pe(t, i, r), (r += 4);
            for (var s = 0; s < i; s++) Ti(t, n.charCodeAt(s), r), (r += 2);
            return r;
          },
        },
        {
          key: 'd',
          value: function d(t, n) {
            var r = me(t, n);
            return (n += 4), U0(t, n, r);
          },
        },
        {
          key: 'read',
          value: function read(t, n, r) {
            var i = me(t, n);
            n += 4;
            var s = me(t, n);
            n += 4;
            var o = ct.d(t, n);
            n += ct.a(o);
            var l = ct.d(t, n);
            return (n += ct.a(l)), r.push(new ct(i, o, s, l)), n;
          },
        },
      ],
    );
  })(),
  B0 = /*#__PURE__*/ (function (_Ut) {
    function ae(t, n, r, i, s, o, l) {
      var _this23;
      _classCallCheck(this, ae);
      (_this23 = _callSuper(this, ae)),
        (_this23.m = _this23.D(new at())),
        (_this23.onDidChangeContent = _this23.m.event),
        (_this23.f = n),
        (_this23.j = !o),
        (_this23.g = i),
        (_this23.h = s),
        (_this23.c = new F0(t, r, l));
      return _this23;
    }
    _inherits(ae, _Ut);
    return _createClass(
      ae,
      [
        {
          key: 'equals',
          value: function equals(t) {
            return !(t instanceof ae) || this.f !== t.f || this.getEOL() !== t.getEOL()
              ? !1
              : this.c.equal(t.c);
          },
        },
        {
          key: 'mightContainRTL',
          value: function mightContainRTL() {
            return this.g;
          },
        },
        {
          key: 'mightContainUnusualLineTerminators',
          value: function mightContainUnusualLineTerminators() {
            return this.h;
          },
        },
        {
          key: 'resetMightContainUnusualLineTerminators',
          value: function resetMightContainUnusualLineTerminators() {
            this.h = !1;
          },
        },
        {
          key: 'mightContainNonBasicASCII',
          value: function mightContainNonBasicASCII() {
            return this.j;
          },
        },
        {
          key: 'getBOM',
          value: function getBOM() {
            return this.f;
          },
        },
        {
          key: 'getEOL',
          value: function getEOL() {
            return this.c.getEOL();
          },
        },
        {
          key: 'createSnapshot',
          value: function createSnapshot(t) {
            return this.c.createSnapshot(t ? this.f : '');
          },
        },
        {
          key: 'getOffsetAt',
          value: function getOffsetAt(t, n) {
            return this.c.getOffsetAt(t, n);
          },
        },
        {
          key: 'getPositionAt',
          value: function getPositionAt(t) {
            return this.c.getPositionAt(t);
          },
        },
        {
          key: 'getRangeAt',
          value: function getRangeAt(t, n) {
            var r = t + n,
              i = this.getPositionAt(t),
              s = this.getPositionAt(r);
            return new J(i.lineNumber, i.column, s.lineNumber, s.column);
          },
        },
        {
          key: 'getValueInRange',
          value: function getValueInRange(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (t.isEmpty()) return '';
            var r = this.n(n);
            return this.c.getValueInRange(t, r);
          },
        },
        {
          key: 'getValueLengthInRange',
          value: function getValueLengthInRange(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (t.isEmpty()) return 0;
            if (t.startLineNumber === t.endLineNumber) return t.endColumn - t.startColumn;
            var r = this.getOffsetAt(t.startLineNumber, t.startColumn),
              i = this.getOffsetAt(t.endLineNumber, t.endColumn);
            var s = 0;
            var o = this.n(n),
              l = this.getEOL();
            if (o.length !== l.length) {
              var a = o.length - l.length,
                u = t.endLineNumber - t.startLineNumber;
              s = a * u;
            }
            return i - r + s;
          },
        },
        {
          key: 'getCharacterCountInRange',
          value: function getCharacterCountInRange(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (this.j) {
              var r = 0;
              var i = t.startLineNumber,
                s = t.endLineNumber;
              for (var o = i; o <= s; o++) {
                var l = this.getLineContent(o),
                  a = o === i ? t.startColumn - 1 : 0,
                  u = o === s ? t.endColumn - 1 : l.length;
                for (var c = a; c < u; c++)
                  t1(l.charCodeAt(c)) ? ((r = r + 1), (c = c + 1)) : (r = r + 1);
              }
              return (r += this.n(n).length * (s - i)), r;
            }
            return this.getValueLengthInRange(t, n);
          },
        },
        {
          key: 'getNearestChunk',
          value: function getNearestChunk(t) {
            return this.c.getNearestChunk(t);
          },
        },
        {
          key: 'getLength',
          value: function getLength() {
            return this.c.getLength();
          },
        },
        {
          key: 'getLineCount',
          value: function getLineCount() {
            return this.c.getLineCount();
          },
        },
        {
          key: 'getLinesContent',
          value: function getLinesContent() {
            return this.c.getLinesContent();
          },
        },
        {
          key: 'getLineContent',
          value: function getLineContent(t) {
            return this.c.getLineContent(t);
          },
        },
        {
          key: 'getLineCharCode',
          value: function getLineCharCode(t, n) {
            return this.c.getLineCharCode(t, n);
          },
        },
        {
          key: 'getCharCode',
          value: function getCharCode(t) {
            return this.c.getCharCode(t);
          },
        },
        {
          key: 'getLineLength',
          value: function getLineLength(t) {
            return this.c.getLineLength(t);
          },
        },
        {
          key: 'getLineMinColumn',
          value: function getLineMinColumn(t) {
            return 1;
          },
        },
        {
          key: 'getLineMaxColumn',
          value: function getLineMaxColumn(t) {
            return this.getLineLength(t) + 1;
          },
        },
        {
          key: 'getLineFirstNonWhitespaceColumn',
          value: function getLineFirstNonWhitespaceColumn(t) {
            var n = Qe(this.getLineContent(t));
            return n === -1 ? 0 : n + 1;
          },
        },
        {
          key: 'getLineLastNonWhitespaceColumn',
          value: function getLineLastNonWhitespaceColumn(t) {
            var n = ps(this.getLineContent(t));
            return n === -1 ? 0 : n + 2;
          },
        },
        {
          key: 'n',
          value: function n(t) {
            switch (t) {
              case 1:
                return '\n';
              case 2:
                return '\r\n';
              case 0:
                return this.getEOL();
              default:
                throw new Error('Unknown EOL preference');
            }
          },
        },
        {
          key: 'setEOL',
          value: function setEOL(t) {
            this.c.setEOL(t);
          },
        },
        {
          key: 'applyEdits',
          value: function applyEdits(t, n, r) {
            var i = this.g,
              s = this.h,
              o = this.j,
              l = !0,
              a = [];
            for (var g = 0; g < t.length; g++) {
              var m = t[g];
              l && m._isTracked && (l = !1);
              var N = m.range;
              if (m.text) {
                var x = !0;
                o || ((x = !As(m.text)), (o = x)),
                  !i && x && (i = hn(m.text)),
                  !s && x && (s = cn(m.text));
              }
              var S = '',
                $ = 0,
                C = 0,
                A = 0;
              if (m.text) {
                var _x2 = void 0;
                var _w = w1(m.text);
                var _w2 = _slicedToArray(_w, 4);
                $ = _w2[0];
                C = _w2[1];
                A = _w2[2];
                _x2 = _w2[3];
                var R = this.getEOL();
                _x2 === 0 || _x2 === (R === '\r\n' ? 2 : 1)
                  ? (S = m.text)
                  : (S = m.text.replace(/\r\n|\r|\n/g, R));
              }
              a[g] = {
                sortIndex: g,
                identifier: m.identifier || null,
                range: N,
                rangeOffset: this.getOffsetAt(N.startLineNumber, N.startColumn),
                rangeLength: this.getValueLengthInRange(N),
                text: S,
                eolCount: $,
                firstLineLength: C,
                lastLineLength: A,
                forceMoveMarkers: !!m.forceMoveMarkers,
                isAutoWhitespaceEdit: m.isAutoWhitespaceEdit || !1,
              };
            }
            a.sort(ae.t);
            var u = !1;
            for (var _g3 = 0, _m2 = a.length - 1; _g3 < _m2; _g3++) {
              var _N = a[_g3].range.getEndPosition(),
                _S = a[_g3 + 1].range.getStartPosition();
              if (_S.isBeforeOrEqual(_N)) {
                if (_S.isBefore(_N)) throw new Error('Overlapping ranges are not allowed!');
                u = !0;
              }
            }
            l && (a = this.q(a));
            var c = r || n ? ae._getInverseEditRanges(a) : [],
              h = [];
            if (n)
              for (var _g4 = 0; _g4 < a.length; _g4++) {
                var _m3 = a[_g4],
                  _N2 = c[_g4];
                if (_m3.isAutoWhitespaceEdit && _m3.range.isEmpty())
                  for (var _S2 = _N2.startLineNumber; _S2 <= _N2.endLineNumber; _S2++) {
                    var _$2 = '';
                    (_S2 === _N2.startLineNumber &&
                      ((_$2 = this.getLineContent(_m3.range.startLineNumber)), Qe(_$2) !== -1)) ||
                      h.push({ lineNumber: _S2, oldContent: _$2 });
                  }
              }
            var f = null;
            if (r) {
              var _g5 = 0;
              f = [];
              for (var _m4 = 0; _m4 < a.length; _m4++) {
                var _N3 = a[_m4],
                  _S3 = c[_m4],
                  _$3 = this.getValueInRange(_N3.range),
                  _C2 = _N3.rangeOffset + _g5;
                (_g5 += _N3.text.length - _$3.length),
                  (f[_m4] = {
                    sortIndex: _N3.sortIndex,
                    identifier: _N3.identifier,
                    range: _S3,
                    text: _$3,
                    textChange: new z0(_N3.rangeOffset, _$3, _C2, _N3.text),
                  });
              }
              u ||
                f.sort(function (m, N) {
                  return m.sortIndex - N.sortIndex;
                });
            }
            (this.g = i), (this.h = s), (this.j = o);
            var d = this.s(a);
            var b = null;
            if (n && h.length > 0) {
              h.sort(function (g, m) {
                return m.lineNumber - g.lineNumber;
              }),
                (b = []);
              for (var _g6 = 0, _m5 = h.length; _g6 < _m5; _g6++) {
                var _N4 = h[_g6].lineNumber;
                if (_g6 > 0 && h[_g6 - 1].lineNumber === _N4) continue;
                var _S4 = h[_g6].oldContent,
                  _$4 = this.getLineContent(_N4);
                _$4.length === 0 || _$4 === _S4 || Qe(_$4) !== -1 || b.push(_N4);
              }
            }
            return this.m.fire(), new L0(f, d, b);
          },
        },
        {
          key: 'q',
          value: function q(t) {
            return t.length < 1e3 ? t : [this._toSingleEditOperation(t)];
          },
        },
        {
          key: '_toSingleEditOperation',
          value: function _toSingleEditOperation(t) {
            var n = !1;
            var r = t[0].range,
              i = t[t.length - 1].range,
              s = new J(r.startLineNumber, r.startColumn, i.endLineNumber, i.endColumn);
            var o = r.startLineNumber,
              l = r.startColumn;
            var a = [];
            for (var d = 0, b = t.length; d < b; d++) {
              var g = t[d],
                m = g.range;
              (n = n || g.forceMoveMarkers),
                a.push(this.getValueInRange(new J(o, l, m.startLineNumber, m.startColumn))),
                g.text.length > 0 && a.push(g.text),
                (o = m.endLineNumber),
                (l = m.endColumn);
            }
            var u = a.join(''),
              _w3 = w1(u),
              _w4 = _slicedToArray(_w3, 3),
              c = _w4[0],
              h = _w4[1],
              f = _w4[2];
            return {
              sortIndex: 0,
              identifier: t[0].identifier,
              range: s,
              rangeOffset: this.getOffsetAt(s.startLineNumber, s.startColumn),
              rangeLength: this.getValueLengthInRange(s, 0),
              text: u,
              eolCount: c,
              firstLineLength: h,
              lastLineLength: f,
              forceMoveMarkers: n,
              isAutoWhitespaceEdit: !1,
            };
          },
        },
        {
          key: 's',
          value: function s(t) {
            t.sort(ae.u);
            var n = [];
            for (var r = 0; r < t.length; r++) {
              var i = t[r],
                _s10 = i.range.startLineNumber,
                o = i.range.startColumn,
                l = i.range.endLineNumber,
                a = i.range.endColumn;
              if (_s10 === l && o === a && i.text.length === 0) continue;
              i.text
                ? (this.c['delete'](i.rangeOffset, i.rangeLength),
                  this.c.insert(i.rangeOffset, i.text, !0))
                : this.c['delete'](i.rangeOffset, i.rangeLength);
              var u = new J(_s10, o, l, a);
              n.push({
                range: u,
                rangeLength: i.rangeLength,
                text: i.text,
                rangeOffset: i.rangeOffset,
                forceMoveMarkers: i.forceMoveMarkers,
              });
            }
            return n;
          },
        },
        {
          key: 'findMatchesLineByLine',
          value: function findMatchesLineByLine(t, n, r, i) {
            return this.c.findMatchesLineByLine(t, n, r, i);
          },
        },
        {
          key: 'getPieceTree',
          value: function getPieceTree() {
            return this.c;
          },
        },
      ],
      [
        {
          key: '_getInverseEditRange',
          value: function _getInverseEditRange(t, n) {
            var r = t.startLineNumber,
              i = t.startColumn,
              _w5 = w1(n),
              _w6 = _slicedToArray(_w5, 3),
              s = _w6[0],
              o = _w6[1],
              l = _w6[2];
            var a;
            if (n.length > 0) {
              var u = s + 1;
              u === 1 ? (a = new J(r, i, r, i + o)) : (a = new J(r, i, r + u - 1, l + 1));
            } else a = new J(r, i, r, i);
            return a;
          },
        },
        {
          key: '_getInverseEditRanges',
          value: function _getInverseEditRanges(t) {
            var n = [];
            var r = 0,
              i = 0,
              s = null;
            for (var o = 0, l = t.length; o < l; o++) {
              var a = t[o];
              var u = void 0,
                c = void 0;
              s
                ? s.range.endLineNumber === a.range.startLineNumber
                  ? ((u = r), (c = i + (a.range.startColumn - s.range.endColumn)))
                  : ((u = r + (a.range.startLineNumber - s.range.endLineNumber)),
                    (c = a.range.startColumn))
                : ((u = a.range.startLineNumber), (c = a.range.startColumn));
              var h = void 0;
              if (a.text.length > 0) {
                var f = a.eolCount + 1;
                f === 1
                  ? (h = new J(u, c, u, c + a.firstLineLength))
                  : (h = new J(u, c, u + f - 1, a.lastLineLength + 1));
              } else h = new J(u, c, u, c);
              (r = h.endLineNumber), (i = h.endColumn), n.push(h), (s = a);
            }
            return n;
          },
        },
        {
          key: 't',
          value: function t(_t11, n) {
            var r = J.compareRangesUsingEnds(_t11.range, n.range);
            return r === 0 ? _t11.sortIndex - n.sortIndex : r;
          },
        },
        {
          key: 'u',
          value: function u(t, n) {
            var r = J.compareRangesUsingEnds(t.range, n.range);
            return r === 0 ? n.sortIndex - t.sortIndex : -r;
          },
        },
      ],
    );
  })(Ut),
  T0 = /*#__PURE__*/ (function () {
    function T0(e, t, n, r, i, s, o, l, a) {
      _classCallCheck(this, T0);
      (this.a = e),
        (this.b = t),
        (this.c = n),
        (this.d = r),
        (this.e = i),
        (this.f = s),
        (this.g = o),
        (this.h = l),
        (this.j = a);
    }
    return _createClass(T0, [
      {
        key: 'k',
        value: function k(e) {
          var t = this.c + this.d + this.e,
            n = this.c + this.e;
          return t === 0 ? (e === 1 ? '\n' : '\r\n') : n > t / 2 ? '\r\n' : '\n';
        },
      },
      {
        key: 'create',
        value: function create(e) {
          var t = this.k(e),
            n = this.a;
          if (
            this.j &&
            ((t === '\r\n' && (this.c > 0 || this.d > 0)) ||
              (t === '\n' && (this.c > 0 || this.e > 0)))
          )
            for (var i = 0, s = n.length; i < s; i++) {
              var o = n[i].buffer.replace(/\r\n|\r|\n/g, t),
                l = vt(o);
              n[i] = new Pt(o, l);
            }
          var r = new B0(n, this.b, t, this.f, this.g, this.h, this.j);
          return { textBuffer: r, disposable: r };
        },
      },
      {
        key: 'getFirstLineText',
        value: function getFirstLineText(e) {
          return this.a[0].buffer.substr(0, e).split(/\r\n|\r|\n/)[0];
        },
      },
    ]);
  })(),
  W0 = /*#__PURE__*/ (function () {
    function W0() {
      _classCallCheck(this, W0);
      (this.a = []),
        (this.b = ''),
        (this.c = !1),
        (this.d = 0),
        (this.e = []),
        (this.f = 0),
        (this.g = 0),
        (this.h = 0),
        (this.j = !1),
        (this.k = !1),
        (this.l = !0);
    }
    return _createClass(W0, [
      {
        key: 'acceptChunk',
        value: function acceptChunk(e) {
          if (e.length === 0) return;
          this.a.length === 0 && xs(e) && ((this.b = $s), (e = e.substr(1)));
          var t = e.charCodeAt(e.length - 1);
          t === 13 || (t >= 55296 && t <= 56319)
            ? (this.m(e.substr(0, e.length - 1), !1), (this.c = !0), (this.d = t))
            : (this.m(e, !1), (this.c = !1), (this.d = t));
        },
      },
      {
        key: 'm',
        value: function m(e, t) {
          (!t && e.length === 0) || (this.c ? this.n(String.fromCharCode(this.d) + e) : this.n(e));
        },
      },
      {
        key: 'n',
        value: function n(e) {
          var t = R0(this.e, e);
          this.a.push(new Pt(e, t.lineStarts)),
            (this.f += t.cr),
            (this.g += t.lf),
            (this.h += t.crlf),
            t.isBasicASCII ||
              ((this.l = !1), this.j || (this.j = hn(e)), this.k || (this.k = cn(e)));
        },
      },
      {
        key: 'finish',
        value: function finish() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          return (
            this.o(), new T0(this.a, this.b, this.f, this.g, this.h, this.j, this.k, this.l, e)
          );
        },
      },
      {
        key: 'o',
        value: function o() {
          if ((this.a.length === 0 && this.m('', !0), this.c)) {
            this.c = !1;
            var _e1 = this.a[this.a.length - 1];
            _e1.buffer += String.fromCharCode(this.d);
            var _t12 = vt(_e1.buffer);
            (_e1.lineStarts = _t12), this.d === 13 && this.f++;
          }
        },
      },
    ]);
  })();
function It(e) {
  return e === 47 || e === 92;
}
function ir(e) {
  return e.replace(/[\\/]/g, k.sep);
}
function V0(e) {
  return e.indexOf('/') === -1 && (e = ir(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = '/' + e), e;
}
function sr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : k.sep;
  if (!e) return '';
  var n = e.length,
    r = e.charCodeAt(0);
  if (It(r)) {
    if (It(e.charCodeAt(1)) && !It(e.charCodeAt(2))) {
      var s = 3;
      var o = s;
      for (; s < n && !It(e.charCodeAt(s)); s++);
      if (o !== s && !It(e.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++)
          if (It(e.charCodeAt(s))) return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (G0(r) && e.charCodeAt(1) === 58)
    return It(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  var i = e.indexOf('://');
  if (i !== -1) {
    for (i += 3; i < n; i++) if (It(e.charCodeAt(i))) return e.slice(0, i + 1);
  }
  return '';
}
function or(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $e;
  if (e === t) return !0;
  if (!e || !t || t.length > e.length) return !1;
  if (n) {
    if (!Cs(e, t)) return !1;
    if (t.length === e.length) return !0;
    var s = t.length;
    return t.charAt(t.length - 1) === r && s--, e.charAt(s) === r;
  }
  return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
}
function G0(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
var F;
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
})(F || (F = {}));
var H0 = 'tkn',
  J0 = /*#__PURE__*/ (function () {
    function J0() {
      _classCallCheck(this, J0);
      (this.a = Object.create(null)),
        (this.b = Object.create(null)),
        (this.c = Object.create(null)),
        (this.d = 'http'),
        (this.e = null),
        (this.f = '/');
    }
    return _createClass(J0, [
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
          this.f = Z0(e, t);
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
          return k.join(this.f, F.vscodeRemoteResource);
        },
      },
      {
        key: 'set',
        value: function set(e, t, n) {
          (this.a[e] = t), (this.b[e] = n);
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
              return fe(o), e;
            }
          var t = e.authority;
          var n = this.a[t];
          n && n.indexOf(':') !== -1 && n.indexOf('[') === -1 && (n = '['.concat(n, ']'));
          var r = this.b[t],
            i = this.c[t];
          var s = 'path='.concat(encodeURIComponent(e.path));
          return (
            typeof i == 'string' && (s += '&'.concat(H0, '=').concat(encodeURIComponent(i))),
            X.from({
              scheme: a1 ? this.d : F.vscodeRemoteResource,
              authority: ''.concat(n, ':').concat(r),
              path: this.g,
              query: s,
            })
          );
        },
      },
    ]);
  })(),
  Y0 = new J0();
function Z0(e, t) {
  var _e$quality, _e$commit;
  return k.join(
    t !== null && t !== void 0 ? t : '/',
    ''
      .concat((_e$quality = e.quality) !== null && _e$quality !== void 0 ? _e$quality : 'oss', '-')
      .concat((_e$commit = e.commit) !== null && _e$commit !== void 0 ? _e$commit : 'dev'),
  );
}
var X0 = 'vscode-app',
  K0 =
    ((_De = /*#__PURE__*/ (function () {
      function De() {
        _classCallCheck(this, De);
      }
      return _createClass(De, [
        {
          key: 'asBrowserUri',
          value: function asBrowserUri(t) {
            var n = this.b(t);
            return this.uriToBrowserUri(n);
          },
        },
        {
          key: 'uriToBrowserUri',
          value: function uriToBrowserUri(t) {
            return t.scheme === F.vscodeRemote
              ? Y0.rewrite(t)
              : t.scheme === F.file &&
                  (Ts || Vs === ''.concat(F.vscodeFileResource, '://').concat(De.a))
                ? t['with']({
                    scheme: F.vscodeFileResource,
                    authority: t.authority || De.a,
                    query: null,
                    fragment: null,
                  })
                : t;
          },
        },
        {
          key: 'asFileUri',
          value: function asFileUri(t) {
            var n = this.b(t);
            return this.uriToFileUri(n);
          },
        },
        {
          key: 'uriToFileUri',
          value: function uriToFileUri(t) {
            return t.scheme === F.vscodeFileResource
              ? t['with']({
                  scheme: F.file,
                  authority: t.authority !== De.a ? t.authority : null,
                  query: null,
                  fragment: null,
                })
              : t;
          },
        },
        {
          key: 'b',
          value: function b(t, n) {
            if (X.isUri(t)) return t;
            if (globalThis._VSCODE_FILE_ROOT) {
              var r = globalThis._VSCODE_FILE_ROOT;
              if (/^\w[\w\d+.-]*:\/\//.test(r)) return X.joinPath(X.parse(r, !0), t);
              var i = a0(r, t);
              return X.file(i);
            }
            return X.parse(n.toUrl(t));
          },
        },
      ]);
    })()),
    (_De.a = X0),
    _De),
  Q0 = new K0(),
  lr;
(function (e) {
  var t = new Map([
    ['1', { 'Cross-Origin-Opener-Policy': 'same-origin' }],
    ['2', { 'Cross-Origin-Embedder-Policy': 'require-corp' }],
    [
      '3',
      {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
    ],
  ]);
  e.CoopAndCoep = Object.freeze(t.get('3'));
  var n = 'vscode-coi';
  function r(s) {
    var _o0;
    var o;
    typeof s == 'string'
      ? (o = new URL(s).searchParams)
      : s instanceof URL
        ? (o = s.searchParams)
        : X.isUri(s) && (o = new URL(s.toString(!0)).searchParams);
    var l = (_o0 = o) === null || _o0 === void 0 ? void 0 : _o0.get(n);
    if (l) return t.get(l);
  }
  e.getHeadersFromQuery = r;
  function i(s, o, l) {
    if (!globalThis.crossOriginIsolated) return;
    var a = o && l ? '3' : l ? '2' : '1';
    s instanceof URLSearchParams ? s.set(n, a) : (s[n] = a);
  }
  e.addSearchParam = i;
})(lr || (lr = {}));
function wt(e) {
  return xe(e, !0);
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
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return e === t ? 0 : bs(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
        },
      },
      {
        key: 'isEqual',
        value: function isEqual(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return e === t
            ? !0
            : !e || !t
              ? !1
              : this.getComparisonKey(e, n) === this.getComparisonKey(t, n);
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
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          if (e.scheme === t.scheme) {
            if (e.scheme === F.file)
              return (
                or(wt(e), wt(t), this.a(e)) &&
                e.query === t.query &&
                (n || e.fragment === t.fragment)
              );
            if (ar(e.authority, t.authority))
              return (
                or(e.path, t.path, this.a(e), '/') &&
                e.query === t.query &&
                (n || e.fragment === t.fragment)
              );
          }
          return !1;
        },
      },
      {
        key: 'joinPath',
        value: function joinPath(e) {
          for (
            var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1;
            _key7 < _len7;
            _key7++
          ) {
            t[_key7 - 1] = arguments[_key7];
          }
          return X.joinPath.apply(X, [e].concat(t));
        },
      },
      {
        key: 'basenameOrAuthority',
        value: function basenameOrAuthority(e) {
          return to(e) || e.authority;
        },
      },
      {
        key: 'basename',
        value: function basename(e) {
          return k.basename(e.path);
        },
      },
      {
        key: 'extname',
        value: function extname(e) {
          return k.extname(e.path);
        },
      },
      {
        key: 'dirname',
        value: function dirname(e) {
          if (e.path.length === 0) return e;
          var t;
          return (
            e.scheme === F.file
              ? (t = X.file(c0(wt(e))).path)
              : ((t = k.dirname(e.path)),
                e.authority &&
                  t.length &&
                  t.charCodeAt(0) !== 47 &&
                  (console.error('dirname("'.concat(e.toString, ')) resulted in a relative path')),
                  (t = '/'))),
            e['with']({ path: t })
          );
        },
      },
      {
        key: 'normalizePath',
        value: function normalizePath(e) {
          if (!e.path.length) return e;
          var t;
          return (
            e.scheme === F.file ? (t = X.file(l0(wt(e))).path) : (t = k.normalize(e.path)),
            e['with']({ path: t })
          );
        },
      },
      {
        key: 'relativePath',
        value: function relativePath(e, t) {
          if (e.scheme !== t.scheme || !ar(e.authority, t.authority)) return;
          if (e.scheme === F.file) {
            var i = h0(wt(e), wt(t));
            return Ot ? ir(i) : i;
          }
          var n = e.path || '/';
          var r = t.path || '/';
          if (this.a(e)) {
            var _i16 = 0;
            for (
              var s = Math.min(n.length, r.length);
              _i16 < s &&
              !(
                n.charCodeAt(_i16) !== r.charCodeAt(_i16) &&
                n.charAt(_i16).toLowerCase() !== r.charAt(_i16).toLowerCase()
              );
              _i16++
            );
            n = r.substr(0, _i16) + n.substr(_i16);
          }
          return k.relative(n, r);
        },
      },
      {
        key: 'resolvePath',
        value: function resolvePath(e, t) {
          if (e.scheme === F.file) {
            var n = X.file(u0(wt(e), t));
            return e['with']({ authority: n.authority, path: n.path });
          }
          return (t = V0(t)), e['with']({ path: k.resolve(e.path, t) });
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
          return e === t || (e !== void 0 && t !== void 0 && ws(e, t));
        },
      },
      {
        key: 'hasTrailingPathSeparator',
        value: function hasTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e;
          if (e.scheme === F.file) {
            var n = wt(e);
            return n.length > sr(n).length && n[n.length - 1] === t;
          } else {
            var _n8 = e.path;
            return (
              _n8.length > 1 &&
              _n8.charCodeAt(_n8.length - 1) === 47 &&
              !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath)
            );
          }
        },
      },
      {
        key: 'removeTrailingPathSeparator',
        value: function removeTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e;
          return ur(e, t) ? e['with']({ path: e.path.substr(0, e.path.length - 1) }) : e;
        },
      },
      {
        key: 'addTrailingPathSeparator',
        value: function addTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e;
          var n = !1;
          if (e.scheme === F.file) {
            var r = wt(e);
            n = r !== void 0 && r.length === sr(r).length && r[r.length - 1] === t;
          } else {
            t = '/';
            var _r10 = e.path;
            n = _r10.length === 1 && _r10.charCodeAt(_r10.length - 1) === 47;
          }
          return !n && !ur(e, t) ? e['with']({ path: e.path + '/' }) : e;
        },
      },
    ]);
  })(),
  P = new L1(function () {
    return !1;
  }),
  pl = new L1(function (e) {
    return e.scheme === F.file ? !Nn : !0;
  }),
  bl = new L1(function (e) {
    return !0;
  }),
  vl = P.isEqual.bind(P),
  wl = P.isEqualOrParent.bind(P),
  Cl = P.getComparisonKey.bind(P),
  Ll = P.basenameOrAuthority.bind(P),
  to = P.basename.bind(P),
  yl = P.extname.bind(P),
  Nl = P.dirname.bind(P),
  Al = P.joinPath.bind(P),
  El = P.normalizePath.bind(P),
  $l = P.relativePath.bind(P),
  xl = P.resolvePath.bind(P),
  Sl = P.isAbsolutePath.bind(P),
  ar = P.isEqualAuthority.bind(P),
  ur = P.hasTrailingPathSeparator.bind(P),
  Il = P.removeTrailingPathSeparator.bind(P),
  _l = P.addTrailingPathSeparator.bind(P),
  hr;
(function (e) {
  (e.META_DATA_LABEL = 'label'),
    (e.META_DATA_DESCRIPTION = 'description'),
    (e.META_DATA_SIZE = 'size'),
    (e.META_DATA_MIME = 'mime');
  function t(n) {
    var r = new Map();
    n.path
      .substring(n.path.indexOf(';') + 1, n.path.lastIndexOf(';'))
      .split(';')
      .forEach(function (o) {
        var _o$split = o.split(':'),
          _o$split2 = _slicedToArray(_o$split, 2),
          l = _o$split2[0],
          a = _o$split2[1];
        l && a && r.set(l, a);
      });
    var s = n.path.substring(0, n.path.indexOf(';'));
    return s && r.set(e.META_DATA_MIME, s), r;
  }
  e.parseMetaData = t;
})(hr || (hr = {}));
var Ol = Symbol('MicrotaskDelay'),
  eo,
  y1;
(function () {
  typeof globalThis.requestIdleCallback != 'function' ||
  typeof globalThis.cancelIdleCallback != 'function'
    ? (y1 = function y1(e, t, n) {
        Hs(function () {
          if (r) return;
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
        var r = !1;
        return {
          dispose: function dispose() {
            r || (r = !0);
          },
        };
      })
    : (y1 = function y1(e, t, n) {
        var r = e.requestIdleCallback(t, typeof n == 'number' ? { timeout: n } : void 0);
        var i = !1;
        return {
          dispose: function dispose() {
            i || ((i = !0), e.cancelIdleCallback(r));
          },
        };
      }),
    (eo = function eo(e, t) {
      return y1(globalThis, e, t);
    });
})();
var cr;
(function (e) {
  (e[(e.Resolved = 0)] = 'Resolved'), (e[(e.Rejected = 1)] = 'Rejected');
})(cr || (cr = {}));
var fr;
(function (e) {
  function t(_x3) {
    return _t13.apply(this, arguments);
  }
  function _t13() {
    _t13 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(r) {
        var i, s;
        return _regeneratorRuntime().wrap(function _callee4$(_context15) {
          while (1)
            switch ((_context15.prev = _context15.next)) {
              case 0:
                _context15.next = 2;
                return Promise.all(
                  r.map(function (o) {
                    return o.then(
                      function (l) {
                        return l;
                      },
                      function (l) {
                        i || (i = l);
                      },
                    );
                  }),
                );
              case 2:
                s = _context15.sent;
                if (!(_typeof(i) < 'u')) {
                  _context15.next = 5;
                  break;
                }
                throw i;
              case 5:
                return _context15.abrupt('return', s);
              case 6:
              case 'end':
                return _context15.stop();
            }
        }, _callee4);
      }),
    );
    return _t13.apply(this, arguments);
  }
  e.settled = t;
  function n(r) {
    return new Promise(
      /*#__PURE__*/ (function () {
        var _ref0 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(i, s) {
            return _regeneratorRuntime().wrap(
              function _callee3$(_context14) {
                while (1)
                  switch ((_context14.prev = _context14.next)) {
                    case 0:
                      _context14.prev = 0;
                      _context14.next = 3;
                      return r(i, s);
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
              _callee3,
              null,
              [[0, 5]],
            );
          }),
        );
        return function (_x4, _x5) {
          return _ref0.apply(this, arguments);
        };
      })(),
    );
  }
  e.withAsyncBody = n;
})(fr || (fr = {}));
var dr;
(function (e) {
  (e[(e.Initial = 0)] = 'Initial'),
    (e[(e.DoneOK = 1)] = 'DoneOK'),
    (e[(e.DoneError = 2)] = 'DoneError');
})(dr || (dr = {}));
var Ml =
    ((_ot = /*#__PURE__*/ (function () {
      function ot(t, n) {
        var _this24 = this;
        _classCallCheck(this, ot);
        (this.a = 0),
          (this.b = []),
          (this.d = null),
          (this.f = n),
          (this.g = new at()),
          queueMicrotask(
            /*#__PURE__*/ _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5() {
                var r;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context16) {
                    while (1)
                      switch ((_context16.prev = _context16.next)) {
                        case 0:
                          r = {
                            emitOne: function emitOne(i) {
                              return _this24.h(i);
                            },
                            emitMany: function emitMany(i) {
                              return _this24.j(i);
                            },
                            reject: function reject(i) {
                              return _this24.l(i);
                            },
                          };
                          _context16.prev = 1;
                          _context16.next = 4;
                          return Promise.resolve(t(r));
                        case 4:
                          _this24.k();
                          _context16.next = 10;
                          break;
                        case 7:
                          _context16.prev = 7;
                          _context16.t0 = _context16['catch'](1);
                          _this24.l(_context16.t0);
                        case 10:
                          _context16.prev = 10;
                          (r.emitOne = void 0), (r.emitMany = void 0), (r.reject = void 0);
                          return _context16.finish(10);
                        case 13:
                        case 'end':
                          return _context16.stop();
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
        ot,
        [
          {
            key: Symbol.asyncIterator,
            value: function value() {
              var _this25 = this;
              var t = 0;
              return {
                next: (function () {
                  var _next2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
                      return _regeneratorRuntime().wrap(function _callee6$(_context17) {
                        while (1)
                          switch ((_context17.prev = _context17.next)) {
                            case 0:
                              if (!(_this25.a === 2)) {
                                _context17.next = 2;
                                break;
                              }
                              throw _this25.d;
                            case 2:
                              if (!(t < _this25.b.length)) {
                                _context17.next = 4;
                                break;
                              }
                              return _context17.abrupt('return', {
                                done: !1,
                                value: _this25.b[t++],
                              });
                            case 4:
                              if (!(_this25.a === 1)) {
                                _context17.next = 6;
                                break;
                              }
                              return _context17.abrupt('return', { done: !0, value: void 0 });
                            case 6:
                              _context17.next = 8;
                              return be.toPromise(_this25.g.event);
                            case 8:
                              if (!0) {
                                _context17.next = 0;
                                break;
                              }
                            case 9:
                            case 'end':
                              return _context17.stop();
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
                      var _this25$f;
                      return _regeneratorRuntime().wrap(function _callee7$(_context18) {
                        while (1)
                          switch ((_context18.prev = _context18.next)) {
                            case 0:
                              return _context18.abrupt(
                                'return',
                                ((_this25$f = _this25.f) !== null &&
                                  _this25$f !== void 0 &&
                                  _this25$f.call(_this25),
                                { done: !0, value: void 0 }),
                              );
                            case 1:
                            case 'end':
                              return _context18.stop();
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
              return ot.map(this, t);
            },
          },
          {
            key: 'filter',
            value: function filter(t) {
              return ot.filter(this, t);
            },
          },
          {
            key: 'coalesce',
            value: function coalesce() {
              return ot.coalesce(this);
            },
          },
          {
            key: 'toPromise',
            value: function toPromise() {
              return ot.toPromise(this);
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
              return new ot(function (n) {
                n.emitMany(t);
              });
            },
          },
          {
            key: 'fromPromise',
            value: function fromPromise(t) {
              return new ot(
                /*#__PURE__*/ (function () {
                  var _ref10 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8(n) {
                      return _regeneratorRuntime().wrap(function _callee8$(_context19) {
                        while (1)
                          switch ((_context19.prev = _context19.next)) {
                            case 0:
                              _context19.t0 = n;
                              _context19.next = 3;
                              return t;
                            case 3:
                              _context19.t1 = _context19.sent;
                              _context19.t0.emitMany.call(_context19.t0, _context19.t1);
                            case 5:
                            case 'end':
                              return _context19.stop();
                          }
                      }, _callee8);
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
            key: 'fromPromisesResolveOrder',
            value: function fromPromisesResolveOrder(t) {
              return new ot(
                /*#__PURE__*/ (function () {
                  var _ref11 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee0(n) {
                      return _regeneratorRuntime().wrap(function _callee0$(_context21) {
                        while (1)
                          switch ((_context21.prev = _context21.next)) {
                            case 0:
                              _context21.next = 2;
                              return Promise.all(
                                t.map(
                                  /*#__PURE__*/ (function () {
                                    var _ref12 = _asyncToGenerator(
                                      /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee9(r) {
                                          return _regeneratorRuntime().wrap(function _callee9$(
                                            _context20,
                                          ) {
                                            while (1)
                                              switch ((_context20.prev = _context20.next)) {
                                                case 0:
                                                  _context20.t0 = n;
                                                  _context20.next = 3;
                                                  return r;
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
                                          }, _callee9);
                                        },
                                      ),
                                    );
                                    return function (_x8) {
                                      return _ref12.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            case 2:
                            case 'end':
                              return _context21.stop();
                          }
                      }, _callee0);
                    }),
                  );
                  return function (_x7) {
                    return _ref11.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'merge',
            value: function merge(t) {
              return new ot(
                /*#__PURE__*/ (function () {
                  var _ref13 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee10(n) {
                      return _regeneratorRuntime().wrap(function _callee10$(_context23) {
                        while (1)
                          switch ((_context23.prev = _context23.next)) {
                            case 0:
                              _context23.next = 2;
                              return Promise.all(
                                t.map(
                                  /*#__PURE__*/ (function () {
                                    var _ref14 = _asyncToGenerator(
                                      /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee1(r) {
                                          var _iteratorAbruptCompletion2,
                                            _didIteratorError2,
                                            _iteratorError2,
                                            _iterator2,
                                            _step2,
                                            i;
                                          return _regeneratorRuntime().wrap(
                                            function _callee1$(_context22) {
                                              while (1)
                                                switch ((_context22.prev = _context22.next)) {
                                                  case 0:
                                                    _iteratorAbruptCompletion2 = false;
                                                    _didIteratorError2 = false;
                                                    _context22.prev = 2;
                                                    _iterator2 = _asyncIterator(r);
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
                                                    i = _step2.value;
                                                    n.emitOne(i);
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
                                    return function (_x0) {
                                      return _ref14.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            case 2:
                            case 'end':
                              return _context23.stop();
                          }
                      }, _callee10);
                    }),
                  );
                  return function (_x9) {
                    return _ref13.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'map',
            value: function map(t, n) {
              return new ot(
                /*#__PURE__*/ (function () {
                  var _ref15 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(r) {
                      var _iteratorAbruptCompletion3,
                        _didIteratorError3,
                        _iteratorError3,
                        _iterator3,
                        _step3,
                        i;
                      return _regeneratorRuntime().wrap(
                        function _callee11$(_context24) {
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
                                i = _step3.value;
                                r.emitOne(n(i));
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
                        _callee11,
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
            key: 'filter',
            value: function filter(t, n) {
              return new ot(
                /*#__PURE__*/ (function () {
                  var _ref16 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee12(r) {
                      var _iteratorAbruptCompletion4,
                        _didIteratorError4,
                        _iteratorError4,
                        _iterator4,
                        _step4,
                        i;
                      return _regeneratorRuntime().wrap(
                        function _callee12$(_context25) {
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
                                i = _step4.value;
                                n(i) && r.emitOne(i);
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
                        _callee12,
                        null,
                        [
                          [2, 14, 18, 28],
                          [19, , 23, 27],
                        ],
                      );
                    }),
                  );
                  return function (_x10) {
                    return _ref16.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'coalesce',
            value: function coalesce(t) {
              return ot.filter(t, function (n) {
                return !!n;
              });
            },
          },
          {
            key: 'toPromise',
            value: (function () {
              var _toPromise = _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13(t) {
                  var n,
                    _iteratorAbruptCompletion5,
                    _didIteratorError5,
                    _iteratorError5,
                    _iterator5,
                    _step5,
                    r;
                  return _regeneratorRuntime().wrap(
                    function _callee13$(_context26) {
                      while (1)
                        switch ((_context26.prev = _context26.next)) {
                          case 0:
                            n = [];
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
                            r = _step5.value;
                            n.push(r);
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
                            return _context26.abrupt('return', n);
                          case 30:
                          case 'end':
                            return _context26.stop();
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
              function toPromise(_x11) {
                return _toPromise.apply(this, arguments);
              }
              return toPromise;
            })(),
          },
        ],
      );
    })()),
    (_ot.EMPTY = _ot.fromArray([])),
    _ot),
  Pl = new Z1(1e4),
  Wt = Object.freeze({
    text: 'text/plain',
    binary: 'application/octet-stream',
    unknown: 'application/unknown',
    markdown: 'text/markdown',
    latex: 'text/latex',
    uriList: 'text/uri-list',
  }),
  gr;
(function (e) {
  (e[(e.LParen = 0)] = 'LParen'),
    (e[(e.RParen = 1)] = 'RParen'),
    (e[(e.Neg = 2)] = 'Neg'),
    (e[(e.Eq = 3)] = 'Eq'),
    (e[(e.NotEq = 4)] = 'NotEq'),
    (e[(e.Lt = 5)] = 'Lt'),
    (e[(e.LtEq = 6)] = 'LtEq'),
    (e[(e.Gt = 7)] = 'Gt'),
    (e[(e.GtEq = 8)] = 'GtEq'),
    (e[(e.RegexOp = 9)] = 'RegexOp'),
    (e[(e.RegexStr = 10)] = 'RegexStr'),
    (e[(e.True = 11)] = 'True'),
    (e[(e.False = 12)] = 'False'),
    (e[(e.In = 13)] = 'In'),
    (e[(e.Not = 14)] = 'Not'),
    (e[(e.And = 15)] = 'And'),
    (e[(e.Or = 16)] = 'Or'),
    (e[(e.Str = 17)] = 'Str'),
    (e[(e.QuotedStr = 18)] = 'QuotedStr'),
    (e[(e.Error = 19)] = 'Error'),
    (e[(e.EOF = 20)] = 'EOF');
})(gr || (gr = {}));
function N1() {
  switch (arguments.length) {
    case 1:
      return et(1731, null, arguments.length <= 0 ? undefined : arguments[0]);
    case 2:
      return et(
        1732,
        null,
        arguments.length <= 0 ? undefined : arguments[0],
        arguments.length <= 1 ? undefined : arguments[1],
      );
    case 3:
      return et(
        1733,
        null,
        arguments.length <= 0 ? undefined : arguments[0],
        arguments.length <= 1 ? undefined : arguments[1],
        arguments.length <= 2 ? undefined : arguments[2],
      );
    default:
      return;
  }
}
var no = et(1734, null),
  ro = et(1735, null),
  Qt =
    ((_z = /*#__PURE__*/ (function () {
      function z1() {
        _classCallCheck(this, z1);
        (this.c = ''),
          (this.d = 0),
          (this.e = 0),
          (this.f = []),
          (this.g = []),
          (this.m = new RegExp(
            '(?:["-%\\*-<>-_a-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0560-\\u0588\\u05D0-\\u05EA\\u05EF-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E86-\\u0E8A\\u0E8C-\\u0EA3\\u0EA5\\u0EA7-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16F1-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6E5\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF2D-\\uDF40\\uDF42-\\uDF49\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDD70-\\uDD7A\\uDD7C-\\uDD8A\\uDD8C-\\uDD92\\uDD94\\uDD95\\uDD97-\\uDDA1\\uDDA3-\\uDDB1\\uDDB3-\\uDDB9\\uDDBB\\uDDBC\\uDDC0-\\uDDF3\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67\\uDF80-\\uDF85\\uDF87-\\uDFB0\\uDFB2-\\uDFBA]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE35\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2\\uDD00-\\uDD23\\uDD4A-\\uDD65\\uDD6F-\\uDD85\\uDE80-\\uDEA9\\uDEB0\\uDEB1\\uDEC2-\\uDEC4\\uDF00-\\uDF1C\\uDF27\\uDF30-\\uDF45\\uDF70-\\uDF81\\uDFB0-\\uDFC4\\uDFE0-\\uDFF6]|\\uD804[\\uDC03-\\uDC37\\uDC71\\uDC72\\uDC75\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD44\\uDD47\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE3F\\uDE40\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61\\uDF80-\\uDF89\\uDF8B\\uDF8E\\uDF90-\\uDFB5\\uDFB7\\uDFD1\\uDFD3]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC5F-\\uDC61\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDEB8\\uDF00-\\uDF1A\\uDF40-\\uDF46]|\\uD806[\\uDC00-\\uDC2B\\uDCA0-\\uDCDF\\uDCFF-\\uDD06\\uDD09\\uDD0C-\\uDD13\\uDD15\\uDD16\\uDD18-\\uDD2F\\uDD3F\\uDD41\\uDDA0-\\uDDA7\\uDDAA-\\uDDD0\\uDDE1\\uDDE3\\uDE00\\uDE0B-\\uDE32\\uDE3A\\uDE50\\uDE5C-\\uDE89\\uDE9D\\uDEB0-\\uDEF8\\uDFC0-\\uDFE0]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F\\uDD00-\\uDD06\\uDD08\\uDD09\\uDD0B-\\uDD30\\uDD46\\uDD60-\\uDD65\\uDD67\\uDD68\\uDD6A-\\uDD89\\uDD98\\uDEE0-\\uDEF2\\uDF02\\uDF04-\\uDF10\\uDF12-\\uDF33\\uDFB0]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC80-\\uDD43]|\\uD80B[\\uDF90-\\uDFF0]|[\\uD80C\\uD80E\\uD80F\\uD81C-\\uD820\\uD822\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883\\uD885-\\uD887][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2F\\uDC41-\\uDC46\\uDC60-\\uDFFF]|\\uD810[\\uDC00-\\uDFFA]|\\uD811[\\uDC00-\\uDE46]|\\uD818[\\uDD00-\\uDD1D]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE70-\\uDEBE\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDD40-\\uDD6C\\uDE40-\\uDE7F\\uDF00-\\uDF4A\\uDF50\\uDF93-\\uDF9F\\uDFE0\\uDFE1\\uDFE3]|\\uD821[\\uDC00-\\uDFF7]|\\uD823[\\uDC00-\\uDCD5\\uDCFF-\\uDD08]|\\uD82B[\\uDFF0-\\uDFF3\\uDFF5-\\uDFFB\\uDFFD\\uDFFE]|\\uD82C[\\uDC00-\\uDD22\\uDD32\\uDD50-\\uDD52\\uDD55\\uDD64-\\uDD67\\uDD70-\\uDEFB]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD837[\\uDF00-\\uDF1E\\uDF25-\\uDF2A]|\\uD838[\\uDC30-\\uDC6D\\uDD00-\\uDD2C\\uDD37-\\uDD3D\\uDD4E\\uDE90-\\uDEAD\\uDEC0-\\uDEEB]|\\uD839[\\uDCD0-\\uDCEB\\uDDD0-\\uDDED\\uDDF0\\uDFE0-\\uDFE6\\uDFE8-\\uDFEB\\uDFED\\uDFEE\\uDFF0-\\uDFFE]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43\\uDD4B]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF39\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0\\uDFF0-\\uDFFF]|\\uD87B[\\uDC00-\\uDE5D]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A\\uDF50-\\uDFFF]|\\uD888[\\uDC00-\\uDFAF])+',
            'y',
          ));
      }
      return _createClass(
        z1,
        [
          {
            key: 'errors',
            get: function get() {
              return this.g;
            },
          },
          {
            key: 'reset',
            value: function reset(t) {
              return (this.c = t), (this.d = 0), (this.e = 0), (this.f = []), (this.g = []), this;
            },
          },
          {
            key: 'scan',
            value: function scan() {
              for (; !this.r(); )
                switch (((this.d = this.e), this.i())) {
                  case 40:
                    this.k(0);
                    break;
                  case 41:
                    this.k(1);
                    break;
                  case 33:
                    if (this.h(61)) {
                      var n = this.h(61);
                      this.f.push({ type: 4, offset: this.d, isTripleEq: n });
                    } else this.k(2);
                    break;
                  case 39:
                    this.o();
                    break;
                  case 47:
                    this.q();
                    break;
                  case 61:
                    if (this.h(61)) {
                      var _n9 = this.h(61);
                      this.f.push({ type: 3, offset: this.d, isTripleEq: _n9 });
                    } else this.h(126) ? this.k(9) : this.l(N1('==', '=~'));
                    break;
                  case 60:
                    this.k(this.h(61) ? 6 : 5);
                    break;
                  case 62:
                    this.k(this.h(61) ? 8 : 7);
                    break;
                  case 38:
                    this.h(38) ? this.k(15) : this.l(N1('&&'));
                    break;
                  case 124:
                    this.h(124) ? this.k(16) : this.l(N1('||'));
                    break;
                  case 32:
                  case 13:
                  case 9:
                  case 10:
                  case 160:
                    break;
                  default:
                    this.n();
                }
              return (this.d = this.e), this.k(20), Array.from(this.f);
            },
          },
          {
            key: 'h',
            value: function h(t) {
              return this.r() || this.c.charCodeAt(this.e) !== t ? !1 : (this.e++, !0);
            },
          },
          {
            key: 'i',
            value: function i() {
              return this.c.charCodeAt(this.e++);
            },
          },
          {
            key: 'j',
            value: function j() {
              return this.r() ? 0 : this.c.charCodeAt(this.e);
            },
          },
          {
            key: 'k',
            value: function k(t) {
              this.f.push({ type: t, offset: this.d });
            },
          },
          {
            key: 'l',
            value: function l(t) {
              var n = this.d,
                r = this.c.substring(this.d, this.e),
                i = { type: 19, offset: this.d, lexeme: r };
              this.g.push({ offset: n, lexeme: r, additionalInfo: t }), this.f.push(i);
            },
          },
          {
            key: 'n',
            value: function n() {
              this.m.lastIndex = this.d;
              var t = this.m.exec(this.c);
              if (t) {
                this.e = this.d + t[0].length;
                var _n0 = this.c.substring(this.d, this.e),
                  r = z1.b.get(_n0);
                r ? this.k(r) : this.f.push({ type: 17, lexeme: _n0, offset: this.d });
              }
            },
          },
          {
            key: 'o',
            value: function o() {
              for (; this.j() !== 39 && !this.r(); ) this.i();
              if (this.r()) {
                this.l(no);
                return;
              }
              this.i(),
                this.f.push({
                  type: 18,
                  lexeme: this.c.substring(this.d + 1, this.e - 1),
                  offset: this.d + 1,
                });
            },
          },
          {
            key: 'q',
            value: function q() {
              var t = this.e,
                n = !1,
                r = !1;
              for (;;) {
                if (t >= this.c.length) {
                  (this.e = t), this.l(ro);
                  return;
                }
                var s = this.c.charCodeAt(t);
                if (n) n = !1;
                else if (s === 47 && !r) {
                  t++;
                  break;
                } else s === 91 ? (r = !0) : s === 92 ? (n = !0) : s === 93 && (r = !1);
                t++;
              }
              for (; t < this.c.length && z1.a.has(this.c.charCodeAt(t)); ) t++;
              this.e = t;
              var i = this.c.substring(this.d, this.e);
              this.f.push({ type: 10, lexeme: i, offset: this.d });
            },
          },
          {
            key: 'r',
            value: function r() {
              return this.e >= this.c.length;
            },
          },
        ],
        [
          {
            key: 'getLexeme',
            value: function getLexeme(t) {
              switch (t.type) {
                case 0:
                  return '(';
                case 1:
                  return ')';
                case 2:
                  return '!';
                case 3:
                  return t.isTripleEq ? '===' : '==';
                case 4:
                  return t.isTripleEq ? '!==' : '!=';
                case 5:
                  return '<';
                case 6:
                  return '<=';
                case 7:
                  return '>=';
                case 8:
                  return '>=';
                case 9:
                  return '=~';
                case 10:
                  return t.lexeme;
                case 11:
                  return 'true';
                case 12:
                  return 'false';
                case 13:
                  return 'in';
                case 14:
                  return 'not';
                case 15:
                  return '&&';
                case 16:
                  return '||';
                case 17:
                  return t.lexeme;
                case 18:
                  return t.lexeme;
                case 19:
                  return t.lexeme;
                case 20:
                  return 'EOF';
                default:
                  throw Ei(
                    'unhandled token type: '.concat(
                      JSON.stringify(t),
                      '; have you forgotten to add a case?',
                    ),
                  );
              }
            },
          },
        ],
      );
    })()),
    (_z.a = new Set(
      ['i', 'g', 's', 'm', 'y', 'u'].map(function (t) {
        return t.charCodeAt(0);
      }),
    )),
    (_z.b = new Map([
      ['not', 14],
      ['in', 13],
      ['false', 12],
      ['true', 11],
    ])),
    _z),
  Ct;
(function (e) {
  (e.serviceIds = new Map()),
    (e.DI_TARGET = '$di$target'),
    (e.DI_DEPENDENCIES = '$di$dependencies');
  function t(n) {
    return n[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(Ct || (Ct = {}));
var Rl = A1('instantiationService');
function io(e, t, n) {
  t[Ct.DI_TARGET] === t
    ? t[Ct.DI_DEPENDENCIES].push({ id: e, index: n })
    : ((t[Ct.DI_DEPENDENCIES] = [{ id: e, index: n }]), (t[Ct.DI_TARGET] = t));
}
function A1(e) {
  if (Ct.serviceIds.has(e)) return Ct.serviceIds.get(e);
  var _t14 = function t(n, r, i) {
    if (arguments.length !== 3)
      throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
    io(_t14, n, i);
  };
  return (
    (_t14.toString = function () {
      return e;
    }),
    Ct.serviceIds.set(e, _t14),
    _t14
  );
}
var V = new Map();
V.set('false', !1),
  V.set('true', !0),
  V.set('isMac', l1),
  V.set('isLinux', Nn),
  V.set('isWindows', Ot),
  V.set('isWeb', a1),
  V.set('isMacNative', l1 && !a1),
  V.set('isEdge', Zs),
  V.set('isFirefox', Js),
  V.set('isChrome', $n),
  V.set('isSafari', Ys);
var te = new Map();
function so(e, t) {
  return (
    te.has(e) &&
      (console.warn(
        "A context key function with id '".concat(
          e,
          "' is already registered. Function collisions can lead to unexpected behavior.",
        ),
      ),
      te['delete'](e)),
    te.set(e, t),
    {
      dispose: function dispose() {
        te['delete'](e);
      },
    }
  );
}
function mr(e) {
  return te.get(e);
}
var oo = Object.prototype.hasOwnProperty,
  pr;
(function (e) {
  (e[(e.False = 0)] = 'False'),
    (e[(e.True = 1)] = 'True'),
    (e[(e.Defined = 2)] = 'Defined'),
    (e[(e.Not = 3)] = 'Not'),
    (e[(e.Equals = 4)] = 'Equals'),
    (e[(e.NotEquals = 5)] = 'NotEquals'),
    (e[(e.And = 6)] = 'And'),
    (e[(e.Regex = 7)] = 'Regex'),
    (e[(e.NotRegex = 8)] = 'NotRegex'),
    (e[(e.Or = 9)] = 'Or'),
    (e[(e.In = 10)] = 'In'),
    (e[(e.NotIn = 11)] = 'NotIn'),
    (e[(e.Greater = 12)] = 'Greater'),
    (e[(e.GreaterEquals = 13)] = 'GreaterEquals'),
    (e[(e.Smaller = 14)] = 'Smaller'),
    (e[(e.SmallerEquals = 15)] = 'SmallerEquals'),
    (e[(e.Function = 16)] = 'Function');
})(pr || (pr = {}));
var lo = { regexParsingWithErrorRecovery: !0 },
  ao = et(1711, null),
  uo = et(1712, null),
  ho = et(1713, null),
  br = et(1714, null),
  co = et(1715, null),
  fo = et(1716, null),
  go = et(1717, null),
  mo = et(1718, null),
  po =
    ((_ue = /*#__PURE__*/ (function () {
      function ue() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : lo;
        _classCallCheck(this, ue);
        (this.k = t),
          (this.d = new Qt()),
          (this.f = []),
          (this.g = 0),
          (this.h = []),
          (this.v = /g|y/g);
      }
      return _createClass(ue, [
        {
          key: 'lexingErrors',
          get: function get() {
            return this.d.errors;
          },
        },
        {
          key: 'parsingErrors',
          get: function get() {
            return this.h;
          },
        },
        {
          key: 'parse',
          value: function parse(t) {
            if (t === '') {
              this.h.push({ message: ao, offset: 0, lexeme: '', additionalInfo: uo });
              return;
            }
            (this.f = this.d.reset(t).scan()), (this.g = 0), (this.h = []);
            try {
              var n = this.l();
              if (!this.E()) {
                var r = this.D(),
                  i = r.type === 17 ? fo : void 0;
                throw (
                  (this.h.push({
                    message: co,
                    offset: r.offset,
                    lexeme: Qt.getLexeme(r),
                    additionalInfo: i,
                  }),
                  ue.c)
                );
              }
              return n;
            } catch (n) {
              if (n !== ue.c) throw n;
              return;
            }
          },
        },
        {
          key: 'l',
          value: function l() {
            return this.m();
          },
        },
        {
          key: 'm',
          value: function m() {
            var t = [this.o()];
            for (; this.y(16); ) {
              var n = this.o();
              t.push(n);
            }
            return t.length === 1 ? t[0] : Z.or.apply(Z, t);
          },
        },
        {
          key: 'o',
          value: function o() {
            var t = [this.s()];
            for (; this.y(15); ) {
              var n = this.s();
              t.push(n);
            }
            return t.length === 1 ? t[0] : Z.and.apply(Z, t);
          },
        },
        {
          key: 's',
          value: function s() {
            if (this.y(2)) {
              var _t15 = this.D();
              switch (_t15.type) {
                case 11:
                  return this.z(), Q.INSTANCE;
                case 12:
                  return this.z(), it.INSTANCE;
                case 0: {
                  this.z();
                  var n = this.l();
                  return this.A(1, br), n === null || n === void 0 ? void 0 : n.negate();
                }
                case 17:
                  return this.z(), re.create(_t15.lexeme);
                default:
                  throw this.B("KEY | true | false | '(' expression ')'", _t15);
              }
            }
            return this.t();
          },
        },
        {
          key: 't',
          value: function t() {
            var t = this.D();
            switch (t.type) {
              case 11:
                return this.z(), Z['true']();
              case 12:
                return this.z(), Z['false']();
              case 0: {
                this.z();
                var n = this.l();
                return this.A(1, br), n;
              }
              case 17: {
                if (t.lexeme.startsWith('@')) {
                  this.z();
                  var i = t.lexeme.substring(1);
                  if (i.startsWith('!')) {
                    var o = i.substring(1),
                      l = mr(o);
                    if (l)
                      return E1.createWithoutRegistration(i, function () {
                        return !l();
                      });
                  }
                  var s =
                    mr(i) ||
                    function () {
                      return !1;
                    };
                  return E1.createWithoutRegistration(i, s);
                }
                var _n1 = t.lexeme;
                if ((this.z(), this.y(9))) {
                  var _i17 = this.D();
                  if (!this.k.regexParsingWithErrorRecovery) {
                    if ((this.z(), _i17.type !== 10)) throw this.B('REGEX', _i17);
                    var _s11 = _i17.lexeme,
                      _o1 = _s11.lastIndexOf('/'),
                      _l10 = _o1 === _s11.length - 1 ? void 0 : this.w(_s11.substring(_o1 + 1));
                    var a;
                    try {
                      a = new RegExp(_s11.substring(1, _o1), _l10);
                    } catch (_unused0) {
                      throw this.B('REGEX', _i17);
                    }
                    return M1.create(_n1, a);
                  }
                  switch (_i17.type) {
                    case 10:
                    case 19: {
                      var _s12 = [_i17.lexeme];
                      this.z();
                      var _o10 = this.D(),
                        _l11 = 0;
                      for (var f = 0; f < _i17.lexeme.length; f++)
                        _i17.lexeme.charCodeAt(f) === 40
                          ? _l11++
                          : _i17.lexeme.charCodeAt(f) === 41 && _l11--;
                      for (; !this.E() && _o10.type !== 15 && _o10.type !== 16; ) {
                        switch (_o10.type) {
                          case 0:
                            _l11++;
                            break;
                          case 1:
                            _l11--;
                            break;
                          case 10:
                          case 18:
                            for (var _f3 = 0; _f3 < _o10.lexeme.length; _f3++)
                              _o10.lexeme.charCodeAt(_f3) === 40
                                ? _l11++
                                : _i17.lexeme.charCodeAt(_f3) === 41 && _l11--;
                        }
                        if (_l11 < 0) break;
                        _s12.push(Qt.getLexeme(_o10)), this.z(), (_o10 = this.D());
                      }
                      var _a0 = _s12.join(''),
                        u = _a0.lastIndexOf('/'),
                        c = u === _a0.length - 1 ? void 0 : this.w(_a0.substring(u + 1));
                      var h;
                      try {
                        h = new RegExp(_a0.substring(1, u), c);
                      } catch (_unused1) {
                        throw this.B('REGEX', _i17);
                      }
                      return Z.regex(_n1, h);
                    }
                    case 18: {
                      var _s13 = _i17.lexeme;
                      this.z();
                      var _o11 = null;
                      if (!fs(_s13)) {
                        var _l12 = _s13.indexOf('/'),
                          _a1 = _s13.lastIndexOf('/');
                        if (_l12 !== _a1 && _l12 >= 0) {
                          var _u0 = _s13.slice(_l12 + 1, _a1),
                            _c5 = _s13[_a1 + 1] === 'i' ? 'i' : '';
                          try {
                            _o11 = new RegExp(_u0, _c5);
                          } catch (_unused10) {
                            throw this.B('REGEX', _i17);
                          }
                        }
                      }
                      if (_o11 === null) throw this.B('REGEX', _i17);
                      return M1.create(_n1, _o11);
                    }
                    default:
                      throw this.B('REGEX', this.D());
                  }
                }
                if (this.y(14)) {
                  this.A(13, ho);
                  var _i18 = this.u();
                  return Z.notIn(_n1, _i18);
                }
                switch (this.D().type) {
                  case 3: {
                    this.z();
                    var _i19 = this.u();
                    if (this.x().type === 18) return Z.equals(_n1, _i19);
                    switch (_i19) {
                      case 'true':
                        return Z.has(_n1);
                      case 'false':
                        return Z.not(_n1);
                      default:
                        return Z.equals(_n1, _i19);
                    }
                  }
                  case 4: {
                    this.z();
                    var _i20 = this.u();
                    if (this.x().type === 18) return Z.notEquals(_n1, _i20);
                    switch (_i20) {
                      case 'true':
                        return Z.not(_n1);
                      case 'false':
                        return Z.has(_n1);
                      default:
                        return Z.notEquals(_n1, _i20);
                    }
                  }
                  case 5:
                    return this.z(), _1.create(_n1, this.u());
                  case 6:
                    return this.z(), O1.create(_n1, this.u());
                  case 7:
                    return this.z(), S1.create(_n1, this.u());
                  case 8:
                    return this.z(), I1.create(_n1, this.u());
                  case 13:
                    return this.z(), Z['in'](_n1, this.u());
                  default:
                    return Z.has(_n1);
                }
              }
              case 20:
                throw (
                  (this.h.push({ message: go, offset: t.offset, lexeme: '', additionalInfo: mo }),
                  ue.c)
                );
              default:
                throw this.B(
                  "true | false | KEY \n\t| KEY '=~' REGEX \n\t| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value",
                  this.D(),
                );
            }
          },
        },
        {
          key: 'u',
          value: function u() {
            var t = this.D();
            switch (t.type) {
              case 17:
              case 18:
                return this.z(), t.lexeme;
              case 11:
                return this.z(), 'true';
              case 12:
                return this.z(), 'false';
              case 13:
                return this.z(), 'in';
              default:
                return '';
            }
          },
        },
        {
          key: 'w',
          value: function w(t) {
            return t.replaceAll(this.v, '');
          },
        },
        {
          key: 'x',
          value: function x() {
            return this.f[this.g - 1];
          },
        },
        {
          key: 'y',
          value: function y(t) {
            return this.C(t) ? (this.z(), !0) : !1;
          },
        },
        {
          key: 'z',
          value: function z() {
            return this.E() || this.g++, this.x();
          },
        },
        {
          key: 'A',
          value: function A(t, n) {
            if (this.C(t)) return this.z();
            throw this.B(n, this.D());
          },
        },
        {
          key: 'B',
          value: function B(t, n, r) {
            var i = et(1719, null, t, Qt.getLexeme(n)),
              s = n.offset,
              o = Qt.getLexeme(n);
            return this.h.push({ message: i, offset: s, lexeme: o, additionalInfo: r }), ue.c;
          },
        },
        {
          key: 'C',
          value: function C(t) {
            return this.D().type === t;
          },
        },
        {
          key: 'D',
          value: function D() {
            return this.f[this.g];
          },
        },
        {
          key: 'E',
          value: function E() {
            return this.D().type === 20;
          },
        },
      ]);
    })()),
    (_ue.c = new Error()),
    _ue),
  Z =
    ((_Class3 = /*#__PURE__*/ (function () {
      function Z() {
        _classCallCheck(this, Z);
      }
      return _createClass(Z, null, [
        {
          key: 'false',
          value: function _false() {
            return Q.INSTANCE;
          },
        },
        {
          key: 'true',
          value: function _true() {
            return it.INSTANCE;
          },
        },
        {
          key: 'has',
          value: function has(e) {
            return ne.create(e);
          },
        },
        {
          key: 'equals',
          value: function equals(e, t) {
            return $1.create(e, t);
          },
        },
        {
          key: 'notEquals',
          value: function notEquals(e, t) {
            return x1.create(e, t);
          },
        },
        {
          key: 'regex',
          value: function regex(e, t) {
            return M1.create(e, t);
          },
        },
        {
          key: 'in',
          value: function _in(e, t) {
            return vr.create(e, t);
          },
        },
        {
          key: 'notIn',
          value: function notIn(e, t) {
            return wr.create(e, t);
          },
        },
        {
          key: 'not',
          value: function not(e) {
            return re.create(e);
          },
        },
        {
          key: 'and',
          value: function and() {
            for (
              var _len8 = arguments.length, e = new Array(_len8), _key8 = 0;
              _key8 < _len8;
              _key8++
            ) {
              e[_key8] = arguments[_key8];
            }
            return Lr.create(e, null, !0);
          },
        },
        {
          key: 'or',
          value: function or() {
            for (
              var _len9 = arguments.length, e = new Array(_len9), _key9 = 0;
              _key9 < _len9;
              _key9++
            ) {
              e[_key9] = arguments[_key9];
            }
            return P1.create(e, null, !0);
          },
        },
        {
          key: 'greater',
          value: function greater(e, t) {
            return S1.create(e, t);
          },
        },
        {
          key: 'greaterEquals',
          value: function greaterEquals(e, t) {
            return I1.create(e, t);
          },
        },
        {
          key: 'smaller',
          value: function smaller(e, t) {
            return _1.create(e, t);
          },
        },
        {
          key: 'smallerEquals',
          value: function smallerEquals(e, t) {
            return O1.create(e, t);
          },
        },
        {
          key: 'function',
          value: function _function(e, t) {
            return E1.create(e, t);
          },
        },
        {
          key: 'deserialize',
          value: function deserialize(e) {
            return e == null ? void 0 : this.c.parse(e);
          },
        },
      ]);
    })()),
    (_Class3.c = new po({ regexParsingWithErrorRecovery: !1 })),
    _Class3);
function ee(e, t) {
  return e.cmp(t);
}
var E1 = /*#__PURE__*/ (function () {
    function ke(t, n) {
      _classCallCheck(this, ke);
      (this.type = 16), (this.d = t), (this.c = n);
    }
    return _createClass(
      ke,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : R1(this.d, t.d);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type && this.d === t.d;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return this.c();
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return '@'.concat(this.d);
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return this;
          },
        },
        {
          key: 'negate',
          value: function negate() {
            var _this26 = this;
            return ke.createWithoutRegistration('!'.concat(this.d), function () {
              return !_this26.c();
            });
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            return so(t, n), new ke(t, n);
          },
        },
        {
          key: 'createWithoutRegistration',
          value: function createWithoutRegistration(t, n) {
            return new ke(t, n);
          },
        },
      ],
    );
  })(),
  Q =
    ((_ri = /*#__PURE__*/ (function () {
      function ri() {
        _classCallCheck(this, ri);
        this.type = 0;
      }
      return _createClass(ri, [
        {
          key: 'cmp',
          value: function cmp(t) {
            return this.type - t.type;
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return !1;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return 'false';
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return this;
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return it.INSTANCE;
          },
        },
      ]);
    })()),
    (_ri.INSTANCE = new _ri()),
    _ri),
  it =
    ((_ii = /*#__PURE__*/ (function () {
      function ii() {
        _classCallCheck(this, ii);
        this.type = 1;
      }
      return _createClass(ii, [
        {
          key: 'cmp',
          value: function cmp(t) {
            return this.type - t.type;
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return !0;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return 'true';
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return this;
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return Q.INSTANCE;
          },
        },
      ]);
    })()),
    (_ii.INSTANCE = new _ii()),
    _ii),
  ne = /*#__PURE__*/ (function () {
    function si(t, n) {
      _classCallCheck(this, si);
      (this.key = t), (this.c = n), (this.type = 2);
    }
    return _createClass(
      si,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : R1(this.key, t.key);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.key === t.key : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            var t = V.get(this.key);
            return typeof t == 'boolean' ? (t ? it.INSTANCE : Q.INSTANCE) : this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return !!t.getValue(this.key);
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return this.key;
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.key];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapDefined(this.key);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.c || (this.c = re.create(this.key, this)), this.c;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = V.get(t);
            return typeof r == 'boolean' ? (r ? it.INSTANCE : Q.INSTANCE) : new si(t, n);
          },
        },
      ],
    );
  })(),
  $1 = /*#__PURE__*/ (function () {
    function oi(t, n, r) {
      _classCallCheck(this, oi);
      (this.c = t), (this.d = n), (this.f = r), (this.type = 4);
    }
    return _createClass(
      oi,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : Rt(this.c, this.d, t.c, t.d);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            var t = V.get(this.c);
            if (typeof t == 'boolean') {
              var n = t ? 'true' : 'false';
              return this.d === n ? it.INSTANCE : Q.INSTANCE;
            }
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return t.getValue(this.c) == this.d;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return ''.concat(this.c, " == '").concat(this.d, "'");
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.c];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapEquals(this.c, this.d);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.f || (this.f = x1.create(this.c, this.d, this)), this.f;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (typeof n == 'boolean') return n ? ne.create(t, r) : re.create(t, r);
            var i = V.get(t);
            return typeof i == 'boolean'
              ? n === (i ? 'true' : 'false')
                ? it.INSTANCE
                : Q.INSTANCE
              : new oi(t, n, r);
          },
        },
      ],
    );
  })(),
  vr = /*#__PURE__*/ (function () {
    function li(t, n) {
      _classCallCheck(this, li);
      (this.d = t), (this.f = n), (this.type = 10), (this.c = null);
    }
    return _createClass(
      li,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : Rt(this.d, this.f, t.d, t.f);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.d === t.d && this.f === t.f : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            var n = t.getValue(this.f),
              r = t.getValue(this.d);
            return Array.isArray(n)
              ? n.includes(r)
              : typeof r == 'string' && _typeof(n) == 'object' && n !== null
                ? oo.call(n, r)
                : !1;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return ''.concat(this.d, " in '").concat(this.f, "'");
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.d, this.f];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapIn(this.d, this.f);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.c || (this.c = wr.create(this.d, this.f)), this.c;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            return new li(t, n);
          },
        },
      ],
    );
  })(),
  wr = /*#__PURE__*/ (function () {
    function ai(t, n) {
      _classCallCheck(this, ai);
      (this.d = t), (this.f = n), (this.type = 11), (this.c = vr.create(t, n));
    }
    return _createClass(
      ai,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : this.c.cmp(t.c);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c.equals(t.c) : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return !this.c.evaluate(t);
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return ''.concat(this.d, " not in '").concat(this.f, "'");
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return this.c.keys();
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapNotIn(this.d, this.f);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.c;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            return new ai(t, n);
          },
        },
      ],
    );
  })(),
  x1 = /*#__PURE__*/ (function () {
    function ui(t, n, r) {
      _classCallCheck(this, ui);
      (this.c = t), (this.d = n), (this.f = r), (this.type = 5);
    }
    return _createClass(
      ui,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : Rt(this.c, this.d, t.c, t.d);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            var t = V.get(this.c);
            if (typeof t == 'boolean') {
              var n = t ? 'true' : 'false';
              return this.d === n ? Q.INSTANCE : it.INSTANCE;
            }
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return t.getValue(this.c) != this.d;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return ''.concat(this.c, " != '").concat(this.d, "'");
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.c];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapNotEquals(this.c, this.d);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.f || (this.f = $1.create(this.c, this.d, this)), this.f;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (typeof n == 'boolean') return n ? re.create(t, r) : ne.create(t, r);
            var i = V.get(t);
            return typeof i == 'boolean'
              ? n === (i ? 'true' : 'false')
                ? Q.INSTANCE
                : it.INSTANCE
              : new ui(t, n, r);
          },
        },
      ],
    );
  })(),
  re = /*#__PURE__*/ (function () {
    function hi(t, n) {
      _classCallCheck(this, hi);
      (this.c = t), (this.d = n), (this.type = 3);
    }
    return _createClass(
      hi,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : R1(this.c, t.c);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c === t.c : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            var t = V.get(this.c);
            return typeof t == 'boolean' ? (t ? Q.INSTANCE : it.INSTANCE) : this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return !t.getValue(this.c);
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return '!'.concat(this.c);
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.c];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapNot(this.c);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.d || (this.d = ne.create(this.c, this)), this.d;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = V.get(t);
            return typeof r == 'boolean' ? (r ? Q.INSTANCE : it.INSTANCE) : new hi(t, n);
          },
        },
      ],
    );
  })();
function Oe(e, t) {
  if (typeof e == 'string') {
    var n = parseFloat(e);
    isNaN(n) || (e = n);
  }
  return typeof e == 'string' || typeof e == 'number' ? t(e) : Q.INSTANCE;
}
var S1 = /*#__PURE__*/ (function () {
    function ci(t, n, r) {
      _classCallCheck(this, ci);
      (this.c = t), (this.d = n), (this.f = r), (this.type = 12);
    }
    return _createClass(
      ci,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : Rt(this.c, this.d, t.c, t.d);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return typeof this.d == 'string' ? !1 : parseFloat(t.getValue(this.c)) > this.d;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return ''.concat(this.c, ' > ').concat(this.d);
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.c];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapGreater(this.c, this.d);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.f || (this.f = O1.create(this.c, this.d, this)), this.f;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Oe(n, function (i) {
              return new ci(t, i, r);
            });
          },
        },
      ],
    );
  })(),
  I1 = /*#__PURE__*/ (function () {
    function fi(t, n, r) {
      _classCallCheck(this, fi);
      (this.c = t), (this.d = n), (this.f = r), (this.type = 13);
    }
    return _createClass(
      fi,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : Rt(this.c, this.d, t.c, t.d);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return typeof this.d == 'string' ? !1 : parseFloat(t.getValue(this.c)) >= this.d;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return ''.concat(this.c, ' >= ').concat(this.d);
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.c];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapGreaterEquals(this.c, this.d);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.f || (this.f = _1.create(this.c, this.d, this)), this.f;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Oe(n, function (i) {
              return new fi(t, i, r);
            });
          },
        },
      ],
    );
  })(),
  _1 = /*#__PURE__*/ (function () {
    function di(t, n, r) {
      _classCallCheck(this, di);
      (this.c = t), (this.d = n), (this.f = r), (this.type = 14);
    }
    return _createClass(
      di,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : Rt(this.c, this.d, t.c, t.d);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return typeof this.d == 'string' ? !1 : parseFloat(t.getValue(this.c)) < this.d;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return ''.concat(this.c, ' < ').concat(this.d);
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.c];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapSmaller(this.c, this.d);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.f || (this.f = I1.create(this.c, this.d, this)), this.f;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Oe(n, function (i) {
              return new di(t, i, r);
            });
          },
        },
      ],
    );
  })(),
  O1 = /*#__PURE__*/ (function () {
    function gi(t, n, r) {
      _classCallCheck(this, gi);
      (this.c = t), (this.d = n), (this.f = r), (this.type = 15);
    }
    return _createClass(
      gi,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : Rt(this.c, this.d, t.c, t.d);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c === t.c && this.d === t.d : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return typeof this.d == 'string' ? !1 : parseFloat(t.getValue(this.c)) <= this.d;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return ''.concat(this.c, ' <= ').concat(this.d);
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.c];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapSmallerEquals(this.c, this.d);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.f || (this.f = S1.create(this.c, this.d, this)), this.f;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Oe(n, function (i) {
              return new gi(t, i, r);
            });
          },
        },
      ],
    );
  })(),
  M1 = /*#__PURE__*/ (function () {
    function mi(t, n) {
      _classCallCheck(this, mi);
      (this.d = t), (this.f = n), (this.type = 7), (this.c = null);
    }
    return _createClass(
      mi,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            if (t.type !== this.type) return this.type - t.type;
            if (this.d < t.d) return -1;
            if (this.d > t.d) return 1;
            var n = this.f ? this.f.source : '',
              r = t.f ? t.f.source : '';
            return n < r ? -1 : n > r ? 1 : 0;
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            if (t.type === this.type) {
              var n = this.f ? this.f.source : '',
                r = t.f ? t.f.source : '';
              return this.d === t.d && n === r;
            }
            return !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            var n = t.getValue(this.d);
            return this.f ? this.f.test(n) : !1;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            var t = this.f ? '/'.concat(this.f.source, '/').concat(this.f.flags) : '/invalid/';
            return ''.concat(this.d, ' =~ ').concat(t);
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return [this.d];
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return t.mapRegex(this.d, this.f);
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.c || (this.c = bo.create(this)), this.c;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n) {
            return new mi(t, n);
          },
        },
      ],
    );
  })(),
  bo = /*#__PURE__*/ (function () {
    function B1(t) {
      _classCallCheck(this, B1);
      (this.c = t), (this.type = 8);
    }
    return _createClass(
      B1,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            return t.type !== this.type ? this.type - t.type : this.c.cmp(t.c);
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return t.type === this.type ? this.c.equals(t.c) : !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            return this;
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            return !this.c.evaluate(t);
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return '!('.concat(this.c.serialize(), ')');
          },
        },
        {
          key: 'keys',
          value: function keys() {
            return this.c.keys();
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return new B1(this.c.map(t));
          },
        },
        {
          key: 'negate',
          value: function negate() {
            return this.c;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t) {
            return new B1(t);
          },
        },
      ],
    );
  })();
function Cr(e) {
  var t = null;
  for (var n = 0, r = e.length; n < r; n++) {
    var i = e[n].substituteConstants();
    if (e[n] !== i && t === null) {
      t = [];
      for (var s = 0; s < n; s++) t[s] = e[s];
    }
    t !== null && (t[n] = i);
  }
  return t === null ? e : t;
}
var Lr = /*#__PURE__*/ (function () {
    function Gt(t, n) {
      _classCallCheck(this, Gt);
      (this.expr = t), (this.c = n), (this.type = 6);
    }
    return _createClass(
      Gt,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            if (t.type !== this.type) return this.type - t.type;
            if (this.expr.length < t.expr.length) return -1;
            if (this.expr.length > t.expr.length) return 1;
            for (var n = 0, r = this.expr.length; n < r; n++) {
              var i = ee(this.expr[n], t.expr[n]);
              if (i !== 0) return i;
            }
            return 0;
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            if (t.type === this.type) {
              if (this.expr.length !== t.expr.length) return !1;
              for (var n = 0, r = this.expr.length; n < r; n++)
                if (!this.expr[n].equals(t.expr[n])) return !1;
              return !0;
            }
            return !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            var t = Cr(this.expr);
            return t === this.expr ? this : Gt.create(t, this.c, !1);
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            for (var n = 0, r = this.expr.length; n < r; n++)
              if (!this.expr[n].evaluate(t)) return !1;
            return !0;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return this.expr
              .map(function (t) {
                return t.serialize();
              })
              .join(' && ');
          },
        },
        {
          key: 'keys',
          value: function keys() {
            var t = [];
            var _iterator35 = _createForOfIteratorHelper(this.expr),
              _step35;
            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
                var n = _step35.value;
                t.push.apply(t, _toConsumableArray(n.keys()));
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }
            return t;
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return new Gt(
              this.expr.map(function (n) {
                return n.map(t);
              }),
              null,
            );
          },
        },
        {
          key: 'negate',
          value: function negate() {
            if (!this.c) {
              var _t16 = [];
              var _iterator36 = _createForOfIteratorHelper(this.expr),
                _step36;
              try {
                for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
                  var n = _step36.value;
                  _t16.push(n.negate());
                }
              } catch (err) {
                _iterator36.e(err);
              } finally {
                _iterator36.f();
              }
              this.c = P1.create(_t16, this, !0);
            }
            return this.c;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n, r) {
            return Gt.d(t, n, r);
          },
        },
        {
          key: 'd',
          value: function d(t, n, r) {
            var i = [];
            var s = !1;
            var _iterator37 = _createForOfIteratorHelper(t),
              _step37;
            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done; ) {
                var _o13 = _step37.value;
                if (_o13) {
                  if (_o13.type === 1) {
                    s = !0;
                    continue;
                  }
                  if (_o13.type === 0) return Q.INSTANCE;
                  if (_o13.type === 6) {
                    i.push.apply(i, _toConsumableArray(_o13.expr));
                    continue;
                  }
                  i.push(_o13);
                }
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }
            if (i.length === 0 && s) return it.INSTANCE;
            if (i.length !== 0) {
              if (i.length === 1) return i[0];
              i.sort(ee);
              for (var o = 1; o < i.length; o++) i[o - 1].equals(i[o]) && (i.splice(o, 1), o--);
              if (i.length === 1) return i[0];
              var _loop2 = function _loop2() {
                var o = i[i.length - 1];
                if (o.type !== 9) return 1; // break
                i.pop();
                var l = i.pop(),
                  a = i.length === 0,
                  u = P1.create(
                    o.expr.map(function (c) {
                      return Gt.create([c, l], null, r);
                    }),
                    null,
                    a,
                  );
                u && (i.push(u), i.sort(ee));
              };
              for (; i.length > 1; ) {
                if (_loop2()) break;
              }
              if (i.length === 1) return i[0];
              if (r) {
                for (var _o12 = 0; _o12 < i.length; _o12++)
                  for (var l = _o12 + 1; l < i.length; l++)
                    if (i[_o12].negate().equals(i[l])) return Q.INSTANCE;
                if (i.length === 1) return i[0];
              }
              return new Gt(i, n);
            }
          },
        },
      ],
    );
  })(),
  P1 = /*#__PURE__*/ (function () {
    function kt(t, n) {
      _classCallCheck(this, kt);
      (this.expr = t), (this.c = n), (this.type = 9);
    }
    return _createClass(
      kt,
      [
        {
          key: 'cmp',
          value: function cmp(t) {
            if (t.type !== this.type) return this.type - t.type;
            if (this.expr.length < t.expr.length) return -1;
            if (this.expr.length > t.expr.length) return 1;
            for (var n = 0, r = this.expr.length; n < r; n++) {
              var i = ee(this.expr[n], t.expr[n]);
              if (i !== 0) return i;
            }
            return 0;
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            if (t.type === this.type) {
              if (this.expr.length !== t.expr.length) return !1;
              for (var n = 0, r = this.expr.length; n < r; n++)
                if (!this.expr[n].equals(t.expr[n])) return !1;
              return !0;
            }
            return !1;
          },
        },
        {
          key: 'substituteConstants',
          value: function substituteConstants() {
            var t = Cr(this.expr);
            return t === this.expr ? this : kt.create(t, this.c, !1);
          },
        },
        {
          key: 'evaluate',
          value: function evaluate(t) {
            for (var n = 0, r = this.expr.length; n < r; n++)
              if (this.expr[n].evaluate(t)) return !0;
            return !1;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return this.expr
              .map(function (t) {
                return t.serialize();
              })
              .join(' || ');
          },
        },
        {
          key: 'keys',
          value: function keys() {
            var t = [];
            var _iterator38 = _createForOfIteratorHelper(this.expr),
              _step38;
            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done; ) {
                var n = _step38.value;
                t.push.apply(t, _toConsumableArray(n.keys()));
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
            return t;
          },
        },
        {
          key: 'map',
          value: function map(t) {
            return new kt(
              this.expr.map(function (n) {
                return n.map(t);
              }),
              null,
            );
          },
        },
        {
          key: 'negate',
          value: function negate() {
            if (!this.c) {
              var _t17 = [];
              var _iterator39 = _createForOfIteratorHelper(this.expr),
                _step39;
              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done; ) {
                  var _n10 = _step39.value;
                  _t17.push(_n10.negate());
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
              }
              for (; _t17.length > 1; ) {
                var n = _t17.shift(),
                  r = _t17.shift(),
                  i = [];
                var _iterator40 = _createForOfIteratorHelper(Nr(n)),
                  _step40;
                try {
                  for (_iterator40.s(); !(_step40 = _iterator40.n()).done; ) {
                    var s = _step40.value;
                    var _iterator41 = _createForOfIteratorHelper(Nr(r)),
                      _step41;
                    try {
                      for (_iterator41.s(); !(_step41 = _iterator41.n()).done; ) {
                        var o = _step41.value;
                        i.push(Lr.create([s, o], null, !1));
                      }
                    } catch (err) {
                      _iterator41.e(err);
                    } finally {
                      _iterator41.f();
                    }
                  }
                } catch (err) {
                  _iterator40.e(err);
                } finally {
                  _iterator40.f();
                }
                _t17.unshift(kt.create(i, null, !1));
              }
              this.c = kt.create(_t17, this, !0);
            }
            return this.c;
          },
        },
      ],
      [
        {
          key: 'create',
          value: function create(t, n, r) {
            return kt.d(t, n, r);
          },
        },
        {
          key: 'd',
          value: function d(t, n, r) {
            var i = [],
              s = !1;
            if (t) {
              for (var o = 0, l = t.length; o < l; o++) {
                var a = t[o];
                if (a) {
                  if (a.type === 0) {
                    s = !0;
                    continue;
                  }
                  if (a.type === 1) return it.INSTANCE;
                  if (a.type === 9) {
                    i = i.concat(a.expr);
                    continue;
                  }
                  i.push(a);
                }
              }
              if (i.length === 0 && s) return Q.INSTANCE;
              i.sort(ee);
            }
            if (i.length !== 0) {
              if (i.length === 1) return i[0];
              for (var _o14 = 1; _o14 < i.length; _o14++)
                i[_o14 - 1].equals(i[_o14]) && (i.splice(_o14, 1), _o14--);
              if (i.length === 1) return i[0];
              if (r) {
                for (var _o15 = 0; _o15 < i.length; _o15++)
                  for (var _l13 = _o15 + 1; _l13 < i.length; _l13++)
                    if (i[_o15].negate().equals(i[_l13])) return it.INSTANCE;
                if (i.length === 1) return i[0];
              }
              return new kt(i, n);
            }
          },
        },
      ],
    );
  })(),
  yr =
    ((_Fe = /*#__PURE__*/ (function (_ne) {
      function Fe(t, n, r) {
        var _this27;
        _classCallCheck(this, Fe);
        (_this27 = _callSuper(this, Fe, [t, null])),
          (_this27.f = n),
          _typeof(r) == 'object'
            ? Fe.d.push(_objectSpread(_objectSpread({}, r), {}, { key: t }))
            : r !== !0 &&
              Fe.d.push({ key: t, description: r, type: n != null ? _typeof(n) : void 0 });
        return _this27;
      }
      _inherits(Fe, _ne);
      return _createClass(
        Fe,
        [
          {
            key: 'bindTo',
            value: function bindTo(t) {
              return t.createKey(this.key, this.f);
            },
          },
          {
            key: 'getValue',
            value: function getValue(t) {
              return t.getContextKeyValue(this.key);
            },
          },
          {
            key: 'toNegated',
            value: function toNegated() {
              return this.negate();
            },
          },
          {
            key: 'isEqualTo',
            value: function isEqualTo(t) {
              return $1.create(this.key, t);
            },
          },
          {
            key: 'notEqualsTo',
            value: function notEqualsTo(t) {
              return x1.create(this.key, t);
            },
          },
        ],
        [
          {
            key: 'all',
            value: function all() {
              return Fe.d.values();
            },
          },
        ],
      );
    })(ne)),
    (_Fe.d = []),
    _Fe),
  Dl = A1('contextKeyService');
function R1(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Rt(e, t, n, r) {
  return e < n ? -1 : e > n ? 1 : t < r ? -1 : t > r ? 1 : 0;
}
function Nr(e) {
  return e.type === 9 ? e.expr : [e];
}
var Ar = /*#__PURE__*/ _createClass(function Ar(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    _classCallCheck(this, Ar);
    (this.ctor = e), (this.staticArguments = t), (this.supportsDelayedInstantiation = n);
  }),
  vo = [],
  Er;
(function (e) {
  (e[(e.Eager = 0)] = 'Eager'), (e[(e.Delayed = 1)] = 'Delayed');
})(Er || (Er = {}));
function wo(e, t, n) {
  t instanceof Ar || (t = new Ar(t, [], !!n)), vo.push([e, t]);
}
var Co = A1('notebookDocumentService'),
  D1 = ['W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f'],
  Lo = new RegExp('^['.concat(D1.join(''), ']+')),
  $r = 7;
function xr(e) {
  if (e.scheme !== F.vscodeNotebookCell) return;
  var t = e.fragment.indexOf('s');
  if (t < 0) return;
  var n = parseInt(e.fragment.substring(0, t).replace(Lo, ''), $r),
    r = Q1(e.fragment.substring(t + 1)).toString();
  if (!isNaN(n)) return { handle: n, notebook: e['with']({ scheme: r, fragment: null }) };
}
function yo(e, t) {
  var n = t.toString($r),
    i = ''
      .concat(n.length < D1.length ? D1[n.length - 1] : 'z')
      .concat(n, 's')
      .concat(tn(Xe.fromString(e.scheme), !0, !0));
  return e['with']({ scheme: F.vscodeNotebookCell, fragment: i });
}
function No(e) {
  if (e.scheme !== F.vscodeNotebookMetadata) return;
  var t = Q1(e.fragment).toString();
  return e['with']({ scheme: t, fragment: null });
}
function Ao(e) {
  var t = ''.concat(tn(Xe.fromString(e.scheme), !0, !0));
  return e['with']({ scheme: F.vscodeNotebookMetadata, fragment: t });
}
var Eo = /*#__PURE__*/ (function () {
  function Eo() {
    _classCallCheck(this, Eo);
    this.a = new We();
  }
  return _createClass(Eo, [
    {
      key: 'getNotebook',
      value: function getNotebook(e) {
        if (e.scheme === F.vscodeNotebookCell) {
          var _t18 = xr(e);
          if (_t18) {
            var n = this.a.get(_t18.notebook);
            if (n) return n;
          }
        }
        return this.a.get(e);
      },
    },
    {
      key: 'addNotebookDocument',
      value: function addNotebookDocument(e) {
        this.a.set(e.uri, e);
      },
    },
    {
      key: 'removeNotebookDocument',
      value: function removeNotebookDocument(e) {
        this.a['delete'](e.uri);
      },
    },
  ]);
})();
wo(Co, Eo, 1);
var k1;
(function (e) {
  (e[(e.Markup = 1)] = 'Markup'), (e[(e.Code = 2)] = 'Code');
})(k1 || (k1 = {}));
var kl = [
    'application/json',
    'application/javascript',
    'text/html',
    'image/svg+xml',
    Wt.latex,
    Wt.markdown,
    'image/png',
    'image/jpeg',
    Wt.text,
  ],
  Fl = [
    Wt.latex,
    Wt.markdown,
    'application/json',
    'text/html',
    'image/svg+xml',
    'image/png',
    'image/jpeg',
    Wt.text,
  ],
  Sr;
(function (e) {
  (e[(e.Running = 1)] = 'Running'), (e[(e.Idle = 2)] = 'Idle');
})(Sr || (Sr = {}));
var Ir;
(function (e) {
  (e[(e.Unconfirmed = 1)] = 'Unconfirmed'),
    (e[(e.Pending = 2)] = 'Pending'),
    (e[(e.Executing = 3)] = 'Executing');
})(Ir || (Ir = {}));
var _r;
(function (e) {
  (e[(e.Unconfirmed = 1)] = 'Unconfirmed'),
    (e[(e.Pending = 2)] = 'Pending'),
    (e[(e.Executing = 3)] = 'Executing');
})(_r || (_r = {}));
var Or;
(function (e) {
  (e[(e.WithHardKernelDependency = 0)] = 'WithHardKernelDependency'),
    (e[(e.WithOptionalKernelDependency = 1)] = 'WithOptionalKernelDependency'),
    (e[(e.Pure = 2)] = 'Pure'),
    (e[(e.Never = 3)] = 'Never');
})(Or || (Or = {}));
var Mr;
(function (e) {
  (e.Always = 'always'), (e.Never = 'never'), (e.Optional = 'optional');
})(Mr || (Mr = {}));
var Lt;
(function (e) {
  (e[(e.ModelChange = 1)] = 'ModelChange'),
    (e[(e.Move = 2)] = 'Move'),
    (e[(e.ChangeCellLanguage = 5)] = 'ChangeCellLanguage'),
    (e[(e.Initialize = 6)] = 'Initialize'),
    (e[(e.ChangeCellMetadata = 7)] = 'ChangeCellMetadata'),
    (e[(e.Output = 8)] = 'Output'),
    (e[(e.OutputItem = 9)] = 'OutputItem'),
    (e[(e.ChangeCellContent = 10)] = 'ChangeCellContent'),
    (e[(e.ChangeDocumentMetadata = 11)] = 'ChangeDocumentMetadata'),
    (e[(e.ChangeCellInternalMetadata = 12)] = 'ChangeCellInternalMetadata'),
    (e[(e.ChangeCellMime = 13)] = 'ChangeCellMime'),
    (e[(e.Unknown = 100)] = 'Unknown');
})(Lt || (Lt = {}));
var Pr;
(function (e) {
  (e[(e.Handle = 0)] = 'Handle'), (e[(e.Index = 1)] = 'Index');
})(Pr || (Pr = {}));
var Rr;
(function (e) {
  (e[(e.Replace = 1)] = 'Replace'),
    (e[(e.Output = 2)] = 'Output'),
    (e[(e.Metadata = 3)] = 'Metadata'),
    (e[(e.CellLanguage = 4)] = 'CellLanguage'),
    (e[(e.DocumentMetadata = 5)] = 'DocumentMetadata'),
    (e[(e.Move = 6)] = 'Move'),
    (e[(e.OutputItems = 7)] = 'OutputItems'),
    (e[(e.PartialMetadata = 8)] = 'PartialMetadata'),
    (e[(e.PartialInternalMetadata = 9)] = 'PartialInternalMetadata');
})(Rr || (Rr = {}));
var Dr;
(function (e) {
  e.scheme = F.vscodeNotebookMetadata;
  function t(r) {
    return Ao(r);
  }
  e.generate = t;
  function n(r) {
    return No(r);
  }
  e.parse = n;
})(Dr || (Dr = {}));
var kr;
(function (e) {
  e.scheme = F.vscodeNotebookCell;
  function t(l, a) {
    return yo(l, a);
  }
  e.generate = t;
  function n(l) {
    return xr(l);
  }
  e.parse = n;
  function r(l, a) {
    return l['with']({
      scheme: F.vscodeNotebookCellOutput,
      fragment: 'op'
        .concat(a !== null && a !== void 0 ? a : '', ',')
        .concat(l.scheme !== F.file ? l.scheme : ''),
    });
  }
  e.generateCellOutputUri = r;
  function i(l) {
    if (l.scheme !== F.vscodeNotebookCellOutput) return;
    var a = /^op([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?\,(.*)$/i.exec(
      l.fragment,
    );
    if (!a) return;
    var u = a[1] && a[1] !== '' ? a[1] : void 0,
      c = a[2];
    return { outputId: u, notebook: l['with']({ scheme: c || F.file, fragment: null }) };
  }
  e.parseCellOutputUri = i;
  function s(l, a, u) {
    return e.generate(l, a)['with']({ scheme: u });
  }
  e.generateCellPropertyUri = s;
  function o(l, a) {
    if (l.scheme === a) return e.parse(l['with']({ scheme: e.scheme }));
  }
  e.parseCellPropertyUri = o;
})(kr || (kr = {}));
var ql = new yr('notebookEditorCursorAtBoundary', 'none'),
  Ul = new yr('notebookEditorCursorAtLineBoundary', 'none'),
  Fr;
(function (e) {
  (e['default'] = 'default'), (e.option = 'option');
})(Fr || (Fr = {}));
var qr;
(function (e) {
  (e.Cells = 'cells'), (e.Text = 'text'), (e.None = 'none');
})(qr || (qr = {}));
var Ur;
(function (e) {
  (e[(e.Left = 1)] = 'Left'), (e[(e.Right = 2)] = 'Right');
})(Ur || (Ur = {}));
var jl =
    ((_qe = /*#__PURE__*/ (function () {
      function qe() {
        _classCallCheck(this, qe);
      }
      return _createClass(qe, null, [
        {
          key: 'create',
          value: function create(t, n) {
            return ''
              .concat(qe.d)
              .concat(t, '/')
              .concat(n !== null && n !== void 0 ? n : t);
          },
        },
        {
          key: 'parse',
          value: function parse(t) {
            if (t.startsWith(qe.d)) {
              var n = t.substring(qe.d.length).split('/');
              if (n.length === 2) return { notebookType: n[0], viewType: n[1] };
            }
          },
        },
      ]);
    })()),
    (_qe.d = 'notebook/'),
    _qe),
  zl = new TextDecoder(),
  $o = '\x1B[A',
  Bl = $o.split('').map(function (e) {
    return e.charCodeAt(0);
  }),
  Tl = 8,
  Wl = 13,
  xo = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
function So() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var t = '(-?\\d*\\.\\d\\w*)|([^';
  var _iterator42 = _createForOfIteratorHelper(xo),
    _step42;
  try {
    for (_iterator42.s(); !(_step42 = _iterator42.n()).done; ) {
      var n = _step42.value;
      e.indexOf(n) >= 0 || (t += '\\' + n);
    }
  } catch (err) {
    _iterator42.e(err);
  } finally {
    _iterator42.f();
  }
  return (t += '\\s]+)'), new RegExp(t, 'g');
}
var Io = So();
function jr(e) {
  var t = Io;
  if (e && e instanceof RegExp)
    if (e.global) t = e;
    else {
      var n = 'g';
      e.ignoreCase && (n += 'i'),
        e.multiline && (n += 'm'),
        e.unicode && (n += 'u'),
        (t = new RegExp(e.source, n));
    }
  return (t.lastIndex = 0), t;
}
var zr = new Zi();
zr.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
function Br(e, t, n, r, i) {
  if (((t = jr(t)), i || (i = de.first(zr)), n.length > i.maxLen)) {
    var u = e - i.maxLen / 2;
    return u < 0 ? (u = 0) : (r += u), (n = n.substring(u, e + i.maxLen / 2)), Br(e, t, n, r, i);
  }
  var s = Date.now(),
    o = e - 1 - r;
  var l = -1,
    a = null;
  for (var _u1 = 1; !(Date.now() - s >= i.timeBudget); _u1++) {
    var c = o - i.windowSize * _u1;
    t.lastIndex = Math.max(0, c);
    var h = _o(t, n, o, l);
    if ((!h && a) || ((a = h), c <= 0)) break;
    l = c;
  }
  if (a) {
    var _u10 = {
      word: a[0],
      startColumn: r + 1 + a.index,
      endColumn: r + 1 + a.index + a[0].length,
    };
    return (t.lastIndex = 0), _u10;
  }
  return null;
}
function _o(e, t, n, r) {
  var i;
  for (; (i = e.exec(t)); ) {
    var s = i.index || 0;
    if (s <= n && e.lastIndex >= n) return i;
    if (r > 0 && s > r) return null;
  }
  return null;
}
var Oo = /*#__PURE__*/ (function () {
    function Oo(e) {
      _classCallCheck(this, Oo);
      (this.a = e),
        (this.b = new Uint32Array(e.length)),
        (this.c = new Int32Array(1)),
        (this.c[0] = -1);
    }
    return _createClass(Oo, [
      {
        key: 'getCount',
        value: function getCount() {
          return this.a.length;
        },
      },
      {
        key: 'insertValues',
        value: function insertValues(e, t) {
          e = Tt(e);
          var n = this.a,
            r = this.b,
            i = t.length;
          return i === 0
            ? !1
            : ((this.a = new Uint32Array(n.length + i)),
              this.a.set(n.subarray(0, e), 0),
              this.a.set(n.subarray(e), e + i),
              this.a.set(t, e),
              e - 1 < this.c[0] && (this.c[0] = e - 1),
              (this.b = new Uint32Array(this.a.length)),
              this.c[0] >= 0 && this.b.set(r.subarray(0, this.c[0] + 1)),
              !0);
        },
      },
      {
        key: 'setValue',
        value: function setValue(e, t) {
          return (
            (e = Tt(e)),
            (t = Tt(t)),
            this.a[e] === t ? !1 : ((this.a[e] = t), e - 1 < this.c[0] && (this.c[0] = e - 1), !0)
          );
        },
      },
      {
        key: 'removeValues',
        value: function removeValues(e, t) {
          (e = Tt(e)), (t = Tt(t));
          var n = this.a,
            r = this.b;
          if (e >= n.length) return !1;
          var i = n.length - e;
          return (
            t >= i && (t = i),
            t === 0
              ? !1
              : ((this.a = new Uint32Array(n.length - t)),
                this.a.set(n.subarray(0, e), 0),
                this.a.set(n.subarray(e + t), e),
                (this.b = new Uint32Array(this.a.length)),
                e - 1 < this.c[0] && (this.c[0] = e - 1),
                this.c[0] >= 0 && this.b.set(r.subarray(0, this.c[0] + 1)),
                !0)
          );
        },
      },
      {
        key: 'getTotalSum',
        value: function getTotalSum() {
          return this.a.length === 0 ? 0 : this.d(this.a.length - 1);
        },
      },
      {
        key: 'getPrefixSum',
        value: function getPrefixSum(e) {
          return e < 0 ? 0 : ((e = Tt(e)), this.d(e));
        },
      },
      {
        key: 'd',
        value: function d(e) {
          if (e <= this.c[0]) return this.b[e];
          var t = this.c[0] + 1;
          t === 0 && ((this.b[0] = this.a[0]), t++), e >= this.a.length && (e = this.a.length - 1);
          for (var n = t; n <= e; n++) this.b[n] = this.b[n - 1] + this.a[n];
          return (this.c[0] = Math.max(this.c[0], e)), this.b[e];
        },
      },
      {
        key: 'getIndexOf',
        value: function getIndexOf(e) {
          (e = Math.floor(e)), this.getTotalSum();
          var t = 0,
            n = this.a.length - 1,
            r = 0,
            i = 0,
            s = 0;
          for (; t <= n; )
            if (((r = (t + (n - t) / 2) | 0), (i = this.b[r]), (s = i - this.a[r]), e < s))
              n = r - 1;
            else if (e >= i) t = r + 1;
            else break;
          return new Mo(r, e - s);
        },
      },
    ]);
  })(),
  Mo = /*#__PURE__*/ _createClass(function Mo(e, t) {
    _classCallCheck(this, Mo);
    (this.index = e),
      (this.remainder = t),
      (this._prefixSumIndexOfResultBrand = void 0),
      (this.index = e),
      (this.remainder = t);
  }),
  Po = /*#__PURE__*/ (function () {
    function Po(e, t, n, r) {
      _classCallCheck(this, Po);
      (this.a = e), (this.b = t), (this.c = n), (this.d = r), (this.f = null), (this.g = null);
    }
    return _createClass(Po, [
      {
        key: 'dispose',
        value: function dispose() {
          this.b.length = 0;
        },
      },
      {
        key: 'version',
        get: function get() {
          return this.d;
        },
      },
      {
        key: 'getText',
        value: function getText() {
          return this.g === null && (this.g = this.b.join(this.c)), this.g;
        },
      },
      {
        key: 'onEvents',
        value: function onEvents(e) {
          e.eol && e.eol !== this.c && ((this.c = e.eol), (this.f = null));
          var t = e.changes;
          var _iterator43 = _createForOfIteratorHelper(t),
            _step43;
          try {
            for (_iterator43.s(); !(_step43 = _iterator43.n()).done; ) {
              var n = _step43.value;
              this.k(n.range), this.l(new mt(n.range.startLineNumber, n.range.startColumn), n.text);
            }
          } catch (err) {
            _iterator43.e(err);
          } finally {
            _iterator43.f();
          }
          (this.d = e.versionId), (this.g = null);
        },
      },
      {
        key: 'h',
        value: function h() {
          if (!this.f) {
            var _e10 = this.c.length,
              _t19 = this.b.length,
              n = new Uint32Array(_t19);
            for (var r = 0; r < _t19; r++) n[r] = this.b[r].length + _e10;
            this.f = new Oo(n);
          }
        },
      },
      {
        key: 'j',
        value: function j(e, t) {
          (this.b[e] = t), this.f && this.f.setValue(e, this.b[e].length + this.c.length);
        },
      },
      {
        key: 'k',
        value: function k(e) {
          if (e.startLineNumber === e.endLineNumber) {
            if (e.startColumn === e.endColumn) return;
            this.j(
              e.startLineNumber - 1,
              this.b[e.startLineNumber - 1].substring(0, e.startColumn - 1) +
                this.b[e.startLineNumber - 1].substring(e.endColumn - 1),
            );
            return;
          }
          this.j(
            e.startLineNumber - 1,
            this.b[e.startLineNumber - 1].substring(0, e.startColumn - 1) +
              this.b[e.endLineNumber - 1].substring(e.endColumn - 1),
          ),
            this.b.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber),
            this.f && this.f.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
        },
      },
      {
        key: 'l',
        value: function l(e, t) {
          if (t.length === 0) return;
          var n = ms(t);
          if (n.length === 1) {
            this.j(
              e.lineNumber - 1,
              this.b[e.lineNumber - 1].substring(0, e.column - 1) +
                n[0] +
                this.b[e.lineNumber - 1].substring(e.column - 1),
            );
            return;
          }
          (n[n.length - 1] += this.b[e.lineNumber - 1].substring(e.column - 1)),
            this.j(e.lineNumber - 1, this.b[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
          var r = new Uint32Array(n.length - 1);
          for (var i = 1; i < n.length; i++)
            this.b.splice(e.lineNumber + i - 1, 0, n[i]), (r[i - 1] = n[i].length + this.c.length);
          this.f && this.f.insertValues(e.lineNumber, r);
        },
      },
    ]);
  })(),
  Vl = 60 * 1e3,
  Ro = /*#__PURE__*/ (function (_Po) {
    function Ro() {
      _classCallCheck(this, Ro);
      return _callSuper(this, Ro, arguments);
    }
    _inherits(Ro, _Po);
    return _createClass(Ro, [
      {
        key: 'uri',
        get: function get() {
          return this.a;
        },
      },
      {
        key: 'eol',
        get: function get() {
          return this.c;
        },
      },
      {
        key: 'getValue',
        value: function getValue() {
          return this.getText();
        },
      },
      {
        key: 'findMatches',
        value: function findMatches(e) {
          var t = [];
          for (var n = 0; n < this.b.length; n++) {
            var r = this.b[n],
              i = this.offsetAt(new mt(n + 1, 1)),
              s = r.matchAll(e);
            var _iterator44 = _createForOfIteratorHelper(s),
              _step44;
            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done; ) {
                var o = _step44.value;
                (o.index || o.index === 0) && (o.index = o.index + i), t.push(o);
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }
          }
          return t;
        },
      },
      {
        key: 'getLinesContent',
        value: function getLinesContent() {
          return this.b.slice(0);
        },
      },
      {
        key: 'getLineCount',
        value: function getLineCount() {
          return this.b.length;
        },
      },
      {
        key: 'getLineContent',
        value: function getLineContent(e) {
          return this.b[e - 1];
        },
      },
      {
        key: 'getWordAtPosition',
        value: function getWordAtPosition(e, t) {
          var n = Br(e.column, jr(t), this.b[e.lineNumber - 1], 0);
          return n ? new J(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
        },
      },
      {
        key: 'getWordUntilPosition',
        value: function getWordUntilPosition(e, t) {
          var n = this.getWordAtPosition(e, t);
          return n
            ? {
                word: this.b[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1),
                startColumn: n.startColumn,
                endColumn: e.column,
              }
            : { word: '', startColumn: e.column, endColumn: e.column };
        },
      },
      {
        key: 'words',
        value: function words(e) {
          var t = this.b,
            n = this.m.bind(this);
          var r = 0,
            i = '',
            s = 0,
            o = [];
          return _defineProperty(
            {},
            Symbol.iterator,
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14() {
              var l;
              return _regeneratorRuntime().wrap(function _callee14$(_context27) {
                while (1)
                  switch ((_context27.prev = _context27.next)) {
                    case 0:
                      if (!(s < o.length)) {
                        _context27.next = 7;
                        break;
                      }
                      l = i.substring(o[s].start, o[s].end);
                      s += 1;
                      _context27.next = 5;
                      return l;
                    case 5:
                      _context27.next = 12;
                      break;
                    case 7:
                      if (!(r < t.length)) {
                        _context27.next = 11;
                        break;
                      }
                      (i = t[r]), (o = n(i, e)), (s = 0), (r += 1);
                      _context27.next = 12;
                      break;
                    case 11:
                      return _context27.abrupt('break', 14);
                    case 12:
                      _context27.next = 0;
                      break;
                    case 14:
                    case 'end':
                      return _context27.stop();
                  }
              }, _callee14);
            }),
          );
        },
      },
      {
        key: 'getLineWords',
        value: function getLineWords(e, t) {
          var n = this.b[e - 1],
            r = this.m(n, t),
            i = [];
          var _iterator45 = _createForOfIteratorHelper(r),
            _step45;
          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done; ) {
              var s = _step45.value;
              i.push({
                word: n.substring(s.start, s.end),
                startColumn: s.start + 1,
                endColumn: s.end + 1,
              });
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
          return i;
        },
      },
      {
        key: 'm',
        value: function m(e, t) {
          var n = [];
          var r;
          for (t.lastIndex = 0; (r = t.exec(e)) && r[0].length !== 0; )
            n.push({ start: r.index, end: r.index + r[0].length });
          return n;
        },
      },
      {
        key: 'getValueInRange',
        value: function getValueInRange(e) {
          if (((e = this.n(e)), e.startLineNumber === e.endLineNumber))
            return this.b[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
          var t = this.c,
            n = e.startLineNumber - 1,
            r = e.endLineNumber - 1,
            i = [];
          i.push(this.b[n].substring(e.startColumn - 1));
          for (var s = n + 1; s < r; s++) i.push(this.b[s]);
          return i.push(this.b[r].substring(0, e.endColumn - 1)), i.join(t);
        },
      },
      {
        key: 'offsetAt',
        value: function offsetAt(e) {
          return (e = this.o(e)), this.h(), this.f.getPrefixSum(e.lineNumber - 2) + (e.column - 1);
        },
      },
      {
        key: 'positionAt',
        value: function positionAt(e) {
          (e = Math.floor(e)), (e = Math.max(0, e)), this.h();
          var t = this.f.getIndexOf(e),
            n = this.b[t.index].length;
          return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) };
        },
      },
      {
        key: 'n',
        value: function n(e) {
          var t = this.o({ lineNumber: e.startLineNumber, column: e.startColumn }),
            n = this.o({ lineNumber: e.endLineNumber, column: e.endColumn });
          return t.lineNumber !== e.startLineNumber ||
            t.column !== e.startColumn ||
            n.lineNumber !== e.endLineNumber ||
            n.column !== e.endColumn
            ? {
                startLineNumber: t.lineNumber,
                startColumn: t.column,
                endLineNumber: n.lineNumber,
                endColumn: n.column,
              }
            : e;
        },
      },
      {
        key: 'o',
        value: function o(e) {
          if (!mt.isIPosition(e)) throw new Error('bad position');
          var t = e.lineNumber,
            n = e.column,
            r = !1;
          if (t < 1) (t = 1), (n = 1), (r = !0);
          else if (t > this.b.length) (t = this.b.length), (n = this.b[t - 1].length + 1), (r = !0);
          else {
            var i = this.b[t - 1].length + 1;
            n < 1 ? ((n = 1), (r = !0)) : n > i && ((n = i), (r = !0));
          }
          return r ? { lineNumber: t, column: n } : e;
        },
      },
    ]);
  })(Po),
  Tr = /*#__PURE__*/ (function () {
    function Tr(e, t, n, r, i, s, o, l, a, u) {
      _classCallCheck(this, Tr);
      (this.handle = e),
        (this.d = r),
        (this.language = s),
        (this.cellKind = o),
        (this.outputs = l),
        (this.metadata = a),
        (this.internalMetadata = u),
        (this.a = new Ro(t, n, r, i));
    }
    return _createClass(Tr, [
      {
        key: 'eol',
        get: function get() {
          return this.d === '\r\n' ? 2 : 1;
        },
      },
      {
        key: 'onEvents',
        value: function onEvents(e) {
          this.a.onEvents(e), (this.b = void 0);
        },
      },
      {
        key: 'getValue',
        value: function getValue() {
          return this.a.getValue();
        },
      },
      {
        key: 'getComparisonValue',
        value: (function () {
          var _getComparisonValue = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee15() {
              var _this$b;
              return _regeneratorRuntime().wrap(
                function _callee15$(_context28) {
                  while (1)
                    switch ((_context28.prev = _context28.next)) {
                      case 0:
                        return _context28.abrupt(
                          'return',
                          (_this$b = this.b) !== null && _this$b !== void 0
                            ? _this$b
                            : (this.b = this.f()),
                        );
                      case 1:
                      case 'end':
                        return _context28.stop();
                    }
                },
                _callee15,
                this,
              );
            }),
          );
          function getComparisonValue() {
            return _getComparisonValue.apply(this, arguments);
          }
          return getComparisonValue;
        })(),
      },
      {
        key: 'f',
        value: (function () {
          var _f4 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee16() {
              var e,
                _iterator46,
                _step46,
                n,
                _iterator48,
                _step48,
                r,
                t,
                _iterator47,
                _step47,
                _n11;
              return _regeneratorRuntime().wrap(
                function _callee16$(_context29) {
                  while (1)
                    switch ((_context29.prev = _context29.next)) {
                      case 0:
                        e = ut(104579, 0);
                        (e = At(this.language, e)),
                          (e = At(this.getValue(), e)),
                          (e = At(this.metadata, e)),
                          (e = At(this.internalMetadata, e));
                        _iterator46 = _createForOfIteratorHelper(this.outputs);
                        try {
                          for (_iterator46.s(); !(_step46 = _iterator46.n()).done; ) {
                            n = _step46.value;
                            e = At(n.metadata, e);
                            _iterator48 = _createForOfIteratorHelper(n.outputs);
                            try {
                              for (_iterator48.s(); !(_step48 = _iterator48.n()).done; ) {
                                r = _step48.value;
                                e = At(r.mime, e);
                              }
                            } catch (err) {
                              _iterator48.e(err);
                            } finally {
                              _iterator48.f();
                            }
                          }
                        } catch (err) {
                          _iterator46.e(err);
                        } finally {
                          _iterator46.f();
                        }
                        _context29.next = 6;
                        return Promise.all(
                          this.outputs.flatMap(function (n) {
                            return n.outputs.map(function (r) {
                              return crypto.subtle.digest('sha-1', r.data.buffer);
                            });
                          }),
                        );
                      case 6:
                        t = _context29.sent;
                        _iterator47 = _createForOfIteratorHelper(t);
                        try {
                          for (_iterator47.s(); !(_step47 = _iterator47.n()).done; ) {
                            _n11 = _step47.value;
                            e = ut(new Int32Array(_n11)[0], e);
                          }
                        } catch (err) {
                          _iterator47.e(err);
                        } finally {
                          _iterator47.f();
                        }
                        return _context29.abrupt('return', e);
                      case 10:
                      case 'end':
                        return _context29.stop();
                    }
                },
                _callee16,
                this,
              );
            }),
          );
          function f() {
            return _f4.apply(this, arguments);
          }
          return f;
        })(),
      },
    ]);
  })(),
  Do = /*#__PURE__*/ (function () {
    function Do(e, t, n, r) {
      _classCallCheck(this, Do);
      (this.uri = e), (this.cells = t), (this.metadata = n), (this.transientDocumentMetadata = r);
    }
    return _createClass(Do, [
      {
        key: 'acceptModelChanged',
        value: function acceptModelChanged(e) {
          var _this28 = this;
          e.rawEvents.forEach(function (t) {
            if (t.kind === Lt.ModelChange) _this28._spliceNotebookCells(t.changes);
            else if (t.kind === Lt.Move) {
              var _this28$cells;
              var n = _this28.cells.splice(t.index, 1);
              (_this28$cells = _this28.cells).splice.apply(
                _this28$cells,
                [t.newIdx, 0].concat(_toConsumableArray(n)),
              );
            } else if (t.kind === Lt.Output) {
              var _n12 = _this28.cells[t.index];
              _n12.outputs = t.outputs;
            } else if (t.kind === Lt.ChangeCellLanguage) {
              _this28.a(t.index);
              var _n13 = _this28.cells[t.index];
              _n13.language = t.language;
            } else if (t.kind === Lt.ChangeCellMetadata) {
              _this28.a(t.index);
              var _n14 = _this28.cells[t.index];
              _n14.metadata = t.metadata;
            } else if (t.kind === Lt.ChangeCellInternalMetadata) {
              _this28.a(t.index);
              var _n15 = _this28.cells[t.index];
              _n15.internalMetadata = t.internalMetadata;
            } else t.kind === Lt.ChangeDocumentMetadata && (_this28.metadata = t.metadata);
          });
        },
      },
      {
        key: 'a',
        value: function a(e) {
          if (e < 0 || e >= this.cells.length)
            throw new Error(
              'Illegal index '.concat(e, '. Cells length: ').concat(this.cells.length),
            );
        },
      },
      {
        key: '_spliceNotebookCells',
        value: function _spliceNotebookCells(e) {
          var _this29 = this;
          e.reverse().forEach(function (t) {
            var _this29$cells;
            var r = t[2].map(function (i) {
              return new Tr(
                i.handle,
                X.parse(i.url),
                i.source,
                i.eol,
                i.versionId,
                i.language,
                i.cellKind,
                i.outputs,
                i.metadata,
              );
            });
            (_this29$cells = _this29.cells).splice.apply(
              _this29$cells,
              [t[0], t[1]].concat(_toConsumableArray(r)),
            );
          });
        },
      },
    ]);
  })(),
  Wr = /*#__PURE__*/ (function () {
    function pi(t) {
      _classCallCheck(this, pi);
      this.hashValue = t;
    }
    return _createClass(
      pi,
      [
        {
          key: 'getElements',
          value: function getElements() {
            return this.hashValue;
          },
        },
      ],
      [
        {
          key: 'create',
          value: (function () {
            var _create = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee18(t) {
                var n;
                return _regeneratorRuntime().wrap(function _callee18$(_context31) {
                  while (1)
                    switch ((_context31.prev = _context31.next)) {
                      case 0:
                        n = new Int32Array(t.cells.length);
                        _context31.next = 3;
                        return Promise.all(
                          t.cells.map(
                            /*#__PURE__*/ (function () {
                              var _ref18 = _asyncToGenerator(
                                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee17(r, i) {
                                  return _regeneratorRuntime().wrap(function _callee17$(
                                    _context30,
                                  ) {
                                    while (1)
                                      switch ((_context30.prev = _context30.next)) {
                                        case 0:
                                          _context30.next = 2;
                                          return r.getComparisonValue();
                                        case 2:
                                          n[i] = _context30.sent;
                                        case 3:
                                        case 'end':
                                          return _context30.stop();
                                      }
                                  }, _callee17);
                                }),
                              );
                              return function (_x13, _x14) {
                                return _ref18.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 3:
                        return _context31.abrupt('return', new pi(n));
                      case 4:
                      case 'end':
                        return _context31.stop();
                    }
                }, _callee18);
              }),
            );
            function create(_x12) {
              return _create.apply(this, arguments);
            }
            return create;
          })(),
        },
        {
          key: 'createWithCellId',
          value: (function () {
            var _createWithCellId = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20(t) {
                var n;
                return _regeneratorRuntime().wrap(function _callee20$(_context33) {
                  while (1)
                    switch ((_context33.prev = _context33.next)) {
                      case 0:
                        n = new Map();
                        _context33.next = 3;
                        return Promise.all(
                          t.cells.map(
                            /*#__PURE__*/ (function () {
                              var _ref19 = _asyncToGenerator(
                                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee19(r, i) {
                                  var _r$metadata;
                                  var s, o;
                                  return _regeneratorRuntime().wrap(function _callee19$(
                                    _context32,
                                  ) {
                                    while (1)
                                      switch ((_context32.prev = _context32.next)) {
                                        case 0:
                                          _context32.next = 2;
                                          return r.getComparisonValue();
                                        case 2:
                                          s = _context32.sent;
                                          o =
                                            ((_r$metadata = r.metadata) === null ||
                                            _r$metadata === void 0
                                              ? void 0
                                              : _r$metadata.id) || '';
                                          n.set(o, s);
                                        case 5:
                                        case 'end':
                                          return _context32.stop();
                                      }
                                  }, _callee19);
                                }),
                              );
                              return function (_x16, _x17) {
                                return _ref19.apply(this, arguments);
                              };
                            })(),
                          ),
                        );
                      case 3:
                        return _context33.abrupt('return', n);
                      case 4:
                      case 'end':
                        return _context33.stop();
                    }
                }, _callee20);
              }),
            );
            function createWithCellId(_x15) {
              return _createWithCellId.apply(this, arguments);
            }
            return createWithCellId;
          })(),
        },
      ],
    );
  })(),
  ko = /*#__PURE__*/ (function () {
    function ko() {
      _classCallCheck(this, ko);
      this.a = Object.create(null);
    }
    return _createClass(ko, [
      { key: 'dispose', value: function dispose() {} },
      {
        key: '$acceptNewModel',
        value: function $acceptNewModel(e, t, n, r) {
          this.a[e] = new Do(
            X.parse(e),
            r.map(function (i) {
              return new Tr(
                i.handle,
                X.parse(i.url),
                i.source,
                i.eol,
                i.versionId,
                i.language,
                i.cellKind,
                i.outputs,
                i.metadata,
              );
            }),
            t,
            n,
          );
        },
      },
      {
        key: '$acceptModelChanged',
        value: function $acceptModelChanged(e, t) {
          var _this$a$e;
          (_this$a$e = this.a[e]) === null ||
            _this$a$e === void 0 ||
            _this$a$e.acceptModelChanged(t);
        },
      },
      {
        key: '$acceptCellModelChanged',
        value: function $acceptCellModelChanged(e, t, n) {
          var _this$a$e$cells$find;
          (_this$a$e$cells$find = this.a[e].cells.find(function (i) {
            return i.handle === t;
          })) === null ||
            _this$a$e$cells$find === void 0 ||
            _this$a$e$cells$find.onEvents(n);
        },
      },
      {
        key: '$acceptRemovedModel',
        value: function $acceptRemovedModel(e) {
          this.a[e] && delete this.a[e];
        },
      },
      {
        key: '$computeDiff',
        value: (function () {
          var _$computeDiff = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee21(e, t) {
              var n, r, _yield$Promise$all, _yield$Promise$all2, i, s, l, a, u;
              return _regeneratorRuntime().wrap(
                function _callee21$(_context34) {
                  while (1)
                    switch ((_context34.prev = _context34.next)) {
                      case 0:
                        n = this.b(e);
                        r = this.b(t);
                        _context34.next = 4;
                        return Promise.all([Wr.create(n), Wr.create(r)]);
                      case 4:
                        _yield$Promise$all = _context34.sent;
                        _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                        i = _yield$Promise$all2[0];
                        s = _yield$Promise$all2[1];
                        l = new Ms(i, s).ComputeDiff(!1);
                        a = Rn(n.metadata, function (c) {
                          return !n.transientDocumentMetadata[c];
                        });
                        u = Rn(r.metadata, function (c) {
                          return !r.transientDocumentMetadata[c];
                        });
                        return _context34.abrupt('return', {
                          metadataChanged: JSON.stringify(a) !== JSON.stringify(u),
                          cellsDiff: l,
                        });
                      case 12:
                      case 'end':
                        return _context34.stop();
                    }
                },
                _callee21,
                this,
              );
            }),
          );
          function $computeDiff(_x18, _x19) {
            return _$computeDiff.apply(this, arguments);
          }
          return $computeDiff;
        })(),
      },
      {
        key: '$computeDiffWithCellIds',
        value: (function () {
          var _$computeDiffWithCellIds = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee24(e, t) {
              var n, r, i, s, _yield$Promise$all3, _yield$Promise$all4, o, l, _loop3;
              return _regeneratorRuntime().wrap(function _callee24$(_context38) {
                while (1)
                  switch ((_context38.prev = _context38.next)) {
                    case 0:
                      (n = e.cells.map(function (a, u) {
                        var _a$metadata;
                        return {
                          index: u,
                          id:
                            ((_a$metadata = a.metadata) === null || _a$metadata === void 0
                              ? void 0
                              : _a$metadata.id) || '',
                        };
                      })),
                        (r = t.cells.map(function (a, u) {
                          var _a$metadata2;
                          return {
                            index: u,
                            id:
                              ((_a$metadata2 = a.metadata) === null || _a$metadata2 === void 0
                                ? void 0
                                : _a$metadata2.id) || '',
                          };
                        }));
                      if (
                        !(
                          n.some(function (a) {
                            return !a.id;
                          }) ||
                          r.some(function (a) {
                            return !a.id;
                          })
                        )
                      ) {
                        _context38.next = 3;
                        break;
                      }
                      return _context38.abrupt('return');
                    case 3:
                      i = { changes: [], quitEarly: !1 };
                      s = /*#__PURE__*/ (function () {
                        var _ref20 = _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee23(a) {
                            var u;
                            return _regeneratorRuntime().wrap(function _callee23$(_context36) {
                              while (1)
                                switch ((_context36.prev = _context36.next)) {
                                  case 0:
                                    u = new Map();
                                    _context36.next = 3;
                                    return Promise.all(
                                      a.cells.map(
                                        /*#__PURE__*/ (function () {
                                          var _ref21 = _asyncToGenerator(
                                            /*#__PURE__*/ _regeneratorRuntime().mark(
                                              function _callee22(c, h) {
                                                var _c$metadata;
                                                var f, d;
                                                return _regeneratorRuntime().wrap(
                                                  function _callee22$(_context35) {
                                                    while (1)
                                                      switch ((_context35.prev = _context35.next)) {
                                                        case 0:
                                                          _context35.next = 2;
                                                          return c.getComparisonValue();
                                                        case 2:
                                                          f = _context35.sent;
                                                          d =
                                                            ((_c$metadata = c.metadata) === null ||
                                                            _c$metadata === void 0
                                                              ? void 0
                                                              : _c$metadata.id) || '';
                                                          u.set(d, f);
                                                        case 5:
                                                        case 'end':
                                                          return _context35.stop();
                                                      }
                                                  },
                                                  _callee22,
                                                );
                                              },
                                            ),
                                          );
                                          return function (_x23, _x24) {
                                            return _ref21.apply(this, arguments);
                                          };
                                        })(),
                                      ),
                                    );
                                  case 3:
                                    return _context36.abrupt('return', u);
                                  case 4:
                                  case 'end':
                                    return _context36.stop();
                                }
                            }, _callee23);
                          }),
                        );
                        return function s(_x22) {
                          return _ref20.apply(this, arguments);
                        };
                      })();
                      _context38.next = 7;
                      return Promise.all([s(e), s(t)]);
                    case 7:
                      _yield$Promise$all3 = _context38.sent;
                      _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
                      o = _yield$Promise$all4[0];
                      l = _yield$Promise$all4[1];
                      _loop3 = /*#__PURE__*/ _regeneratorRuntime().mark(function _loop3() {
                        var a, u, c, h;
                        return _regeneratorRuntime().wrap(function _loop3$(_context37) {
                          while (1)
                            switch ((_context37.prev = _context37.next)) {
                              case 0:
                                (a = r.shift()),
                                  (u = n.find(function (c) {
                                    return c.id === a.id;
                                  }));
                                if (!u) {
                                  _context37.next = 7;
                                  break;
                                }
                                (c = n.indexOf(u)), (h = n.splice(0, c + 1));
                                h.length === 1
                                  ? o.get(u.id) === l.get(u.id) ||
                                    i.changes.push({
                                      originalStart: u.index,
                                      originalLength: 1,
                                      modifiedStart: a.index,
                                      modifiedLength: 1,
                                    })
                                  : i.changes.push({
                                      originalStart: h[0].index,
                                      originalLength: h.length - 1,
                                      modifiedStart: a.index,
                                      modifiedLength: 0,
                                    });
                                return _context37.abrupt('return', 1);
                              case 7:
                                i.changes.push({
                                  originalStart: n.length ? n[0].index : e.cells.length,
                                  originalLength: 0,
                                  modifiedStart: a.index,
                                  modifiedLength: 1,
                                });
                              case 8:
                              case 'end':
                                return _context37.stop();
                            }
                        }, _loop3);
                      });
                    case 12:
                      if (!r.length) {
                        _context38.next = 18;
                        break;
                      }
                      return _context38.delegateYield(_loop3(), 't0', 14);
                    case 14:
                      if (!_context38.t0) {
                        _context38.next = 16;
                        break;
                      }
                      return _context38.abrupt('continue', 16);
                    case 16:
                      _context38.next = 12;
                      break;
                    case 18:
                      return _context38.abrupt(
                        'return',
                        (n.length &&
                          i.changes.push({
                            originalStart: n[0].index,
                            originalLength: n.length,
                            modifiedStart: r.length,
                            modifiedLength: 0,
                          }),
                        i),
                      );
                    case 19:
                    case 'end':
                      return _context38.stop();
                  }
              }, _callee24);
            }),
          );
          function $computeDiffWithCellIds(_x20, _x21) {
            return _$computeDiffWithCellIds.apply(this, arguments);
          }
          return $computeDiffWithCellIds;
        })(),
      },
      {
        key: '$canPromptRecommendation',
        value: function $canPromptRecommendation(e) {
          var n = this.b(e).cells;
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            if (i.cellKind === k1.Markup || i.language !== 'python') continue;
            var o = new S0('import\\s*pandas|from\\s*pandas', !0, !1, null).parseSearchRequest();
            if (!o) continue;
            var l = new W0();
            l.acceptChunk(i.getValue());
            var u = l.finish(!0).create(i.eol).textBuffer,
              c = u.getLineCount(),
              h = Math.min(c, 20),
              f = new J(1, 1, h, u.getLineLength(h) + 1);
            if (u.findMatchesLineByLine(f, o, !0, 1).length > 0) return !0;
          }
          return !1;
        },
      },
      {
        key: 'b',
        value: function b(e) {
          return this.a[e];
        },
      },
    ]);
  })();
function Fo(e) {
  return new ko();
}
var F1 = 'default',
  qo = '$initialize',
  Vr;
(function (e) {
  (e[(e.Request = 0)] = 'Request'),
    (e[(e.Reply = 1)] = 'Reply'),
    (e[(e.SubscribeEvent = 2)] = 'SubscribeEvent'),
    (e[(e.Event = 3)] = 'Event'),
    (e[(e.UnsubscribeEvent = 4)] = 'UnsubscribeEvent');
})(Vr || (Vr = {}));
var Uo = /*#__PURE__*/ _createClass(function Uo(e, t, n, r, i) {
    _classCallCheck(this, Uo);
    (this.vsWorker = e),
      (this.req = t),
      (this.channel = n),
      (this.method = r),
      (this.args = i),
      (this.type = 0);
  }),
  Gr = /*#__PURE__*/ _createClass(function Gr(e, t, n, r) {
    _classCallCheck(this, Gr);
    (this.vsWorker = e), (this.seq = t), (this.res = n), (this.err = r), (this.type = 1);
  }),
  jo = /*#__PURE__*/ _createClass(function jo(e, t, n, r, i) {
    _classCallCheck(this, jo);
    (this.vsWorker = e),
      (this.req = t),
      (this.channel = n),
      (this.eventName = r),
      (this.arg = i),
      (this.type = 2);
  }),
  zo = /*#__PURE__*/ _createClass(function zo(e, t, n) {
    _classCallCheck(this, zo);
    (this.vsWorker = e), (this.req = t), (this.event = n), (this.type = 3);
  }),
  Bo = /*#__PURE__*/ _createClass(function Bo(e, t) {
    _classCallCheck(this, Bo);
    (this.vsWorker = e), (this.req = t), (this.type = 4);
  }),
  To = /*#__PURE__*/ (function () {
    function To(e) {
      _classCallCheck(this, To);
      (this.a = -1),
        (this.g = e),
        (this.b = 0),
        (this.c = Object.create(null)),
        (this.d = new Map()),
        (this.f = new Map());
    }
    return _createClass(To, [
      {
        key: 'setWorkerId',
        value: function setWorkerId(e) {
          this.a = e;
        },
      },
      {
        key: 'sendMessage',
        value: function sendMessage(e, t, n) {
          var _this30 = this;
          var r = String(++this.b);
          return new Promise(function (i, s) {
            (_this30.c[r] = { resolve: i, reject: s }), _this30.o(new Uo(_this30.a, r, e, t, n));
          });
        },
      },
      {
        key: 'listen',
        value: function listen(e, t, n) {
          var _this31 = this;
          var r = null;
          var i = new at({
            onWillAddFirstListener: function onWillAddFirstListener() {
              (r = String(++_this31.b)),
                _this31.d.set(r, i),
                _this31.o(new jo(_this31.a, r, e, t, n));
            },
            onDidRemoveLastListener: function onDidRemoveLastListener() {
              _this31.d['delete'](r), _this31.o(new Bo(_this31.a, r)), (r = null);
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
          var _this32 = this;
          var n = {
            get: function get(r, i) {
              return (
                typeof i == 'string' &&
                  !r[i] &&
                  (Jr(i)
                    ? (r[i] = function (s) {
                        return _this32.listen(e, i, s);
                      })
                    : Hr(i)
                      ? (r[i] = _this32.listen(e, i, void 0))
                      : i.charCodeAt(0) === 36 &&
                        (r[i] = /*#__PURE__*/ _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee25() {
                            var _len0,
                              s,
                              _key0,
                              _args39 = arguments;
                            return _regeneratorRuntime().wrap(function _callee25$(_context39) {
                              while (1)
                                switch ((_context39.prev = _context39.next)) {
                                  case 0:
                                    for (
                                      _len0 = _args39.length, s = new Array(_len0), _key0 = 0;
                                      _key0 < _len0;
                                      _key0++
                                    ) {
                                      s[_key0] = _args39[_key0];
                                    }
                                    _context39.next = 3;
                                    return t === null || t === void 0 ? void 0 : t();
                                  case 3:
                                    return _context39.abrupt(
                                      'return',
                                      _this32.sendMessage(e, i, s),
                                    );
                                  case 4:
                                  case 'end':
                                    return _context39.stop();
                                }
                            }, _callee25);
                          }),
                        ))),
                r[i]
              );
            },
          };
          return new Proxy(Object.create(null), n);
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
            var n = e.err;
            e.err.$isError &&
              ((n = new Error()),
              (n.name = e.err.name),
              (n.message = e.err.message),
              (n.stack = e.err.stack)),
              t.reject(n);
            return;
          }
          t.resolve(e.res);
        },
      },
      {
        key: 'k',
        value: function k(e) {
          var _this33 = this;
          var t = e.req;
          this.g.handleMessage(e.channel, e.method, e.args).then(
            function (r) {
              _this33.o(new Gr(_this33.a, t, r, void 0));
            },
            function (r) {
              r.detail instanceof Error && (r.detail = W1(r.detail)),
                _this33.o(new Gr(_this33.a, t, void 0, W1(r)));
            },
          );
        },
      },
      {
        key: 'l',
        value: function l(e) {
          var _this34 = this;
          var t = e.req,
            n = this.g.handleEvent(
              e.channel,
              e.eventName,
              e.arg,
            )(function (r) {
              _this34.o(new zo(_this34.a, t, r));
            });
          this.f.set(t, n);
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
            for (var n = 0; n < e.args.length; n++)
              e.args[n] instanceof ArrayBuffer && t.push(e.args[n]);
          else e.type === 1 && e.res instanceof ArrayBuffer && t.push(e.res);
          this.g.sendMessage(e, t);
        },
      },
    ]);
  })();
function Hr(e) {
  return e[0] === 'o' && e[1] === 'n' && an(e.charCodeAt(2));
}
function Jr(e) {
  return /^onDynamic/.test(e) && an(e.charCodeAt(9));
}
var Wo = /*#__PURE__*/ (function () {
    function Wo(e, t) {
      var _this35 = this;
      _classCallCheck(this, Wo);
      (this.d = new Map()),
        (this.f = new Map()),
        (this.a = t),
        (this.b = null),
        (this.c = new To({
          sendMessage: function sendMessage(n, r) {
            e(n, r);
          },
          handleMessage: function handleMessage(n, r, i) {
            return _this35.g(n, r, i);
          },
          handleEvent: function handleEvent(n, r, i) {
            return _this35.h(n, r, i);
          },
        }));
    }
    return _createClass(Wo, [
      {
        key: 'onmessage',
        value: function onmessage(e) {
          this.c.handleMessage(e);
        },
      },
      {
        key: 'g',
        value: function g(e, t, n) {
          if (e === F1 && t === qo) return this.j(n[0], n[1], n[2]);
          var r = e === F1 ? this.b : this.d.get(e);
          if (!r)
            return Promise.reject(new Error('Missing channel '.concat(e, ' on worker thread')));
          if (typeof r[t] != 'function')
            return Promise.reject(
              new Error('Missing method '.concat(t, ' on worker thread channel ').concat(e)),
            );
          try {
            return Promise.resolve(r[t].apply(r, n));
          } catch (i) {
            return Promise.reject(i);
          }
        },
      },
      {
        key: 'h',
        value: function h(e, t, n) {
          var r = e === F1 ? this.b : this.d.get(e);
          if (!r) throw new Error('Missing channel '.concat(e, ' on worker thread'));
          if (Jr(t)) {
            var i = r[t].call(r, n);
            if (typeof i != 'function')
              throw new Error('Missing dynamic event '.concat(t, ' on request handler.'));
            return i;
          }
          if (Hr(t)) {
            var _i21 = r[t];
            if (typeof _i21 != 'function')
              throw new Error('Missing event '.concat(t, ' on request handler.'));
            return _i21;
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
            var _t20 = this.c.createProxyToRemoteChannel(e);
            this.f.set(e, _t20);
          }
          return this.f.get(e);
        },
      },
      {
        key: 'j',
        value: (function () {
          var _j2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee26(e, t, n) {
              var _this36 = this;
              return _regeneratorRuntime().wrap(
                function _callee26$(_context40) {
                  while (1)
                    switch ((_context40.prev = _context40.next)) {
                      case 0:
                        if (!(this.c.setWorkerId(e), this.a)) {
                          _context40.next = 3;
                          break;
                        }
                        this.b = this.a(this);
                        return _context40.abrupt('return');
                      case 3:
                        return _context40.abrupt(
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
                          })(''.concat(Q0.asBrowserUri(''.concat(n, '.js')).toString(!0))).then(
                            function (i) {
                              if (((_this36.b = i.create(_this36)), !_this36.b))
                                throw new Error('No RequestHandler!');
                            },
                          )),
                        );
                      case 4:
                      case 'end':
                        return _context40.stop();
                    }
                },
                _callee26,
                this,
              );
            }),
          );
          function j(_x25, _x26, _x27) {
            return _j2.apply(this, arguments);
          }
          return j;
        })(),
      },
    ]);
  })(),
  q1 = !1;
function Vo(e) {
  if (q1) return;
  q1 = !0;
  var t = new Wo(
    function (n) {
      return globalThis.postMessage(n);
    },
    function (n) {
      return e(n);
    },
  );
  globalThis.onmessage = function (n) {
    t.onmessage(n.data);
  };
}
function Go(e) {
  globalThis.onmessage = function (t) {
    q1 || Vo(e);
  };
}
Go(Fo); //# debugId=20aaf69e-4e75-5c2f-b3d3-9800181b50a2

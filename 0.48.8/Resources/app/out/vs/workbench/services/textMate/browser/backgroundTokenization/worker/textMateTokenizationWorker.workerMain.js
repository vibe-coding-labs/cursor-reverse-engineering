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
var _process,
  _Z,
  _Z2,
  _ie,
  _process2,
  _en,
  _dt,
  _Ue,
  _rn,
  _nn,
  _Class2,
  _mt,
  _Ht,
  _on,
  _ze,
  _qe,
  _Be,
  _gt,
  _ln,
  _Y,
  _de,
  _ye,
  _Jt;
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
    for (var _t24 in e)
      'default' !== _t24 &&
        {}.hasOwnProperty.call(e, _t24) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t24)) &&
        (i.get || i.set)
          ? o(f, _t24, i)
          : (f[_t24] = e[_t24]));
    return f;
  })(e, t);
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
      var _n7 = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n7 >= r.length ? { done: !0 } : { done: !1, value: r[_n7++] };
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
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function');
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
      (e._sentryDebugIds[n] = 'cfec2af1-b8a8-5f51-b5ac-10d4dbfd9a3a'));
  } catch (e) {}
})();
var _pt = function pt(e, t) {
  return (
    (_pt =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n;
        }) ||
      function (r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
      }),
    _pt(e, t)
  );
};
function __extends(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  _pt(e, t);
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
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
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
    o = i < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
    a;
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.decorate == 'function'
  )
    o = Reflect.decorate(e, t, r, n);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (a = e[l]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, r, o) : a(t, r)) || o);
  return i > 3 && o && Object.defineProperty(t, r, o), o;
}
function __param(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function __esDecorate(e, t, r, n, i, o) {
  function a(H) {
    if (H !== void 0 && typeof H != 'function') throw new TypeError('Function expected');
    return H;
  }
  for (
    var l = n.kind,
      c = l === 'getter' ? 'get' : l === 'setter' ? 'set' : 'value',
      u = !t && e ? (n['static'] ? e : e.prototype) : null,
      f = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}),
      h,
      g = !1,
      v = r.length - 1;
    v >= 0;
    v--
  ) {
    var k = {};
    for (var F in n) k[F] = F === 'access' ? {} : n[F];
    for (var F in n.access) k.access[F] = n.access[F];
    k.addInitializer = function (H) {
      if (g) throw new TypeError('Cannot add initializers after decoration has completed');
      o.push(a(H || null));
    };
    var M = (0, r[v])(l === 'accessor' ? { get: f.get, set: f.set } : f[c], k);
    if (l === 'accessor') {
      if (M === void 0) continue;
      if (M === null || _typeof(M) != 'object') throw new TypeError('Object expected');
      (h = a(M.get)) && (f.get = h), (h = a(M.set)) && (f.set = h), (h = a(M.init)) && i.unshift(h);
    } else (h = a(M)) && (l === 'field' ? i.unshift(h) : (f[c] = h));
  }
  u && Object.defineProperty(u, n.name, f), (g = !0);
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
    Object.defineProperty(e, 'name', { configurable: !0, value: r ? ''.concat(r, ' ', t) : t })
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
  function i(o) {
    return o instanceof r
      ? o
      : new r(function (a) {
          a(o);
        });
  }
  return new (r || (r = Promise))(function (o, a) {
    function l(f) {
      try {
        u(n.next(f));
      } catch (h) {
        a(h);
      }
    }
    function c(f) {
      try {
        u(n['throw'](f));
      } catch (h) {
        a(h);
      }
    }
    function u(f) {
      f.done ? o(f.value) : i(f.value).then(l, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function __generator(e, t) {
  var r = {
      label: 0,
      sent: function sent() {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    n,
    i,
    o,
    a;
  return (
    (a = { next: l(0), throw: l(1), return: l(2) }),
    typeof Symbol == 'function' &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function l(u) {
    return function (f) {
      return c([u, f]);
    };
  }
  function c(u) {
    if (n) throw new TypeError('Generator is already executing.');
    for (; a && ((a = 0), u[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          i &&
            (o =
              u[0] & 2
                ? i['return']
                : u[0]
                  ? i['throw'] || ((o = i['return']) && o.call(i), 0)
                  : i.next) &&
            !(o = o.call(i, u[1])).done)
        )
          return o;
        switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, (i = u[1]), (u = [0]);
            continue;
          case 7:
            (u = r.ops.pop()), r.trys.pop();
            continue;
          default:
            if (
              ((o = r.trys), !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              (r.label = o[1]), (o = u);
              break;
            }
            if (o && r.label < o[2]) {
              (r.label = o[2]), r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (f) {
        (u = [6, f]), (i = 0);
      } finally {
        n = o = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
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
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      },
    };
  throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function __read(e, t) {
  var r = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    i,
    o = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) o.push(i.value);
  } catch (l) {
    a = { error: l };
  } finally {
    try {
      i && !i.done && (r = n['return']) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return o;
}
function __spread() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
  return e;
}
function __spreadArrays() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var o = arguments[t], a = 0, l = o.length; a < l; a++, i++) n[i] = o[a];
  return n;
}
function __spreadArray(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function __await(e) {
  return this instanceof __await ? ((this.v = e), this) : new __await(e);
}
function __asyncGenerator(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var n = r.apply(e, t || []),
    i,
    o = [];
  return (
    (i = {}),
    l('next'),
    l('throw'),
    l('return', a),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function a(v) {
    return function (k) {
      return Promise.resolve(k).then(v, h);
    };
  }
  function l(v, k) {
    n[v] &&
      ((i[v] = function (F) {
        return new Promise(function (M, H) {
          o.push([v, F, M, H]) > 1 || c(v, F);
        });
      }),
      k && (i[v] = k(i[v])));
  }
  function c(v, k) {
    try {
      u(n[v](k));
    } catch (F) {
      g(o[0][3], F);
    }
  }
  function u(v) {
    v.value instanceof __await ? Promise.resolve(v.value.v).then(f, h) : g(o[0][2], v);
  }
  function f(v) {
    c('next', v);
  }
  function h(v) {
    c('throw', v);
  }
  function g(v, k) {
    v(k), o.shift(), o.length && c(o[0][0], o[0][1]);
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
  function n(i, o) {
    t[i] = e[i]
      ? function (a) {
          return (r = !r) ? { value: __await(e[i](a)), done: !1 } : o ? o(a) : a;
        }
      : o;
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
  function n(o) {
    r[o] =
      e[o] &&
      function (a) {
        return new Promise(function (l, c) {
          (a = e[o](a)), i(l, c, a.done, a.value);
        });
      };
  }
  function i(o, a, l, c) {
    Promise.resolve(c).then(function (u) {
      o({ value: u, done: l });
    }, a);
  }
}
function __makeTemplateObject(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e;
}
var pn = Object.create
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
    for (var r in e)
      r !== 'default' && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
  return pn(t, e), t;
}
function __importDefault(e) {
  return e && e.__esModule ? e : { default: e };
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
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      e.stack.push({ value: t, dispose: n, async: r });
  } else r && e.stack.push({ async: !0 });
  return t;
}
var vn =
  typeof SuppressedError == 'function'
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return (n.name = 'SuppressedError'), (n.error = e), (n.suppressed = t), n;
      };
function __disposeResources(e) {
  function t(n) {
    (e.error = e.hasError ? new vn(n, e.error, 'An error was suppressed during disposal.') : n),
      (e.hasError = !0);
  }
  function r() {
    for (; e.stack.length; ) {
      var n = e.stack.pop();
      try {
        var i = n.dispose && n.dispose.call(n.value);
        if (n.async)
          return Promise.resolve(i).then(r, function (o) {
            return t(o), r();
          });
      } catch (o) {
        t(o);
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
function wn() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function Qt() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var yn =
  Qt() === 'pseudo' ||
  ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) < 'u' &&
    document.location &&
    typeof document.location.hash == 'string' &&
    document.location.hash.indexOf('pseudo=true') >= 0);
function Kt(e, t) {
  var r;
  return (
    t.length === 0
      ? (r = e)
      : (r = e.replace(/\{(\d+)\}/g, function (n, i) {
          var o = i[0],
            a = t[o];
          var l = n;
          return (
            typeof a == 'string'
              ? (l = a)
              : (typeof a == 'number' || typeof a == 'boolean' || a === void 0 || a === null) &&
                (l = String(a)),
            l
          );
        })),
    yn && (r = '\uFF3B' + r.replace(/[aouei]/g, '$&$&') + '\uFF3D'),
    r
  );
}
function _(e, t) {
  for (
    var _len = arguments.length, r = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
    _key < _len;
    _key++
  ) {
    r[_key - 2] = arguments[_key];
  }
  return Kt(typeof e == 'number' ? En(e, t) : t, r);
}
function En(e, t) {
  var _wn;
  var r = (_wn = wn()) === null || _wn === void 0 ? void 0 : _wn[e];
  if (typeof r != 'string') {
    if (typeof t == 'string') return t;
    throw new Error('!!! NLS MISSING: '.concat(e, ' !!!'));
  }
  return r;
}
var ke = 'en',
  He = !1,
  Ze = !1,
  Re = !1,
  Nn = !1,
  e1 = !1,
  vt = !1,
  Ln = !1,
  kn = !1,
  An = !1,
  Cn = !1,
  Ye = void 0,
  Je = ke,
  t1 = ke,
  Sn = void 0,
  ie = void 0,
  se = globalThis,
  Z = void 0;
_typeof(se.vscode) < 'u' && _typeof(se.vscode.process) < 'u'
  ? (Z = se.vscode.process)
  : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) < 'u' &&
    typeof ((_process = process) === null ||
    _process === void 0 ||
    (_process = _process.versions) === null ||
    _process === void 0
      ? void 0
      : _process.node) == 'string' &&
    (Z = process);
var r1 =
    typeof ((_Z = Z) === null || _Z === void 0 || (_Z = _Z.versions) === null || _Z === void 0
      ? void 0
      : _Z.electron) == 'string',
  xn = r1 && ((_Z2 = Z) === null || _Z2 === void 0 ? void 0 : _Z2.type) === 'renderer';
if (_typeof(Z) == 'object') {
  (He = Z.platform === 'win32'),
    (Ze = Z.platform === 'darwin'),
    (Re = Z.platform === 'linux'),
    (Nn = Re && !!Z.env.SNAP && !!Z.env.SNAP_REVISION),
    (Ln = r1),
    (An = !!Z.env.CI || !!Z.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
    (Ye = ke),
    (Je = ke);
  var e = Z.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      var _t$languagePack;
      var t = JSON.parse(e);
      (Ye = t.userLocale),
        (t1 = t.osLocale),
        (Je = t.resolvedLanguage || ke),
        (Sn =
          (_t$languagePack = t.languagePack) === null || _t$languagePack === void 0
            ? void 0
            : _t$languagePack.translationsConfigFile);
    } catch (_unused) {}
  e1 = !0;
} else
  (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) == 'object' && !xn
    ? ((ie = navigator.userAgent),
      (He = ie.indexOf('Windows') >= 0),
      (Ze = ie.indexOf('Macintosh') >= 0),
      (kn =
        (ie.indexOf('Macintosh') >= 0 || ie.indexOf('iPad') >= 0 || ie.indexOf('iPhone') >= 0) &&
        !!navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 0),
      (Re = ie.indexOf('Linux') >= 0),
      (Cn = ((_ie = ie) === null || _ie === void 0 ? void 0 : _ie.indexOf('Mobi')) >= 0),
      (vt = !0),
      (Je = Qt() || ke),
      (Ye = navigator.language.toLowerCase()),
      (t1 = Ye))
    : console.error('Unable to resolve platform.');
var n1;
(function (e) {
  (e[(e.Web = 0)] = 'Web'),
    (e[(e.Mac = 1)] = 'Mac'),
    (e[(e.Linux = 2)] = 'Linux'),
    (e[(e.Windows = 3)] = 'Windows');
})(n1 || (n1 = {}));
var wt = 0;
Ze ? (wt = 1) : He ? (wt = 3) : Re && (wt = 2);
var Ae = He,
  $n = Ze,
  Tn = Re,
  _n = e1,
  i1 = vt,
  On = vt && typeof se.importScripts == 'function',
  Pn = On ? se.origin : void 0,
  te = ie,
  le = Je,
  s1;
(function (e) {
  function t() {
    return le;
  }
  e.value = t;
  function r() {
    return le.length === 2
      ? le === 'en'
      : le.length >= 3
        ? le[0] === 'e' && le[1] === 'n' && le[2] === '-'
        : !1;
  }
  e.isDefaultVariant = r;
  function n() {
    return le === 'en';
  }
  e.isDefault = n;
})(s1 || (s1 = {}));
var Rn = typeof se.postMessage == 'function' && !se.importScripts,
  o1 = (function () {
    if (Rn) {
      var _e2 = [];
      se.addEventListener('message', function (r) {
        if (r.data && r.data.vscodeScheduleAsyncWork)
          for (var n = 0, i = _e2.length; n < i; n++) {
            var o = _e2[n];
            if (o.id === r.data.vscodeScheduleAsyncWork) {
              _e2.splice(n, 1), o.callback();
              return;
            }
          }
      });
      var _t2 = 0;
      return function (r) {
        var n = ++_t2;
        _e2.push({ id: n, callback: r }), se.postMessage({ vscodeScheduleAsyncWork: n }, '*');
      };
    }
    return function (e) {
      return setTimeout(e);
    };
  })(),
  a1;
(function (e) {
  (e[(e.Windows = 1)] = 'Windows'),
    (e[(e.Macintosh = 2)] = 'Macintosh'),
    (e[(e.Linux = 3)] = 'Linux');
})(a1 || (a1 = {}));
var Mn = !!(te && te.indexOf('Chrome') >= 0),
  c0 = !!(te && te.indexOf('Firefox') >= 0),
  h0 = !!(!Mn && te && te.indexOf('Safari') >= 0),
  f0 = !!(te && te.indexOf('Edg/') >= 0),
  d0 = !!(te && te.indexOf('Android') >= 0),
  me,
  yt = globalThis.vscode;
if (_typeof(yt) < 'u' && _typeof(yt.process) < 'u') {
  var _e3 = yt.process;
  me = {
    get platform() {
      return _e3.platform;
    },
    get arch() {
      return _e3.arch;
    },
    get env() {
      return _e3.env;
    },
    cwd: function cwd() {
      return _e3.cwd();
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
    ? (me = {
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
    : (me = {
        get platform() {
          return Ae ? 'win32' : $n ? 'darwin' : 'linux';
        },
        get arch() {},
        get env() {
          return {};
        },
        cwd: function cwd() {
          return '/';
        },
      });
var Xe = me.cwd,
  Dn = me.env,
  Fn = me.platform,
  m0 = me.arch,
  jn = 65,
  In = 97,
  Un = 90,
  zn = 122,
  ue = 46,
  I = 47,
  V = 92,
  ce = 58,
  qn = 63,
  l1 = /*#__PURE__*/ (function (_Error) {
    function l1(e, t, r) {
      var _this;
      _classCallCheck(this, l1);
      var n;
      typeof t == 'string' && t.indexOf('not ') === 0
        ? ((n = 'must not be'), (t = t.replace(/^not /, '')))
        : (n = 'must be');
      var i = e.indexOf('.') !== -1 ? 'property' : 'argument';
      var o = 'The "'.concat(e, '" ').concat(i, ' ').concat(n, ' of type ').concat(t);
      (o += '. Received type '.concat(_typeof(r))),
        (_this = _callSuper(this, l1, [o])),
        (_this.code = 'ERR_INVALID_ARG_TYPE');
      return _this;
    }
    _inherits(l1, _Error);
    return _createClass(l1);
  })(/*#__PURE__*/ _wrapNativeSuper(Error));
function Bn(e, t) {
  if (e === null || _typeof(e) != 'object') throw new l1(t, 'Object', e);
}
function P(e, t) {
  if (typeof e != 'string') throw new l1(t, 'string', e);
}
var G = Fn === 'win32';
function N(e) {
  return e === I || e === V;
}
function Et(e) {
  return e === I;
}
function he(e) {
  return (e >= jn && e <= Un) || (e >= In && e <= zn);
}
function Qe(e, t, r, n) {
  var i = '',
    o = 0,
    a = -1,
    l = 0,
    c = 0;
  for (var u = 0; u <= e.length; ++u) {
    if (u < e.length) c = e.charCodeAt(u);
    else {
      if (n(c)) break;
      c = I;
    }
    if (n(c)) {
      if (!(a === u - 1 || l === 1))
        if (l === 2) {
          if (
            i.length < 2 ||
            o !== 2 ||
            i.charCodeAt(i.length - 1) !== ue ||
            i.charCodeAt(i.length - 2) !== ue
          ) {
            if (i.length > 2) {
              var f = i.lastIndexOf(r);
              f === -1
                ? ((i = ''), (o = 0))
                : ((i = i.slice(0, f)), (o = i.length - 1 - i.lastIndexOf(r))),
                (a = u),
                (l = 0);
              continue;
            } else if (i.length !== 0) {
              (i = ''), (o = 0), (a = u), (l = 0);
              continue;
            }
          }
          t && ((i += i.length > 0 ? ''.concat(r, '..') : '..'), (o = 2));
        } else
          i.length > 0 ? (i += ''.concat(r).concat(e.slice(a + 1, u))) : (i = e.slice(a + 1, u)),
            (o = u - a - 1);
      (a = u), (l = 0);
    } else c === ue && l !== -1 ? ++l : (l = -1);
  }
  return i;
}
function Wn(e) {
  return e ? ''.concat(e[0] === '.' ? '' : '.').concat(e) : '';
}
function u1(e, t) {
  Bn(t, 'pathObject');
  var r = t.dir || t.root,
    n = t.base || ''.concat(t.name || '').concat(Wn(t.ext));
  return r ? (r === t.root ? ''.concat(r).concat(n) : ''.concat(r).concat(e).concat(n)) : n;
}
var R = {
    resolve: function resolve() {
      var t = '',
        r = '',
        n = !1;
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }
      for (var i = e.length - 1; i >= -1; i--) {
        var o = void 0;
        if (i >= 0) {
          if (((o = e[i]), P(o, 'paths['.concat(i, ']')), o.length === 0)) continue;
        } else
          t.length === 0
            ? (o = Xe())
            : ((o = Dn['='.concat(t)] || Xe()),
              (o === void 0 ||
                (o.slice(0, 2).toLowerCase() !== t.toLowerCase() && o.charCodeAt(2) === V)) &&
                (o = ''.concat(t, '\\')));
        var a = o.length;
        var l = 0,
          c = '',
          u = !1;
        var f = o.charCodeAt(0);
        if (a === 1) N(f) && ((l = 1), (u = !0));
        else if (N(f)) {
          if (((u = !0), N(o.charCodeAt(1)))) {
            var h = 2,
              g = h;
            for (; h < a && !N(o.charCodeAt(h)); ) h++;
            if (h < a && h !== g) {
              var v = o.slice(g, h);
              for (g = h; h < a && N(o.charCodeAt(h)); ) h++;
              if (h < a && h !== g) {
                for (g = h; h < a && !N(o.charCodeAt(h)); ) h++;
                (h === a || h !== g) &&
                  ((c = '\\\\'.concat(v, '\\').concat(o.slice(g, h))), (l = h));
              }
            }
          } else l = 1;
        } else
          he(f) &&
            o.charCodeAt(1) === ce &&
            ((c = o.slice(0, 2)), (l = 2), a > 2 && N(o.charCodeAt(2)) && ((u = !0), (l = 3)));
        if (c.length > 0)
          if (t.length > 0) {
            if (c.toLowerCase() !== t.toLowerCase()) continue;
          } else t = c;
        if (n) {
          if (t.length > 0) break;
        } else if (((r = ''.concat(o.slice(l), '\\').concat(r)), (n = u), u && t.length > 0)) break;
      }
      return (
        (r = Qe(r, !n, '\\', N)), n ? ''.concat(t, '\\').concat(r) : ''.concat(t).concat(r) || '.'
      );
    },
    normalize: function normalize(e) {
      P(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var r = 0,
        n,
        i = !1;
      var o = e.charCodeAt(0);
      if (t === 1) return Et(o) ? '\\' : e;
      if (N(o)) {
        if (((i = !0), N(e.charCodeAt(1)))) {
          var l = 2,
            c = l;
          for (; l < t && !N(e.charCodeAt(l)); ) l++;
          if (l < t && l !== c) {
            var u = e.slice(c, l);
            for (c = l; l < t && N(e.charCodeAt(l)); ) l++;
            if (l < t && l !== c) {
              for (c = l; l < t && !N(e.charCodeAt(l)); ) l++;
              if (l === t) return '\\\\'.concat(u, '\\').concat(e.slice(c), '\\');
              l !== c && ((n = '\\\\'.concat(u, '\\').concat(e.slice(c, l))), (r = l));
            }
          }
        } else r = 1;
      } else
        he(o) &&
          e.charCodeAt(1) === ce &&
          ((n = e.slice(0, 2)), (r = 2), t > 2 && N(e.charCodeAt(2)) && ((i = !0), (r = 3)));
      var a = r < t ? Qe(e.slice(r), !i, '\\', N) : '';
      return (
        a.length === 0 && !i && (a = '.'),
        a.length > 0 && N(e.charCodeAt(t - 1)) && (a += '\\'),
        n === void 0
          ? i
            ? '\\'.concat(a)
            : a
          : i
            ? ''.concat(n, '\\').concat(a)
            : ''.concat(n).concat(a)
      );
    },
    isAbsolute: function isAbsolute(e) {
      P(e, 'path');
      var t = e.length;
      if (t === 0) return !1;
      var r = e.charCodeAt(0);
      return N(r) || (t > 2 && he(r) && e.charCodeAt(1) === ce && N(e.charCodeAt(2)));
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t, r;
      for (var o = 0; o < arguments.length; ++o) {
        var a = o < 0 || arguments.length <= o ? undefined : arguments[o];
        P(a, 'path'), a.length > 0 && (t === void 0 ? (t = r = a) : (t += '\\'.concat(a)));
      }
      if (t === void 0) return '.';
      var n = !0,
        i = 0;
      if (typeof r == 'string' && N(r.charCodeAt(0))) {
        ++i;
        var _o = r.length;
        _o > 1 && N(r.charCodeAt(1)) && (++i, _o > 2 && (N(r.charCodeAt(2)) ? ++i : (n = !1)));
      }
      if (n) {
        for (; i < t.length && N(t.charCodeAt(i)); ) i++;
        i >= 2 && (t = '\\'.concat(t.slice(i)));
      }
      return R.normalize(t);
    },
    relative: function relative(e, t) {
      if ((P(e, 'from'), P(t, 'to'), e === t)) return '';
      var r = R.resolve(e),
        n = R.resolve(t);
      if (r === n || ((e = r.toLowerCase()), (t = n.toLowerCase()), e === t)) return '';
      var i = 0;
      for (; i < e.length && e.charCodeAt(i) === V; ) i++;
      var o = e.length;
      for (; o - 1 > i && e.charCodeAt(o - 1) === V; ) o--;
      var a = o - i;
      var l = 0;
      for (; l < t.length && t.charCodeAt(l) === V; ) l++;
      var c = t.length;
      for (; c - 1 > l && t.charCodeAt(c - 1) === V; ) c--;
      var u = c - l,
        f = a < u ? a : u;
      var h = -1,
        g = 0;
      for (; g < f; g++) {
        var k = e.charCodeAt(i + g);
        if (k !== t.charCodeAt(l + g)) break;
        k === V && (h = g);
      }
      if (g !== f) {
        if (h === -1) return n;
      } else {
        if (u > f) {
          if (t.charCodeAt(l + g) === V) return n.slice(l + g + 1);
          if (g === 2) return n.slice(l + g);
        }
        a > f && (e.charCodeAt(i + g) === V ? (h = g) : g === 2 && (h = 3)), h === -1 && (h = 0);
      }
      var v = '';
      for (g = i + h + 1; g <= o; ++g)
        (g === o || e.charCodeAt(g) === V) && (v += v.length === 0 ? '..' : '\\..');
      return (
        (l += h),
        v.length > 0
          ? ''.concat(v).concat(n.slice(l, c))
          : (n.charCodeAt(l) === V && ++l, n.slice(l, c))
      );
    },
    toNamespacedPath: function toNamespacedPath(e) {
      if (typeof e != 'string' || e.length === 0) return e;
      var t = R.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === V) {
        if (t.charCodeAt(1) === V) {
          var r = t.charCodeAt(2);
          if (r !== qn && r !== ue) return '\\\\?\\UNC\\'.concat(t.slice(2));
        }
      } else if (he(t.charCodeAt(0)) && t.charCodeAt(1) === ce && t.charCodeAt(2) === V)
        return '\\\\?\\'.concat(t);
      return e;
    },
    dirname: function dirname(e) {
      P(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var r = -1,
        n = 0;
      var i = e.charCodeAt(0);
      if (t === 1) return N(i) ? e : '.';
      if (N(i)) {
        if (((r = n = 1), N(e.charCodeAt(1)))) {
          var l = 2,
            c = l;
          for (; l < t && !N(e.charCodeAt(l)); ) l++;
          if (l < t && l !== c) {
            for (c = l; l < t && N(e.charCodeAt(l)); ) l++;
            if (l < t && l !== c) {
              for (c = l; l < t && !N(e.charCodeAt(l)); ) l++;
              if (l === t) return e;
              l !== c && (r = n = l + 1);
            }
          }
        }
      } else
        he(i) && e.charCodeAt(1) === ce && ((r = t > 2 && N(e.charCodeAt(2)) ? 3 : 2), (n = r));
      var o = -1,
        a = !0;
      for (var _l = t - 1; _l >= n; --_l)
        if (N(e.charCodeAt(_l))) {
          if (!a) {
            o = _l;
            break;
          }
        } else a = !1;
      if (o === -1) {
        if (r === -1) return '.';
        o = r;
      }
      return e.slice(0, o);
    },
    basename: function basename(e, t) {
      t !== void 0 && P(t, 'suffix'), P(e, 'path');
      var r = 0,
        n = -1,
        i = !0,
        o;
      if (
        (e.length >= 2 && he(e.charCodeAt(0)) && e.charCodeAt(1) === ce && (r = 2),
        t !== void 0 && t.length > 0 && t.length <= e.length)
      ) {
        if (t === e) return '';
        var a = t.length - 1,
          l = -1;
        for (o = e.length - 1; o >= r; --o) {
          var c = e.charCodeAt(o);
          if (N(c)) {
            if (!i) {
              r = o + 1;
              break;
            }
          } else
            l === -1 && ((i = !1), (l = o + 1)),
              a >= 0 && (c === t.charCodeAt(a) ? --a === -1 && (n = o) : ((a = -1), (n = l)));
        }
        return r === n ? (n = l) : n === -1 && (n = e.length), e.slice(r, n);
      }
      for (o = e.length - 1; o >= r; --o)
        if (N(e.charCodeAt(o))) {
          if (!i) {
            r = o + 1;
            break;
          }
        } else n === -1 && ((i = !1), (n = o + 1));
      return n === -1 ? '' : e.slice(r, n);
    },
    extname: function extname(e) {
      P(e, 'path');
      var t = 0,
        r = -1,
        n = 0,
        i = -1,
        o = !0,
        a = 0;
      e.length >= 2 && e.charCodeAt(1) === ce && he(e.charCodeAt(0)) && (t = n = 2);
      for (var l = e.length - 1; l >= t; --l) {
        var c = e.charCodeAt(l);
        if (N(c)) {
          if (!o) {
            n = l + 1;
            break;
          }
          continue;
        }
        i === -1 && ((o = !1), (i = l + 1)),
          c === ue ? (r === -1 ? (r = l) : a !== 1 && (a = 1)) : r !== -1 && (a = -1);
      }
      return r === -1 || i === -1 || a === 0 || (a === 1 && r === i - 1 && r === n + 1)
        ? ''
        : e.slice(r, i);
    },
    format: u1.bind(null, '\\'),
    parse: function parse(e) {
      P(e, 'path');
      var t = { root: '', dir: '', base: '', ext: '', name: '' };
      if (e.length === 0) return t;
      var r = e.length;
      var n = 0,
        i = e.charCodeAt(0);
      if (r === 1) return N(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
      if (N(i)) {
        if (((n = 1), N(e.charCodeAt(1)))) {
          var h = 2,
            g = h;
          for (; h < r && !N(e.charCodeAt(h)); ) h++;
          if (h < r && h !== g) {
            for (g = h; h < r && N(e.charCodeAt(h)); ) h++;
            if (h < r && h !== g) {
              for (g = h; h < r && !N(e.charCodeAt(h)); ) h++;
              h === r ? (n = h) : h !== g && (n = h + 1);
            }
          }
        }
      } else if (he(i) && e.charCodeAt(1) === ce) {
        if (r <= 2) return (t.root = t.dir = e), t;
        if (((n = 2), N(e.charCodeAt(2)))) {
          if (r === 3) return (t.root = t.dir = e), t;
          n = 3;
        }
      }
      n > 0 && (t.root = e.slice(0, n));
      var o = -1,
        a = n,
        l = -1,
        c = !0,
        u = e.length - 1,
        f = 0;
      for (; u >= n; --u) {
        if (((i = e.charCodeAt(u)), N(i))) {
          if (!c) {
            a = u + 1;
            break;
          }
          continue;
        }
        l === -1 && ((c = !1), (l = u + 1)),
          i === ue ? (o === -1 ? (o = u) : f !== 1 && (f = 1)) : o !== -1 && (f = -1);
      }
      return (
        l !== -1 &&
          (o === -1 || f === 0 || (f === 1 && o === l - 1 && o === a + 1)
            ? (t.base = t.name = e.slice(a, l))
            : ((t.name = e.slice(a, o)), (t.base = e.slice(a, l)), (t.ext = e.slice(o, l)))),
        a > 0 && a !== n ? (t.dir = e.slice(0, a - 1)) : (t.dir = t.root),
        t
      );
    },
    sep: '\\',
    delimiter: ';',
    win32: null,
    posix: null,
  },
  Vn = (function () {
    if (G) {
      var _e4 = /\\/g;
      return function () {
        var t = Xe().replace(_e4, '/');
        return t.slice(t.indexOf('/'));
      };
    }
    return function () {
      return Xe();
    };
  })(),
  x = {
    resolve: function resolve() {
      var t = '',
        r = !1;
      for (var n = arguments.length - 1; n >= -1 && !r; n--) {
        var i = n >= 0 ? (n < 0 || arguments.length <= n ? undefined : arguments[n]) : Vn();
        P(i, 'paths['.concat(n, ']')),
          i.length !== 0 && ((t = ''.concat(i, '/').concat(t)), (r = i.charCodeAt(0) === I));
      }
      return (t = Qe(t, !r, '/', Et)), r ? '/'.concat(t) : t.length > 0 ? t : '.';
    },
    normalize: function normalize(e) {
      if ((P(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === I,
        r = e.charCodeAt(e.length - 1) === I;
      return (
        (e = Qe(e, !t, '/', Et)),
        e.length === 0 ? (t ? '/' : r ? './' : '.') : (r && (e += '/'), t ? '/'.concat(e) : e)
      );
    },
    isAbsolute: function isAbsolute(e) {
      return P(e, 'path'), e.length > 0 && e.charCodeAt(0) === I;
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t;
      for (var r = 0; r < arguments.length; ++r) {
        var n = r < 0 || arguments.length <= r ? undefined : arguments[r];
        P(n, 'path'), n.length > 0 && (t === void 0 ? (t = n) : (t += '/'.concat(n)));
      }
      return t === void 0 ? '.' : x.normalize(t);
    },
    relative: function relative(e, t) {
      if ((P(e, 'from'), P(t, 'to'), e === t || ((e = x.resolve(e)), (t = x.resolve(t)), e === t)))
        return '';
      var r = 1,
        n = e.length,
        i = n - r,
        o = 1,
        a = t.length - o,
        l = i < a ? i : a;
      var c = -1,
        u = 0;
      for (; u < l; u++) {
        var h = e.charCodeAt(r + u);
        if (h !== t.charCodeAt(o + u)) break;
        h === I && (c = u);
      }
      if (u === l)
        if (a > l) {
          if (t.charCodeAt(o + u) === I) return t.slice(o + u + 1);
          if (u === 0) return t.slice(o + u);
        } else i > l && (e.charCodeAt(r + u) === I ? (c = u) : u === 0 && (c = 0));
      var f = '';
      for (u = r + c + 1; u <= n; ++u)
        (u === n || e.charCodeAt(u) === I) && (f += f.length === 0 ? '..' : '/..');
      return ''.concat(f).concat(t.slice(o + c));
    },
    toNamespacedPath: function toNamespacedPath(e) {
      return e;
    },
    dirname: function dirname(e) {
      if ((P(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === I;
      var r = -1,
        n = !0;
      for (var i = e.length - 1; i >= 1; --i)
        if (e.charCodeAt(i) === I) {
          if (!n) {
            r = i;
            break;
          }
        } else n = !1;
      return r === -1 ? (t ? '/' : '.') : t && r === 1 ? '//' : e.slice(0, r);
    },
    basename: function basename(e, t) {
      t !== void 0 && P(t, 'ext'), P(e, 'path');
      var r = 0,
        n = -1,
        i = !0,
        o;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return '';
        var a = t.length - 1,
          l = -1;
        for (o = e.length - 1; o >= 0; --o) {
          var c = e.charCodeAt(o);
          if (c === I) {
            if (!i) {
              r = o + 1;
              break;
            }
          } else
            l === -1 && ((i = !1), (l = o + 1)),
              a >= 0 && (c === t.charCodeAt(a) ? --a === -1 && (n = o) : ((a = -1), (n = l)));
        }
        return r === n ? (n = l) : n === -1 && (n = e.length), e.slice(r, n);
      }
      for (o = e.length - 1; o >= 0; --o)
        if (e.charCodeAt(o) === I) {
          if (!i) {
            r = o + 1;
            break;
          }
        } else n === -1 && ((i = !1), (n = o + 1));
      return n === -1 ? '' : e.slice(r, n);
    },
    extname: function extname(e) {
      P(e, 'path');
      var t = -1,
        r = 0,
        n = -1,
        i = !0,
        o = 0;
      for (var a = e.length - 1; a >= 0; --a) {
        var l = e.charCodeAt(a);
        if (l === I) {
          if (!i) {
            r = a + 1;
            break;
          }
          continue;
        }
        n === -1 && ((i = !1), (n = a + 1)),
          l === ue ? (t === -1 ? (t = a) : o !== 1 && (o = 1)) : t !== -1 && (o = -1);
      }
      return t === -1 || n === -1 || o === 0 || (o === 1 && t === n - 1 && t === r + 1)
        ? ''
        : e.slice(t, n);
    },
    format: u1.bind(null, '/'),
    parse: function parse(e) {
      P(e, 'path');
      var t = { root: '', dir: '', base: '', ext: '', name: '' };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0) === I;
      var n;
      r ? ((t.root = '/'), (n = 1)) : (n = 0);
      var i = -1,
        o = 0,
        a = -1,
        l = !0,
        c = e.length - 1,
        u = 0;
      for (; c >= n; --c) {
        var f = e.charCodeAt(c);
        if (f === I) {
          if (!l) {
            o = c + 1;
            break;
          }
          continue;
        }
        a === -1 && ((l = !1), (a = c + 1)),
          f === ue ? (i === -1 ? (i = c) : u !== 1 && (u = 1)) : i !== -1 && (u = -1);
      }
      if (a !== -1) {
        var _f = o === 0 && r ? 1 : o;
        i === -1 || u === 0 || (u === 1 && i === a - 1 && i === o + 1)
          ? (t.base = t.name = e.slice(_f, a))
          : ((t.name = e.slice(_f, i)), (t.base = e.slice(_f, a)), (t.ext = e.slice(i, a)));
      }
      return o > 0 ? (t.dir = e.slice(0, o - 1)) : r && (t.dir = '/'), t;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  };
(x.win32 = R.win32 = R), (x.posix = R.posix = x);
var Gn = G ? R.normalize : x.normalize,
  g0 = G ? R.isAbsolute : x.isAbsolute,
  Hn = G ? R.join : x.join,
  Zn = G ? R.resolve : x.resolve,
  Yn = G ? R.relative : x.relative,
  Jn = G ? R.dirname : x.dirname,
  b0 = G ? R.basename : x.basename,
  p0 = G ? R.extname : x.extname,
  v0 = G ? R.format : x.format,
  w0 = G ? R.parse : x.parse,
  y0 = G ? R.toNamespacedPath : x.toNamespacedPath,
  Ke = G ? R.sep : x.sep,
  E0 = G ? R.delimiter : x.delimiter,
  Xn = /^\w[\w\d+.-]*$/,
  Qn = /^\//,
  Kn = /^\/\//;
function ei(e, t) {
  if (!e.scheme && t)
    throw new Error(
      '[UriError]: Scheme is missing: {scheme: "", authority: "'
        .concat(e.authority, '", path: "')
        .concat(e.path, '", query: "')
        .concat(e.query, '", fragment: "')
        .concat(e.fragment, '"}'),
    );
  if (e.scheme && !Xn.test(e.scheme))
    throw new Error('[UriError]: Scheme contains illegal characters.');
  if (e.path) {
    if (e.authority) {
      if (!Qn.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
        );
    } else if (Kn.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
      );
  }
}
function ti(e, t) {
  return !e && !t ? 'file' : e;
}
function ri(e, t) {
  switch (e) {
    case 'https':
    case 'http':
    case 'file':
      t ? t[0] !== Q && (t = Q + t) : (t = Q);
      break;
  }
  return t;
}
var T = '',
  Q = '/',
  ni = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
  z = /*#__PURE__*/ (function () {
    function ft(t, r, n, i, o) {
      var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      _classCallCheck(this, ft);
      _typeof(t) == 'object'
        ? ((this.scheme = t.scheme || T),
          (this.authority = t.authority || T),
          (this.path = t.path || T),
          (this.query = t.query || T),
          (this.fragment = t.fragment || T))
        : ((this.scheme = ti(t, a)),
          (this.authority = r || T),
          (this.path = ri(this.scheme, n || T)),
          (this.query = i || T),
          (this.fragment = o || T),
          ei(this, a));
    }
    return _createClass(
      ft,
      [
        {
          key: 'fsPath',
          get: function get() {
            return et(this, !1);
          },
        },
        {
          key: 'with',
          value: function _with(t) {
            if (!t) return this;
            var r = t.scheme,
              n = t.authority,
              i = t.path,
              o = t.query,
              a = t.fragment;
            return (
              r === void 0 ? (r = this.scheme) : r === null && (r = T),
              n === void 0 ? (n = this.authority) : n === null && (n = T),
              i === void 0 ? (i = this.path) : i === null && (i = T),
              o === void 0 ? (o = this.query) : o === null && (o = T),
              a === void 0 ? (a = this.fragment) : a === null && (a = T),
              r === this.scheme &&
              n === this.authority &&
              i === this.path &&
              o === this.query &&
              a === this.fragment
                ? this
                : new Ce(r, n, i, o, a)
            );
          },
        },
        {
          key: 'toString',
          value: function toString() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            return Nt(this, t);
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
            return t instanceof ft
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
            var n = ni.exec(t);
            return n
              ? new Ce(n[2] || T, tt(n[4] || T), tt(n[5] || T), tt(n[7] || T), tt(n[9] || T), r)
              : new Ce(T, T, T, T, T);
          },
        },
        {
          key: 'file',
          value: function file(t) {
            var r = T;
            if ((Ae && (t = t.replace(/\\/g, Q)), t[0] === Q && t[1] === Q)) {
              var n = t.indexOf(Q, 2);
              n === -1
                ? ((r = t.substring(2)), (t = Q))
                : ((r = t.substring(2, n)), (t = t.substring(n) || Q));
            }
            return new Ce('file', r, t, T, T);
          },
        },
        {
          key: 'from',
          value: function from(t, r) {
            return new Ce(t.scheme, t.authority, t.path, t.query, t.fragment, r);
          },
        },
        {
          key: 'joinPath',
          value: function joinPath(t) {
            if (!t.path) throw new Error('[UriError]: cannot call joinPath on URI without path');
            var n;
            for (
              var _len3 = arguments.length, r = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
              _key3 < _len3;
              _key3++
            ) {
              r[_key3 - 1] = arguments[_key3];
            }
            return (
              Ae && t.scheme === 'file'
                ? (n = ft.file(R.join.apply(R, [et(t, !0)].concat(r))).path)
                : (n = x.join.apply(x, [t.path].concat(r))),
              t['with']({ path: n })
            );
          },
        },
        {
          key: 'revive',
          value: function revive(t) {
            if (t) {
              if (t instanceof ft) return t;
              {
                var _t$external, _t$fsPath;
                var r = new Ce(t);
                return (
                  (r._formatted =
                    (_t$external = t.external) !== null && _t$external !== void 0
                      ? _t$external
                      : null),
                  (r._fsPath =
                    t._sep === c1
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
  c1 = Ae ? 1 : void 0,
  Ce = /*#__PURE__*/ (function (_z) {
    function Ce() {
      var _this2;
      _classCallCheck(this, Ce);
      (_this2 = _callSuper(this, Ce, arguments)),
        (_this2._formatted = null),
        (_this2._fsPath = null);
      return _this2;
    }
    _inherits(Ce, _z);
    return _createClass(Ce, [
      {
        key: 'fsPath',
        get: function get() {
          return this._fsPath || (this._fsPath = et(this, !1)), this._fsPath;
        },
      },
      {
        key: 'toString',
        value: function toString() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          return e
            ? Nt(this, !0)
            : (this._formatted || (this._formatted = Nt(this, !1)), this._formatted);
        },
      },
      {
        key: 'toJSON',
        value: function toJSON() {
          var e = { $mid: 1 };
          return (
            this._fsPath && ((e.fsPath = this._fsPath), (e._sep = c1)),
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
  })(z),
  h1 = {
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
function f1(e, t, r) {
  var n,
    i = -1;
  for (var o = 0; o < e.length; o++) {
    var a = e.charCodeAt(o);
    if (
      (a >= 97 && a <= 122) ||
      (a >= 65 && a <= 90) ||
      (a >= 48 && a <= 57) ||
      a === 45 ||
      a === 46 ||
      a === 95 ||
      a === 126 ||
      (t && a === 47) ||
      (r && a === 91) ||
      (r && a === 93) ||
      (r && a === 58)
    )
      i !== -1 && ((n += encodeURIComponent(e.substring(i, o))), (i = -1)),
        n !== void 0 && (n += e.charAt(o));
    else {
      n === void 0 && (n = e.substr(0, o));
      var l = h1[a];
      l !== void 0
        ? (i !== -1 && ((n += encodeURIComponent(e.substring(i, o))), (i = -1)), (n += l))
        : i === -1 && (i = o);
    }
  }
  return i !== -1 && (n += encodeURIComponent(e.substring(i))), n !== void 0 ? n : e;
}
function ii(e) {
  var t;
  for (var r = 0; r < e.length; r++) {
    var n = e.charCodeAt(r);
    n === 35 || n === 63
      ? (t === void 0 && (t = e.substr(0, r)), (t += h1[n]))
      : t !== void 0 && (t += e[r]);
  }
  return t !== void 0 ? t : e;
}
function et(e, t) {
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
    Ae && (r = r.replace(/\//g, '\\')),
    r
  );
}
function Nt(e, t) {
  var r = t ? ii : f1;
  var n = '',
    i = e.scheme,
    o = e.authority,
    a = e.path,
    l = e.query,
    c = e.fragment;
  if ((i && ((n += i), (n += ':')), (o || i === 'file') && ((n += Q), (n += Q)), o)) {
    var u = o.indexOf('@');
    if (u !== -1) {
      var f = o.substr(0, u);
      (o = o.substr(u + 1)),
        (u = f.lastIndexOf(':')),
        u === -1
          ? (n += r(f, !1, !1))
          : ((n += r(f.substr(0, u), !1, !1)), (n += ':'), (n += r(f.substr(u + 1), !1, !0))),
        (n += '@');
    }
    (o = o.toLowerCase()),
      (u = o.lastIndexOf(':')),
      u === -1 ? (n += r(o, !1, !0)) : ((n += r(o.substr(0, u), !1, !0)), (n += o.substr(u)));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
      var _u = a.charCodeAt(1);
      _u >= 65 &&
        _u <= 90 &&
        (a = '/'.concat(String.fromCharCode(_u + 32), ':').concat(a.substr(3)));
    } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
      var _u2 = a.charCodeAt(0);
      _u2 >= 65 &&
        _u2 <= 90 &&
        (a = ''.concat(String.fromCharCode(_u2 + 32), ':').concat(a.substr(2)));
    }
    n += r(a, !0, !1);
  }
  return l && ((n += '?'), (n += r(l, !1, !1))), c && ((n += '#'), (n += t ? c : f1(c, !1, !1))), n;
}
function d1(e) {
  try {
    return decodeURIComponent(e);
  } catch (_unused2) {
    return e.length > 3 ? e.substr(0, 3) + d1(e.substr(3)) : e;
  }
}
var m1 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function tt(e) {
  return e.match(m1)
    ? e.replace(m1, function (t) {
        return d1(t);
      })
    : e;
}
function g1(e, t) {
  var r = rt(e, t);
  return r === -1 ? void 0 : e[r];
}
function rt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = r,
    o = n;
  for (; i < o; ) {
    var a = Math.floor((i + o) / 2);
    t(e[a]) ? (i = a + 1) : (o = a);
  }
  return i - 1;
}
function b1(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = r,
    o = n;
  for (; i < o; ) {
    var a = Math.floor((i + o) / 2);
    t(e[a]) ? (o = a) : (i = a + 1);
  }
  return i;
}
var N0 =
    ((_en = /*#__PURE__*/ (function () {
      function en(t) {
        _classCallCheck(this, en);
        (this.e = t), (this.c = 0);
      }
      return _createClass(en, [
        {
          key: 'findLastMonotonous',
          value: function findLastMonotonous(t) {
            if (en.assertInvariants) {
              if (this.d) {
                var _iterator6 = _createForOfIteratorHelper(this.e),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                    var n = _step6.value;
                    if (this.d(n) && !t(n))
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
            var r = rt(this.e, t, this.c);
            return (this.c = r + 1), r === -1 ? void 0 : this.e[r];
          },
        },
      ]);
    })()),
    (_en.assertInvariants = !1),
    _en),
  si = /*#__PURE__*/ (function () {
    function si() {
      _classCallCheck(this, si);
      (this.b = []),
        (this.a = function (e) {
          setTimeout(function () {
            throw e.stack
              ? kt.isErrorNoTelemetry(e)
                ? new kt(e.message + '\n\n' + e.stack)
                : new Error(e.message + '\n\n' + e.stack)
              : e;
          }, 0);
        });
    }
    return _createClass(si, [
      {
        key: 'addListener',
        value: function addListener(e) {
          var _this3 = this;
          return (
            this.b.push(e),
            function () {
              _this3.d(e);
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
  p1 = new si();
function nt(e) {
  p1.onUnexpectedError(e);
}
function Me(e) {
  oi(e) || p1.onUnexpectedError(e);
}
function v1(e) {
  if (e instanceof Error) {
    var _t3 = e.name,
      r = e.message,
      n = e.stacktrace || e.stack;
    return { $isError: !0, name: _t3, message: r, stack: n, noTelemetry: kt.isErrorNoTelemetry(e) };
  }
  return e;
}
var Lt = 'Canceled';
function oi(e) {
  return e instanceof ai ? !0 : e instanceof Error && e.name === Lt && e.message === Lt;
}
var ai = /*#__PURE__*/ (function (_Error2) {
    function ai() {
      var _this4;
      _classCallCheck(this, ai);
      (_this4 = _callSuper(this, ai, [Lt])), (_this4.name = _this4.message);
      return _this4;
    }
    _inherits(ai, _Error2);
    return _createClass(ai);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  kt = /*#__PURE__*/ (function (_Error3) {
    function Gt(t) {
      var _this5;
      _classCallCheck(this, Gt);
      (_this5 = _callSuper(this, Gt, [t])), (_this5.name = 'CodeExpectedError');
      return _this5;
    }
    _inherits(Gt, _Error3);
    return _createClass(Gt, null, [
      {
        key: 'fromError',
        value: function fromError(t) {
          if (t instanceof Gt) return t;
          var r = new Gt();
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
  J = /*#__PURE__*/ (function (_Error4) {
    function tn(t) {
      var _this6;
      _classCallCheck(this, tn);
      (_this6 = _callSuper(this, tn, [t || 'An unexpected bug occurred.'])),
        Object.setPrototypeOf(_assertThisInitialized(_this6), tn.prototype);
      return _this6;
    }
    _inherits(tn, _Error4);
    return _createClass(tn);
  })(/*#__PURE__*/ _wrapNativeSuper(Error));
function w1(e, t, r) {
  var n = e.slice(0, t),
    i = e.slice(t);
  return n.concat(r, i);
}
var At;
(function (e) {
  function t(o) {
    return o < 0;
  }
  e.isLessThan = t;
  function r(o) {
    return o <= 0;
  }
  e.isLessThanOrEqual = r;
  function n(o) {
    return o > 0;
  }
  e.isGreaterThan = n;
  function i(o) {
    return o === 0;
  }
  (e.isNeitherLessOrGreaterThan = i),
    (e.greaterThan = 1),
    (e.lessThan = -1),
    (e.neitherLessOrGreaterThan = 0);
})(At || (At = {}));
function li(e, t) {
  return function (r, n) {
    return t(e(r), e(n));
  };
}
var ui = function ui(e, t) {
    return e - t;
  },
  L0 =
    ((_dt = /*#__PURE__*/ (function () {
      function dt(t) {
        _classCallCheck(this, dt);
        this.iterate = t;
      }
      return _createClass(dt, [
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
            var _this7 = this;
            return new dt(function (r) {
              return _this7.iterate(function (n) {
                return t(n) ? r(n) : !0;
              });
            });
          },
        },
        {
          key: 'map',
          value: function map(t) {
            var _this8 = this;
            return new dt(function (r) {
              return _this8.iterate(function (n) {
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
                return (n || At.isGreaterThan(t(i, r))) && ((n = !1), (r = i)), !0;
              }),
              r
            );
          },
        },
      ]);
    })()),
    (_dt.empty = new _dt(function (t) {})),
    _dt),
  y1;
function ci(e, t) {
  var r = Object.create(null);
  var _iterator7 = _createForOfIteratorHelper(e),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var n = _step7.value;
      var i = t(n);
      var o = r[i];
      o || (o = r[i] = []), o.push(n);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return r;
}
var k0 =
    ((y1 = Symbol.toStringTag),
    /*#__PURE__*/ (function () {
      function k0(e, t) {
        _classCallCheck(this, k0);
        (this.b = t), (this.a = new Map()), (this[y1] = 'SetWithKey');
        var _iterator8 = _createForOfIteratorHelper(e),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            var r = _step8.value;
            this.add(r);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      return _createClass(k0, [
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
            var _iterator9, _step9, _e5;
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
                      _e5 = _step9.value;
                      _context.next = 7;
                      return [_e5, _e5];
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
            var _iterator0, _step0, _e6;
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
                      _e6 = _step0.value;
                      _context2.next = 7;
                      return _e6;
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
            var _this9 = this;
            this.a.forEach(function (r) {
              return e.call(t, r, r, _this9);
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
  E1,
  N1,
  L1,
  hi = /*#__PURE__*/ _createClass(function hi(e, t) {
    _classCallCheck(this, hi);
    (this.uri = e), (this.value = t);
  });
function fi(e) {
  return Array.isArray(e);
}
var k1 =
    ((_ref = ((E1 = Symbol.toStringTag), Symbol.iterator)),
    (_Ue = /*#__PURE__*/ (function () {
      function Ue(t, r) {
        _classCallCheck(this, Ue);
        if (((this[E1] = 'ResourceMap'), t instanceof Ue))
          (this.d = new Map(t.d)), (this.e = r !== null && r !== void 0 ? r : Ue.c);
        else if (fi(t)) {
          (this.d = new Map()), (this.e = r !== null && r !== void 0 ? r : Ue.c);
          var _iterator1 = _createForOfIteratorHelper(t),
            _step1;
          try {
            for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
              var _step1$value = _slicedToArray(_step1.value, 2),
                n = _step1$value[0],
                i = _step1$value[1];
              this.set(n, i);
            }
          } catch (err) {
            _iterator1.e(err);
          } finally {
            _iterator1.f();
          }
        } else (this.d = new Map()), (this.e = t !== null && t !== void 0 ? t : Ue.c);
      }
      return _createClass(Ue, [
        {
          key: 'set',
          value: function set(t, r) {
            return this.d.set(this.e(t), new hi(t, r)), this;
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
                  n = _step10$value[0],
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
            var _iterator11, _step11, _t4;
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
                      _t4 = _step11.value;
                      _context3.next = 7;
                      return _t4.value;
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
            var _iterator12, _step12, _t5;
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
                      _t5 = _step12.value;
                      _context4.next = 7;
                      return _t5.uri;
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
            var _iterator13, _step13, _t6;
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
                      _t6 = _step13.value;
                      _context5.next = 7;
                      return [_t6.uri, _t6.value];
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
            var _iterator14, _step14, _step14$value, _t7;
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
                      (_step14$value = _slicedToArray(_step14.value, 2)), (_t7 = _step14$value[1]);
                      _context6.next = 7;
                      return [_t7.uri, _t7.value];
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
    (_Ue.c = function (t) {
      return t.toString();
    }),
    _Ue),
  A0 = /*#__PURE__*/ (function (_ref2) {
    function A0(e, t) {
      _classCallCheck(this, A0);
      (this[N1] = 'ResourceSet'),
        !e || typeof e == 'function'
          ? (this.c = new k1(e))
          : ((this.c = new k1(t)), e.forEach(this.add, this));
    }
    return _createClass(A0, [
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
          var _this0 = this;
          this.c.forEach(function (r, n) {
            return e.call(t, n, n, _this0);
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
  })(((N1 = Symbol.toStringTag), Symbol.iterator)),
  A1;
(function (e) {
  (e[(e.None = 0)] = 'None'), (e[(e.AsOld = 1)] = 'AsOld'), (e[(e.AsNew = 2)] = 'AsNew');
})(A1 || (A1 = {}));
var C0 = /*#__PURE__*/ (function (_ref3) {
    function C0() {
      _classCallCheck(this, C0);
      (this[L1] = 'LinkedMap'),
        (this.c = new Map()),
        (this.d = void 0),
        (this.e = void 0),
        (this.f = 0),
        (this.g = 0);
    }
    return _createClass(C0, [
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
            switch (((n = { key: e, value: t, next: void 0, previous: void 0 }), r)) {
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
                var i = { value: r.key, done: !1 };
                return (r = r.next), i;
              } else return { value: void 0, done: !0 };
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
                var i = { value: r.value, done: !1 };
                return (r = r.next), i;
              } else return { value: void 0, done: !0 };
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
                var i = { value: [r.key, r.value], done: !1 };
                return (r = r.next), i;
              } else return { value: void 0, done: !0 };
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
            var _t8 = e.next,
              r = e.previous;
            if (!_t8 || !r) throw new Error('Invalid list');
            (_t8.previous = r), (r.next = _t8);
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
          var _iterator15 = _createForOfIteratorHelper(e),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
              var _step15$value = _slicedToArray(_step15.value, 2),
                _t9 = _step15$value[0],
                r = _step15$value[1];
              this.set(_t9, r);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        },
      },
    ]);
  })(((L1 = Symbol.toStringTag), Symbol.iterator)),
  di = /*#__PURE__*/ (function () {
    function di() {
      _classCallCheck(this, di);
      this.c = new Map();
    }
    return _createClass(di, [
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
  })();
function mi(e, t) {
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
var Ct;
(function (e) {
  var _marked = /*#__PURE__*/ _regeneratorRuntime().mark(i),
    _marked2 = /*#__PURE__*/ _regeneratorRuntime().mark(l),
    _marked3 = /*#__PURE__*/ _regeneratorRuntime().mark(g),
    _marked4 = /*#__PURE__*/ _regeneratorRuntime().mark(v),
    _marked5 = /*#__PURE__*/ _regeneratorRuntime().mark(k),
    _marked6 = /*#__PURE__*/ _regeneratorRuntime().mark(F);
  function t(E) {
    return E && _typeof(E) == 'object' && typeof E[Symbol.iterator] == 'function';
  }
  e.is = t;
  var r = Object.freeze([]);
  function n() {
    return r;
  }
  e.empty = n;
  function i(E) {
    return _regeneratorRuntime().wrap(function i$(_context7) {
      while (1)
        switch ((_context7.prev = _context7.next)) {
          case 0:
            _context7.next = 2;
            return E;
          case 2:
          case 'end':
            return _context7.stop();
        }
    }, _marked);
  }
  e.single = i;
  function o(E) {
    return t(E) ? E : i(E);
  }
  e.wrap = o;
  function a(E) {
    return E || r;
  }
  e.from = a;
  function l(E) {
    var A;
    return _regeneratorRuntime().wrap(function l$(_context8) {
      while (1)
        switch ((_context8.prev = _context8.next)) {
          case 0:
            A = E.length - 1;
          case 1:
            if (!(A >= 0)) {
              _context8.next = 7;
              break;
            }
            _context8.next = 4;
            return E[A];
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
  function c(E) {
    return !E || E[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = c;
  function u(E) {
    return E[Symbol.iterator]().next().value;
  }
  e.first = u;
  function f(E, A) {
    var $ = 0;
    var _iterator16 = _createForOfIteratorHelper(E),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
        var W = _step16.value;
        if (A(W, $++)) return !0;
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
    return !1;
  }
  e.some = f;
  function h(E, A) {
    var _iterator17 = _createForOfIteratorHelper(E),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
        var $ = _step17.value;
        if (A($)) return $;
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }
  e.find = h;
  function g(E, A) {
    var _iterator18, _step18, $;
    return _regeneratorRuntime().wrap(
      function g$(_context9) {
        while (1)
          switch ((_context9.prev = _context9.next)) {
            case 0:
              _iterator18 = _createForOfIteratorHelper(E);
              _context9.prev = 1;
              _iterator18.s();
            case 3:
              if ((_step18 = _iterator18.n()).done) {
                _context9.next = 11;
                break;
              }
              $ = _step18.value;
              _context9.t0 = A($);
              if (!_context9.t0) {
                _context9.next = 9;
                break;
              }
              _context9.next = 9;
              return $;
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
  e.filter = g;
  function v(E, A) {
    var $, _iterator19, _step19, W;
    return _regeneratorRuntime().wrap(
      function v$(_context0) {
        while (1)
          switch ((_context0.prev = _context0.next)) {
            case 0:
              $ = 0;
              _iterator19 = _createForOfIteratorHelper(E);
              _context0.prev = 2;
              _iterator19.s();
            case 4:
              if ((_step19 = _iterator19.n()).done) {
                _context0.next = 10;
                break;
              }
              W = _step19.value;
              _context0.next = 8;
              return A(W, $++);
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
  e.map = v;
  function k(E, A) {
    var $, _iterator20, _step20, W;
    return _regeneratorRuntime().wrap(
      function k$(_context1) {
        while (1)
          switch ((_context1.prev = _context1.next)) {
            case 0:
              $ = 0;
              _iterator20 = _createForOfIteratorHelper(E);
              _context1.prev = 2;
              _iterator20.s();
            case 4:
              if ((_step20 = _iterator20.n()).done) {
                _context1.next = 9;
                break;
              }
              W = _step20.value;
              return _context1.delegateYield(A(W, $++), 't0', 7);
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
  e.flatMap = k;
  function F() {
    var _len4,
      E,
      _key4,
      _i2,
      _E,
      A,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function F$(_context10) {
      while (1)
        switch ((_context10.prev = _context10.next)) {
          case 0:
            for (_len4 = _args10.length, E = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              E[_key4] = _args10[_key4];
            }
            (_i2 = 0), (_E = E);
          case 2:
            if (!(_i2 < _E.length)) {
              _context10.next = 8;
              break;
            }
            A = _E[_i2];
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
  e.concat = F;
  function M(E, A, $) {
    var W = $;
    var _iterator21 = _createForOfIteratorHelper(E),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
        var Ne = _step21.value;
        W = A(W, Ne);
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    return W;
  }
  e.reduce = M;
  function H(E, A) {
    var $ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : E.length;
    return /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context11) {
        while (1)
          switch ((_context11.prev = _context11.next)) {
            case 0:
              A < -E.length && (A = 0),
                A < 0 && (A += E.length),
                $ < 0 ? ($ += E.length) : $ > E.length && ($ = E.length);
            case 1:
              if (!(A < $)) {
                _context11.next = 7;
                break;
              }
              _context11.next = 4;
              return E[A];
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
  e.slice = H;
  function bt(E) {
    var A =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var $ = [];
    if (A === 0) return [$, E];
    var W = E[Symbol.iterator]();
    for (var Ne = 0; Ne < A; Ne++) {
      var We = W.next();
      if (We.done) return [$, e.empty()];
      $.push(We.value);
    }
    return [
      $,
      _defineProperty({}, Symbol.iterator, function () {
        return W;
      }),
    ];
  }
  e.consume = bt;
  function Ee(_x) {
    return _Ee.apply(this, arguments);
  }
  function _Ee() {
    _Ee = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(E) {
        var A, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, $;
        return _regeneratorRuntime().wrap(
          function _callee2$(_context12) {
            while (1)
              switch ((_context12.prev = _context12.next)) {
                case 0:
                  A = [];
                  _iteratorAbruptCompletion = false;
                  _didIteratorError = false;
                  _context12.prev = 3;
                  _iterator = _asyncIterator(E);
                case 5:
                  _context12.next = 7;
                  return _iterator.next();
                case 7:
                  if (!(_iteratorAbruptCompletion = !(_step = _context12.sent).done)) {
                    _context12.next = 13;
                    break;
                  }
                  $ = _step.value;
                  A.push($);
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
    return _Ee.apply(this, arguments);
  }
  e.asyncToArray = Ee;
})(Ct || (Ct = {}));
var gi = !1,
  Se = null,
  S0 =
    ((_rn = /*#__PURE__*/ (function () {
      function rn() {
        _classCallCheck(this, rn);
        this.b = new Map();
      }
      return _createClass(rn, [
        {
          key: 'c',
          value: function c(t) {
            var r = this.b.get(t);
            return (
              r ||
                ((r = { parent: null, source: null, isSingleton: !1, value: t, idx: rn.a++ }),
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
            var _this1 = this;
            var t = new Map();
            return _toConsumableArray(this.b.entries())
              .filter(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                  n = _ref6[1];
                return n.source !== null && !_this1.f(n, t).isSingleton;
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
            var _this10 = this;
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var r = arguments.length > 1 ? arguments[1] : undefined;
            var n;
            if (r) n = r;
            else {
              var c = new Map(),
                u = _toConsumableArray(this.b.values()).filter(function (h) {
                  return h.source !== null && !_this10.f(h, c).isSingleton;
                });
              if (u.length === 0) return;
              var f = new Set(
                u.map(function (h) {
                  return h.value;
                }),
              );
              if (
                ((n = u.filter(function (h) {
                  return !(h.parent && f.has(h.parent));
                })),
                n.length === 0)
              )
                throw new Error('There are cyclic diposable chains!');
            }
            if (!n) return;
            function i(c) {
              function u(h, g) {
                for (
                  ;
                  h.length > 0 &&
                  g.some(function (v) {
                    return typeof v == 'string' ? v === h[0] : h[0].match(v);
                  });

                )
                  h.shift();
              }
              var f = c.source
                .split('\n')
                .map(function (h) {
                  return h.trim().replace('at ', '');
                })
                .filter(function (h) {
                  return h !== '';
                });
              return (
                u(f, [
                  'Error',
                  /^trackDisposable \(.*\)$/,
                  /^DisposableTracker.trackDisposable \(.*\)$/,
                ]),
                f.reverse()
              );
            }
            var o = new di();
            var _iterator22 = _createForOfIteratorHelper(n),
              _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                var _c = _step22.value;
                var _u3 = i(_c);
                for (var _f2 = 0; _f2 <= _u3.length; _f2++) o.add(_u3.slice(0, _f2).join('\n'), _c);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
            n.sort(
              li(function (c) {
                return c.idx;
              }, ui),
            );
            var a = '',
              l = 0;
            var _iterator23 = _createForOfIteratorHelper(n.slice(0, t)),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                var _c2 = _step23.value;
                l++;
                var _u4 = i(_c2),
                  _f3 = [];
                var _loop = function _loop(h) {
                  var g = _u4[h];
                  g = '(shared with '
                    .concat(o.get(_u4.slice(0, h + 1).join('\n')).size, '/')
                    .concat(n.length, ' leaks) at ')
                    .concat(g);
                  var k = o.get(_u4.slice(0, h).join('\n')),
                    F = ci(
                      _toConsumableArray(k).map(function (M) {
                        return i(M)[h];
                      }),
                      function (M) {
                        return M;
                      },
                    );
                  delete F[_u4[h]];
                  for (
                    var _i3 = 0, _Object$entries = Object.entries(F);
                    _i3 < _Object$entries.length;
                    _i3++
                  ) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
                      M = _Object$entries$_i[0],
                      H = _Object$entries$_i[1];
                    _f3.unshift(
                      '    - stacktraces of '
                        .concat(H.length, ' other leaks continue with ')
                        .concat(M),
                    );
                  }
                  _f3.unshift(g);
                };
                for (var h = 0; h < _u4.length; h++) {
                  _loop(h);
                }
                a += '\n\n\n==================== Leaking disposable '
                  .concat(l, '/')
                  .concat(n.length, ': ')
                  .concat(_c2.value.constructor.name, ' ====================\n')
                  .concat(
                    _f3.join('\n'),
                    '\n============================================================\n\n',
                  );
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
            return (
              n.length > t &&
                (a += '\n\n\n... and '.concat(n.length - t, ' more leaking disposables\n\n')),
              { leaks: n, details: a }
            );
          },
        },
      ]);
    })()),
    (_rn.a = 0),
    _rn);
function bi(e) {
  Se = e;
}
if (gi) {
  var _e7 = '__is_disposable_tracked__';
  bi(
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
              t[_e7] || console.log(r);
            }, 3e3);
          },
        },
        {
          key: 'setParent',
          value: function setParent(t, r) {
            if (t && t !== re.None)
              try {
                t[_e7] = !0;
              } catch (_unused3) {}
          },
        },
        {
          key: 'markAsDisposed',
          value: function markAsDisposed(t) {
            if (t && t !== re.None)
              try {
                t[_e7] = !0;
              } catch (_unused4) {}
          },
        },
        { key: 'markAsSingleton', value: function markAsSingleton(t) {} },
      ]);
    })())(),
  );
}
function it(e) {
  var _Se;
  return (_Se = Se) !== null && _Se !== void 0 && _Se.trackDisposable(e), e;
}
function st(e) {
  var _Se2;
  (_Se2 = Se) === null || _Se2 === void 0 || _Se2.markAsDisposed(e);
}
function St(e, t) {
  var _Se3;
  (_Se3 = Se) === null || _Se3 === void 0 || _Se3.setParent(e, t);
}
function pi(e, t) {
  if (Se) {
    var _iterator24 = _createForOfIteratorHelper(e),
      _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
        var r = _step24.value;
        Se.setParent(r, t);
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
  }
}
function C1(e) {
  if (Ct.is(e)) {
    var _t0 = [];
    var _iterator25 = _createForOfIteratorHelper(e),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
        var r = _step25.value;
        if (r)
          try {
            r.dispose();
          } catch (n) {
            _t0.push(n);
          }
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
    if (_t0.length === 1) throw _t0[0];
    if (_t0.length > 1)
      throw new AggregateError(_t0, 'Encountered errors while disposing of store');
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function vi() {
  for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    e[_key5] = arguments[_key5];
  }
  var t = xe(function () {
    return C1(e);
  });
  return pi(e, t), t;
}
function xe(e) {
  var t = it({
    dispose: mi(function () {
      st(t), e();
    }),
  });
  return t;
}
var xt =
    ((_nn = /*#__PURE__*/ (function () {
      function nn() {
        _classCallCheck(this, nn);
        (this.f = new Set()), (this.g = !1), it(this);
      }
      return _createClass(nn, [
        {
          key: 'dispose',
          value: function dispose() {
            this.g || (st(this), (this.g = !0), this.clear());
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
                C1(this.f);
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
              St(t, this),
              this.g
                ? nn.DISABLE_DISPOSED_WARNING ||
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
            t && this.f.has(t) && (this.f['delete'](t), St(t, null));
          },
        },
      ]);
    })()),
    (_nn.DISABLE_DISPOSED_WARNING = !1),
    _nn),
  re =
    ((_Class2 = /*#__PURE__*/ (function () {
      function re() {
        _classCallCheck(this, re);
        (this.B = new xt()), it(this), St(this.B, this);
      }
      return _createClass(re, [
        {
          key: 'dispose',
          value: function dispose() {
            st(this), this.B.dispose();
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
  x0 =
    ((_mt = /*#__PURE__*/ _createClass(function mt(t) {
      _classCallCheck(this, mt);
      (this.element = t), (this.next = mt.Undefined), (this.prev = mt.Undefined);
    })),
    (_mt.Undefined = new _mt(void 0)),
    _mt),
  wi = globalThis.performance && typeof globalThis.performance.now == 'function',
  S1 = /*#__PURE__*/ (function () {
    function sn(t) {
      _classCallCheck(this, sn);
      (this.c =
        wi && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)),
        (this.a = this.c()),
        (this.b = -1);
    }
    return _createClass(
      sn,
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
            return new sn(t);
          },
        },
      ],
    );
  })(),
  yi = !1,
  x1 = !1,
  Ei = !1,
  ot;
(function (e) {
  e.None = function () {
    return re.None;
  };
  function t(b) {
    if (Ei) {
      var d = b.onDidAddListener,
        p = $t.create();
      var m = 0;
      b.onDidAddListener = function () {
        ++m === 2 &&
          (console.warn(
            'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
          ),
          p.print()),
          d === null || d === void 0 ? void 0 : d();
      };
    }
  }
  function r(b, d) {
    return v(b, function () {}, 0, void 0, !0, void 0, d);
  }
  e.defer = r;
  function n(b) {
    return function (d) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var m = arguments.length > 2 ? arguments[2] : undefined;
      var y = !1,
        L;
      return (
        (L = b(
          function (S) {
            if (!y) return L ? L.dispose() : (y = !0), d.call(p, S);
          },
          null,
          m,
        )),
        y && L.dispose(),
        L
      );
    };
  }
  e.once = n;
  function i(b, d) {
    return e.once(e.filter(b, d));
  }
  e.onceIf = i;
  function o(b, d, p) {
    return h(function (m) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var L = arguments.length > 2 ? arguments[2] : undefined;
      return b(
        function (S) {
          return m.call(y, d(S));
        },
        null,
        L,
      );
    }, p);
  }
  e.map = o;
  function a(b, d, p) {
    return h(function (m) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var L = arguments.length > 2 ? arguments[2] : undefined;
      return b(
        function (S) {
          d(S), m.call(y, S);
        },
        null,
        L,
      );
    }, p);
  }
  e.forEach = a;
  function l(b, d, p) {
    return h(function (m) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var L = arguments.length > 2 ? arguments[2] : undefined;
      return b(
        function (S) {
          return d(S) && m.call(y, S);
        },
        null,
        L,
      );
    }, p);
  }
  e.filter = l;
  function c(b) {
    return b;
  }
  e.signal = c;
  function u() {
    for (var _len6 = arguments.length, b = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      b[_key6] = arguments[_key6];
    }
    return function (d) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var m = arguments.length > 2 ? arguments[2] : undefined;
      var y = vi.apply(
        void 0,
        _toConsumableArray(
          b.map(function (L) {
            return L(function (S) {
              return d.call(p, S);
            });
          }),
        ),
      );
      return g(y, m);
    };
  }
  e.any = u;
  function f(b, d, p, m) {
    var y = p;
    return o(
      b,
      function (L) {
        return (y = d(y, L)), y;
      },
      m,
    );
  }
  e.reduce = f;
  function h(b, d) {
    var p;
    var m = {
      onWillAddFirstListener: function onWillAddFirstListener() {
        p = b(y.fire, y);
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        var _p;
        (_p = p) === null || _p === void 0 || _p.dispose();
      },
    };
    d || t(m);
    var y = new X(m);
    return d !== null && d !== void 0 && d.add(y), y.event;
  }
  function g(b, d) {
    return d instanceof Array ? d.push(b) : d && d.add(b), b;
  }
  function v(b, d) {
    var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var m = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    var L = arguments.length > 5 ? arguments[5] : undefined;
    var S = arguments.length > 6 ? arguments[6] : undefined;
    var j,
      U,
      Le,
      Ve = 0,
      Pe;
    var Xt = {
      leakWarningThreshold: L,
      onWillAddFirstListener: function onWillAddFirstListener() {
        j = b(function (gn) {
          Ve++,
            (U = d(U, gn)),
            m && !Le && (Ge.fire(U), (U = void 0)),
            (Pe = function Pe() {
              var bn = U;
              (U = void 0), (Le = void 0), (!m || Ve > 1) && Ge.fire(bn), (Ve = 0);
            }),
            typeof p == 'number'
              ? (clearTimeout(Le), (Le = setTimeout(Pe, p)))
              : Le === void 0 && ((Le = 0), queueMicrotask(Pe));
        });
      },
      onWillRemoveListener: function onWillRemoveListener() {
        var _Pe;
        y && Ve > 0 && ((_Pe = Pe) === null || _Pe === void 0 ? void 0 : _Pe());
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        (Pe = void 0), j.dispose();
      },
    };
    S || t(Xt);
    var Ge = new X(Xt);
    return S !== null && S !== void 0 && S.add(Ge), Ge.event;
  }
  e.debounce = v;
  function k(b) {
    var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var p = arguments.length > 2 ? arguments[2] : undefined;
    return e.debounce(
      b,
      function (m, y) {
        return m ? (m.push(y), m) : [y];
      },
      d,
      void 0,
      !0,
      void 0,
      p,
    );
  }
  e.accumulate = k;
  function F(b) {
    var d =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : function (m, y) {
            return m === y;
          };
    var p = arguments.length > 2 ? arguments[2] : undefined;
    var m = !0,
      y;
    return l(
      b,
      function (L) {
        var S = m || !d(L, y);
        return (m = !1), (y = L), S;
      },
      p,
    );
  }
  e.latch = F;
  function M(b, d, p) {
    return [
      e.filter(b, d, p),
      e.filter(
        b,
        function (m) {
          return !d(m);
        },
        p,
      ),
    ];
  }
  e.split = M;
  function H(b) {
    var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var m = arguments.length > 3 ? arguments[3] : undefined;
    var y = p.slice(),
      L = b(function (U) {
        y ? y.push(U) : j.fire(U);
      });
    m && m.add(L);
    var S = function S() {
        var _y;
        (_y = y) !== null &&
          _y !== void 0 &&
          _y.forEach(function (U) {
            return j.fire(U);
          }),
          (y = null);
      },
      j = new X({
        onWillAddFirstListener: function onWillAddFirstListener() {
          L ||
            ((L = b(function (U) {
              return j.fire(U);
            })),
            m && m.add(L));
        },
        onDidAddFirstListener: function onDidAddFirstListener() {
          y && (d ? setTimeout(S) : S());
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          L && L.dispose(), (L = null);
        },
      });
    return m && m.add(j), j.event;
  }
  e.buffer = H;
  function bt(b, d) {
    return function (m, y, L) {
      var S = d(new E());
      return b(
        function (j) {
          var U = S.evaluate(j);
          U !== Ee && m.call(y, U);
        },
        void 0,
        L,
      );
    };
  }
  e.chain = bt;
  var Ee = Symbol('HaltChainable');
  var E = /*#__PURE__*/ (function () {
    function E() {
      _classCallCheck(this, E);
      this.f = [];
    }
    return _createClass(E, [
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
            this.f.push(function (p) {
              return d(p), p;
            }),
            this
          );
        },
      },
      {
        key: 'filter',
        value: function filter(d) {
          return (
            this.f.push(function (p) {
              return d(p) ? p : Ee;
            }),
            this
          );
        },
      },
      {
        key: 'reduce',
        value: function reduce(d, p) {
          var m = p;
          return (
            this.f.push(function (y) {
              return (m = d(m, y)), m;
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
              : function (p, m) {
                  return p === m;
                };
          var p = !0,
            m;
          return (
            this.f.push(function (y) {
              var L = p || !d(y, m);
              return (p = !1), (m = y), L ? y : Ee;
            }),
            this
          );
        },
      },
      {
        key: 'evaluate',
        value: function evaluate(d) {
          var _iterator26 = _createForOfIteratorHelper(this.f),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
              var p = _step26.value;
              if (((d = p(d)), d === Ee)) break;
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
          return d;
        },
      },
    ]);
  })();
  function A(b, d) {
    var p =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (m) {
            return m;
          };
    var m = function m() {
        return S.fire(p.apply(void 0, arguments));
      },
      y = function y() {
        return b.on(d, m);
      },
      L = function L() {
        return b.removeListener(d, m);
      },
      S = new X({ onWillAddFirstListener: y, onDidRemoveLastListener: L });
    return S.event;
  }
  e.fromNodeEventEmitter = A;
  function $(b, d) {
    var p =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (m) {
            return m;
          };
    var m = function m() {
        return S.fire(p.apply(void 0, arguments));
      },
      y = function y() {
        return b.addEventListener(d, m);
      },
      L = function L() {
        return b.removeEventListener(d, m);
      },
      S = new X({ onWillAddFirstListener: y, onDidRemoveLastListener: L });
    return S.event;
  }
  e.fromDOMEventEmitter = $;
  function W(b) {
    return new Promise(function (d) {
      return n(b)(d);
    });
  }
  e.toPromise = W;
  function Ne(b) {
    var d = new X();
    return (
      b
        .then(
          function (p) {
            d.fire(p);
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
  e.fromPromise = Ne;
  function We(b, d) {
    return b(function (p) {
      return d.fire(p);
    });
  }
  e.forward = We;
  function hn(b, d, p) {
    return (
      d(p),
      b(function (m) {
        return d(m);
      })
    );
  }
  e.runAndSubscribe = hn;
  var fn = /*#__PURE__*/ (function () {
    function fn(d, p) {
      var _this11 = this;
      _classCallCheck(this, fn);
      (this._observable = d), (this.f = 0), (this.g = !1);
      var m = {
        onWillAddFirstListener: function onWillAddFirstListener() {
          d.addObserver(_this11), _this11._observable.reportChanges();
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          d.removeObserver(_this11);
        },
      };
      p || t(m), (this.emitter = new X(m)), p && p.add(this.emitter);
    }
    return _createClass(fn, [
      {
        key: 'beginUpdate',
        value: function beginUpdate(d) {
          this.f++;
        },
      },
      { key: 'handlePossibleChange', value: function handlePossibleChange(d) {} },
      {
        key: 'handleChange',
        value: function handleChange(d, p) {
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
  function dn(b, d) {
    return new fn(b, d).emitter.event;
  }
  e.fromObservable = dn;
  function mn(b) {
    return function (d, p, m) {
      var y = 0,
        L = !1;
      var S = {
        beginUpdate: function beginUpdate() {
          y++;
        },
        endUpdate: function endUpdate() {
          y--, y === 0 && (b.reportChanges(), L && ((L = !1), d.call(p)));
        },
        handlePossibleChange: function handlePossibleChange() {},
        handleChange: function handleChange() {
          L = !0;
        },
      };
      b.addObserver(S), b.reportChanges();
      var j = {
        dispose: function dispose() {
          b.removeObserver(S);
        },
      };
      return m instanceof xt ? m.add(j) : Array.isArray(m) && m.push(j), j;
    };
  }
  e.fromObservableLight = mn;
})(ot || (ot = {}));
var Ni =
    ((_Ht = /*#__PURE__*/ (function () {
      function Ht(t) {
        _classCallCheck(this, Ht);
        (this.listenerCount = 0),
          (this.invocationCount = 0),
          (this.elapsedOverall = 0),
          (this.durations = []),
          (this.name = ''.concat(t, '_').concat(Ht.f++)),
          Ht.all.add(this);
      }
      return _createClass(Ht, [
        {
          key: 'start',
          value: function start(t) {
            (this.g = new S1()), (this.listenerCount = t);
          },
        },
        {
          key: 'stop',
          value: function stop() {
            if (this.g) {
              var _t1 = this.g.elapsed();
              this.durations.push(_t1),
                (this.elapsedOverall += _t1),
                (this.invocationCount += 1),
                (this.g = void 0);
            }
          },
        },
      ]);
    })()),
    (_Ht.all = new Set()),
    (_Ht.f = 0),
    _Ht),
  $1 = -1,
  Li =
    ((_on = /*#__PURE__*/ (function () {
      function on(t, r) {
        var n =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : (on.f++).toString(16).padStart(3, '0');
        _classCallCheck(this, on);
        (this.j = t), (this.threshold = r), (this.name = n), (this.h = 0);
      }
      return _createClass(on, [
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
            var _this12 = this;
            var n = this.threshold;
            if (n <= 0 || r < n) return;
            this.g || (this.g = new Map());
            var i = this.g.get(t.value) || 0;
            if ((this.g.set(t.value, i + 1), (this.h -= 1), this.h <= 0)) {
              this.h = n * 0.5;
              var _this$getMostFrequent = this.getMostFrequentStack(),
                _this$getMostFrequent2 = _slicedToArray(_this$getMostFrequent, 2),
                o = _this$getMostFrequent2[0],
                a = _this$getMostFrequent2[1],
                l = '['
                  .concat(this.name, '] potential listener LEAK detected, having ')
                  .concat(r, ' listeners already. MOST frequent listener (')
                  .concat(a, '):');
              console.warn(l), console.warn(o);
              var c = new ki(l, o);
              this.j(c);
            }
            return function () {
              var o = _this12.g.get(t.value) || 0;
              _this12.g.set(t.value, o - 1);
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
                  n = _step27$value[0],
                  i = _step27$value[1];
                (!t || r < i) && ((t = [n, i]), (r = i));
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
    (_on.f = 1),
    _on),
  $t = /*#__PURE__*/ (function () {
    function an(t) {
      _classCallCheck(this, an);
      this.value = t;
    }
    return _createClass(
      an,
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
            return new an((_t$stack = t.stack) !== null && _t$stack !== void 0 ? _t$stack : '');
          },
        },
      ],
    );
  })(),
  ki = /*#__PURE__*/ (function (_Error5) {
    function ki(e, t) {
      var _this13;
      _classCallCheck(this, ki);
      (_this13 = _callSuper(this, ki, [e])),
        (_this13.name = 'ListenerLeakError'),
        (_this13.stack = t);
      return _this13;
    }
    _inherits(ki, _Error5);
    return _createClass(ki);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  Ai = /*#__PURE__*/ (function (_Error6) {
    function Ai(e, t) {
      var _this14;
      _classCallCheck(this, Ai);
      (_this14 = _callSuper(this, Ai, [e])),
        (_this14.name = 'ListenerRefusalError'),
        (_this14.stack = t);
      return _this14;
    }
    _inherits(Ai, _Error6);
    return _createClass(Ai);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  Ci = 0,
  at = /*#__PURE__*/ _createClass(function at(e) {
    _classCallCheck(this, at);
    (this.value = e), (this.id = Ci++);
  }),
  Si = 2,
  xi = function xi(e, t) {
    if (e instanceof at) t(e);
    else
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n && t(n);
      }
  },
  lt;
if (yi) {
  var _e8 = [];
  setInterval(function () {
    _e8.length !== 0 &&
      (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"),
      console.warn(_e8.join('\n')),
      (_e8.length = 0));
  }, 3e3),
    (lt = new FinalizationRegistry(function (t) {
      typeof t == 'string' && _e8.push(t);
    }));
}
var X = /*#__PURE__*/ (function () {
    function X(e) {
      var _this$f, _e$onListenerError, _this$f$leakWarningTh, _this$f2, _this$f3, _this$f4;
      _classCallCheck(this, X);
      (this.z = 0),
        (this.f = e),
        (this.g =
          $1 > 0 ||
          ((_this$f = this.f) !== null && _this$f !== void 0 && _this$f.leakWarningThreshold)
            ? new Li(
                (_e$onListenerError = e === null || e === void 0 ? void 0 : e.onListenerError) !==
                  null && _e$onListenerError !== void 0
                  ? _e$onListenerError
                  : Me,
                (_this$f$leakWarningTh =
                  (_this$f2 = this.f) === null || _this$f2 === void 0
                    ? void 0
                    : _this$f2.leakWarningThreshold) !== null && _this$f$leakWarningTh !== void 0
                  ? _this$f$leakWarningTh
                  : $1,
              )
            : void 0),
        (this.j =
          (_this$f3 = this.f) !== null && _this$f3 !== void 0 && _this$f3._profName
            ? new Ni(this.f._profName)
            : void 0),
        (this.w =
          (_this$f4 = this.f) === null || _this$f4 === void 0 ? void 0 : _this$f4.deliveryQueue);
    }
    return _createClass(X, [
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
              if (x1) {
                var _e9 = this.u;
                queueMicrotask(function () {
                  xi(_e9, function (t) {
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
            _this15 = this;
          return (
            (_this$q = this.q) !== null && _this$q !== void 0
              ? _this$q
              : (this.q = function (e, t, r) {
                  var _this15$w,
                    _this15$f2,
                    _this15$f2$onWillAddF,
                    _this15$f3,
                    _this15$f3$onDidAddFi,
                    _this15$f4,
                    _this15$f4$onDidAddLi;
                  if (_this15.g && _this15.z > Math.pow(_this15.g.threshold, 2)) {
                    var _this15$g$getMostFreq, _this15$f;
                    var l = '['
                      .concat(
                        _this15.g.name,
                        '] REFUSES to accept new listeners because it exceeded its threshold by far (',
                      )
                      .concat(_this15.z, ' vs ')
                      .concat(_this15.g.threshold, ')');
                    console.warn(l);
                    var c =
                        (_this15$g$getMostFreq = _this15.g.getMostFrequentStack()) !== null &&
                        _this15$g$getMostFreq !== void 0
                          ? _this15$g$getMostFreq
                          : ['UNKNOWN stack', -1],
                      u = new Ai(
                        ''
                          .concat(l, '. HINT: Stack shows most frequent listener (')
                          .concat(c[1], '-times)'),
                        c[0],
                      );
                    return (
                      (
                        ((_this15$f = _this15.f) === null || _this15$f === void 0
                          ? void 0
                          : _this15$f.onListenerError) || Me
                      )(u),
                      re.None
                    );
                  }
                  if (_this15.m) return re.None;
                  t && (e = e.bind(t));
                  var n = new at(e);
                  var i, o;
                  _this15.g &&
                    _this15.z >= Math.ceil(_this15.g.threshold * 0.2) &&
                    ((n.stack = $t.create()), (i = _this15.g.check(n.stack, _this15.z + 1))),
                    x1 && (n.stack = o !== null && o !== void 0 ? o : $t.create()),
                    _this15.u
                      ? _this15.u instanceof at
                        ? ((_this15$w = _this15.w) !== null && _this15$w !== void 0
                            ? _this15$w
                            : (_this15.w = new $i()),
                          (_this15.u = [_this15.u, n]))
                        : _this15.u.push(n)
                      : ((_this15$f2 = _this15.f) !== null &&
                          _this15$f2 !== void 0 &&
                          (_this15$f2$onWillAddF = _this15$f2.onWillAddFirstListener) !== null &&
                          _this15$f2$onWillAddF !== void 0 &&
                          _this15$f2$onWillAddF.call(_this15$f2, _this15),
                        (_this15.u = n),
                        (_this15$f3 = _this15.f) === null ||
                        _this15$f3 === void 0 ||
                        (_this15$f3$onDidAddFi = _this15$f3.onDidAddFirstListener) === null ||
                        _this15$f3$onDidAddFi === void 0
                          ? void 0
                          : _this15$f3$onDidAddFi.call(_this15$f3, _this15)),
                    (_this15$f4 = _this15.f) !== null &&
                      _this15$f4 !== void 0 &&
                      (_this15$f4$onDidAddLi = _this15$f4.onDidAddListener) !== null &&
                      _this15$f4$onDidAddLi !== void 0 &&
                      _this15$f4$onDidAddLi.call(_this15$f4, _this15),
                    _this15.z++;
                  var a = xe(function () {
                    var _lt, _i4;
                    (_lt = lt) !== null && _lt !== void 0 && _lt.unregister(a),
                      (_i4 = i) !== null && _i4 !== void 0 && _i4(),
                      _this15.A(n);
                  });
                  if ((r instanceof xt ? r.add(a) : Array.isArray(r) && r.push(a), lt)) {
                    var _c3$;
                    var _l2 = new Error().stack.split('\n').slice(2, 3).join('\n').trim(),
                      _c3 = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(_l2);
                    lt.register(
                      a,
                      (_c3$ = _c3 === null || _c3 === void 0 ? void 0 : _c3[2]) !== null &&
                        _c3$ !== void 0
                        ? _c3$
                        : _l2,
                      a,
                    );
                  }
                  return a;
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
          if (this.z * Si <= t.length) {
            var i = 0;
            for (var o = 0; o < t.length; o++)
              t[o]
                ? (t[i++] = t[o])
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
              : _this$f8.onListenerError) || Me;
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
            if (this.u instanceof at) this.B(this.u, e);
            else {
              var _t10 = this.w;
              _t10.enqueue(this, e, this.u.length), this.C(_t10);
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
  $i = /*#__PURE__*/ (function () {
    function $i() {
      _classCallCheck(this, $i);
      (this.i = -1), (this.end = 0);
    }
    return _createClass($i, [
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
  T1 = Object.freeze(function (e, t) {
    var r = setTimeout(e.bind(t), 0);
    return {
      dispose: function dispose() {
        clearTimeout(r);
      },
    };
  }),
  _1;
(function (e) {
  function t(r) {
    return r === e.None || r === e.Cancelled || r instanceof Ti
      ? !0
      : !r || _typeof(r) != 'object'
        ? !1
        : typeof r.isCancellationRequested == 'boolean' &&
          typeof r.onCancellationRequested == 'function';
  }
  (e.isCancellationToken = t),
    (e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: ot.None })),
    (e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: T1 }));
})(_1 || (_1 = {}));
var Ti = /*#__PURE__*/ (function () {
  function Ti() {
    _classCallCheck(this, Ti);
    (this.a = !1), (this.b = null);
  }
  return _createClass(Ti, [
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
        return this.a ? T1 : (this.b || (this.b = new X()), this.b.event);
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
function _i(e) {
  return e;
}
var Oi = /*#__PURE__*/ (function () {
    function Oi(e, t) {
      _classCallCheck(this, Oi);
      (this.a = void 0),
        (this.b = void 0),
        typeof e == 'function'
          ? ((this.c = e), (this.d = _i))
          : ((this.c = t), (this.d = e.getCacheKey));
    }
    return _createClass(Oi, [
      {
        key: 'get',
        value: function get(e) {
          var t = this.d(e);
          return this.b !== t && ((this.b = t), (this.a = this.c(e))), this.a;
        },
      },
    ]);
  })(),
  Tt = /*#__PURE__*/ (function () {
    function Tt(e) {
      _classCallCheck(this, Tt);
      (this.d = e), (this.a = !1);
    }
    return _createClass(Tt, [
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
function Pi(e) {
  return e.split(/\r\n|\r|\n/);
}
function Ri(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Mi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; r < n && i < o; r++, i++) {
    var c = e.charCodeAt(r),
      u = t.charCodeAt(i);
    if (c < u) return -1;
    if (c > u) return 1;
  }
  var a = n - r,
    l = o - i;
  return a < l ? -1 : a > l ? 1 : 0;
}
function O1(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; r < n && i < o; r++, i++) {
    var c = e.charCodeAt(r),
      u = t.charCodeAt(i);
    if (c === u) continue;
    if (c >= 128 || u >= 128) return Mi(e.toLowerCase(), t.toLowerCase(), r, n, i, o);
    P1(c) && (c -= 32), P1(u) && (u -= 32);
    var f = c - u;
    if (f !== 0) return f;
  }
  var a = n - r,
    l = o - i;
  return a < l ? -1 : a > l ? 1 : 0;
}
function P1(e) {
  return e >= 97 && e <= 122;
}
function R1(e) {
  return e >= 65 && e <= 90;
}
function Di(e, t) {
  return e.length === t.length && O1(e, t) === 0;
}
function Fi(e, t) {
  var r = t.length;
  return t.length > e.length ? !1 : O1(e, t, 0, r) === 0;
}
var $0 = '\uFEFF',
  M1;
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
})(M1 || (M1 = {}));
var T0 =
  ((_ze = /*#__PURE__*/ (function () {
    function ze() {
      _classCallCheck(this, ze);
      this.d = ji();
    }
    return _createClass(
      ze,
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
            return ze.c || (ze.c = new ze()), ze.c;
          },
        },
      ],
    );
  })()),
  (_ze.c = null),
  _ze);
function ji() {
  return JSON.parse(
    '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
  );
}
var D1;
(function (e) {
  (e[(e.zwj = 8205)] = 'zwj'),
    (e[(e.emojiVariantSelector = 65039)] = 'emojiVariantSelector'),
    (e[(e.enclosingKeyCap = 8419)] = 'enclosingKeyCap');
})(D1 || (D1 = {}));
var _0 =
    ((_qe = /*#__PURE__*/ (function () {
      function qe(t) {
        _classCallCheck(this, qe);
        this.f = t;
      }
      return _createClass(
        qe,
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
              return qe.d.get(Array.from(t));
            },
          },
          {
            key: 'getLocales',
            value: function getLocales() {
              return qe.e.value;
            },
          },
        ],
      );
    })()),
    (_qe.c = new Tt(function () {
      return JSON.parse(
        '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
      );
    })),
    (_qe.d = new Oi({ getCacheKey: JSON.stringify }, function (t) {
      function r(f) {
        var h = new Map();
        for (var g = 0; g < f.length; g += 2) h.set(f[g], f[g + 1]);
        return h;
      }
      function n(f, h) {
        var g = new Map(f);
        var _iterator28 = _createForOfIteratorHelper(h),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
            var _step28$value = _slicedToArray(_step28.value, 2),
              v = _step28$value[0],
              k = _step28$value[1];
            g.set(v, k);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
        return g;
      }
      function i(f, h) {
        if (!f) return h;
        var g = new Map();
        var _iterator29 = _createForOfIteratorHelper(f),
          _step29;
        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
            var _step29$value = _slicedToArray(_step29.value, 2),
              v = _step29$value[0],
              k = _step29$value[1];
            h.has(v) && g.set(v, k);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
        return g;
      }
      var o = _qe.c.value;
      var a = t.filter(function (f) {
        return !f.startsWith('_') && f in o;
      });
      a.length === 0 && (a = ['_default']);
      var l;
      var _iterator30 = _createForOfIteratorHelper(a),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
          var f = _step30.value;
          var h = r(o[f]);
          l = i(l, h);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
      var c = r(o._common),
        u = n(c, l);
      return new _qe(u);
    })),
    (_qe.e = new Tt(function () {
      return Object.keys(_qe.c.value).filter(function (t) {
        return !t.startsWith('_');
      });
    })),
    _qe),
  O0 =
    ((_Be = /*#__PURE__*/ (function () {
      function Be() {
        _classCallCheck(this, Be);
      }
      return _createClass(Be, null, [
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
            return this.d || (this.d = new Set(Be.c())), this.d;
          },
        },
        {
          key: 'isInvisibleCharacter',
          value: function isInvisibleCharacter(t) {
            return Be.e().has(t);
          },
        },
        {
          key: 'containsInvisibleCharacter',
          value: function containsInvisibleCharacter(t) {
            for (var r = 0; r < t.length; r++) {
              var n = t.codePointAt(r);
              if (typeof n == 'number' && Be.isInvisibleCharacter(n)) return !0;
            }
            return !1;
          },
        },
        {
          key: 'codePoints',
          get: function get() {
            return Be.e();
          },
        },
      ]);
    })()),
    (_Be.d = void 0),
    _Be);
function Ii(e) {
  return typeof e == 'string';
}
function fe(e) {
  return e === 47 || e === 92;
}
function F1(e) {
  return e.replace(/[\\/]/g, x.sep);
}
function Ui(e) {
  return e.indexOf('/') === -1 && (e = F1(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = '/' + e), e;
}
function j1(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x.sep;
  if (!e) return '';
  var r = e.length,
    n = e.charCodeAt(0);
  if (fe(n)) {
    if (fe(e.charCodeAt(1)) && !fe(e.charCodeAt(2))) {
      var o = 3;
      var a = o;
      for (; o < r && !fe(e.charCodeAt(o)); o++);
      if (a !== o && !fe(e.charCodeAt(o + 1))) {
        for (o += 1; o < r; o++)
          if (fe(e.charCodeAt(o))) return e.slice(0, o + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (zi(n) && e.charCodeAt(1) === 58)
    return fe(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  var i = e.indexOf('://');
  if (i !== -1) {
    for (i += 3; i < r; i++) if (fe(e.charCodeAt(i))) return e.slice(0, i + 1);
  }
  return '';
}
function I1(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ke;
  if (e === t) return !0;
  if (!e || !t || t.length > e.length) return !1;
  if (r) {
    if (!Fi(e, t)) return !1;
    if (t.length === e.length) return !0;
    var o = t.length;
    return t.charAt(t.length - 1) === n && o--, e.charAt(o) === n;
  }
  return t.charAt(t.length - 1) !== n && (t += n), e.indexOf(t) === 0;
}
function zi(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
var D;
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
})(D || (D = {}));
var qi = 'tkn',
  Bi = /*#__PURE__*/ (function () {
    function Bi() {
      _classCallCheck(this, Bi);
      (this.a = Object.create(null)),
        (this.b = Object.create(null)),
        (this.c = Object.create(null)),
        (this.d = 'http'),
        (this.e = null),
        (this.f = '/');
    }
    return _createClass(Bi, [
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
          this.f = Vi(e, t);
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
          return x.join(this.f, D.vscodeRemoteResource);
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
            } catch (a) {
              return Me(a), e;
            }
          var t = e.authority;
          var r = this.a[t];
          r && r.indexOf(':') !== -1 && r.indexOf('[') === -1 && (r = '['.concat(r, ']'));
          var n = this.b[t],
            i = this.c[t];
          var o = 'path='.concat(encodeURIComponent(e.path));
          return (
            typeof i == 'string' && (o += '&'.concat(qi, '=').concat(encodeURIComponent(i))),
            z.from({
              scheme: i1 ? this.d : D.vscodeRemoteResource,
              authority: ''.concat(r, ':').concat(n),
              path: this.g,
              query: o,
            })
          );
        },
      },
    ]);
  })(),
  Wi = new Bi();
function Vi(e, t) {
  var _e$quality, _e$commit;
  return x.join(
    t !== null && t !== void 0 ? t : '/',
    ''
      .concat((_e$quality = e.quality) !== null && _e$quality !== void 0 ? _e$quality : 'oss', '-')
      .concat((_e$commit = e.commit) !== null && _e$commit !== void 0 ? _e$commit : 'dev'),
  );
}
var Gi = 'vs/../../node_modules',
  Hi = 'vs/../../node_modules.asar',
  U1 = 'vscode-app',
  Zi =
    ((_gt = /*#__PURE__*/ (function () {
      function gt() {
        _classCallCheck(this, gt);
      }
      return _createClass(gt, [
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
            return t.scheme === D.vscodeRemote
              ? Wi.rewrite(t)
              : t.scheme === D.file &&
                  (_n || Pn === ''.concat(D.vscodeFileResource, '://').concat(gt.a))
                ? t['with']({
                    scheme: D.vscodeFileResource,
                    authority: t.authority || gt.a,
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
            return t.scheme === D.vscodeFileResource
              ? t['with']({
                  scheme: D.file,
                  authority: t.authority !== gt.a ? t.authority : null,
                  query: null,
                  fragment: null,
                })
              : t;
          },
        },
        {
          key: 'b',
          value: function b(t, r) {
            if (z.isUri(t)) return t;
            if (globalThis._VSCODE_FILE_ROOT) {
              var n = globalThis._VSCODE_FILE_ROOT;
              if (/^\w[\w\d+.-]*:\/\//.test(n)) return z.joinPath(z.parse(n, !0), t);
              var i = Hn(n, t);
              return z.file(i);
            }
            return z.parse(r.toUrl(t));
          },
        },
      ]);
    })()),
    (_gt.a = U1),
    _gt),
  z1 = new Zi(),
  q1;
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
  var r = 'vscode-coi';
  function n(o) {
    var _a;
    var a;
    typeof o == 'string'
      ? (a = new URL(o).searchParams)
      : o instanceof URL
        ? (a = o.searchParams)
        : z.isUri(o) && (a = new URL(o.toString(!0)).searchParams);
    var l = (_a = a) === null || _a === void 0 ? void 0 : _a.get(r);
    if (l) return t.get(l);
  }
  e.getHeadersFromQuery = n;
  function i(o, a, l) {
    if (!globalThis.crossOriginIsolated) return;
    var c = a && l ? '3' : l ? '2' : '1';
    o instanceof URLSearchParams ? o.set(r, c) : (o[r] = c);
  }
  e.addSearchParam = i;
})(q1 || (q1 = {}));
function oe(e) {
  return et(e, !0);
}
var _t = /*#__PURE__*/ (function () {
    function _t(e) {
      _classCallCheck(this, _t);
      this.a = e;
    }
    return _createClass(_t, [
      {
        key: 'compare',
        value: function compare(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return e === t ? 0 : Ri(this.getComparisonKey(e, r), this.getComparisonKey(t, r));
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
            if (e.scheme === D.file)
              return (
                I1(oe(e), oe(t), this.a(e)) &&
                e.query === t.query &&
                (r || e.fragment === t.fragment)
              );
            if (B1(e.authority, t.authority))
              return (
                I1(e.path, t.path, this.a(e), '/') &&
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
            var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1;
            _key7 < _len7;
            _key7++
          ) {
            t[_key7 - 1] = arguments[_key7];
          }
          return z.joinPath.apply(z, [e].concat(t));
        },
      },
      {
        key: 'basenameOrAuthority',
        value: function basenameOrAuthority(e) {
          return Ji(e) || e.authority;
        },
      },
      {
        key: 'basename',
        value: function basename(e) {
          return x.basename(e.path);
        },
      },
      {
        key: 'extname',
        value: function extname(e) {
          return x.extname(e.path);
        },
      },
      {
        key: 'dirname',
        value: function dirname(e) {
          if (e.path.length === 0) return e;
          var t;
          return (
            e.scheme === D.file
              ? (t = z.file(Jn(oe(e))).path)
              : ((t = x.dirname(e.path)),
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
            e.scheme === D.file ? (t = z.file(Gn(oe(e))).path) : (t = x.normalize(e.path)),
            e['with']({ path: t })
          );
        },
      },
      {
        key: 'relativePath',
        value: function relativePath(e, t) {
          if (e.scheme !== t.scheme || !B1(e.authority, t.authority)) return;
          if (e.scheme === D.file) {
            var i = Yn(oe(e), oe(t));
            return Ae ? F1(i) : i;
          }
          var r = e.path || '/';
          var n = t.path || '/';
          if (this.a(e)) {
            var _i5 = 0;
            for (
              var o = Math.min(r.length, n.length);
              _i5 < o &&
              !(
                r.charCodeAt(_i5) !== n.charCodeAt(_i5) &&
                r.charAt(_i5).toLowerCase() !== n.charAt(_i5).toLowerCase()
              );
              _i5++
            );
            r = n.substr(0, _i5) + r.substr(_i5);
          }
          return x.relative(r, n);
        },
      },
      {
        key: 'resolvePath',
        value: function resolvePath(e, t) {
          if (e.scheme === D.file) {
            var r = z.file(Zn(oe(e), t));
            return e['with']({ authority: r.authority, path: r.path });
          }
          return (t = Ui(t)), e['with']({ path: x.resolve(e.path, t) });
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
          return e === t || (e !== void 0 && t !== void 0 && Di(e, t));
        },
      },
      {
        key: 'hasTrailingPathSeparator',
        value: function hasTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ke;
          if (e.scheme === D.file) {
            var r = oe(e);
            return r.length > j1(r).length && r[r.length - 1] === t;
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
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ke;
          return W1(e, t) ? e['with']({ path: e.path.substr(0, e.path.length - 1) }) : e;
        },
      },
      {
        key: 'addTrailingPathSeparator',
        value: function addTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ke;
          var r = !1;
          if (e.scheme === D.file) {
            var n = oe(e);
            r = n !== void 0 && n.length === j1(n).length && n[n.length - 1] === t;
          } else {
            t = '/';
            var _n6 = e.path;
            r = _n6.length === 1 && _n6.charCodeAt(_n6.length - 1) === 47;
          }
          return !r && !W1(e, t) ? e['with']({ path: e.path + '/' }) : e;
        },
      },
    ]);
  })(),
  C = new _t(function () {
    return !1;
  }),
  P0 = new _t(function (e) {
    return e.scheme === D.file ? !Tn : !0;
  }),
  R0 = new _t(function (e) {
    return !0;
  }),
  Yi = C.isEqual.bind(C),
  M0 = C.isEqualOrParent.bind(C),
  D0 = C.getComparisonKey.bind(C),
  F0 = C.basenameOrAuthority.bind(C),
  Ji = C.basename.bind(C),
  j0 = C.extname.bind(C),
  I0 = C.dirname.bind(C),
  U0 = C.joinPath.bind(C),
  z0 = C.normalizePath.bind(C),
  q0 = C.relativePath.bind(C),
  B0 = C.resolvePath.bind(C),
  W0 = C.isAbsolutePath.bind(C),
  B1 = C.isEqualAuthority.bind(C),
  W1 = C.hasTrailingPathSeparator.bind(C),
  V0 = C.removeTrailingPathSeparator.bind(C),
  G0 = C.addTrailingPathSeparator.bind(C),
  V1;
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
      .forEach(function (a) {
        var _a$split = a.split(':'),
          _a$split2 = _slicedToArray(_a$split, 2),
          l = _a$split2[0],
          c = _a$split2[1];
        l && c && n.set(l, c);
      });
    var o = r.path.substring(0, r.path.indexOf(';'));
    return o && n.set(e.META_DATA_MIME, o), n;
  }
  e.parseMetaData = t;
})(V1 || (V1 = {}));
var Xi = /*#__PURE__*/ (function () {
    function Xi() {
      _classCallCheck(this, Xi);
      this.a = Object.create(null);
    }
    return _createClass(Xi, [
      {
        key: 'reset',
        value: function reset() {
          this.a = Object.create(null);
        },
      },
      {
        key: 'register',
        value: function register(e) {
          if (this.a[e.scopeName]) {
            var _t11 = this.a[e.scopeName];
            Yi(_t11.location, e.location) ||
              console.warn(
                'Overwriting grammar scope name to file mapping for scope '
                  .concat(e.scopeName, '.\nOld grammar file: ')
                  .concat(_t11.location.toString(), '.\nNew grammar file: ')
                  .concat(e.location.toString()),
              );
          }
          this.a[e.scopeName] = e;
        },
      },
      {
        key: 'getGrammarDefinition',
        value: function getGrammarDefinition(e) {
          return this.a[e] || null;
        },
      },
    ]);
  })(),
  Ot = 'No TM Grammar registered for this language.',
  Qi = /*#__PURE__*/ (function (_re) {
    function Qi(e, t, r, n) {
      var _this16;
      _classCallCheck(this, Qi);
      (_this16 = _callSuper(this, Qi)),
        (_this16.a = e),
        (_this16.b = r.INITIAL),
        (_this16.c = new Xi()),
        (_this16.f = {}),
        (_this16.g = {}),
        (_this16.h = new Map()),
        (_this16.j = _this16.D(
          new r.Registry({
            onigLib: n,
            loadGrammar: (function () {
              var _loadGrammar = _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(i) {
                  var o, a, l;
                  return _regeneratorRuntime().wrap(
                    function _callee3$(_context13) {
                      while (1)
                        switch ((_context13.prev = _context13.next)) {
                          case 0:
                            o = _this16.c.getGrammarDefinition(i);
                            if (o) {
                              _context13.next = 3;
                              break;
                            }
                            return _context13.abrupt(
                              'return',
                              (_this16.a.logTrace('No grammar found for scope '.concat(i)), null),
                            );
                          case 3:
                            a = o.location;
                            _context13.prev = 4;
                            _context13.next = 7;
                            return _this16.a.readFile(a);
                          case 7:
                            l = _context13.sent;
                            return _context13.abrupt('return', r.parseRawGrammar(l, a.path));
                          case 11:
                            _context13.prev = 11;
                            _context13.t0 = _context13['catch'](4);
                            return _context13.abrupt(
                              'return',
                              (_this16.a.logError(
                                'Unable to load and parse grammar for scope '
                                  .concat(i, ' from ')
                                  .concat(a),
                                _context13.t0,
                              ),
                              null),
                            );
                          case 14:
                          case 'end':
                            return _context13.stop();
                        }
                    },
                    _callee3,
                    null,
                    [[4, 11]],
                  );
                }),
              );
              function loadGrammar(_x2) {
                return _loadGrammar.apply(this, arguments);
              }
              return loadGrammar;
            })(),
            getInjections: function getInjections(i) {
              var o = i.split('.');
              var a = [];
              for (var l = 1; l <= o.length; l++) {
                var c = o.slice(0, l).join('.');
                a = [].concat(_toConsumableArray(a), _toConsumableArray(_this16.f[c] || []));
              }
              return a;
            },
          }),
        ));
      var _iterator31 = _createForOfIteratorHelper(t),
        _step31;
      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
          var i = _step31.value;
          if ((_this16.c.register(i), i.injectTo)) {
            var _iterator32 = _createForOfIteratorHelper(i.injectTo),
              _step32;
            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
                var _o2 = _step32.value;
                var _a2 = _this16.f[_o2];
                _a2 || (_this16.f[_o2] = _a2 = []), _a2.push(i.scopeName);
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }
            if (i.embeddedLanguages) {
              var _iterator33 = _createForOfIteratorHelper(i.injectTo),
                _step33;
              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
                  var o = _step33.value;
                  var a = _this16.g[o];
                  a || (_this16.g[o] = a = []), a.push(i.embeddedLanguages);
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }
            }
          }
          i.language && _this16.h.set(i.language, i.scopeName);
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }
      return _this16;
    }
    _inherits(Qi, _re);
    return _createClass(Qi, [
      {
        key: 'has',
        value: function has(e) {
          return this.h.has(e);
        },
      },
      {
        key: 'setTheme',
        value: function setTheme(e, t) {
          this.j.setTheme(e, t);
        },
      },
      {
        key: 'getColorMap',
        value: function getColorMap() {
          return this.j.getColorMap();
        },
      },
      {
        key: 'createGrammar',
        value: (function () {
          var _createGrammar = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(e, t) {
              var r, n, i, l, _iterator34, _step34, c, _i6, _Object$keys, u, o, a;
              return _regeneratorRuntime().wrap(
                function _callee4$(_context14) {
                  while (1)
                    switch ((_context14.prev = _context14.next)) {
                      case 0:
                        r = this.h.get(e);
                        if (!(typeof r != 'string')) {
                          _context14.next = 3;
                          break;
                        }
                        throw new Error(Ot);
                      case 3:
                        n = this.c.getGrammarDefinition(r);
                        if (n) {
                          _context14.next = 6;
                          break;
                        }
                        throw new Error(Ot);
                      case 6:
                        i = n.embeddedLanguages;
                        if (this.g[r]) {
                          l = this.g[r];
                          _iterator34 = _createForOfIteratorHelper(l);
                          try {
                            for (_iterator34.s(); !(_step34 = _iterator34.n()).done; ) {
                              c = _step34.value;
                              for (
                                _i6 = 0, _Object$keys = Object.keys(c);
                                _i6 < _Object$keys.length;
                                _i6++
                              ) {
                                u = _Object$keys[_i6];
                                i[u] = c[u];
                              }
                            }
                          } catch (err) {
                            _iterator34.e(err);
                          } finally {
                            _iterator34.f();
                          }
                        }
                        o = Object.keys(i).length > 0;
                        _context14.prev = 9;
                        _context14.next = 12;
                        return this.j.loadGrammarWithConfiguration(r, t, {
                          embeddedLanguages: i,
                          tokenTypes: n.tokenTypes,
                          balancedBracketSelectors: n.balancedBracketSelectors,
                          unbalancedBracketSelectors: n.unbalancedBracketSelectors,
                        });
                      case 12:
                        a = _context14.sent;
                        _context14.next = 18;
                        break;
                      case 15:
                        _context14.prev = 15;
                        _context14.t0 = _context14['catch'](9);
                        throw _context14.t0.message &&
                          _context14.t0.message.startsWith('No grammar provided for')
                          ? new Error(Ot)
                          : _context14.t0;
                      case 18:
                        return _context14.abrupt('return', {
                          languageId: e,
                          grammar: a,
                          initialState: this.b,
                          containsEmbeddedLanguages: o,
                          sourceExtensionId: n.sourceExtensionId,
                        });
                      case 19:
                      case 'end':
                        return _context14.stop();
                    }
                },
                _callee4,
                this,
                [[9, 15]],
              );
            }),
          );
          function createGrammar(_x3, _x4) {
            return _createGrammar.apply(this, arguments);
          }
          return createGrammar;
        })(),
      },
    ]);
  })(re),
  Ki = (function () {
    if (
      (typeof crypto === 'undefined' ? 'undefined' : _typeof(crypto)) == 'object' &&
      typeof crypto.randomUUID == 'function'
    )
      return crypto.randomUUID.bind(crypto);
    var e;
    (typeof crypto === 'undefined' ? 'undefined' : _typeof(crypto)) == 'object' &&
    typeof crypto.getRandomValues == 'function'
      ? (e = crypto.getRandomValues.bind(crypto))
      : (e = function e(n) {
          for (var i = 0; i < n.length; i++) n[i] = Math.floor(Math.random() * 256);
          return n;
        });
    var t = new Uint8Array(16),
      r = [];
    for (var n = 0; n < 256; n++) r.push(n.toString(16).padStart(2, '0'));
    return function () {
      e(t), (t[6] = (t[6] & 15) | 64), (t[8] = (t[8] & 63) | 128);
      var i = 0,
        o = '';
      return (
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += '-'),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += '-'),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += '-'),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += '-'),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        (o += r[t[i++]]),
        o
      );
    };
  })(),
  es = !1,
  ts = /*#__PURE__*/ _createClass(function ts(e, t, r) {
    _classCallCheck(this, ts);
    (this.id = e), (this.dependencies = t), (this.callback = r);
  }),
  ge;
(function (e) {
  (e[(e.Uninitialized = 1)] = 'Uninitialized'),
    (e[(e.InitializedInternal = 2)] = 'InitializedInternal'),
    (e[(e.InitializedExternal = 3)] = 'InitializedExternal');
})(ge || (ge = {}));
var rs =
    ((_ln = /*#__PURE__*/ (function () {
      function ln() {
        _classCallCheck(this, ln);
        (this.a =
          (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' &&
          self.constructor &&
          self.constructor.name === 'DedicatedWorkerGlobalScope'),
          (this.b =
            (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object'),
          (this.c = []),
          (this.d = ge.Uninitialized);
      }
      return _createClass(ln, [
        {
          key: 'g',
          value: function g() {
            var _this17 = this,
              _globalThis$_VSCODE_W,
              _window$trustedTypes,
              _globalThis$_VSCODE_W2,
              _globalThis$trustedTy;
            if (this.d === ge.Uninitialized) {
              if (globalThis.define) {
                this.d = ge.InitializedExternal;
                return;
              }
            } else return;
            (this.d = ge.InitializedInternal),
              (globalThis.define = function (t, r, n) {
                typeof t != 'string' && ((n = r), (r = t), (t = null)),
                  (_typeof(r) != 'object' || !Array.isArray(r)) && ((n = r), (r = null)),
                  _this17.c.push(new ts(t, r, n));
              }),
              (globalThis.define.amd = !0),
              this.b
                ? (this.f =
                    (_globalThis$_VSCODE_W = globalThis._VSCODE_WEB_PACKAGE_TTP) !== null &&
                    _globalThis$_VSCODE_W !== void 0
                      ? _globalThis$_VSCODE_W
                      : (_window$trustedTypes = window.trustedTypes) === null ||
                          _window$trustedTypes === void 0
                        ? void 0
                        : _window$trustedTypes.createPolicy('amdLoader', {
                            createScriptURL: function createScriptURL(t) {
                              if (
                                t.startsWith(window.location.origin) ||
                                t.startsWith(''.concat(D.vscodeFileResource, '://').concat(U1))
                              )
                                return t;
                              throw new Error(
                                '[trusted_script_src] Invalid script url: '.concat(t),
                              );
                            },
                          }))
                : this.a &&
                  (this.f =
                    (_globalThis$_VSCODE_W2 = globalThis._VSCODE_WEB_PACKAGE_TTP) !== null &&
                    _globalThis$_VSCODE_W2 !== void 0
                      ? _globalThis$_VSCODE_W2
                      : (_globalThis$trustedTy = globalThis.trustedTypes) === null ||
                          _globalThis$trustedTy === void 0
                        ? void 0
                        : _globalThis$trustedTy.createPolicy('amdLoader', {
                            createScriptURL: function createScriptURL(t) {
                              return t;
                            },
                          }));
          },
        },
        {
          key: 'load',
          value: (function () {
            var _load = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(t) {
                var _r$callback;
                var r, n, i, o, _iterator35, _step35, a;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context15) {
                    while (1)
                      switch ((_context15.prev = _context15.next)) {
                        case 0:
                          if (!(this.g(), this.d === ge.InitializedExternal)) {
                            _context15.next = 2;
                            break;
                          }
                          return _context15.abrupt(
                            'return',
                            new Promise(function (a) {
                              var l = Ki();
                              globalThis.define(l, [t], function (c) {
                                a(c);
                              });
                            }),
                          );
                        case 2:
                          _context15.next = 4;
                          return this.a ? this.i(t) : this.b ? this.h(t) : this.j(t);
                        case 4:
                          r = _context15.sent;
                          if (r) {
                            _context15.next = 8;
                            break;
                          }
                          console.warn('Did not receive a define call from script '.concat(t));
                          return _context15.abrupt('return');
                        case 8:
                          (n = {}), (i = []), (o = []);
                          if (Array.isArray(r.dependencies)) {
                            _iterator35 = _createForOfIteratorHelper(r.dependencies);
                            try {
                              for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
                                a = _step35.value;
                                a === 'exports' ? i.push(n) : o.push(a);
                              }
                            } catch (err) {
                              _iterator35.e(err);
                            } finally {
                              _iterator35.f();
                            }
                          }
                          if (!(o.length > 0)) {
                            _context15.next = 12;
                            break;
                          }
                          throw new Error(
                            'Cannot resolve dependencies for script '
                              .concat(t, '. The dependencies are: ')
                              .concat(o.join(', ')),
                          );
                        case 12:
                          return _context15.abrupt(
                            'return',
                            typeof r.callback == 'function'
                              ? (_r$callback = r.callback.apply(r, i)) !== null &&
                                _r$callback !== void 0
                                ? _r$callback
                                : n
                              : r.callback,
                          );
                        case 13:
                        case 'end':
                          return _context15.stop();
                      }
                  },
                  _callee5,
                  this,
                );
              }),
            );
            function load(_x5) {
              return _load.apply(this, arguments);
            }
            return load;
          })(),
        },
        {
          key: 'h',
          value: function h(t) {
            var _this18 = this;
            return new Promise(function (r, n) {
              var i = document.createElement('script');
              i.setAttribute('async', 'async'), i.setAttribute('type', 'text/javascript');
              var o = function o() {
                  i.removeEventListener('load', a), i.removeEventListener('error', l);
                },
                a = function a(c) {
                  o(), r(_this18.c.pop());
                },
                l = function l(c) {
                  o(), n(c);
                };
              i.addEventListener('load', a),
                i.addEventListener('error', l),
                _this18.f && (t = _this18.f.createScriptURL(t)),
                i.setAttribute('src', t),
                window.document.getElementsByTagName('head')[0].appendChild(i);
            });
          },
        },
        {
          key: 'i',
          value: (function () {
            var _i7 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6(t) {
                return _regeneratorRuntime().wrap(
                  function _callee6$(_context16) {
                    while (1)
                      switch ((_context16.prev = _context16.next)) {
                        case 0:
                          this.f && (t = this.f.createScriptURL(t));
                          _context16.next = 3;
                          return (function (specifier) {
                            return new Promise(function (r) {
                              return r(''.concat(specifier));
                            }).then(function (s) {
                              return _interopRequireWildcard(require(s));
                            });
                          })(t);
                        case 3:
                          return _context16.abrupt('return', this.c.pop());
                        case 4:
                        case 'end':
                          return _context16.stop();
                      }
                  },
                  _callee6,
                  this,
                );
              }),
            );
            function i(_x6) {
              return _i7.apply(this, arguments);
            }
            return i;
          })(),
        },
        {
          key: 'j',
          value: (function () {
            var _j = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7(t) {
                var r, n, i, o, a, l;
                return _regeneratorRuntime().wrap(
                  function _callee7$(_context17) {
                    while (1)
                      switch ((_context17.prev = _context17.next)) {
                        case 0:
                          _context17.prev = 0;
                          _context17.next = 3;
                          return Promise.resolve().then(function () {
                            return _interopRequireWildcard(require('fs'));
                          });
                        case 3:
                          r = _context17.sent['default'];
                          _context17.next = 6;
                          return Promise.resolve().then(function () {
                            return _interopRequireWildcard(require('vm'));
                          });
                        case 6:
                          n = _context17.sent['default'];
                          _context17.next = 9;
                          return Promise.resolve().then(function () {
                            return _interopRequireWildcard(require('module'));
                          });
                        case 9:
                          i = _context17.sent['default'];
                          o = z.parse(t).fsPath;
                          a = r.readFileSync(o).toString();
                          l = i.wrap(a.replace(/^#!.*/, ''));
                          return _context17.abrupt(
                            'return',
                            (new n.Script(l).runInThisContext().apply(), this.c.pop()),
                          );
                        case 16:
                          _context17.prev = 16;
                          _context17.t0 = _context17['catch'](0);
                          throw _context17.t0;
                        case 19:
                        case 'end':
                          return _context17.stop();
                      }
                  },
                  _callee7,
                  this,
                  [[0, 16]],
                );
              }),
            );
            function j(_x7) {
              return _j.apply(this, arguments);
            }
            return j;
          })(),
        },
      ]);
    })()),
    (_ln.INSTANCE = new _ln()),
    _ln),
  Pt = new Map();
function Rt(_x8, _x9, _x0) {
  return _Rt.apply(this, arguments);
}
function _Rt() {
  _Rt = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee30(e, t, r) {
      var _ref20, _globalThis$_VSCODE_P, _globalThis$vscode;
      var n, i, c, o;
      return _regeneratorRuntime().wrap(function _callee30$(_context42) {
        while (1)
          switch ((_context42.prev = _context42.next)) {
            case 0:
              r === void 0 &&
                (r = !!(
                  (_ref20 =
                    (_globalThis$_VSCODE_P = globalThis._VSCODE_PRODUCT_JSON) !== null &&
                    _globalThis$_VSCODE_P !== void 0
                      ? _globalThis$_VSCODE_P
                      : (_globalThis$vscode = globalThis.vscode) === null ||
                          _globalThis$vscode === void 0 ||
                          (_globalThis$vscode = _globalThis$vscode.context) === null ||
                          _globalThis$vscode === void 0 ||
                          (_globalThis$vscode = _globalThis$vscode.configuration()) === null ||
                          _globalThis$vscode === void 0
                        ? void 0
                        : _globalThis$vscode.product) !== null &&
                  _ref20 !== void 0 &&
                  _ref20.commit
                ));
              n = t ? ''.concat(e, '/').concat(t) : e;
              if (!Pt.has(n)) {
                _context42.next = 4;
                break;
              }
              return _context42.abrupt('return', Pt.get(n));
            case 4:
              if (/^\w[\w\d+.-]*:\/\//.test(n)) i = n;
              else {
                c = ''.concat(es && r && !i1 ? Hi : Gi, '/').concat(n);
                i = z1.asBrowserUri(c).toString(!0);
              }
              o = rs.INSTANCE.load(i);
              return _context42.abrupt('return', (Pt.set(n, o), o));
            case 7:
            case 'end':
              return _context42.stop();
          }
      }, _callee30);
    }),
  );
  return _Rt.apply(this, arguments);
}
var H0 = Symbol('MicrotaskDelay'),
  ns = /*#__PURE__*/ (function () {
    function ns(e, t) {
      _classCallCheck(this, ns);
      (this.b = -1), (this.a = e), (this.d = t), (this.f = this.g.bind(this));
    }
    return _createClass(ns, [
      {
        key: 'dispose',
        value: function dispose() {
          this.cancel(), (this.a = null);
        },
      },
      {
        key: 'cancel',
        value: function cancel() {
          this.isScheduled() && (clearTimeout(this.b), (this.b = -1));
        },
      },
      {
        key: 'schedule',
        value: function schedule() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.d;
          this.cancel(), (this.b = setTimeout(this.f, e));
        },
      },
      {
        key: 'delay',
        get: function get() {
          return this.d;
        },
        set: function set(e) {
          this.d = e;
        },
      },
      {
        key: 'isScheduled',
        value: function isScheduled() {
          return this.b !== -1;
        },
      },
      {
        key: 'flush',
        value: function flush() {
          this.isScheduled() && (this.cancel(), this.h());
        },
      },
      {
        key: 'g',
        value: function g() {
          (this.b = -1), this.a && this.h();
        },
      },
      {
        key: 'h',
        value: function h() {
          var _this$a;
          (_this$a = this.a) === null || _this$a === void 0 || _this$a.call(this);
        },
      },
    ]);
  })(),
  is,
  Mt;
(function () {
  typeof globalThis.requestIdleCallback != 'function' ||
  typeof globalThis.cancelIdleCallback != 'function'
    ? (Mt = function Mt(e, t, r) {
        o1(function () {
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
    : (Mt = function Mt(e, t, r) {
        var n = e.requestIdleCallback(t, typeof r == 'number' ? { timeout: r } : void 0);
        var i = !1;
        return {
          dispose: function dispose() {
            i || ((i = !0), e.cancelIdleCallback(n));
          },
        };
      }),
    (is = function is(e, t) {
      return Mt(globalThis, e, t);
    });
})();
var G1;
(function (e) {
  (e[(e.Resolved = 0)] = 'Resolved'), (e[(e.Rejected = 1)] = 'Rejected');
})(G1 || (G1 = {}));
var H1;
(function (e) {
  function t(_x1) {
    return _t12.apply(this, arguments);
  }
  function _t12() {
    _t12 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9(n) {
        var i, o;
        return _regeneratorRuntime().wrap(function _callee9$(_context19) {
          while (1)
            switch ((_context19.prev = _context19.next)) {
              case 0:
                _context19.next = 2;
                return Promise.all(
                  n.map(function (a) {
                    return a.then(
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
                o = _context19.sent;
                if (!(_typeof(i) < 'u')) {
                  _context19.next = 5;
                  break;
                }
                throw i;
              case 5:
                return _context19.abrupt('return', o);
              case 6:
              case 'end':
                return _context19.stop();
            }
        }, _callee9);
      }),
    );
    return _t12.apply(this, arguments);
  }
  e.settled = t;
  function r(n) {
    return new Promise(
      /*#__PURE__*/ (function () {
        var _ref9 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8(i, o) {
            return _regeneratorRuntime().wrap(
              function _callee8$(_context18) {
                while (1)
                  switch ((_context18.prev = _context18.next)) {
                    case 0:
                      _context18.prev = 0;
                      _context18.next = 3;
                      return n(i, o);
                    case 3:
                      _context18.next = 8;
                      break;
                    case 5:
                      _context18.prev = 5;
                      _context18.t0 = _context18['catch'](0);
                      o(_context18.t0);
                    case 8:
                    case 'end':
                      return _context18.stop();
                  }
              },
              _callee8,
              null,
              [[0, 5]],
            );
          }),
        );
        return function (_x10, _x11) {
          return _ref9.apply(this, arguments);
        };
      })(),
    );
  }
  e.withAsyncBody = r;
})(H1 || (H1 = {}));
var Z1;
(function (e) {
  (e[(e.Initial = 0)] = 'Initial'),
    (e[(e.DoneOK = 1)] = 'DoneOK'),
    (e[(e.DoneError = 2)] = 'DoneError');
})(Z1 || (Z1 = {}));
var Z0 =
    ((_Y = /*#__PURE__*/ (function () {
      function Y(t, r) {
        var _this19 = this;
        _classCallCheck(this, Y);
        (this.a = 0),
          (this.b = []),
          (this.d = null),
          (this.f = r),
          (this.g = new X()),
          queueMicrotask(
            /*#__PURE__*/ _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee0() {
                var n;
                return _regeneratorRuntime().wrap(
                  function _callee0$(_context20) {
                    while (1)
                      switch ((_context20.prev = _context20.next)) {
                        case 0:
                          n = {
                            emitOne: function emitOne(i) {
                              return _this19.h(i);
                            },
                            emitMany: function emitMany(i) {
                              return _this19.j(i);
                            },
                            reject: function reject(i) {
                              return _this19.l(i);
                            },
                          };
                          _context20.prev = 1;
                          _context20.next = 4;
                          return Promise.resolve(t(n));
                        case 4:
                          _this19.k();
                          _context20.next = 10;
                          break;
                        case 7:
                          _context20.prev = 7;
                          _context20.t0 = _context20['catch'](1);
                          _this19.l(_context20.t0);
                        case 10:
                          _context20.prev = 10;
                          (n.emitOne = void 0), (n.emitMany = void 0), (n.reject = void 0);
                          return _context20.finish(10);
                        case 13:
                        case 'end':
                          return _context20.stop();
                      }
                  },
                  _callee0,
                  null,
                  [[1, 7, 10, 13]],
                );
              }),
            ),
          );
      }
      return _createClass(
        Y,
        [
          {
            key: Symbol.asyncIterator,
            value: function value() {
              var _this20 = this;
              var t = 0;
              return {
                next: (function () {
                  var _next2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee1() {
                      return _regeneratorRuntime().wrap(function _callee1$(_context21) {
                        while (1)
                          switch ((_context21.prev = _context21.next)) {
                            case 0:
                              if (!(_this20.a === 2)) {
                                _context21.next = 2;
                                break;
                              }
                              throw _this20.d;
                            case 2:
                              if (!(t < _this20.b.length)) {
                                _context21.next = 4;
                                break;
                              }
                              return _context21.abrupt('return', {
                                done: !1,
                                value: _this20.b[t++],
                              });
                            case 4:
                              if (!(_this20.a === 1)) {
                                _context21.next = 6;
                                break;
                              }
                              return _context21.abrupt('return', { done: !0, value: void 0 });
                            case 6:
                              _context21.next = 8;
                              return ot.toPromise(_this20.g.event);
                            case 8:
                              if (!0) {
                                _context21.next = 0;
                                break;
                              }
                            case 9:
                            case 'end':
                              return _context21.stop();
                          }
                      }, _callee1);
                    }),
                  );
                  function next() {
                    return _next2.apply(this, arguments);
                  }
                  return next;
                })(),
                return: (function () {
                  var _return2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee10() {
                      var _this20$f;
                      return _regeneratorRuntime().wrap(function _callee10$(_context22) {
                        while (1)
                          switch ((_context22.prev = _context22.next)) {
                            case 0:
                              return _context22.abrupt(
                                'return',
                                ((_this20$f = _this20.f) !== null &&
                                  _this20$f !== void 0 &&
                                  _this20$f.call(_this20),
                                { done: !0, value: void 0 }),
                              );
                            case 1:
                            case 'end':
                              return _context22.stop();
                          }
                      }, _callee10);
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
              return Y.map(this, t);
            },
          },
          {
            key: 'filter',
            value: function filter(t) {
              return Y.filter(this, t);
            },
          },
          {
            key: 'coalesce',
            value: function coalesce() {
              return Y.coalesce(this);
            },
          },
          {
            key: 'toPromise',
            value: function toPromise() {
              return Y.toPromise(this);
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
              return new Y(function (r) {
                r.emitMany(t);
              });
            },
          },
          {
            key: 'fromPromise',
            value: function fromPromise(t) {
              return new Y(
                /*#__PURE__*/ (function () {
                  var _ref1 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(r) {
                      return _regeneratorRuntime().wrap(function _callee11$(_context23) {
                        while (1)
                          switch ((_context23.prev = _context23.next)) {
                            case 0:
                              _context23.t0 = r;
                              _context23.next = 3;
                              return t;
                            case 3:
                              _context23.t1 = _context23.sent;
                              _context23.t0.emitMany.call(_context23.t0, _context23.t1);
                            case 5:
                            case 'end':
                              return _context23.stop();
                          }
                      }, _callee11);
                    }),
                  );
                  return function (_x12) {
                    return _ref1.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'fromPromisesResolveOrder',
            value: function fromPromisesResolveOrder(t) {
              return new Y(
                /*#__PURE__*/ (function () {
                  var _ref10 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13(r) {
                      return _regeneratorRuntime().wrap(function _callee13$(_context25) {
                        while (1)
                          switch ((_context25.prev = _context25.next)) {
                            case 0:
                              _context25.next = 2;
                              return Promise.all(
                                t.map(
                                  /*#__PURE__*/ (function () {
                                    var _ref11 = _asyncToGenerator(
                                      /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee12(n) {
                                          return _regeneratorRuntime().wrap(function _callee12$(
                                            _context24,
                                          ) {
                                            while (1)
                                              switch ((_context24.prev = _context24.next)) {
                                                case 0:
                                                  _context24.t0 = r;
                                                  _context24.next = 3;
                                                  return n;
                                                case 3:
                                                  _context24.t1 = _context24.sent;
                                                  return _context24.abrupt(
                                                    'return',
                                                    _context24.t0.emitOne.call(
                                                      _context24.t0,
                                                      _context24.t1,
                                                    ),
                                                  );
                                                case 5:
                                                case 'end':
                                                  return _context24.stop();
                                              }
                                          }, _callee12);
                                        },
                                      ),
                                    );
                                    return function (_x14) {
                                      return _ref11.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            case 2:
                            case 'end':
                              return _context25.stop();
                          }
                      }, _callee13);
                    }),
                  );
                  return function (_x13) {
                    return _ref10.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'merge',
            value: function merge(t) {
              return new Y(
                /*#__PURE__*/ (function () {
                  var _ref12 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee15(r) {
                      return _regeneratorRuntime().wrap(function _callee15$(_context27) {
                        while (1)
                          switch ((_context27.prev = _context27.next)) {
                            case 0:
                              _context27.next = 2;
                              return Promise.all(
                                t.map(
                                  /*#__PURE__*/ (function () {
                                    var _ref13 = _asyncToGenerator(
                                      /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee14(n) {
                                          var _iteratorAbruptCompletion2,
                                            _didIteratorError2,
                                            _iteratorError2,
                                            _iterator2,
                                            _step2,
                                            i;
                                          return _regeneratorRuntime().wrap(
                                            function _callee14$(_context26) {
                                              while (1)
                                                switch ((_context26.prev = _context26.next)) {
                                                  case 0:
                                                    _iteratorAbruptCompletion2 = false;
                                                    _didIteratorError2 = false;
                                                    _context26.prev = 2;
                                                    _iterator2 = _asyncIterator(n);
                                                  case 4:
                                                    _context26.next = 6;
                                                    return _iterator2.next();
                                                  case 6:
                                                    if (
                                                      !(_iteratorAbruptCompletion2 = !(_step2 =
                                                        _context26.sent).done)
                                                    ) {
                                                      _context26.next = 12;
                                                      break;
                                                    }
                                                    i = _step2.value;
                                                    r.emitOne(i);
                                                  case 9:
                                                    _iteratorAbruptCompletion2 = false;
                                                    _context26.next = 4;
                                                    break;
                                                  case 12:
                                                    _context26.next = 18;
                                                    break;
                                                  case 14:
                                                    _context26.prev = 14;
                                                    _context26.t0 = _context26['catch'](2);
                                                    _didIteratorError2 = true;
                                                    _iteratorError2 = _context26.t0;
                                                  case 18:
                                                    _context26.prev = 18;
                                                    _context26.prev = 19;
                                                    if (
                                                      !(
                                                        _iteratorAbruptCompletion2 &&
                                                        _iterator2['return'] != null
                                                      )
                                                    ) {
                                                      _context26.next = 23;
                                                      break;
                                                    }
                                                    _context26.next = 23;
                                                    return _iterator2['return']();
                                                  case 23:
                                                    _context26.prev = 23;
                                                    if (!_didIteratorError2) {
                                                      _context26.next = 26;
                                                      break;
                                                    }
                                                    throw _iteratorError2;
                                                  case 26:
                                                    return _context26.finish(23);
                                                  case 27:
                                                    return _context26.finish(18);
                                                  case 28:
                                                  case 'end':
                                                    return _context26.stop();
                                                }
                                            },
                                            _callee14,
                                            null,
                                            [
                                              [2, 14, 18, 28],
                                              [19, , 23, 27],
                                            ],
                                          );
                                        },
                                      ),
                                    );
                                    return function (_x16) {
                                      return _ref13.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            case 2:
                            case 'end':
                              return _context27.stop();
                          }
                      }, _callee15);
                    }),
                  );
                  return function (_x15) {
                    return _ref12.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'map',
            value: function map(t, r) {
              return new Y(
                /*#__PURE__*/ (function () {
                  var _ref14 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee16(n) {
                      var _iteratorAbruptCompletion3,
                        _didIteratorError3,
                        _iteratorError3,
                        _iterator3,
                        _step3,
                        i;
                      return _regeneratorRuntime().wrap(
                        function _callee16$(_context28) {
                          while (1)
                            switch ((_context28.prev = _context28.next)) {
                              case 0:
                                _iteratorAbruptCompletion3 = false;
                                _didIteratorError3 = false;
                                _context28.prev = 2;
                                _iterator3 = _asyncIterator(t);
                              case 4:
                                _context28.next = 6;
                                return _iterator3.next();
                              case 6:
                                if (
                                  !(_iteratorAbruptCompletion3 = !(_step3 = _context28.sent).done)
                                ) {
                                  _context28.next = 12;
                                  break;
                                }
                                i = _step3.value;
                                n.emitOne(r(i));
                              case 9:
                                _iteratorAbruptCompletion3 = false;
                                _context28.next = 4;
                                break;
                              case 12:
                                _context28.next = 18;
                                break;
                              case 14:
                                _context28.prev = 14;
                                _context28.t0 = _context28['catch'](2);
                                _didIteratorError3 = true;
                                _iteratorError3 = _context28.t0;
                              case 18:
                                _context28.prev = 18;
                                _context28.prev = 19;
                                if (!(_iteratorAbruptCompletion3 && _iterator3['return'] != null)) {
                                  _context28.next = 23;
                                  break;
                                }
                                _context28.next = 23;
                                return _iterator3['return']();
                              case 23:
                                _context28.prev = 23;
                                if (!_didIteratorError3) {
                                  _context28.next = 26;
                                  break;
                                }
                                throw _iteratorError3;
                              case 26:
                                return _context28.finish(23);
                              case 27:
                                return _context28.finish(18);
                              case 28:
                              case 'end':
                                return _context28.stop();
                            }
                        },
                        _callee16,
                        null,
                        [
                          [2, 14, 18, 28],
                          [19, , 23, 27],
                        ],
                      );
                    }),
                  );
                  return function (_x17) {
                    return _ref14.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'filter',
            value: function filter(t, r) {
              return new Y(
                /*#__PURE__*/ (function () {
                  var _ref15 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee17(n) {
                      var _iteratorAbruptCompletion4,
                        _didIteratorError4,
                        _iteratorError4,
                        _iterator4,
                        _step4,
                        i;
                      return _regeneratorRuntime().wrap(
                        function _callee17$(_context29) {
                          while (1)
                            switch ((_context29.prev = _context29.next)) {
                              case 0:
                                _iteratorAbruptCompletion4 = false;
                                _didIteratorError4 = false;
                                _context29.prev = 2;
                                _iterator4 = _asyncIterator(t);
                              case 4:
                                _context29.next = 6;
                                return _iterator4.next();
                              case 6:
                                if (
                                  !(_iteratorAbruptCompletion4 = !(_step4 = _context29.sent).done)
                                ) {
                                  _context29.next = 12;
                                  break;
                                }
                                i = _step4.value;
                                r(i) && n.emitOne(i);
                              case 9:
                                _iteratorAbruptCompletion4 = false;
                                _context29.next = 4;
                                break;
                              case 12:
                                _context29.next = 18;
                                break;
                              case 14:
                                _context29.prev = 14;
                                _context29.t0 = _context29['catch'](2);
                                _didIteratorError4 = true;
                                _iteratorError4 = _context29.t0;
                              case 18:
                                _context29.prev = 18;
                                _context29.prev = 19;
                                if (!(_iteratorAbruptCompletion4 && _iterator4['return'] != null)) {
                                  _context29.next = 23;
                                  break;
                                }
                                _context29.next = 23;
                                return _iterator4['return']();
                              case 23:
                                _context29.prev = 23;
                                if (!_didIteratorError4) {
                                  _context29.next = 26;
                                  break;
                                }
                                throw _iteratorError4;
                              case 26:
                                return _context29.finish(23);
                              case 27:
                                return _context29.finish(18);
                              case 28:
                              case 'end':
                                return _context29.stop();
                            }
                        },
                        _callee17,
                        null,
                        [
                          [2, 14, 18, 28],
                          [19, , 23, 27],
                        ],
                      );
                    }),
                  );
                  return function (_x18) {
                    return _ref15.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'coalesce',
            value: function coalesce(t) {
              return Y.filter(t, function (r) {
                return !!r;
              });
            },
          },
          {
            key: 'toPromise',
            value: (function () {
              var _toPromise = _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee18(t) {
                  var r,
                    _iteratorAbruptCompletion5,
                    _didIteratorError5,
                    _iteratorError5,
                    _iterator5,
                    _step5,
                    n;
                  return _regeneratorRuntime().wrap(
                    function _callee18$(_context30) {
                      while (1)
                        switch ((_context30.prev = _context30.next)) {
                          case 0:
                            r = [];
                            _iteratorAbruptCompletion5 = false;
                            _didIteratorError5 = false;
                            _context30.prev = 3;
                            _iterator5 = _asyncIterator(t);
                          case 5:
                            _context30.next = 7;
                            return _iterator5.next();
                          case 7:
                            if (!(_iteratorAbruptCompletion5 = !(_step5 = _context30.sent).done)) {
                              _context30.next = 13;
                              break;
                            }
                            n = _step5.value;
                            r.push(n);
                          case 10:
                            _iteratorAbruptCompletion5 = false;
                            _context30.next = 5;
                            break;
                          case 13:
                            _context30.next = 19;
                            break;
                          case 15:
                            _context30.prev = 15;
                            _context30.t0 = _context30['catch'](3);
                            _didIteratorError5 = true;
                            _iteratorError5 = _context30.t0;
                          case 19:
                            _context30.prev = 19;
                            _context30.prev = 20;
                            if (!(_iteratorAbruptCompletion5 && _iterator5['return'] != null)) {
                              _context30.next = 24;
                              break;
                            }
                            _context30.next = 24;
                            return _iterator5['return']();
                          case 24:
                            _context30.prev = 24;
                            if (!_didIteratorError5) {
                              _context30.next = 27;
                              break;
                            }
                            throw _iteratorError5;
                          case 27:
                            return _context30.finish(24);
                          case 28:
                            return _context30.finish(19);
                          case 29:
                            return _context30.abrupt('return', r);
                          case 30:
                          case 'end':
                            return _context30.stop();
                        }
                    },
                    _callee18,
                    null,
                    [
                      [3, 15, 19, 29],
                      [20, , 24, 28],
                    ],
                  );
                }),
              );
              function toPromise(_x19) {
                return _toPromise.apply(this, arguments);
              }
              return toPromise;
            })(),
          },
        ],
      );
    })()),
    (_Y.EMPTY = _Y.fromArray([])),
    _Y),
  De = /*#__PURE__*/ (function () {
    function De(e, t, r) {
      _classCallCheck(this, De);
      (this.owner = e), (this.debugNameSource = t), (this.referenceFn = r);
    }
    return _createClass(De, [
      {
        key: 'getDebugName',
        value: function getDebugName(e) {
          return ss(e, this);
        },
      },
    ]);
  })(),
  Y1 = new Map(),
  Dt = new WeakMap();
function ss(e, t) {
  var r = Dt.get(e);
  if (r) return r;
  var n = os(e, t);
  if (n) {
    var _Y1$get;
    var i = (_Y1$get = Y1.get(n)) !== null && _Y1$get !== void 0 ? _Y1$get : 0;
    i++, Y1.set(n, i);
    var o = i === 1 ? n : ''.concat(n, '#').concat(i);
    return Dt.set(e, o), o;
  }
}
function os(e, t) {
  var r = Dt.get(e);
  if (r) return r;
  var n = t.owner ? ls(t.owner) + '.' : '';
  var i;
  var o = t.debugNameSource;
  if (o !== void 0)
    if (typeof o == 'function') {
      if (((i = o()), i !== void 0)) return n + i;
    } else return n + o;
  var a = t.referenceFn;
  if (a !== void 0 && ((i = Ft(a)), i !== void 0)) return n + i;
  if (t.owner !== void 0) {
    var l = as(t.owner, e);
    if (l !== void 0) return n + l;
  }
}
function as(e, t) {
  for (var r in e) if (e[r] === t) return r;
}
var J1 = new Map(),
  X1 = new WeakMap();
function ls(e) {
  var _J1$get;
  var t = X1.get(e);
  if (t) return t;
  var r = us(e);
  var n = (_J1$get = J1.get(r)) !== null && _J1$get !== void 0 ? _J1$get : 0;
  n++, J1.set(r, n);
  var i = n === 1 ? r : ''.concat(r, '#').concat(n);
  return X1.set(e, i), i;
}
function us(e) {
  var t = e.constructor;
  return t ? t.name : 'Object';
}
function Ft(e) {
  var _ref16;
  var t = e.toString(),
    n = /\/\*\*\s*@description\s*([^*]*)\*\//.exec(t);
  return (_ref16 = n ? n[1] : void 0) === null || _ref16 === void 0 ? void 0 : _ref16.trim();
}
function Q1(e) {
  if (!e()) {
    debugger;
    e(), Me(new J('Assertion Failed'));
  }
}
var jt = function jt(e, t) {
    return e === t;
  },
  K1;
function cs(e) {
  K1 = e;
}
function ne() {
  return K1;
}
var hs = /*#__PURE__*/ (function () {
  function hs() {
    _classCallCheck(this, hs);
    (this.a = 0), (this.d = new WeakMap());
  }
  return _createClass(hs, [
    {
      key: 'b',
      value: function b(e) {
        return fs([$e(gs('|  ', this.a)), e]);
      },
    },
    {
      key: 'c',
      value: function c(e) {
        return e.hadValue
          ? e.didChange
            ? [
                $e(' '),
                K(je(e.oldValue, 70), { color: 'red', strikeThrough: !0 }),
                $e(' '),
                K(je(e.newValue, 60), { color: 'green' }),
              ]
            : [$e(' (unchanged)')]
          : [$e(' '), K(je(e.newValue, 60), { color: 'green' }), $e(' (initial)')];
      },
    },
    {
      key: 'handleObservableChanged',
      value: function handleObservableChanged(e, t) {
        var _console;
        (_console = console).log.apply(
          _console,
          _toConsumableArray(
            this.b(
              [Fe('observable value changed'), K(e.debugName, { color: 'BlueViolet' })].concat(
                _toConsumableArray(this.c(t)),
              ),
            ),
          ),
        );
      },
    },
    {
      key: 'formatChanges',
      value: function formatChanges(e) {
        if (e.size !== 0)
          return K(
            ' (changed deps: ' +
              _toConsumableArray(e)
                .map(function (t) {
                  return t.debugName;
                })
                .join(', ') +
              ')',
            { color: 'gray' },
          );
      },
    },
    {
      key: 'handleDerivedCreated',
      value: function handleDerivedCreated(e) {
        var _this21 = this;
        var t = e.handleChange;
        this.d.set(e, new Set()),
          (e.handleChange = function (r, n) {
            return _this21.d.get(e).add(r), t.apply(e, [r, n]);
          });
      },
    },
    {
      key: 'handleDerivedRecomputed',
      value: function handleDerivedRecomputed(e, t) {
        var _console2, _e$_debugNameData$ref;
        var r = this.d.get(e);
        (_console2 = console).log.apply(
          _console2,
          _toConsumableArray(
            this.b(
              [Fe('derived recomputed'), K(e.debugName, { color: 'BlueViolet' })].concat(
                _toConsumableArray(this.c(t)),
                [
                  this.formatChanges(r),
                  {
                    data: [
                      {
                        fn:
                          (_e$_debugNameData$ref = e._debugNameData.referenceFn) !== null &&
                          _e$_debugNameData$ref !== void 0
                            ? _e$_debugNameData$ref
                            : e._computeFn,
                      },
                    ],
                  },
                ],
              ),
            ),
          ),
        ),
          r.clear();
      },
    },
    {
      key: 'handleFromEventObservableTriggered',
      value: function handleFromEventObservableTriggered(e, t) {
        var _console3;
        (_console3 = console).log.apply(
          _console3,
          _toConsumableArray(
            this.b(
              [
                Fe('observable from event triggered'),
                K(e.debugName, { color: 'BlueViolet' }),
              ].concat(_toConsumableArray(this.c(t)), [{ data: [{ fn: e._getValue }] }]),
            ),
          ),
        );
      },
    },
    {
      key: 'handleAutorunCreated',
      value: function handleAutorunCreated(e) {
        var _this22 = this;
        var t = e.handleChange;
        this.d.set(e, new Set()),
          (e.handleChange = function (r, n) {
            return _this22.d.get(e).add(r), t.apply(e, [r, n]);
          });
      },
    },
    {
      key: 'handleAutorunTriggered',
      value: function handleAutorunTriggered(e) {
        var _console4, _e$_debugNameData$ref2;
        var t = this.d.get(e);
        (_console4 = console).log.apply(
          _console4,
          _toConsumableArray(
            this.b([
              Fe('autorun'),
              K(e.debugName, { color: 'BlueViolet' }),
              this.formatChanges(t),
              {
                data: [
                  {
                    fn:
                      (_e$_debugNameData$ref2 = e._debugNameData.referenceFn) !== null &&
                      _e$_debugNameData$ref2 !== void 0
                        ? _e$_debugNameData$ref2
                        : e._runFn,
                  },
                ],
              },
            ]),
          ),
        ),
          t.clear(),
          this.a++;
      },
    },
    {
      key: 'handleAutorunFinished',
      value: function handleAutorunFinished(e) {
        this.a--;
      },
    },
    {
      key: 'handleBeginTransaction',
      value: function handleBeginTransaction(e) {
        var _console5;
        var t = e.getDebugName();
        t === void 0 && (t = ''),
          (_console5 = console).log.apply(
            _console5,
            _toConsumableArray(
              this.b([Fe('transaction'), K(t, { color: 'BlueViolet' }), { data: [{ fn: e._fn }] }]),
            ),
          ),
          this.a++;
      },
    },
    {
      key: 'handleEndTransaction',
      value: function handleEndTransaction() {
        this.a--;
      },
    },
  ]);
})();
function fs(e) {
  var t = new Array(),
    r = [];
  var n = '';
  function i(a) {
    if ('length' in a) {
      var _iterator36 = _createForOfIteratorHelper(a),
        _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
          var l = _step36.value;
          l && i(l);
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
    } else
      'text' in a
        ? ((n += '%c'.concat(a.text)),
          t.push(a.style),
          a.data && r.push.apply(r, _toConsumableArray(a.data)))
        : 'data' in a && r.push.apply(r, _toConsumableArray(a.data));
  }
  i(e);
  var o = [n].concat(t);
  return o.push.apply(o, r), o;
}
function $e(e) {
  return K(e, { color: 'black' });
}
function Fe(e) {
  return K(bs(''.concat(e, ': '), 10), { color: 'black', bold: !0 });
}
function K(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { color: 'black' };
  function r(i) {
    return Object.entries(i).reduce(function (o, _ref17) {
      var _ref18 = _slicedToArray(_ref17, 2),
        a = _ref18[0],
        l = _ref18[1];
      return ''.concat(o).concat(a, ':').concat(l, ';');
    }, '');
  }
  var n = { color: t.color };
  return (
    t.strikeThrough && (n['text-decoration'] = 'line-through'),
    t.bold && (n['font-weight'] = 'bold'),
    { text: e, style: r(n) }
  );
}
function je(e, t) {
  switch (_typeof(e)) {
    case 'number':
      return '' + e;
    case 'string':
      return e.length + 2 <= t ? '"'.concat(e, '"') : '"'.concat(e.substr(0, t - 7), '"+...');
    case 'boolean':
      return e ? 'true' : 'false';
    case 'undefined':
      return 'undefined';
    case 'object':
      return e === null ? 'null' : Array.isArray(e) ? ds(e, t) : ms(e, t);
    case 'symbol':
      return e.toString();
    case 'function':
      return '[[Function'.concat(e.name ? ' ' + e.name : '', ']]');
    default:
      return '' + e;
  }
}
function ds(e, t) {
  var r = '[ ',
    n = !0;
  var _iterator37 = _createForOfIteratorHelper(e),
    _step37;
  try {
    for (_iterator37.s(); !(_step37 = _iterator37.n()).done; ) {
      var i = _step37.value;
      if ((n || (r += ', '), r.length - 5 > t)) {
        r += '...';
        break;
      }
      (n = !1), (r += ''.concat(je(i, t - r.length)));
    }
  } catch (err) {
    _iterator37.e(err);
  } finally {
    _iterator37.f();
  }
  return (r += ' ]'), r;
}
function ms(e, t) {
  var r = '{ ',
    n = !0;
  for (var _i8 = 0, _Object$entries2 = Object.entries(e); _i8 < _Object$entries2.length; _i8++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i8], 2),
      i = _Object$entries2$_i[0],
      o = _Object$entries2$_i[1];
    if ((n || (r += ', '), r.length - 5 > t)) {
      r += '...';
      break;
    }
    (n = !1), (r += ''.concat(i, ': ').concat(je(o, t - r.length)));
  }
  return (r += ' }'), r;
}
function gs(e, t) {
  var r = '';
  for (var n = 1; n <= t; n++) r += e;
  return r;
}
function bs(e, t) {
  for (; e.length < t; ) e += ' ';
  return e;
}
var er;
function ps(e) {
  er = e;
}
var tr;
function vs(e) {
  tr = e;
}
var It;
function ws(e) {
  It = e;
}
var ys = /*#__PURE__*/ (function () {
    function ys() {
      _classCallCheck(this, ys);
    }
    return _createClass(ys, [
      {
        key: 'TChange',
        get: function get() {
          return null;
        },
      },
      {
        key: 'reportChanges',
        value: function reportChanges() {
          this.get();
        },
      },
      {
        key: 'read',
        value: function read(e) {
          return e ? e.readObservable(this) : this.get();
        },
      },
      {
        key: 'map',
        value: function map(e, t) {
          var _this23 = this;
          var r = t === void 0 ? void 0 : e,
            n = t === void 0 ? e : t;
          return It(
            {
              owner: r,
              debugName: function debugName() {
                var i = Ft(n);
                if (i !== void 0) return i;
                var a =
                  /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(
                    n.toString(),
                  );
                if (a) return ''.concat(_this23.debugName, '.').concat(a[2]);
                if (!r) return ''.concat(_this23.debugName, ' (mapped)');
              },
              debugReferenceFn: n,
            },
            function (i) {
              return n(_this23.read(i), i);
            },
          );
        },
      },
      {
        key: 'flatten',
        value: function flatten() {
          var _this24 = this;
          return It(
            {
              owner: void 0,
              debugName: function debugName() {
                return ''.concat(_this24.debugName, ' (flattened)');
              },
            },
            function (e) {
              return _this24.read(e).read(e);
            },
          );
        },
      },
      {
        key: 'recomputeInitiallyAndOnChange',
        value: function recomputeInitiallyAndOnChange(e, t) {
          return e.add(er(this, t)), this;
        },
      },
      {
        key: 'keepObserved',
        value: function keepObserved(e) {
          return e.add(tr(this)), this;
        },
      },
      {
        key: 'a',
        get: function get() {
          return this.get();
        },
      },
    ]);
  })(),
  Ut = /*#__PURE__*/ (function (_ys) {
    function Ut() {
      var _this25;
      _classCallCheck(this, Ut);
      (_this25 = _callSuper(this, Ut, arguments)), (_this25.b = new Set());
      return _this25;
    }
    _inherits(Ut, _ys);
    return _createClass(Ut, [
      {
        key: 'addObserver',
        value: function addObserver(e) {
          var t = this.b.size;
          this.b.add(e), t === 0 && this.c();
        },
      },
      {
        key: 'removeObserver',
        value: function removeObserver(e) {
          this.b['delete'](e) && this.b.size === 0 && this.f();
        },
      },
      { key: 'c', value: function c() {} },
      { key: 'f', value: function f() {} },
    ]);
  })(ys);
function Es(e, t) {
  var r = new rr(e, t);
  try {
    e(r);
  } finally {
    r.finish();
  }
}
function Ns(e, t, r) {
  e ? t(e) : Es(t, r);
}
var rr = /*#__PURE__*/ (function () {
  function rr(e, t) {
    var _ne;
    _classCallCheck(this, rr);
    (this._fn = e),
      (this.b = t),
      (this.a = []),
      (_ne = ne()) === null || _ne === void 0 ? void 0 : _ne.handleBeginTransaction(this);
  }
  return _createClass(rr, [
    {
      key: 'getDebugName',
      value: function getDebugName() {
        return this.b ? this.b() : Ft(this._fn);
      },
    },
    {
      key: 'updateObserver',
      value: function updateObserver(e, t) {
        this.a.push({ observer: e, observable: t }), e.beginUpdate(t);
      },
    },
    {
      key: 'finish',
      value: function finish() {
        var _ne2;
        var e = this.a;
        for (var _t13 = 0; _t13 < e.length; _t13++) {
          var _e$_t = e[_t13],
            r = _e$_t.observer,
            n = _e$_t.observable;
          r.endUpdate(n);
        }
        (this.a = null),
          (_ne2 = ne()) === null || _ne2 === void 0 ? void 0 : _ne2.handleEndTransaction();
      },
    },
  ]);
})();
function Ls(e, t) {
  var r;
  return (
    typeof e == 'string' ? (r = new De(void 0, e, void 0)) : (r = new De(e, void 0, void 0)),
    new ks(r, t, jt)
  );
}
var ks = /*#__PURE__*/ (function (_Ut) {
  function ks(e, t, r) {
    var _this26;
    _classCallCheck(this, ks);
    (_this26 = _callSuper(this, ks)), (_this26.e = e), (_this26.g = r), (_this26.d = t);
    return _this26;
  }
  _inherits(ks, _Ut);
  return _createClass(ks, [
    {
      key: 'debugName',
      get: function get() {
        var _this$e$getDebugName;
        return (_this$e$getDebugName = this.e.getDebugName(this)) !== null &&
          _this$e$getDebugName !== void 0
          ? _this$e$getDebugName
          : 'ObservableValue';
      },
    },
    {
      key: 'get',
      value: function get() {
        return this.d;
      },
    },
    {
      key: 'set',
      value: function set(e, t, r) {
        var _this27 = this;
        if (r === void 0 && this.g(this.d, e)) return;
        var n;
        t ||
          (t = n =
            new rr(
              function () {},
              function () {
                return 'Setting '.concat(_this27.debugName);
              },
            ));
        try {
          var _ne3;
          var i = this.d;
          this.h(e),
            (_ne3 = ne()) === null || _ne3 === void 0
              ? void 0
              : _ne3.handleObservableChanged(this, {
                  oldValue: i,
                  newValue: e,
                  change: r,
                  didChange: !0,
                  hadValue: !0,
                });
          var _iterator38 = _createForOfIteratorHelper(this.b),
            _step38;
          try {
            for (_iterator38.s(); !(_step38 = _iterator38.n()).done; ) {
              var o = _step38.value;
              t.updateObserver(o, this), o.handleChange(this, r);
            }
          } catch (err) {
            _iterator38.e(err);
          } finally {
            _iterator38.f();
          }
        } finally {
          n && n.finish();
        }
      },
    },
    {
      key: 'toString',
      value: function toString() {
        return ''.concat(this.debugName, ': ').concat(this.d);
      },
    },
    {
      key: 'h',
      value: function h(e) {
        this.d = e;
      },
    },
  ]);
})(Ut);
function nr(e) {
  return new sr(new De(void 0, void 0, e), e, void 0, void 0);
}
var ir;
(function (e) {
  (e[(e.dependenciesMightHaveChanged = 1)] = 'dependenciesMightHaveChanged'),
    (e[(e.stale = 2)] = 'stale'),
    (e[(e.upToDate = 3)] = 'upToDate');
})(ir || (ir = {}));
var sr = /*#__PURE__*/ (function () {
  function sr(e, t, r, n) {
    var _this$i, _ne4;
    _classCallCheck(this, sr);
    (this._debugNameData = e),
      (this._runFn = t),
      (this.i = r),
      (this.j = n),
      (this.a = 2),
      (this.b = 0),
      (this.c = !1),
      (this.f = new Set()),
      (this.g = new Set()),
      (this.l = !1),
      (this.h = (_this$i = this.i) === null || _this$i === void 0 ? void 0 : _this$i.call(this)),
      (_ne4 = ne()) !== null && _ne4 !== void 0 && _ne4.handleAutorunCreated(this),
      this.k(),
      it(this);
  }
  return _createClass(sr, [
    {
      key: 'debugName',
      get: function get() {
        var _this$_debugNameData$;
        return (_this$_debugNameData$ = this._debugNameData.getDebugName(this)) !== null &&
          _this$_debugNameData$ !== void 0
          ? _this$_debugNameData$
          : '(anonymous)';
      },
    },
    {
      key: 'dispose',
      value: function dispose() {
        this.c = !0;
        var _iterator39 = _createForOfIteratorHelper(this.f),
          _step39;
        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done; ) {
            var _e0 = _step39.value;
            _e0.removeObserver(this);
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }
        this.f.clear(), st(this);
      },
    },
    {
      key: 'k',
      value: function k() {
        if (this.a === 3) return;
        var e = this.g;
        (this.g = this.f), (this.f = e), (this.a = 3);
        var t = this.c;
        try {
          if (!t) {
            var _ne5;
            (_ne5 = ne()) === null || _ne5 === void 0 || _ne5.handleAutorunTriggered(this);
            var r = this.h;
            try {
              var _this$i2;
              (this.h =
                (_this$i2 = this.i) === null || _this$i2 === void 0 ? void 0 : _this$i2.call(this)),
                (this.l = !0),
                this._runFn(this, r);
            } catch (n) {
              nt(n);
            } finally {
              this.l = !1;
            }
          }
        } finally {
          var _ne6;
          t ||
            ((_ne6 = ne()) === null || _ne6 === void 0 ? void 0 : _ne6.handleAutorunFinished(this));
          var _iterator40 = _createForOfIteratorHelper(this.g),
            _step40;
          try {
            for (_iterator40.s(); !(_step40 = _iterator40.n()).done; ) {
              var _r4 = _step40.value;
              _r4.removeObserver(this);
            }
          } catch (err) {
            _iterator40.e(err);
          } finally {
            _iterator40.f();
          }
          this.g.clear();
        }
      },
    },
    {
      key: 'toString',
      value: function toString() {
        return 'Autorun<'.concat(this.debugName, '>');
      },
    },
    {
      key: 'beginUpdate',
      value: function beginUpdate() {
        this.a === 3 && (this.a = 1), this.b++;
      },
    },
    {
      key: 'endUpdate',
      value: function endUpdate() {
        var _this28 = this;
        try {
          if (this.b === 1)
            do {
              if (this.a === 1) {
                this.a = 3;
                var _iterator41 = _createForOfIteratorHelper(this.f),
                  _step41;
                try {
                  for (_iterator41.s(); !(_step41 = _iterator41.n()).done; ) {
                    var _e1 = _step41.value;
                    if ((_e1.reportChanges(), this.a === 2)) break;
                  }
                } catch (err) {
                  _iterator41.e(err);
                } finally {
                  _iterator41.f();
                }
              }
              this.k();
            } while (this.a !== 3);
        } finally {
          this.b--;
        }
        Q1(function () {
          return _this28.b >= 0;
        });
      },
    },
    {
      key: 'handlePossibleChange',
      value: function handlePossibleChange(e) {
        this.a === 3 && this.f.has(e) && !this.g.has(e) && (this.a = 1);
      },
    },
    {
      key: 'handleChange',
      value: function handleChange(e, t) {
        if (this.f.has(e) && !this.g.has(e))
          try {
            (this.j
              ? this.j(
                  {
                    changedObservable: e,
                    change: t,
                    didChange: function didChange(n) {
                      return n === e;
                    },
                  },
                  this.h,
                )
              : !0) && (this.a = 2);
          } catch (r) {
            nt(r);
          }
      },
    },
    {
      key: 'readObservable',
      value: function readObservable(e) {
        if (!this.l) throw new J('The reader object cannot be used outside its compute function!');
        if (this.c) return e.get();
        e.addObserver(this);
        var t = e.get();
        return this.f.add(e), this.g['delete'](e), t;
      },
    },
  ]);
})();
(function (e) {
  e.Observer = sr;
})(nr || (nr = {}));
function As(e, t) {
  var _e$equalsFn;
  return new Cs(
    new De(e.owner, e.debugName, e.debugReferenceFn),
    t,
    void 0,
    void 0,
    e.onLastObserverRemoved,
    (_e$equalsFn = e.equalsFn) !== null && _e$equalsFn !== void 0 ? _e$equalsFn : jt,
  );
}
ws(As);
var or;
(function (e) {
  (e[(e.initial = 0)] = 'initial'),
    (e[(e.dependenciesMightHaveChanged = 1)] = 'dependenciesMightHaveChanged'),
    (e[(e.stale = 2)] = 'stale'),
    (e[(e.upToDate = 3)] = 'upToDate');
})(or || (or = {}));
var Cs = /*#__PURE__*/ (function (_Ut2) {
  function Cs(e, t, r, n) {
    var _this29$q, _this30, _ne7;
    var _this29;
    var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : void 0;
    var o = arguments.length > 5 ? arguments[5] : undefined;
    _classCallCheck(this, Cs);
    (_this29 = _callSuper(this, Cs)),
      (_this29._debugNameData = e),
      (_this29._computeFn = t),
      (_this29.q = r),
      (_this29.s = n),
      (_this29.t = i),
      (_this29.u = o),
      (_this29.g = 0),
      (_this29.h = void 0),
      (_this29.j = 0),
      (_this29.k = new Set()),
      (_this29.l = new Set()),
      (_this29.m = void 0),
      (_this29.n = !1),
      (_this29.p = !1),
      (_this29.x = !1),
      (_this29.m =
        (_this29$q = (_this30 = _this29).q) === null || _this29$q === void 0
          ? void 0
          : _this29$q.call(_this30)),
      (_ne7 = ne()) === null || _ne7 === void 0
        ? void 0
        : _ne7.handleDerivedCreated(_assertThisInitialized(_this29));
    return _this29;
  }
  _inherits(Cs, _Ut2);
  return _createClass(Cs, [
    {
      key: 'debugName',
      get: function get() {
        var _this$_debugNameData$2;
        return (_this$_debugNameData$2 = this._debugNameData.getDebugName(this)) !== null &&
          _this$_debugNameData$2 !== void 0
          ? _this$_debugNameData$2
          : '(anonymous)';
      },
    },
    {
      key: 'f',
      value: function f() {
        var _this$t;
        (this.g = 0), (this.h = void 0);
        var _iterator42 = _createForOfIteratorHelper(this.k),
          _step42;
        try {
          for (_iterator42.s(); !(_step42 = _iterator42.n()).done; ) {
            var _e10 = _step42.value;
            _e10.removeObserver(this);
          }
        } catch (err) {
          _iterator42.e(err);
        } finally {
          _iterator42.f();
        }
        this.k.clear(),
          (_this$t = this.t) === null || _this$t === void 0 ? void 0 : _this$t.call(this);
      },
    },
    {
      key: 'get',
      value: function get() {
        if (this.p) throw new J('Cyclic deriveds are not supported yet!');
        if (this.b.size === 0) {
          var _e11;
          try {
            var _this$q2;
            (this.x = !0),
              (_e11 = this._computeFn(
                this,
                (_this$q2 = this.q) === null || _this$q2 === void 0 ? void 0 : _this$q2.call(this),
              ));
          } finally {
            this.x = !1;
          }
          return this.f(), _e11;
        } else {
          do {
            if (this.g === 1) {
              var _iterator43 = _createForOfIteratorHelper(this.k),
                _step43;
              try {
                for (_iterator43.s(); !(_step43 = _iterator43.n()).done; ) {
                  var _e12 = _step43.value;
                  if ((_e12.reportChanges(), this.g === 2)) break;
                }
              } catch (err) {
                _iterator43.e(err);
              } finally {
                _iterator43.f();
              }
            }
            this.g === 1 && (this.g = 3), this.w();
          } while (this.g !== 3);
          return this.h;
        }
      },
    },
    {
      key: 'w',
      value: function w() {
        if (this.g === 3) return;
        var e = this.l;
        (this.l = this.k), (this.k = e);
        var t = this.g !== 0,
          r = this.h;
        this.g = 3;
        var n = !1;
        this.p = !1;
        try {
          var _this$q3, _ne8;
          var i = this.m;
          this.m =
            (_this$q3 = this.q) === null || _this$q3 === void 0 ? void 0 : _this$q3.call(this);
          try {
            (this.x = !0), (this.h = this._computeFn(this, i));
          } finally {
            this.x = !1;
            var _iterator44 = _createForOfIteratorHelper(this.l),
              _step44;
            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done; ) {
                var o = _step44.value;
                o.removeObserver(this);
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }
            this.l.clear();
          }
          (n = t && !this.u(r, this.h)),
            (_ne8 = ne()) === null || _ne8 === void 0
              ? void 0
              : _ne8.handleDerivedRecomputed(this, {
                  oldValue: r,
                  newValue: this.h,
                  change: void 0,
                  didChange: n,
                  hadValue: t,
                });
        } catch (i) {
          nt(i);
        }
        if (((this.p = !1), n)) {
          var _iterator45 = _createForOfIteratorHelper(this.b),
            _step45;
          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done; ) {
              var _i9 = _step45.value;
              _i9.handleChange(this, void 0);
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
        }
      },
    },
    {
      key: 'toString',
      value: function toString() {
        return 'LazyDerived<'.concat(this.debugName, '>');
      },
    },
    {
      key: 'beginUpdate',
      value: function beginUpdate(e) {
        if (this.n) throw new J('Cyclic deriveds are not supported yet!');
        this.j++, (this.n = !0);
        try {
          var _t14 = this.j === 1;
          if (this.g === 3 && ((this.g = 1), !_t14)) {
            var _iterator46 = _createForOfIteratorHelper(this.b),
              _step46;
            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done; ) {
                var r = _step46.value;
                r.handlePossibleChange(this);
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }
          }
          if (_t14) {
            var _iterator47 = _createForOfIteratorHelper(this.b),
              _step47;
            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done; ) {
                var _r5 = _step47.value;
                _r5.beginUpdate(this);
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }
          }
        } finally {
          this.n = !1;
        }
      },
    },
    {
      key: 'endUpdate',
      value: function endUpdate(e) {
        var _this31 = this;
        if ((this.j--, this.j === 0)) {
          var _t15 = _toConsumableArray(this.b);
          var _iterator48 = _createForOfIteratorHelper(_t15),
            _step48;
          try {
            for (_iterator48.s(); !(_step48 = _iterator48.n()).done; ) {
              var r = _step48.value;
              r.endUpdate(this);
            }
          } catch (err) {
            _iterator48.e(err);
          } finally {
            _iterator48.f();
          }
        }
        Q1(function () {
          return _this31.j >= 0;
        });
      },
    },
    {
      key: 'handlePossibleChange',
      value: function handlePossibleChange(e) {
        if (this.g === 3 && this.k.has(e) && !this.l.has(e)) {
          this.g = 1;
          var _iterator49 = _createForOfIteratorHelper(this.b),
            _step49;
          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done; ) {
              var _t16 = _step49.value;
              _t16.handlePossibleChange(this);
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }
        }
      },
    },
    {
      key: 'handleChange',
      value: function handleChange(e, t) {
        if (this.k.has(e) && !this.l.has(e)) {
          var r = !1;
          try {
            r = this.s
              ? this.s(
                  {
                    changedObservable: e,
                    change: t,
                    didChange: function didChange(i) {
                      return i === e;
                    },
                  },
                  this.m,
                )
              : !0;
          } catch (i) {
            nt(i);
          }
          var n = this.g === 3;
          if (r && (this.g === 1 || n) && ((this.g = 2), n)) {
            var _iterator50 = _createForOfIteratorHelper(this.b),
              _step50;
            try {
              for (_iterator50.s(); !(_step50 = _iterator50.n()).done; ) {
                var i = _step50.value;
                i.handlePossibleChange(this);
              }
            } catch (err) {
              _iterator50.e(err);
            } finally {
              _iterator50.f();
            }
          }
        }
      },
    },
    {
      key: 'readObservable',
      value: function readObservable(e) {
        if (!this.x) throw new J('The reader object cannot be used outside its compute function!');
        e.addObserver(this);
        var t = e.get();
        return this.k.add(e), this.l['delete'](e), t;
      },
    },
    {
      key: 'addObserver',
      value: function addObserver(e) {
        var t = !this.b.has(e) && this.j > 0;
        _superPropGet(Cs, 'addObserver', this, 3)([e]), t && e.beginUpdate(this);
      },
    },
    {
      key: 'removeObserver',
      value: function removeObserver(e) {
        var t = this.b.has(e) && this.j > 0;
        _superPropGet(Cs, 'removeObserver', this, 3)([e]), t && e.endUpdate(this);
      },
    },
  ]);
})(Ut);
function ar() {
  var _e13, _e14, _e15, _e16;
  var t, r, n;
  for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    e[_key8] = arguments[_key8];
  }
  return (
    e.length === 3
      ? ((_e13 = e),
        (_e14 = _slicedToArray(_e13, 3)),
        (t = _e14[0]),
        (r = _e14[1]),
        (n = _e14[2]),
        _e13)
      : ((_e15 = e), (_e16 = _slicedToArray(_e15, 2)), (r = _e16[0]), (n = _e16[1]), _e15),
    new Te(
      new De(t, void 0, n),
      r,
      n,
      function () {
        return Te.globalTransaction;
      },
      jt,
    )
  );
}
var Te = /*#__PURE__*/ (function (_Ut3) {
  function Te(e, t, r, n, i) {
    var _this32;
    _classCallCheck(this, Te);
    (_this32 = _callSuper(this, Te)),
      (_this32.k = e),
      (_this32.l = t),
      (_this32._getValue = r),
      (_this32.n = n),
      (_this32.p = i),
      (_this32.h = !1),
      (_this32.s = function (o) {
        var _ne0;
        var a = _this32._getValue(o),
          l = _this32.g,
          c = !_this32.h || !_this32.p(l, a);
        var u = !1;
        c &&
          ((_this32.g = a),
          _this32.h &&
            ((u = !0),
            Ns(
              _this32.n(),
              function (f) {
                var _ne9;
                (_ne9 = ne()) === null ||
                  _ne9 === void 0 ||
                  _ne9.handleFromEventObservableTriggered(_assertThisInitialized(_this32), {
                    oldValue: l,
                    newValue: a,
                    change: void 0,
                    didChange: c,
                    hadValue: _this32.h,
                  });
                var _iterator51 = _createForOfIteratorHelper(_this32.b),
                  _step51;
                try {
                  for (_iterator51.s(); !(_step51 = _iterator51.n()).done; ) {
                    var h = _step51.value;
                    f.updateObserver(h, _assertThisInitialized(_this32)),
                      h.handleChange(_assertThisInitialized(_this32), void 0);
                  }
                } catch (err) {
                  _iterator51.e(err);
                } finally {
                  _iterator51.f();
                }
              },
              function () {
                var f = _this32.q();
                return 'Event fired' + (f ? ': '.concat(f) : '');
              },
            )),
          (_this32.h = !0)),
          u ||
            ((_ne0 = ne()) === null || _ne0 === void 0
              ? void 0
              : _ne0.handleFromEventObservableTriggered(_assertThisInitialized(_this32), {
                  oldValue: l,
                  newValue: a,
                  change: void 0,
                  didChange: c,
                  hadValue: _this32.h,
                }));
      });
    return _this32;
  }
  _inherits(Te, _Ut3);
  return _createClass(Te, [
    {
      key: 'q',
      value: function q() {
        return this.k.getDebugName(this);
      },
    },
    {
      key: 'debugName',
      get: function get() {
        var e = this.q();
        return 'From Event' + (e ? ': '.concat(e) : '');
      },
    },
    {
      key: 'c',
      value: function c() {
        this.j = this.l(this.s);
      },
    },
    {
      key: 'f',
      value: function f() {
        this.j.dispose(), (this.j = void 0), (this.h = !1), (this.g = void 0);
      },
    },
    {
      key: 'get',
      value: function get() {
        return this.j ? (this.h || this.s(void 0), this.g) : this._getValue(void 0);
      },
    },
  ]);
})(Ut);
(function (e) {
  e.Observer = Te;
  function t(r, n) {
    var i = !1;
    Te.globalTransaction === void 0 && ((Te.globalTransaction = r), (i = !0));
    try {
      n();
    } finally {
      i && (Te.globalTransaction = void 0);
    }
  }
  e.batchEventsGlobally = t;
})(ar || (ar = {}));
function lr(e) {
  var t = new ur(!1, void 0);
  return (
    e.addObserver(t),
    xe(function () {
      e.removeObserver(t);
    })
  );
}
vs(lr);
function Ss(e, t) {
  var r = new ur(!0, t);
  return (
    e.addObserver(r),
    t ? t(e.get()) : e.reportChanges(),
    xe(function () {
      e.removeObserver(r);
    })
  );
}
ps(Ss);
var ur = /*#__PURE__*/ (function () {
    function ur(e, t) {
      _classCallCheck(this, ur);
      (this.b = e), (this.c = t), (this.a = 0);
    }
    return _createClass(ur, [
      {
        key: 'beginUpdate',
        value: function beginUpdate(e) {
          this.a++;
        },
      },
      {
        key: 'endUpdate',
        value: function endUpdate(e) {
          this.a--, this.a === 0 && this.b && (this.c ? this.c(e.get()) : e.reportChanges());
        },
      },
      { key: 'handlePossibleChange', value: function handlePossibleChange(e) {} },
      { key: 'handleChange', value: function handleChange(e, t) {} },
    ]);
  })(),
  xs = !1;
xs && cs(new hs());
var q = /*#__PURE__*/ (function () {
    function ee(t, r) {
      _classCallCheck(this, ee);
      if (((this.start = t), (this.endExclusive = r), t > r))
        throw new J('Invalid range: '.concat(this.toString()));
    }
    return _createClass(
      ee,
      [
        {
          key: 'isEmpty',
          get: function get() {
            return this.start === this.endExclusive;
          },
        },
        {
          key: 'delta',
          value: function delta(t) {
            return new ee(this.start + t, this.endExclusive + t);
          },
        },
        {
          key: 'deltaStart',
          value: function deltaStart(t) {
            return new ee(this.start + t, this.endExclusive);
          },
        },
        {
          key: 'deltaEnd',
          value: function deltaEnd(t) {
            return new ee(this.start, this.endExclusive + t);
          },
        },
        {
          key: 'length',
          get: function get() {
            return this.endExclusive - this.start;
          },
        },
        {
          key: 'toString',
          value: function toString() {
            return '['.concat(this.start, ', ').concat(this.endExclusive, ')');
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return this.start === t.start && this.endExclusive === t.endExclusive;
          },
        },
        {
          key: 'containsRange',
          value: function containsRange(t) {
            return this.start <= t.start && t.endExclusive <= this.endExclusive;
          },
        },
        {
          key: 'contains',
          value: function contains(t) {
            return this.start <= t && t < this.endExclusive;
          },
        },
        {
          key: 'join',
          value: function join(t) {
            return new ee(
              Math.min(this.start, t.start),
              Math.max(this.endExclusive, t.endExclusive),
            );
          },
        },
        {
          key: 'intersect',
          value: function intersect(t) {
            var r = Math.max(this.start, t.start),
              n = Math.min(this.endExclusive, t.endExclusive);
            if (r <= n) return new ee(r, n);
          },
        },
        {
          key: 'intersectionLength',
          value: function intersectionLength(t) {
            var r = Math.max(this.start, t.start),
              n = Math.min(this.endExclusive, t.endExclusive);
            return Math.max(0, n - r);
          },
        },
        {
          key: 'intersects',
          value: function intersects(t) {
            var r = Math.max(this.start, t.start),
              n = Math.min(this.endExclusive, t.endExclusive);
            return r < n;
          },
        },
        {
          key: 'intersectsOrTouches',
          value: function intersectsOrTouches(t) {
            var r = Math.max(this.start, t.start),
              n = Math.min(this.endExclusive, t.endExclusive);
            return r <= n;
          },
        },
        {
          key: 'isBefore',
          value: function isBefore(t) {
            return this.endExclusive <= t.start;
          },
        },
        {
          key: 'isAfter',
          value: function isAfter(t) {
            return this.start >= t.endExclusive;
          },
        },
        {
          key: 'slice',
          value: function slice(t) {
            return t.slice(this.start, this.endExclusive);
          },
        },
        {
          key: 'substring',
          value: function substring(t) {
            return t.substring(this.start, this.endExclusive);
          },
        },
        {
          key: 'clip',
          value: function clip(t) {
            if (this.isEmpty) throw new J('Invalid clipping range: '.concat(this.toString()));
            return Math.max(this.start, Math.min(this.endExclusive - 1, t));
          },
        },
        {
          key: 'clipCyclic',
          value: function clipCyclic(t) {
            if (this.isEmpty) throw new J('Invalid clipping range: '.concat(this.toString()));
            return t < this.start
              ? this.endExclusive - ((this.start - t) % this.length)
              : t >= this.endExclusive
                ? this.start + ((t - this.start) % this.length)
                : t;
          },
        },
        {
          key: 'map',
          value: function map(t) {
            var r = [];
            for (var n = this.start; n < this.endExclusive; n++) r.push(t(n));
            return r;
          },
        },
        {
          key: 'forEach',
          value: function forEach(t) {
            for (var r = this.start; r < this.endExclusive; r++) t(r);
          },
        },
      ],
      [
        {
          key: 'addRange',
          value: function addRange(t, r) {
            var n = 0;
            for (; n < r.length && r[n].endExclusive < t.start; ) n++;
            var i = n;
            for (; i < r.length && r[i].start <= t.endExclusive; ) i++;
            if (n === i) r.splice(n, 0, t);
            else {
              var o = Math.min(t.start, r[n].start),
                a = Math.max(t.endExclusive, r[i - 1].endExclusive);
              r.splice(n, i - n, new ee(o, a));
            }
          },
        },
        {
          key: 'tryCreate',
          value: function tryCreate(t, r) {
            if (!(t > r)) return new ee(t, r);
          },
        },
        {
          key: 'ofLength',
          value: function ofLength(t) {
            return new ee(0, t);
          },
        },
        {
          key: 'ofStartAndLength',
          value: function ofStartAndLength(t, r) {
            return new ee(t, t + r);
          },
        },
        {
          key: 'emptyAt',
          value: function emptyAt(t) {
            return new ee(t, t);
          },
        },
      ],
    );
  })(),
  ut = /*#__PURE__*/ (function () {
    function we(t, r) {
      _classCallCheck(this, we);
      (this.lineNumber = t), (this.column = r);
    }
    return _createClass(
      we,
      [
        {
          key: 'with',
          value: function _with() {
            var t =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lineNumber;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.column;
            return t === this.lineNumber && r === this.column ? this : new we(t, r);
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
            return we.equals(this, t);
          },
        },
        {
          key: 'isBefore',
          value: function isBefore(t) {
            return we.isBefore(this, t);
          },
        },
        {
          key: 'isBeforeOrEqual',
          value: function isBeforeOrEqual(t) {
            return we.isBeforeOrEqual(this, t);
          },
        },
        {
          key: 'clone',
          value: function clone() {
            return new we(this.lineNumber, this.column);
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
              var o = t.column | 0,
                a = r.column | 0;
              return o - a;
            }
            return n - i;
          },
        },
        {
          key: 'lift',
          value: function lift(t) {
            return new we(t.lineNumber, t.column);
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
  cr = /*#__PURE__*/ (function () {
    function O(t, r, n, i) {
      _classCallCheck(this, O);
      var o, a, l, c;
      t == null || typeof t == 'number' || Number.isNaN(t)
        ? ((o = t), (a = r), (l = n), (c = i))
        : 'startLineNumber' in t && 'startColumn' in t
          ? ((o = t.startLineNumber), (a = t.startColumn), (l = t.endLineNumber), (c = t.endColumn))
          : ((o = t.startLineNumber), (a = 1), (l = t.endLineNumberExclusive), (c = 1)),
        o > l || (o === l && a > c)
          ? ((this.startLineNumber = l),
            (this.startColumn = c),
            (this.endLineNumber = o),
            (this.endColumn = a))
          : ((this.startLineNumber = o),
            (this.startColumn = a),
            (this.endLineNumber = l),
            (this.endColumn = c));
    }
    return _createClass(
      O,
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
            return O.isEmpty(this);
          },
        },
        {
          key: 'containsPosition',
          value: function containsPosition(t) {
            return O.containsPosition(this, t);
          },
        },
        {
          key: 'containsRange',
          value: function containsRange(t) {
            return O.containsRange(this, t);
          },
        },
        {
          key: 'strictContainsRange',
          value: function strictContainsRange(t) {
            return O.strictContainsRange(this, t);
          },
        },
        {
          key: 'plusRange',
          value: function plusRange(t) {
            return O.plusRange(this, t);
          },
        },
        {
          key: 'intersectRanges',
          value: function intersectRanges(t) {
            return O.intersectRanges(this, t);
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
            return O.equalsRange(this, t);
          },
        },
        {
          key: 'getEndPosition',
          value: function getEndPosition() {
            return O.getEndPosition(this);
          },
        },
        {
          key: 'getStartPosition',
          value: function getStartPosition() {
            return O.getStartPosition(this);
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
            return new O(this.startLineNumber, this.startColumn, t, r);
          },
        },
        {
          key: 'setStartPosition',
          value: function setStartPosition(t, r) {
            return new O(t, r, this.endLineNumber, this.endColumn);
          },
        },
        {
          key: 'collapseToStart',
          value: function collapseToStart() {
            return O.collapseToStart(this);
          },
        },
        {
          key: 'collapseToEnd',
          value: function collapseToEnd() {
            return O.collapseToEnd(this);
          },
        },
        {
          key: 'delta',
          value: function delta(t) {
            return new O(
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
            return new O(n, t.startColumn, i, t.startColumn);
          },
        },
        {
          key: 'getRangeOnBelow',
          value: function getRangeOnBelow(t, r, n) {
            var i = t.endLineNumber,
              o = Math.min(t.endLineNumber + r, n);
            return new O(i, t.endColumn, o, t.endColumn);
          },
        },
        {
          key: 'getExtendedRange',
          value: function getExtendedRange(t, r, n) {
            var i = Math.max(t.startLineNumber - r, 0),
              o = Math.min(t.endLineNumber + r, n);
            return new O(i, t.startColumn, o, t.endColumn);
          },
        },
        {
          key: 'plusRange',
          value: function plusRange(t, r) {
            var n, i, o, a;
            return (
              r.startLineNumber < t.startLineNumber
                ? ((n = r.startLineNumber), (i = r.startColumn))
                : r.startLineNumber === t.startLineNumber
                  ? ((n = r.startLineNumber), (i = Math.min(r.startColumn, t.startColumn)))
                  : ((n = t.startLineNumber), (i = t.startColumn)),
              r.endLineNumber > t.endLineNumber
                ? ((o = r.endLineNumber), (a = r.endColumn))
                : r.endLineNumber === t.endLineNumber
                  ? ((o = r.endLineNumber), (a = Math.max(r.endColumn, t.endColumn)))
                  : ((o = t.endLineNumber), (a = t.endColumn)),
              new O(n, i, o, a)
            );
          },
        },
        {
          key: 'intersectRanges',
          value: function intersectRanges(t, r) {
            var n = t.startLineNumber,
              i = t.startColumn,
              o = t.endLineNumber,
              a = t.endColumn;
            var l = r.startLineNumber,
              c = r.startColumn,
              u = r.endLineNumber,
              f = r.endColumn;
            return (
              n < l ? ((n = l), (i = c)) : n === l && (i = Math.max(i, c)),
              o > u ? ((o = u), (a = f)) : o === u && (a = Math.min(a, f)),
              n > o || (n === o && i > a) ? null : new O(n, i, o, a)
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
            var n = O.lift(t).whereIs(r.range);
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
                  var o =
                      r.text.lastIndexOf('\n') === -1
                        ? r.text.length
                        : r.text.length - r.text.lastIndexOf('\n') - 1,
                    a =
                      r.range.startLineNumber === r.range.endLineNumber
                        ? r.range.endColumn - r.range.startColumn
                        : r.range.endColumn - 1,
                    l = o - a;
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
                var _i0 = n;
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
            return new ut(t.endLineNumber, t.endColumn);
          },
        },
        {
          key: 'getStartPosition',
          value: function getStartPosition(t) {
            return new ut(t.startLineNumber, t.startColumn);
          },
        },
        {
          key: 'collapseToStart',
          value: function collapseToStart(t) {
            return new O(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
          },
        },
        {
          key: 'collapseToEnd',
          value: function collapseToEnd(t) {
            return new O(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
          },
        },
        {
          key: 'fromPositions',
          value: function fromPositions(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
            return new O(t.lineNumber, t.column, r.lineNumber, r.column);
          },
        },
        {
          key: 'lift',
          value: function lift(t) {
            return t ? new O(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
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
              var o = t.startLineNumber | 0,
                a = r.startLineNumber | 0;
              if (o === a) {
                var l = t.startColumn | 0,
                  c = r.startColumn | 0;
                if (l === c) {
                  var u = t.endLineNumber | 0,
                    f = r.endLineNumber | 0;
                  if (u === f) {
                    var h = t.endColumn | 0,
                      g = r.endColumn | 0;
                    return h - g;
                  }
                  return u - f;
                }
                return l - c;
              }
              return o - a;
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
  be = /*#__PURE__*/ (function () {
    function B(t, r) {
      _classCallCheck(this, B);
      if (t > r)
        throw new J(
          'startLineNumber '.concat(t, ' cannot be after endLineNumberExclusive ').concat(r),
        );
      (this.startLineNumber = t), (this.endLineNumberExclusive = r);
    }
    return _createClass(
      B,
      [
        {
          key: 'contains',
          value: function contains(t) {
            return this.startLineNumber <= t && t < this.endLineNumberExclusive;
          },
        },
        {
          key: 'isEmpty',
          get: function get() {
            return this.startLineNumber === this.endLineNumberExclusive;
          },
        },
        {
          key: 'delta',
          value: function delta(t) {
            return new B(this.startLineNumber + t, this.endLineNumberExclusive + t);
          },
        },
        {
          key: 'deltaLength',
          value: function deltaLength(t) {
            return new B(this.startLineNumber, this.endLineNumberExclusive + t);
          },
        },
        {
          key: 'length',
          get: function get() {
            return this.endLineNumberExclusive - this.startLineNumber;
          },
        },
        {
          key: 'join',
          value: function join(t) {
            return new B(
              Math.min(this.startLineNumber, t.startLineNumber),
              Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive),
            );
          },
        },
        {
          key: 'toString',
          value: function toString() {
            return '['.concat(this.startLineNumber, ',').concat(this.endLineNumberExclusive, ')');
          },
        },
        {
          key: 'intersect',
          value: function intersect(t) {
            var r = Math.max(this.startLineNumber, t.startLineNumber),
              n = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
            if (r <= n) return new B(r, n);
          },
        },
        {
          key: 'intersectsStrict',
          value: function intersectsStrict(t) {
            return (
              this.startLineNumber < t.endLineNumberExclusive &&
              t.startLineNumber < this.endLineNumberExclusive
            );
          },
        },
        {
          key: 'overlapOrTouch',
          value: function overlapOrTouch(t) {
            return (
              this.startLineNumber <= t.endLineNumberExclusive &&
              t.startLineNumber <= this.endLineNumberExclusive
            );
          },
        },
        {
          key: 'equals',
          value: function equals(t) {
            return (
              this.startLineNumber === t.startLineNumber &&
              this.endLineNumberExclusive === t.endLineNumberExclusive
            );
          },
        },
        {
          key: 'toInclusiveRange',
          value: function toInclusiveRange() {
            return this.isEmpty
              ? null
              : new cr(
                  this.startLineNumber,
                  1,
                  this.endLineNumberExclusive - 1,
                  Number.MAX_SAFE_INTEGER,
                );
          },
        },
        {
          key: 'toExclusiveRange',
          value: function toExclusiveRange() {
            return new cr(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
          },
        },
        {
          key: 'mapToLineArray',
          value: function mapToLineArray(t) {
            var r = [];
            for (var n = this.startLineNumber; n < this.endLineNumberExclusive; n++) r.push(t(n));
            return r;
          },
        },
        {
          key: 'forEach',
          value: function forEach(t) {
            for (var r = this.startLineNumber; r < this.endLineNumberExclusive; r++) t(r);
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            return [this.startLineNumber, this.endLineNumberExclusive];
          },
        },
        {
          key: 'includes',
          value: function includes(t) {
            return this.startLineNumber <= t && t < this.endLineNumberExclusive;
          },
        },
        {
          key: 'toOffsetRange',
          value: function toOffsetRange() {
            return new q(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
          },
        },
        {
          key: 'distanceToRange',
          value: function distanceToRange(t) {
            return this.endLineNumberExclusive <= t.startLineNumber
              ? t.startLineNumber - this.endLineNumberExclusive
              : t.endLineNumberExclusive <= this.startLineNumber
                ? this.startLineNumber - t.endLineNumberExclusive
                : 0;
          },
        },
        {
          key: 'distanceToLine',
          value: function distanceToLine(t) {
            return this.contains(t)
              ? 0
              : t < this.startLineNumber
                ? this.startLineNumber - t
                : t - this.endLineNumberExclusive;
          },
        },
        {
          key: 'addMargin',
          value: function addMargin(t, r) {
            return new B(this.startLineNumber - t, this.endLineNumberExclusive + r);
          },
        },
      ],
      [
        {
          key: 'fromRange',
          value: function fromRange(t) {
            return new B(t.startLineNumber, t.endLineNumber);
          },
        },
        {
          key: 'fromRangeInclusive',
          value: function fromRangeInclusive(t) {
            return new B(t.startLineNumber, t.endLineNumber + 1);
          },
        },
        {
          key: 'subtract',
          value: function subtract(t, r) {
            return r
              ? t.startLineNumber < r.startLineNumber &&
                r.endLineNumberExclusive < t.endLineNumberExclusive
                ? [
                    new B(t.startLineNumber, r.startLineNumber),
                    new B(r.endLineNumberExclusive, t.endLineNumberExclusive),
                  ]
                : r.startLineNumber <= t.startLineNumber &&
                    t.endLineNumberExclusive <= r.endLineNumberExclusive
                  ? []
                  : r.endLineNumberExclusive < t.endLineNumberExclusive
                    ? [
                        new B(
                          Math.max(r.endLineNumberExclusive, t.startLineNumber),
                          t.endLineNumberExclusive,
                        ),
                      ]
                    : [
                        new B(
                          t.startLineNumber,
                          Math.min(r.startLineNumber, t.endLineNumberExclusive),
                        ),
                      ]
              : [t];
          },
        },
        {
          key: 'joinMany',
          value: function joinMany(t) {
            if (t.length === 0) return [];
            var r = new hr(t[0].slice());
            for (var n = 1; n < t.length; n++) r = r.getUnion(new hr(t[n].slice()));
            return r.ranges;
          },
        },
        {
          key: 'join',
          value: function join(t) {
            if (t.length === 0) throw new J('lineRanges cannot be empty');
            var r = t[0].startLineNumber,
              n = t[0].endLineNumberExclusive;
            for (var i = 1; i < t.length; i++)
              (r = Math.min(r, t[i].startLineNumber)),
                (n = Math.max(n, t[i].endLineNumberExclusive));
            return new B(r, n);
          },
        },
        {
          key: 'ofLength',
          value: function ofLength(t, r) {
            return new B(t, t + r);
          },
        },
        {
          key: 'deserialize',
          value: function deserialize(t) {
            return new B(t[0], t[1]);
          },
        },
      ],
    );
  })(),
  hr = /*#__PURE__*/ (function () {
    function Oe() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      _classCallCheck(this, Oe);
      this.c = t;
    }
    return _createClass(Oe, [
      {
        key: 'ranges',
        get: function get() {
          return this.c;
        },
      },
      {
        key: 'addRange',
        value: function addRange(t) {
          if (t.length === 0) return;
          var r = b1(this.c, function (i) {
              return i.endLineNumberExclusive >= t.startLineNumber;
            }),
            n =
              rt(this.c, function (i) {
                return i.startLineNumber <= t.endLineNumberExclusive;
              }) + 1;
          if (r === n) this.c.splice(r, 0, t);
          else if (r === n - 1) {
            var i = this.c[r];
            this.c[r] = i.join(t);
          } else {
            var _i1 = this.c[r].join(this.c[n - 1]).join(t);
            this.c.splice(r, n - r, _i1);
          }
        },
      },
      {
        key: 'contains',
        value: function contains(t) {
          var r = g1(this.c, function (n) {
            return n.startLineNumber <= t;
          });
          return !!r && r.endLineNumberExclusive > t;
        },
      },
      {
        key: 'intersects',
        value: function intersects(t) {
          var r = g1(this.c, function (n) {
            return n.startLineNumber < t.endLineNumberExclusive;
          });
          return !!r && r.endLineNumberExclusive > t.startLineNumber;
        },
      },
      {
        key: 'getUnion',
        value: function getUnion(t) {
          if (this.c.length === 0) return t;
          if (t.c.length === 0) return this;
          var r = [];
          var n = 0,
            i = 0,
            o = null;
          for (; n < this.c.length || i < t.c.length; ) {
            var a = null;
            if (n < this.c.length && i < t.c.length) {
              var l = this.c[n],
                c = t.c[i];
              l.startLineNumber < c.startLineNumber ? ((a = l), n++) : ((a = c), i++);
            } else n < this.c.length ? ((a = this.c[n]), n++) : ((a = t.c[i]), i++);
            o === null
              ? (o = a)
              : o.endLineNumberExclusive >= a.startLineNumber
                ? (o = new be(
                    o.startLineNumber,
                    Math.max(o.endLineNumberExclusive, a.endLineNumberExclusive),
                  ))
                : (r.push(o), (o = a));
          }
          return o !== null && r.push(o), new Oe(r);
        },
      },
      {
        key: 'subtractFrom',
        value: function subtractFrom(t) {
          var r = b1(this.c, function (a) {
              return a.endLineNumberExclusive >= t.startLineNumber;
            }),
            n =
              rt(this.c, function (a) {
                return a.startLineNumber <= t.endLineNumberExclusive;
              }) + 1;
          if (r === n) return new Oe([t]);
          var i = [];
          var o = t.startLineNumber;
          for (var a = r; a < n; a++) {
            var l = this.c[a];
            l.startLineNumber > o && i.push(new be(o, l.startLineNumber)),
              (o = l.endLineNumberExclusive);
          }
          return (
            o < t.endLineNumberExclusive && i.push(new be(o, t.endLineNumberExclusive)), new Oe(i)
          );
        },
      },
      {
        key: 'toString',
        value: function toString() {
          return this.c
            .map(function (t) {
              return t.toString();
            })
            .join(', ');
        },
      },
      {
        key: 'getIntersection',
        value: function getIntersection(t) {
          var r = [];
          var n = 0,
            i = 0;
          for (; n < this.c.length && i < t.c.length; ) {
            var o = this.c[n],
              a = t.c[i],
              l = o.intersect(a);
            l && !l.isEmpty && r.push(l),
              o.endLineNumberExclusive < a.endLineNumberExclusive ? n++ : i++;
          }
          return new Oe(r);
        },
      },
      {
        key: 'getWithDelta',
        value: function getWithDelta(t) {
          return new Oe(
            this.c.map(function (r) {
              return r.delta(t);
            }),
          );
        },
      },
    ]);
  })(),
  fr;
(function (e) {
  (e[(e.MAX_SAFE_SMALL_INTEGER = 1073741824)] = 'MAX_SAFE_SMALL_INTEGER'),
    (e[(e.MIN_SAFE_SMALL_INTEGER = -1073741824)] = 'MIN_SAFE_SMALL_INTEGER'),
    (e[(e.MAX_UINT_8 = 255)] = 'MAX_UINT_8'),
    (e[(e.MAX_UINT_16 = 65535)] = 'MAX_UINT_16'),
    (e[(e.MAX_UINT_32 = 4294967295)] = 'MAX_UINT_32'),
    (e[(e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536)] = 'UNICODE_SUPPLEMENTARY_PLANE_BEGIN');
})(fr || (fr = {}));
function _e(e) {
  return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0;
}
var $s = /*#__PURE__*/ (function () {
    function $s(e) {
      _classCallCheck(this, $s);
      (this.a = e),
        (this.b = new Uint32Array(e.length)),
        (this.c = new Int32Array(1)),
        (this.c[0] = -1);
    }
    return _createClass($s, [
      {
        key: 'getCount',
        value: function getCount() {
          return this.a.length;
        },
      },
      {
        key: 'insertValues',
        value: function insertValues(e, t) {
          e = _e(e);
          var r = this.a,
            n = this.b,
            i = t.length;
          return i === 0
            ? !1
            : ((this.a = new Uint32Array(r.length + i)),
              this.a.set(r.subarray(0, e), 0),
              this.a.set(r.subarray(e), e + i),
              this.a.set(t, e),
              e - 1 < this.c[0] && (this.c[0] = e - 1),
              (this.b = new Uint32Array(this.a.length)),
              this.c[0] >= 0 && this.b.set(n.subarray(0, this.c[0] + 1)),
              !0);
        },
      },
      {
        key: 'setValue',
        value: function setValue(e, t) {
          return (
            (e = _e(e)),
            (t = _e(t)),
            this.a[e] === t ? !1 : ((this.a[e] = t), e - 1 < this.c[0] && (this.c[0] = e - 1), !0)
          );
        },
      },
      {
        key: 'removeValues',
        value: function removeValues(e, t) {
          (e = _e(e)), (t = _e(t));
          var r = this.a,
            n = this.b;
          if (e >= r.length) return !1;
          var i = r.length - e;
          return (
            t >= i && (t = i),
            t === 0
              ? !1
              : ((this.a = new Uint32Array(r.length - t)),
                this.a.set(r.subarray(0, e), 0),
                this.a.set(r.subarray(e + t), e),
                (this.b = new Uint32Array(this.a.length)),
                e - 1 < this.c[0] && (this.c[0] = e - 1),
                this.c[0] >= 0 && this.b.set(n.subarray(0, this.c[0] + 1)),
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
          return e < 0 ? 0 : ((e = _e(e)), this.d(e));
        },
      },
      {
        key: 'd',
        value: function d(e) {
          if (e <= this.c[0]) return this.b[e];
          var t = this.c[0] + 1;
          t === 0 && ((this.b[0] = this.a[0]), t++), e >= this.a.length && (e = this.a.length - 1);
          for (var r = t; r <= e; r++) this.b[r] = this.b[r - 1] + this.a[r];
          return (this.c[0] = Math.max(this.c[0], e)), this.b[e];
        },
      },
      {
        key: 'getIndexOf',
        value: function getIndexOf(e) {
          (e = Math.floor(e)), this.getTotalSum();
          var t = 0,
            r = this.a.length - 1,
            n = 0,
            i = 0,
            o = 0;
          for (; t <= r; )
            if (((n = (t + (r - t) / 2) | 0), (i = this.b[n]), (o = i - this.a[n]), e < o))
              r = n - 1;
            else if (e >= i) t = n + 1;
            else break;
          return new Ts(n, e - o);
        },
      },
    ]);
  })(),
  Ts = /*#__PURE__*/ _createClass(function Ts(e, t) {
    _classCallCheck(this, Ts);
    (this.index = e),
      (this.remainder = t),
      (this._prefixSumIndexOfResultBrand = void 0),
      (this.index = e),
      (this.remainder = t);
  }),
  _s = /*#__PURE__*/ (function () {
    function _s(e, t, r, n) {
      _classCallCheck(this, _s);
      (this.a = e), (this.b = t), (this.c = r), (this.d = n), (this.f = null), (this.g = null);
    }
    return _createClass(_s, [
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
          var _iterator52 = _createForOfIteratorHelper(t),
            _step52;
          try {
            for (_iterator52.s(); !(_step52 = _iterator52.n()).done; ) {
              var r = _step52.value;
              this.k(r.range), this.l(new ut(r.range.startLineNumber, r.range.startColumn), r.text);
            }
          } catch (err) {
            _iterator52.e(err);
          } finally {
            _iterator52.f();
          }
          (this.d = e.versionId), (this.g = null);
        },
      },
      {
        key: 'h',
        value: function h() {
          if (!this.f) {
            var _e17 = this.c.length,
              _t17 = this.b.length,
              r = new Uint32Array(_t17);
            for (var n = 0; n < _t17; n++) r[n] = this.b[n].length + _e17;
            this.f = new $s(r);
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
          var r = Pi(t);
          if (r.length === 1) {
            this.j(
              e.lineNumber - 1,
              this.b[e.lineNumber - 1].substring(0, e.column - 1) +
                r[0] +
                this.b[e.lineNumber - 1].substring(e.column - 1),
            );
            return;
          }
          (r[r.length - 1] += this.b[e.lineNumber - 1].substring(e.column - 1)),
            this.j(e.lineNumber - 1, this.b[e.lineNumber - 1].substring(0, e.column - 1) + r[0]);
          var n = new Uint32Array(r.length - 1);
          for (var i = 1; i < r.length; i++)
            this.b.splice(e.lineNumber + i - 1, 0, r[i]), (n[i - 1] = r[i].length + this.c.length);
          this.f && this.f.insertValues(e.lineNumber, n);
        },
      },
    ]);
  })(),
  dr;
(function (e) {
  (e[(e.Unknown = 0)] = 'Unknown'),
    (e[(e.Invalid = 3)] = 'Invalid'),
    (e[(e.LF = 1)] = 'LF'),
    (e[(e.CRLF = 2)] = 'CRLF');
})(dr || (dr = {}));
function zt(e) {
  var t = 0,
    r = 0,
    n = 0,
    i = 0;
  for (var o = 0, a = e.length; o < a; o++) {
    var l = e.charCodeAt(o);
    l === 13
      ? (t === 0 && (r = o),
        t++,
        o + 1 < a && e.charCodeAt(o + 1) === 10 ? ((i |= 2), o++) : (i |= 3),
        (n = o + 1))
      : l === 10 && ((i |= 1), t === 0 && (r = o), t++, (n = o + 1));
  }
  return t === 0 && (r = e.length), [t, r, e.length - n, i];
}
var mr = Object.create(null);
function s(e, t) {
  if (Ii(t)) {
    var r = mr[t];
    if (r === void 0) throw new Error(''.concat(e, ' references an unknown codicon: ').concat(t));
    t = r;
  }
  return (mr[e] = t), { id: e };
}
var Os = {
    semantic: s('semantic', 62e3),
    githubCopilot: s('github-copilot', 62001),
    plusCircle: s('plus-circle', 62002),
    smileySad: s('smiley-sad', 62003),
    smileyHappy: s('smiley-happy', 62004),
    smileyMedium: s('smiley-medium', 62005),
    sparkleStrikethrough: s('sparkle-strikethrough', 62006),
    keyPlusSparkle: s('key-plus-sparkle', 62007),
    paperclip: s('paperclip', 60500),
    atSign: s('at-sign', 60501),
    image: s('image', 60502),
    logo: s('logo', 60503),
    sparkleTwo: s('sparkle-two', 60504),
    logoSlash: s('logo-slash', 60505),
    add: s('add', 6e4),
    plus: s('plus', 6e4),
    gistNew: s('gist-new', 6e4),
    repoCreate: s('repo-create', 6e4),
    lightbulb: s('lightbulb', 60001),
    lightBulb: s('light-bulb', 60001),
    repo: s('repo', 60002),
    repoDelete: s('repo-delete', 60002),
    gistFork: s('gist-fork', 60003),
    repoForked: s('repo-forked', 60003),
    gitPullRequest: s('git-pull-request', 60004),
    gitPullRequestAbandoned: s('git-pull-request-abandoned', 60004),
    recordKeys: s('record-keys', 60005),
    keyboard: s('keyboard', 60005),
    tag: s('tag', 60006),
    gitPullRequestLabel: s('git-pull-request-label', 60006),
    tagAdd: s('tag-add', 60006),
    tagRemove: s('tag-remove', 60006),
    person: s('person', 60007),
    personFollow: s('person-follow', 60007),
    personOutline: s('person-outline', 60007),
    personFilled: s('person-filled', 60007),
    gitBranch: s('git-branch', 60008),
    gitBranchCreate: s('git-branch-create', 60008),
    gitBranchDelete: s('git-branch-delete', 60008),
    sourceControl: s('source-control', 60008),
    mirror: s('mirror', 60009),
    mirrorPublic: s('mirror-public', 60009),
    star: s('star', 60010),
    starAdd: s('star-add', 60010),
    starDelete: s('star-delete', 60010),
    starEmpty: s('star-empty', 60010),
    comment: s('comment', 60011),
    commentAdd: s('comment-add', 60011),
    alert: s('alert', 60012),
    warning: s('warning', 60012),
    search: s('search', 60013),
    searchSave: s('search-save', 60013),
    logOut: s('log-out', 60014),
    signOut: s('sign-out', 60014),
    logIn: s('log-in', 60015),
    signIn: s('sign-in', 60015),
    eye: s('eye', 60016),
    eyeUnwatch: s('eye-unwatch', 60016),
    eyeWatch: s('eye-watch', 60016),
    circleFilled: s('circle-filled', 60017),
    primitiveDot: s('primitive-dot', 60017),
    closeDirty: s('close-dirty', 60017),
    debugBreakpoint: s('debug-breakpoint', 60017),
    debugBreakpointDisabled: s('debug-breakpoint-disabled', 60017),
    debugHint: s('debug-hint', 60017),
    terminalDecorationSuccess: s('terminal-decoration-success', 60017),
    primitiveSquare: s('primitive-square', 60018),
    edit: s('edit', 60019),
    pencil: s('pencil', 60019),
    info: s('info', 60020),
    issueOpened: s('issue-opened', 60020),
    gistPrivate: s('gist-private', 60021),
    gitForkPrivate: s('git-fork-private', 60021),
    lock: s('lock', 60021),
    mirrorPrivate: s('mirror-private', 60021),
    close: s('close', 60022),
    removeClose: s('remove-close', 60022),
    x: s('x', 60022),
    repoSync: s('repo-sync', 60023),
    sync: s('sync', 60023),
    clone: s('clone', 60024),
    desktopDownload: s('desktop-download', 60024),
    beaker: s('beaker', 60025),
    microscope: s('microscope', 60025),
    vm: s('vm', 60026),
    deviceDesktop: s('device-desktop', 60026),
    file: s('file', 60027),
    fileText: s('file-text', 60027),
    more: s('more', 60028),
    ellipsis: s('ellipsis', 60028),
    kebabHorizontal: s('kebab-horizontal', 60028),
    mailReply: s('mail-reply', 60029),
    reply: s('reply', 60029),
    organization: s('organization', 60030),
    organizationFilled: s('organization-filled', 60030),
    organizationOutline: s('organization-outline', 60030),
    newFile: s('new-file', 60031),
    fileAdd: s('file-add', 60031),
    newFolder: s('new-folder', 60032),
    fileDirectoryCreate: s('file-directory-create', 60032),
    trash: s('trash', 60033),
    trashcan: s('trashcan', 60033),
    history: s('history', 60034),
    clock: s('clock', 60034),
    folder: s('folder', 60035),
    fileDirectory: s('file-directory', 60035),
    symbolFolder: s('symbol-folder', 60035),
    logoGithub: s('logo-github', 60036),
    markGithub: s('mark-github', 60036),
    github: s('github', 60036),
    terminal: s('terminal', 60037),
    console: s('console', 60037),
    repl: s('repl', 60037),
    zap: s('zap', 60038),
    symbolEvent: s('symbol-event', 60038),
    error: s('error', 60039),
    stop: s('stop', 60039),
    variable: s('variable', 60040),
    symbolVariable: s('symbol-variable', 60040),
    array: s('array', 60042),
    symbolArray: s('symbol-array', 60042),
    symbolModule: s('symbol-module', 60043),
    symbolPackage: s('symbol-package', 60043),
    symbolNamespace: s('symbol-namespace', 60043),
    symbolObject: s('symbol-object', 60043),
    symbolMethod: s('symbol-method', 60044),
    symbolFunction: s('symbol-function', 60044),
    symbolConstructor: s('symbol-constructor', 60044),
    symbolBoolean: s('symbol-boolean', 60047),
    symbolNull: s('symbol-null', 60047),
    symbolNumeric: s('symbol-numeric', 60048),
    symbolNumber: s('symbol-number', 60048),
    symbolStructure: s('symbol-structure', 60049),
    symbolStruct: s('symbol-struct', 60049),
    symbolParameter: s('symbol-parameter', 60050),
    symbolTypeParameter: s('symbol-type-parameter', 60050),
    symbolKey: s('symbol-key', 60051),
    symbolText: s('symbol-text', 60051),
    symbolReference: s('symbol-reference', 60052),
    goToFile: s('go-to-file', 60052),
    symbolEnum: s('symbol-enum', 60053),
    symbolValue: s('symbol-value', 60053),
    symbolRuler: s('symbol-ruler', 60054),
    symbolUnit: s('symbol-unit', 60054),
    activateBreakpoints: s('activate-breakpoints', 60055),
    archive: s('archive', 60056),
    arrowBoth: s('arrow-both', 60057),
    arrowDown: s('arrow-down', 60058),
    arrowLeft: s('arrow-left', 60059),
    arrowRight: s('arrow-right', 60060),
    arrowSmallDown: s('arrow-small-down', 60061),
    arrowSmallLeft: s('arrow-small-left', 60062),
    arrowSmallRight: s('arrow-small-right', 60063),
    arrowSmallUp: s('arrow-small-up', 60064),
    arrowUp: s('arrow-up', 60065),
    bell: s('bell', 60066),
    bold: s('bold', 60067),
    book: s('book', 60068),
    bookmark: s('bookmark', 60069),
    debugBreakpointConditionalUnverified: s('debug-breakpoint-conditional-unverified', 60070),
    debugBreakpointConditional: s('debug-breakpoint-conditional', 60071),
    debugBreakpointConditionalDisabled: s('debug-breakpoint-conditional-disabled', 60071),
    debugBreakpointDataUnverified: s('debug-breakpoint-data-unverified', 60072),
    debugBreakpointData: s('debug-breakpoint-data', 60073),
    debugBreakpointDataDisabled: s('debug-breakpoint-data-disabled', 60073),
    debugBreakpointLogUnverified: s('debug-breakpoint-log-unverified', 60074),
    debugBreakpointLog: s('debug-breakpoint-log', 60075),
    debugBreakpointLogDisabled: s('debug-breakpoint-log-disabled', 60075),
    briefcase: s('briefcase', 60076),
    broadcast: s('broadcast', 60077),
    browser: s('browser', 60078),
    bug: s('bug', 60079),
    calendar: s('calendar', 60080),
    caseSensitive: s('case-sensitive', 60081),
    check: s('check', 60082),
    checklist: s('checklist', 60083),
    chevronDown: s('chevron-down', 60084),
    chevronLeft: s('chevron-left', 60085),
    chevronRight: s('chevron-right', 60086),
    chevronUp: s('chevron-up', 60087),
    chromeClose: s('chrome-close', 60088),
    chromeMaximize: s('chrome-maximize', 60089),
    chromeMinimize: s('chrome-minimize', 60090),
    chromeRestore: s('chrome-restore', 60091),
    circleOutline: s('circle-outline', 60092),
    circle: s('circle', 60092),
    debugBreakpointUnverified: s('debug-breakpoint-unverified', 60092),
    terminalDecorationIncomplete: s('terminal-decoration-incomplete', 60092),
    circleSlash: s('circle-slash', 60093),
    circuitBoard: s('circuit-board', 60094),
    clearAll: s('clear-all', 60095),
    clippy: s('clippy', 60096),
    closeAll: s('close-all', 60097),
    cloudDownload: s('cloud-download', 60098),
    cloudUpload: s('cloud-upload', 60099),
    code: s('code', 60100),
    collapseAll: s('collapse-all', 60101),
    colorMode: s('color-mode', 60102),
    commentDiscussion: s('comment-discussion', 60103),
    creditCard: s('credit-card', 60105),
    dash: s('dash', 60108),
    dashboard: s('dashboard', 60109),
    database: s('database', 60110),
    debugContinue: s('debug-continue', 60111),
    debugDisconnect: s('debug-disconnect', 60112),
    debugPause: s('debug-pause', 60113),
    debugRestart: s('debug-restart', 60114),
    debugStart: s('debug-start', 60115),
    debugStepInto: s('debug-step-into', 60116),
    debugStepOut: s('debug-step-out', 60117),
    debugStepOver: s('debug-step-over', 60118),
    debugStop: s('debug-stop', 60119),
    debug: s('debug', 60120),
    deviceCameraVideo: s('device-camera-video', 60121),
    deviceCamera: s('device-camera', 60122),
    deviceMobile: s('device-mobile', 60123),
    diffAdded: s('diff-added', 60124),
    diffIgnored: s('diff-ignored', 60125),
    diffModified: s('diff-modified', 60126),
    diffRemoved: s('diff-removed', 60127),
    diffRenamed: s('diff-renamed', 60128),
    diff: s('diff', 60129),
    diffSidebyside: s('diff-sidebyside', 60129),
    discard: s('discard', 60130),
    editorLayout: s('editor-layout', 60131),
    emptyWindow: s('empty-window', 60132),
    exclude: s('exclude', 60133),
    extensions: s('extensions', 60134),
    eyeClosed: s('eye-closed', 60135),
    fileBinary: s('file-binary', 60136),
    fileCode: s('file-code', 60137),
    fileMedia: s('file-media', 60138),
    filePdf: s('file-pdf', 60139),
    fileSubmodule: s('file-submodule', 60140),
    fileSymlinkDirectory: s('file-symlink-directory', 60141),
    fileSymlinkFile: s('file-symlink-file', 60142),
    fileZip: s('file-zip', 60143),
    files: s('files', 60144),
    filter: s('filter', 60145),
    flame: s('flame', 60146),
    foldDown: s('fold-down', 60147),
    foldUp: s('fold-up', 60148),
    fold: s('fold', 60149),
    folderActive: s('folder-active', 60150),
    folderOpened: s('folder-opened', 60151),
    gear: s('gear', 60152),
    gift: s('gift', 60153),
    gistSecret: s('gist-secret', 60154),
    gist: s('gist', 60155),
    gitCommit: s('git-commit', 60156),
    gitCompare: s('git-compare', 60157),
    compareChanges: s('compare-changes', 60157),
    gitMerge: s('git-merge', 60158),
    githubAction: s('github-action', 60159),
    githubAlt: s('github-alt', 60160),
    globe: s('globe', 60161),
    grabber: s('grabber', 60162),
    graph: s('graph', 60163),
    gripper: s('gripper', 60164),
    heart: s('heart', 60165),
    home: s('home', 60166),
    horizontalRule: s('horizontal-rule', 60167),
    hubot: s('hubot', 60168),
    inbox: s('inbox', 60169),
    issueReopened: s('issue-reopened', 60171),
    issues: s('issues', 60172),
    italic: s('italic', 60173),
    jersey: s('jersey', 60174),
    json: s('json', 60175),
    kebabVertical: s('kebab-vertical', 60176),
    key: s('key', 60177),
    law: s('law', 60178),
    lightbulbAutofix: s('lightbulb-autofix', 60179),
    linkExternal: s('link-external', 60180),
    link: s('link', 60181),
    listOrdered: s('list-ordered', 60182),
    listUnordered: s('list-unordered', 60183),
    liveShare: s('live-share', 60184),
    loading: s('loading', 60185),
    location: s('location', 60186),
    mailRead: s('mail-read', 60187),
    mail: s('mail', 60188),
    markdown: s('markdown', 60189),
    megaphone: s('megaphone', 60190),
    mention: s('mention', 60191),
    milestone: s('milestone', 60192),
    gitPullRequestMilestone: s('git-pull-request-milestone', 60192),
    mortarBoard: s('mortar-board', 60193),
    move: s('move', 60194),
    multipleWindows: s('multiple-windows', 60195),
    mute: s('mute', 60196),
    noNewline: s('no-newline', 60197),
    note: s('note', 60198),
    octoface: s('octoface', 60199),
    openPreview: s('open-preview', 60200),
    package: s('package', 60201),
    paintcan: s('paintcan', 60202),
    pin: s('pin', 60203),
    play: s('play', 60204),
    run: s('run', 60204),
    plug: s('plug', 60205),
    preserveCase: s('preserve-case', 60206),
    preview: s('preview', 60207),
    project: s('project', 60208),
    pulse: s('pulse', 60209),
    question: s('question', 60210),
    quote: s('quote', 60211),
    radioTower: s('radio-tower', 60212),
    reactions: s('reactions', 60213),
    references: s('references', 60214),
    refresh: s('refresh', 60215),
    regex: s('regex', 60216),
    remoteExplorer: s('remote-explorer', 60217),
    remote: s('remote', 60218),
    remove: s('remove', 60219),
    replaceAll: s('replace-all', 60220),
    replace: s('replace', 60221),
    repoClone: s('repo-clone', 60222),
    repoForcePush: s('repo-force-push', 60223),
    repoPull: s('repo-pull', 60224),
    repoPush: s('repo-push', 60225),
    report: s('report', 60226),
    requestChanges: s('request-changes', 60227),
    rocket: s('rocket', 60228),
    rootFolderOpened: s('root-folder-opened', 60229),
    rootFolder: s('root-folder', 60230),
    rss: s('rss', 60231),
    ruby: s('ruby', 60232),
    saveAll: s('save-all', 60233),
    saveAs: s('save-as', 60234),
    save: s('save', 60235),
    screenFull: s('screen-full', 60236),
    screenNormal: s('screen-normal', 60237),
    searchStop: s('search-stop', 60238),
    server: s('server', 60240),
    settingsGear: s('settings-gear', 60241),
    settings: s('settings', 60242),
    shield: s('shield', 60243),
    smiley: s('smiley', 60244),
    sortPrecedence: s('sort-precedence', 60245),
    splitHorizontal: s('split-horizontal', 60246),
    splitVertical: s('split-vertical', 60247),
    squirrel: s('squirrel', 60248),
    starFull: s('star-full', 60249),
    starHalf: s('star-half', 60250),
    symbolClass: s('symbol-class', 60251),
    symbolColor: s('symbol-color', 60252),
    symbolConstant: s('symbol-constant', 60253),
    symbolEnumMember: s('symbol-enum-member', 60254),
    symbolField: s('symbol-field', 60255),
    symbolFile: s('symbol-file', 60256),
    symbolInterface: s('symbol-interface', 60257),
    symbolKeyword: s('symbol-keyword', 60258),
    symbolMisc: s('symbol-misc', 60259),
    symbolOperator: s('symbol-operator', 60260),
    symbolProperty: s('symbol-property', 60261),
    wrench: s('wrench', 60261),
    wrenchSubaction: s('wrench-subaction', 60261),
    symbolSnippet: s('symbol-snippet', 60262),
    tasklist: s('tasklist', 60263),
    telescope: s('telescope', 60264),
    textSize: s('text-size', 60265),
    threeBars: s('three-bars', 60266),
    thumbsdown: s('thumbsdown', 60267),
    thumbsup: s('thumbsup', 60268),
    tools: s('tools', 60269),
    triangleDown: s('triangle-down', 60270),
    triangleLeft: s('triangle-left', 60271),
    triangleRight: s('triangle-right', 60272),
    triangleUp: s('triangle-up', 60273),
    twitter: s('twitter', 60274),
    unfold: s('unfold', 60275),
    unlock: s('unlock', 60276),
    unmute: s('unmute', 60277),
    unverified: s('unverified', 60278),
    verified: s('verified', 60279),
    versions: s('versions', 60280),
    vmActive: s('vm-active', 60281),
    vmOutline: s('vm-outline', 60282),
    vmRunning: s('vm-running', 60283),
    watch: s('watch', 60284),
    whitespace: s('whitespace', 60285),
    wholeWord: s('whole-word', 60286),
    window: s('window', 60287),
    wordWrap: s('word-wrap', 60288),
    zoomIn: s('zoom-in', 60289),
    zoomOut: s('zoom-out', 60290),
    listFilter: s('list-filter', 60291),
    listFlat: s('list-flat', 60292),
    listSelection: s('list-selection', 60293),
    selection: s('selection', 60293),
    listTree: s('list-tree', 60294),
    debugBreakpointFunctionUnverified: s('debug-breakpoint-function-unverified', 60295),
    debugBreakpointFunction: s('debug-breakpoint-function', 60296),
    debugBreakpointFunctionDisabled: s('debug-breakpoint-function-disabled', 60296),
    debugStackframeActive: s('debug-stackframe-active', 60297),
    circleSmallFilled: s('circle-small-filled', 60298),
    debugStackframeDot: s('debug-stackframe-dot', 60298),
    terminalDecorationMark: s('terminal-decoration-mark', 60298),
    debugStackframe: s('debug-stackframe', 60299),
    debugStackframeFocused: s('debug-stackframe-focused', 60299),
    debugBreakpointUnsupported: s('debug-breakpoint-unsupported', 60300),
    symbolString: s('symbol-string', 60301),
    debugReverseContinue: s('debug-reverse-continue', 60302),
    debugStepBack: s('debug-step-back', 60303),
    debugRestartFrame: s('debug-restart-frame', 60304),
    debugAlt: s('debug-alt', 60305),
    callIncoming: s('call-incoming', 60306),
    callOutgoing: s('call-outgoing', 60307),
    menu: s('menu', 60308),
    expandAll: s('expand-all', 60309),
    feedback: s('feedback', 60310),
    gitPullRequestReviewer: s('git-pull-request-reviewer', 60310),
    groupByRefType: s('group-by-ref-type', 60311),
    ungroupByRefType: s('ungroup-by-ref-type', 60312),
    account: s('account', 60313),
    gitPullRequestAssignee: s('git-pull-request-assignee', 60313),
    bellDot: s('bell-dot', 60314),
    debugConsole: s('debug-console', 60315),
    library: s('library', 60316),
    output: s('output', 60317),
    runAll: s('run-all', 60318),
    syncIgnored: s('sync-ignored', 60319),
    pinned: s('pinned', 60320),
    githubInverted: s('github-inverted', 60321),
    serverProcess: s('server-process', 60322),
    serverEnvironment: s('server-environment', 60323),
    pass: s('pass', 60324),
    issueClosed: s('issue-closed', 60324),
    stopCircle: s('stop-circle', 60325),
    playCircle: s('play-circle', 60326),
    record: s('record', 60327),
    debugAltSmall: s('debug-alt-small', 60328),
    vmConnect: s('vm-connect', 60329),
    cloud: s('cloud', 60330),
    merge: s('merge', 60331),
    export: s('export', 60332),
    graphLeft: s('graph-left', 60333),
    magnet: s('magnet', 60334),
    notebook: s('notebook', 60335),
    redo: s('redo', 60336),
    checkAll: s('check-all', 60337),
    pinnedDirty: s('pinned-dirty', 60338),
    passFilled: s('pass-filled', 60339),
    circleLargeFilled: s('circle-large-filled', 60340),
    circleLarge: s('circle-large', 60341),
    circleLargeOutline: s('circle-large-outline', 60341),
    combine: s('combine', 60342),
    gather: s('gather', 60342),
    table: s('table', 60343),
    variableGroup: s('variable-group', 60344),
    typeHierarchy: s('type-hierarchy', 60345),
    typeHierarchySub: s('type-hierarchy-sub', 60346),
    typeHierarchySuper: s('type-hierarchy-super', 60347),
    gitPullRequestCreate: s('git-pull-request-create', 60348),
    runAbove: s('run-above', 60349),
    runBelow: s('run-below', 60350),
    notebookTemplate: s('notebook-template', 60351),
    debugRerun: s('debug-rerun', 60352),
    workspaceTrusted: s('workspace-trusted', 60353),
    workspaceUntrusted: s('workspace-untrusted', 60354),
    workspaceUnknown: s('workspace-unknown', 60355),
    terminalCmd: s('terminal-cmd', 60356),
    terminalDebian: s('terminal-debian', 60357),
    terminalLinux: s('terminal-linux', 60358),
    terminalPowershell: s('terminal-powershell', 60359),
    terminalTmux: s('terminal-tmux', 60360),
    terminalUbuntu: s('terminal-ubuntu', 60361),
    terminalBash: s('terminal-bash', 60362),
    arrowSwap: s('arrow-swap', 60363),
    copy: s('copy', 60364),
    personAdd: s('person-add', 60365),
    filterFilled: s('filter-filled', 60366),
    wand: s('wand', 60367),
    debugLineByLine: s('debug-line-by-line', 60368),
    inspect: s('inspect', 60369),
    layers: s('layers', 60370),
    layersDot: s('layers-dot', 60371),
    layersActive: s('layers-active', 60372),
    compass: s('compass', 60373),
    compassDot: s('compass-dot', 60374),
    compassActive: s('compass-active', 60375),
    azure: s('azure', 60376),
    issueDraft: s('issue-draft', 60377),
    gitPullRequestClosed: s('git-pull-request-closed', 60378),
    gitPullRequestDraft: s('git-pull-request-draft', 60379),
    debugAll: s('debug-all', 60380),
    debugCoverage: s('debug-coverage', 60381),
    runErrors: s('run-errors', 60382),
    folderLibrary: s('folder-library', 60383),
    debugContinueSmall: s('debug-continue-small', 60384),
    beakerStop: s('beaker-stop', 60385),
    graphLine: s('graph-line', 60386),
    graphScatter: s('graph-scatter', 60387),
    pieChart: s('pie-chart', 60388),
    bracket: s('bracket', 60175),
    bracketDot: s('bracket-dot', 60389),
    bracketError: s('bracket-error', 60390),
    lockSmall: s('lock-small', 60391),
    azureDevops: s('azure-devops', 60392),
    verifiedFilled: s('verified-filled', 60393),
    newline: s('newline', 60394),
    layout: s('layout', 60395),
    layoutActivitybarLeft: s('layout-activitybar-left', 60396),
    layoutActivitybarRight: s('layout-activitybar-right', 60397),
    layoutPanelLeft: s('layout-panel-left', 60398),
    layoutPanelCenter: s('layout-panel-center', 60399),
    layoutPanelJustify: s('layout-panel-justify', 60400),
    layoutPanelRight: s('layout-panel-right', 60401),
    layoutPanel: s('layout-panel', 60402),
    layoutSidebarLeft: s('layout-sidebar-left', 60403),
    layoutSidebarRight: s('layout-sidebar-right', 60404),
    layoutStatusbar: s('layout-statusbar', 60405),
    layoutMenubar: s('layout-menubar', 60406),
    layoutCentered: s('layout-centered', 60407),
    target: s('target', 60408),
    indent: s('indent', 60409),
    recordSmall: s('record-small', 60410),
    errorSmall: s('error-small', 60411),
    terminalDecorationError: s('terminal-decoration-error', 60411),
    arrowCircleDown: s('arrow-circle-down', 60412),
    arrowCircleLeft: s('arrow-circle-left', 60413),
    arrowCircleRight: s('arrow-circle-right', 60414),
    arrowCircleUp: s('arrow-circle-up', 60415),
    layoutSidebarRightOff: s('layout-sidebar-right-off', 60416),
    layoutPanelOff: s('layout-panel-off', 60417),
    layoutSidebarLeftOff: s('layout-sidebar-left-off', 60418),
    blank: s('blank', 60419),
    heartFilled: s('heart-filled', 60420),
    map: s('map', 60421),
    mapHorizontal: s('map-horizontal', 60421),
    foldHorizontal: s('fold-horizontal', 60421),
    mapFilled: s('map-filled', 60422),
    mapHorizontalFilled: s('map-horizontal-filled', 60422),
    foldHorizontalFilled: s('fold-horizontal-filled', 60422),
    circleSmall: s('circle-small', 60423),
    bellSlash: s('bell-slash', 60424),
    bellSlashDot: s('bell-slash-dot', 60425),
    commentUnresolved: s('comment-unresolved', 60426),
    gitPullRequestGoToChanges: s('git-pull-request-go-to-changes', 60427),
    gitPullRequestNewChanges: s('git-pull-request-new-changes', 60428),
    searchFuzzy: s('search-fuzzy', 60429),
    commentDraft: s('comment-draft', 60430),
    send: s('send', 60431),
    sparkle: s('sparkle', 60432),
    insert: s('insert', 60433),
    mic: s('mic', 60434),
    thumbsdownFilled: s('thumbsdown-filled', 60435),
    thumbsupFilled: s('thumbsup-filled', 60436),
    coffee: s('coffee', 60437),
    snake: s('snake', 60438),
    game: s('game', 60439),
    vr: s('vr', 60440),
    chip: s('chip', 60441),
    piano: s('piano', 60442),
    music: s('music', 60443),
    micFilled: s('mic-filled', 60444),
    repoFetch: s('repo-fetch', 60445),
    copilot: s('copilot', 60446),
    lightbulbSparkle: s('lightbulb-sparkle', 60447),
    robot: s('robot', 60448),
    sparkleFilled: s('sparkle-filled', 60449),
    diffSingle: s('diff-single', 60450),
    diffMultiple: s('diff-multiple', 60451),
    surroundWith: s('surround-with', 60452),
    share: s('share', 60453),
    gitStash: s('git-stash', 60454),
    gitStashApply: s('git-stash-apply', 60455),
    gitStashPop: s('git-stash-pop', 60456),
    vscode: s('vscode', 60457),
    vscodeInsiders: s('vscode-insiders', 60458),
    codeOss: s('code-oss', 60459),
    runCoverage: s('run-coverage', 60460),
    runAllCoverage: s('run-all-coverage', 60461),
    coverage: s('coverage', 60462),
    githubProject: s('github-project', 60463),
    mapVertical: s('map-vertical', 60464),
    foldVertical: s('fold-vertical', 60464),
    mapVerticalFilled: s('map-vertical-filled', 60465),
    foldVerticalFilled: s('fold-vertical-filled', 60465),
    goToSearch: s('go-to-search', 60466),
    percentage: s('percentage', 60467),
    sortPercentage: s('sort-percentage', 60467),
    attach: s('attach', 60468),
    goToEditingSession: s('go-to-editing-session', 60469),
    editSession: s('edit-session', 60470),
    codeReview: s('code-review', 60471),
    copilotWarning: s('copilot-warning', 60472),
    python: s('python', 60473),
    copilotLarge: s('copilot-large', 60474),
    copilotWarningLarge: s('copilot-warning-large', 60475),
    terminalTwo: s('terminal-two', 60800),
    checkTwo: s('check-two', 60801),
    xTwo: s('x-two', 60802),
    expander: s('expander', 60803),
    restore: s('restore', 60804),
    pinTwo: s('pin-two', 60805),
    stopTwo: s('stop-two', 60806),
    brain: s('brain', 60807),
    magnifyingGlass: s('magnifying-glass', 60808),
    imageTwo: s('image-two', 60809),
    microphone: s('microphone', 60810),
    submit: s('submit', 60811),
    running: s('running', 60812),
    fileAddTwo: s('file-add-two', 60813),
    infinity: s('infinity', 60814),
    editTwo: s('edit-two', 60815),
    stopThree: s('stop-three', 60816),
    warningTwo: s('warning-two', 60817),
    arrowLeftTwo: s('arrow-left-two', 60818),
    redoTwo: s('redo-two', 60819),
    infoTwo: s('info-two', 60820),
    chat: s('chat', 60821),
    thumbsDown: s('thumbs-down', 60822),
    thumbsUp: s('thumbs-up', 60823),
    thumbsDownFilled: s('thumbs-down-filled', 60824),
    thumbsUpFilled: s('thumbs-up-filled', 60825),
    copyTwo: s('copy-two', 60826),
    ellipsisTwo: s('ellipsis-two', 60827),
    eyeTwo: s('eye-two', 60828),
    globeTwo: s('globe-two', 60829),
    reload: s('reload', 60830),
    folderTwo: s('folder-two', 60831),
    eraser: s('eraser', 60832),
    swirlSparkle: s('swirl-sparkle', 60833),
    sendTwo: s('send-two', 60834),
    inboxTwo: s('inbox-two', 60835),
    fileTwo: s('file-two', 60836),
    list: s('list', 60837),
    calendarTwo: s('calendar-two', 60838),
    openNotebook: s('open-notebook', 60839),
    paperWords: s('paper-words', 60840),
    mortarboard: s('mortarboard', 60841),
    lightning: s('lightning', 60842),
    hammer: s('hammer', 60843),
    keyboardTwo: s('keyboard-two', 60844),
    arrowUpTwo: s('arrow-up-two', 60845),
    import: s('import', 60846),
    targetTwo: s('target-two', 60847),
    tab: s('tab', 60848),
    magic: s('magic', 60849),
    cloneTwo: s('clone-two', 60850),
    brush: s('brush', 60851),
  },
  Ps = {
    dialogError: s('dialog-error', 'error'),
    dialogWarning: s('dialog-warning', 'warning'),
    dialogInfo: s('dialog-info', 'info'),
    dialogClose: s('dialog-close', 'close'),
    treeItemExpanded: s('tree-item-expanded', 'chevron-down'),
    treeFilterOnTypeOn: s('tree-filter-on-type-on', 'list-filter'),
    treeFilterOnTypeOff: s('tree-filter-on-type-off', 'list-selection'),
    treeFilterClear: s('tree-filter-clear', 'close'),
    treeItemLoading: s('tree-item-loading', 'loading'),
    menuSelection: s('menu-selection', 'check'),
    menuSubmenu: s('menu-submenu', 'chevron-right'),
    menuBarMore: s('menubar-more', 'more'),
    scrollbarButtonLeft: s('scrollbar-button-left', 'triangle-left'),
    scrollbarButtonRight: s('scrollbar-button-right', 'triangle-right'),
    scrollbarButtonUp: s('scrollbar-button-up', 'triangle-up'),
    scrollbarButtonDown: s('scrollbar-button-down', 'triangle-down'),
    toolBarMore: s('toolbar-more', 'more'),
    quickInputBack: s('quick-input-back', 'arrow-left'),
    dropDownButton: s('drop-down-button', 60084),
    symbolCustomColor: s('symbol-customcolor', 60252),
    exportIcon: s('export', 60332),
    workspaceUnspecified: s('workspace-unspecified', 60355),
    newLine: s('newline', 60394),
    gitFetch: s('git-fetch', 60445),
    lightbulbSparkleAutofix: s('lightbulb-sparkle-autofix', 60447),
    debugBreakpointPending: s('debug-breakpoint-pending', 60377),
  },
  w = _objectSpread(_objectSpread({}, Os), Ps),
  gr = /*#__PURE__*/ (function () {
    function gr() {
      _classCallCheck(this, gr);
      (this.a = new Map()),
        (this.b = new Map()),
        (this.c = new X()),
        (this.onDidChange = this.c.event),
        (this.d = null);
    }
    return _createClass(gr, [
      {
        key: 'handleChange',
        value: function handleChange(e) {
          this.c.fire({ changedLanguages: e, changedColorMap: !1 });
        },
      },
      {
        key: 'register',
        value: function register(e, t) {
          var _this33 = this;
          return (
            this.a.set(e, t),
            this.handleChange([e]),
            xe(function () {
              _this33.a.get(e) === t && (_this33.a['delete'](e), _this33.handleChange([e]));
            })
          );
        },
      },
      {
        key: 'get',
        value: function get(e) {
          return this.a.get(e) || null;
        },
      },
      {
        key: 'registerFactory',
        value: function registerFactory(e, t) {
          var _this$b$get,
            _this34 = this;
          (_this$b$get = this.b.get(e)) === null || _this$b$get === void 0 || _this$b$get.dispose();
          var r = new Rs(this, e, t);
          return (
            this.b.set(e, r),
            xe(function () {
              var n = _this34.b.get(e);
              !n || n !== r || (_this34.b['delete'](e), n.dispose());
            })
          );
        },
      },
      {
        key: 'getOrCreate',
        value: (function () {
          var _getOrCreate = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee19(e) {
              var t, r;
              return _regeneratorRuntime().wrap(
                function _callee19$(_context31) {
                  while (1)
                    switch ((_context31.prev = _context31.next)) {
                      case 0:
                        t = this.get(e);
                        if (!t) {
                          _context31.next = 3;
                          break;
                        }
                        return _context31.abrupt('return', t);
                      case 3:
                        r = this.b.get(e);
                        if (!(!r || r.isResolved)) {
                          _context31.next = 8;
                          break;
                        }
                        _context31.t0 = null;
                        _context31.next = 11;
                        break;
                      case 8:
                        _context31.next = 10;
                        return r.resolve();
                      case 10:
                        _context31.t0 = this.get(e);
                      case 11:
                        return _context31.abrupt('return', _context31.t0);
                      case 12:
                      case 'end':
                        return _context31.stop();
                    }
                },
                _callee19,
                this,
              );
            }),
          );
          function getOrCreate(_x20) {
            return _getOrCreate.apply(this, arguments);
          }
          return getOrCreate;
        })(),
      },
      {
        key: 'isResolved',
        value: function isResolved(e) {
          if (this.get(e)) return !0;
          var r = this.b.get(e);
          return !!(!r || r.isResolved);
        },
      },
      {
        key: 'setColorMap',
        value: function setColorMap(e) {
          (this.d = e),
            this.c.fire({ changedLanguages: Array.from(this.a.keys()), changedColorMap: !0 });
        },
      },
      {
        key: 'getColorMap',
        value: function getColorMap() {
          return this.d;
        },
      },
      {
        key: 'getDefaultBackground',
        value: function getDefaultBackground() {
          return this.d && this.d.length > 2 ? this.d[2] : null;
        },
      },
    ]);
  })(),
  Rs = /*#__PURE__*/ (function (_re2) {
    function Rs(e, t, r) {
      var _this35;
      _classCallCheck(this, Rs);
      (_this35 = _callSuper(this, Rs)),
        (_this35.f = e),
        (_this35.g = t),
        (_this35.h = r),
        (_this35.a = !1),
        (_this35.b = null),
        (_this35.c = !1);
      return _this35;
    }
    _inherits(Rs, _re2);
    return _createClass(Rs, [
      {
        key: 'isResolved',
        get: function get() {
          return this.c;
        },
      },
      {
        key: 'dispose',
        value: function dispose() {
          (this.a = !0), _superPropGet(Rs, 'dispose', this, 3)([]);
        },
      },
      {
        key: 'resolve',
        value: (function () {
          var _resolve = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20() {
              return _regeneratorRuntime().wrap(
                function _callee20$(_context32) {
                  while (1)
                    switch ((_context32.prev = _context32.next)) {
                      case 0:
                        return _context32.abrupt('return', (this.b || (this.b = this.j()), this.b));
                      case 1:
                      case 'end':
                        return _context32.stop();
                    }
                },
                _callee20,
                this,
              );
            }),
          );
          function resolve() {
            return _resolve.apply(this, arguments);
          }
          return resolve;
        })(),
      },
      {
        key: 'j',
        value: (function () {
          var _j2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee21() {
              var e;
              return _regeneratorRuntime().wrap(
                function _callee21$(_context33) {
                  while (1)
                    switch ((_context33.prev = _context33.next)) {
                      case 0:
                        _context33.next = 2;
                        return this.h.tokenizationSupport;
                      case 2:
                        e = _context33.sent;
                        (this.c = !0), e && !this.a && this.D(this.f.register(this.g, e));
                      case 4:
                      case 'end':
                        return _context33.stop();
                    }
                },
                _callee21,
                this,
              );
            }),
          );
          function j() {
            return _j2.apply(this, arguments);
          }
          return j;
        })(),
      },
    ]);
  })(re),
  qt = /*#__PURE__*/ _createClass(function qt(e, t) {
    _classCallCheck(this, qt);
    (this.tokens = e), (this.endState = t), (this._encodedTokenizationResultBrand = void 0);
  }),
  br;
(function (e) {
  (e[(e.Increase = 0)] = 'Increase'), (e[(e.Decrease = 1)] = 'Decrease');
})(br || (br = {}));
var pr;
(function (e) {
  (e[(e.Method = 0)] = 'Method'),
    (e[(e.Function = 1)] = 'Function'),
    (e[(e.Constructor = 2)] = 'Constructor'),
    (e[(e.Field = 3)] = 'Field'),
    (e[(e.Variable = 4)] = 'Variable'),
    (e[(e.Class = 5)] = 'Class'),
    (e[(e.Struct = 6)] = 'Struct'),
    (e[(e.Interface = 7)] = 'Interface'),
    (e[(e.Module = 8)] = 'Module'),
    (e[(e.Property = 9)] = 'Property'),
    (e[(e.Event = 10)] = 'Event'),
    (e[(e.Operator = 11)] = 'Operator'),
    (e[(e.Unit = 12)] = 'Unit'),
    (e[(e.Value = 13)] = 'Value'),
    (e[(e.Constant = 14)] = 'Constant'),
    (e[(e.Enum = 15)] = 'Enum'),
    (e[(e.EnumMember = 16)] = 'EnumMember'),
    (e[(e.Keyword = 17)] = 'Keyword'),
    (e[(e.Text = 18)] = 'Text'),
    (e[(e.Color = 19)] = 'Color'),
    (e[(e.File = 20)] = 'File'),
    (e[(e.Reference = 21)] = 'Reference'),
    (e[(e.Customcolor = 22)] = 'Customcolor'),
    (e[(e.Folder = 23)] = 'Folder'),
    (e[(e.TypeParameter = 24)] = 'TypeParameter'),
    (e[(e.User = 25)] = 'User'),
    (e[(e.Issue = 26)] = 'Issue'),
    (e[(e.Snippet = 27)] = 'Snippet');
})(pr || (pr = {}));
var vr;
(function (e) {
  var t = new Map();
  t.set(0, w.symbolMethod),
    t.set(1, w.symbolFunction),
    t.set(2, w.symbolConstructor),
    t.set(3, w.symbolField),
    t.set(4, w.symbolVariable),
    t.set(5, w.symbolClass),
    t.set(6, w.symbolStruct),
    t.set(7, w.symbolInterface),
    t.set(8, w.symbolModule),
    t.set(9, w.symbolProperty),
    t.set(10, w.symbolEvent),
    t.set(11, w.symbolOperator),
    t.set(12, w.symbolUnit),
    t.set(13, w.symbolValue),
    t.set(15, w.symbolEnum),
    t.set(14, w.symbolConstant),
    t.set(15, w.symbolEnum),
    t.set(16, w.symbolEnumMember),
    t.set(17, w.symbolKeyword),
    t.set(27, w.symbolSnippet),
    t.set(18, w.symbolText),
    t.set(19, w.symbolColor),
    t.set(20, w.symbolFile),
    t.set(21, w.symbolReference),
    t.set(22, w.symbolCustomColor),
    t.set(23, w.symbolFolder),
    t.set(24, w.symbolTypeParameter),
    t.set(25, w.account),
    t.set(26, w.issues);
  function r(o) {
    var a = t.get(o);
    return (
      a || (console.info('No codicon found for CompletionItemKind ' + o), (a = w.symbolProperty)), a
    );
  }
  e.toIcon = r;
  var n = new Map();
  n.set('method', 0),
    n.set('function', 1),
    n.set('constructor', 2),
    n.set('field', 3),
    n.set('variable', 4),
    n.set('class', 5),
    n.set('struct', 6),
    n.set('interface', 7),
    n.set('module', 8),
    n.set('property', 9),
    n.set('event', 10),
    n.set('operator', 11),
    n.set('unit', 12),
    n.set('value', 13),
    n.set('constant', 14),
    n.set('enum', 15),
    n.set('enum-member', 16),
    n.set('enumMember', 16),
    n.set('keyword', 17),
    n.set('snippet', 27),
    n.set('text', 18),
    n.set('color', 19),
    n.set('file', 20),
    n.set('reference', 21),
    n.set('customcolor', 22),
    n.set('folder', 23),
    n.set('type-parameter', 24),
    n.set('typeParameter', 24),
    n.set('account', 25),
    n.set('issue', 26);
  function i(o, a) {
    var l = n.get(o);
    return _typeof(l) > 'u' && !a && (l = 9), l;
  }
  e.fromString = i;
})(vr || (vr = {}));
var wr;
(function (e) {
  e[(e.Deprecated = 1)] = 'Deprecated';
})(wr || (wr = {}));
var yr;
(function (e) {
  (e[(e.None = 0)] = 'None'),
    (e[(e.KeepWhitespace = 1)] = 'KeepWhitespace'),
    (e[(e.InsertAsSnippet = 4)] = 'InsertAsSnippet');
})(yr || (yr = {}));
var Er;
(function (e) {
  (e[(e.Word = 0)] = 'Word'), (e[(e.Line = 1)] = 'Line'), (e[(e.Suggest = 2)] = 'Suggest');
})(Er || (Er = {}));
var Nr;
(function (e) {
  (e[(e.Invoke = 0)] = 'Invoke'),
    (e[(e.TriggerCharacter = 1)] = 'TriggerCharacter'),
    (e[(e.TriggerForIncompleteCompletions = 2)] = 'TriggerForIncompleteCompletions');
})(Nr || (Nr = {}));
var Lr;
(function (e) {
  (e[(e.Automatic = 0)] = 'Automatic'), (e[(e.Explicit = 1)] = 'Explicit');
})(Lr || (Lr = {}));
var kr;
(function (e) {
  (e[(e.Invoke = 1)] = 'Invoke'), (e[(e.Auto = 2)] = 'Auto');
})(kr || (kr = {}));
var Ar;
(function (e) {
  (e[(e.Automatic = 0)] = 'Automatic'), (e[(e.PasteAs = 1)] = 'PasteAs');
})(Ar || (Ar = {}));
var Cr;
(function (e) {
  (e[(e.Invoke = 1)] = 'Invoke'),
    (e[(e.TriggerCharacter = 2)] = 'TriggerCharacter'),
    (e[(e.ContentChange = 3)] = 'ContentChange');
})(Cr || (Cr = {}));
var Sr;
(function (e) {
  (e[(e.Text = 0)] = 'Text'), (e[(e.Read = 1)] = 'Read'), (e[(e.Write = 2)] = 'Write');
})(Sr || (Sr = {}));
var xr;
(function (e) {
  (e[(e.File = 0)] = 'File'),
    (e[(e.Module = 1)] = 'Module'),
    (e[(e.Namespace = 2)] = 'Namespace'),
    (e[(e.Package = 3)] = 'Package'),
    (e[(e.Class = 4)] = 'Class'),
    (e[(e.Method = 5)] = 'Method'),
    (e[(e.Property = 6)] = 'Property'),
    (e[(e.Field = 7)] = 'Field'),
    (e[(e.Constructor = 8)] = 'Constructor'),
    (e[(e.Enum = 9)] = 'Enum'),
    (e[(e.Interface = 10)] = 'Interface'),
    (e[(e.Function = 11)] = 'Function'),
    (e[(e.Variable = 12)] = 'Variable'),
    (e[(e.Constant = 13)] = 'Constant'),
    (e[(e.String = 14)] = 'String'),
    (e[(e.Number = 15)] = 'Number'),
    (e[(e.Boolean = 16)] = 'Boolean'),
    (e[(e.Array = 17)] = 'Array'),
    (e[(e.Object = 18)] = 'Object'),
    (e[(e.Key = 19)] = 'Key'),
    (e[(e.Null = 20)] = 'Null'),
    (e[(e.EnumMember = 21)] = 'EnumMember'),
    (e[(e.Struct = 22)] = 'Struct'),
    (e[(e.Event = 23)] = 'Event'),
    (e[(e.Operator = 24)] = 'Operator'),
    (e[(e.TypeParameter = 25)] = 'TypeParameter');
})(xr || (xr = {}));
var Y0 = {
    17: _(806, null),
    16: _(807, null),
    4: _(808, null),
    13: _(809, null),
    8: _(810, null),
    9: _(811, null),
    21: _(812, null),
    23: _(813, null),
    7: _(814, null),
    0: _(815, null),
    11: _(816, null),
    10: _(817, null),
    19: _(818, null),
    5: _(819, null),
    1: _(820, null),
    2: _(821, null),
    20: _(822, null),
    15: _(823, null),
    18: _(824, null),
    24: _(825, null),
    3: _(826, null),
    6: _(827, null),
    14: _(828, null),
    22: _(829, null),
    25: _(830, null),
    12: _(831, null),
  },
  $r;
(function (e) {
  e[(e.Deprecated = 1)] = 'Deprecated';
})($r || ($r = {}));
var Tr;
(function (e) {
  var t = new Map();
  t.set(0, w.symbolFile),
    t.set(1, w.symbolModule),
    t.set(2, w.symbolNamespace),
    t.set(3, w.symbolPackage),
    t.set(4, w.symbolClass),
    t.set(5, w.symbolMethod),
    t.set(6, w.symbolProperty),
    t.set(7, w.symbolField),
    t.set(8, w.symbolConstructor),
    t.set(9, w.symbolEnum),
    t.set(10, w.symbolInterface),
    t.set(11, w.symbolFunction),
    t.set(12, w.symbolVariable),
    t.set(13, w.symbolConstant),
    t.set(14, w.symbolString),
    t.set(15, w.symbolNumber),
    t.set(16, w.symbolBoolean),
    t.set(17, w.symbolArray),
    t.set(18, w.symbolObject),
    t.set(19, w.symbolKey),
    t.set(20, w.symbolNull),
    t.set(21, w.symbolEnumMember),
    t.set(22, w.symbolStruct),
    t.set(23, w.symbolEvent),
    t.set(24, w.symbolOperator),
    t.set(25, w.symbolTypeParameter);
  function r(o) {
    var a = t.get(o);
    return a || (console.info('No codicon found for SymbolKind ' + o), (a = w.symbolProperty)), a;
  }
  e.toIcon = r;
  var n = new Map();
  n.set(0, 20),
    n.set(1, 8),
    n.set(2, 8),
    n.set(3, 8),
    n.set(4, 5),
    n.set(5, 0),
    n.set(6, 9),
    n.set(7, 3),
    n.set(8, 2),
    n.set(9, 15),
    n.set(10, 7),
    n.set(11, 1),
    n.set(12, 4),
    n.set(13, 14),
    n.set(14, 18),
    n.set(15, 13),
    n.set(16, 13),
    n.set(17, 13),
    n.set(18, 13),
    n.set(19, 17),
    n.set(20, 13),
    n.set(21, 16),
    n.set(22, 6),
    n.set(23, 10),
    n.set(24, 11),
    n.set(25, 24);
  function i(o) {
    var a = n.get(o);
    return (
      a === void 0 && (console.info('No completion kind found for SymbolKind ' + o), (a = 20)), a
    );
  }
  e.toCompletionKind = i;
})(Tr || (Tr = {}));
var J0 =
    ((_de = /*#__PURE__*/ (function () {
      function de(t) {
        _classCallCheck(this, de);
        this.value = t;
      }
      return _createClass(de, null, [
        {
          key: 'fromValue',
          value: function fromValue(t) {
            switch (t) {
              case 'comment':
                return de.Comment;
              case 'imports':
                return de.Imports;
              case 'region':
                return de.Region;
            }
            return new de(t);
          },
        },
      ]);
    })()),
    (_de.Comment = new _de('comment')),
    (_de.Imports = new _de('imports')),
    (_de.Region = new _de('region')),
    _de),
  _r;
(function (e) {
  e[(e.AIGenerated = 1)] = 'AIGenerated';
})(_r || (_r = {}));
var Or;
(function (e) {
  (e[(e.Invoke = 0)] = 'Invoke'), (e[(e.Automatic = 1)] = 'Automatic');
})(Or || (Or = {}));
var Pr;
(function (e) {
  function t(r) {
    return !r || _typeof(r) != 'object'
      ? !1
      : typeof r.id == 'string' && typeof r.title == 'string';
  }
  e.is = t;
})(Pr || (Pr = {}));
var Rr;
(function (e) {
  (e[(e.Collapsed = 0)] = 'Collapsed'), (e[(e.Expanded = 1)] = 'Expanded');
})(Rr || (Rr = {}));
var Mr;
(function (e) {
  (e[(e.Unresolved = 0)] = 'Unresolved'), (e[(e.Resolved = 1)] = 'Resolved');
})(Mr || (Mr = {}));
var Dr;
(function (e) {
  (e[(e.Current = 0)] = 'Current'), (e[(e.Outdated = 1)] = 'Outdated');
})(Dr || (Dr = {}));
var Fr;
(function (e) {
  (e[(e.Editing = 0)] = 'Editing'), (e[(e.Preview = 1)] = 'Preview');
})(Fr || (Fr = {}));
var jr;
(function (e) {
  (e[(e.Published = 0)] = 'Published'), (e[(e.Draft = 1)] = 'Draft');
})(jr || (jr = {}));
var Ir;
(function (e) {
  (e[(e.Type = 1)] = 'Type'), (e[(e.Parameter = 2)] = 'Parameter');
})(Ir || (Ir = {}));
var X0 = new gr(),
  Q0 = new gr(),
  Ur;
(function (e) {
  (e[(e.None = 0)] = 'None'),
    (e[(e.Option = 1)] = 'Option'),
    (e[(e.Default = 2)] = 'Default'),
    (e[(e.Preferred = 3)] = 'Preferred');
})(Ur || (Ur = {}));
var zr;
(function (e) {
  (e[(e.Invoke = 0)] = 'Invoke'), (e[(e.Automatic = 1)] = 'Automatic');
})(zr || (zr = {}));
var Ms = new /*#__PURE__*/ ((function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }
  return _createClass(_class2, [
    {
      key: 'clone',
      value: function clone() {
        return this;
      },
    },
    {
      key: 'equals',
      value: function equals(e) {
        return this === e;
      },
    },
  ]);
})())();
function Ds(e, t) {
  var r = new Uint32Array(2);
  return (
    (r[0] = 0),
    (r[1] = ((e << 0) | 0 | 0 | 32768 | (2 << 24)) >>> 0),
    new qt(r, t === null ? Ms : t)
  );
}
var Fs = /*#__PURE__*/ (function () {
  function Fs(e) {
    _classCallCheck(this, Fs);
    (this.b = e), (this.a = []);
  }
  return _createClass(Fs, [
    {
      key: 'get',
      value: function get(e) {
        return e < this.a.length ? this.a[e] : this.b;
      },
    },
    {
      key: 'set',
      value: function set(e, t) {
        for (; e >= this.a.length; ) this.a[this.a.length] = this.b;
        this.a[e] = t;
      },
    },
    {
      key: 'replace',
      value: function replace(e, t, r) {
        if (e >= this.a.length) return;
        if (t === 0) {
          this.insert(e, r);
          return;
        } else if (r === 0) {
          this['delete'](e, t);
          return;
        }
        var n = this.a.slice(0, e),
          i = this.a.slice(e + t),
          o = js(r, this.b);
        this.a = n.concat(o, i);
      },
    },
    {
      key: 'delete',
      value: function _delete(e, t) {
        t === 0 || e >= this.a.length || this.a.splice(e, t);
      },
    },
    {
      key: 'insert',
      value: function insert(e, t) {
        if (t === 0 || e >= this.a.length) return;
        var r = [];
        for (var n = 0; n < t; n++) r[n] = this.b;
        this.a = w1(this.a, e, r);
      },
    },
  ]);
})();
function js(e, t) {
  var r = [];
  for (var n = 0; n < e; n++) r[n] = t;
  return r;
}
var K0 = new Tt(function () {
  return new Uint8Array(256);
});
function ct(e, t) {
  return e[t] * Math.pow(2, 24) + e[t + 1] * Math.pow(2, 16) + e[t + 2] * Math.pow(2, 8) + e[t + 3];
}
function ht(e, t, r) {
  (e[r + 3] = t),
    (t = t >>> 8),
    (e[r + 2] = t),
    (t = t >>> 8),
    (e[r + 1] = t),
    (t = t >>> 8),
    (e[r] = t);
}
var qr;
(function (e) {
  (e[(e.Null = 0)] = 'Null'), (e[(e.PlainText = 1)] = 'PlainText');
})(qr || (qr = {}));
var Br;
(function (e) {
  (e[(e.NotSet = -1)] = 'NotSet'),
    (e[(e.None = 0)] = 'None'),
    (e[(e.Italic = 1)] = 'Italic'),
    (e[(e.Bold = 2)] = 'Bold'),
    (e[(e.Underline = 4)] = 'Underline'),
    (e[(e.Strikethrough = 8)] = 'Strikethrough');
})(Br || (Br = {}));
var Wr;
(function (e) {
  (e[(e.None = 0)] = 'None'),
    (e[(e.DefaultForeground = 1)] = 'DefaultForeground'),
    (e[(e.DefaultBackground = 2)] = 'DefaultBackground');
})(Wr || (Wr = {}));
var Vr;
(function (e) {
  (e[(e.Other = 0)] = 'Other'),
    (e[(e.Comment = 1)] = 'Comment'),
    (e[(e.String = 2)] = 'String'),
    (e[(e.RegEx = 3)] = 'RegEx');
})(Vr || (Vr = {}));
var Gr;
(function (e) {
  (e[(e.LANGUAGEID_MASK = 255)] = 'LANGUAGEID_MASK'),
    (e[(e.TOKEN_TYPE_MASK = 768)] = 'TOKEN_TYPE_MASK'),
    (e[(e.BALANCED_BRACKETS_MASK = 1024)] = 'BALANCED_BRACKETS_MASK'),
    (e[(e.FONT_STYLE_MASK = 30720)] = 'FONT_STYLE_MASK'),
    (e[(e.FOREGROUND_MASK = 16744448)] = 'FOREGROUND_MASK'),
    (e[(e.BACKGROUND_MASK = 4278190080)] = 'BACKGROUND_MASK'),
    (e[(e.ITALIC_MASK = 2048)] = 'ITALIC_MASK'),
    (e[(e.BOLD_MASK = 4096)] = 'BOLD_MASK'),
    (e[(e.UNDERLINE_MASK = 8192)] = 'UNDERLINE_MASK'),
    (e[(e.STRIKETHROUGH_MASK = 16384)] = 'STRIKETHROUGH_MASK'),
    (e[(e.SEMANTIC_USE_ITALIC = 1)] = 'SEMANTIC_USE_ITALIC'),
    (e[(e.SEMANTIC_USE_BOLD = 2)] = 'SEMANTIC_USE_BOLD'),
    (e[(e.SEMANTIC_USE_UNDERLINE = 4)] = 'SEMANTIC_USE_UNDERLINE'),
    (e[(e.SEMANTIC_USE_STRIKETHROUGH = 8)] = 'SEMANTIC_USE_STRIKETHROUGH'),
    (e[(e.SEMANTIC_USE_FOREGROUND = 16)] = 'SEMANTIC_USE_FOREGROUND'),
    (e[(e.SEMANTIC_USE_BACKGROUND = 32)] = 'SEMANTIC_USE_BACKGROUND'),
    (e[(e.LANGUAGEID_OFFSET = 0)] = 'LANGUAGEID_OFFSET'),
    (e[(e.TOKEN_TYPE_OFFSET = 8)] = 'TOKEN_TYPE_OFFSET'),
    (e[(e.BALANCED_BRACKETS_OFFSET = 10)] = 'BALANCED_BRACKETS_OFFSET'),
    (e[(e.FONT_STYLE_OFFSET = 11)] = 'FONT_STYLE_OFFSET'),
    (e[(e.FOREGROUND_OFFSET = 15)] = 'FOREGROUND_OFFSET'),
    (e[(e.BACKGROUND_OFFSET = 24)] = 'BACKGROUND_OFFSET');
})(Gr || (Gr = {}));
var pe = /*#__PURE__*/ (function () {
    function pe() {
      _classCallCheck(this, pe);
    }
    return _createClass(pe, null, [
      {
        key: 'getLanguageId',
        value: function getLanguageId(e) {
          return (e & 255) >>> 0;
        },
      },
      {
        key: 'getTokenType',
        value: function getTokenType(e) {
          return (e & 768) >>> 8;
        },
      },
      {
        key: 'containsBalancedBrackets',
        value: function containsBalancedBrackets(e) {
          return (e & 1024) !== 0;
        },
      },
      {
        key: 'getFontStyle',
        value: function getFontStyle(e) {
          return (e & 30720) >>> 11;
        },
      },
      {
        key: 'getForeground',
        value: function getForeground(e) {
          return (e & 16744448) >>> 15;
        },
      },
      {
        key: 'getBackground',
        value: function getBackground(e) {
          return (e & 4278190080) >>> 24;
        },
      },
      {
        key: 'getClassNameFromMetadata',
        value: function getClassNameFromMetadata(e) {
          var r = 'mtk' + this.getForeground(e);
          var n = this.getFontStyle(e);
          return (
            n & 1 && (r += ' mtki'),
            n & 2 && (r += ' mtkb'),
            n & 4 && (r += ' mtku'),
            n & 8 && (r += ' mtks'),
            r
          );
        },
      },
      {
        key: 'getInlineStyleFromMetadata',
        value: function getInlineStyleFromMetadata(e, t) {
          var r = this.getForeground(e),
            n = this.getFontStyle(e);
          var i = 'color: '.concat(t[r], ';');
          n & 1 && (i += 'font-style: italic;'), n & 2 && (i += 'font-weight: bold;');
          var o = '';
          return (
            n & 4 && (o += ' underline'),
            n & 8 && (o += ' line-through'),
            o && (i += 'text-decoration:'.concat(o, ';')),
            i
          );
        },
      },
      {
        key: 'getPresentationFromMetadata',
        value: function getPresentationFromMetadata(e) {
          var t = this.getForeground(e),
            r = this.getFontStyle(e);
          return {
            foreground: t,
            italic: !!(r & 1),
            bold: !!(r & 2),
            underline: !!(r & 4),
            strikethrough: !!(r & 8),
          };
        },
      },
    ]);
  })(),
  Is = /*#__PURE__*/ (function () {
    function Zt(t) {
      _classCallCheck(this, Zt);
      this.a = t;
    }
    return _createClass(
      Zt,
      [
        {
          key: 'forEach',
          value: function forEach(t) {
            var r = 0;
            var _iterator53 = _createForOfIteratorHelper(this.a),
              _step53;
            try {
              for (_iterator53.s(); !(_step53 = _iterator53.n()).done; ) {
                var n = _step53.value;
                var i = new q(r, r + n.length);
                t(i, n), (r += n.length);
              }
            } catch (err) {
              _iterator53.e(err);
            } finally {
              _iterator53.f();
            }
          },
        },
        {
          key: 'slice',
          value: function slice(t) {
            var r = [];
            var n = 0;
            var _iterator54 = _createForOfIteratorHelper(this.a),
              _step54;
            try {
              for (_iterator54.s(); !(_step54 = _iterator54.n()).done; ) {
                var i = _step54.value;
                var o = n,
                  a = o + i.length;
                if (a > t.start) {
                  if (o >= t.endExclusive) break;
                  var l = Math.max(0, t.start - o),
                    c = Math.max(0, a - t.endExclusive);
                  r.push(new Hr(i.length - l - c, i.metadata));
                }
                n += i.length;
              }
            } catch (err) {
              _iterator54.e(err);
            } finally {
              _iterator54.f();
            }
            return Zt.create(r);
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
  Hr = /*#__PURE__*/ _createClass(function Hr(e, t) {
    _classCallCheck(this, Hr);
    (this.length = e), (this.metadata = t);
  }),
  Us = /*#__PURE__*/ (function () {
    function Us() {
      _classCallCheck(this, Us);
      this.a = [];
    }
    return _createClass(Us, [
      {
        key: 'add',
        value: function add(e, t) {
          this.a.push(new Hr(e, t));
        },
      },
      {
        key: 'build',
        value: function build() {
          return Is.create(this.a);
        },
      },
    ]);
  })(),
  Bt =
    ((_ye = /*#__PURE__*/ (function () {
      function ye(t, r, n) {
        _classCallCheck(this, ye);
        (this._lineTokensBrand = void 0),
          (this.a = t),
          (this.b = this.a.length >>> 1),
          (this.c = r),
          (this.languageIdCodec = n);
      }
      return _createClass(
        ye,
        [
          {
            key: 'equals',
            value: function equals(t) {
              return t instanceof ye ? this.slicedEquals(t, 0, this.b) : !1;
            },
          },
          {
            key: 'slicedEquals',
            value: function slicedEquals(t, r, n) {
              if (this.c !== t.c || this.b !== t.b) return !1;
              var i = r << 1,
                o = i + (n << 1);
              for (var a = i; a < o; a++) if (this.a[a] !== t.a[a]) return !1;
              return !0;
            },
          },
          {
            key: 'getLineContent',
            value: function getLineContent() {
              return this.c;
            },
          },
          {
            key: 'getCount',
            value: function getCount() {
              return this.b;
            },
          },
          {
            key: 'getStartOffset',
            value: function getStartOffset(t) {
              return t > 0 ? this.a[(t - 1) << 1] : 0;
            },
          },
          {
            key: 'getMetadata',
            value: function getMetadata(t) {
              return this.a[(t << 1) + 1];
            },
          },
          {
            key: 'getLanguageId',
            value: function getLanguageId(t) {
              var r = this.a[(t << 1) + 1],
                n = pe.getLanguageId(r);
              return this.languageIdCodec.decodeLanguageId(n);
            },
          },
          {
            key: 'getStandardTokenType',
            value: function getStandardTokenType(t) {
              var r = this.a[(t << 1) + 1];
              return pe.getTokenType(r);
            },
          },
          {
            key: 'getForeground',
            value: function getForeground(t) {
              var r = this.a[(t << 1) + 1];
              return pe.getForeground(r);
            },
          },
          {
            key: 'getClassName',
            value: function getClassName(t) {
              var r = this.a[(t << 1) + 1];
              return pe.getClassNameFromMetadata(r);
            },
          },
          {
            key: 'getInlineStyle',
            value: function getInlineStyle(t, r) {
              var n = this.a[(t << 1) + 1];
              return pe.getInlineStyleFromMetadata(n, r);
            },
          },
          {
            key: 'getPresentation',
            value: function getPresentation(t) {
              var r = this.a[(t << 1) + 1];
              return pe.getPresentationFromMetadata(r);
            },
          },
          {
            key: 'getEndOffset',
            value: function getEndOffset(t) {
              return this.a[t << 1];
            },
          },
          {
            key: 'findTokenIndexAtOffset',
            value: function findTokenIndexAtOffset(t) {
              return ye.findIndexInTokensArray(this.a, t);
            },
          },
          {
            key: 'inflate',
            value: function inflate() {
              return this;
            },
          },
          {
            key: 'sliceAndInflate',
            value: function sliceAndInflate(t, r, n) {
              return new zs(this, t, r, n);
            },
          },
          {
            key: 'withInserted',
            value: function withInserted(t) {
              if (t.length === 0) return this;
              var r = 0,
                n = 0,
                i = '';
              var o = new Array();
              var a = 0;
              for (;;) {
                var l = r < this.b ? this.a[r << 1] : -1,
                  c = n < t.length ? t[n] : null;
                if (l !== -1 && (c === null || l <= c.offset)) {
                  i += this.c.substring(a, l);
                  var u = this.a[(r << 1) + 1];
                  o.push(i.length, u), r++, (a = l);
                } else if (c) {
                  if (c.offset > a) {
                    i += this.c.substring(a, c.offset);
                    var _u5 = this.a[(r << 1) + 1];
                    o.push(i.length, _u5), (a = c.offset);
                  }
                  (i += c.text), o.push(i.length, c.tokenMetadata), n++;
                } else break;
              }
              return new ye(new Uint32Array(o), i, this.languageIdCodec);
            },
          },
          {
            key: 'getTokensInRange',
            value: function getTokensInRange(t) {
              var r = new Us(),
                n = this.findTokenIndexAtOffset(t.start),
                i = this.findTokenIndexAtOffset(t.endExclusive);
              for (var o = n; o <= i; o++) {
                var l = new q(this.getStartOffset(o), this.getEndOffset(o)).intersectionLength(t);
                l > 0 && r.add(l, this.getMetadata(o));
              }
              return r.build();
            },
          },
          {
            key: 'getTokenText',
            value: function getTokenText(t) {
              var r = this.getStartOffset(t),
                n = this.getEndOffset(t);
              return this.c.substring(r, n);
            },
          },
          {
            key: 'forEach',
            value: function forEach(t) {
              var r = this.getCount();
              for (var n = 0; n < r; n++) t(n);
            },
          },
          {
            key: 'extractObject',
            value: function extractObject() {
              return { tokens: this.a, text: this.c };
            },
          },
          {
            key: 'toString',
            value: function toString() {
              var _this36 = this;
              var t = '';
              return (
                this.forEach(function (r) {
                  t += '['
                    .concat(_this36.getTokenText(r), ']{')
                    .concat(_this36.getClassName(r), '}');
                }),
                t
              );
            },
          },
        ],
        [
          {
            key: 'createEmpty',
            value: function createEmpty(t, r) {
              var n = ye.defaultTokenMetadata,
                i = new Uint32Array(2);
              return (i[0] = t.length), (i[1] = n), new ye(i, t, r);
            },
          },
          {
            key: 'createFromTextAndMetadata',
            value: function createFromTextAndMetadata(t, r) {
              var n = 0,
                i = '';
              var o = new Array();
              var _iterator55 = _createForOfIteratorHelper(t),
                _step55;
              try {
                for (_iterator55.s(); !(_step55 = _iterator55.n()).done; ) {
                  var _step55$value = _step55.value,
                    a = _step55$value.text,
                    l = _step55$value.metadata;
                  o.push(n + a.length, l), (n += a.length), (i += a);
                }
              } catch (err) {
                _iterator55.e(err);
              } finally {
                _iterator55.f();
              }
              return new ye(new Uint32Array(o), i, r);
            },
          },
          {
            key: 'convertToEndOffset',
            value: function convertToEndOffset(t, r) {
              var i = (t.length >>> 1) - 1;
              for (var o = 0; o < i; o++) t[o << 1] = t[(o + 1) << 1];
              t[i << 1] = r;
            },
          },
          {
            key: 'findIndexInTokensArray',
            value: function findIndexInTokensArray(t, r) {
              if (t.length <= 2) return 0;
              var n = 0,
                i = (t.length >>> 1) - 1;
              for (; n < i; ) {
                var o = n + Math.floor((i - n) / 2),
                  a = t[o << 1];
                if (a === r) return o + 1;
                a < r ? (n = o + 1) : a > r && (i = o);
              }
              return n;
            },
          },
        ],
      );
    })()),
    (_ye.defaultTokenMetadata = (32768 | (2 << 24)) >>> 0),
    _ye),
  zs = /*#__PURE__*/ (function () {
    function un(t, r, n, i) {
      _classCallCheck(this, un);
      (this.a = t),
        (this.b = r),
        (this.c = n),
        (this.d = i),
        (this.e = t.findTokenIndexAtOffset(r)),
        (this.languageIdCodec = t.languageIdCodec),
        (this.f = 0);
      for (var o = this.e, a = t.getCount(); o < a && !(t.getStartOffset(o) >= n); o++) this.f++;
    }
    return _createClass(un, [
      {
        key: 'getMetadata',
        value: function getMetadata(t) {
          return this.a.getMetadata(this.e + t);
        },
      },
      {
        key: 'getLanguageId',
        value: function getLanguageId(t) {
          return this.a.getLanguageId(this.e + t);
        },
      },
      {
        key: 'getLineContent',
        value: function getLineContent() {
          return this.a.getLineContent().substring(this.b, this.c);
        },
      },
      {
        key: 'equals',
        value: function equals(t) {
          return t instanceof un
            ? this.b === t.b &&
                this.c === t.c &&
                this.d === t.d &&
                this.a.slicedEquals(t.a, this.e, this.f)
            : !1;
        },
      },
      {
        key: 'getCount',
        value: function getCount() {
          return this.f;
        },
      },
      {
        key: 'getStandardTokenType',
        value: function getStandardTokenType(t) {
          return this.a.getStandardTokenType(this.e + t);
        },
      },
      {
        key: 'getForeground',
        value: function getForeground(t) {
          return this.a.getForeground(this.e + t);
        },
      },
      {
        key: 'getEndOffset',
        value: function getEndOffset(t) {
          var r = this.a.getEndOffset(this.e + t);
          return Math.min(this.c, r) - this.b + this.d;
        },
      },
      {
        key: 'getClassName',
        value: function getClassName(t) {
          return this.a.getClassName(this.e + t);
        },
      },
      {
        key: 'getInlineStyle',
        value: function getInlineStyle(t, r) {
          return this.a.getInlineStyle(this.e + t, r);
        },
      },
      {
        key: 'getPresentation',
        value: function getPresentation(t) {
          return this.a.getPresentation(this.e + t);
        },
      },
      {
        key: 'findTokenIndexAtOffset',
        value: function findTokenIndexAtOffset(t) {
          return this.a.findTokenIndexAtOffset(t + this.b - this.d) - this.e;
        },
      },
      {
        key: 'getTokenText',
        value: function getTokenText(t) {
          var r = this.e + t,
            n = this.a.getStartOffset(r),
            i = this.a.getEndOffset(r);
          var o = this.a.getTokenText(r);
          return (
            n < this.b && (o = o.substring(this.b - n)),
            i > this.c && (o = o.substring(0, o.length - (i - this.c))),
            o
          );
        },
      },
      {
        key: 'forEach',
        value: function forEach(t) {
          for (var r = 0; r < this.getCount(); r++) t(r);
        },
      },
    ]);
  })(),
  ve = new Uint32Array(0).buffer,
  ae = /*#__PURE__*/ (function () {
    function Yt() {
      _classCallCheck(this, Yt);
    }
    return _createClass(Yt, null, [
      {
        key: 'deleteBeginning',
        value: function deleteBeginning(t, r) {
          return t === null || t === ve ? t : Yt['delete'](t, 0, r);
        },
      },
      {
        key: 'deleteEnding',
        value: function deleteEnding(t, r) {
          if (t === null || t === ve) return t;
          var n = Ie(t),
            i = n[n.length - 2];
          return Yt['delete'](t, r, i);
        },
      },
      {
        key: 'delete',
        value: function _delete(t, r, n) {
          if (t === null || t === ve || r === n) return t;
          var i = Ie(t),
            o = i.length >>> 1;
          if (r === 0 && i[i.length - 2] === n) return ve;
          var a = Bt.findIndexInTokensArray(i, r),
            l = a > 0 ? i[(a - 1) << 1] : 0,
            c = i[a << 1];
          if (n < c) {
            var v = n - r;
            for (var k = a; k < o; k++) i[k << 1] -= v;
            return t;
          }
          var u, f;
          l !== r ? ((i[a << 1] = r), (u = (a + 1) << 1), (f = r)) : ((u = a << 1), (f = l));
          var h = n - r;
          for (var _v = a + 1; _v < o; _v++) {
            var _k = i[_v << 1] - h;
            _k > f && ((i[u++] = _k), (i[u++] = i[(_v << 1) + 1]), (f = _k));
          }
          if (u === i.length) return t;
          var g = new Uint32Array(u);
          return g.set(i.subarray(0, u), 0), g.buffer;
        },
      },
      {
        key: 'append',
        value: function append(t, r) {
          if (r === ve) return t;
          if (t === ve) return r;
          if (t === null) return t;
          if (r === null) return null;
          var n = Ie(t),
            i = Ie(r),
            o = i.length >>> 1,
            a = new Uint32Array(n.length + i.length);
          a.set(n, 0);
          var l = n.length;
          var c = n[n.length - 2];
          for (var u = 0; u < o; u++) (a[l++] = i[u << 1] + c), (a[l++] = i[(u << 1) + 1]);
          return a.buffer;
        },
      },
      {
        key: 'insert',
        value: function insert(t, r, n) {
          if (t === null || t === ve) return t;
          var i = Ie(t),
            o = i.length >>> 1;
          var a = Bt.findIndexInTokensArray(i, r);
          a > 0 && i[(a - 1) << 1] === r && a--;
          for (var l = a; l < o; l++) i[l << 1] += n;
          return t;
        },
      },
    ]);
  })();
function Ie(e) {
  return e instanceof Uint32Array ? e : new Uint32Array(e);
}
var Zr = /*#__PURE__*/ (function () {
    function cn(t, r) {
      _classCallCheck(this, cn);
      (this.a = t), (this.b = r);
    }
    return _createClass(
      cn,
      [
        {
          key: 'startLineNumber',
          get: function get() {
            return this.a;
          },
        },
        {
          key: 'endLineNumber',
          get: function get() {
            return this.a + this.b.length - 1;
          },
        },
        {
          key: 'getLineRange',
          value: function getLineRange() {
            return new be(this.a, this.a + this.b.length);
          },
        },
        {
          key: 'getLineTokens',
          value: function getLineTokens(t) {
            return this.b[t - this.a];
          },
        },
        {
          key: 'appendLineTokens',
          value: function appendLineTokens(t) {
            this.b.push(t);
          },
        },
        {
          key: 'serializeSize',
          value: function serializeSize() {
            var t = 0;
            (t += 4), (t += 4);
            for (var r = 0; r < this.b.length; r++) {
              var n = this.b[r];
              if (!(n instanceof Uint32Array)) throw new Error('Not supported!');
              (t += 4), (t += n.byteLength);
            }
            return t;
          },
        },
        {
          key: 'serialize',
          value: function serialize(t, r) {
            ht(t, this.a, r), (r += 4), ht(t, this.b.length, r), (r += 4);
            for (var n = 0; n < this.b.length; n++) {
              var i = this.b[n];
              if (!(i instanceof Uint32Array)) throw new Error('Not supported!');
              ht(t, i.byteLength, r),
                (r += 4),
                t.set(new Uint8Array(i.buffer), r),
                (r += i.byteLength);
            }
            return r;
          },
        },
        {
          key: 'applyEdit',
          value: function applyEdit(t, r) {
            var _zt = zt(r),
              _zt2 = _slicedToArray(_zt, 2),
              n = _zt2[0],
              i = _zt2[1];
            this.c(t), this.d(new ut(t.startLineNumber, t.startColumn), n, i);
          },
        },
        {
          key: 'c',
          value: function c(t) {
            if (t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn) return;
            var r = t.startLineNumber - this.a,
              n = t.endLineNumber - this.a;
            if (n < 0) {
              var i = n - r;
              this.a -= i;
              return;
            }
            if (!(r >= this.b.length)) {
              if (r < 0 && n >= this.b.length) {
                (this.a = 0), (this.b = []);
                return;
              }
              if (r === n) {
                this.b[r] = ae['delete'](this.b[r], t.startColumn - 1, t.endColumn - 1);
                return;
              }
              if (r >= 0) {
                if (
                  ((this.b[r] = ae.deleteEnding(this.b[r], t.startColumn - 1)), n < this.b.length)
                ) {
                  var _i10 = ae.deleteBeginning(this.b[n], t.endColumn - 1);
                  (this.b[r] = ae.append(this.b[r], _i10)), this.b.splice(r + 1, n - r);
                } else (this.b[r] = ae.append(this.b[r], null)), (this.b = this.b.slice(0, r + 1));
              } else {
                var _i11 = -r;
                (this.a -= _i11),
                  (this.b[n] = ae.deleteBeginning(this.b[n], t.endColumn - 1)),
                  (this.b = this.b.slice(n));
              }
            }
          },
        },
        {
          key: 'd',
          value: function d(t, r, n) {
            if (r === 0 && n === 0) return;
            var i = t.lineNumber - this.a;
            if (i < 0) {
              this.a += r;
              return;
            }
            if (!(i >= this.b.length)) {
              if (r === 0) {
                this.b[i] = ae.insert(this.b[i], t.column - 1, n);
                return;
              }
              (this.b[i] = ae.deleteEnding(this.b[i], t.column - 1)),
                (this.b[i] = ae.insert(this.b[i], t.column - 1, n)),
                this.e(t.lineNumber, r);
            }
          },
        },
        {
          key: 'e',
          value: function e(t, r) {
            if (r === 0) return;
            var n = [];
            for (var i = 0; i < r; i++) n[i] = null;
            this.b = w1(this.b, t, n);
          },
        },
      ],
      [
        {
          key: 'deserialize',
          value: function deserialize(t, r, n) {
            var i = new Uint32Array(t.buffer),
              o = ct(t, r);
            r += 4;
            var a = ct(t, r);
            r += 4;
            var l = [];
            for (var c = 0; c < a; c++) {
              var u = ct(t, r);
              (r += 4), l.push(i.subarray(r / 4, r / 4 + u / 4)), (r += u);
            }
            return n.push(new cn(o, l)), r;
          },
        },
      ],
    );
  })(),
  qs = /*#__PURE__*/ (function () {
    function qs() {
      _classCallCheck(this, qs);
      this.a = [];
    }
    return _createClass(
      qs,
      [
        {
          key: 'add',
          value: function add(e, t) {
            if (this.a.length > 0) {
              var r = this.a[this.a.length - 1];
              if (r.endLineNumber + 1 === e) {
                r.appendLineTokens(t);
                return;
              }
            }
            this.a.push(new Zr(e, [t]));
          },
        },
        {
          key: 'finalize',
          value: function finalize() {
            return this.a;
          },
        },
        {
          key: 'serialize',
          value: function serialize() {
            var e = this.b(),
              t = new Uint8Array(e);
            return this.c(t), t;
          },
        },
        {
          key: 'b',
          value: function b() {
            var e = 0;
            e += 4;
            for (var _t18 = 0; _t18 < this.a.length; _t18++) e += this.a[_t18].serializeSize();
            return e;
          },
        },
        {
          key: 'c',
          value: function c(e) {
            var t = 0;
            ht(e, this.a.length, t), (t += 4);
            for (var r = 0; r < this.a.length; r++) t = this.a[r].serialize(e, t);
          },
        },
      ],
      [
        {
          key: 'deserialize',
          value: function deserialize(e) {
            var t = 0;
            var r = ct(e, t);
            t += 4;
            var n = [];
            for (var i = 0; i < r; i++) t = Zr.deserialize(e, t, n);
            return n;
          },
        },
      ],
    );
  })(),
  Yr;
(function (e) {
  e[(e.CHEAP_TOKENIZATION_LENGTH_LIMIT = 2048)] = 'CHEAP_TOKENIZATION_LENGTH_LIMIT';
})(Yr || (Yr = {}));
var Bs = /*#__PURE__*/ (function () {
    function Bs(e, t) {
      _classCallCheck(this, Bs);
      (this.tokenizationSupport = t),
        (this.a = this.tokenizationSupport.getInitialState()),
        (this.store = new Ws(e));
    }
    return _createClass(Bs, [
      {
        key: 'getStartState',
        value: function getStartState(e) {
          return this.store.getStartState(e, this.a);
        },
      },
      {
        key: 'getFirstInvalidLine',
        value: function getFirstInvalidLine() {
          return this.store.getFirstInvalidLine(this.a);
        },
      },
    ]);
  })(),
  Ws = /*#__PURE__*/ (function () {
    function Ws(e) {
      _classCallCheck(this, Ws);
      (this.d = e), (this.a = new Vs()), (this.b = new Gs()), this.b.addRange(new q(1, e + 1));
    }
    return _createClass(Ws, [
      {
        key: 'getEndState',
        value: function getEndState(e) {
          return this.a.getEndState(e);
        },
      },
      {
        key: 'setEndState',
        value: function setEndState(e, t) {
          if (!t) throw new J('Cannot set null/undefined state');
          this.b['delete'](e);
          var r = this.a.setEndState(e, t);
          return r && e < this.d && this.b.addRange(new q(e + 1, e + 2)), r;
        },
      },
      {
        key: 'acceptChange',
        value: function acceptChange(e, t) {
          (this.d += t - e.length),
            this.a.acceptChange(e, t),
            this.b.addRangeAndResize(new q(e.startLineNumber, e.endLineNumberExclusive), t);
        },
      },
      {
        key: 'acceptChanges',
        value: function acceptChanges(e) {
          var _iterator56 = _createForOfIteratorHelper(e),
            _step56;
          try {
            for (_iterator56.s(); !(_step56 = _iterator56.n()).done; ) {
              var _t19 = _step56.value;
              var _zt3 = zt(_t19.text),
                _zt4 = _slicedToArray(_zt3, 1),
                r = _zt4[0];
              this.acceptChange(
                new be(_t19.range.startLineNumber, _t19.range.endLineNumber + 1),
                r + 1,
              );
            }
          } catch (err) {
            _iterator56.e(err);
          } finally {
            _iterator56.f();
          }
        },
      },
      {
        key: 'invalidateEndStateRange',
        value: function invalidateEndStateRange(e) {
          this.b.addRange(new q(e.startLineNumber, e.endLineNumberExclusive));
        },
      },
      {
        key: 'getFirstInvalidEndStateLineNumber',
        value: function getFirstInvalidEndStateLineNumber() {
          return this.b.min;
        },
      },
      {
        key: 'getFirstInvalidEndStateLineNumberOrMax',
        value: function getFirstInvalidEndStateLineNumberOrMax() {
          return this.getFirstInvalidEndStateLineNumber() || Number.MAX_SAFE_INTEGER;
        },
      },
      {
        key: 'allStatesValid',
        value: function allStatesValid() {
          return this.b.min === null;
        },
      },
      {
        key: 'getStartState',
        value: function getStartState(e, t) {
          return e === 1 ? t : this.getEndState(e - 1);
        },
      },
      {
        key: 'getFirstInvalidLine',
        value: function getFirstInvalidLine(e) {
          var t = this.getFirstInvalidEndStateLineNumber();
          if (t === null) return null;
          var r = this.getStartState(t, e);
          if (!r) throw new J('Start state must be defined');
          return { lineNumber: t, startState: r };
        },
      },
    ]);
  })(),
  Vs = /*#__PURE__*/ (function () {
    function Vs() {
      _classCallCheck(this, Vs);
      this.a = new Fs(null);
    }
    return _createClass(Vs, [
      {
        key: 'getEndState',
        value: function getEndState(e) {
          return this.a.get(e);
        },
      },
      {
        key: 'setEndState',
        value: function setEndState(e, t) {
          var r = this.a.get(e);
          return r && r.equals(t) ? !1 : (this.a.set(e, t), !0);
        },
      },
      {
        key: 'acceptChange',
        value: function acceptChange(e, t) {
          var r = e.length;
          t > 0 && r > 0 && (r--, t--), this.a.replace(e.startLineNumber, r, t);
        },
      },
      {
        key: 'acceptChanges',
        value: function acceptChanges(e) {
          var _iterator57 = _createForOfIteratorHelper(e),
            _step57;
          try {
            for (_iterator57.s(); !(_step57 = _iterator57.n()).done; ) {
              var _t20 = _step57.value;
              var _zt5 = zt(_t20.text),
                _zt6 = _slicedToArray(_zt5, 1),
                r = _zt6[0];
              this.acceptChange(
                new be(_t20.range.startLineNumber, _t20.range.endLineNumber + 1),
                r + 1,
              );
            }
          } catch (err) {
            _iterator57.e(err);
          } finally {
            _iterator57.f();
          }
        },
      },
    ]);
  })(),
  Gs = /*#__PURE__*/ (function () {
    function Gs() {
      _classCallCheck(this, Gs);
      this.a = [];
    }
    return _createClass(Gs, [
      {
        key: 'getRanges',
        value: function getRanges() {
          return this.a;
        },
      },
      {
        key: 'min',
        get: function get() {
          return this.a.length === 0 ? null : this.a[0].start;
        },
      },
      {
        key: 'removeMin',
        value: function removeMin() {
          if (this.a.length === 0) return null;
          var e = this.a[0];
          return (
            e.start + 1 === e.endExclusive
              ? this.a.shift()
              : (this.a[0] = new q(e.start + 1, e.endExclusive)),
            e.start
          );
        },
      },
      {
        key: 'delete',
        value: function _delete(e) {
          var t = this.a.findIndex(function (r) {
            return r.contains(e);
          });
          if (t !== -1) {
            var r = this.a[t];
            r.start === e
              ? r.endExclusive === e + 1
                ? this.a.splice(t, 1)
                : (this.a[t] = new q(e + 1, r.endExclusive))
              : r.endExclusive === e + 1
                ? (this.a[t] = new q(r.start, e))
                : this.a.splice(t, 1, new q(r.start, e), new q(e + 1, r.endExclusive));
          }
        },
      },
      {
        key: 'addRange',
        value: function addRange(e) {
          q.addRange(e, this.a);
        },
      },
      {
        key: 'addRangeAndResize',
        value: function addRangeAndResize(e, t) {
          var r = 0;
          for (; !(r >= this.a.length || e.start <= this.a[r].endExclusive); ) r++;
          var n = r;
          for (; !(n >= this.a.length || e.endExclusive < this.a[n].start); ) n++;
          var i = t - e.length;
          for (var o = n; o < this.a.length; o++) this.a[o] = this.a[o].delta(i);
          if (r === n) {
            var _o3 = new q(e.start, e.start + t);
            _o3.isEmpty || this.a.splice(r, 0, _o3);
          } else {
            var _o4 = Math.min(e.start, this.a[r].start),
              a = Math.max(e.endExclusive, this.a[n - 1].endExclusive),
              l = new q(_o4, a + i);
            l.isEmpty ? this.a.splice(r, n - r) : this.a.splice(r, n - r, l);
          }
        },
      },
      {
        key: 'toString',
        value: function toString() {
          return this.a
            .map(function (e) {
              return e.toString();
            })
            .join(' + ');
        },
      },
    ]);
  })(),
  Hs = /*#__PURE__*/ (function (_re3) {
    function Hs(e, t, r, n, i, o, a) {
      var _this37;
      _classCallCheck(this, Hs);
      (_this37 = _callSuper(this, Hs)),
        (_this37.c = e),
        (_this37.f = t),
        (_this37.g = r),
        (_this37.h = n),
        (_this37.j = i),
        (_this37.m = o),
        (_this37.n = a),
        (_this37.a = []),
        (_this37.b = _this37.D(new X())),
        (_this37.onDidEncounterLanguage = _this37.b.event);
      return _this37;
    }
    _inherits(Hs, _re3);
    return _createClass(Hs, [
      {
        key: 'backgroundTokenizerShouldOnlyVerifyTokens',
        get: function get() {
          return this.j();
        },
      },
      {
        key: 'getInitialState',
        value: function getInitialState() {
          return this.f;
        },
      },
      {
        key: 'tokenize',
        value: function tokenize(e, t, r) {
          throw new Error('Not supported!');
        },
      },
      {
        key: 'createBackgroundTokenizer',
        value: function createBackgroundTokenizer(e, t) {
          if (this.h) return this.h(e, t);
        },
      },
      {
        key: 'tokenizeEncoded',
        value: function tokenizeEncoded(e, t, r) {
          var n = Math.random() * 1e4 < 1,
            i = this.n || n,
            o = i ? new S1(!0) : void 0,
            a = this.c.tokenizeLine2(e, r, 500);
          if (i) {
            var c = o.elapsed();
            (n || c > 32) && this.m(c, e.length, n);
          }
          if (a.stoppedEarly)
            return (
              console.warn('Time limit reached when tokenizing line: '.concat(e.substring(0, 100))),
              new qt(a.tokens, r)
            );
          if (this.g) {
            var _c4 = this.a,
              u = a.tokens;
            for (var f = 0, h = u.length >>> 1; f < h; f++) {
              var g = u[(f << 1) + 1],
                v = pe.getLanguageId(g);
              _c4[v] || ((_c4[v] = !0), this.b.fire(v));
            }
          }
          var l;
          return r.equals(a.ruleStack) ? (l = r) : (l = a.ruleStack), new qt(a.tokens, l);
        },
      },
    ]);
  })(re),
  Zs = /*#__PURE__*/ (function (_re4) {
    function Zs(e, t, r, n) {
      var _this38;
      _classCallCheck(this, Zs);
      (_this38 = _callSuper(this, Zs)),
        (_this38.a = e),
        (_this38.b = t),
        (_this38.c = n),
        _this38.D(lr(_this38.c)),
        _this38.D(r);
      return _this38;
    }
    _inherits(Zs, _re4);
    return _createClass(Zs, [
      {
        key: 'backgroundTokenizerShouldOnlyVerifyTokens',
        get: function get() {
          return this.b.backgroundTokenizerShouldOnlyVerifyTokens;
        },
      },
      {
        key: 'getInitialState',
        value: function getInitialState() {
          return this.b.getInitialState();
        },
      },
      {
        key: 'tokenize',
        value: function tokenize(e, t, r) {
          throw new Error('Not supported!');
        },
      },
      {
        key: 'tokenizeEncoded',
        value: function tokenizeEncoded(e, t, r) {
          return e.length >= this.c.get() ? Ds(this.a, r) : this.b.tokenizeEncoded(e, t, r);
        },
      },
      {
        key: 'createBackgroundTokenizer',
        value: function createBackgroundTokenizer(e, t) {
          if (this.b.createBackgroundTokenizer) return this.b.createBackgroundTokenizer(e, t);
        },
      },
    ]);
  })(re),
  Ys = /*#__PURE__*/ (function (_s2) {
    function Ys(e, t, r, n, i, o, a, l) {
      var _this39;
      _classCallCheck(this, Ys);
      (_this39 = _callSuper(this, Ys, [e, t, r, n])),
        (_this39.s = i),
        (_this39.t = o),
        (_this39.u = a),
        (_this39.m = null),
        (_this39.n = !1),
        (_this39.o = Ls(_assertThisInitialized(_this39), -1)),
        (_this39.q = new ns(function () {
          return _this39.w();
        }, 10)),
        _this39.o.set(l, void 0),
        _this39.v();
      return _this39;
    }
    _inherits(Ys, _s2);
    return _createClass(Ys, [
      {
        key: 'dispose',
        value: function dispose() {
          (this.n = !0), _superPropGet(Ys, 'dispose', this, 3)([]);
        },
      },
      {
        key: 'onLanguageId',
        value: function onLanguageId(e, t) {
          (this.t = e), (this.u = t), this.v();
        },
      },
      {
        key: 'onEvents',
        value: function onEvents(e) {
          var _this$m;
          _superPropGet(Ys, 'onEvents', this, 3)([e]),
            (_this$m = this.m) !== null &&
              _this$m !== void 0 &&
              _this$m.store.acceptChanges(e.changes),
            this.q.schedule();
        },
      },
      {
        key: 'acceptMaxTokenizationLineLength',
        value: function acceptMaxTokenizationLineLength(e) {
          this.o.set(e, void 0);
        },
      },
      {
        key: 'retokenize',
        value: function retokenize(e, t) {
          this.m && (this.m.store.invalidateEndStateRange(new be(e, t)), this.q.schedule());
        },
      },
      {
        key: 'v',
        value: (function () {
          var _v2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee22() {
              var _this40 = this;
              var e, t, r, n;
              return _regeneratorRuntime().wrap(
                function _callee22$(_context34) {
                  while (1)
                    switch ((_context34.prev = _context34.next)) {
                      case 0:
                        this.m = null;
                        e = this.t;
                        t = this.u;
                        _context34.next = 5;
                        return this.s.getOrCreateGrammar(e, t);
                      case 5:
                        r = _context34.sent;
                        if (!(this.n || e !== this.t || t !== this.u || !r)) {
                          if (r.grammar) {
                            n = new Zs(
                              this.u,
                              new Hs(
                                r.grammar,
                                r.initialState,
                                !1,
                                void 0,
                                function () {
                                  return !1;
                                },
                                function (i, o, a) {
                                  _this40.s.reportTokenizationTime(i, e, r.sourceExtensionId, o, a);
                                },
                                !1,
                              ),
                              re.None,
                              this.o,
                            );
                            this.m = new Bs(this.b.length, n);
                          } else this.m = null;
                          this.w();
                        }
                      case 7:
                      case 'end':
                        return _context34.stop();
                    }
                },
                _callee22,
                this,
              );
            }),
          );
          function v() {
            return _v2.apply(this, arguments);
          }
          return v;
        })(),
      },
      {
        key: 'w',
        value: (function () {
          var _w = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee23() {
              var _this41 = this;
              var _yield$Rt, _t21, e, _t22, r, n, a, l, c, f, i;
              return _regeneratorRuntime().wrap(
                function _callee23$(_context35) {
                  while (1)
                    switch ((_context35.prev = _context35.next)) {
                      case 0:
                        if (!(this.n || !this.m)) {
                          _context35.next = 2;
                          break;
                        }
                        return _context35.abrupt('return');
                      case 2:
                        if (this.p) {
                          _context35.next = 8;
                          break;
                        }
                        _context35.next = 5;
                        return Rt('vscode-textmate', 'release/main.js');
                      case 5:
                        _yield$Rt = _context35.sent;
                        _t21 = _yield$Rt.diffStateStacksRefEq;
                        this.p = _t21;
                      case 8:
                        e = new Date().getTime();
                      case 9:
                        _t22 = 0;
                        (r = new qs()), (n = new Js());
                      case 11:
                        a = this.m.getFirstInvalidLine();
                        if (!(a === null || _t22 > 200)) {
                          _context35.next = 14;
                          break;
                        }
                        return _context35.abrupt('break', 21);
                      case 14:
                        _t22++;
                        (l = this.b[a.lineNumber - 1]),
                          (c = this.m.tokenizationSupport.tokenizeEncoded(l, !0, a.startState));
                        if (this.m.store.setEndState(a.lineNumber, c.endState)) {
                          f = this.p(a.startState, c.endState);
                          n.setState(a.lineNumber, f);
                        } else n.setState(a.lineNumber, null);
                        if (
                          !(Bt.convertToEndOffset(c.tokens, l.length),
                          r.add(a.lineNumber, c.tokens),
                          new Date().getTime() - e > 20)
                        ) {
                          _context35.next = 19;
                          break;
                        }
                        return _context35.abrupt('break', 21);
                      case 19:
                        _context35.next = 11;
                        break;
                      case 21:
                        if (!(_t22 === 0)) {
                          _context35.next = 23;
                          break;
                        }
                        return _context35.abrupt('break', 29);
                      case 23:
                        i = n.getStateDeltas();
                        if (
                          !(this.s.setTokensAndStates(this.d, r.serialize(), i),
                          new Date().getTime() - e > 20)
                        ) {
                          _context35.next = 27;
                          break;
                        }
                        o1(function () {
                          return _this41.w();
                        });
                        return _context35.abrupt('return');
                      case 27:
                        _context35.next = 9;
                        break;
                      case 29:
                      case 'end':
                        return _context35.stop();
                    }
                },
                _callee23,
                this,
              );
            }),
          );
          function w() {
            return _w.apply(this, arguments);
          }
          return w;
        })(),
      },
    ]);
  })(_s),
  Js = /*#__PURE__*/ (function () {
    function Js() {
      _classCallCheck(this, Js);
      (this.a = -1), (this.b = []);
    }
    return _createClass(Js, [
      {
        key: 'setState',
        value: function setState(e, t) {
          e === this.a + 1
            ? this.b[this.b.length - 1].stateDeltas.push(t)
            : this.b.push({ startLineNumber: e, stateDeltas: [t] }),
            (this.a = e);
        },
      },
      {
        key: 'getStateDeltas',
        value: function getStateDeltas() {
          return this.b;
        },
      },
    ]);
  })(),
  Xs =
    ((_Jt = /*#__PURE__*/ (function () {
      function Jt() {
        _classCallCheck(this, Jt);
      }
      return _createClass(Jt, null, [
        {
          key: 'getChannel',
          value: function getChannel(t) {
            return t.getChannel(Jt.CHANNEL_NAME);
          },
        },
        {
          key: 'setChannel',
          value: function setChannel(t, r) {
            t.setChannel(Jt.CHANNEL_NAME, r);
          },
        },
      ]);
    })()),
    (_Jt.CHANNEL_NAME = 'textMateWorkerHost'),
    _Jt);
function Qs(e) {
  return new Ks(e);
}
var Ks = /*#__PURE__*/ (function () {
    function Ks(e) {
      _classCallCheck(this, Ks);
      (this.b = new Map()),
        (this.c = []),
        (this.d = Promise.resolve(null)),
        (this.a = Xs.getChannel(e));
    }
    return _createClass(Ks, [
      {
        key: '$init',
        value: (function () {
          var _$init = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee24(e) {
              var t;
              return _regeneratorRuntime().wrap(
                function _callee24$(_context36) {
                  while (1)
                    switch ((_context36.prev = _context36.next)) {
                      case 0:
                        t = e.grammarDefinitions.map(function (r) {
                          return {
                            location: z.revive(r.location),
                            language: r.language,
                            scopeName: r.scopeName,
                            embeddedLanguages: r.embeddedLanguages,
                            tokenTypes: r.tokenTypes,
                            injectTo: r.injectTo,
                            balancedBracketSelectors: r.balancedBracketSelectors,
                            unbalancedBracketSelectors: r.unbalancedBracketSelectors,
                            sourceExtensionId: r.sourceExtensionId,
                          };
                        });
                        this.d = this.f(t, e.onigurumaWASMUri);
                      case 2:
                      case 'end':
                        return _context36.stop();
                    }
                },
                _callee24,
                this,
              );
            }),
          );
          function $init(_x21) {
            return _$init.apply(this, arguments);
          }
          return $init;
        })(),
      },
      {
        key: 'f',
        value: (function () {
          var _f4 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee25(e, t) {
              var _this42 = this;
              var r, n, o, a;
              return _regeneratorRuntime().wrap(function _callee25$(_context37) {
                while (1)
                  switch ((_context37.prev = _context37.next)) {
                    case 0:
                      _context37.next = 2;
                      return Rt('vscode-textmate', 'release/main.js');
                    case 2:
                      r = _context37.sent;
                      _context37.next = 5;
                      return Rt('vscode-oniguruma', 'release/main.js');
                    case 5:
                      n = _context37.sent;
                      _context37.next = 8;
                      return fetch(t);
                    case 8:
                      _context37.next = 10;
                      return _context37.sent.arrayBuffer();
                    case 10:
                      o = _context37.sent;
                      _context37.next = 13;
                      return n.loadWASM(o);
                    case 13:
                      a = Promise.resolve({
                        createOnigScanner: function createOnigScanner(l) {
                          return n.createOnigScanner(l);
                        },
                        createOnigString: function createOnigString(l) {
                          return n.createOnigString(l);
                        },
                      });
                      return _context37.abrupt(
                        'return',
                        new Qi(
                          {
                            logTrace: function logTrace(l) {},
                            logError: function logError(l, c) {
                              return console.error(l, c);
                            },
                            readFile: function readFile(l) {
                              return _this42.a.$readFile(l);
                            },
                          },
                          e,
                          r,
                          a,
                        ),
                      );
                    case 15:
                    case 'end':
                      return _context37.stop();
                  }
              }, _callee25);
            }),
          );
          function f(_x22, _x23) {
            return _f4.apply(this, arguments);
          }
          return f;
        })(),
      },
      {
        key: '$acceptNewModel',
        value: function $acceptNewModel(e) {
          var t = z.revive(e.uri),
            r = this;
          this.b.set(
            e.controllerId,
            new Ys(
              t,
              e.lines,
              e.EOL,
              e.versionId,
              {
                getOrCreateGrammar: function getOrCreateGrammar(n, i) {
                  return _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee26() {
                      var o;
                      return _regeneratorRuntime().wrap(function _callee26$(_context38) {
                        while (1)
                          switch ((_context38.prev = _context38.next)) {
                            case 0:
                              _context38.next = 2;
                              return r.d;
                            case 2:
                              o = _context38.sent;
                              return _context38.abrupt(
                                'return',
                                o
                                  ? (r.c[i] || (r.c[i] = o.createGrammar(n, i)), r.c[i])
                                  : Promise.resolve(null),
                              );
                            case 4:
                            case 'end':
                              return _context38.stop();
                          }
                      }, _callee26);
                    }),
                  )();
                },
                setTokensAndStates: function setTokensAndStates(n, i, o) {
                  r.a.$setTokensAndStates(e.controllerId, n, i, o);
                },
                reportTokenizationTime: function reportTokenizationTime(n, i, o, a, l) {
                  r.a.$reportTokenizationTime(n, i, o, a, l);
                },
              },
              e.languageId,
              e.encodedLanguageId,
              e.maxTokenizationLineLength,
            ),
          );
        },
      },
      {
        key: '$acceptModelChanged',
        value: function $acceptModelChanged(e, t) {
          this.b.get(e).onEvents(t);
        },
      },
      {
        key: '$retokenize',
        value: function $retokenize(e, t, r) {
          this.b.get(e).retokenize(t, r);
        },
      },
      {
        key: '$acceptModelLanguageChanged',
        value: function $acceptModelLanguageChanged(e, t, r) {
          this.b.get(e).onLanguageId(t, r);
        },
      },
      {
        key: '$acceptRemovedModel',
        value: function $acceptRemovedModel(e) {
          var t = this.b.get(e);
          t && (t.dispose(), this.b['delete'](e));
        },
      },
      {
        key: '$acceptTheme',
        value: (function () {
          var _$acceptTheme = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee27(e, t) {
              var _yield$this$d;
              return _regeneratorRuntime().wrap(
                function _callee27$(_context39) {
                  while (1)
                    switch ((_context39.prev = _context39.next)) {
                      case 0:
                        _context39.next = 2;
                        return this.d;
                      case 2:
                        _context39.t1 = _yield$this$d = _context39.sent;
                        _context39.t0 = _context39.t1 === null;
                        if (_context39.t0) {
                          _context39.next = 6;
                          break;
                        }
                        _context39.t0 = _yield$this$d === void 0;
                      case 6:
                        _context39.t2 = _context39.t0;
                        if (_context39.t2) {
                          _context39.next = 9;
                          break;
                        }
                        _yield$this$d.setTheme(e, t);
                      case 9:
                      case 'end':
                        return _context39.stop();
                    }
                },
                _callee27,
                this,
              );
            }),
          );
          function $acceptTheme(_x24, _x25) {
            return _$acceptTheme.apply(this, arguments);
          }
          return $acceptTheme;
        })(),
      },
      {
        key: '$acceptMaxTokenizationLineLength',
        value: function $acceptMaxTokenizationLineLength(e, t) {
          this.b.get(e).acceptMaxTokenizationLineLength(t);
        },
      },
    ]);
  })(),
  Wt = 'default',
  e0 = '$initialize',
  Jr;
(function (e) {
  (e[(e.Request = 0)] = 'Request'),
    (e[(e.Reply = 1)] = 'Reply'),
    (e[(e.SubscribeEvent = 2)] = 'SubscribeEvent'),
    (e[(e.Event = 3)] = 'Event'),
    (e[(e.UnsubscribeEvent = 4)] = 'UnsubscribeEvent');
})(Jr || (Jr = {}));
var t0 = /*#__PURE__*/ _createClass(function t0(e, t, r, n, i) {
    _classCallCheck(this, t0);
    (this.vsWorker = e),
      (this.req = t),
      (this.channel = r),
      (this.method = n),
      (this.args = i),
      (this.type = 0);
  }),
  Xr = /*#__PURE__*/ _createClass(function Xr(e, t, r, n) {
    _classCallCheck(this, Xr);
    (this.vsWorker = e), (this.seq = t), (this.res = r), (this.err = n), (this.type = 1);
  }),
  r0 = /*#__PURE__*/ _createClass(function r0(e, t, r, n, i) {
    _classCallCheck(this, r0);
    (this.vsWorker = e),
      (this.req = t),
      (this.channel = r),
      (this.eventName = n),
      (this.arg = i),
      (this.type = 2);
  }),
  n0 = /*#__PURE__*/ _createClass(function n0(e, t, r) {
    _classCallCheck(this, n0);
    (this.vsWorker = e), (this.req = t), (this.event = r), (this.type = 3);
  }),
  i0 = /*#__PURE__*/ _createClass(function i0(e, t) {
    _classCallCheck(this, i0);
    (this.vsWorker = e), (this.req = t), (this.type = 4);
  }),
  s0 = /*#__PURE__*/ (function () {
    function s0(e) {
      _classCallCheck(this, s0);
      (this.a = -1),
        (this.g = e),
        (this.b = 0),
        (this.c = Object.create(null)),
        (this.d = new Map()),
        (this.f = new Map());
    }
    return _createClass(s0, [
      {
        key: 'setWorkerId',
        value: function setWorkerId(e) {
          this.a = e;
        },
      },
      {
        key: 'sendMessage',
        value: function sendMessage(e, t, r) {
          var _this43 = this;
          var n = String(++this.b);
          return new Promise(function (i, o) {
            (_this43.c[n] = { resolve: i, reject: o }), _this43.o(new t0(_this43.a, n, e, t, r));
          });
        },
      },
      {
        key: 'listen',
        value: function listen(e, t, r) {
          var _this44 = this;
          var n = null;
          var i = new X({
            onWillAddFirstListener: function onWillAddFirstListener() {
              (n = String(++_this44.b)),
                _this44.d.set(n, i),
                _this44.o(new r0(_this44.a, n, e, t, r));
            },
            onDidRemoveLastListener: function onDidRemoveLastListener() {
              _this44.d['delete'](n), _this44.o(new i0(_this44.a, n)), (n = null);
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
          var _this45 = this;
          var r = {
            get: function get(n, i) {
              return (
                typeof i == 'string' &&
                  !n[i] &&
                  (Kr(i)
                    ? (n[i] = function (o) {
                        return _this45.listen(e, i, o);
                      })
                    : Qr(i)
                      ? (n[i] = _this45.listen(e, i, void 0))
                      : i.charCodeAt(0) === 36 &&
                        (n[i] = /*#__PURE__*/ _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee28() {
                            var _len9,
                              o,
                              _key9,
                              _args40 = arguments;
                            return _regeneratorRuntime().wrap(function _callee28$(_context40) {
                              while (1)
                                switch ((_context40.prev = _context40.next)) {
                                  case 0:
                                    for (
                                      _len9 = _args40.length, o = new Array(_len9), _key9 = 0;
                                      _key9 < _len9;
                                      _key9++
                                    ) {
                                      o[_key9] = _args40[_key9];
                                    }
                                    _context40.next = 3;
                                    return t === null || t === void 0 ? void 0 : t();
                                  case 3:
                                    return _context40.abrupt(
                                      'return',
                                      _this45.sendMessage(e, i, o),
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
          var _this46 = this;
          var t = e.req;
          this.g.handleMessage(e.channel, e.method, e.args).then(
            function (n) {
              _this46.o(new Xr(_this46.a, t, n, void 0));
            },
            function (n) {
              n.detail instanceof Error && (n.detail = v1(n.detail)),
                _this46.o(new Xr(_this46.a, t, void 0, v1(n)));
            },
          );
        },
      },
      {
        key: 'l',
        value: function l(e) {
          var _this47 = this;
          var t = e.req,
            r = this.g.handleEvent(
              e.channel,
              e.eventName,
              e.arg,
            )(function (n) {
              _this47.o(new n0(_this47.a, t, n));
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
function Qr(e) {
  return e[0] === 'o' && e[1] === 'n' && R1(e.charCodeAt(2));
}
function Kr(e) {
  return /^onDynamic/.test(e) && R1(e.charCodeAt(9));
}
var o0 = /*#__PURE__*/ (function () {
    function o0(e, t) {
      var _this48 = this;
      _classCallCheck(this, o0);
      (this.d = new Map()),
        (this.f = new Map()),
        (this.a = t),
        (this.b = null),
        (this.c = new s0({
          sendMessage: function sendMessage(r, n) {
            e(r, n);
          },
          handleMessage: function handleMessage(r, n, i) {
            return _this48.g(r, n, i);
          },
          handleEvent: function handleEvent(r, n, i) {
            return _this48.h(r, n, i);
          },
        }));
    }
    return _createClass(o0, [
      {
        key: 'onmessage',
        value: function onmessage(e) {
          this.c.handleMessage(e);
        },
      },
      {
        key: 'g',
        value: function g(e, t, r) {
          if (e === Wt && t === e0) return this.j(r[0], r[1], r[2]);
          var n = e === Wt ? this.b : this.d.get(e);
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
          var n = e === Wt ? this.b : this.d.get(e);
          if (!n) throw new Error('Missing channel '.concat(e, ' on worker thread'));
          if (Kr(t)) {
            var i = n[t].call(n, r);
            if (typeof i != 'function')
              throw new Error('Missing dynamic event '.concat(t, ' on request handler.'));
            return i;
          }
          if (Qr(t)) {
            var _i12 = n[t];
            if (typeof _i12 != 'function')
              throw new Error('Missing event '.concat(t, ' on request handler.'));
            return _i12;
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
            var _t23 = this.c.createProxyToRemoteChannel(e);
            this.f.set(e, _t23);
          }
          return this.f.get(e);
        },
      },
      {
        key: 'j',
        value: (function () {
          var _j3 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee29(e, t, r) {
              var _this49 = this;
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
                          })(''.concat(z1.asBrowserUri(''.concat(r, '.js')).toString(!0))).then(
                            function (i) {
                              if (((_this49.b = i.create(_this49)), !_this49.b))
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
          function j(_x26, _x27, _x28) {
            return _j3.apply(this, arguments);
          }
          return j;
        })(),
      },
    ]);
  })(),
  Vt = !1;
function a0(e) {
  if (Vt) return;
  Vt = !0;
  var t = new o0(
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
function l0(e) {
  globalThis.onmessage = function (t) {
    Vt || a0(e);
  };
}
l0(Qs); //# debugId=cfec2af1-b8a8-5f51-b5ac-10d4dbfd9a3a

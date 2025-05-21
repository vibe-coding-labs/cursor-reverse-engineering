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
var _process,
  _V,
  _V2,
  _Z,
  _bt,
  _q,
  _w,
  _gt,
  _pt,
  _Class2,
  _z,
  _fe,
  _yt,
  _y,
  _C,
  _L,
  _process2,
  _F,
  _Lt,
  _he,
  _H2,
  _Y;
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
    for (var _t15 in e)
      'default' !== _t15 &&
        {}.hasOwnProperty.call(e, _t15) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t15)) &&
        (i.get || i.set)
          ? o(f, _t15, i)
          : (f[_t15] = e[_t15]));
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
function _createForOfIteratorHelper(r, e) {
  var t = ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (!t) {
    if (
      Array.isArray(r) ||
      (t = _unsupportedIterableToArray(r)) ||
      (e && r && 'number' == typeof r.length)
    ) {
      t && (r = t);
      var _n8 = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n8 >= r.length
            ? {
                done: !0,
              }
            : {
                done: !1,
                value: r[_n8++],
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
function _awaitAsyncGenerator(e) {
  return new _OverloadYield(e, 0);
}
function _wrapAsyncGenerator(e) {
  return function () {
    return new AsyncGenerator(e.apply(this, arguments));
  };
}
function AsyncGenerator(e) {
  var r, t;
  function resume(r, t) {
    try {
      var n = e[r](t),
        o = n.value,
        u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(
        function (t) {
          if (u) {
            var i = 'return' === r ? 'return' : 'next';
            if (!o.k || t.done) return resume(i, t);
            t = e[i](t).value;
          }
          settle(n.done ? 'return' : 'normal', t);
        },
        function (e) {
          resume('throw', e);
        },
      );
    } catch (e) {
      settle('throw', e);
    }
  }
  function settle(e, n) {
    switch (e) {
      case 'return':
        r.resolve({
          value: n,
          done: !0,
        });
        break;
      case 'throw':
        r.reject(n);
        break;
      default:
        r.resolve({
          value: n,
          done: !1,
        });
    }
    (r = r.next) ? resume(r.key, r.arg) : (t = null);
  }
  (this._invoke = function (e, n) {
    return new Promise(function (o, u) {
      var i = {
        key: e,
        arg: n,
        resolve: o,
        reject: u,
        next: null,
      };
      t ? (t = t.next = i) : ((r = t = i), resume(e, n));
    });
  }),
    'function' != typeof e['return'] && (this['return'] = void 0);
}
(AsyncGenerator.prototype[
  ('function' == typeof Symbol && Symbol.asyncIterator) || '@@asyncIterator'
] = function () {
  return this;
}),
  (AsyncGenerator.prototype.next = function (e) {
    return this._invoke('next', e);
  }),
  (AsyncGenerator.prototype['throw'] = function (e) {
    return this._invoke('throw', e);
  }),
  (AsyncGenerator.prototype['return'] = function (e) {
    return this._invoke('return', e);
  });
function _OverloadYield(e, d) {
  (this.v = e), (this.k = d);
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
      (e._sentryDebugIds[n] = '004fa923-01a0-5c3a-8309-10368ae92ae1'));
  } catch (e) {}
})();
var _H = function H1(e, t) {
  return (
    (_H =
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
    _H(e, t)
  );
};
function __extends(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  _H(e, t);
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
    o;
  if (
    (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) == 'object' &&
    typeof Reflect.decorate == 'function'
  )
    s = Reflect.decorate(e, t, r, n);
  else
    for (var l = e.length - 1; l >= 0; l--)
      (o = e[l]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function __param(e, t) {
  return function (r, n) {
    t(r, n, e);
  };
}
function __esDecorate(e, t, r, n, i, s) {
  function o(F) {
    if (F !== void 0 && typeof F != 'function') throw new TypeError('Function expected');
    return F;
  }
  for (
    var l = n.kind,
      u = l === 'getter' ? 'get' : l === 'setter' ? 'set' : 'value',
      a = !t && e ? (n['static'] ? e : e.prototype) : null,
      f = t || (a ? Object.getOwnPropertyDescriptor(a, n.name) : {}),
      c,
      d = !1,
      w = r.length - 1;
    w >= 0;
    w--
  ) {
    var x = {};
    for (var M in n) x[M] = M === 'access' ? {} : n[M];
    for (var M in n.access) x.access[M] = n.access[M];
    x.addInitializer = function (F) {
      if (d) throw new TypeError('Cannot add initializers after decoration has completed');
      s.push(o(F || null));
    };
    var T = (0, r[w])(
      l === 'accessor'
        ? {
            get: f.get,
            set: f.set,
          }
        : f[u],
      x,
    );
    if (l === 'accessor') {
      if (T === void 0) continue;
      if (T === null || _typeof(T) != 'object') throw new TypeError('Object expected');
      (c = o(T.get)) && (f.get = c), (c = o(T.set)) && (f.set = c), (c = o(T.init)) && i.unshift(c);
    } else (c = o(T)) && (l === 'field' ? i.unshift(c) : (f[u] = c));
  }
  a && Object.defineProperty(a, n.name, f), (d = !0);
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
      : new r(function (o) {
          o(s);
        });
  }
  return new (r || (r = Promise))(function (s, o) {
    function l(f) {
      try {
        a(n.next(f));
      } catch (c) {
        o(c);
      }
    }
    function u(f) {
      try {
        a(n['throw'](f));
      } catch (c) {
        o(c);
      }
    }
    function a(f) {
      f.done ? s(f.value) : i(f.value).then(l, u);
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
    o;
  return (
    (o = {
      next: l(0),
      throw: l(1),
      return: l(2),
    }),
    typeof Symbol == 'function' &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function l(a) {
    return function (f) {
      return u([a, f]);
    };
  }
  function u(a) {
    if (n) throw new TypeError('Generator is already executing.');
    for (; o && ((o = 0), a[0] && (r = 0)), r; )
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
      } catch (f) {
        (a = [6, f]), (i = 0);
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
    o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) s.push(i.value);
  } catch (l) {
    o = {
      error: l,
    };
  } finally {
    try {
      i && !i.done && (r = n['return']) && r.call(n);
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
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, l = s.length; o < l; o++, i++) n[i] = s[o];
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
    l('next'),
    l('throw'),
    l('return', o),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function o(w) {
    return function (x) {
      return Promise.resolve(x).then(w, c);
    };
  }
  function l(w, x) {
    n[w] &&
      ((i[w] = function (M) {
        return new Promise(function (T, F) {
          s.push([w, M, T, F]) > 1 || u(w, M);
        });
      }),
      x && (i[w] = x(i[w])));
  }
  function u(w, x) {
    try {
      a(n[w](x));
    } catch (M) {
      d(s[0][3], M);
    }
  }
  function a(w) {
    w.value instanceof __await ? Promise.resolve(w.value.v).then(f, c) : d(s[0][2], w);
  }
  function f(w) {
    u('next', w);
  }
  function c(w) {
    u('throw', w);
  }
  function d(w, x) {
    w(x), s.shift(), s.length && u(s[0][0], s[0][1]);
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
      ? function (o) {
          return (r = !r)
            ? {
                value: __await(e[i](o)),
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
      function (o) {
        return new Promise(function (l, u) {
          (o = e[s](o)), i(l, u, o.done, o.value);
        });
      };
  }
  function i(s, o, l, u) {
    Promise.resolve(u).then(function (a) {
      s({
        value: a,
        done: l,
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
var Pt = Object.create
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
  return Pt(t, e), t;
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
var St =
  typeof SuppressedError == 'function'
    ? SuppressedError
    : function (e, t, r) {
        var n = new Error(r);
        return (n.name = 'SuppressedError'), (n.error = e), (n.suppressed = t), n;
      };
function __disposeResources(e) {
  function t(n) {
    (e.error = e.hasError ? new St(n, e.error, 'An error was suppressed during disposal.') : n),
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
var kt = /*#__PURE__*/ (function () {
    function kt() {
      _classCallCheck(this, kt);
      (this.b = []),
        (this.a = function (e) {
          setTimeout(function () {
            throw e.stack
              ? J1.isErrorNoTelemetry(e)
                ? new J1(e.message + '\n\n' + e.stack)
                : new Error(e.message + '\n\n' + e.stack)
              : e;
          }, 0);
        });
    }
    return _createClass(kt, [
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
  Ot = new kt();
function $1(e) {
  Tt(e) || Ot.onUnexpectedError(e);
}
function me(e) {
  if (e instanceof Error) {
    var t = e.name,
      r = e.message,
      n = e.stacktrace || e.stack;
    return {
      $isError: !0,
      name: t,
      message: r,
      stack: n,
      noTelemetry: J1.isErrorNoTelemetry(e),
    };
  }
  return e;
}
var B1 = 'Canceled';
function Tt(e) {
  return e instanceof Rt ? !0 : e instanceof Error && e.name === B1 && e.message === B1;
}
var Rt = /*#__PURE__*/ (function (_Error) {
    function Rt() {
      var _this3;
      _classCallCheck(this, Rt);
      (_this3 = _callSuper(this, Rt, [B1])), (_this3.name = _this3.message);
      return _this3;
    }
    _inherits(Rt, _Error);
    return _createClass(Rt);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  J1 = /*#__PURE__*/ (function (_Error2) {
    function ce(t) {
      var _this4;
      _classCallCheck(this, ce);
      (_this4 = _callSuper(this, ce, [t])), (_this4.name = 'CodeExpectedError');
      return _this4;
    }
    _inherits(ce, _Error2);
    return _createClass(ce, null, [
      {
        key: 'fromError',
        value: function fromError(t) {
          if (t instanceof ce) return t;
          var r = new ce();
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
function ve() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var Un =
    ve() === 'pseudo' ||
    ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) < 'u' &&
      document.location &&
      typeof document.location.hash == 'string' &&
      document.location.hash.indexOf('pseudo=true') >= 0),
  c1 = 'en',
  _1 = !1,
  x1 = !1,
  b1 = !1,
  Mt = !1,
  be = !1,
  K1 = !1,
  It = !1,
  jt = !1,
  Ut = !1,
  Dt = !1,
  P1 = void 0,
  S1 = c1,
  ge = c1,
  qt = void 0,
  Z = void 0,
  G = globalThis,
  V = void 0;
_typeof(G.vscode) < 'u' && _typeof(G.vscode.process) < 'u'
  ? (V = G.vscode.process)
  : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) < 'u' &&
    typeof ((_process = process) === null ||
    _process === void 0 ||
    (_process = _process.versions) === null ||
    _process === void 0
      ? void 0
      : _process.node) == 'string' &&
    (V = process);
var pe =
    typeof ((_V = V) === null || _V === void 0 || (_V = _V.versions) === null || _V === void 0
      ? void 0
      : _V.electron) == 'string',
  zt = pe && ((_V2 = V) === null || _V2 === void 0 ? void 0 : _V2.type) === 'renderer';
if (_typeof(V) == 'object') {
  (_1 = V.platform === 'win32'),
    (x1 = V.platform === 'darwin'),
    (b1 = V.platform === 'linux'),
    (Mt = b1 && !!V.env.SNAP && !!V.env.SNAP_REVISION),
    (It = pe),
    (Ut = !!V.env.CI || !!V.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
    (P1 = c1),
    (S1 = c1);
  var e = V.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      var _t$languagePack;
      var t = JSON.parse(e);
      (P1 = t.userLocale),
        (ge = t.osLocale),
        (S1 = t.resolvedLanguage || c1),
        (qt =
          (_t$languagePack = t.languagePack) === null || _t$languagePack === void 0
            ? void 0
            : _t$languagePack.translationsConfigFile);
    } catch (_unused) {}
  be = !0;
} else
  (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) == 'object' && !zt
    ? ((Z = navigator.userAgent),
      (_1 = Z.indexOf('Windows') >= 0),
      (x1 = Z.indexOf('Macintosh') >= 0),
      (jt =
        (Z.indexOf('Macintosh') >= 0 || Z.indexOf('iPad') >= 0 || Z.indexOf('iPhone') >= 0) &&
        !!navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 0),
      (b1 = Z.indexOf('Linux') >= 0),
      (Dt = ((_Z = Z) === null || _Z === void 0 ? void 0 : _Z.indexOf('Mobi')) >= 0),
      (K1 = !0),
      (S1 = ve() || c1),
      (P1 = navigator.language.toLowerCase()),
      (ge = P1))
    : console.error('Unable to resolve platform.');
var we;
(function (e) {
  (e[(e.Web = 0)] = 'Web'),
    (e[(e.Mac = 1)] = 'Mac'),
    (e[(e.Linux = 2)] = 'Linux'),
    (e[(e.Windows = 3)] = 'Windows');
})(we || (we = {}));
var Z1 = 0;
x1 ? (Z1 = 1) : _1 ? (Z1 = 3) : b1 && (Z1 = 2);
var f1 = _1,
  Wt = x1,
  Ft = b1,
  Vt = be,
  ye = K1,
  Ht = K1 && typeof G.importScripts == 'function',
  Bt = Ht ? G.origin : void 0,
  J = Z,
  Q = S1,
  Ce;
(function (e) {
  function t() {
    return Q;
  }
  e.value = t;
  function r() {
    return Q.length === 2
      ? Q === 'en'
      : Q.length >= 3
        ? Q[0] === 'e' && Q[1] === 'n' && Q[2] === '-'
        : !1;
  }
  e.isDefaultVariant = r;
  function n() {
    return Q === 'en';
  }
  e.isDefault = n;
})(Ce || (Ce = {}));
var Jt = typeof G.postMessage == 'function' && !G.importScripts,
  Kt = (function () {
    if (Jt) {
      var _e2 = [];
      G.addEventListener('message', function (r) {
        if (r.data && r.data.vscodeScheduleAsyncWork)
          for (var n = 0, i = _e2.length; n < i; n++) {
            var s = _e2[n];
            if (s.id === r.data.vscodeScheduleAsyncWork) {
              _e2.splice(n, 1), s.callback();
              return;
            }
          }
      });
      var _t2 = 0;
      return function (r) {
        var n = ++_t2;
        _e2.push({
          id: n,
          callback: r,
        }),
          G.postMessage(
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
  Le;
(function (e) {
  (e[(e.Windows = 1)] = 'Windows'),
    (e[(e.Macintosh = 2)] = 'Macintosh'),
    (e[(e.Linux = 3)] = 'Linux');
})(Le || (Le = {}));
var Zt = !!(J && J.indexOf('Chrome') >= 0),
  Dn = !!(J && J.indexOf('Firefox') >= 0),
  qn = !!(!Zt && J && J.indexOf('Safari') >= 0),
  zn = !!(J && J.indexOf('Edg/') >= 0),
  Wn = !!(J && J.indexOf('Android') >= 0),
  Ne;
function Gt(e, t) {
  var r = Object.create(null);
  var _iterator7 = _createForOfIteratorHelper(e),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var n = _step7.value;
      var i = t(n);
      var s = r[i];
      s || (s = r[i] = []), s.push(n);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return r;
}
var Fn =
  ((Ne = Symbol.toStringTag),
  /*#__PURE__*/ (function () {
    function Fn(e, t) {
      _classCallCheck(this, Fn);
      (this.b = t), (this.a = new Map()), (this[Ne] = 'SetWithKey');
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
    return _createClass(Fn, [
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
          var _iterator9, _step9, _e3;
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
                    _e3 = _step9.value;
                    _context.next = 7;
                    return [_e3, _e3];
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
          var _iterator0, _step0, _e4;
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
                    _e4 = _step0.value;
                    _context2.next = 7;
                    return _e4;
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
          var _this5 = this;
          this.a.forEach(function (r) {
            return e.call(t, r, r, _this5);
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
function Xt(e, t) {
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
function Yt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = r,
    s = n;
  for (; i < s; ) {
    var o = Math.floor((i + s) / 2);
    t(e[o]) ? (i = o + 1) : (s = o);
  }
  return i - 1;
}
var Vn =
    ((_bt = /*#__PURE__*/ (function () {
      function bt(t) {
        _classCallCheck(this, bt);
        (this.e = t), (this.c = 0);
      }
      return _createClass(bt, [
        {
          key: 'findLastMonotonous',
          value: function findLastMonotonous(t) {
            if (bt.assertInvariants) {
              if (this.d) {
                var _iterator1 = _createForOfIteratorHelper(this.e),
                  _step1;
                try {
                  for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                    var n = _step1.value;
                    if (this.d(n) && !t(n))
                      throw new Error(
                        'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.',
                      );
                  }
                } catch (err) {
                  _iterator1.e(err);
                } finally {
                  _iterator1.f();
                }
              }
              this.d = t;
            }
            var r = Yt(this.e, t, this.c);
            return (this.c = r + 1), r === -1 ? void 0 : this.e[r];
          },
        },
      ]);
    })()),
    (_bt.assertInvariants = !1),
    _bt),
  G1;
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
})(G1 || (G1 = {}));
function Qt(e, t) {
  return function (r, n) {
    return t(e(r), e(n));
  };
}
var er = function er(e, t) {
    return e - t;
  },
  Hn =
    ((_q = /*#__PURE__*/ (function () {
      function q1(t) {
        _classCallCheck(this, q1);
        this.iterate = t;
      }
      return _createClass(q1, [
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
            var _this6 = this;
            return new q1(function (r) {
              return _this6.iterate(function (n) {
                return t(n) ? r(n) : !0;
              });
            });
          },
        },
        {
          key: 'map',
          value: function map(t) {
            var _this7 = this;
            return new q1(function (r) {
              return _this7.iterate(function (n) {
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
                return (n || G1.isGreaterThan(t(i, r))) && ((n = !1), (r = i)), !0;
              }),
              r
            );
          },
        },
      ]);
    })()),
    (_q.empty = new _q(function (t) {})),
    _q),
  Ae,
  Ee,
  $e,
  tr = /*#__PURE__*/ _createClass(function tr(e, t) {
    _classCallCheck(this, tr);
    (this.uri = e), (this.value = t);
  });
function rr(e) {
  return Array.isArray(e);
}
var _e =
    ((_ref = ((Ae = Symbol.toStringTag), Symbol.iterator)),
    (_w = /*#__PURE__*/ (function () {
      function w1(t, r) {
        _classCallCheck(this, w1);
        if (((this[Ae] = 'ResourceMap'), t instanceof w1))
          (this.d = new Map(t.d)), (this.e = r !== null && r !== void 0 ? r : w1.c);
        else if (rr(t)) {
          (this.d = new Map()), (this.e = r !== null && r !== void 0 ? r : w1.c);
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
        } else (this.d = new Map()), (this.e = t !== null && t !== void 0 ? t : w1.c);
      }
      return _createClass(w1, [
        {
          key: 'set',
          value: function set(t, r) {
            return this.d.set(this.e(t), new tr(t, r)), this;
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
            var _iterator12, _step12, _t3;
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
                      _t3 = _step12.value;
                      _context3.next = 7;
                      return _t3.value;
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
            var _iterator13, _step13, _t4;
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
                      _t4 = _step13.value;
                      _context4.next = 7;
                      return _t4.uri;
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
            var _iterator14, _step14, _t5;
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
                      _t5 = _step14.value;
                      _context5.next = 7;
                      return [_t5.uri, _t5.value];
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
            var _iterator15, _step15, _step15$value, _t6;
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
                      (_step15$value = _slicedToArray(_step15.value, 2)), (_t6 = _step15$value[1]);
                      _context6.next = 7;
                      return [_t6.uri, _t6.value];
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
    (_w.c = function (t) {
      return t.toString();
    }),
    _w),
  Bn = /*#__PURE__*/ (function (_ref2) {
    function Bn(e, t) {
      _classCallCheck(this, Bn);
      (this[Ee] = 'ResourceSet'),
        !e || typeof e == 'function'
          ? (this.c = new _e(e))
          : ((this.c = new _e(t)), e.forEach(this.add, this));
    }
    return _createClass(Bn, [
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
          var _this8 = this;
          this.c.forEach(function (r, n) {
            return e.call(t, n, n, _this8);
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
  })(((Ee = Symbol.toStringTag), Symbol.iterator)),
  xe;
(function (e) {
  (e[(e.None = 0)] = 'None'), (e[(e.AsOld = 1)] = 'AsOld'), (e[(e.AsNew = 2)] = 'AsNew');
})(xe || (xe = {}));
var Jn = /*#__PURE__*/ (function (_ref3) {
    function Jn() {
      _classCallCheck(this, Jn);
      (this[$e] = 'LinkedMap'),
        (this.c = new Map()),
        (this.d = void 0),
        (this.e = void 0),
        (this.f = 0),
        (this.g = 0);
    }
    return _createClass(Jn, [
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
            var _t7 = e.next,
              r = e.previous;
            if (!_t7 || !r) throw new Error('Invalid list');
            (_t7.previous = r), (r.next = _t7);
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
                _t8 = _step16$value[0],
                r = _step16$value[1];
              this.set(_t8, r);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        },
      },
    ]);
  })((($e = Symbol.toStringTag), Symbol.iterator)),
  nr = /*#__PURE__*/ (function () {
    function nr() {
      _classCallCheck(this, nr);
      this.c = new Map();
    }
    return _createClass(nr, [
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
  k1;
(function (e) {
  var _marked = /*#__PURE__*/ _regeneratorRuntime().mark(i),
    _marked2 = /*#__PURE__*/ _regeneratorRuntime().mark(l),
    _marked3 = /*#__PURE__*/ _regeneratorRuntime().mark(d),
    _marked4 = /*#__PURE__*/ _regeneratorRuntime().mark(w),
    _marked5 = /*#__PURE__*/ _regeneratorRuntime().mark(x),
    _marked6 = /*#__PURE__*/ _regeneratorRuntime().mark(M);
  function t(p) {
    return p && _typeof(p) == 'object' && typeof p[Symbol.iterator] == 'function';
  }
  e.is = t;
  var r = Object.freeze([]);
  function n() {
    return r;
  }
  e.empty = n;
  function i(p) {
    return _regeneratorRuntime().wrap(function i$(_context7) {
      while (1)
        switch ((_context7.prev = _context7.next)) {
          case 0:
            _context7.next = 2;
            return p;
          case 2:
          case 'end':
            return _context7.stop();
        }
    }, _marked);
  }
  e.single = i;
  function s(p) {
    return t(p) ? p : i(p);
  }
  e.wrap = s;
  function o(p) {
    return p || r;
  }
  e.from = o;
  function l(p) {
    var L;
    return _regeneratorRuntime().wrap(function l$(_context8) {
      while (1)
        switch ((_context8.prev = _context8.next)) {
          case 0:
            L = p.length - 1;
          case 1:
            if (!(L >= 0)) {
              _context8.next = 7;
              break;
            }
            _context8.next = 4;
            return p[L];
          case 4:
            L--;
            _context8.next = 1;
            break;
          case 7:
          case 'end':
            return _context8.stop();
        }
    }, _marked2);
  }
  e.reverse = l;
  function u(p) {
    return !p || p[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = u;
  function a(p) {
    return p[Symbol.iterator]().next().value;
  }
  e.first = a;
  function f(p, L) {
    var $ = 0;
    var _iterator17 = _createForOfIteratorHelper(p),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
        var D = _step17.value;
        if (L(D, $++)) return !0;
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return !1;
  }
  e.some = f;
  function c(p, L) {
    var _iterator18 = _createForOfIteratorHelper(p),
      _step18;
    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
        var $ = _step18.value;
        if (L($)) return $;
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }
  e.find = c;
  function d(p, L) {
    var _iterator19, _step19, $;
    return _regeneratorRuntime().wrap(
      function d$(_context9) {
        while (1)
          switch ((_context9.prev = _context9.next)) {
            case 0:
              _iterator19 = _createForOfIteratorHelper(p);
              _context9.prev = 1;
              _iterator19.s();
            case 3:
              if ((_step19 = _iterator19.n()).done) {
                _context9.next = 11;
                break;
              }
              $ = _step19.value;
              _context9.t0 = L($);
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
  e.filter = d;
  function w(p, L) {
    var $, _iterator20, _step20, D;
    return _regeneratorRuntime().wrap(
      function w$(_context0) {
        while (1)
          switch ((_context0.prev = _context0.next)) {
            case 0:
              $ = 0;
              _iterator20 = _createForOfIteratorHelper(p);
              _context0.prev = 2;
              _iterator20.s();
            case 4:
              if ((_step20 = _iterator20.n()).done) {
                _context0.next = 10;
                break;
              }
              D = _step20.value;
              _context0.next = 8;
              return L(D, $++);
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
  e.map = w;
  function x(p, L) {
    var $, _iterator21, _step21, D;
    return _regeneratorRuntime().wrap(
      function x$(_context1) {
        while (1)
          switch ((_context1.prev = _context1.next)) {
            case 0:
              $ = 0;
              _iterator21 = _createForOfIteratorHelper(p);
              _context1.prev = 2;
              _iterator21.s();
            case 4:
              if ((_step21 = _iterator21.n()).done) {
                _context1.next = 9;
                break;
              }
              D = _step21.value;
              return _context1.delegateYield(L(D, $++), 't0', 7);
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
  e.flatMap = x;
  function M() {
    var _len,
      p,
      _key,
      _i,
      _p,
      L,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function M$(_context10) {
      while (1)
        switch ((_context10.prev = _context10.next)) {
          case 0:
            for (_len = _args10.length, p = new Array(_len), _key = 0; _key < _len; _key++) {
              p[_key] = _args10[_key];
            }
            (_i = 0), (_p = p);
          case 2:
            if (!(_i < _p.length)) {
              _context10.next = 8;
              break;
            }
            L = _p[_i];
            return _context10.delegateYield(L, 't0', 5);
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
  e.concat = M;
  function T(p, L, $) {
    var D = $;
    var _iterator22 = _createForOfIteratorHelper(p),
      _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        var a1 = _step22.value;
        D = L(D, a1);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return D;
  }
  e.reduce = T;
  function F(p, L) {
    var $ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : p.length;
    return /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context11) {
        while (1)
          switch ((_context11.prev = _context11.next)) {
            case 0:
              L < -p.length && (L = 0),
                L < 0 && (L += p.length),
                $ < 0 ? ($ += p.length) : $ > p.length && ($ = p.length);
            case 1:
              if (!(L < $)) {
                _context11.next = 7;
                break;
              }
              _context11.next = 4;
              return p[L];
            case 4:
              L++;
              _context11.next = 1;
              break;
            case 7:
            case 'end':
              return _context11.stop();
          }
      }, _callee);
    })();
  }
  e.slice = F;
  function V1(p) {
    var L =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
    var $ = [];
    if (L === 0) return [$, p];
    var D = p[Symbol.iterator]();
    for (var a1 = 0; a1 < L; a1++) {
      var N1 = D.next();
      if (N1.done) return [$, e.empty()];
      $.push(N1.value);
    }
    return [
      $,
      _defineProperty({}, Symbol.iterator, function () {
        return D;
      }),
    ];
  }
  e.consume = V1;
  function l1(_x) {
    return _l.apply(this, arguments);
  }
  function _l() {
    _l = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(p) {
        var L, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, $;
        return _regeneratorRuntime().wrap(
          function _callee2$(_context12) {
            while (1)
              switch ((_context12.prev = _context12.next)) {
                case 0:
                  L = [];
                  _iteratorAbruptCompletion = false;
                  _didIteratorError = false;
                  _context12.prev = 3;
                  _iterator = _asyncIterator(p);
                case 5:
                  _context12.next = 7;
                  return _iterator.next();
                case 7:
                  if (!(_iteratorAbruptCompletion = !(_step = _context12.sent).done)) {
                    _context12.next = 13;
                    break;
                  }
                  $ = _step.value;
                  L.push($);
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
                  return _context12.abrupt('return', Promise.resolve(L));
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
    return _l.apply(this, arguments);
  }
  e.asyncToArray = l1;
})(k1 || (k1 = {}));
var ir = !1,
  h1 = null,
  Kn =
    ((_gt = /*#__PURE__*/ (function () {
      function gt() {
        _classCallCheck(this, gt);
        this.b = new Map();
      }
      return _createClass(gt, [
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
                  idx: gt.a++,
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
                a = _toConsumableArray(this.b.values()).filter(function (c) {
                  return c.source !== null && !_this0.f(c, u).isSingleton;
                });
              if (a.length === 0) return;
              var f = new Set(
                a.map(function (c) {
                  return c.value;
                }),
              );
              if (
                ((n = a.filter(function (c) {
                  return !(c.parent && f.has(c.parent));
                })),
                n.length === 0)
              )
                throw new Error('There are cyclic diposable chains!');
            }
            if (!n) return;
            function i(u) {
              function a(c, d) {
                for (
                  ;
                  c.length > 0 &&
                  d.some(function (w) {
                    return typeof w == 'string' ? w === c[0] : c[0].match(w);
                  });

                )
                  c.shift();
              }
              var f = u.source
                .split('\n')
                .map(function (c) {
                  return c.trim().replace('at ', '');
                })
                .filter(function (c) {
                  return c !== '';
                });
              return (
                a(f, [
                  'Error',
                  /^trackDisposable \(.*\)$/,
                  /^DisposableTracker.trackDisposable \(.*\)$/,
                ]),
                f.reverse()
              );
            }
            var s = new nr();
            var _iterator23 = _createForOfIteratorHelper(n),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                var _u = _step23.value;
                var _a = i(_u);
                for (var _f = 0; _f <= _a.length; _f++) s.add(_a.slice(0, _f).join('\n'), _u);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
            n.sort(
              Qt(function (u) {
                return u.idx;
              }, er),
            );
            var o = '',
              l = 0;
            var _iterator24 = _createForOfIteratorHelper(n.slice(0, t)),
              _step24;
            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
                var _u2 = _step24.value;
                l++;
                var _a2 = i(_u2),
                  _f2 = [];
                var _loop = function _loop(c) {
                  var d = _a2[c];
                  d = '(shared with '
                    .concat(s.get(_a2.slice(0, c + 1).join('\n')).size, '/')
                    .concat(n.length, ' leaks) at ')
                    .concat(d);
                  var x = s.get(_a2.slice(0, c).join('\n')),
                    M = Gt(
                      _toConsumableArray(x).map(function (T) {
                        return i(T)[c];
                      }),
                      function (T) {
                        return T;
                      },
                    );
                  delete M[_a2[c]];
                  for (
                    var _i2 = 0, _Object$entries = Object.entries(M);
                    _i2 < _Object$entries.length;
                    _i2++
                  ) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                      T = _Object$entries$_i[0],
                      F = _Object$entries$_i[1];
                    _f2.unshift(
                      '    - stacktraces of '
                        .concat(F.length, ' other leaks continue with ')
                        .concat(T),
                    );
                  }
                  _f2.unshift(d);
                };
                for (var c = 0; c < _a2.length; c++) {
                  _loop(c);
                }
                o += '\n\n\n==================== Leaking disposable '
                  .concat(l, '/')
                  .concat(n.length, ': ')
                  .concat(_u2.value.constructor.name, ' ====================\n')
                  .concat(
                    _f2.join('\n'),
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
                (o += '\n\n\n... and '.concat(n.length - t, ' more leaking disposables\n\n')),
              {
                leaks: n,
                details: o,
              }
            );
          },
        },
      ]);
    })()),
    (_gt.a = 0),
    _gt);
function sr(e) {
  h1 = e;
}
if (ir) {
  var _e5 = '__is_disposable_tracked__';
  sr(
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
              t[_e5] || console.log(r);
            }, 3e3);
          },
        },
        {
          key: 'setParent',
          value: function setParent(t, r) {
            if (t && t !== g1.None)
              try {
                t[_e5] = !0;
              } catch (_unused2) {}
          },
        },
        {
          key: 'markAsDisposed',
          value: function markAsDisposed(t) {
            if (t && t !== g1.None)
              try {
                t[_e5] = !0;
              } catch (_unused3) {}
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
function X1(e) {
  var _h;
  return (_h = h1) !== null && _h !== void 0 && _h.trackDisposable(e), e;
}
function Y1(e) {
  var _h2;
  (_h2 = h1) === null || _h2 === void 0 || _h2.markAsDisposed(e);
}
function Q1(e, t) {
  var _h3;
  (_h3 = h1) === null || _h3 === void 0 || _h3.setParent(e, t);
}
function or(e, t) {
  if (h1) {
    var _iterator25 = _createForOfIteratorHelper(e),
      _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
        var r = _step25.value;
        h1.setParent(r, t);
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
  }
}
function Pe(e) {
  if (k1.is(e)) {
    var _t9 = [];
    var _iterator26 = _createForOfIteratorHelper(e),
      _step26;
    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
        var r = _step26.value;
        if (r)
          try {
            r.dispose();
          } catch (n) {
            _t9.push(n);
          }
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }
    if (_t9.length === 1) throw _t9[0];
    if (_t9.length > 1)
      throw new AggregateError(_t9, 'Encountered errors while disposing of store');
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function lr() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }
  var t = Se(function () {
    return Pe(e);
  });
  return or(e, t), t;
}
function Se(e) {
  var t = X1({
    dispose: Xt(function () {
      Y1(t), e();
    }),
  });
  return t;
}
var ee =
    ((_pt = /*#__PURE__*/ (function () {
      function pt() {
        _classCallCheck(this, pt);
        (this.f = new Set()), (this.g = !1), X1(this);
      }
      return _createClass(pt, [
        {
          key: 'dispose',
          value: function dispose() {
            this.g || (Y1(this), (this.g = !0), this.clear());
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
                Pe(this.f);
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
              Q1(t, this),
              this.g
                ? pt.DISABLE_DISPOSED_WARNING ||
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
            t && this.f.has(t) && (this.f['delete'](t), Q1(t, null));
          },
        },
      ]);
    })()),
    (_pt.DISABLE_DISPOSED_WARNING = !1),
    _pt),
  g1 =
    ((_Class2 = /*#__PURE__*/ (function () {
      function g1() {
        _classCallCheck(this, g1);
        (this.B = new ee()), X1(this), Q1(this.B, this);
      }
      return _createClass(g1, [
        {
          key: 'dispose',
          value: function dispose() {
            Y1(this), this.B.dispose();
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
  S =
    ((_z = /*#__PURE__*/ _createClass(function z1(t) {
      _classCallCheck(this, z1);
      (this.element = t), (this.next = z1.Undefined), (this.prev = z1.Undefined);
    })),
    (_z.Undefined = new _z(void 0)),
    _z),
  ar = /*#__PURE__*/ (function () {
    function ar() {
      _classCallCheck(this, ar);
      (this.a = S.Undefined), (this.b = S.Undefined), (this.c = 0);
    }
    return _createClass(ar, [
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
          return this.a === S.Undefined;
        },
      },
      {
        key: 'clear',
        value: function clear() {
          var e = this.a;
          for (; e !== S.Undefined; ) {
            var _t0 = e.next;
            (e.prev = S.Undefined), (e.next = S.Undefined), (e = _t0);
          }
          (this.a = S.Undefined), (this.b = S.Undefined), (this.c = 0);
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
          var r = new S(e);
          if (this.a === S.Undefined) (this.a = r), (this.b = r);
          else if (t) {
            var i = this.b;
            (this.b = r), (r.prev = i), (i.next = r);
          } else {
            var _i3 = this.a;
            (this.a = r), (r.next = _i3), (_i3.prev = r);
          }
          this.c += 1;
          var n = !1;
          return function () {
            n || ((n = !0), _this1.e(r));
          };
        },
      },
      {
        key: 'shift',
        value: function shift() {
          if (this.a !== S.Undefined) {
            var _e7 = this.a.element;
            return this.e(this.a), _e7;
          }
        },
      },
      {
        key: 'pop',
        value: function pop() {
          if (this.b !== S.Undefined) {
            var _e8 = this.b.element;
            return this.e(this.b), _e8;
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
        value: function e(_e6) {
          if (_e6.prev !== S.Undefined && _e6.next !== S.Undefined) {
            var _t1 = _e6.prev;
            (_t1.next = _e6.next), (_e6.next.prev = _t1);
          } else
            _e6.prev === S.Undefined && _e6.next === S.Undefined
              ? ((this.a = S.Undefined), (this.b = S.Undefined))
              : _e6.next === S.Undefined
                ? ((this.b = this.b.prev), (this.b.next = S.Undefined))
                : _e6.prev === S.Undefined && ((this.a = this.a.next), (this.a.prev = S.Undefined));
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
                    if (!(e !== S.Undefined)) {
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
  ur = globalThis.performance && typeof globalThis.performance.now == 'function',
  ke = /*#__PURE__*/ (function () {
    function wt(t) {
      _classCallCheck(this, wt);
      (this.c =
        ur && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance)),
        (this.a = this.c()),
        (this.b = -1);
    }
    return _createClass(
      wt,
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
            return new wt(t);
          },
        },
      ],
    );
  })(),
  cr = !1,
  Oe = !1,
  fr = !1,
  O1;
(function (e) {
  e.None = function () {
    return g1.None;
  };
  function t(v) {
    if (fr) {
      var h = v.onDidAddListener,
        b = te.create();
      var m = 0;
      v.onDidAddListener = function () {
        ++m === 2 &&
          (console.warn(
            'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
          ),
          b.print()),
          h === null || h === void 0 ? void 0 : h();
      };
    }
  }
  function r(v, h) {
    return w(v, function () {}, 0, void 0, !0, void 0, h);
  }
  e.defer = r;
  function n(v) {
    return function (h) {
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var m = arguments.length > 2 ? arguments[2] : undefined;
      var g = !1,
        C;
      return (
        (C = v(
          function (A) {
            if (!g) return C ? C.dispose() : (g = !0), h.call(b, A);
          },
          null,
          m,
        )),
        g && C.dispose(),
        C
      );
    };
  }
  e.once = n;
  function i(v, h) {
    return e.once(e.filter(v, h));
  }
  e.onceIf = i;
  function s(v, h, b) {
    return c(function (m) {
      var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var C = arguments.length > 2 ? arguments[2] : undefined;
      return v(
        function (A) {
          return m.call(g, h(A));
        },
        null,
        C,
      );
    }, b);
  }
  e.map = s;
  function o(v, h, b) {
    return c(function (m) {
      var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var C = arguments.length > 2 ? arguments[2] : undefined;
      return v(
        function (A) {
          h(A), m.call(g, A);
        },
        null,
        C,
      );
    }, b);
  }
  e.forEach = o;
  function l(v, h, b) {
    return c(function (m) {
      var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var C = arguments.length > 2 ? arguments[2] : undefined;
      return v(
        function (A) {
          return h(A) && m.call(g, A);
        },
        null,
        C,
      );
    }, b);
  }
  e.filter = l;
  function u(v) {
    return v;
  }
  e.signal = u;
  function a() {
    for (var _len3 = arguments.length, v = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      v[_key3] = arguments[_key3];
    }
    return function (h) {
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var m = arguments.length > 2 ? arguments[2] : undefined;
      var g = lr.apply(
        void 0,
        _toConsumableArray(
          v.map(function (C) {
            return C(function (A) {
              return h.call(b, A);
            });
          }),
        ),
      );
      return d(g, m);
    };
  }
  e.any = a;
  function f(v, h, b, m) {
    var g = b;
    return s(
      v,
      function (C) {
        return (g = h(g, C)), g;
      },
      m,
    );
  }
  e.reduce = f;
  function c(v, h) {
    var b;
    var m = {
      onWillAddFirstListener: function onWillAddFirstListener() {
        b = v(g.fire, g);
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        var _b;
        (_b = b) === null || _b === void 0 || _b.dispose();
      },
    };
    h || t(m);
    var g = new K(m);
    return h !== null && h !== void 0 && h.add(g), g.event;
  }
  function d(v, h) {
    return h instanceof Array ? h.push(v) : h && h.add(v), v;
  }
  function w(v, h) {
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var m = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var g = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    var C = arguments.length > 5 ? arguments[5] : undefined;
    var A = arguments.length > 6 ? arguments[6] : undefined;
    var I,
      U,
      u1,
      A1 = 0,
      v1;
    var de = {
      leakWarningThreshold: C,
      onWillAddFirstListener: function onWillAddFirstListener() {
        I = v(function (_t) {
          A1++,
            (U = h(U, _t)),
            m && !u1 && (E1.fire(U), (U = void 0)),
            (v1 = function v1() {
              var xt = U;
              (U = void 0), (u1 = void 0), (!m || A1 > 1) && E1.fire(xt), (A1 = 0);
            }),
            typeof b == 'number'
              ? (clearTimeout(u1), (u1 = setTimeout(v1, b)))
              : u1 === void 0 && ((u1 = 0), queueMicrotask(v1));
        });
      },
      onWillRemoveListener: function onWillRemoveListener() {
        var _v;
        g && A1 > 0 && ((_v = v1) === null || _v === void 0 ? void 0 : _v());
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        (v1 = void 0), I.dispose();
      },
    };
    A || t(de);
    var E1 = new K(de);
    return A !== null && A !== void 0 && A.add(E1), E1.event;
  }
  e.debounce = w;
  function x(v) {
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var b = arguments.length > 2 ? arguments[2] : undefined;
    return e.debounce(
      v,
      function (m, g) {
        return m ? (m.push(g), m) : [g];
      },
      h,
      void 0,
      !0,
      void 0,
      b,
    );
  }
  e.accumulate = x;
  function M(v) {
    var h =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : function (m, g) {
            return m === g;
          };
    var b = arguments.length > 2 ? arguments[2] : undefined;
    var m = !0,
      g;
    return l(
      v,
      function (C) {
        var A = m || !h(C, g);
        return (m = !1), (g = C), A;
      },
      b,
    );
  }
  e.latch = M;
  function T(v, h, b) {
    return [
      e.filter(v, h, b),
      e.filter(
        v,
        function (m) {
          return !h(m);
        },
        b,
      ),
    ];
  }
  e.split = T;
  function F(v) {
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var m = arguments.length > 3 ? arguments[3] : undefined;
    var g = b.slice(),
      C = v(function (U) {
        g ? g.push(U) : I.fire(U);
      });
    m && m.add(C);
    var A = function A() {
        var _g;
        (_g = g) !== null &&
          _g !== void 0 &&
          _g.forEach(function (U) {
            return I.fire(U);
          }),
          (g = null);
      },
      I = new K({
        onWillAddFirstListener: function onWillAddFirstListener() {
          C ||
            ((C = v(function (U) {
              return I.fire(U);
            })),
            m && m.add(C));
        },
        onDidAddFirstListener: function onDidAddFirstListener() {
          g && (h ? setTimeout(A) : A());
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          C && C.dispose(), (C = null);
        },
      });
    return m && m.add(I), I.event;
  }
  e.buffer = F;
  function V1(v, h) {
    return function (m, g, C) {
      var A = h(new p());
      return v(
        function (I) {
          var U = A.evaluate(I);
          U !== l1 && m.call(g, U);
        },
        void 0,
        C,
      );
    };
  }
  e.chain = V1;
  var l1 = Symbol('HaltChainable');
  var p = /*#__PURE__*/ (function () {
    function p() {
      _classCallCheck(this, p);
      this.f = [];
    }
    return _createClass(p, [
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
            this.f.push(function (b) {
              return h(b), b;
            }),
            this
          );
        },
      },
      {
        key: 'filter',
        value: function filter(h) {
          return (
            this.f.push(function (b) {
              return h(b) ? b : l1;
            }),
            this
          );
        },
      },
      {
        key: 'reduce',
        value: function reduce(h, b) {
          var m = b;
          return (
            this.f.push(function (g) {
              return (m = h(m, g)), m;
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
              : function (b, m) {
                  return b === m;
                };
          var b = !0,
            m;
          return (
            this.f.push(function (g) {
              var C = b || !h(g, m);
              return (b = !1), (m = g), C ? g : l1;
            }),
            this
          );
        },
      },
      {
        key: 'evaluate',
        value: function evaluate(h) {
          var _iterator27 = _createForOfIteratorHelper(this.f),
            _step27;
          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
              var b = _step27.value;
              if (((h = b(h)), h === l1)) break;
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
          return h;
        },
      },
    ]);
  })();
  function L(v, h) {
    var b =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (m) {
            return m;
          };
    var m = function m() {
        return A.fire(b.apply(void 0, arguments));
      },
      g = function g() {
        return v.on(h, m);
      },
      C = function C() {
        return v.removeListener(h, m);
      },
      A = new K({
        onWillAddFirstListener: g,
        onDidRemoveLastListener: C,
      });
    return A.event;
  }
  e.fromNodeEventEmitter = L;
  function $(v, h) {
    var b =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function (m) {
            return m;
          };
    var m = function m() {
        return A.fire(b.apply(void 0, arguments));
      },
      g = function g() {
        return v.addEventListener(h, m);
      },
      C = function C() {
        return v.removeEventListener(h, m);
      },
      A = new K({
        onWillAddFirstListener: g,
        onDidRemoveLastListener: C,
      });
    return A.event;
  }
  e.fromDOMEventEmitter = $;
  function D(v) {
    return new Promise(function (h) {
      return n(v)(h);
    });
  }
  e.toPromise = D;
  function a1(v) {
    var h = new K();
    return (
      v
        .then(
          function (b) {
            h.fire(b);
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
  e.fromPromise = a1;
  function N1(v, h) {
    return v(function (b) {
      return h.fire(b);
    });
  }
  e.forward = N1;
  function Nt(v, h, b) {
    return (
      h(b),
      v(function (m) {
        return h(m);
      })
    );
  }
  e.runAndSubscribe = Nt;
  var At = /*#__PURE__*/ (function () {
    function At(h, b) {
      var _this10 = this;
      _classCallCheck(this, At);
      (this._observable = h), (this.f = 0), (this.g = !1);
      var m = {
        onWillAddFirstListener: function onWillAddFirstListener() {
          h.addObserver(_this10), _this10._observable.reportChanges();
        },
        onDidRemoveLastListener: function onDidRemoveLastListener() {
          h.removeObserver(_this10);
        },
      };
      b || t(m), (this.emitter = new K(m)), b && b.add(this.emitter);
    }
    return _createClass(At, [
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
        value: function handleChange(h, b) {
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
  function Et(v, h) {
    return new At(v, h).emitter.event;
  }
  e.fromObservable = Et;
  function $t(v) {
    return function (h, b, m) {
      var g = 0,
        C = !1;
      var A = {
        beginUpdate: function beginUpdate() {
          g++;
        },
        endUpdate: function endUpdate() {
          g--, g === 0 && (v.reportChanges(), C && ((C = !1), h.call(b)));
        },
        handlePossibleChange: function handlePossibleChange() {},
        handleChange: function handleChange() {
          C = !0;
        },
      };
      v.addObserver(A), v.reportChanges();
      var I = {
        dispose: function dispose() {
          v.removeObserver(A);
        },
      };
      return m instanceof ee ? m.add(I) : Array.isArray(m) && m.push(I), I;
    };
  }
  e.fromObservableLight = $t;
})(O1 || (O1 = {}));
var hr =
    ((_fe = /*#__PURE__*/ (function () {
      function fe(t) {
        _classCallCheck(this, fe);
        (this.listenerCount = 0),
          (this.invocationCount = 0),
          (this.elapsedOverall = 0),
          (this.durations = []),
          (this.name = ''.concat(t, '_').concat(fe.f++)),
          fe.all.add(this);
      }
      return _createClass(fe, [
        {
          key: 'start',
          value: function start(t) {
            (this.g = new ke()), (this.listenerCount = t);
          },
        },
        {
          key: 'stop',
          value: function stop() {
            if (this.g) {
              var _t10 = this.g.elapsed();
              this.durations.push(_t10),
                (this.elapsedOverall += _t10),
                (this.invocationCount += 1),
                (this.g = void 0);
            }
          },
        },
      ]);
    })()),
    (_fe.all = new Set()),
    (_fe.f = 0),
    _fe),
  Te = -1,
  dr =
    ((_yt = /*#__PURE__*/ (function () {
      function yt(t, r) {
        var n =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : (yt.f++).toString(16).padStart(3, '0');
        _classCallCheck(this, yt);
        (this.j = t), (this.threshold = r), (this.name = n), (this.h = 0);
      }
      return _createClass(yt, [
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
            var _this11 = this;
            var n = this.threshold;
            if (n <= 0 || r < n) return;
            this.g || (this.g = new Map());
            var i = this.g.get(t.value) || 0;
            if ((this.g.set(t.value, i + 1), (this.h -= 1), this.h <= 0)) {
              this.h = n * 0.5;
              var _this$getMostFrequent = this.getMostFrequentStack(),
                _this$getMostFrequent2 = _slicedToArray(_this$getMostFrequent, 2),
                s = _this$getMostFrequent2[0],
                o = _this$getMostFrequent2[1],
                l = '['
                  .concat(this.name, '] potential listener LEAK detected, having ')
                  .concat(r, ' listeners already. MOST frequent listener (')
                  .concat(o, '):');
              console.warn(l), console.warn(s);
              var u = new mr(l, s);
              this.j(u);
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
    (_yt.f = 1),
    _yt),
  te = /*#__PURE__*/ (function () {
    function Ct(t) {
      _classCallCheck(this, Ct);
      this.value = t;
    }
    return _createClass(
      Ct,
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
            return new Ct((_t$stack = t.stack) !== null && _t$stack !== void 0 ? _t$stack : '');
          },
        },
      ],
    );
  })(),
  mr = /*#__PURE__*/ (function (_Error3) {
    function mr(e, t) {
      var _this12;
      _classCallCheck(this, mr);
      (_this12 = _callSuper(this, mr, [e])),
        (_this12.name = 'ListenerLeakError'),
        (_this12.stack = t);
      return _this12;
    }
    _inherits(mr, _Error3);
    return _createClass(mr);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  vr = /*#__PURE__*/ (function (_Error4) {
    function vr(e, t) {
      var _this13;
      _classCallCheck(this, vr);
      (_this13 = _callSuper(this, vr, [e])),
        (_this13.name = 'ListenerRefusalError'),
        (_this13.stack = t);
      return _this13;
    }
    _inherits(vr, _Error4);
    return _createClass(vr);
  })(/*#__PURE__*/ _wrapNativeSuper(Error)),
  br = 0,
  T1 = /*#__PURE__*/ _createClass(function T1(e) {
    _classCallCheck(this, T1);
    (this.value = e), (this.id = br++);
  }),
  gr = 2,
  pr = function pr(e, t) {
    if (e instanceof T1) t(e);
    else
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n && t(n);
      }
  },
  R1;
if (cr) {
  var _e9 = [];
  setInterval(function () {
    _e9.length !== 0 &&
      (console.warn("[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:"),
      console.warn(_e9.join('\n')),
      (_e9.length = 0));
  }, 3e3),
    (R1 = new FinalizationRegistry(function (t) {
      typeof t == 'string' && _e9.push(t);
    }));
}
var K = /*#__PURE__*/ (function () {
    function K(e) {
      var _this$f, _e$onListenerError, _this$f$leakWarningTh, _this$f2, _this$f3, _this$f4;
      _classCallCheck(this, K);
      (this.z = 0),
        (this.f = e),
        (this.g =
          Te > 0 ||
          ((_this$f = this.f) !== null && _this$f !== void 0 && _this$f.leakWarningThreshold)
            ? new dr(
                (_e$onListenerError = e === null || e === void 0 ? void 0 : e.onListenerError) !==
                  null && _e$onListenerError !== void 0
                  ? _e$onListenerError
                  : $1,
                (_this$f$leakWarningTh =
                  (_this$f2 = this.f) === null || _this$f2 === void 0
                    ? void 0
                    : _this$f2.leakWarningThreshold) !== null && _this$f$leakWarningTh !== void 0
                  ? _this$f$leakWarningTh
                  : Te,
              )
            : void 0),
        (this.j =
          (_this$f3 = this.f) !== null && _this$f3 !== void 0 && _this$f3._profName
            ? new hr(this.f._profName)
            : void 0),
        (this.w =
          (_this$f4 = this.f) === null || _this$f4 === void 0 ? void 0 : _this$f4.deliveryQueue);
    }
    return _createClass(K, [
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
              if (Oe) {
                var _e0 = this.u;
                queueMicrotask(function () {
                  pr(_e0, function (t) {
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
              : (this.q = function (e, t, r) {
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
                    var u =
                        (_this14$g$getMostFreq = _this14.g.getMostFrequentStack()) !== null &&
                        _this14$g$getMostFreq !== void 0
                          ? _this14$g$getMostFreq
                          : ['UNKNOWN stack', -1],
                      a = new vr(
                        ''
                          .concat(l, '. HINT: Stack shows most frequent listener (')
                          .concat(u[1], '-times)'),
                        u[0],
                      );
                    return (
                      (
                        ((_this14$f = _this14.f) === null || _this14$f === void 0
                          ? void 0
                          : _this14$f.onListenerError) || $1
                      )(a),
                      g1.None
                    );
                  }
                  if (_this14.m) return g1.None;
                  t && (e = e.bind(t));
                  var n = new T1(e);
                  var i, s;
                  _this14.g &&
                    _this14.z >= Math.ceil(_this14.g.threshold * 0.2) &&
                    ((n.stack = te.create()), (i = _this14.g.check(n.stack, _this14.z + 1))),
                    Oe && (n.stack = s !== null && s !== void 0 ? s : te.create()),
                    _this14.u
                      ? _this14.u instanceof T1
                        ? ((_this14$w = _this14.w) !== null && _this14$w !== void 0
                            ? _this14$w
                            : (_this14.w = new wr()),
                          (_this14.u = [_this14.u, n]))
                        : _this14.u.push(n)
                      : ((_this14$f2 = _this14.f) !== null &&
                          _this14$f2 !== void 0 &&
                          (_this14$f2$onWillAddF = _this14$f2.onWillAddFirstListener) !== null &&
                          _this14$f2$onWillAddF !== void 0 &&
                          _this14$f2$onWillAddF.call(_this14$f2, _this14),
                        (_this14.u = n),
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
                  var o = Se(function () {
                    var _R, _i4;
                    (_R = R1) !== null && _R !== void 0 && _R.unregister(o),
                      (_i4 = i) !== null && _i4 !== void 0 && _i4(),
                      _this14.A(n);
                  });
                  if ((r instanceof ee ? r.add(o) : Array.isArray(r) && r.push(o), R1)) {
                    var _u3$;
                    var _l2 = new Error().stack.split('\n').slice(2, 3).join('\n').trim(),
                      _u3 = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(_l2);
                    R1.register(
                      o,
                      (_u3$ = _u3 === null || _u3 === void 0 ? void 0 : _u3[2]) !== null &&
                        _u3$ !== void 0
                        ? _u3$
                        : _l2,
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
          var n = this.w.current === this;
          if (this.z * gr <= t.length) {
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
              : _this$f8.onListenerError) || $1;
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
            if (this.u instanceof T1) this.B(this.u, e);
            else {
              var _t11 = this.w;
              _t11.enqueue(this, e, this.u.length), this.C(_t11);
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
  wr = /*#__PURE__*/ (function () {
    function wr() {
      _classCallCheck(this, wr);
      (this.i = -1), (this.end = 0);
    }
    return _createClass(wr, [
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
  Re = Object.freeze(function (e, t) {
    var r = setTimeout(e.bind(t), 0);
    return {
      dispose: function dispose() {
        clearTimeout(r);
      },
    };
  }),
  Me;
(function (e) {
  function t(r) {
    return r === e.None || r === e.Cancelled || r instanceof yr
      ? !0
      : !r || _typeof(r) != 'object'
        ? !1
        : typeof r.isCancellationRequested == 'boolean' &&
          typeof r.onCancellationRequested == 'function';
  }
  (e.isCancellationToken = t),
    (e.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: O1.None,
    })),
    (e.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: Re,
    }));
})(Me || (Me = {}));
var yr = /*#__PURE__*/ (function () {
  function yr() {
    _classCallCheck(this, yr);
    (this.a = !1), (this.b = null);
  }
  return _createClass(yr, [
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
        return this.a ? Re : (this.b || (this.b = new K()), this.b.event);
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
function Cr(e) {
  return e;
}
var Lr = /*#__PURE__*/ (function () {
    function Lr(e, t) {
      _classCallCheck(this, Lr);
      (this.a = void 0),
        (this.b = void 0),
        typeof e == 'function'
          ? ((this.c = e), (this.d = Cr))
          : ((this.c = t), (this.d = e.getCacheKey));
    }
    return _createClass(Lr, [
      {
        key: 'get',
        value: function get(e) {
          var t = this.d(e);
          return this.b !== t && ((this.b = t), (this.a = this.c(e))), this.a;
        },
      },
    ]);
  })(),
  Ie = /*#__PURE__*/ (function () {
    function Ie(e) {
      _classCallCheck(this, Ie);
      (this.d = e), (this.a = !1);
    }
    return _createClass(Ie, [
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
function Nr(e) {
  return e.split(/\r\n|\r|\n/);
}
function Ar(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Er(e, t) {
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
  var o = n - r,
    l = s - i;
  return o < l ? -1 : o > l ? 1 : 0;
}
function je(e, t) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; r < n && i < s; r++, i++) {
    var u = e.charCodeAt(r),
      a = t.charCodeAt(i);
    if (u === a) continue;
    if (u >= 128 || a >= 128) return Er(e.toLowerCase(), t.toLowerCase(), r, n, i, s);
    Ue(u) && (u -= 32), Ue(a) && (a -= 32);
    var f = u - a;
    if (f !== 0) return f;
  }
  var o = n - r,
    l = s - i;
  return o < l ? -1 : o > l ? 1 : 0;
}
function Ue(e) {
  return e >= 97 && e <= 122;
}
function De(e) {
  return e >= 65 && e <= 90;
}
function $r(e, t) {
  return e.length === t.length && je(e, t) === 0;
}
function _r(e, t) {
  var r = t.length;
  return t.length > e.length ? !1 : je(e, t, 0, r) === 0;
}
var Zn = '\uFEFF',
  qe;
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
})(qe || (qe = {}));
var Gn =
  ((_y = /*#__PURE__*/ (function () {
    function y1() {
      _classCallCheck(this, y1);
      this.d = xr();
    }
    return _createClass(
      y1,
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
            return y1.c || (y1.c = new y1()), y1.c;
          },
        },
      ],
    );
  })()),
  (_y.c = null),
  _y);
function xr() {
  return JSON.parse(
    '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
  );
}
var ze;
(function (e) {
  (e[(e.zwj = 8205)] = 'zwj'),
    (e[(e.emojiVariantSelector = 65039)] = 'emojiVariantSelector'),
    (e[(e.enclosingKeyCap = 8419)] = 'enclosingKeyCap');
})(ze || (ze = {}));
var Xn =
    ((_C = /*#__PURE__*/ (function () {
      function C1(t) {
        _classCallCheck(this, C1);
        this.f = t;
      }
      return _createClass(
        C1,
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
              return C1.d.get(Array.from(t));
            },
          },
          {
            key: 'getLocales',
            value: function getLocales() {
              return C1.e.value;
            },
          },
        ],
      );
    })()),
    (_C.c = new Ie(function () {
      return JSON.parse(
        '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
      );
    })),
    (_C.d = new Lr(
      {
        getCacheKey: JSON.stringify,
      },
      function (t) {
        function r(f) {
          var c = new Map();
          for (var d = 0; d < f.length; d += 2) c.set(f[d], f[d + 1]);
          return c;
        }
        function n(f, c) {
          var d = new Map(f);
          var _iterator29 = _createForOfIteratorHelper(c),
            _step29;
          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
              var _step29$value = _slicedToArray(_step29.value, 2),
                w = _step29$value[0],
                x = _step29$value[1];
              d.set(w, x);
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
          return d;
        }
        function i(f, c) {
          if (!f) return c;
          var d = new Map();
          var _iterator30 = _createForOfIteratorHelper(f),
            _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
              var _step30$value = _slicedToArray(_step30.value, 2),
                w = _step30$value[0],
                x = _step30$value[1];
              c.has(w) && d.set(w, x);
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
          return d;
        }
        var s = _C.c.value;
        var o = t.filter(function (f) {
          return !f.startsWith('_') && f in s;
        });
        o.length === 0 && (o = ['_default']);
        var l;
        var _iterator31 = _createForOfIteratorHelper(o),
          _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
            var f = _step31.value;
            var c = r(s[f]);
            l = i(l, c);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
        var u = r(s._common),
          a = n(u, l);
        return new _C(a);
      },
    )),
    (_C.e = new Ie(function () {
      return Object.keys(_C.c.value).filter(function (t) {
        return !t.startsWith('_');
      });
    })),
    _C),
  Yn =
    ((_L = /*#__PURE__*/ (function () {
      function L1() {
        _classCallCheck(this, L1);
      }
      return _createClass(L1, null, [
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
            return this.d || (this.d = new Set(L1.c())), this.d;
          },
        },
        {
          key: 'isInvisibleCharacter',
          value: function isInvisibleCharacter(t) {
            return L1.e().has(t);
          },
        },
        {
          key: 'containsInvisibleCharacter',
          value: function containsInvisibleCharacter(t) {
            for (var r = 0; r < t.length; r++) {
              var n = t.codePointAt(r);
              if (typeof n == 'number' && L1.isInvisibleCharacter(n)) return !0;
            }
            return !1;
          },
        },
        {
          key: 'codePoints',
          get: function get() {
            return L1.e();
          },
        },
      ]);
    })()),
    (_L.d = void 0),
    _L),
  i1,
  re = globalThis.vscode;
if (_typeof(re) < 'u' && _typeof(re.process) < 'u') {
  var _e1 = re.process;
  i1 = {
    get platform() {
      return _e1.platform;
    },
    get arch() {
      return _e1.arch;
    },
    get env() {
      return _e1.env;
    },
    cwd: function cwd() {
      return _e1.cwd();
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
    ? (i1 = {
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
    : (i1 = {
        get platform() {
          return f1 ? 'win32' : Wt ? 'darwin' : 'linux';
        },
        get arch() {},
        get env() {
          return {};
        },
        cwd: function cwd() {
          return '/';
        },
      });
var M1 = i1.cwd,
  Pr = i1.env,
  Sr = i1.platform,
  Qn = i1.arch,
  kr = 65,
  Or = 97,
  Tr = 90,
  Rr = 122,
  e1 = 46,
  j = 47,
  q = 92,
  t1 = 58,
  Mr = 63,
  We = /*#__PURE__*/ (function (_Error5) {
    function We(e, t, r) {
      var _this15;
      _classCallCheck(this, We);
      var n;
      typeof t == 'string' && t.indexOf('not ') === 0
        ? ((n = 'must not be'), (t = t.replace(/^not /, '')))
        : (n = 'must be');
      var i = e.indexOf('.') !== -1 ? 'property' : 'argument';
      var s = 'The "'.concat(e, '" ').concat(i, ' ').concat(n, ' of type ').concat(t);
      (s += '. Received type '.concat(_typeof(r))),
        (_this15 = _callSuper(this, We, [s])),
        (_this15.code = 'ERR_INVALID_ARG_TYPE');
      return _this15;
    }
    _inherits(We, _Error5);
    return _createClass(We);
  })(/*#__PURE__*/ _wrapNativeSuper(Error));
function Ir(e, t) {
  if (e === null || _typeof(e) != 'object') throw new We(t, 'Object', e);
}
function k(e, t) {
  if (typeof e != 'string') throw new We(t, 'string', e);
}
var z = Sr === 'win32';
function y(e) {
  return e === j || e === q;
}
function ne(e) {
  return e === j;
}
function r1(e) {
  return (e >= kr && e <= Tr) || (e >= Or && e <= Rr);
}
function I1(e, t, r, n) {
  var i = '',
    s = 0,
    o = -1,
    l = 0,
    u = 0;
  for (var a = 0; a <= e.length; ++a) {
    if (a < e.length) u = e.charCodeAt(a);
    else {
      if (n(u)) break;
      u = j;
    }
    if (n(u)) {
      if (!(o === a - 1 || l === 1))
        if (l === 2) {
          if (
            i.length < 2 ||
            s !== 2 ||
            i.charCodeAt(i.length - 1) !== e1 ||
            i.charCodeAt(i.length - 2) !== e1
          ) {
            if (i.length > 2) {
              var f = i.lastIndexOf(r);
              f === -1
                ? ((i = ''), (s = 0))
                : ((i = i.slice(0, f)), (s = i.length - 1 - i.lastIndexOf(r))),
                (o = a),
                (l = 0);
              continue;
            } else if (i.length !== 0) {
              (i = ''), (s = 0), (o = a), (l = 0);
              continue;
            }
          }
          t && ((i += i.length > 0 ? ''.concat(r, '..') : '..'), (s = 2));
        } else
          i.length > 0 ? (i += ''.concat(r).concat(e.slice(o + 1, a))) : (i = e.slice(o + 1, a)),
            (s = a - o - 1);
      (o = a), (l = 0);
    } else u === e1 && l !== -1 ? ++l : (l = -1);
  }
  return i;
}
function jr(e) {
  return e ? ''.concat(e[0] === '.' ? '' : '.').concat(e) : '';
}
function Fe(e, t) {
  Ir(t, 'pathObject');
  var r = t.dir || t.root,
    n = t.base || ''.concat(t.name || '').concat(jr(t.ext));
  return r ? (r === t.root ? ''.concat(r).concat(n) : ''.concat(r).concat(e).concat(n)) : n;
}
var O = {
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
          if (((s = e[i]), k(s, 'paths['.concat(i, ']')), s.length === 0)) continue;
        } else
          t.length === 0
            ? (s = M1())
            : ((s = Pr['='.concat(t)] || M1()),
              (s === void 0 ||
                (s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === q)) &&
                (s = ''.concat(t, '\\')));
        var o = s.length;
        var l = 0,
          u = '',
          a = !1;
        var f = s.charCodeAt(0);
        if (o === 1) y(f) && ((l = 1), (a = !0));
        else if (y(f)) {
          if (((a = !0), y(s.charCodeAt(1)))) {
            var c = 2,
              d = c;
            for (; c < o && !y(s.charCodeAt(c)); ) c++;
            if (c < o && c !== d) {
              var w = s.slice(d, c);
              for (d = c; c < o && y(s.charCodeAt(c)); ) c++;
              if (c < o && c !== d) {
                for (d = c; c < o && !y(s.charCodeAt(c)); ) c++;
                (c === o || c !== d) &&
                  ((u = '\\\\'.concat(w, '\\').concat(s.slice(d, c))), (l = c));
              }
            }
          } else l = 1;
        } else
          r1(f) &&
            s.charCodeAt(1) === t1 &&
            ((u = s.slice(0, 2)), (l = 2), o > 2 && y(s.charCodeAt(2)) && ((a = !0), (l = 3)));
        if (u.length > 0)
          if (t.length > 0) {
            if (u.toLowerCase() !== t.toLowerCase()) continue;
          } else t = u;
        if (n) {
          if (t.length > 0) break;
        } else if (((r = ''.concat(s.slice(l), '\\').concat(r)), (n = a), a && t.length > 0)) break;
      }
      return (
        (r = I1(r, !n, '\\', y)), n ? ''.concat(t, '\\').concat(r) : ''.concat(t).concat(r) || '.'
      );
    },
    normalize: function normalize(e) {
      k(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var r = 0,
        n,
        i = !1;
      var s = e.charCodeAt(0);
      if (t === 1) return ne(s) ? '\\' : e;
      if (y(s)) {
        if (((i = !0), y(e.charCodeAt(1)))) {
          var l = 2,
            u = l;
          for (; l < t && !y(e.charCodeAt(l)); ) l++;
          if (l < t && l !== u) {
            var a = e.slice(u, l);
            for (u = l; l < t && y(e.charCodeAt(l)); ) l++;
            if (l < t && l !== u) {
              for (u = l; l < t && !y(e.charCodeAt(l)); ) l++;
              if (l === t) return '\\\\'.concat(a, '\\').concat(e.slice(u), '\\');
              l !== u && ((n = '\\\\'.concat(a, '\\').concat(e.slice(u, l))), (r = l));
            }
          }
        } else r = 1;
      } else
        r1(s) &&
          e.charCodeAt(1) === t1 &&
          ((n = e.slice(0, 2)), (r = 2), t > 2 && y(e.charCodeAt(2)) && ((i = !0), (r = 3)));
      var o = r < t ? I1(e.slice(r), !i, '\\', y) : '';
      return (
        o.length === 0 && !i && (o = '.'),
        o.length > 0 && y(e.charCodeAt(t - 1)) && (o += '\\'),
        n === void 0
          ? i
            ? '\\'.concat(o)
            : o
          : i
            ? ''.concat(n, '\\').concat(o)
            : ''.concat(n).concat(o)
      );
    },
    isAbsolute: function isAbsolute(e) {
      k(e, 'path');
      var t = e.length;
      if (t === 0) return !1;
      var r = e.charCodeAt(0);
      return y(r) || (t > 2 && r1(r) && e.charCodeAt(1) === t1 && y(e.charCodeAt(2)));
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t, r;
      for (var s = 0; s < arguments.length; ++s) {
        var o = s < 0 || arguments.length <= s ? undefined : arguments[s];
        k(o, 'path'), o.length > 0 && (t === void 0 ? (t = r = o) : (t += '\\'.concat(o)));
      }
      if (t === void 0) return '.';
      var n = !0,
        i = 0;
      if (typeof r == 'string' && y(r.charCodeAt(0))) {
        ++i;
        var _s = r.length;
        _s > 1 && y(r.charCodeAt(1)) && (++i, _s > 2 && (y(r.charCodeAt(2)) ? ++i : (n = !1)));
      }
      if (n) {
        for (; i < t.length && y(t.charCodeAt(i)); ) i++;
        i >= 2 && (t = '\\'.concat(t.slice(i)));
      }
      return O.normalize(t);
    },
    relative: function relative(e, t) {
      if ((k(e, 'from'), k(t, 'to'), e === t)) return '';
      var r = O.resolve(e),
        n = O.resolve(t);
      if (r === n || ((e = r.toLowerCase()), (t = n.toLowerCase()), e === t)) return '';
      var i = 0;
      for (; i < e.length && e.charCodeAt(i) === q; ) i++;
      var s = e.length;
      for (; s - 1 > i && e.charCodeAt(s - 1) === q; ) s--;
      var o = s - i;
      var l = 0;
      for (; l < t.length && t.charCodeAt(l) === q; ) l++;
      var u = t.length;
      for (; u - 1 > l && t.charCodeAt(u - 1) === q; ) u--;
      var a = u - l,
        f = o < a ? o : a;
      var c = -1,
        d = 0;
      for (; d < f; d++) {
        var x = e.charCodeAt(i + d);
        if (x !== t.charCodeAt(l + d)) break;
        x === q && (c = d);
      }
      if (d !== f) {
        if (c === -1) return n;
      } else {
        if (a > f) {
          if (t.charCodeAt(l + d) === q) return n.slice(l + d + 1);
          if (d === 2) return n.slice(l + d);
        }
        o > f && (e.charCodeAt(i + d) === q ? (c = d) : d === 2 && (c = 3)), c === -1 && (c = 0);
      }
      var w = '';
      for (d = i + c + 1; d <= s; ++d)
        (d === s || e.charCodeAt(d) === q) && (w += w.length === 0 ? '..' : '\\..');
      return (
        (l += c),
        w.length > 0
          ? ''.concat(w).concat(n.slice(l, u))
          : (n.charCodeAt(l) === q && ++l, n.slice(l, u))
      );
    },
    toNamespacedPath: function toNamespacedPath(e) {
      if (typeof e != 'string' || e.length === 0) return e;
      var t = O.resolve(e);
      if (t.length <= 2) return e;
      if (t.charCodeAt(0) === q) {
        if (t.charCodeAt(1) === q) {
          var r = t.charCodeAt(2);
          if (r !== Mr && r !== e1) return '\\\\?\\UNC\\'.concat(t.slice(2));
        }
      } else if (r1(t.charCodeAt(0)) && t.charCodeAt(1) === t1 && t.charCodeAt(2) === q)
        return '\\\\?\\'.concat(t);
      return e;
    },
    dirname: function dirname(e) {
      k(e, 'path');
      var t = e.length;
      if (t === 0) return '.';
      var r = -1,
        n = 0;
      var i = e.charCodeAt(0);
      if (t === 1) return y(i) ? e : '.';
      if (y(i)) {
        if (((r = n = 1), y(e.charCodeAt(1)))) {
          var l = 2,
            u = l;
          for (; l < t && !y(e.charCodeAt(l)); ) l++;
          if (l < t && l !== u) {
            for (u = l; l < t && y(e.charCodeAt(l)); ) l++;
            if (l < t && l !== u) {
              for (u = l; l < t && !y(e.charCodeAt(l)); ) l++;
              if (l === t) return e;
              l !== u && (r = n = l + 1);
            }
          }
        }
      } else
        r1(i) && e.charCodeAt(1) === t1 && ((r = t > 2 && y(e.charCodeAt(2)) ? 3 : 2), (n = r));
      var s = -1,
        o = !0;
      for (var _l3 = t - 1; _l3 >= n; --_l3)
        if (y(e.charCodeAt(_l3))) {
          if (!o) {
            s = _l3;
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
      t !== void 0 && k(t, 'suffix'), k(e, 'path');
      var r = 0,
        n = -1,
        i = !0,
        s;
      if (
        (e.length >= 2 && r1(e.charCodeAt(0)) && e.charCodeAt(1) === t1 && (r = 2),
        t !== void 0 && t.length > 0 && t.length <= e.length)
      ) {
        if (t === e) return '';
        var o = t.length - 1,
          l = -1;
        for (s = e.length - 1; s >= r; --s) {
          var u = e.charCodeAt(s);
          if (y(u)) {
            if (!i) {
              r = s + 1;
              break;
            }
          } else
            l === -1 && ((i = !1), (l = s + 1)),
              o >= 0 && (u === t.charCodeAt(o) ? --o === -1 && (n = s) : ((o = -1), (n = l)));
        }
        return r === n ? (n = l) : n === -1 && (n = e.length), e.slice(r, n);
      }
      for (s = e.length - 1; s >= r; --s)
        if (y(e.charCodeAt(s))) {
          if (!i) {
            r = s + 1;
            break;
          }
        } else n === -1 && ((i = !1), (n = s + 1));
      return n === -1 ? '' : e.slice(r, n);
    },
    extname: function extname(e) {
      k(e, 'path');
      var t = 0,
        r = -1,
        n = 0,
        i = -1,
        s = !0,
        o = 0;
      e.length >= 2 && e.charCodeAt(1) === t1 && r1(e.charCodeAt(0)) && (t = n = 2);
      for (var l = e.length - 1; l >= t; --l) {
        var u = e.charCodeAt(l);
        if (y(u)) {
          if (!s) {
            n = l + 1;
            break;
          }
          continue;
        }
        i === -1 && ((s = !1), (i = l + 1)),
          u === e1 ? (r === -1 ? (r = l) : o !== 1 && (o = 1)) : r !== -1 && (o = -1);
      }
      return r === -1 || i === -1 || o === 0 || (o === 1 && r === i - 1 && r === n + 1)
        ? ''
        : e.slice(r, i);
    },
    format: Fe.bind(null, '\\'),
    parse: function parse(e) {
      k(e, 'path');
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
      if (r === 1) return y(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
      if (y(i)) {
        if (((n = 1), y(e.charCodeAt(1)))) {
          var c = 2,
            d = c;
          for (; c < r && !y(e.charCodeAt(c)); ) c++;
          if (c < r && c !== d) {
            for (d = c; c < r && y(e.charCodeAt(c)); ) c++;
            if (c < r && c !== d) {
              for (d = c; c < r && !y(e.charCodeAt(c)); ) c++;
              c === r ? (n = c) : c !== d && (n = c + 1);
            }
          }
        }
      } else if (r1(i) && e.charCodeAt(1) === t1) {
        if (r <= 2) return (t.root = t.dir = e), t;
        if (((n = 2), y(e.charCodeAt(2)))) {
          if (r === 3) return (t.root = t.dir = e), t;
          n = 3;
        }
      }
      n > 0 && (t.root = e.slice(0, n));
      var s = -1,
        o = n,
        l = -1,
        u = !0,
        a = e.length - 1,
        f = 0;
      for (; a >= n; --a) {
        if (((i = e.charCodeAt(a)), y(i))) {
          if (!u) {
            o = a + 1;
            break;
          }
          continue;
        }
        l === -1 && ((u = !1), (l = a + 1)),
          i === e1 ? (s === -1 ? (s = a) : f !== 1 && (f = 1)) : s !== -1 && (f = -1);
      }
      return (
        l !== -1 &&
          (s === -1 || f === 0 || (f === 1 && s === l - 1 && s === o + 1)
            ? (t.base = t.name = e.slice(o, l))
            : ((t.name = e.slice(o, s)), (t.base = e.slice(o, l)), (t.ext = e.slice(s, l)))),
        o > 0 && o !== n ? (t.dir = e.slice(0, o - 1)) : (t.dir = t.root),
        t
      );
    },
    sep: '\\',
    delimiter: ';',
    win32: null,
    posix: null,
  },
  Ur = (function () {
    if (z) {
      var _e10 = /\\/g;
      return function () {
        var t = M1().replace(_e10, '/');
        return t.slice(t.indexOf('/'));
      };
    }
    return function () {
      return M1();
    };
  })(),
  E = {
    resolve: function resolve() {
      var t = '',
        r = !1;
      for (var n = arguments.length - 1; n >= -1 && !r; n--) {
        var i = n >= 0 ? (n < 0 || arguments.length <= n ? undefined : arguments[n]) : Ur();
        k(i, 'paths['.concat(n, ']')),
          i.length !== 0 && ((t = ''.concat(i, '/').concat(t)), (r = i.charCodeAt(0) === j));
      }
      return (t = I1(t, !r, '/', ne)), r ? '/'.concat(t) : t.length > 0 ? t : '.';
    },
    normalize: function normalize(e) {
      if ((k(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === j,
        r = e.charCodeAt(e.length - 1) === j;
      return (
        (e = I1(e, !t, '/', ne)),
        e.length === 0 ? (t ? '/' : r ? './' : '.') : (r && (e += '/'), t ? '/'.concat(e) : e)
      );
    },
    isAbsolute: function isAbsolute(e) {
      return k(e, 'path'), e.length > 0 && e.charCodeAt(0) === j;
    },
    join: function join() {
      if (arguments.length === 0) return '.';
      var t;
      for (var r = 0; r < arguments.length; ++r) {
        var n = r < 0 || arguments.length <= r ? undefined : arguments[r];
        k(n, 'path'), n.length > 0 && (t === void 0 ? (t = n) : (t += '/'.concat(n)));
      }
      return t === void 0 ? '.' : E.normalize(t);
    },
    relative: function relative(e, t) {
      if ((k(e, 'from'), k(t, 'to'), e === t || ((e = E.resolve(e)), (t = E.resolve(t)), e === t)))
        return '';
      var r = 1,
        n = e.length,
        i = n - r,
        s = 1,
        o = t.length - s,
        l = i < o ? i : o;
      var u = -1,
        a = 0;
      for (; a < l; a++) {
        var c = e.charCodeAt(r + a);
        if (c !== t.charCodeAt(s + a)) break;
        c === j && (u = a);
      }
      if (a === l)
        if (o > l) {
          if (t.charCodeAt(s + a) === j) return t.slice(s + a + 1);
          if (a === 0) return t.slice(s + a);
        } else i > l && (e.charCodeAt(r + a) === j ? (u = a) : a === 0 && (u = 0));
      var f = '';
      for (a = r + u + 1; a <= n; ++a)
        (a === n || e.charCodeAt(a) === j) && (f += f.length === 0 ? '..' : '/..');
      return ''.concat(f).concat(t.slice(s + u));
    },
    toNamespacedPath: function toNamespacedPath(e) {
      return e;
    },
    dirname: function dirname(e) {
      if ((k(e, 'path'), e.length === 0)) return '.';
      var t = e.charCodeAt(0) === j;
      var r = -1,
        n = !0;
      for (var i = e.length - 1; i >= 1; --i)
        if (e.charCodeAt(i) === j) {
          if (!n) {
            r = i;
            break;
          }
        } else n = !1;
      return r === -1 ? (t ? '/' : '.') : t && r === 1 ? '//' : e.slice(0, r);
    },
    basename: function basename(e, t) {
      t !== void 0 && k(t, 'ext'), k(e, 'path');
      var r = 0,
        n = -1,
        i = !0,
        s;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t === e) return '';
        var o = t.length - 1,
          l = -1;
        for (s = e.length - 1; s >= 0; --s) {
          var u = e.charCodeAt(s);
          if (u === j) {
            if (!i) {
              r = s + 1;
              break;
            }
          } else
            l === -1 && ((i = !1), (l = s + 1)),
              o >= 0 && (u === t.charCodeAt(o) ? --o === -1 && (n = s) : ((o = -1), (n = l)));
        }
        return r === n ? (n = l) : n === -1 && (n = e.length), e.slice(r, n);
      }
      for (s = e.length - 1; s >= 0; --s)
        if (e.charCodeAt(s) === j) {
          if (!i) {
            r = s + 1;
            break;
          }
        } else n === -1 && ((i = !1), (n = s + 1));
      return n === -1 ? '' : e.slice(r, n);
    },
    extname: function extname(e) {
      k(e, 'path');
      var t = -1,
        r = 0,
        n = -1,
        i = !0,
        s = 0;
      for (var o = e.length - 1; o >= 0; --o) {
        var l = e.charCodeAt(o);
        if (l === j) {
          if (!i) {
            r = o + 1;
            break;
          }
          continue;
        }
        n === -1 && ((i = !1), (n = o + 1)),
          l === e1 ? (t === -1 ? (t = o) : s !== 1 && (s = 1)) : t !== -1 && (s = -1);
      }
      return t === -1 || n === -1 || s === 0 || (s === 1 && t === n - 1 && t === r + 1)
        ? ''
        : e.slice(t, n);
    },
    format: Fe.bind(null, '/'),
    parse: function parse(e) {
      k(e, 'path');
      var t = {
        root: '',
        dir: '',
        base: '',
        ext: '',
        name: '',
      };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0) === j;
      var n;
      r ? ((t.root = '/'), (n = 1)) : (n = 0);
      var i = -1,
        s = 0,
        o = -1,
        l = !0,
        u = e.length - 1,
        a = 0;
      for (; u >= n; --u) {
        var f = e.charCodeAt(u);
        if (f === j) {
          if (!l) {
            s = u + 1;
            break;
          }
          continue;
        }
        o === -1 && ((l = !1), (o = u + 1)),
          f === e1 ? (i === -1 ? (i = u) : a !== 1 && (a = 1)) : i !== -1 && (a = -1);
      }
      if (o !== -1) {
        var _f3 = s === 0 && r ? 1 : s;
        i === -1 || a === 0 || (a === 1 && i === o - 1 && i === s + 1)
          ? (t.base = t.name = e.slice(_f3, o))
          : ((t.name = e.slice(_f3, i)), (t.base = e.slice(_f3, o)), (t.ext = e.slice(i, o)));
      }
      return s > 0 ? (t.dir = e.slice(0, s - 1)) : r && (t.dir = '/'), t;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null,
  };
(E.win32 = O.win32 = O), (E.posix = O.posix = E);
var Dr = z ? O.normalize : E.normalize,
  e2 = z ? O.isAbsolute : E.isAbsolute,
  qr = z ? O.join : E.join,
  zr = z ? O.resolve : E.resolve,
  Wr = z ? O.relative : E.relative,
  Fr = z ? O.dirname : E.dirname,
  t2 = z ? O.basename : E.basename,
  r2 = z ? O.extname : E.extname,
  n2 = z ? O.format : E.format,
  i2 = z ? O.parse : E.parse,
  s2 = z ? O.toNamespacedPath : E.toNamespacedPath,
  j1 = z ? O.sep : E.sep,
  o2 = z ? O.delimiter : E.delimiter,
  Vr = /^\w[\w\d+.-]*$/,
  Hr = /^\//,
  Br = /^\/\//;
function Jr(e, t) {
  if (!e.scheme && t)
    throw new Error(
      '[UriError]: Scheme is missing: {scheme: "", authority: "'
        .concat(e.authority, '", path: "')
        .concat(e.path, '", query: "')
        .concat(e.query, '", fragment: "')
        .concat(e.fragment, '"}'),
    );
  if (e.scheme && !Vr.test(e.scheme))
    throw new Error('[UriError]: Scheme contains illegal characters.');
  if (e.path) {
    if (e.authority) {
      if (!Hr.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
        );
    } else if (Br.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
      );
  }
}
function Kr(e, t) {
  return !e && !t ? 'file' : e;
}
function Zr(e, t) {
  switch (e) {
    case 'https':
    case 'http':
    case 'file':
      t ? t[0] !== B && (t = B + t) : (t = B);
      break;
  }
  return t;
}
var _ = '',
  B = '/',
  Gr = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
  W = /*#__PURE__*/ (function () {
    function W1(t, r, n, i, s) {
      var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      _classCallCheck(this, W1);
      _typeof(t) == 'object'
        ? ((this.scheme = t.scheme || _),
          (this.authority = t.authority || _),
          (this.path = t.path || _),
          (this.query = t.query || _),
          (this.fragment = t.fragment || _))
        : ((this.scheme = Kr(t, o)),
          (this.authority = r || _),
          (this.path = Zr(this.scheme, n || _)),
          (this.query = i || _),
          (this.fragment = s || _),
          Jr(this, o));
    }
    return _createClass(
      W1,
      [
        {
          key: 'fsPath',
          get: function get() {
            return U1(this, !1);
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
              o = t.fragment;
            return (
              r === void 0 ? (r = this.scheme) : r === null && (r = _),
              n === void 0 ? (n = this.authority) : n === null && (n = _),
              i === void 0 ? (i = this.path) : i === null && (i = _),
              s === void 0 ? (s = this.query) : s === null && (s = _),
              o === void 0 ? (o = this.fragment) : o === null && (o = _),
              r === this.scheme &&
              n === this.authority &&
              i === this.path &&
              s === this.query &&
              o === this.fragment
                ? this
                : new d1(r, n, i, s, o)
            );
          },
        },
        {
          key: 'toString',
          value: function toString() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            return ie(this, t);
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
            return t instanceof W1
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
            var n = Gr.exec(t);
            return n
              ? new d1(n[2] || _, D1(n[4] || _), D1(n[5] || _), D1(n[7] || _), D1(n[9] || _), r)
              : new d1(_, _, _, _, _);
          },
        },
        {
          key: 'file',
          value: function file(t) {
            var r = _;
            if ((f1 && (t = t.replace(/\\/g, B)), t[0] === B && t[1] === B)) {
              var n = t.indexOf(B, 2);
              n === -1
                ? ((r = t.substring(2)), (t = B))
                : ((r = t.substring(2, n)), (t = t.substring(n) || B));
            }
            return new d1('file', r, t, _, _);
          },
        },
        {
          key: 'from',
          value: function from(t, r) {
            return new d1(t.scheme, t.authority, t.path, t.query, t.fragment, r);
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
              f1 && t.scheme === 'file'
                ? (n = W1.file(O.join.apply(O, [U1(t, !0)].concat(r))).path)
                : (n = E.join.apply(E, [t.path].concat(r))),
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
              if (t instanceof W1) return t;
              {
                var _t$external, _t$fsPath;
                var r = new d1(t);
                return (
                  (r._formatted =
                    (_t$external = t.external) !== null && _t$external !== void 0
                      ? _t$external
                      : null),
                  (r._fsPath =
                    t._sep === Ve
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
  Ve = f1 ? 1 : void 0,
  d1 = /*#__PURE__*/ (function (_W) {
    function d1() {
      var _this16;
      _classCallCheck(this, d1);
      (_this16 = _callSuper(this, d1, arguments)),
        (_this16._formatted = null),
        (_this16._fsPath = null);
      return _this16;
    }
    _inherits(d1, _W);
    return _createClass(d1, [
      {
        key: 'fsPath',
        get: function get() {
          return this._fsPath || (this._fsPath = U1(this, !1)), this._fsPath;
        },
      },
      {
        key: 'toString',
        value: function toString() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          return e
            ? ie(this, !0)
            : (this._formatted || (this._formatted = ie(this, !1)), this._formatted);
        },
      },
      {
        key: 'toJSON',
        value: function toJSON() {
          var e = {
            $mid: 1,
          };
          return (
            this._fsPath && ((e.fsPath = this._fsPath), (e._sep = Ve)),
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
  He = {
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
function Be(e, t, r) {
  var n,
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
      (r && o === 91) ||
      (r && o === 93) ||
      (r && o === 58)
    )
      i !== -1 && ((n += encodeURIComponent(e.substring(i, s))), (i = -1)),
        n !== void 0 && (n += e.charAt(s));
    else {
      n === void 0 && (n = e.substr(0, s));
      var l = He[o];
      l !== void 0
        ? (i !== -1 && ((n += encodeURIComponent(e.substring(i, s))), (i = -1)), (n += l))
        : i === -1 && (i = s);
    }
  }
  return i !== -1 && (n += encodeURIComponent(e.substring(i))), n !== void 0 ? n : e;
}
function Xr(e) {
  var t;
  for (var r = 0; r < e.length; r++) {
    var n = e.charCodeAt(r);
    n === 35 || n === 63
      ? (t === void 0 && (t = e.substr(0, r)), (t += He[n]))
      : t !== void 0 && (t += e[r]);
  }
  return t !== void 0 ? t : e;
}
function U1(e, t) {
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
    f1 && (r = r.replace(/\//g, '\\')),
    r
  );
}
function ie(e, t) {
  var r = t ? Xr : Be;
  var n = '',
    i = e.scheme,
    s = e.authority,
    o = e.path,
    l = e.query,
    u = e.fragment;
  if ((i && ((n += i), (n += ':')), (s || i === 'file') && ((n += B), (n += B)), s)) {
    var a = s.indexOf('@');
    if (a !== -1) {
      var f = s.substr(0, a);
      (s = s.substr(a + 1)),
        (a = f.lastIndexOf(':')),
        a === -1
          ? (n += r(f, !1, !1))
          : ((n += r(f.substr(0, a), !1, !1)), (n += ':'), (n += r(f.substr(a + 1), !1, !0))),
        (n += '@');
    }
    (s = s.toLowerCase()),
      (a = s.lastIndexOf(':')),
      a === -1 ? (n += r(s, !1, !0)) : ((n += r(s.substr(0, a), !1, !0)), (n += s.substr(a)));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      var _a3 = o.charCodeAt(1);
      _a3 >= 65 &&
        _a3 <= 90 &&
        (o = '/'.concat(String.fromCharCode(_a3 + 32), ':').concat(o.substr(3)));
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      var _a4 = o.charCodeAt(0);
      _a4 >= 65 &&
        _a4 <= 90 &&
        (o = ''.concat(String.fromCharCode(_a4 + 32), ':').concat(o.substr(2)));
    }
    n += r(o, !0, !1);
  }
  return l && ((n += '?'), (n += r(l, !1, !1))), u && ((n += '#'), (n += t ? u : Be(u, !1, !1))), n;
}
function Je(e) {
  try {
    return decodeURIComponent(e);
  } catch (_unused4) {
    return e.length > 3 ? e.substr(0, 3) + Je(e.substr(3)) : e;
  }
}
var Ke = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function D1(e) {
  return e.match(Ke)
    ? e.replace(Ke, function (t) {
        return Je(t);
      })
    : e;
}
var R;
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
})(R || (R = {}));
var Yr = 'tkn',
  Qr = /*#__PURE__*/ (function () {
    function Qr() {
      _classCallCheck(this, Qr);
      (this.a = Object.create(null)),
        (this.b = Object.create(null)),
        (this.c = Object.create(null)),
        (this.d = 'http'),
        (this.e = null),
        (this.f = '/');
    }
    return _createClass(Qr, [
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
          this.f = tn(e, t);
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
          return E.join(this.f, R.vscodeRemoteResource);
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
              return $1(o), e;
            }
          var t = e.authority;
          var r = this.a[t];
          r && r.indexOf(':') !== -1 && r.indexOf('[') === -1 && (r = '['.concat(r, ']'));
          var n = this.b[t],
            i = this.c[t];
          var s = 'path='.concat(encodeURIComponent(e.path));
          return (
            typeof i == 'string' && (s += '&'.concat(Yr, '=').concat(encodeURIComponent(i))),
            W.from({
              scheme: ye ? this.d : R.vscodeRemoteResource,
              authority: ''.concat(r, ':').concat(n),
              path: this.g,
              query: s,
            })
          );
        },
      },
    ]);
  })(),
  en = new Qr();
function tn(e, t) {
  var _e$quality, _e$commit;
  return E.join(
    t !== null && t !== void 0 ? t : '/',
    ''
      .concat((_e$quality = e.quality) !== null && _e$quality !== void 0 ? _e$quality : 'oss', '-')
      .concat((_e$commit = e.commit) !== null && _e$commit !== void 0 ? _e$commit : 'dev'),
  );
}
var rn = 'vs/../../node_modules',
  nn = 'vs/../../node_modules.asar',
  Ze = 'vscode-app',
  sn =
    ((_F = /*#__PURE__*/ (function () {
      function F1() {
        _classCallCheck(this, F1);
      }
      return _createClass(F1, [
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
            return t.scheme === R.vscodeRemote
              ? en.rewrite(t)
              : t.scheme === R.file &&
                  (Vt || Bt === ''.concat(R.vscodeFileResource, '://').concat(F1.a))
                ? t['with']({
                    scheme: R.vscodeFileResource,
                    authority: t.authority || F1.a,
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
            return t.scheme === R.vscodeFileResource
              ? t['with']({
                  scheme: R.file,
                  authority: t.authority !== F1.a ? t.authority : null,
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
              var n = globalThis._VSCODE_FILE_ROOT;
              if (/^\w[\w\d+.-]*:\/\//.test(n)) return W.joinPath(W.parse(n, !0), t);
              var i = qr(n, t);
              return W.file(i);
            }
            return W.parse(r.toUrl(t));
          },
        },
      ]);
    })()),
    (_F.a = Ze),
    _F),
  Ge = new sn(),
  Xe;
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
    var _o;
    var o;
    typeof s == 'string'
      ? (o = new URL(s).searchParams)
      : s instanceof URL
        ? (o = s.searchParams)
        : W.isUri(s) && (o = new URL(s.toString(!0)).searchParams);
    var l = (_o = o) === null || _o === void 0 ? void 0 : _o.get(r);
    if (l) return t.get(l);
  }
  e.getHeadersFromQuery = n;
  function i(s, o, l) {
    if (!globalThis.crossOriginIsolated) return;
    var u = o && l ? '3' : l ? '2' : '1';
    s instanceof URLSearchParams ? s.set(r, u) : (s[r] = u);
  }
  e.addSearchParam = i;
})(Xe || (Xe = {}));
var on = (function () {
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
        s = '';
      return (
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += '-'),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += '-'),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += '-'),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += '-'),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        (s += r[t[i++]]),
        s
      );
    };
  })(),
  ln = !1,
  an = /*#__PURE__*/ _createClass(function an(e, t, r) {
    _classCallCheck(this, an);
    (this.id = e), (this.dependencies = t), (this.callback = r);
  }),
  s1;
(function (e) {
  (e[(e.Uninitialized = 1)] = 'Uninitialized'),
    (e[(e.InitializedInternal = 2)] = 'InitializedInternal'),
    (e[(e.InitializedExternal = 3)] = 'InitializedExternal');
})(s1 || (s1 = {}));
var un =
    ((_Lt = /*#__PURE__*/ (function () {
      function Lt() {
        _classCallCheck(this, Lt);
        (this.a =
          (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' &&
          self.constructor &&
          self.constructor.name === 'DedicatedWorkerGlobalScope'),
          (this.b =
            (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == 'object'),
          (this.c = []),
          (this.d = s1.Uninitialized);
      }
      return _createClass(Lt, [
        {
          key: 'g',
          value: function g() {
            var _this17 = this,
              _globalThis$_VSCODE_W,
              _window$trustedTypes,
              _globalThis$_VSCODE_W2,
              _globalThis$trustedTy;
            if (this.d === s1.Uninitialized) {
              if (globalThis.define) {
                this.d = s1.InitializedExternal;
                return;
              }
            } else return;
            (this.d = s1.InitializedInternal),
              (globalThis.define = function (t, r, n) {
                typeof t != 'string' && ((n = r), (r = t), (t = null)),
                  (_typeof(r) != 'object' || !Array.isArray(r)) && ((n = r), (r = null)),
                  _this17.c.push(new an(t, r, n));
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
                                t.startsWith(''.concat(R.vscodeFileResource, '://').concat(Ze))
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
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(t) {
                var _r$callback;
                var r, n, i, s, _iterator32, _step32, o;
                return _regeneratorRuntime().wrap(
                  function _callee3$(_context14) {
                    while (1)
                      switch ((_context14.prev = _context14.next)) {
                        case 0:
                          if (!(this.g(), this.d === s1.InitializedExternal)) {
                            _context14.next = 2;
                            break;
                          }
                          return _context14.abrupt(
                            'return',
                            new Promise(function (o) {
                              var l = on();
                              globalThis.define(l, [t], function (u) {
                                o(u);
                              });
                            }),
                          );
                        case 2:
                          _context14.next = 4;
                          return this.a ? this.i(t) : this.b ? this.h(t) : this.j(t);
                        case 4:
                          r = _context14.sent;
                          if (r) {
                            _context14.next = 8;
                            break;
                          }
                          console.warn('Did not receive a define call from script '.concat(t));
                          return _context14.abrupt('return');
                        case 8:
                          (n = {}), (i = []), (s = []);
                          if (Array.isArray(r.dependencies)) {
                            _iterator32 = _createForOfIteratorHelper(r.dependencies);
                            try {
                              for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
                                o = _step32.value;
                                o === 'exports' ? i.push(n) : s.push(o);
                              }
                            } catch (err) {
                              _iterator32.e(err);
                            } finally {
                              _iterator32.f();
                            }
                          }
                          if (!(s.length > 0)) {
                            _context14.next = 12;
                            break;
                          }
                          throw new Error(
                            'Cannot resolve dependencies for script '
                              .concat(t, '. The dependencies are: ')
                              .concat(s.join(', ')),
                          );
                        case 12:
                          return _context14.abrupt(
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
                          return _context14.stop();
                      }
                  },
                  _callee3,
                  this,
                );
              }),
            );
            function load(_x2) {
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
              var s = function s() {
                  i.removeEventListener('load', o), i.removeEventListener('error', l);
                },
                o = function o(u) {
                  s(), r(_this18.c.pop());
                },
                l = function l(u) {
                  s(), n(u);
                };
              i.addEventListener('load', o),
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
            var _i5 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(t) {
                return _regeneratorRuntime().wrap(
                  function _callee4$(_context15) {
                    while (1)
                      switch ((_context15.prev = _context15.next)) {
                        case 0:
                          this.f && (t = this.f.createScriptURL(t));
                          _context15.next = 3;
                          return (function (specifier) {
                            return new Promise(function (r) {
                              return r(''.concat(specifier));
                            }).then(function (s) {
                              return _interopRequireWildcard(require(s));
                            });
                          })(t);
                        case 3:
                          return _context15.abrupt('return', this.c.pop());
                        case 4:
                        case 'end':
                          return _context15.stop();
                      }
                  },
                  _callee4,
                  this,
                );
              }),
            );
            function i(_x3) {
              return _i5.apply(this, arguments);
            }
            return i;
          })(),
        },
        {
          key: 'j',
          value: (function () {
            var _j = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(t) {
                var r, n, i, s, o, l;
                return _regeneratorRuntime().wrap(
                  function _callee5$(_context16) {
                    while (1)
                      switch ((_context16.prev = _context16.next)) {
                        case 0:
                          _context16.prev = 0;
                          _context16.next = 3;
                          return Promise.resolve().then(function () {
                            return _interopRequireWildcard(require('fs'));
                          });
                        case 3:
                          r = _context16.sent['default'];
                          _context16.next = 6;
                          return Promise.resolve().then(function () {
                            return _interopRequireWildcard(require('vm'));
                          });
                        case 6:
                          n = _context16.sent['default'];
                          _context16.next = 9;
                          return Promise.resolve().then(function () {
                            return _interopRequireWildcard(require('module'));
                          });
                        case 9:
                          i = _context16.sent['default'];
                          s = W.parse(t).fsPath;
                          o = r.readFileSync(s).toString();
                          l = i.wrap(o.replace(/^#!.*/, ''));
                          return _context16.abrupt(
                            'return',
                            (new n.Script(l).runInThisContext().apply(), this.c.pop()),
                          );
                        case 16:
                          _context16.prev = 16;
                          _context16.t0 = _context16['catch'](0);
                          throw _context16.t0;
                        case 19:
                        case 'end':
                          return _context16.stop();
                      }
                  },
                  _callee5,
                  this,
                  [[0, 16]],
                );
              }),
            );
            function j(_x4) {
              return _j.apply(this, arguments);
            }
            return j;
          })(),
        },
      ]);
    })()),
    (_Lt.INSTANCE = new _Lt()),
    _Lt),
  se = new Map();
function Ye(_x5, _x6, _x7) {
  return _Ye.apply(this, arguments);
}
function _Ye() {
  _Ye = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee29(e, t, r) {
      var _ref20, _globalThis$_VSCODE_P, _globalThis$vscode;
      var n, i, u, s;
      return _regeneratorRuntime().wrap(function _callee29$(_context42) {
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
              if (!se.has(n)) {
                _context42.next = 4;
                break;
              }
              return _context42.abrupt('return', se.get(n));
            case 4:
              if (/^\w[\w\d+.-]*:\/\//.test(n)) i = n;
              else {
                u = ''.concat(ln && r && !ye ? nn : rn, '/').concat(n);
                i = Ge.asBrowserUri(u).toString(!0);
              }
              s = un.INSTANCE.load(i);
              return _context42.abrupt('return', (se.set(n, s), s));
            case 7:
            case 'end':
              return _context42.stop();
          }
      }, _callee29);
    }),
  );
  return _Ye.apply(this, arguments);
}
var cn =
  ((_he = /*#__PURE__*/ (function () {
    function he() {
      _classCallCheck(this, he);
    }
    return _createClass(he, null, [
      {
        key: 'getChannel',
        value: function getChannel(t) {
          return t.getChannel(he.CHANNEL_NAME);
        },
      },
      {
        key: 'setChannel',
        value: function setChannel(t, r) {
          t.setChannel(he.CHANNEL_NAME, r);
        },
      },
    ]);
  })()),
  (_he.CHANNEL_NAME = 'languageDetectionWorkerHost'),
  _he);
function n1(e) {
  return e === 47 || e === 92;
}
function Qe(e) {
  return e.replace(/[\\/]/g, E.sep);
}
function fn(e) {
  return e.indexOf('/') === -1 && (e = Qe(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = '/' + e), e;
}
function et(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : E.sep;
  if (!e) return '';
  var r = e.length,
    n = e.charCodeAt(0);
  if (n1(n)) {
    if (n1(e.charCodeAt(1)) && !n1(e.charCodeAt(2))) {
      var s = 3;
      var o = s;
      for (; s < r && !n1(e.charCodeAt(s)); s++);
      if (o !== s && !n1(e.charCodeAt(s + 1))) {
        for (s += 1; s < r; s++)
          if (n1(e.charCodeAt(s))) return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (hn(n) && e.charCodeAt(1) === 58)
    return n1(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  var i = e.indexOf('://');
  if (i !== -1) {
    for (i += 3; i < r; i++) if (n1(e.charCodeAt(i))) return e.slice(0, i + 1);
  }
  return '';
}
function tt(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : j1;
  if (e === t) return !0;
  if (!e || !t || t.length > e.length) return !1;
  if (r) {
    if (!_r(e, t)) return !1;
    if (t.length === e.length) return !0;
    var s = t.length;
    return t.charAt(t.length - 1) === n && s--, e.charAt(s) === n;
  }
  return t.charAt(t.length - 1) !== n && (t += n), e.indexOf(t) === 0;
}
function hn(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function X(e) {
  return U1(e, !0);
}
var oe = /*#__PURE__*/ (function () {
    function oe(e) {
      _classCallCheck(this, oe);
      this.a = e;
    }
    return _createClass(oe, [
      {
        key: 'compare',
        value: function compare(e, t) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          return e === t ? 0 : Ar(this.getComparisonKey(e, r), this.getComparisonKey(t, r));
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
            if (e.scheme === R.file)
              return (
                tt(X(e), X(t), this.a(e)) && e.query === t.query && (r || e.fragment === t.fragment)
              );
            if (rt(e.authority, t.authority))
              return (
                tt(e.path, t.path, this.a(e), '/') &&
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
          return dn(e) || e.authority;
        },
      },
      {
        key: 'basename',
        value: function basename(e) {
          return E.basename(e.path);
        },
      },
      {
        key: 'extname',
        value: function extname(e) {
          return E.extname(e.path);
        },
      },
      {
        key: 'dirname',
        value: function dirname(e) {
          if (e.path.length === 0) return e;
          var t;
          return (
            e.scheme === R.file
              ? (t = W.file(Fr(X(e))).path)
              : ((t = E.dirname(e.path)),
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
            e.scheme === R.file ? (t = W.file(Dr(X(e))).path) : (t = E.normalize(e.path)),
            e['with']({
              path: t,
            })
          );
        },
      },
      {
        key: 'relativePath',
        value: function relativePath(e, t) {
          if (e.scheme !== t.scheme || !rt(e.authority, t.authority)) return;
          if (e.scheme === R.file) {
            var i = Wr(X(e), X(t));
            return f1 ? Qe(i) : i;
          }
          var r = e.path || '/';
          var n = t.path || '/';
          if (this.a(e)) {
            var _i6 = 0;
            for (
              var s = Math.min(r.length, n.length);
              _i6 < s &&
              !(
                r.charCodeAt(_i6) !== n.charCodeAt(_i6) &&
                r.charAt(_i6).toLowerCase() !== n.charAt(_i6).toLowerCase()
              );
              _i6++
            );
            r = n.substr(0, _i6) + r.substr(_i6);
          }
          return E.relative(r, n);
        },
      },
      {
        key: 'resolvePath',
        value: function resolvePath(e, t) {
          if (e.scheme === R.file) {
            var r = W.file(zr(X(e), t));
            return e['with']({
              authority: r.authority,
              path: r.path,
            });
          }
          return (
            (t = fn(t)),
            e['with']({
              path: E.resolve(e.path, t),
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
          return e === t || (e !== void 0 && t !== void 0 && $r(e, t));
        },
      },
      {
        key: 'hasTrailingPathSeparator',
        value: function hasTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : j1;
          if (e.scheme === R.file) {
            var r = X(e);
            return r.length > et(r).length && r[r.length - 1] === t;
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
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : j1;
          return nt(e, t)
            ? e['with']({
                path: e.path.substr(0, e.path.length - 1),
              })
            : e;
        },
      },
      {
        key: 'addTrailingPathSeparator',
        value: function addTrailingPathSeparator(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : j1;
          var r = !1;
          if (e.scheme === R.file) {
            var n = X(e);
            r = n !== void 0 && n.length === et(n).length && n[n.length - 1] === t;
          } else {
            t = '/';
            var _n6 = e.path;
            r = _n6.length === 1 && _n6.charCodeAt(_n6.length - 1) === 47;
          }
          return !r && !nt(e, t)
            ? e['with']({
                path: e.path + '/',
              })
            : e;
        },
      },
    ]);
  })(),
  N = new oe(function () {
    return !1;
  }),
  l2 = new oe(function (e) {
    return e.scheme === R.file ? !Ft : !0;
  }),
  a2 = new oe(function (e) {
    return !0;
  }),
  u2 = N.isEqual.bind(N),
  c2 = N.isEqualOrParent.bind(N),
  f2 = N.getComparisonKey.bind(N),
  h2 = N.basenameOrAuthority.bind(N),
  dn = N.basename.bind(N),
  d2 = N.extname.bind(N),
  m2 = N.dirname.bind(N),
  v2 = N.joinPath.bind(N),
  b2 = N.normalizePath.bind(N),
  g2 = N.relativePath.bind(N),
  p2 = N.resolvePath.bind(N),
  w2 = N.isAbsolutePath.bind(N),
  rt = N.isEqualAuthority.bind(N),
  nt = N.hasTrailingPathSeparator.bind(N),
  y2 = N.removeTrailingPathSeparator.bind(N),
  C2 = N.addTrailingPathSeparator.bind(N),
  it;
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
      .forEach(function (o) {
        var _o$split = o.split(':'),
          _o$split2 = _slicedToArray(_o$split, 2),
          l = _o$split2[0],
          u = _o$split2[1];
        l && u && n.set(l, u);
      });
    var s = r.path.substring(0, r.path.indexOf(';'));
    return s && n.set(e.META_DATA_MIME, s), n;
  }
  e.parseMetaData = t;
})(it || (it = {}));
var L2 = Symbol('MicrotaskDelay'),
  mn,
  le;
(function () {
  typeof globalThis.requestIdleCallback != 'function' ||
  typeof globalThis.cancelIdleCallback != 'function'
    ? (le = function le(e, t, r) {
        Kt(function () {
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
    : (le = function le(e, t, r) {
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
    (mn = function mn(e, t) {
      return le(globalThis, e, t);
    });
})();
var st;
(function (e) {
  (e[(e.Resolved = 0)] = 'Resolved'), (e[(e.Rejected = 1)] = 'Rejected');
})(st || (st = {}));
var ot;
(function (e) {
  function t(_x8) {
    return _t12.apply(this, arguments);
  }
  function _t12() {
    _t12 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7(n) {
        var i, s;
        return _regeneratorRuntime().wrap(function _callee7$(_context18) {
          while (1)
            switch ((_context18.prev = _context18.next)) {
              case 0:
                _context18.next = 2;
                return Promise.all(
                  n.map(function (o) {
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
                s = _context18.sent;
                if (!(_typeof(i) < 'u')) {
                  _context18.next = 5;
                  break;
                }
                throw i;
              case 5:
                return _context18.abrupt('return', s);
              case 6:
              case 'end':
                return _context18.stop();
            }
        }, _callee7);
      }),
    );
    return _t12.apply(this, arguments);
  }
  e.settled = t;
  function r(n) {
    return new Promise(
      /*#__PURE__*/ (function () {
        var _ref9 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6(i, s) {
            return _regeneratorRuntime().wrap(
              function _callee6$(_context17) {
                while (1)
                  switch ((_context17.prev = _context17.next)) {
                    case 0:
                      _context17.prev = 0;
                      _context17.next = 3;
                      return n(i, s);
                    case 3:
                      _context17.next = 8;
                      break;
                    case 5:
                      _context17.prev = 5;
                      _context17.t0 = _context17['catch'](0);
                      s(_context17.t0);
                    case 8:
                    case 'end':
                      return _context17.stop();
                  }
              },
              _callee6,
              null,
              [[0, 5]],
            );
          }),
        );
        return function (_x9, _x0) {
          return _ref9.apply(this, arguments);
        };
      })(),
    );
  }
  e.withAsyncBody = r;
})(ot || (ot = {}));
var lt;
(function (e) {
  (e[(e.Initial = 0)] = 'Initial'),
    (e[(e.DoneOK = 1)] = 'DoneOK'),
    (e[(e.DoneError = 2)] = 'DoneError');
})(lt || (lt = {}));
var N2 =
    ((_H2 = /*#__PURE__*/ (function () {
      function H(t, r) {
        var _this19 = this;
        _classCallCheck(this, H);
        (this.a = 0),
          (this.b = []),
          (this.d = null),
          (this.f = r),
          (this.g = new K()),
          queueMicrotask(
            /*#__PURE__*/ _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8() {
                var n;
                return _regeneratorRuntime().wrap(
                  function _callee8$(_context19) {
                    while (1)
                      switch ((_context19.prev = _context19.next)) {
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
                          _context19.prev = 1;
                          _context19.next = 4;
                          return Promise.resolve(t(n));
                        case 4:
                          _this19.k();
                          _context19.next = 10;
                          break;
                        case 7:
                          _context19.prev = 7;
                          _context19.t0 = _context19['catch'](1);
                          _this19.l(_context19.t0);
                        case 10:
                          _context19.prev = 10;
                          (n.emitOne = void 0), (n.emitMany = void 0), (n.reject = void 0);
                          return _context19.finish(10);
                        case 13:
                        case 'end':
                          return _context19.stop();
                      }
                  },
                  _callee8,
                  null,
                  [[1, 7, 10, 13]],
                );
              }),
            ),
          );
      }
      return _createClass(
        H,
        [
          {
            key: Symbol.asyncIterator,
            value: function value() {
              var _this20 = this;
              var t = 0;
              return {
                next: (function () {
                  var _next2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9() {
                      return _regeneratorRuntime().wrap(function _callee9$(_context20) {
                        while (1)
                          switch ((_context20.prev = _context20.next)) {
                            case 0:
                              if (!(_this20.a === 2)) {
                                _context20.next = 2;
                                break;
                              }
                              throw _this20.d;
                            case 2:
                              if (!(t < _this20.b.length)) {
                                _context20.next = 4;
                                break;
                              }
                              return _context20.abrupt('return', {
                                done: !1,
                                value: _this20.b[t++],
                              });
                            case 4:
                              if (!(_this20.a === 1)) {
                                _context20.next = 6;
                                break;
                              }
                              return _context20.abrupt('return', {
                                done: !0,
                                value: void 0,
                              });
                            case 6:
                              _context20.next = 8;
                              return O1.toPromise(_this20.g.event);
                            case 8:
                              if (!0) {
                                _context20.next = 0;
                                break;
                              }
                            case 9:
                            case 'end':
                              return _context20.stop();
                          }
                      }, _callee9);
                    }),
                  );
                  function next() {
                    return _next2.apply(this, arguments);
                  }
                  return next;
                })(),
                return: (function () {
                  var _return2 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee0() {
                      var _this20$f;
                      return _regeneratorRuntime().wrap(function _callee0$(_context21) {
                        while (1)
                          switch ((_context21.prev = _context21.next)) {
                            case 0:
                              return _context21.abrupt(
                                'return',
                                ((_this20$f = _this20.f) !== null &&
                                  _this20$f !== void 0 &&
                                  _this20$f.call(_this20),
                                {
                                  done: !0,
                                  value: void 0,
                                }),
                              );
                            case 1:
                            case 'end':
                              return _context21.stop();
                          }
                      }, _callee0);
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
              return H.map(this, t);
            },
          },
          {
            key: 'filter',
            value: function filter(t) {
              return H.filter(this, t);
            },
          },
          {
            key: 'coalesce',
            value: function coalesce() {
              return H.coalesce(this);
            },
          },
          {
            key: 'toPromise',
            value: function toPromise() {
              return H.toPromise(this);
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
              return new H(function (r) {
                r.emitMany(t);
              });
            },
          },
          {
            key: 'fromPromise',
            value: function fromPromise(t) {
              return new H(
                /*#__PURE__*/ (function () {
                  var _ref1 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee1(r) {
                      return _regeneratorRuntime().wrap(function _callee1$(_context22) {
                        while (1)
                          switch ((_context22.prev = _context22.next)) {
                            case 0:
                              _context22.t0 = r;
                              _context22.next = 3;
                              return t;
                            case 3:
                              _context22.t1 = _context22.sent;
                              _context22.t0.emitMany.call(_context22.t0, _context22.t1);
                            case 5:
                            case 'end':
                              return _context22.stop();
                          }
                      }, _callee1);
                    }),
                  );
                  return function (_x1) {
                    return _ref1.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'fromPromisesResolveOrder',
            value: function fromPromisesResolveOrder(t) {
              return new H(
                /*#__PURE__*/ (function () {
                  var _ref10 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee11(r) {
                      return _regeneratorRuntime().wrap(function _callee11$(_context24) {
                        while (1)
                          switch ((_context24.prev = _context24.next)) {
                            case 0:
                              _context24.next = 2;
                              return Promise.all(
                                t.map(
                                  /*#__PURE__*/ (function () {
                                    var _ref11 = _asyncToGenerator(
                                      /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee10(n) {
                                          return _regeneratorRuntime().wrap(function _callee10$(
                                            _context23,
                                          ) {
                                            while (1)
                                              switch ((_context23.prev = _context23.next)) {
                                                case 0:
                                                  _context23.t0 = r;
                                                  _context23.next = 3;
                                                  return n;
                                                case 3:
                                                  _context23.t1 = _context23.sent;
                                                  return _context23.abrupt(
                                                    'return',
                                                    _context23.t0.emitOne.call(
                                                      _context23.t0,
                                                      _context23.t1,
                                                    ),
                                                  );
                                                case 5:
                                                case 'end':
                                                  return _context23.stop();
                                              }
                                          }, _callee10);
                                        },
                                      ),
                                    );
                                    return function (_x11) {
                                      return _ref11.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            case 2:
                            case 'end':
                              return _context24.stop();
                          }
                      }, _callee11);
                    }),
                  );
                  return function (_x10) {
                    return _ref10.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'merge',
            value: function merge(t) {
              return new H(
                /*#__PURE__*/ (function () {
                  var _ref12 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee13(r) {
                      return _regeneratorRuntime().wrap(function _callee13$(_context26) {
                        while (1)
                          switch ((_context26.prev = _context26.next)) {
                            case 0:
                              _context26.next = 2;
                              return Promise.all(
                                t.map(
                                  /*#__PURE__*/ (function () {
                                    var _ref13 = _asyncToGenerator(
                                      /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee12(n) {
                                          var _iteratorAbruptCompletion2,
                                            _didIteratorError2,
                                            _iteratorError2,
                                            _iterator2,
                                            _step2,
                                            i;
                                          return _regeneratorRuntime().wrap(
                                            function _callee12$(_context25) {
                                              while (1)
                                                switch ((_context25.prev = _context25.next)) {
                                                  case 0:
                                                    _iteratorAbruptCompletion2 = false;
                                                    _didIteratorError2 = false;
                                                    _context25.prev = 2;
                                                    _iterator2 = _asyncIterator(n);
                                                  case 4:
                                                    _context25.next = 6;
                                                    return _iterator2.next();
                                                  case 6:
                                                    if (
                                                      !(_iteratorAbruptCompletion2 = !(_step2 =
                                                        _context25.sent).done)
                                                    ) {
                                                      _context25.next = 12;
                                                      break;
                                                    }
                                                    i = _step2.value;
                                                    r.emitOne(i);
                                                  case 9:
                                                    _iteratorAbruptCompletion2 = false;
                                                    _context25.next = 4;
                                                    break;
                                                  case 12:
                                                    _context25.next = 18;
                                                    break;
                                                  case 14:
                                                    _context25.prev = 14;
                                                    _context25.t0 = _context25['catch'](2);
                                                    _didIteratorError2 = true;
                                                    _iteratorError2 = _context25.t0;
                                                  case 18:
                                                    _context25.prev = 18;
                                                    _context25.prev = 19;
                                                    if (
                                                      !(
                                                        _iteratorAbruptCompletion2 &&
                                                        _iterator2['return'] != null
                                                      )
                                                    ) {
                                                      _context25.next = 23;
                                                      break;
                                                    }
                                                    _context25.next = 23;
                                                    return _iterator2['return']();
                                                  case 23:
                                                    _context25.prev = 23;
                                                    if (!_didIteratorError2) {
                                                      _context25.next = 26;
                                                      break;
                                                    }
                                                    throw _iteratorError2;
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
                                        },
                                      ),
                                    );
                                    return function (_x13) {
                                      return _ref13.apply(this, arguments);
                                    };
                                  })(),
                                ),
                              );
                            case 2:
                            case 'end':
                              return _context26.stop();
                          }
                      }, _callee13);
                    }),
                  );
                  return function (_x12) {
                    return _ref12.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'map',
            value: function map(t, r) {
              return new H(
                /*#__PURE__*/ (function () {
                  var _ref14 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14(n) {
                      var _iteratorAbruptCompletion3,
                        _didIteratorError3,
                        _iteratorError3,
                        _iterator3,
                        _step3,
                        i;
                      return _regeneratorRuntime().wrap(
                        function _callee14$(_context27) {
                          while (1)
                            switch ((_context27.prev = _context27.next)) {
                              case 0:
                                _iteratorAbruptCompletion3 = false;
                                _didIteratorError3 = false;
                                _context27.prev = 2;
                                _iterator3 = _asyncIterator(t);
                              case 4:
                                _context27.next = 6;
                                return _iterator3.next();
                              case 6:
                                if (
                                  !(_iteratorAbruptCompletion3 = !(_step3 = _context27.sent).done)
                                ) {
                                  _context27.next = 12;
                                  break;
                                }
                                i = _step3.value;
                                n.emitOne(r(i));
                              case 9:
                                _iteratorAbruptCompletion3 = false;
                                _context27.next = 4;
                                break;
                              case 12:
                                _context27.next = 18;
                                break;
                              case 14:
                                _context27.prev = 14;
                                _context27.t0 = _context27['catch'](2);
                                _didIteratorError3 = true;
                                _iteratorError3 = _context27.t0;
                              case 18:
                                _context27.prev = 18;
                                _context27.prev = 19;
                                if (!(_iteratorAbruptCompletion3 && _iterator3['return'] != null)) {
                                  _context27.next = 23;
                                  break;
                                }
                                _context27.next = 23;
                                return _iterator3['return']();
                              case 23:
                                _context27.prev = 23;
                                if (!_didIteratorError3) {
                                  _context27.next = 26;
                                  break;
                                }
                                throw _iteratorError3;
                              case 26:
                                return _context27.finish(23);
                              case 27:
                                return _context27.finish(18);
                              case 28:
                              case 'end':
                                return _context27.stop();
                            }
                        },
                        _callee14,
                        null,
                        [
                          [2, 14, 18, 28],
                          [19, , 23, 27],
                        ],
                      );
                    }),
                  );
                  return function (_x14) {
                    return _ref14.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'filter',
            value: function filter(t, r) {
              return new H(
                /*#__PURE__*/ (function () {
                  var _ref15 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee15(n) {
                      var _iteratorAbruptCompletion4,
                        _didIteratorError4,
                        _iteratorError4,
                        _iterator4,
                        _step4,
                        i;
                      return _regeneratorRuntime().wrap(
                        function _callee15$(_context28) {
                          while (1)
                            switch ((_context28.prev = _context28.next)) {
                              case 0:
                                _iteratorAbruptCompletion4 = false;
                                _didIteratorError4 = false;
                                _context28.prev = 2;
                                _iterator4 = _asyncIterator(t);
                              case 4:
                                _context28.next = 6;
                                return _iterator4.next();
                              case 6:
                                if (
                                  !(_iteratorAbruptCompletion4 = !(_step4 = _context28.sent).done)
                                ) {
                                  _context28.next = 12;
                                  break;
                                }
                                i = _step4.value;
                                r(i) && n.emitOne(i);
                              case 9:
                                _iteratorAbruptCompletion4 = false;
                                _context28.next = 4;
                                break;
                              case 12:
                                _context28.next = 18;
                                break;
                              case 14:
                                _context28.prev = 14;
                                _context28.t0 = _context28['catch'](2);
                                _didIteratorError4 = true;
                                _iteratorError4 = _context28.t0;
                              case 18:
                                _context28.prev = 18;
                                _context28.prev = 19;
                                if (!(_iteratorAbruptCompletion4 && _iterator4['return'] != null)) {
                                  _context28.next = 23;
                                  break;
                                }
                                _context28.next = 23;
                                return _iterator4['return']();
                              case 23:
                                _context28.prev = 23;
                                if (!_didIteratorError4) {
                                  _context28.next = 26;
                                  break;
                                }
                                throw _iteratorError4;
                              case 26:
                                return _context28.finish(23);
                              case 27:
                                return _context28.finish(18);
                              case 28:
                              case 'end':
                                return _context28.stop();
                            }
                        },
                        _callee15,
                        null,
                        [
                          [2, 14, 18, 28],
                          [19, , 23, 27],
                        ],
                      );
                    }),
                  );
                  return function (_x15) {
                    return _ref15.apply(this, arguments);
                  };
                })(),
              );
            },
          },
          {
            key: 'coalesce',
            value: function coalesce(t) {
              return H.filter(t, function (r) {
                return !!r;
              });
            },
          },
          {
            key: 'toPromise',
            value: (function () {
              var _toPromise = _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee16(t) {
                  var r,
                    _iteratorAbruptCompletion5,
                    _didIteratorError5,
                    _iteratorError5,
                    _iterator5,
                    _step5,
                    n;
                  return _regeneratorRuntime().wrap(
                    function _callee16$(_context29) {
                      while (1)
                        switch ((_context29.prev = _context29.next)) {
                          case 0:
                            r = [];
                            _iteratorAbruptCompletion5 = false;
                            _didIteratorError5 = false;
                            _context29.prev = 3;
                            _iterator5 = _asyncIterator(t);
                          case 5:
                            _context29.next = 7;
                            return _iterator5.next();
                          case 7:
                            if (!(_iteratorAbruptCompletion5 = !(_step5 = _context29.sent).done)) {
                              _context29.next = 13;
                              break;
                            }
                            n = _step5.value;
                            r.push(n);
                          case 10:
                            _iteratorAbruptCompletion5 = false;
                            _context29.next = 5;
                            break;
                          case 13:
                            _context29.next = 19;
                            break;
                          case 15:
                            _context29.prev = 15;
                            _context29.t0 = _context29['catch'](3);
                            _didIteratorError5 = true;
                            _iteratorError5 = _context29.t0;
                          case 19:
                            _context29.prev = 19;
                            _context29.prev = 20;
                            if (!(_iteratorAbruptCompletion5 && _iterator5['return'] != null)) {
                              _context29.next = 24;
                              break;
                            }
                            _context29.next = 24;
                            return _iterator5['return']();
                          case 24:
                            _context29.prev = 24;
                            if (!_didIteratorError5) {
                              _context29.next = 27;
                              break;
                            }
                            throw _iteratorError5;
                          case 27:
                            return _context29.finish(24);
                          case 28:
                            return _context29.finish(19);
                          case 29:
                            return _context29.abrupt('return', r);
                          case 30:
                          case 'end':
                            return _context29.stop();
                        }
                    },
                    _callee16,
                    null,
                    [
                      [3, 15, 19, 29],
                      [20, , 24, 28],
                    ],
                  );
                }),
              );
              function toPromise(_x16) {
                return _toPromise.apply(this, arguments);
              }
              return toPromise;
            })(),
          },
        ],
      );
    })()),
    (_H2.EMPTY = _H2.fromArray([])),
    _H2),
  p1 = /*#__PURE__*/ (function () {
    function o1(t, r) {
      _classCallCheck(this, o1);
      (this.lineNumber = t), (this.column = r);
    }
    return _createClass(
      o1,
      [
        {
          key: 'with',
          value: function _with() {
            var t =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lineNumber;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.column;
            return t === this.lineNumber && r === this.column ? this : new o1(t, r);
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
            return o1.equals(this, t);
          },
        },
        {
          key: 'isBefore',
          value: function isBefore(t) {
            return o1.isBefore(this, t);
          },
        },
        {
          key: 'isBeforeOrEqual',
          value: function isBeforeOrEqual(t) {
            return o1.isBeforeOrEqual(this, t);
          },
        },
        {
          key: 'clone',
          value: function clone() {
            return new o1(this.lineNumber, this.column);
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
                o = r.column | 0;
              return s - o;
            }
            return n - i;
          },
        },
        {
          key: 'lift',
          value: function lift(t) {
            return new o1(t.lineNumber, t.column);
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
  vn = /*#__PURE__*/ (function () {
    function P(t, r, n, i) {
      _classCallCheck(this, P);
      var s, o, l, u;
      t == null || typeof t == 'number' || Number.isNaN(t)
        ? ((s = t), (o = r), (l = n), (u = i))
        : 'startLineNumber' in t && 'startColumn' in t
          ? ((s = t.startLineNumber), (o = t.startColumn), (l = t.endLineNumber), (u = t.endColumn))
          : ((s = t.startLineNumber), (o = 1), (l = t.endLineNumberExclusive), (u = 1)),
        s > l || (s === l && o > u)
          ? ((this.startLineNumber = l),
            (this.startColumn = u),
            (this.endLineNumber = s),
            (this.endColumn = o))
          : ((this.startLineNumber = s),
            (this.startColumn = o),
            (this.endLineNumber = l),
            (this.endColumn = u));
    }
    return _createClass(
      P,
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
            return P.isEmpty(this);
          },
        },
        {
          key: 'containsPosition',
          value: function containsPosition(t) {
            return P.containsPosition(this, t);
          },
        },
        {
          key: 'containsRange',
          value: function containsRange(t) {
            return P.containsRange(this, t);
          },
        },
        {
          key: 'strictContainsRange',
          value: function strictContainsRange(t) {
            return P.strictContainsRange(this, t);
          },
        },
        {
          key: 'plusRange',
          value: function plusRange(t) {
            return P.plusRange(this, t);
          },
        },
        {
          key: 'intersectRanges',
          value: function intersectRanges(t) {
            return P.intersectRanges(this, t);
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
            return P.equalsRange(this, t);
          },
        },
        {
          key: 'getEndPosition',
          value: function getEndPosition() {
            return P.getEndPosition(this);
          },
        },
        {
          key: 'getStartPosition',
          value: function getStartPosition() {
            return P.getStartPosition(this);
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
            return new P(this.startLineNumber, this.startColumn, t, r);
          },
        },
        {
          key: 'setStartPosition',
          value: function setStartPosition(t, r) {
            return new P(t, r, this.endLineNumber, this.endColumn);
          },
        },
        {
          key: 'collapseToStart',
          value: function collapseToStart() {
            return P.collapseToStart(this);
          },
        },
        {
          key: 'collapseToEnd',
          value: function collapseToEnd() {
            return P.collapseToEnd(this);
          },
        },
        {
          key: 'delta',
          value: function delta(t) {
            return new P(
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
            return new P(n, t.startColumn, i, t.startColumn);
          },
        },
        {
          key: 'getRangeOnBelow',
          value: function getRangeOnBelow(t, r, n) {
            var i = t.endLineNumber,
              s = Math.min(t.endLineNumber + r, n);
            return new P(i, t.endColumn, s, t.endColumn);
          },
        },
        {
          key: 'getExtendedRange',
          value: function getExtendedRange(t, r, n) {
            var i = Math.max(t.startLineNumber - r, 0),
              s = Math.min(t.endLineNumber + r, n);
            return new P(i, t.startColumn, s, t.endColumn);
          },
        },
        {
          key: 'plusRange',
          value: function plusRange(t, r) {
            var n, i, s, o;
            return (
              r.startLineNumber < t.startLineNumber
                ? ((n = r.startLineNumber), (i = r.startColumn))
                : r.startLineNumber === t.startLineNumber
                  ? ((n = r.startLineNumber), (i = Math.min(r.startColumn, t.startColumn)))
                  : ((n = t.startLineNumber), (i = t.startColumn)),
              r.endLineNumber > t.endLineNumber
                ? ((s = r.endLineNumber), (o = r.endColumn))
                : r.endLineNumber === t.endLineNumber
                  ? ((s = r.endLineNumber), (o = Math.max(r.endColumn, t.endColumn)))
                  : ((s = t.endLineNumber), (o = t.endColumn)),
              new P(n, i, s, o)
            );
          },
        },
        {
          key: 'intersectRanges',
          value: function intersectRanges(t, r) {
            var n = t.startLineNumber,
              i = t.startColumn,
              s = t.endLineNumber,
              o = t.endColumn;
            var l = r.startLineNumber,
              u = r.startColumn,
              a = r.endLineNumber,
              f = r.endColumn;
            return (
              n < l ? ((n = l), (i = u)) : n === l && (i = Math.max(i, u)),
              s > a ? ((s = a), (o = f)) : s === a && (o = Math.min(o, f)),
              n > s || (n === s && i > o) ? null : new P(n, i, s, o)
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
            var n = P.lift(t).whereIs(r.range);
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
                    o =
                      r.range.startLineNumber === r.range.endLineNumber
                        ? r.range.endColumn - r.range.startColumn
                        : r.range.endColumn - 1,
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
                var _i7 = n;
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
            return new p1(t.endLineNumber, t.endColumn);
          },
        },
        {
          key: 'getStartPosition',
          value: function getStartPosition(t) {
            return new p1(t.startLineNumber, t.startColumn);
          },
        },
        {
          key: 'collapseToStart',
          value: function collapseToStart(t) {
            return new P(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
          },
        },
        {
          key: 'collapseToEnd',
          value: function collapseToEnd(t) {
            return new P(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
          },
        },
        {
          key: 'fromPositions',
          value: function fromPositions(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
            return new P(t.lineNumber, t.column, r.lineNumber, r.column);
          },
        },
        {
          key: 'lift',
          value: function lift(t) {
            return t ? new P(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
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
                o = r.startLineNumber | 0;
              if (s === o) {
                var l = t.startColumn | 0,
                  u = r.startColumn | 0;
                if (l === u) {
                  var a = t.endLineNumber | 0,
                    f = r.endLineNumber | 0;
                  if (a === f) {
                    var c = t.endColumn | 0,
                      d = r.endColumn | 0;
                    return c - d;
                  }
                  return a - f;
                }
                return l - u;
              }
              return s - o;
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
  bn = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
function gn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var t = '(-?\\d*\\.\\d\\w*)|([^';
  var _iterator33 = _createForOfIteratorHelper(bn),
    _step33;
  try {
    for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
      var r = _step33.value;
      e.indexOf(r) >= 0 || (t += '\\' + r);
    }
  } catch (err) {
    _iterator33.e(err);
  } finally {
    _iterator33.f();
  }
  return (t += '\\s]+)'), new RegExp(t, 'g');
}
var pn = gn();
function at(e) {
  var t = pn;
  if (e && e instanceof RegExp)
    if (e.global) t = e;
    else {
      var r = 'g';
      e.ignoreCase && (r += 'i'),
        e.multiline && (r += 'm'),
        e.unicode && (r += 'u'),
        (t = new RegExp(e.source, r));
    }
  return (t.lastIndex = 0), t;
}
var ut = new ar();
ut.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150,
});
function ct(e, t, r, n, i) {
  if (((t = at(t)), i || (i = k1.first(ut)), r.length > i.maxLen)) {
    var a = e - i.maxLen / 2;
    return a < 0 ? (a = 0) : (n += a), (r = r.substring(a, e + i.maxLen / 2)), ct(e, t, r, n, i);
  }
  var s = Date.now(),
    o = e - 1 - n;
  var l = -1,
    u = null;
  for (var _a5 = 1; !(Date.now() - s >= i.timeBudget); _a5++) {
    var f = o - i.windowSize * _a5;
    t.lastIndex = Math.max(0, f);
    var c = wn(t, r, o, l);
    if ((!c && u) || ((u = c), f <= 0)) break;
    l = f;
  }
  if (u) {
    var _a6 = {
      word: u[0],
      startColumn: n + 1 + u.index,
      endColumn: n + 1 + u.index + u[0].length,
    };
    return (t.lastIndex = 0), _a6;
  }
  return null;
}
function wn(e, t, r, n) {
  var i;
  for (; (i = e.exec(t)); ) {
    var s = i.index || 0;
    if (s <= r && e.lastIndex >= r) return i;
    if (n > 0 && s > n) return null;
  }
  return null;
}
var ft;
(function (e) {
  (e[(e.MAX_SAFE_SMALL_INTEGER = 1073741824)] = 'MAX_SAFE_SMALL_INTEGER'),
    (e[(e.MIN_SAFE_SMALL_INTEGER = -1073741824)] = 'MIN_SAFE_SMALL_INTEGER'),
    (e[(e.MAX_UINT_8 = 255)] = 'MAX_UINT_8'),
    (e[(e.MAX_UINT_16 = 65535)] = 'MAX_UINT_16'),
    (e[(e.MAX_UINT_32 = 4294967295)] = 'MAX_UINT_32'),
    (e[(e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536)] = 'UNICODE_SUPPLEMENTARY_PLANE_BEGIN');
})(ft || (ft = {}));
function m1(e) {
  return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0;
}
var yn = /*#__PURE__*/ (function () {
    function yn(e) {
      _classCallCheck(this, yn);
      (this.a = e),
        (this.b = new Uint32Array(e.length)),
        (this.c = new Int32Array(1)),
        (this.c[0] = -1);
    }
    return _createClass(yn, [
      {
        key: 'getCount',
        value: function getCount() {
          return this.a.length;
        },
      },
      {
        key: 'insertValues',
        value: function insertValues(e, t) {
          e = m1(e);
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
            (e = m1(e)),
            (t = m1(t)),
            this.a[e] === t ? !1 : ((this.a[e] = t), e - 1 < this.c[0] && (this.c[0] = e - 1), !0)
          );
        },
      },
      {
        key: 'removeValues',
        value: function removeValues(e, t) {
          (e = m1(e)), (t = m1(t));
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
          return e < 0 ? 0 : ((e = m1(e)), this.d(e));
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
            s = 0;
          for (; t <= r; )
            if (((n = (t + (r - t) / 2) | 0), (i = this.b[n]), (s = i - this.a[n]), e < s))
              r = n - 1;
            else if (e >= i) t = n + 1;
            else break;
          return new Cn(n, e - s);
        },
      },
    ]);
  })(),
  Cn = /*#__PURE__*/ _createClass(function Cn(e, t) {
    _classCallCheck(this, Cn);
    (this.index = e),
      (this.remainder = t),
      (this._prefixSumIndexOfResultBrand = void 0),
      (this.index = e),
      (this.remainder = t);
  }),
  Ln = /*#__PURE__*/ (function () {
    function Ln(e, t, r, n) {
      _classCallCheck(this, Ln);
      (this.a = e), (this.b = t), (this.c = r), (this.d = n), (this.f = null), (this.g = null);
    }
    return _createClass(Ln, [
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
          var _iterator34 = _createForOfIteratorHelper(t),
            _step34;
          try {
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done; ) {
              var r = _step34.value;
              this.k(r.range), this.l(new p1(r.range.startLineNumber, r.range.startColumn), r.text);
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
          (this.d = e.versionId), (this.g = null);
        },
      },
      {
        key: 'h',
        value: function h() {
          if (!this.f) {
            var _e11 = this.c.length,
              _t13 = this.b.length,
              r = new Uint32Array(_t13);
            for (var n = 0; n < _t13; n++) r[n] = this.b[n].length + _e11;
            this.f = new yn(r);
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
          var r = Nr(t);
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
  A2 = 60 * 1e3,
  Nn = 'workerTextModelSync',
  An = /*#__PURE__*/ (function () {
    function An() {
      _classCallCheck(this, An);
      this.a = Object.create(null);
    }
    return _createClass(An, [
      {
        key: 'bindToServer',
        value: function bindToServer(e) {
          e.setChannel(Nn, this);
        },
      },
      {
        key: 'getModel',
        value: function getModel(e) {
          return this.a[e];
        },
      },
      {
        key: 'getModels',
        value: function getModels() {
          var _this21 = this;
          var e = [];
          return (
            Object.keys(this.a).forEach(function (t) {
              return e.push(_this21.a[t]);
            }),
            e
          );
        },
      },
      {
        key: '$acceptNewModel',
        value: function $acceptNewModel(e) {
          this.a[e.url] = new En(W.parse(e.url), e.lines, e.EOL, e.versionId);
        },
      },
      {
        key: '$acceptModelChanged',
        value: function $acceptModelChanged(e, t) {
          if (!this.a[e]) return;
          this.a[e].onEvents(t);
        },
      },
      {
        key: '$acceptRemovedModel',
        value: function $acceptRemovedModel(e) {
          this.a[e] && delete this.a[e];
        },
      },
    ]);
  })(),
  En = /*#__PURE__*/ (function (_Ln) {
    function En() {
      _classCallCheck(this, En);
      return _callSuper(this, En, arguments);
    }
    _inherits(En, _Ln);
    return _createClass(En, [
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
          for (var r = 0; r < this.b.length; r++) {
            var n = this.b[r],
              i = this.offsetAt(new p1(r + 1, 1)),
              s = n.matchAll(e);
            var _iterator35 = _createForOfIteratorHelper(s),
              _step35;
            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
                var o = _step35.value;
                (o.index || o.index === 0) && (o.index = o.index + i), t.push(o);
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
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
          var r = ct(e.column, at(t), this.b[e.lineNumber - 1], 0);
          return r ? new vn(e.lineNumber, r.startColumn, e.lineNumber, r.endColumn) : null;
        },
      },
      {
        key: 'getWordUntilPosition',
        value: function getWordUntilPosition(e, t) {
          var r = this.getWordAtPosition(e, t);
          return r
            ? {
                word: this.b[e.lineNumber - 1].substring(r.startColumn - 1, e.column - 1),
                startColumn: r.startColumn,
                endColumn: e.column,
              }
            : {
                word: '',
                startColumn: e.column,
                endColumn: e.column,
              };
        },
      },
      {
        key: 'words',
        value: function words(e) {
          var t = this.b,
            r = this.m.bind(this);
          var n = 0,
            i = '',
            s = 0,
            o = [];
          return _defineProperty(
            {},
            Symbol.iterator,
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee17() {
              var l;
              return _regeneratorRuntime().wrap(function _callee17$(_context30) {
                while (1)
                  switch ((_context30.prev = _context30.next)) {
                    case 0:
                      if (!(s < o.length)) {
                        _context30.next = 7;
                        break;
                      }
                      l = i.substring(o[s].start, o[s].end);
                      s += 1;
                      _context30.next = 5;
                      return l;
                    case 5:
                      _context30.next = 12;
                      break;
                    case 7:
                      if (!(n < t.length)) {
                        _context30.next = 11;
                        break;
                      }
                      (i = t[n]), (o = r(i, e)), (s = 0), (n += 1);
                      _context30.next = 12;
                      break;
                    case 11:
                      return _context30.abrupt('break', 14);
                    case 12:
                      _context30.next = 0;
                      break;
                    case 14:
                    case 'end':
                      return _context30.stop();
                  }
              }, _callee17);
            }),
          );
        },
      },
      {
        key: 'getLineWords',
        value: function getLineWords(e, t) {
          var r = this.b[e - 1],
            n = this.m(r, t),
            i = [];
          var _iterator36 = _createForOfIteratorHelper(n),
            _step36;
          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
              var s = _step36.value;
              i.push({
                word: r.substring(s.start, s.end),
                startColumn: s.start + 1,
                endColumn: s.end + 1,
              });
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }
          return i;
        },
      },
      {
        key: 'm',
        value: function m(e, t) {
          var r = [];
          var n;
          for (t.lastIndex = 0; (n = t.exec(e)) && n[0].length !== 0; )
            r.push({
              start: n.index,
              end: n.index + n[0].length,
            });
          return r;
        },
      },
      {
        key: 'getValueInRange',
        value: function getValueInRange(e) {
          if (((e = this.n(e)), e.startLineNumber === e.endLineNumber))
            return this.b[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
          var t = this.c,
            r = e.startLineNumber - 1,
            n = e.endLineNumber - 1,
            i = [];
          i.push(this.b[r].substring(e.startColumn - 1));
          for (var s = r + 1; s < n; s++) i.push(this.b[s]);
          return i.push(this.b[n].substring(0, e.endColumn - 1)), i.join(t);
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
            r = this.b[t.index].length;
          return {
            lineNumber: 1 + t.index,
            column: 1 + Math.min(t.remainder, r),
          };
        },
      },
      {
        key: 'n',
        value: function n(e) {
          var t = this.o({
              lineNumber: e.startLineNumber,
              column: e.startColumn,
            }),
            r = this.o({
              lineNumber: e.endLineNumber,
              column: e.endColumn,
            });
          return t.lineNumber !== e.startLineNumber ||
            t.column !== e.startColumn ||
            r.lineNumber !== e.endLineNumber ||
            r.column !== e.endColumn
            ? {
                startLineNumber: t.lineNumber,
                startColumn: t.column,
                endLineNumber: r.lineNumber,
                endColumn: r.column,
              }
            : e;
        },
      },
      {
        key: 'o',
        value: function o(e) {
          if (!p1.isIPosition(e)) throw new Error('bad position');
          var t = e.lineNumber,
            r = e.column,
            n = !1;
          if (t < 1) (t = 1), (r = 1), (n = !0);
          else if (t > this.b.length) (t = this.b.length), (r = this.b[t - 1].length + 1), (n = !0);
          else {
            var i = this.b[t - 1].length + 1;
            r < 1 ? ((r = 1), (n = !0)) : r > i && ((r = i), (n = !0));
          }
          return n
            ? {
                lineNumber: t,
                column: r,
              }
            : e;
        },
      },
    ]);
  })(Ln);
function $n(e) {
  return new _n(e);
}
var _n =
    ((_Y = /*#__PURE__*/ (function () {
      function Y(t) {
        _classCallCheck(this, Y);
        (this.f = new An()),
          (this.i = !1),
          (this.k = !1),
          (this.l = new Map()),
          (this.g = cn.getChannel(t)),
          this.f.bindToServer(t);
      }
      return _createClass(Y, [
        {
          key: '$detectLanguage',
          value: (function () {
            var _$detectLanguage = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20(t, r, n, i) {
                var _this22 = this;
                var s, o, l, u, a, f, c, d, _c, _d;
                return _regeneratorRuntime().wrap(
                  function _callee20$(_context33) {
                    while (1)
                      switch ((_context33.prev = _context33.next)) {
                        case 0:
                          (s = []), (o = []), (l = new ke()), (u = this.m(t));
                          if (u) {
                            _context33.next = 3;
                            break;
                          }
                          return _context33.abrupt('return');
                        case 3:
                          (a = /*#__PURE__*/ (function () {
                            var _ref17 = _asyncToGenerator(
                              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee18() {
                                var _iteratorAbruptCompletion6,
                                  _didIteratorError6,
                                  _iteratorError6,
                                  _iterator6,
                                  _step6,
                                  c,
                                  d;
                                return _regeneratorRuntime().wrap(
                                  function _callee18$(_context31) {
                                    while (1)
                                      switch ((_context31.prev = _context31.next)) {
                                        case 0:
                                          _iteratorAbruptCompletion6 = false;
                                          _didIteratorError6 = false;
                                          _context31.prev = 2;
                                          _iterator6 = _asyncIterator(_this22.r(u));
                                        case 4:
                                          _context31.next = 6;
                                          return _iterator6.next();
                                        case 6:
                                          if (
                                            !(_iteratorAbruptCompletion6 = !(_step6 =
                                              _context31.sent).done)
                                          ) {
                                            _context31.next = 21;
                                            break;
                                          }
                                          c = _step6.value;
                                          _context31.t0 = _this22.l.has(c.languageId);
                                          if (_context31.t0) {
                                            _context31.next = 16;
                                            break;
                                          }
                                          _context31.t1 = _this22.l;
                                          _context31.t2 = c.languageId;
                                          _context31.next = 14;
                                          return _this22.g.$getLanguageId(c.languageId);
                                        case 14:
                                          _context31.t3 = _context31.sent;
                                          _context31.t1.set.call(
                                            _context31.t1,
                                            _context31.t2,
                                            _context31.t3,
                                          );
                                        case 16:
                                          d = _this22.l.get(c.languageId);
                                          d &&
                                            (!(i !== null && i !== void 0 && i.length) ||
                                              i.includes(d)) &&
                                            (s.push(d), o.push(c.confidence));
                                        case 18:
                                          _iteratorAbruptCompletion6 = false;
                                          _context31.next = 4;
                                          break;
                                        case 21:
                                          _context31.next = 27;
                                          break;
                                        case 23:
                                          _context31.prev = 23;
                                          _context31.t4 = _context31['catch'](2);
                                          _didIteratorError6 = true;
                                          _iteratorError6 = _context31.t4;
                                        case 27:
                                          _context31.prev = 27;
                                          _context31.prev = 28;
                                          if (
                                            !(
                                              _iteratorAbruptCompletion6 &&
                                              _iterator6['return'] != null
                                            )
                                          ) {
                                            _context31.next = 32;
                                            break;
                                          }
                                          _context31.next = 32;
                                          return _iterator6['return']();
                                        case 32:
                                          _context31.prev = 32;
                                          if (!_didIteratorError6) {
                                            _context31.next = 35;
                                            break;
                                          }
                                          throw _iteratorError6;
                                        case 35:
                                          return _context31.finish(32);
                                        case 36:
                                          return _context31.finish(27);
                                        case 37:
                                          if (!(l.stop(), s.length)) {
                                            _context31.next = 39;
                                            break;
                                          }
                                          return _context31.abrupt(
                                            'return',
                                            (_this22.g.$sendTelemetryEvent(s, o, l.elapsed()),
                                            s[0]),
                                          );
                                        case 39:
                                        case 'end':
                                          return _context31.stop();
                                      }
                                  },
                                  _callee18,
                                  null,
                                  [
                                    [2, 23, 27, 37],
                                    [28, , 32, 36],
                                  ],
                                );
                              }),
                            );
                            return function a() {
                              return _ref17.apply(this, arguments);
                            };
                          })()),
                            (f = /*#__PURE__*/ (function () {
                              var _ref18 = _asyncToGenerator(
                                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee19() {
                                  return _regeneratorRuntime().wrap(function _callee19$(
                                    _context32,
                                  ) {
                                    while (1)
                                      switch ((_context32.prev = _context32.next)) {
                                        case 0:
                                          return _context32.abrupt(
                                            'return',
                                            _this22.o(u, r !== null && r !== void 0 ? r : {}, i),
                                          );
                                        case 1:
                                        case 'end':
                                          return _context32.stop();
                                      }
                                  }, _callee19);
                                }),
                              );
                              return function f() {
                                return _ref18.apply(this, arguments);
                              };
                            })());
                          if (!n) {
                            _context33.next = 17;
                            break;
                          }
                          _context33.next = 7;
                          return f();
                        case 7:
                          c = _context33.sent;
                          if (!c) {
                            _context33.next = 10;
                            break;
                          }
                          return _context33.abrupt('return', c);
                        case 10:
                          _context33.next = 12;
                          return a();
                        case 12:
                          d = _context33.sent;
                          if (!d) {
                            _context33.next = 15;
                            break;
                          }
                          return _context33.abrupt('return', d);
                        case 15:
                          _context33.next = 27;
                          break;
                        case 17:
                          _context33.next = 19;
                          return a();
                        case 19:
                          _c = _context33.sent;
                          if (!_c) {
                            _context33.next = 22;
                            break;
                          }
                          return _context33.abrupt('return', _c);
                        case 22:
                          _context33.next = 24;
                          return f();
                        case 24:
                          _d = _context33.sent;
                          if (!_d) {
                            _context33.next = 27;
                            break;
                          }
                          return _context33.abrupt('return', _d);
                        case 27:
                        case 'end':
                          return _context33.stop();
                      }
                  },
                  _callee20,
                  this,
                );
              }),
            );
            function $detectLanguage(_x17, _x18, _x19, _x20) {
              return _$detectLanguage.apply(this, arguments);
            }
            return $detectLanguage;
          })(),
        },
        {
          key: 'm',
          value: function m(t) {
            var r = this.f.getModel(t);
            if (!r) return;
            var n = r.positionAt(1e4);
            return r.getValueInRange({
              startColumn: 1,
              startLineNumber: 1,
              endColumn: n.column,
              endLineNumber: n.lineNumber,
            });
          },
        },
        {
          key: 'n',
          value: (function () {
            var _n7 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee21() {
                var t;
                return _regeneratorRuntime().wrap(
                  function _callee21$(_context34) {
                    while (1)
                      switch ((_context34.prev = _context34.next)) {
                        case 0:
                          if (!this.i) {
                            _context34.next = 2;
                            break;
                          }
                          return _context34.abrupt('return');
                        case 2:
                          if (!this.h) {
                            _context34.next = 4;
                            break;
                          }
                          return _context34.abrupt('return', this.h);
                        case 4:
                          _context34.next = 6;
                          return this.g.$getRegexpModelUri();
                        case 6:
                          t = _context34.sent;
                          _context34.prev = 7;
                          _context34.next = 10;
                          return Ye(t, '');
                        case 10:
                          this.h = _context34.sent;
                          return _context34.abrupt('return', this.h);
                        case 14:
                          _context34.prev = 14;
                          _context34.t0 = _context34['catch'](7);
                          this.i = !0;
                          return _context34.abrupt('return');
                        case 18:
                        case 'end':
                          return _context34.stop();
                      }
                  },
                  _callee21,
                  this,
                  [[7, 14]],
                );
              }),
            );
            function n() {
              return _n7.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: 'o',
          value: (function () {
            var _o2 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee22(t, r, n) {
                var i, _i8, _Object$keys, _o3;
                return _regeneratorRuntime().wrap(
                  function _callee22$(_context35) {
                    while (1)
                      switch ((_context35.prev = _context35.next)) {
                        case 0:
                          _context35.next = 2;
                          return this.n();
                        case 2:
                          i = _context35.sent;
                          if (i) {
                            _context35.next = 5;
                            break;
                          }
                          return _context35.abrupt('return');
                        case 5:
                          if (n !== null && n !== void 0 && n.length)
                            for (
                              _i8 = 0, _Object$keys = Object.keys(r);
                              _i8 < _Object$keys.length;
                              _i8++
                            ) {
                              _o3 = _Object$keys[_i8];
                              n.includes(_o3) ? (r[_o3] = 1) : (r[_o3] = 0);
                            }
                          return _context35.abrupt('return', i.detect(t, r, n));
                        case 7:
                        case 'end':
                          return _context35.stop();
                      }
                  },
                  _callee22,
                  this,
                );
              }),
            );
            function o(_x21, _x22, _x23) {
              return _o2.apply(this, arguments);
            }
            return o;
          })(),
        },
        {
          key: 'p',
          value: (function () {
            var _p2 = _asyncToGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee25() {
                var _this23 = this;
                var t, _yield$Ye, r;
                return _regeneratorRuntime().wrap(
                  function _callee25$(_context38) {
                    while (1)
                      switch ((_context38.prev = _context38.next)) {
                        case 0:
                          if (!this.j) {
                            _context38.next = 2;
                            break;
                          }
                          return _context38.abrupt('return', this.j);
                        case 2:
                          _context38.next = 4;
                          return this.g.$getIndexJsUri();
                        case 4:
                          t = _context38.sent;
                          _context38.next = 7;
                          return Ye(t, '');
                        case 7:
                          _yield$Ye = _context38.sent;
                          r = _yield$Ye.ModelOperations;
                          return _context38.abrupt(
                            'return',
                            ((this.j = new r({
                              modelJsonLoaderFunc: (function () {
                                var _modelJsonLoaderFunc = _asyncToGenerator(
                                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee23() {
                                    var n, s;
                                    return _regeneratorRuntime().wrap(
                                      function _callee23$(_context36) {
                                        while (1)
                                          switch ((_context36.prev = _context36.next)) {
                                            case 0:
                                              _context36.t0 = fetch;
                                              _context36.next = 3;
                                              return _this23.g.$getModelJsonUri();
                                            case 3:
                                              _context36.t1 = _context36.sent;
                                              _context36.next = 6;
                                              return (0, _context36.t0)(_context36.t1);
                                            case 6:
                                              n = _context36.sent;
                                              _context36.prev = 7;
                                              _context36.next = 10;
                                              return n.json();
                                            case 10:
                                              return _context36.abrupt('return', _context36.sent);
                                            case 13:
                                              _context36.prev = 13;
                                              _context36.t2 = _context36['catch'](7);
                                              s = 'Failed to parse model JSON.';
                                              throw new Error(s);
                                            case 17:
                                            case 'end':
                                              return _context36.stop();
                                          }
                                      },
                                      _callee23,
                                      null,
                                      [[7, 13]],
                                    );
                                  }),
                                );
                                function modelJsonLoaderFunc() {
                                  return _modelJsonLoaderFunc.apply(this, arguments);
                                }
                                return modelJsonLoaderFunc;
                              })(),
                              weightsLoaderFunc: (function () {
                                var _weightsLoaderFunc = _asyncToGenerator(
                                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee24() {
                                    return _regeneratorRuntime().wrap(function _callee24$(
                                      _context37,
                                    ) {
                                      while (1)
                                        switch ((_context37.prev = _context37.next)) {
                                          case 0:
                                            _context37.t0 = fetch;
                                            _context37.next = 3;
                                            return _this23.g.$getWeightsUri();
                                          case 3:
                                            _context37.t1 = _context37.sent;
                                            _context37.next = 6;
                                            return (0, _context37.t0)(_context37.t1);
                                          case 6:
                                            _context37.next = 8;
                                            return _context37.sent.arrayBuffer();
                                          case 8:
                                            return _context37.abrupt('return', _context37.sent);
                                          case 9:
                                          case 'end':
                                            return _context37.stop();
                                        }
                                    }, _callee24);
                                  }),
                                );
                                function weightsLoaderFunc() {
                                  return _weightsLoaderFunc.apply(this, arguments);
                                }
                                return weightsLoaderFunc;
                              })(),
                            })),
                            this.j),
                          );
                        case 10:
                        case 'end':
                          return _context38.stop();
                      }
                  },
                  _callee25,
                  this,
                );
              }),
            );
            function p() {
              return _p2.apply(this, arguments);
            }
            return p;
          })(),
        },
        {
          key: 'q',
          value: function q(t) {
            switch (t.languageId) {
              case 'js':
              case 'html':
              case 'json':
              case 'ts':
              case 'css':
              case 'py':
              case 'xml':
              case 'php':
                t.confidence += Y.b;
                break;
              case 'cpp':
              case 'sh':
              case 'java':
              case 'cs':
              case 'c':
                t.confidence += Y.c;
                break;
              case 'bat':
              case 'ini':
              case 'makefile':
              case 'sql':
              case 'csv':
              case 'toml':
                t.confidence -= Y.d;
                break;
              default:
                break;
            }
            return t;
          },
        },
        {
          key: 'r',
          value: function r(t) {
            var _this = this;
            return _wrapAsyncGenerator(
              /*#__PURE__*/ _regeneratorRuntime().mark(function _callee26() {
                var r, n, i, s, _iterator37, _step37, o;
                return _regeneratorRuntime().wrap(
                  function _callee26$(_context39) {
                    while (1)
                      switch ((_context39.prev = _context39.next)) {
                        case 0:
                          if (!_this.k) {
                            _context39.next = 2;
                            break;
                          }
                          return _context39.abrupt('return');
                        case 2:
                          _context39.prev = 2;
                          _context39.next = 5;
                          return _awaitAsyncGenerator(_this.p());
                        case 5:
                          r = _context39.sent;
                          _context39.next = 12;
                          break;
                        case 8:
                          _context39.prev = 8;
                          _context39.t0 = _context39['catch'](2);
                          console.log(_context39.t0), (_this.k = !0);
                          return _context39.abrupt('return');
                        case 12:
                          _context39.prev = 12;
                          _context39.next = 15;
                          return _awaitAsyncGenerator(r.runModel(t));
                        case 15:
                          n = _context39.sent;
                          _context39.next = 21;
                          break;
                        case 18:
                          _context39.prev = 18;
                          _context39.t1 = _context39['catch'](12);
                          console.warn(_context39.t1);
                        case 21:
                          if (!(!n || n.length === 0 || n[0].confidence < Y.a)) {
                            _context39.next = 23;
                            break;
                          }
                          return _context39.abrupt('return');
                        case 23:
                          i = _this.q(n[0]);
                          if (!(i.confidence < Y.a)) {
                            _context39.next = 26;
                            break;
                          }
                          return _context39.abrupt('return');
                        case 26:
                          s = [i];
                          _iterator37 = _createForOfIteratorHelper(n);
                          _context39.prev = 28;
                          _iterator37.s();
                        case 30:
                          if ((_step37 = _iterator37.n()).done) {
                            _context39.next = 52;
                            break;
                          }
                          o = _step37.value;
                          if (!(o === i)) {
                            _context39.next = 34;
                            break;
                          }
                          return _context39.abrupt('continue', 50);
                        case 34:
                          if (
                            !((o = _this.q(o)), s[s.length - 1].confidence - o.confidence >= Y.a)
                          ) {
                            _context39.next = 46;
                            break;
                          }
                        case 35:
                          if (!s.length) {
                            _context39.next = 40;
                            break;
                          }
                          _context39.next = 38;
                          return s.shift();
                        case 38:
                          _context39.next = 35;
                          break;
                        case 40:
                          if (!(o.confidence > Y.a)) {
                            _context39.next = 43;
                            break;
                          }
                          s.push(o);
                          return _context39.abrupt('continue', 50);
                        case 43:
                          return _context39.abrupt('return');
                        case 46:
                          if (!(o.confidence > Y.a)) {
                            _context39.next = 49;
                            break;
                          }
                          s.push(o);
                          return _context39.abrupt('continue', 50);
                        case 49:
                          return _context39.abrupt('return');
                        case 50:
                          _context39.next = 30;
                          break;
                        case 52:
                          _context39.next = 57;
                          break;
                        case 54:
                          _context39.prev = 54;
                          _context39.t2 = _context39['catch'](28);
                          _iterator37.e(_context39.t2);
                        case 57:
                          _context39.prev = 57;
                          _iterator37.f();
                          return _context39.finish(57);
                        case 60:
                        case 'end':
                          return _context39.stop();
                      }
                  },
                  _callee26,
                  null,
                  [
                    [2, 8],
                    [12, 18],
                    [28, 54, 57, 60],
                  ],
                );
              }),
            )();
          },
        },
      ]);
    })()),
    (_Y.a = 0.2),
    (_Y.b = 0.05),
    (_Y.c = 0.025),
    (_Y.d = 0.5),
    _Y),
  ae = 'default',
  xn = '$initialize',
  ht;
(function (e) {
  (e[(e.Request = 0)] = 'Request'),
    (e[(e.Reply = 1)] = 'Reply'),
    (e[(e.SubscribeEvent = 2)] = 'SubscribeEvent'),
    (e[(e.Event = 3)] = 'Event'),
    (e[(e.UnsubscribeEvent = 4)] = 'UnsubscribeEvent');
})(ht || (ht = {}));
var Pn = /*#__PURE__*/ _createClass(function Pn(e, t, r, n, i) {
    _classCallCheck(this, Pn);
    (this.vsWorker = e),
      (this.req = t),
      (this.channel = r),
      (this.method = n),
      (this.args = i),
      (this.type = 0);
  }),
  dt = /*#__PURE__*/ _createClass(function dt(e, t, r, n) {
    _classCallCheck(this, dt);
    (this.vsWorker = e), (this.seq = t), (this.res = r), (this.err = n), (this.type = 1);
  }),
  Sn = /*#__PURE__*/ _createClass(function Sn(e, t, r, n, i) {
    _classCallCheck(this, Sn);
    (this.vsWorker = e),
      (this.req = t),
      (this.channel = r),
      (this.eventName = n),
      (this.arg = i),
      (this.type = 2);
  }),
  kn = /*#__PURE__*/ _createClass(function kn(e, t, r) {
    _classCallCheck(this, kn);
    (this.vsWorker = e), (this.req = t), (this.event = r), (this.type = 3);
  }),
  On = /*#__PURE__*/ _createClass(function On(e, t) {
    _classCallCheck(this, On);
    (this.vsWorker = e), (this.req = t), (this.type = 4);
  }),
  Tn = /*#__PURE__*/ (function () {
    function Tn(e) {
      _classCallCheck(this, Tn);
      (this.a = -1),
        (this.g = e),
        (this.b = 0),
        (this.c = Object.create(null)),
        (this.d = new Map()),
        (this.f = new Map());
    }
    return _createClass(Tn, [
      {
        key: 'setWorkerId',
        value: function setWorkerId(e) {
          this.a = e;
        },
      },
      {
        key: 'sendMessage',
        value: function sendMessage(e, t, r) {
          var _this24 = this;
          var n = String(++this.b);
          return new Promise(function (i, s) {
            (_this24.c[n] = {
              resolve: i,
              reject: s,
            }),
              _this24.o(new Pn(_this24.a, n, e, t, r));
          });
        },
      },
      {
        key: 'listen',
        value: function listen(e, t, r) {
          var _this25 = this;
          var n = null;
          var i = new K({
            onWillAddFirstListener: function onWillAddFirstListener() {
              (n = String(++_this25.b)),
                _this25.d.set(n, i),
                _this25.o(new Sn(_this25.a, n, e, t, r));
            },
            onDidRemoveLastListener: function onDidRemoveLastListener() {
              _this25.d['delete'](n), _this25.o(new On(_this25.a, n)), (n = null);
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
          var _this26 = this;
          var r = {
            get: function get(n, i) {
              return (
                typeof i == 'string' &&
                  !n[i] &&
                  (vt(i)
                    ? (n[i] = function (s) {
                        return _this26.listen(e, i, s);
                      })
                    : mt(i)
                      ? (n[i] = _this26.listen(e, i, void 0))
                      : i.charCodeAt(0) === 36 &&
                        (n[i] = /*#__PURE__*/ _asyncToGenerator(
                          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee27() {
                            var _len7,
                              s,
                              _key7,
                              _args40 = arguments;
                            return _regeneratorRuntime().wrap(function _callee27$(_context40) {
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
                                      _this26.sendMessage(e, i, s),
                                    );
                                  case 4:
                                  case 'end':
                                    return _context40.stop();
                                }
                            }, _callee27);
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
          var _this27 = this;
          var t = e.req;
          this.g.handleMessage(e.channel, e.method, e.args).then(
            function (n) {
              _this27.o(new dt(_this27.a, t, n, void 0));
            },
            function (n) {
              n.detail instanceof Error && (n.detail = me(n.detail)),
                _this27.o(new dt(_this27.a, t, void 0, me(n)));
            },
          );
        },
      },
      {
        key: 'l',
        value: function l(e) {
          var _this28 = this;
          var t = e.req,
            r = this.g.handleEvent(
              e.channel,
              e.eventName,
              e.arg,
            )(function (n) {
              _this28.o(new kn(_this28.a, t, n));
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
function mt(e) {
  return e[0] === 'o' && e[1] === 'n' && De(e.charCodeAt(2));
}
function vt(e) {
  return /^onDynamic/.test(e) && De(e.charCodeAt(9));
}
var Rn = /*#__PURE__*/ (function () {
    function Rn(e, t) {
      var _this29 = this;
      _classCallCheck(this, Rn);
      (this.d = new Map()),
        (this.f = new Map()),
        (this.a = t),
        (this.b = null),
        (this.c = new Tn({
          sendMessage: function sendMessage(r, n) {
            e(r, n);
          },
          handleMessage: function handleMessage(r, n, i) {
            return _this29.g(r, n, i);
          },
          handleEvent: function handleEvent(r, n, i) {
            return _this29.h(r, n, i);
          },
        }));
    }
    return _createClass(Rn, [
      {
        key: 'onmessage',
        value: function onmessage(e) {
          this.c.handleMessage(e);
        },
      },
      {
        key: 'g',
        value: function g(e, t, r) {
          if (e === ae && t === xn) return this.j(r[0], r[1], r[2]);
          var n = e === ae ? this.b : this.d.get(e);
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
          var n = e === ae ? this.b : this.d.get(e);
          if (!n) throw new Error('Missing channel '.concat(e, ' on worker thread'));
          if (vt(t)) {
            var i = n[t].call(n, r);
            if (typeof i != 'function')
              throw new Error('Missing dynamic event '.concat(t, ' on request handler.'));
            return i;
          }
          if (mt(t)) {
            var _i9 = n[t];
            if (typeof _i9 != 'function')
              throw new Error('Missing event '.concat(t, ' on request handler.'));
            return _i9;
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
            var _t14 = this.c.createProxyToRemoteChannel(e);
            this.f.set(e, _t14);
          }
          return this.f.get(e);
        },
      },
      {
        key: 'j',
        value: (function () {
          var _j2 = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee28(e, t, r) {
              var _this30 = this;
              return _regeneratorRuntime().wrap(
                function _callee28$(_context41) {
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
                          })(''.concat(Ge.asBrowserUri(''.concat(r, '.js')).toString(!0))).then(
                            function (i) {
                              if (((_this30.b = i.create(_this30)), !_this30.b))
                                throw new Error('No RequestHandler!');
                            },
                          )),
                        );
                      case 4:
                      case 'end':
                        return _context41.stop();
                    }
                },
                _callee28,
                this,
              );
            }),
          );
          function j(_x24, _x25, _x26) {
            return _j2.apply(this, arguments);
          }
          return j;
        })(),
      },
    ]);
  })(),
  ue = !1;
function Mn(e) {
  if (ue) return;
  ue = !0;
  var t = new Rn(
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
function In(e) {
  globalThis.onmessage = function (t) {
    ue || Mn(e);
  };
}
In($n);

//# debugId=004fa923-01a0-5c3a-8309-10368ae92ae1

<!--  -->
<template>
  <div class="">asynchronization</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    promiseTest() {
      promise
        .then((result) => {})
        .then((result) => {})
        .catch((error) => {})
        .finally(() => {});
      const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
        return getJSON("/post/" + id + ".json");
      });

      // ALL
      Promise.all(promises)
        .then(function (posts) {
          // ...
        })
        .catch(function (reason) {
          // ...
        });

      // RACE
      const p = Promise.race([
        fetch("/resource-that-may-take-a-while"),
        new Promise(function (resolve, reject) {
          setTimeout(() => reject(new Error("request timeout")), 5000);
        }),
      ]);
      p.then(console.log).catch(console.error);

      // allSettled
      // const promises = [
      //   fetch('/api-1'),
      //   fetch('/api-2'),
      //   fetch('/api-3'),
      // ];

      // await Promise.allSettled(promises);
      // removeLoadingIndicator();

      // ANY
      Promise.any([
        fetch("https://v8.dev/").then(() => "home"),
        fetch("https://v8.dev/blog").then(() => "blog"),
        fetch("https://v8.dev/docs").then(() => "docs"),
      ])
        .then((first) => {
          // 只要有一个 fetch() 请求成功
          console.log(first);
        })
        .catch((error) => {
          // 所有三个 fetch() 全部请求失败
          console.log(error);
        });

      // RESOLVE 将现有对象转为 Promise 对象
      Promise.resolve("foo");
      // 等价于
      new Promise((resolve) => resolve("foo"));

      // REJECT
      Promise.reject("出错了").catch((e) => {
        console.log(e === "出错了");
      });
      // true
    },
    asyncTest() {
      // async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
      async function getStockPriceByName(name) {
        const symbol = await getStockSymbol(name);
        const stockPrice = await getStockPrice(symbol);
        return stockPrice;
      }

      getStockPriceByName("goog").then(function (result) {
        console.log(result);
      });

      // async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
      async function getTitle(url) {
        let response = await fetch(url);
        let html = await response.text();
        return html.match(/<title>([\s\S]+)<\/title>/i)[1];
      }
      getTitle("https://tc39.github.io/ecma262/").then(console.log);

      async function f() {
        throw new Error("出错了");
      }

      f().then(
        (v) => console.log("resolve", v),
        (e) => console.log("reject", e)
      );
      //reject Error: 出错了
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
</style>
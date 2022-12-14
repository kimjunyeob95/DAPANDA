<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <select class="form-select">
            <option selected>선택</option>
            <option value="1">가습기</option>
            <option value="2">모니터</option>
            <option value="3">마우스/키보드</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xxl-3 col-lg-4 col-md-6 mb-3"
          :key="i"
          v-for="(product, i) in productList"
        >
          <div class="card">
            <a @click="gotoDetail(product.id)" style="cursor: pointer"
              ><img
                :src="`/download/${product.id}/${product.path}`"
                class="card-img-top"
                alt="..."
            /></a>
            <div class="card-body">
              <h5 class="card-title">{{ product.product_name }}</h5>
              <p class="card-text">
                <span class="badge bg-dark text-white me-1">{{
                  product.category1
                }}</span>
                <span class="badge bg-dark text-white me-1">{{
                  product.category2
                }}</span>
                <span class="badge bg-dark text-white">{{
                  product.category3
                }}</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    장바구니 담기
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-primary">
                    주문하기
                  </button>
                </div>
                <small class="text-dark"
                  >{{ product.product_price.toLocaleString('ko-KR') }}원</small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      productList: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getProductList()
  },
  unmounted() {},
  methods: {
    async getProductList() {
      this.productList = await this.$api('/api/productList', {})
    },
    gotoDetail(idx) {
      this.$router.push({ path: '/detail', query: { idx } })
    }
  }
}
</script>

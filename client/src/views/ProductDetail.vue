<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div
            id="carouselExampleIndicators"
            class="carousel carousel-dark slide"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div
                :class="`carousel-item ${i == 0 && 'active'}`"
                :key="i"
                v-for="(pImg, i) in productImage"
              >
                <img
                  :src="`/download/${productDetail.id}/${pImg.path}`"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                {{ productDetail.product_name }}
              </h5>
              <h5 class="card-title pt-3 pb-3 border-top">
                {{ productDetail.product_price?.toLocaleString('ko-KR') }}원
              </h5>
              <p class="card-text pt-3 border-top">
                <span class="badge bg-dark text-white me-1">{{
                  productDetail.category1
                }}</span>
                <span class="badge bg-dark text-white me-1">{{
                  productDetail.category2
                }}</span>
                <span class="badge bg-dark text-white">{{
                  productDetail.category3
                }}</span>
              </p>
              <p class="card-text pb-3">
                배송비
                {{ productDetail.delivery_price?.toLocaleString('ko-KR') }}원 |
                도서산간(제주도) 배송비 추가
                {{
                  productDetail.add_delivery_price?.toLocaleString('ko-KR')
                }}원 | 택배배송 {{ productDetail.outbound_days }}일 이내 출고
                (주말,공휴일 제외)
              </p>
              <h5 class="card-title pt-3 pb-3 border-top">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <label class="col-form-label">구매수량</label>
                  </div>
                  <div class="col-auto">
                    <div class="input-group">
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="setCount('-')"
                        >-</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        style="width: 40px"
                        v-model="totalCount"
                      />
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="setCount('+')"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
              </h5>
              <div class="row pt-3 pb-3 border-top">
                <div class="col-6">
                  <h3>총 상품 금액</h3>
                </div>
                <div class="col-6" style="text-align: right">
                  <h3>
                    {{
                      (
                        totalCount * productDetail.product_price
                      )?.toLocaleString('ko-KR')
                    }}원
                  </h3>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-grid col-6 p-1">
                  <button type="button" class="btn btn-lg btn-dark">
                    장바구니 담기
                  </button>
                </div>
                <div class="d-grid col-6 p-1">
                  <button type="button" class="btn btn-lg btn-danger">
                    주문하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img
            :src="`/download/${productDetail.id}/${productDetail.path}`"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      productId: 0,
      productDetail: {},
      productImage: [],
      totalCount: 1
    }
  },
  setup() {},
  created() {
    this.productId = this.$route.query.idx
    this.fn_productDetail(this.productId)
    this.fn_productImage(this.productId)
  },
  mounted() {},
  unmounted() {},
  methods: {
    async fn_productDetail() {
      let productDetail = await this.$api('/api/productDetail', {
        param: [this.productId]
      })
      if (productDetail.length > 0) {
        this.productDetail = productDetail[0]
      }
    },
    async fn_productImage() {
      this.productImage = await this.$api('/api/productMainImages', {
        param: [this.productId]
      })
    },
    setCount(type) {
      if (type == '+') {
        this.totalCount++
      } else if (type == '-') {
        if (this.totalCount > 1) {
          this.totalCount--
        }
      }
    }
  }
}
</script>

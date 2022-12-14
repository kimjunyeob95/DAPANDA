module.exports = {
  productList: {
    query: `select t1.*, t2.path, t3.category1, t3.category2, t3.category3 
    from t_product t1, t_image t2, t_category t3
    where t1.id = t2.product_id and t2.type = 1 and t1.category_id = t3.id`,
  },
  productList2: {
    query: `SELECT p.*,c.category1,c.category2,c.category3,i.path FROM t_product AS p
    JOIN t_category AS c ON p.category_id=c.id
    LEFT JOIN t_image AS i ON p.id=i.product_id AND i.type=1`,
  },
  productDetail: {
    query: `select t1.*, t2.path, t3.category1, t3.category2, t3.category3 
    from t_product t1, t_image t2, t_category t3
    where t1.id = ? and t1.id = t2.product_id and t2.type = 3 and t1.category_id = t3.id`,
  },
  productMainImages: {
    query: `select * from t_image where product_id = ? and type = 2`,
  },
  productInsert: {
    query: `insert into t_product set ?`,
  },
  productImageInsert: {
    query: `insert into t_image set ?`,
  },
  imageList: {
    query: `select * from t_image where product_id=?`,
  },
  imageDelete: {
    query: `delete from t_image where id=?`,
  },
  productDelete: {
    query: `delete from t_product where id=?`,
  },
  categoryList: {
    query: `select * from t_category`,
  },
  sellerList: {
    query: `select * from t_seller`,
  },
  signUp: {
    query: `insert into t_user set ? on duplicate key update ?`,
  },
};

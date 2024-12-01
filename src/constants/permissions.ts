export const PERMISSIONS = {
  qlsp: ['view_order', 'view_product', 'view_sub', 'view_order_info', 'view_payment_info', 'view_report', 'edit_product', 'remove_product', 'add_product', 'export_product', 'view_report_box', 'view_report_revenue', 'view_staff','view_seo_link','view_reviews','view_tools','view_cate_articles','manage_cxp'],
  dvkh_lead: ['view_discount', 'view_order', 'export_order', 'view_customer', 'view_product', 'view_sub', 'view_order_title', 'view_order_info', 'view_payment_info', 'view_order_status', 'view_shipping_info', 'view_order_customer', 'view_order_customer_name', 'view_order_customer_address', 'view_order_customer_email', 'view_order_customer_phone', 'view_report', 'edit_order', 'edit_customer', 'edit_product', 'edit_sub', 'view_report_revenue', 'view_report_box', 'view_report_order', 'view_report_shipping', 'view_report_payment', 'view_report_plan', 'view_review', 'publish_review', 'remove_review', 'view_article', 'edit_article','view_staff','view_seo_link','view_reviews','view_tools','view_cate_articles','manage_cxp'],
  dvkh_member: ['view_discount', 'view_order', 'view_customer', 'view_product', 'view_sub', 'view_order_title', 'view_order_info', 'view_payment_info', 'view_order_status', 'view_shipping_info', 'view_order_customer', 'view_order_customer_name', 'view_order_customer_address', 'view_order_customer_email', 'view_order_customer_phone', 'view_report', 'edit_order', 'edit_customer', 'edit_product', 'edit_sub', 'view_report_box', 'view_report_order', 'view_report_shipping', 'view_report_payment', 'view_report_plan', 'view_review', 'publish_review', 'view_article', 'edit_article', 'view_staff','view_seo_link','view_reviews','view_tools','view_cate_articles','manage_cxp'],
  tckt_lead: ['view_order', 'view_order_title', 'view_order_status', 'view_order_customer', 'view_order_customer_name', 'view_order_info', 'view_payment_info', 'view_shipping_info', 'view_sub', 'view_report', 'edit_order', 'edit_sub', 'view_report_revenue', 'view_report_box', 'view_report_order', 'view_report_shipping', 'view_report_payment', 'view_report_plan', 'view_staff','view_seo_link','view_reviews','view_tools','view_cate_articles','manage_cxp'],
  tckt_member: ['view_order', 'view_order_title', 'view_order_status', 'view_order_customer', 'view_order_customer_name', 'view_order_info', 'view_payment_info', 'view_shipping_info', 'view_sub', 'view_report', 'view_report_revenue', 'view_report_box', 'view_report_order', 'view_report_shipping', 'view_report_payment', 'view_report_plan', 'view_staff','view_seo_link','view_reviews','view_tools','view_cate_articles','manage_cxp'],
  mkt_lead: ['view_page', 'view_article', 'edit_page', 'edit_article', 'remove_article', 'view_discount', 'view_order', 'export_order', 'view_customer', 'view_product', 'view_sub', 'view_order_title', 'view_order_info', 'view_payment_info', 'view_order_status', 'view_shipping_info', 'view_order_customer', 'view_order_customer_name', 'view_order_customer_address', 'view_order_customer_email', 'view_order_customer_phone', 'view_report', 'edit_order', 'edit_customer', 'edit_product', 'edit_sub', 'view_report_revenue', 'view_report_box', 'view_report_order', 'view_report_shipping', 'view_report_payment', 'view_report_plan', 'view_review', 'publish_review', 'remove_review', 'view_staff', 'manager_article','view_seo_link','view_reviews','view_tools','view_cate_articles','manage_cxp'],
  mkt_member: ['view_product', 'view_page', 'view_article', 'edit_page', 'edit_article', 'remove_article', 'view_order', 'view_sub', 'view_customer', 'export_customer', 'view_order_info', 'view_order_customer', 'view_order_customer_name', 'view_order_customer_address', 'view_order_customer_email', 'view_order_customer_phone', 'view_report', 'view_report_box', 'view_report_payment', 'view_report_plan', 'view_staff', 'manager_article','view_seo_link','view_reviews','view_tools','view_cate_articles','manage_cxp'],
  mkt_content_member: ['view_article', 'edit_article', 'content_member_article'],
  qlvh: ['all'],
  admin: ['all']
}


// Type cho role
export type Role = keyof typeof PERMISSIONS

// Type cho permission
export type Permission = typeof PERMISSIONS[Role][number] 
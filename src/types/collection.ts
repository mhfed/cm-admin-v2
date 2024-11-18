export type Collection = {
    _id: string
    title: string
    seo_alias: string
    parent?: string
  childrens?: Collection[]
}

class ProductCreateRequestDTO {
  constructor(
    public name: string,
    public category_id: BigInt,
    public description: string,
    public price: BigInt,
    public urls: string[]
  ) {}
}

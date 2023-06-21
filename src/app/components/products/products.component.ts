import { Component } from '@angular/core';
import { Product } from 'src/app/Product';
import axios from 'axios';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // A 'products' é um array para armazenar a lista de produtos que será buscada da API.
  products: Product[] = [];

  // A 'filteredProducts' é um array para armazenar a lista de produtos filtrados por categoria.
  filteredProducts: Product[] = [];

  // O 'ngOnInit' é um método do ciclo de vida do componente que é chamado automaticamente quando o componente é inicializado.
  ngOnInit(): void {
    // Chamando a função 'fetchProducts' para buscar a lista de produtos da API.
    this.fetchProducts();
  }

  // A 'fetchProducts' é uma função assíncrona que busca a lista de produtos da API.
  async fetchProducts() {
    try {
      // Usando o 'axios' para fazer uma solicitação GET para a API.
      const response = await axios.get<Product[]>('https://6492f037428c3d2035d0f153.mockapi.io/api/trevo/products');

      // Atribuindo a lista de produtos buscada da API à variável 'products'.
      this.products = response.data;
    } catch (error) {
      // Em caso de erro, o erro é registrado no console.
      console.error("There was an error fetching the products!", error);
    }
  }

  // A 'showCategory' é uma função que filtra a lista de produtos por categoria.
  showCategory(category: string) {
    // A função 'filter' é usada para filtrar a lista de produtos.
    // Apenas os produtos cuja categoria corresponda à categoria fornecida serão incluídos na lista 'filteredProducts'.
    this.filteredProducts = this.products.filter(product => product.category === category);
  }
}

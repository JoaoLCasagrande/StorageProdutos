import { Component } from '@angular/core';
import { Produto } from '../models/produto';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaProdutos: Produto[] = [];

  constructor(private storageService: StorageService) {}

  async buscarProdutos() {
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter() {
    this.buscarProdutos();
  }

}

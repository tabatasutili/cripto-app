import { Component } from '@angular/core';
import { CoinModel, CoinsModel } from 'src/app/Models/CoinModel';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  coin: CoinModel;
  coins: CoinsModel;
  message: string;

  constructor(private nativeStorage: NativeStorage) {
    this.coin = new CoinModel("Bitcoin", "https://www.bussoladoinvestidor.com.br/wp-content/uploads/2015/04/bitcoin20.png", 19.969);
    this.coins = new CoinsModel([this.coin]); 
    console.log("aba de salvos");
    this.nativeStorage.keys().then((keys) => {
      return Promise.all(keys.map(k => this.getSavedCoin(k)));
    });

  }

  async getSavedCoin(key: string) {
    console.log(key);

    
      this.nativeStorage.getItem(key).then(val => {
        if (val) {
          this.coins.result.push(new CoinModel(val.name, val.idIcon, val.volume1hrsUsd));
          console.log(this.coin);
          
        }
        
      })
  }

  async removeSavedCoin(key: string) {
    this.nativeStorage.remove(key);
    window.location.reload();
    console.log("removida");
    window.location.href = `${window.location.protocol}//${window.location.host}`;

  }

}

import { Component } from '@angular/core';
import { CoinModel, CoinsModel } from 'src/app/Models/CoinModel';

import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

@Injectable({
  providedIn: 'root'
})

export class Tab1Page {
  coin: CoinModel;
  coins: CoinsModel;

  // url = 'https://rest.coinapi.io/v1/assets/';
  // apiKey = '5CE4FB4C-01E1-4E4F-9C63-02815F46C1FC'
  message: string;

  constructor(private nativeStorage: NativeStorage) {
    this.mock();
    // this.fetchCoins();
    //private http: HttpClient,
  }

  // fetchCoins() {
  //   const headers = { "X-CoinAPI-Key": '5CE4FB4C-01E1-4E4F-9C63-02815F46C1FC' };
  //   this.http.get<CoinsModel>( this.url, { headers }).pipe(map(data =>  {
  //     const res = data.json()
  //     console.log(data.result[0].name);
  //     console.log("aaaaaaaaaaaa")
  //   }));
    
    // .subscribe(data => {
    //   console.log(data[0].name)
    // })
  // }


  

  mock(): void {
    this.coin = new CoinModel("Bitcoin", "https://www.bussoladoinvestidor.com.br/wp-content/uploads/2015/04/bitcoin20.png", 19.969);
    this.coins = new CoinsModel([this.coin]); 
    // console.log(this.coins.result[0])
    this.coins.result.push(new CoinModel("Ethereum", "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png", 20.037));
    this.coins.result.push(new CoinModel("Tether", "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png", 1.661));
    this.coins.result.push(new CoinModel("USD Coin", "https://ripio-cms-us.s3.amazonaws.com/filer_public/2f/04/2f04e47b-b5f1-442a-a16e-e78332dcea7c/coin-usdc.svg", 1.0001));
    this.coins.result.push(new CoinModel("BNB", "https://assets-global.website-files.com/5e73a1e3ba24f2cd5dd2232a/620b31921bac94c44de5969d_bnb.png", 284.95));
    this.coins.result.push(new CoinModel("Binance USD", "https://assets-global.website-files.com/5e73a1e3ba24f2cd5dd2232a/620b31921bac94c44de5969d_bnb.png", 0.998637));
    this.coins.result.push(new CoinModel("Solana", "https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png", 33.11));
    this.coins.result.push(new CoinModel("Polkadot", "https://s2.coinmarketcap.com/static/img/coins/200x200/6636.png", 7.64));

    
  }

  

  async setCoin(key: string, coin: CoinModel) {
    this.nativeStorage.keys
    console.log("adicionou");
        this.nativeStorage.setItem(key, coin).then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
      }

    async removeSavedCoin(key: string) {
      this.nativeStorage.remove(key);
      console.log("removida");
    }


}

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class AppHelperService {

	/**
	* Url to get image from tmdb api
	**/
	baseUrl: string = "http://image.tmdb.org/t/p/w300/";

    
    constructor(){}


	/**
	* Check it list is empty
	* @param {list} list to be checked
	* @return boolean value of empty state
	**/
	isEmpty(list): boolean{
		let result: boolean = true;
		if(list){
			result = list.length == 0;
		}
		return result;
	}


}
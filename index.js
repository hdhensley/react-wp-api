//jshint esnext:true
'use strict';

let webUrl = "";
let token = null;
class WP {
    constructor(url, _token) {
        webUrl = url;
        if(_token){
            token = _token;
        }
    }

    _getCall(url){
        let headers = {
            'Cache-Control': 'no-cache'
        };

        if(token){
            headers.Authorization = 'Bearer ' + token;
        }

        return fetch(url,
            {
                method: "GET",
                headers
            })
            .then((response) => {
                return response.json();
            })
            .catch((ex) => {
                throw ex;
            }
        );
    }

    /** {id:2, search:'Ani'}  */
    Categories(data) {
        let url = webUrl + "/wp-json/wp/v2/categories";
        if (data) {
            if (data.search !== null && data.search !== '') {
                url = webUrl + "/wp-json/wp/v2/categories?search=" + data.search;
            }

            if (data.id !== null && data.id !== '') {
                url = webUrl + "/wp-json/wp/v2/categories/" + data.id;
            }
        }
        return this._getCall(url);
    }

    /** {id:2, category:4, search:'Ani'}  */
    Posts(data) {
        let url = webUrl + "/wp-json/wp/v2/posts";
        if (data) {
            if (data.search !== null && data.search !== '') {
                url = webUrl + "/wp-json/wp/v2/posts?search=" + data.search;
            }

            if (data.category !== null && data.category !== '') {
                url = webUrl + "/wp-json/wp/v2/posts?categories=" + data.category;

                if (data.search !== null && data.search !== '')
                    url = url + "&search=" + data.search;
            }

            if (data.id !== null && data.id !== '') {
                url = webUrl + "/wp-json/wp/v2/posts/" + data.id;
            }
        }


        return this._getCall(url);
    }

    /** {id:2, search:'Ani'}  */
    Pages(data) {
        let url = webUrl + "/wp-json/wp/v2/pages";
        if (data) {
            if (data.search !== null && data.search !== '') {
                url = webUrl + "/wp-json/wp/v2/pages?search=" + data.search;
            }

            if (data.id !== null && data.id !== '') {
                url = webUrl + "/wp-json/wp/v2/pages/" + data.id;
            }
        }
        return this._getCall(url);
    }

    Media(data) {   
        let url = webUrl + "/wp-json/wp/v2/media";
        if (data) {
            if (data.search !== null && data.search !== '') {
                url = webUrl + "/wp-json/wp/v2/media?search=" + data.search;
            }

            if (data.id !== null && data.id !== '') {
                url = webUrl + "/wp-json/wp/v2/media/" + data.id;
            }
        }
        return this._getCall(url);
    }

    Comments(data) {   
        let url = webUrl + "/wp-json/wp/v2/comments?a=a";
        if (data) {
            if (data.search !== null && data.search !== '') {
                url = url + "&search=" + data.search;
            }
            
            if (data.post !== null && data.post !== '') {
                url = url + "&post=" + data.post;
            }

            if (data.id !== null && data.id !== '') {
                url = webUrl + "/wp-json/wp/v2/comment/" + data.id;
            }
        }
        return this._getCall(url);
    }

    CustomPosts(type, data){
        let url = webUrl + "/wp-json/wp/v2/" + type;
        if (data) {
            if (data.search !== null && data.search !== '') {
                url = webUrl + "/wp-json/wp/v2/" + type + "?search=" + data.search;
            }

            if (data.category !== null && data.category !== '') {
                url = webUrl + "/wp-json/wp/v2/" + type + "?categories=" + data.category;

                if (data.search !== null && data.search !== '')
                    url = url + "&search=" + data.search;
            }

            if (data.id !== null && data.id !== '') {
                url = webUrl + "/wp-json/wp/v2/" + type + "/" + data.id;
            }
        }


        return this._getCall(url);
    }
}

export default WP;
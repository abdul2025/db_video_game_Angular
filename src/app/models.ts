export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    matacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatforms>;
    publishers: Array<Publishers>;
    ratings: Array<Ratings>;
    screenshots: Array<Screenshots>;
    trailers:Array<Trailer>;


}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
    name: string
} 

interface ParentPlatforms {
    platform: {
        name: string;
        slug: string;
    }
}


interface Publishers {
    platform: {
        name: string;
    }
}

interface Ratings {
    platform: {
        name: string;
        count:number;
        title:string;
    }
}

interface Screenshots {
    image: string;

}


interface Trailer {
    data:{
        max: string;
    };
    
}
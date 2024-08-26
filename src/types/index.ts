export interface IPost {
    uuid: string;
    title: string;
    first: string;
    last: string;
    fullname: string;
    username: string;
    thumbnail: string;
}

export interface IBasetListPost {
    data: IPost[];
    isLoading: boolean;
}

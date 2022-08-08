

 class FilterState {
    get page(): number {
        return this._page;
    }

    set page(value: number) {
        this._page = value;
    }
    get page_size(): number {
        return this._page_size;
    }

    set page_size(value: number) {
        this._page_size = value;
    }

    private _page_size = 10;
    private _page = 1




}

export default new FilterState()
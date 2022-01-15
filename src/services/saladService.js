class SaladService {
    _apiBase = 'http://test-job.webatom.ru';

    async getResourse(link) {
        const res = await fetch(`${this._apiBase}${link}`);

        if (!res.ok) {
            console.log(`Couldn't fetch salads in ${this._apiBase}, error: ${res.status}`);
        }

        return await res.json();
    }

    async getAllSalads() {
        this.getResourse('/salads');
    }

    async getSalad(id) {
        this.getResourse(`/salads/${id}`);
    }

}
export default SaladService
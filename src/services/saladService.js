class SaladService {
    _apiBase = 'http://test-job.webatom.ru';

    async getResourse(link) {
        const res = await fetch(`${this._apiBase}${link}`);

        if (!res.ok) {
            throw new Error(`Could not fetch salads in: ${link} , received ${res.status}`);
        }

        return await res.json();
    }

    async getAllSalads() {
        return await this.getResourse('/salads');
    }

    async getSalad(id) {
        return await this.getResourse(`/salads/${id}`);
    }

}
export default SaladService
class MoleculeService {
    _apiBase = 'http://test-job.webatom.ru';

    async getResourse(link) {
        const res = await fetch(`${this._apiBase}${link}`);

        if (!res.ok) {
            console.log(`Couldn't fetch ${this._apiBase}, error: ${res.status}`);
        }

        return await res.json();
    }

    async getAllMolecules() {
        this.getResourse('/molecules');
    }

    async getMolecule(id) {
        this.getResourse(`/molecules/${id}`);
    }
}
export default MoleculeService
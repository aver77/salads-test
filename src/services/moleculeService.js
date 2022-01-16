class MoleculeService {
    _apiBase = 'http://test-job.webatom.ru';

    async getResourse(link) {
        const res = await fetch(`${this._apiBase}${link}`);

        if (!res.ok) {
            throw new Error(`Could not fetch molecules in: ${link} , received ${res.status}`);
        }

        return await res.json();
    }

    async getAllMolecules() {
        return await this.getResourse('/molecules');
    }

    async getMolecule(id) {
        return await this.getResourse(`/molecules/${id}`);
    }
}
export default MoleculeService
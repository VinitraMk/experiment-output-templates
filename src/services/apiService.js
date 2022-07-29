const buildApiUrl = urlEndpoint => `${window.location.origin}/${urlEndpoint}`

const getJsonData = async(url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
export const getModelConfig = async() => {
    const url = buildApiUrl('data/model_details.json');
    return await getJsonData(url);
}

export const getPackageDetails = async() => {
    const url = buildApiUrl('data/package.json');
    return await getJsonData(url);
}

export const getModelDetails = async(filename) => {
    const url = buildApiUrl(`data/${filename}`);
    return await getJsonData(url);
}

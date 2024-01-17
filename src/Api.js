import axios from 'axios';

const searchImages = async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID Ft_Jn3oFdRYk4FwWhDj8XLAJ102uqaoKtgk0kOon3So',
        },
        params:{
            query:term,
        },
    });
    return response.data.results
}
export default searchImages;
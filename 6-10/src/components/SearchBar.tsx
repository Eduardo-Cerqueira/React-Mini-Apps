import { Input, Pagination } from "antd";
import { MovieDb, MovieResultsResponse } from "moviedb-promise";
import { useEffect, useState } from "react";
import MoviePage from "./MoviePage";

const { Search } = Input;

type SearchBarProps = {
    movieDbConnection: MovieDb
}

export default function SearchBar({ movieDbConnection }: SearchBarProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<MovieResultsResponse>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [search, setSearch] = useState<string>();

    const fetchMovie = async () => {
        if (search) {
            try {
                const response = await movieDbConnection.searchMovie({query: search, page: currentPage})
                setResponse(response)
                console.log(response)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchMovie();
    }, [currentPage]);

    const onSearch = (value: string) => {
        if (value) {
            setSearch(value)
            setLoading(true)
            setTimeout(() => {
                fetchMovie();
            }, 100);
        }
    };
    
    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', height: '35px', marginBottom: '25px' }}>
            <Search 
                placeholder="input search text" onInput={(e) => onSearch(e.currentTarget.value)} 
                onSearch={onSearch} style={{ width: '50%' }} 
                loading={loading} 
                enterButton 
            />
        </div>
        <div style={{ height: '85vh' }}>
            {response && response.total_pages &&
            <div>
                <MoviePage movies={response}/>
                <Pagination onChange={setCurrentPage} defaultCurrent={1} total={response.total_pages * 10} style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '50px' }} />
            </div>
            }
        </div>
        </>
    )
}
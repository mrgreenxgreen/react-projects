import React, {ChangeEvent, SyntheticEvent, useState} from "react";

interface Props 
{
  onSearchSubmit:(e:SyntheticEvent) => void;
  search:string | undefined;
  handleSearchChange:(e:ChangeEvent<HTMLInputElement>) => void;
};

const Search:React.FC<Props> = ({onSearchSubmit,search,handleSearchChange}:Props):JSX.Element => {
    // const [search, setSearch] = useState<string>("");

    // const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    //     setSearch(e.target.value);
    //     console.log(e.target.value);
    // }



    // const onClick = (e:SyntheticEvent)=>{
    //     console.log(e);
    // }

  return (
    // <div>
    //     <input value={search} onChange={(e)=>handleChange(e)} />
    //     <button onClick={((e) => onClick(e))} >Click</button>
    // </div>
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form>
    </>
  )
}

export default Search
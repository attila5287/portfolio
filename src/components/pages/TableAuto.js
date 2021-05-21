import React from 'react';
import {Animated} from 'react-animated-css';
import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from '../table/TableHeader';
import TableBody from '../table/TableBody';
import helpers from '../../utils/helpers';
// import sample from '../../seeds/sample';
import API from '../../utils/API';
import SearchFullName from '../search/SearchFullName';
import SearchAddress from '../search/SearchAddress';
import SearchCountry from '../search/SearchCountry';

function TableAuto() {
  // const [ rows, setRows ] = useState( helpers.prep( sample ) );
  const [search,
    setSearch] = useState({FullName: '', Address: '', Country: ''});
  const [rows,
    setRows] = useState([]);
  const [initial,
    setInitial ] = useState( [] );
  
  
  const [sorted,
    setSorted ] = useState( "" );
  
  
  useEffect(() => {
    API
      .fetch(20)
      .then( ( res ) => {
        console.log( `res`, res )
        const org = helpers.prep(res);
        setRows( org );
        console.log( `org.length`, org.length )
        console.log( `rows.length`, rows.length )
        if (org.length===20) {
          setInitial( org );
          console.log( `>> ---org`, org );
          console.log( `>> ---initial`, initial );
          if ( initial.length<1 && org.length ===20) {
            setInitial( org );
            console.log( `>> ---initial`, initial );
            
          }

        }
      })
      .catch((err) => console.log(err));
  }, []);

  
  const handleSortBy = (event) => {
		const sortField = event.target.dataset.sortby;
		console.log(`>> sort by `, sortField);
		const sortedRows = rows.sort((a, b) => {
			if (b[sortField] > a[sortField]) {
				return -1;
			}
			if (a[sortField] > b[sortField]) {
				return 1;
			}
			return 0;
		});
		console.log(`sorted`, sortedRows);
		if (sorted == '') {
			setRows(sortedRows);
			setSorted('ASC');
    } else {
      if (sorted == 'ASC') {
        setRows( sortedRows.reverse() );
        setSorted( 'DSC' )
        
      } else {
        setRows(sortedRows);
        setSorted('ASC');
        
      }
    }
	};
  
  const handleInputChange = (event) => {
    const name = event.target.name;
    // console.log( `>> name`, name );

    const value = event.target.value.trim();
    console.log(`>> value`, value);
    const filterIcon = document.getElementById('filterIcon');
    const filterBy = document.getElementById('filterBy');
    const searchFor = document.getElementById( 'searchFor' );
    
    
    filterIcon.className = '';
    filterIcon.className = helpers.headIcons[name].slice(0, 
			helpers.headIcons[name].length-9);

    
    
    filterBy.innerText = '';
    filterBy.innerText = name;

    searchFor.classList.remove('d-none');
    searchFor.innerText = '';
    
    setSearch(search);
    search[name] = value;
    console.log(`search`, search)
    const filtered = rows.filter((row) =>
    row[name].toLowerCase().includes(value.toLowerCase())
		);
    setRows( filtered );
    
    searchFor.innerText = value + '(' + filtered.length + ')';
    
    console.log( `filtered.length`, filtered.length );
    
    
    if ( Object.keys( search ).map( k => search[ k ] ).join( '' ) === '' )
    {
      console.log(`search`, search)
      setRows( [] );
      setRows( initial );
      searchFor.classList.add = 'd-none';

      

    }
    
  };

  return (
		<div>
			<div className='text-center'>
				<div className='row align-items-center'>
					<div className='col-4 text-right'>
						<Animated
							animationIn='fadeInLeft'
							isVisible={true}
							animationInDelay={750}
							className='text-right'
						>
							<h1 className='title text-info'>
                <i className='fas fa-filter' id='filterIcon'>
                </i>
							</h1>
							<h2 className='text-lg mb-0 text-right'>
								<b> Filter By: </b>
								<b id='filterBy'> </b>
							</h2>
							<h1
								className='mt-1 bg-info rounded-xl text-light p-1 d-none'
								id='searchFor'
							></h1>
						</Animated>
						<Animated
							animationIn='bounceInDown'
							animationInDelay={500}
							isVisible={true}
						></Animated>
					</div>
					<div className='col-8 text-left'>
						<SearchFullName
							search={search['FullName']}
							handleInputChange={(event) => handleInputChange(event)}
						/>
						<SearchAddress
							search={search['Address']}
							handleInputChange={(event) => handleInputChange(event)}
						/>
						<SearchCountry
							search={search['Country']}
							handleInputChange={(event) => handleInputChange(event)}
						/>
					</div>
				</div>
			</div>
			<div className='container text-center m-0'>
				<Table striped bordered hover variant='info' className='m-0'>
					<TableHeader
						headings={helpers.headings}
						icons={helpers.headIcons}
						handleSortBy={(event) => handleSortBy(event)}
					/>
					<TableBody rows={rows} />
				</Table>
			</div>
		</div>
	);
}

export default TableAuto;

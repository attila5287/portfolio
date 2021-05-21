function TableBody ( props ) {
  return (
		<tbody>
			{props.rows.map((row, index) => (
				<tr key={index} className="py-0">
          <th scope="row" className="text-sm align-middle">
            <i className="text-info text-xl fab fa-app-store"></i>
							<b className="">{index + 1}</b>
					</th> 
					{Object.keys(row).map((key, idx) => {
						if (key.startsWith('image')) {
							return (
								<td key={idx} className='align-middle  py-1'>
									<img
										src={row[key]}
										alt='img'
										className='img-mini rounded-xl p-0'
									/>
								</td>
							);
						} else if (key === 'title'){
							return (
                <td key={ idx } className='text-lg text-capitalize align-middle  py-1'>
                  <b>
									{row[key]}
                  </b>
								</td>
							);
						} else if (key === 'desc'){
							return (
                <td key={ idx } className='align-middle  py-1'>
                  <i>
									{row[key]}
                  </i>
								</td>
							);
						} else if (key === 'url'){
							return (
                <td key={ idx } className='align-middle  py-1'>
                  <a href={row[key]}>
                    <i className='text-lg fas fa-external-link-alt text-primary'></i>
                  </a>
								</td>
							);
						} else if (key === 'lang'){
							return (
								<td key={idx} className='align-middle  py-1'>
									<i className={props.icons[row[key]]}></i>
								</td>
							);
						} else if (key === 'tags'){
							return (
								<td key={idx} className='text-sm align-middle'>
                  { row[ key ].split( ', ' ).map( t => {
                    return <i className='fas fa-tag text-primary'>{t}</i>
                  } ) }
								</td>
							);
						} else {
							return (
								<td key={idx} className='align-middle  py-1'>
									{row[key]}
								</td>
							);
						}
					})}
				</tr>
			))}
		</tbody>
	);
}
export default TableBody;


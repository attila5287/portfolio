const TableHeader = ( props ) => {
  //  console.log(`props`, props)
   return (
			<thead className="bg-transparent">
				<tr className="py-0">
					<th className="align-middle">
						<i className="text-2xl text-info fab fa-react fa-spin"></i>
					</th>

					{props.headings.map((th, index) => (
						<th className="align-middle" key={index}>
							<button
								className="btn btn-sm btn-outline-secondary py-0 add-anime my-0 w-100"
								type="button"
								data-sortby={th}
								onClick={props.handleSortBy}
							>
								<span
									data-sortby={th}
									className="text-2xl text-nowrap text-right text-info py-0"
								>
									<i data-sortby={th} className={props.icons[th]}></i>
									<i
										data-sortby={th}
										className="fas fa-sort text-reg text-dark mx-3"
									></i>
								</span>
							</button>
							<br />
							<span className="d-none text-secondary">{th}</span>
						</th>
					))}
				</tr>
			</thead>
		);
}
export default TableHeader;

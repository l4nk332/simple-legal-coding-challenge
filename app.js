const Dashboard = React.createClass({
	render: function() {
		let Grid = ReactBootstrap.Grid;
		let Row = ReactBootstrap.Row;
		let Col = ReactBootstrap.Col;

		return (
			<Grid>
				<Row>
					<Col xs={12}>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col sm={6}>
						<AttributePanel />
						<MatterInfoPanel />
					</Col>
					<Col sm={6}>
						<SummaryPanel />
						<AssignedVendorsPanel />
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<MatterBudgetPanel />
					</Col>
				</Row>
			</Grid>
		);
	}
});

const Header = React.createClass({
	render: function() {
		let PageHeader = ReactBootstrap.PageHeader;

		return (
			<PageHeader>
				General Corporate Matters
			</PageHeader>
		);
	}
});

// AttributePanel
// =============

const AttributePanel = React.createClass({
	getInitialState() {
		return {
			currentCategory: "show all",
			matterAttrs: [
				{
					title: "Matter Name",
					data: "General Corporate Matters",
					category: "general"
				},
				{
					title: "Dates Worked",
					data: "Aug. 4, 2015 - July 12, 2016",
					category: "time"
				},
				{
					title: "Total",
					data: "$329,777",
					category: "general"
				},
				{
					title: "Hours",
					data: "668.8",
					category: "time"
				},
				{
					title: "PO Number",
					data: null,
					category: "general"
				},
				{
					title: "Client Matter Id",
					data: "pac-4330",
					category: "client"
				},
				{
					title: "Matter Description",
					data: "General Corporate Matters",
					category: "client"
				},
				{
					title: "Matter Group",
					data: "Domestic Trademarks / Patents",
					category: "client"
				},
				{
					title: "Default Cost Code",
					data: "SL-0010",
					category: "general"
				},
				{
					title: "Default Legal Entity",
					data: null,
					category: "general"
				},
				{
					title: "Matter Free Type",
					data: null,
					category: "general"
				}
			]
		};
	},

	filterAttributes(e) {
		let category = e.target.innerText.toLowerCase();
		this.setState({currentCategory: category});
	},

	render() {
		let panelHeader = (<h3>Attributes</h3>);
		let Panel = ReactBootstrap.Panel;
		let ButtonToolbar = ReactBootstrap.ButtonToolbar;
		let DropdownButton = ReactBootstrap.DropdownButton;
		let MenuItem = ReactBootstrap.MenuItem;
		let Table = ReactBootstrap.Table;

		let rows = this.state.matterAttrs.filter((obj) => {
				if (this.state.currentCategory !== "show all") {
					return obj.category === this.state.currentCategory;
				} else {
					return obj;
				}
			}).map((row) => (
				<tr key={row.title}>
					<th>{row.title}</th>
					<td>{(row.data) ? row.data : (<a>+ add...</a>)}</td>
				</tr>
			));

		return (
			<Panel header={panelHeader} className="attributePanel">
				<ButtonToolbar>
					<DropdownButton title={
						this.state.currentCategory[0].toUpperCase() +
						this.state.currentCategory.slice(1)
					}>
						<MenuItem onClick={this.filterAttributes}>Show all</MenuItem>
						<MenuItem onClick={this.filterAttributes}>General</MenuItem>
						<MenuItem onClick={this.filterAttributes}>Time</MenuItem>
						<MenuItem onClick={this.filterAttributes}>Client</MenuItem>
					</DropdownButton>
				</ButtonToolbar>
				<Table>
					<tbody>
						{rows}
					</tbody>
				</Table>
			</Panel>
		);
	}
});

// AssignedVendorsPanel
// ====================

const AssignedVendorsPanel = React.createClass({
	render() {
		let Panel = ReactBootstrap.Panel;
		let assignedVendorsHeader = (<h3>Assigned Vendors</h3>)
		let Table = ReactBootstrap.Table;

		return (
			<Panel header={assignedVendorsHeader} className="assignedVendorsPanel">
				<div className="table-responsive">
					<Table striped>
						<thead>
							<tr>
								<th>Vendor Name</th>
								<th>Vendor Contact</th>
								<th>Billed to Date</th>
								<th>Timekeepers</th>
								<th>Firm Notifications</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Baker Potts</td>
								<td>Chris Doe</td>
								<td>$213,482</td>
								<td>12</td>
								<td>
									<a>Notify <span className="glyphicon glyphicon-envelope"></span></a>
								</td>
								<td>
									<span className="glyphicon glyphicon-remove"></span>
								</td>
							</tr>
							<tr>
								<td>Boston Legal</td>
								<td>Ashley White</td>
								<td>$90,381</td>
								<td>14</td>
								<td>
									<a>Notify <span className="glyphicon glyphicon-envelope"></span></a>
								</td>
								<td>
									<span className="glyphicon glyphicon-remove"></span>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</Panel>
		);
	}
});

// MatterBudgetPanel
// =================


const MatterBudgetPanel = React.createClass({
	render() {
		let Panel = ReactBootstrap.Panel;
		let matterBudgetHeader = (<h3>Approved Matter Budgets</h3>)
		let Table = ReactBootstrap.Table;

		return (
			<Panel header={matterBudgetHeader} className="matterBudgetPanel">
				<div className="table-responsive">
					<Table>
						<thead>
							<tr>
								<th>Type</th>
								<th>Vendor/Matter Group</th>
								<th>Name</th>
								<th>Start Date</th>
								<th>End Date</th>
								<th>Budget</th>
								<th>Amount Approved</th>
								<th>Amount Pending</th>
								<th>Percentage Approved</th>
								<th>Percentage w/ Pending</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>M</td>
								<td>Matter Budget</td>
								<td>Monthly Budget</td>
								<td>01/15</td>
								<td>12/16</td>
								<td>$350,000</td>
								<td>$25,887</td>
								<td>$303,650</td>
								<td>
									<div className="progress">
										<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={{width: "35%"}}>
											35%
										</div>
									</div>
								</td>
								<td>
									<div className="progress">
										<div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>
											65%
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</Panel>
		);
	}
});


// MatterInfoPanel
// ==============
const MatterInfoPanel = React.createClass({
	render: function() {
		let Panel = ReactBootstrap.Panel;
		let panelHeader = (<h3>Matter Information</h3>);
		let Tabs = ReactBootstrap.Tabs;
		let Tab = ReactBootstrap.Tab;

		return (
			<Panel header={panelHeader} className="matterInfoPanel">
				<Tabs defaultActiveKey={3} animation={false}>
					<Tab eventKey={1} title="People">
						<MatterInfoPeople />
					</Tab>
					<Tab eventKey={2} title="Status">
						<MatterInfoStatus />
					</Tab>
					<Tab eventKey={3} title="Invoices">
						<MatterInfoInvoice />
					</Tab>
					<Tab eventKey={4} title="Notes">
						<MatterInfoNotes />
					</Tab>
					<Tab eventKey={5} title="Updates">
						<MatterInfoUpdates />
					</Tab>
					<Tab eventKey={6} title="Attachments">
						<MatterInfoAttachments />
					</Tab>
				</Tabs>
			</Panel>
		);
	}
});

const MatterInfoPeople = React.createClass({
	render() {
		let Table = ReactBootstrap.Table;

		return (
			<Table className="matterInfoPeople">
				<tbody>
					<tr>
						<th>Lead Attorney</th>
						<td>Grey, Carolyn</td>
					</tr>
					<tr>
						<th>Approve Invoices</th>
						<td>Grey, Carolyn</td>
					</tr>
					<tr>
						<th>then...</th>
						<td>Moor, Karen</td>
					</tr>
					<tr>
						<th>More Approvers</th>
						<td><a href="#">+ next level</a></td>
					</tr>
					<tr>
						<th>View Invoices</th>
						<td>James, Anthony</td>
					</tr>
				</tbody>
			</Table>
		);
	}
});

const MatterInfoStatus = React.createClass({
	render() {
		let Table = ReactBootstrap.Table;

		return (
			<Table className="matterInfoStatus">
				<tbody>
					<tr>
						<th>Matter Status</th>
						<td>Open</td>
					</tr>
					<tr>
						<th>Open Date</th>
						<td>09/18/2016</td>
					</tr>
					<tr>
						<th>Close Date</th>
						<td><a>+ add...</a></td>
					</tr>
					<tr>
						<th>Last Activity</th>
						<td></td>
					</tr>
				</tbody>
			</Table>
		);
	}
});

const MatterInfoInvoice = React.createClass({
	render() {
		let Table = ReactBootstrap.Table;

		return (
			<Table striped hover className="matterInfoInvoice">
				<thead>
					<tr>
						<th>Date</th>
						<th>Number</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>09/16</td>
						<td>36939</td>
						<td>$22,844</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>2198459</td>
						<td>$1,560</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>6980359</td>
						<td>$1,690</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>1428173</td>
						<td>$22,844</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>36939150722</td>
						<td>$1,704</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>198459150629</td>
						<td>$1,665</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>428173150529</td>
						<td>$29,944</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>36939150322</td>
						<td>$2,390</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>198459150222</td>
						<td>$32,040</td>
					</tr>
					<tr>
						<td>09/16</td>
						<td>198459150129</td>
						<td>$2,593</td>
					</tr>
				</tbody>
			</Table>
		);
	}
});

const MatterInfoNotes = React.createClass({
	render() {
		let Well = ReactBootstrap.Well;

		return(
				<dl className="matterInfoNotes">
					<dt>09/16</dt>
					<dd>
						<Well>
							The client has filed for a subpoena provided by the Supreme Court of Justice. The defendant has 30 days from today to appear in court before being arrested.
						</Well>
					</dd>
					<dt>09/16</dt>
					<dd>
						<Well>
							The client has filed for a subpoena provided by the Supreme Court of Justice. The defendant has 30 days from today to appear in court before being arrested.
						</Well>
					</dd>
					<dt>09/16</dt>
					<dd>
						<Well>
							The client has filed for a subpoena provided by the Supreme Court of Justice. The defendant has 30 days from today to appear in court before being arrested.
						</Well>
					</dd>
				</dl>
		);
	}
});

const MatterInfoUpdates = React.createClass({
	render() {
		let Table = ReactBootstrap.Table;
		return (
			<Table className="matterInfoUpdates">
				<thead>
					<tr>
						<th>Date</th>
						<th>Update</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>09/21/16</td>
						<td>Account #34039583 has submitted an invoice</td>
					</tr>
					<tr>
						<td>09/19/16</td>
						<td>Account #6903986802 has submitted an invoice</td>
					</tr>
					<tr>
						<td>09/17/16</td>
						<td>Account #58928095 has submitted an invoice</td>
					</tr>
					<tr>
						<td>09/11/16</td>
						<td>Account #12498000 has submitted an invoice</td>
					</tr>
					<tr>
						<td>09/10/16</td>
						<td>Account #682793820 has submitted an invoice</td>
					</tr>
				</tbody>
			</Table>
		);
	}
});

const MatterInfoAttachments = React.createClass({
	render() {
		return (
				<div className='list-group matterInfoAttachments'>
					<a href="#" className="list-group-item">Legal Document #008</a>
					<a href="#" className="list-group-item">Legal Document #018</a>
					<a href="#" className="list-group-item">Legal Document #202</a>
					<a href="#" className="list-group-item">Legal Document #109</a>
					<a href="#" className="list-group-item">Legal Document #051</a>
					<a href="#" className="list-group-item">Legal Document #093</a>
				</div>
		);
	}
});


// Summary Panel
// ============
const SummaryPanel = React.createClass({
	render: function() {
		let Panel = ReactBootstrap.Panel;
		let summaryHeader = (<h3>Summary</h3>)

		return (
			<Panel header={summaryHeader} className="summaryPanel">
				<div className="chart-flex-wrapper">
					<div className="chart-ab-container">
						<h5 className="chart-header">Quarterly Spending</h5>
						<figure className="chart-a-legend">
							<span className="chart-a-key-a">Q1</span>
							<span className="chart-a-key-b">Q2</span>
							<span className="chart-a-key-c">Q3</span>
							<span className="chart-a-key-d">Q4</span>
						</figure>
						<ChartA />
					</div>
					<div className="chart-ab-container">
						<h5 className="chart-header">Spending Spread</h5>
						<ChartB />
					</div>
				</div>
				<div className="chart-c-container">
					<h5 className="chart-header">Monthly Spending</h5>
					<ChartC />
				</div>
			</Panel>
		);
	}
});

const ChartA = React.createClass({
	render() {
		const {ResponsiveContainer, PieChart, Pie, Cell, Legend} = Recharts;
		const colors = ["#7bcb59", "#3daadf", "#dc315b", "#dad43f"];
		const data = [
			{name: 'Q1', value: 50, fill: colors[0]},
			{name: 'Q2', value: 70, fill: colors[1]},
			{name: 'Q3', value: 80, fill: colors[2]},
			{name: 'Q4', value: 65, fill: colors[3]}
		];


		return (
			<ResponsiveContainer className="chartA">
				<PieChart width={300} height={300}>
					<Pie data={data} outerRadius={45} label />
				</PieChart>
			</ResponsiveContainer>
		);
	}
});

const ChartB = React.createClass({
	render() {
		const {ResponsiveContainer, Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} = Recharts;

		const data = [
			{ subject: 'Appearances', A: 120, B: 110, fullMark: 150 },
			{ subject: 'Travel', A: 98, B: 130, fullMark: 150 },
			{ subject: 'Bail', A: 86, B: 130, fullMark: 150 },
			{ subject: 'Paralegal', A: 99, B: 100, fullMark: 150 },
			{ subject: 'Filing', A: 85, B: 90, fullMark: 150 },
			{ subject: 'Legal', A: 65, B: 85, fullMark: 150 }
		];

		return (
			<ResponsiveContainer className="chartB">
				<RadarChart outerRadius={50} width={250} height={250} data={data}>
					<Radar name="Mike" dataKey="A" stroke="#318bb7" fill="#3daadf" fillOpacity={0.6} />
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" />
				</RadarChart>
			</ResponsiveContainer>
		);
	}
});

const ChartC = React.createClass({
	render() {
		const {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
		const data = [
			{name: 'Jan', amt: 10400, fill:'#3daadf'},
      {name: 'Feb', amt: 14210, fill:'#7bcb59'},
      {name: 'Mar', amt: 13290, fill:'#3daadf'},
      {name: 'Apr', amt: 12000, fill:'#7bcb59'},
      {name: 'May', amt: 13481, fill:'#3daadf'},
      {name: 'Jun', amt: 15101, fill:'#7bcb59'},
      {name: 'Jul', amt: 12140, fill:'#3daadf'},
      {name: 'Aug', amt: 11900, fill:'#7bcb59'},
      {name: 'Sep', amt: 15100, fill:'#3daadf'},
      {name: 'Oct', amt: 11900, fill:'#7bcb59'},
      {name: 'Nov', amt: 10100, fill:'#3daadf'},
      {name: 'Dec', amt: 12142, fill:'#7bcb59'},
		];

		return (
			<ResponsiveContainer className="chartC">
				<BarChart width={400} height={300} data={data} margin={{top:5, right: 30, left: 20, bottom: 5}}>
					<XAxis dataKey="name" />
					<YAxis />
					<Bar dataKey='amt' />
					<CartesianGrid strokeDasharray="1 1" />
				</BarChart>
			</ResponsiveContainer>
		);
	}
})

ReactDOM.render(<Dashboard />, document.getElementById('content'), function() {
	console.log("Rendered");
});

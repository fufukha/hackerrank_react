import React, {useState} from 'react';

const EmployeesList = ({ employees }) => {
  const [value, setValue] = useState('')

  const getEmployees = () => {
    const regex = new RegExp(value,"i")
    return employees.filter(employee => employee.name.match(regex))
  }

  return (
    <React.Fragment>
      <div className="controls">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="filter-input"
          data-testid="filter-input" />
      </div>
      <ul className="employees-list">
        { getEmployees().map(employee => (
          <li key={employee.name} data-testid="employee">{employee.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default EmployeesList;

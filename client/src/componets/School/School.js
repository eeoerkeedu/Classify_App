import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import { Auth } from "../../utils/auth";
import { QUERY_ALLSCHOOLS } from "../../utils/queries";
// import { ADD_SCHOOL, UPDATE_SCHOOL, REMOVE_SCHOOL } from "../../utils/mutation";

import { Form, Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./School.css";

function School() {
	const { data } = useQuery(QUERY_ALLSCHOOLS);
	const schools = data?.schools || [];

	return (
		<>
			<div className="schoolContainer">
				{schools.map((school) => (
					<Card key={school.id} style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>{school.name}</Card.Title>
							<Card.Text>
								Address: <br />
								{school.principle} <br />
								{school.budget} <br />
							</Card.Text>
							<ListGroup className="list-group-flush">
								<ListGroupItem>
									<Card.Link href={`"/"${school.id}"/departments"`}>
										Link to school's departments
									</Card.Link>
								</ListGroupItem>
								<ListGroupItem>
									<Card.Link href={`"/"${school.id}"/classrooms"`}>
										Link to school's classrooms
									</Card.Link>
								</ListGroupItem>
							</ListGroup>
							<Button variant="primary">Back to Home</Button>
						</Card.Body>
					</Card>
				))}

				<Form className="schoolForm">
					<Form.Group className="m-3" controlId="form">
						<Form.Label>School Name:</Form.Label>
						<Form.Control
							className="mb-2"
							type="input"
							placeholder="School Name"
						/>
						<Form.Label>Principal:</Form.Label>
						<Form.Control
							className="mb-2"
							type="input"
							placeholder="School Name"
						/>
						<Form.Label>Budget:</Form.Label>
						<Form.Control
							className="mb-2"
							type="input"
							placeholder="School Name"
						/>
						<Button variant="secondary" type="submit">
							ADD SCHOOL
						</Button>
						<Button variant="secondary" type="submit">
							Edit SCHOOL
						</Button>
					</Form.Group>
				</Form>
			</div>
		</>
	);
}
export default School;

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						{/* mayur-khachane */}
						<a
							rel='noopener noreferrer'
							href='https://github.com/MayuR397'
							target='_blank'
							className='mayur-khachane'
						>
							<i className='fas fa-user-circle'></i> mayur-khachane Github
						</a>
						
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer

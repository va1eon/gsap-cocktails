import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

import { openingHours, socials } from '../constants'

const Contact = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' })

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#contact',
				start: 'top center',
			},
			ease: 'power1.inOut',
		})

		timeline
			.from(titleSplit.words, {
				opacity: 0,
				yPercent: 100,
				stagger: 0.02,
			})
			.from('#contact h3, #contact p', {
				opacity: 0,
				yPercent: 100,
				stagger: 0.02,
			})
			.to('#f-right-leaf', {
				y: '-50',
				scale: 1.3,
				duration: 1,
				ease: 'power1.inOut',
			})
			.to(
				'#f-left-leaf',
				{
					y: '-50',
					scale: 1.3,
					duration: 1,
					ease: 'power1.inOut',
				},
				'<'
			)
	}, [])

	return (
		<footer id="contact">
			<img
				src="/images/footer-right-leaf.png"
				alt="leaf-right"
				id="f-right-leaf"
			/>

			<img
				src="/images/footer-left-leaf.png"
				alt="leaf-left"
				id="f-left-leaf"
			/>

			<div className="content">
				<h2>Where to Find Us</h2>

				<div>
					<h3>Visit Our Bar</h3>
					<p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
				</div>

				<div>
					<h3>Contact Us</h3>
					<p>
						<a href="tel:5551234567">(555) 123-4567</a>
					</p>
					<p>
						<a href="mailto:hello@cocktail.com">hello@cocktail.com</a>
					</p>
				</div>

				<div>
					<h3>Open Every Day</h3>
					{openingHours.map(({ time, day }) => (
						<p key={day}>
							{day} : {time}
						</p>
					))}
				</div>

				<div>
					<h3>Socials</h3>
					<div className="flex-center gap-5">
						{socials.map(({ name, icon, url }) => (
							<a key={name} href={url} target="_blank">
								<img
									src={icon}
									alt={name}
									rel="noopener noreferrer"
									aria-label={name}
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Contact

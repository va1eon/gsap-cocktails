import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Hero = () => {
	useGSAP(() => {
		const heroSplit = new SplitText('.title', { type: 'chars, words' })
		const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

		heroSplit.chars.forEach(char => char.classList.add('text-gradient'))

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: 'expo.out',
			stagger: 0.05,
		})

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.7,
			ease: 'expo.out',
			stagger: 0.05,
			delay: 1,
		})

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#hero',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
			})
			.to('.right-leaf', { y: 200 }, 0)
			.to('.left-leaf', { y: -200 }, 0)
	}, [])

	return (
		<>
			<section id="hero" className="noisy">
				<h1 className="title">MOJITO</h1>

				<img
					className="left-leaf"
					src="./images/hero-left-leaf.png"
					alt="left-leaf"
				/>

				<img
					className="right-leaf"
					src="./images/hero-right-leaf.png"
					alt="right-leaf"
				/>

				<div className="body">
					<div className="content">
						<div className="hidden space-y-5 md:block">
							<p>Cool. Crisp. Classic.</p>
							<p className="subtitle">
								Sip the Spirit <br /> of Summer
							</p>
						</div>

						<div className="view-cocktails">
							<p className="subtitle">
								Every cocktail on&nbsp;our menu is&nbsp;a&nbsp;blend
								of&nbsp;premium ingredients,creative flair, and timeless
								recipes&nbsp;&mdash; designed to&nbsp;delight your senses.
							</p>
							<a href="#cocktails">View Cocktails</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Hero

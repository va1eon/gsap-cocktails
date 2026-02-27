import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const About = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create('#about h2', {
			type: 'words',
		})

		const scrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#about',
				start: 'top center',
			},
		})

		scrollTimeline
			.from(titleSplit.words, {
				opacity: 0,
				duration: 1,
				yPercent: 100,
				ease: 'expo.out',
				stagger: 0.02,
			})
			.from(
				'.top-grid div, .bottom-grid div',
				{
					opacity: 0,
					duration: 1,
					ease: 'power1.inOut',
					stagger: 0.04,
				},
				'-=0.5'
			)
	}, [])

	return (
		<div id="about">
			<div className="mb-16 px-5 md:px-0">
				<div className="content">
					<div className="md:col-span-8">
						<p className="badge">Best cocktails</p>
						<h2>
							Where every detail matters
							<span className="text-white">-</span> from muddle to garnish
						</h2>
					</div>

					<div className="sub-content">
						<p>
							Every cocktails we&nbsp;serve is&nbsp;a&nbsp;reflection
							of&nbsp;our obsession with detail&nbsp;&mdash; from the first
							muddle to&nbsp;the final garnish. That care is&nbsp;what turns
							a&nbsp;simple drink into something truly memorable.
						</p>

						<div>
							<p className="font-bold md:text-3xl">
								<span>4.5</span>/5
							</p>
							<p className="text-white-100 text-sm">
								More than +12000 customers
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="top-grid">
				<div className="md:col-span-3">
					<div className="noisy" />
					<img src="/images/abt1.png" alt="grid-img-1" />
				</div>

				<div className="md:col-span-6">
					<div className="noisy" />
					<img src="/images/abt2.png" alt="grid-img-2" />
				</div>

				<div className="md:col-span-3">
					<div className="noisy" />
					<img src="/images/abt5.png" alt="grid-img-5" />
				</div>
			</div>

			<div className="bottom-grid">
				<div className="md:col-span-8">
					<div className="noisy" />
					<img src="/images/abt3.png" alt="grid-img-3" />
				</div>

				<div className="md:col-span-4">
					<div className="noisy" />
					<img src="/images/abt4.png" alt="grid-img-4" />
				</div>
			</div>
		</div>
	)
}
export default About

import { brand } from '../brand'

type LogoProps = {
	size?: number
	className?: string
}

export default function Logo({ size = 80, className }: LogoProps) {
	return (
		<div className={`inline-flex items-center gap-2 ${className ?? ''}`.trim()}>
			<img src={brand.logoPath} alt={brand.name} width={size} height={size} className="rounded-sm" />
			<span className="text-base font-semibold tracking-tight">{brand.name}</span>
		</div>
	)
}



import items from './MenuData.json';
import MenuItem from './MenuItem';
const Nar = () => {
	return (
	  <>
		<div className="desktopmenu text-center" id='jsDesktopMenu'>
			<nav aria-label="primary">
				<ul className="desktopmenu__level1">
					{items.map((item, index) =>
						<MenuItem key={index} item={item} />
					)}
				</ul>
			</nav>
		</div>
	  </>
	);
};
export default Nar;
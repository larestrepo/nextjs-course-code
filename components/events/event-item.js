import classes from "./event-item.module.css";
import Button from "../ui/button";

import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRigthIcon from "../icons/arrow-right-icon";

function EventItem(props) {
    const { title, image, date, location, id } = props;
    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',

    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={"/" + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{readableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    {/* <Link href={exploreLink}>Explore event</Link> */}
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRigthIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;
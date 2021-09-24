import works from '../libs/works.json';

const WorksGrid = () => {
    return (
        <section className="works-grid">
            {works.map(work => <WorkItem key={work.id} work={work} />)}
        </section>
    )

}

const WorkItem = ({ work }) => (
    <a className="works-grid-item" href={`#${work.id}`}>
        <img src={`/images/works/${work.id}/1.jpg`} alt={work.name} />
    </a>
)

export default WorksGrid;
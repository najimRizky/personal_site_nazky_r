import { Box, Heading } from '@chakra-ui/react';
// import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { listExperiences } from '../extras/allExperiences';

const Experiences = (props) => {
    const { ref, inView } = useInView();
    const id = "experiences"
    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
    }, [inView]);
    return (
        <Box id={id} ref={ref} mt="-1px" pb={10} px={[5]} pt={20} backgroundImage={props.bgBox} transition={props.transition} backgroundColor={props.theme} color={props.color}>
            <Box px={12} >
                <Heading color={props.color} mb={10} fontWeight={400} fontSize={50} >
                    EXPERIENCES
                </Heading>
            </Box>
            <VerticalTimeline lineColor={props.color}>
                {listExperiences.map((experience) =>
                    <VerticalTimelineElement
                    key={experience.id}
                    className="horizontal-timeline-element--work"
                    contentStyle={{ borderTop: `2px solid ${experience.topLine}`, borderBottom: "none", background: props.theme === "#FFFFFF" ? "#edeff2" : "#242c3d" }}
                    contentArrowStyle={{ borderRight: `7px solid  ${props.theme === "#FFFFFF" ? "#edeff2" : "#242c3d"}` }}
                    date={experience.date}
                    iconStyle={{ background: experience.type === "education" ? "#287099" : "#242c3d", color: '#fff'}}
                    icon={<FontAwesomeIcon icon={experience.icon} size="lg"/>}
                    >
                        <h1 className="vertical-timeline-element-title" style={{fontSize: "22px"}}>{experience.place}</h1>
                        <h4 className="vertical-timeline-element-subtitle" style={{fontSize: "18px"}}>{experience.division}</h4>
                        <p className="vertical-timeline-element-subtitle">{experience.job}</p>
                    </VerticalTimelineElement>
                )}
            </VerticalTimeline>
        </Box>
    );
}

const getRedux = (state) => {
    return {
        theme: state.theme,
        transition: state.transition,
        color: state.color,
        bgBox: state.bgBox
    }
}

export default connect(getRedux)(Experiences);
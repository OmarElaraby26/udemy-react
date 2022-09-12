export function getLastPathName() {
    const x = window.location.pathname.split('/');
    while (x.length > 0 && !x[x.length - 1]) {
        x.pop();
    }
    if (x.length) return x[x.length - 1];
    return '';
}
export async function fetchCourses() {
    const res = await fetch('http://localhost:3000/courses/');
    const data = res.json();
    return data;
}

export async function getCourseData(courseId) {
    const data = await fetchCourses(courseId);
    return data[courseId];
} 

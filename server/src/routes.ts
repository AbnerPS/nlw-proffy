import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const insertedUsersIds = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await db('classes').insert({
        subject,
        cost,
        user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
        return {
            week_day: scheduleItem.week_day,
            from: convertHourToMinutes(scheduleItem.from),
            to: convertHourToMinutes(scheduleItem.to),
            class_id,
        }
    });

    await db('class_schedule').insert(classSchedule);

    return response.send("Foi!!!");
});

export default routes;
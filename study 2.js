/**************** 
 * Study 2 *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'study 2';  // from the Builder filename that created this script
let expInfo = {
    'id_number': '',
    'condition': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([-1, -1, -1]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const intro_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(intro_loopLoopBegin(intro_loopLoopScheduler));
flowScheduler.add(intro_loopLoopScheduler);
flowScheduler.add(intro_loopLoopEnd);


const task_instruction_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(task_instruction_loopLoopBegin(task_instruction_loopLoopScheduler));
flowScheduler.add(task_instruction_loopLoopScheduler);
flowScheduler.add(task_instruction_loopLoopEnd);


const img_gen_trials_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(img_gen_trials_loopLoopBegin(img_gen_trials_loopLoopScheduler));
flowScheduler.add(img_gen_trials_loopLoopScheduler);
flowScheduler.add(img_gen_trials_loopLoopEnd);


flowScheduler.add(individual_diff_introRoutineBegin());
flowScheduler.add(individual_diff_introRoutineEachFrame());
flowScheduler.add(individual_diff_introRoutineEnd());
const scales_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(scales_loopLoopBegin(scales_loopLoopScheduler));
flowScheduler.add(scales_loopLoopScheduler);
flowScheduler.add(scales_loopLoopEnd);
















flowScheduler.add(demo_introRoutineBegin());
flowScheduler.add(demo_introRoutineEachFrame());
flowScheduler.add(demo_introRoutineEnd());
flowScheduler.add(ageRoutineBegin());
flowScheduler.add(ageRoutineEachFrame());
flowScheduler.add(ageRoutineEnd());
flowScheduler.add(born_usRoutineBegin());
flowScheduler.add(born_usRoutineEachFrame());
flowScheduler.add(born_usRoutineEnd());
flowScheduler.add(english_fluentRoutineBegin());
flowScheduler.add(english_fluentRoutineEachFrame());
flowScheduler.add(english_fluentRoutineEnd());
flowScheduler.add(sexRoutineBegin());
flowScheduler.add(sexRoutineEachFrame());
flowScheduler.add(sexRoutineEnd());
flowScheduler.add(raceRoutineBegin());
flowScheduler.add(raceRoutineEachFrame());
flowScheduler.add(raceRoutineEnd());
flowScheduler.add(politicsRoutineBegin());
flowScheduler.add(politicsRoutineEachFrame());
flowScheduler.add(politicsRoutineEnd());
flowScheduler.add(politics_scaleRoutineBegin());
flowScheduler.add(politics_scaleRoutineEachFrame());
flowScheduler.add(politics_scaleRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'condition4.xlsx', 'path': 'condition4.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'group_membership.xlsx', 'path': 'group_membership.xlsx'},
    {'name': 'police_fight_flight4.xlsx', 'path': 'police_fight_flight4.xlsx'},
    {'name': 'police_fight_flight2.xlsx', 'path': 'police_fight_flight2.xlsx'},
    {'name': 'condition2.xlsx', 'path': 'condition2.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'gblems_target.xlsx', 'path': 'gblems_target.xlsx'},
    {'name': 'condition3.xlsx', 'path': 'condition3.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'blocks_conditions.xlsx', 'path': 'blocks_conditions.xlsx'},
    {'name': 'police_fight_flight3.xlsx', 'path': 'police_fight_flight3.xlsx'},
    {'name': 'police_fight_flight.xlsx', 'path': 'police_fight_flight.xlsx'},
    {'name': 'individual_differences.xlsx', 'path': 'individual_differences.xlsx'},
    {'name': 'police_avoidance.xlsx', 'path': 'police_avoidance.xlsx'},
    {'name': 'condition1.xlsx', 'path': 'condition1.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'gblems_expanded.xlsx', 'path': 'gblems_expanded.xlsx'},
    {'name': 'police_fight_flight1.xlsx', 'path': 'police_fight_flight1.xlsx'},
    {'name': 'condition4.xlsx', 'path': 'condition4.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'group_membership.xlsx', 'path': 'group_membership.xlsx'},
    {'name': 'police_fight_flight4.xlsx', 'path': 'police_fight_flight4.xlsx'},
    {'name': 'police_fight_flight2.xlsx', 'path': 'police_fight_flight2.xlsx'},
    {'name': 'condition2.xlsx', 'path': 'condition2.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'gblems_target.xlsx', 'path': 'gblems_target.xlsx'},
    {'name': 'condition3.xlsx', 'path': 'condition3.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'blocks_conditions.xlsx', 'path': 'blocks_conditions.xlsx'},
    {'name': 'police_fight_flight3.xlsx', 'path': 'police_fight_flight3.xlsx'},
    {'name': 'police_fight_flight.xlsx', 'path': 'police_fight_flight.xlsx'},
    {'name': 'individual_differences.xlsx', 'path': 'individual_differences.xlsx'},
    {'name': 'police_avoidance.xlsx', 'path': 'police_avoidance.xlsx'},
    {'name': 'condition1.xlsx', 'path': 'condition1.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'gblems_expanded.xlsx', 'path': 'gblems_expanded.xlsx'},
    {'name': 'police_fight_flight1.xlsx', 'path': 'police_fight_flight1.xlsx'},
    {'name': 'condition4.xlsx', 'path': 'condition4.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'group_membership.xlsx', 'path': 'group_membership.xlsx'},
    {'name': 'police_fight_flight4.xlsx', 'path': 'police_fight_flight4.xlsx'},
    {'name': 'police_fight_flight2.xlsx', 'path': 'police_fight_flight2.xlsx'},
    {'name': 'condition2.xlsx', 'path': 'condition2.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'gblems_target.xlsx', 'path': 'gblems_target.xlsx'},
    {'name': 'condition3.xlsx', 'path': 'condition3.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'blocks_conditions.xlsx', 'path': 'blocks_conditions.xlsx'},
    {'name': 'police_fight_flight3.xlsx', 'path': 'police_fight_flight3.xlsx'},
    {'name': 'police_fight_flight.xlsx', 'path': 'police_fight_flight.xlsx'},
    {'name': 'individual_differences.xlsx', 'path': 'individual_differences.xlsx'},
    {'name': 'police_avoidance.xlsx', 'path': 'police_avoidance.xlsx'},
    {'name': 'condition1.xlsx', 'path': 'condition1.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'gblems_expanded.xlsx', 'path': 'gblems_expanded.xlsx'},
    {'name': 'police_fight_flight1.xlsx', 'path': 'police_fight_flight1.xlsx'},
    {'name': 'blocks_conditions.xlsx', 'path': 'blocks_conditions.xlsx'},
    {'name': 'condition4.xlsx', 'path': 'condition4.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'group_membership.xlsx', 'path': 'group_membership.xlsx'},
    {'name': 'police_fight_flight4.xlsx', 'path': 'police_fight_flight4.xlsx'},
    {'name': 'police_fight_flight2.xlsx', 'path': 'police_fight_flight2.xlsx'},
    {'name': 'condition2.xlsx', 'path': 'condition2.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'gblems_target.xlsx', 'path': 'gblems_target.xlsx'},
    {'name': 'condition3.xlsx', 'path': 'condition3.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'blocks_conditions.xlsx', 'path': 'blocks_conditions.xlsx'},
    {'name': 'police_fight_flight3.xlsx', 'path': 'police_fight_flight3.xlsx'},
    {'name': 'police_fight_flight.xlsx', 'path': 'police_fight_flight.xlsx'},
    {'name': 'individual_differences.xlsx', 'path': 'individual_differences.xlsx'},
    {'name': 'police_avoidance.xlsx', 'path': 'police_avoidance.xlsx'},
    {'name': 'condition1.xlsx', 'path': 'condition1.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'gblems_expanded.xlsx', 'path': 'gblems_expanded.xlsx'},
    {'name': 'police_fight_flight1.xlsx', 'path': 'police_fight_flight1.xlsx'},
    {'name': 'police_avoidance.xlsx', 'path': 'police_avoidance.xlsx'},
    {'name': 'gblems_target.xlsx', 'path': 'gblems_target.xlsx'},
    {'name': 'gblems_expanded.xlsx', 'path': 'gblems_expanded.xlsx'},
    {'name': 'group_membership.xlsx', 'path': 'group_membership.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["id_number"]}_${expName}_${expInfo["date"]}_${expInfo["condition"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introductionClock;
var instructions;
var end_intro;
var task_instructionsClock;
var instr;
var begin_task;
var img_generationClock;
var inverse;
var original;
var choice_text;
var image_choice;
var left_sign;
var right_sign;
var individual_diff_introClock;
var individual_diff_instructions;
var begin_individual_diffs;
var police_fight_flight_setClock;
var pff_questions;
var one_pff;
var two_pff;
var three_pff;
var four_pff;
var five_pff;
var six_pff;
var seven_pff;
var eight_pff;
var nine_pff;
var pff_response;
var min_pff;
var max_pff;
var police_avoidance_setClock;
var pa_questions;
var zero_pa;
var one_pa;
var two_pa;
var three_pa;
var pa_response;
var min_pa;
var max_pa;
var gblems_setClock;
var gblems_questions;
var one_gblems;
var two_gblems;
var three_gblems;
var four_gblems;
var five_gblems;
var gblems_response;
var min_gblems;
var max_gblems;
var gblems_expanded_setClock;
var gblems_e_questions;
var one_gblemse;
var two_gblemse;
var three_gblemse;
var four_gblemse;
var five_gblemse;
var six_gblemse;
var seven_gblemse;
var eight_gblemse;
var nine_gblemse;
var gblemse_response;
var min_gblemse;
var max_gblemse;
var group_mem_setClock;
var group_mem_questions;
var one_gm;
var two_gm;
var three_gm;
var four_gm;
var five_gm;
var six_gm;
var seven_gm;
var gm_response;
var min_gm;
var mid_gm;
var max_gm;
var demo_introClock;
var demographics_intro;
var ageClock;
var age_question;
var age_response;
var born_usClock;
var born_question;
var born_response;
var english_fluentClock;
var english_question;
var english_response;
var sexClock;
var sex_question;
var sex_response;
var raceClock;
var race_question;
var race_response;
var politicsClock;
var politics_question;
var politics_response;
var politics_scaleClock;
var political_scale_question;
var political_scale_response;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var liberal;
var conservative;
var moderate;
var thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "introduction"
  introductionClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_instructions"
  task_instructionsClock = new util.Clock();
  instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  begin_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "img_generation"
  img_generationClock = new util.Clock();
  inverse = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inverse', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [400, 400],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  original = new visual.ImageStim({
    win : psychoJS.window,
    name : 'original', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [400, 400],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  choice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_text',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 250], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  image_choice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_sign = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_sign',
    text: 'LEFT',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 350)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  right_sign = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_sign',
    text: 'RIGHT',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 350)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "individual_diff_intro"
  individual_diff_introClock = new util.Clock();
  individual_diff_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'individual_diff_instructions',
    text: 'Thank you for your responses!\n\nWe now have a number of questions to ask you about how you perceive the world around you.\n\nThese questions will ask you to rate how much you agree or disagree with a given statement. Please read each statement carefully and respond as truthfully as possible. For each item, press the corresponding numeric value on the NUMERIC KEYPAD to enter your response. Once you press an answer key, your response will be immediately recorded so please be thoughtful about your answers.\n\nThere are no right or wrong answers. Press the SPACE BAR to begin.',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  begin_individual_diffs = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "police_fight_flight_set"
  police_fight_flight_setClock = new util.Clock();
  pff_questions = new visual.TextStim({
    win: psychoJS.window,
    name: 'pff_questions',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 250], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  one_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'one_pff',
    text: '1',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  two_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'two_pff',
    text: '2',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 225), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  three_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'three_pff',
    text: '3',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 150), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  four_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'four_pff',
    text: '4',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 75), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  five_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'five_pff',
    text: '5',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  six_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'six_pff',
    text: '6',
    font: 'Avenir Next',
    units: undefined, 
    pos: [75, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  seven_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'seven_pff',
    text: '7',
    font: 'Avenir Next',
    units: undefined, 
    pos: [150, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  eight_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'eight_pff',
    text: '8',
    font: 'Avenir Next',
    units: undefined, 
    pos: [225, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  nine_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'nine_pff',
    text: '9',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  pff_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  min_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'min_pff',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  max_pff = new visual.TextStim({
    win: psychoJS.window,
    name: 'max_pff',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "police_avoidance_set"
  police_avoidance_setClock = new util.Clock();
  pa_questions = new visual.TextStim({
    win: psychoJS.window,
    name: 'pa_questions',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 150], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  zero_pa = new visual.TextStim({
    win: psychoJS.window,
    name: 'zero_pa',
    text: '0',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 150), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  one_pa = new visual.TextStim({
    win: psychoJS.window,
    name: 'one_pa',
    text: '1',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 50), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  two_pa = new visual.TextStim({
    win: psychoJS.window,
    name: 'two_pa',
    text: '2',
    font: 'Avenir Next',
    units: undefined, 
    pos: [50, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  three_pa = new visual.TextStim({
    win: psychoJS.window,
    name: 'three_pa',
    text: '3',
    font: 'Avenir Next',
    units: undefined, 
    pos: [150, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  pa_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  min_pa = new visual.TextStim({
    win: psychoJS.window,
    name: 'min_pa',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 150), 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  max_pa = new visual.TextStim({
    win: psychoJS.window,
    name: 'max_pa',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [150, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "gblems_set"
  gblems_setClock = new util.Clock();
  gblems_questions = new visual.TextStim({
    win: psychoJS.window,
    name: 'gblems_questions',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 150], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  one_gblems = new visual.TextStim({
    win: psychoJS.window,
    name: 'one_gblems',
    text: '1',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 200), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  two_gblems = new visual.TextStim({
    win: psychoJS.window,
    name: 'two_gblems',
    text: '2',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 100), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  three_gblems = new visual.TextStim({
    win: psychoJS.window,
    name: 'three_gblems',
    text: '3',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  four_gblems = new visual.TextStim({
    win: psychoJS.window,
    name: 'four_gblems',
    text: '4',
    font: 'Avenir Next',
    units: undefined, 
    pos: [100, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  five_gblems = new visual.TextStim({
    win: psychoJS.window,
    name: 'five_gblems',
    text: '5',
    font: 'Avenir Next',
    units: undefined, 
    pos: [200, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  gblems_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  min_gblems = new visual.TextStim({
    win: psychoJS.window,
    name: 'min_gblems',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 200), 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  max_gblems = new visual.TextStim({
    win: psychoJS.window,
    name: 'max_gblems',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [200, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "gblems_expanded_set"
  gblems_expanded_setClock = new util.Clock();
  gblems_e_questions = new visual.TextStim({
    win: psychoJS.window,
    name: 'gblems_e_questions',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 150], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  one_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'one_gblemse',
    text: '1',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  two_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'two_gblemse',
    text: '2',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 225), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  three_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'three_gblemse',
    text: '3',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 150), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  four_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'four_gblemse',
    text: '4',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 75), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  five_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'five_gblemse',
    text: '5',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  six_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'six_gblemse',
    text: '6',
    font: 'Avenir Next',
    units: undefined, 
    pos: [75, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  seven_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'seven_gblemse',
    text: '7',
    font: 'Avenir Next',
    units: undefined, 
    pos: [150, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  eight_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'eight_gblemse',
    text: '8',
    font: 'Avenir Next',
    units: undefined, 
    pos: [225, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  nine_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'nine_gblemse',
    text: '9',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  gblemse_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  min_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'min_gblemse',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  max_gblemse = new visual.TextStim({
    win: psychoJS.window,
    name: 'max_gblemse',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "group_mem_set"
  group_mem_setClock = new util.Clock();
  group_mem_questions = new visual.TextStim({
    win: psychoJS.window,
    name: 'group_mem_questions',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 150], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  one_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'one_gm',
    text: '1',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  two_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'two_gm',
    text: '2',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 200), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  three_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'three_gm',
    text: '3',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 100), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  four_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'four_gm',
    text: '4',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  five_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'five_gm',
    text: '5',
    font: 'Avenir Next',
    units: undefined, 
    pos: [100, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  six_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'six_gm',
    text: '6',
    font: 'Avenir Next',
    units: undefined, 
    pos: [200, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  seven_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'seven_gm',
    text: '7',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  gm_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  min_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'min_gm',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  mid_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'mid_gm',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  max_gm = new visual.TextStim({
    win: psychoJS.window,
    name: 'max_gm',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "demo_intro"
  demo_introClock = new util.Clock();
  demographics_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'demographics_intro',
    text: 'Thank you for your responses!\n\nWe will now collect some demographic information about you before the end of the study.',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "age"
  ageClock = new util.Clock();
  age_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'age_question',
    text: 'What is your age:\n\n(press the corresponding letter key to enter a value)\n\n(a) 18-27\n(b) 28-37\n(c) 38-47\n(d) 48-57\n(e) 58-67\n(f) 68+',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  age_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "born_us"
  born_usClock = new util.Clock();
  born_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'born_question',
    text: "Were you born in the U.S.?\n\nPress 'y' for yes \nPress 'n' for no",
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  born_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "english_fluent"
  english_fluentClock = new util.Clock();
  english_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'english_question',
    text: "Are you fluent in English?\n\nPress 'y' for yes \nPress 'n' for no",
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  english_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sex"
  sexClock = new util.Clock();
  sex_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'sex_question',
    text: "What is your sex?\n\nPress 'm' for male\nPress 'f' for female\nPress 'b' for non-binary\nPress 'o' for other",
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sex_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "race"
  raceClock = new util.Clock();
  race_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'race_question',
    text: "What is your race?\n\nPress 'b' for Black/African American\nPress 'w' for White\nPress 'l' for Latino/a\nPress 'n' for Native American\nPress 'a' for Asian/Pacific Islander\nPress 'e' for Middle Eastern\nPress 'm' for Multi/Biracial",
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  race_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "politics"
  politicsClock = new util.Clock();
  politics_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'politics_question',
    text: "What is your political affiliation?\n\nPress 'd' for Democrat\nPress 'i' for Independent\nPress 'r' for Republican",
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  politics_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "politics_scale"
  politics_scaleClock = new util.Clock();
  political_scale_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'political_scale_question',
    text: 'Please indicate the degree to which you identify as a conservative or a liberal:\n\n(press the corresponding numeric key)',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 100], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  political_scale_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  one = new visual.TextStim({
    win: psychoJS.window,
    name: 'one',
    text: '1',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  two = new visual.TextStim({
    win: psychoJS.window,
    name: 'two',
    text: '2',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 200), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  three = new visual.TextStim({
    win: psychoJS.window,
    name: 'three',
    text: '3',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 100), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  four = new visual.TextStim({
    win: psychoJS.window,
    name: 'four',
    text: '4',
    font: 'Avenir next',
    units: undefined, 
    pos: [0, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  five = new visual.TextStim({
    win: psychoJS.window,
    name: 'five',
    text: '5',
    font: 'Avenir Next',
    units: undefined, 
    pos: [100, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  six = new visual.TextStim({
    win: psychoJS.window,
    name: 'six',
    text: '6',
    font: 'Avenir Next',
    units: undefined, 
    pos: [200, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  seven = new visual.TextStim({
    win: psychoJS.window,
    name: 'seven',
    text: '7',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  liberal = new visual.TextStim({
    win: psychoJS.window,
    name: 'liberal',
    text: 'Extremely liberal',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  conservative = new visual.TextStim({
    win: psychoJS.window,
    name: 'conservative',
    text: 'Extremely conservative',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  moderate = new visual.TextStim({
    win: psychoJS.window,
    name: 'moderate',
    text: 'Moderate',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Thanks for participating in our experiment! \n\nThis was a study designed to determine your mental representation of how the \'typical\' White or Black police officer views White or Black men, dpending on the condition which you were assigned to. The images you saw were in fact the same base image every time, but with different noise patterns overlaid to obscure small parts of the face and enhance others. \n\nThese images will be averaged together to come up with a "classification" image that shows the average representation people have of how Black or White police officers mentally represent Black or White men, or at least how people perceive them to.\n\nShould you have any further questions, please contact the experimenters listed on the hosting platform or on the consent form.',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var intro_loop;
function intro_loopLoopBegin(intro_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    intro_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, (("condition" + expInfo["condition"]) + ".xlsx"), '1'),
      seed: undefined, name: 'intro_loop'
    });
    psychoJS.experiment.addLoop(intro_loop); // add the loop to the experiment
    currentLoop = intro_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIntro_loop of intro_loop) {
      snapshot = intro_loop.getSnapshot();
      intro_loopLoopScheduler.add(importConditions(snapshot));
      intro_loopLoopScheduler.add(introductionRoutineBegin(snapshot));
      intro_loopLoopScheduler.add(introductionRoutineEachFrame());
      intro_loopLoopScheduler.add(introductionRoutineEnd(snapshot));
      intro_loopLoopScheduler.add(intro_loopLoopEndIteration(intro_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function intro_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(intro_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function intro_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var task_instruction_loop;
function task_instruction_loopLoopBegin(task_instruction_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    task_instruction_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, (("condition" + expInfo["condition"]) + ".xlsx"), '1'),
      seed: undefined, name: 'task_instruction_loop'
    });
    psychoJS.experiment.addLoop(task_instruction_loop); // add the loop to the experiment
    currentLoop = task_instruction_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTask_instruction_loop of task_instruction_loop) {
      snapshot = task_instruction_loop.getSnapshot();
      task_instruction_loopLoopScheduler.add(importConditions(snapshot));
      task_instruction_loopLoopScheduler.add(task_instructionsRoutineBegin(snapshot));
      task_instruction_loopLoopScheduler.add(task_instructionsRoutineEachFrame());
      task_instruction_loopLoopScheduler.add(task_instructionsRoutineEnd(snapshot));
      task_instruction_loopLoopScheduler.add(task_instruction_loopLoopEndIteration(task_instruction_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function task_instruction_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(task_instruction_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function task_instruction_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var img_gen_trials_loop;
function img_gen_trials_loopLoopBegin(img_gen_trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    img_gen_trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("condition" + expInfo["condition"]) + ".xlsx"),
      seed: undefined, name: 'img_gen_trials_loop'
    });
    psychoJS.experiment.addLoop(img_gen_trials_loop); // add the loop to the experiment
    currentLoop = img_gen_trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisImg_gen_trials_loop of img_gen_trials_loop) {
      snapshot = img_gen_trials_loop.getSnapshot();
      img_gen_trials_loopLoopScheduler.add(importConditions(snapshot));
      img_gen_trials_loopLoopScheduler.add(img_generationRoutineBegin(snapshot));
      img_gen_trials_loopLoopScheduler.add(img_generationRoutineEachFrame());
      img_gen_trials_loopLoopScheduler.add(img_generationRoutineEnd(snapshot));
      img_gen_trials_loopLoopScheduler.add(img_gen_trials_loopLoopEndIteration(img_gen_trials_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function img_gen_trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(img_gen_trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function img_gen_trials_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var scales_loop;
function scales_loopLoopBegin(scales_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    scales_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blocks_conditions.xlsx',
      seed: undefined, name: 'scales_loop'
    });
    psychoJS.experiment.addLoop(scales_loop); // add the loop to the experiment
    currentLoop = scales_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisScales_loop of scales_loop) {
      snapshot = scales_loop.getSnapshot();
      scales_loopLoopScheduler.add(importConditions(snapshot));
      const police_fight_flight_loopLoopScheduler = new Scheduler(psychoJS);
      scales_loopLoopScheduler.add(police_fight_flight_loopLoopBegin(police_fight_flight_loopLoopScheduler, snapshot));
      scales_loopLoopScheduler.add(police_fight_flight_loopLoopScheduler);
      scales_loopLoopScheduler.add(police_fight_flight_loopLoopEnd);
      const police_avoidance_loopLoopScheduler = new Scheduler(psychoJS);
      scales_loopLoopScheduler.add(police_avoidance_loopLoopBegin(police_avoidance_loopLoopScheduler, snapshot));
      scales_loopLoopScheduler.add(police_avoidance_loopLoopScheduler);
      scales_loopLoopScheduler.add(police_avoidance_loopLoopEnd);
      const gblems_loopLoopScheduler = new Scheduler(psychoJS);
      scales_loopLoopScheduler.add(gblems_loopLoopBegin(gblems_loopLoopScheduler, snapshot));
      scales_loopLoopScheduler.add(gblems_loopLoopScheduler);
      scales_loopLoopScheduler.add(gblems_loopLoopEnd);
      const gblems_expanded_loopLoopScheduler = new Scheduler(psychoJS);
      scales_loopLoopScheduler.add(gblems_expanded_loopLoopBegin(gblems_expanded_loopLoopScheduler, snapshot));
      scales_loopLoopScheduler.add(gblems_expanded_loopLoopScheduler);
      scales_loopLoopScheduler.add(gblems_expanded_loopLoopEnd);
      const group_membership_loopLoopScheduler = new Scheduler(psychoJS);
      scales_loopLoopScheduler.add(group_membership_loopLoopBegin(group_membership_loopLoopScheduler, snapshot));
      scales_loopLoopScheduler.add(group_membership_loopLoopScheduler);
      scales_loopLoopScheduler.add(group_membership_loopLoopEnd);
      scales_loopLoopScheduler.add(scales_loopLoopEndIteration(scales_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var police_fight_flight_loop;
function police_fight_flight_loopLoopBegin(police_fight_flight_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    police_fight_flight_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Number(block_name == 'police_fight_flight_set'), method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("police_fight_flight" + expInfo["condition"]) + ".xlsx"),
      seed: undefined, name: 'police_fight_flight_loop'
    });
    psychoJS.experiment.addLoop(police_fight_flight_loop); // add the loop to the experiment
    currentLoop = police_fight_flight_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPolice_fight_flight_loop of police_fight_flight_loop) {
      snapshot = police_fight_flight_loop.getSnapshot();
      police_fight_flight_loopLoopScheduler.add(importConditions(snapshot));
      police_fight_flight_loopLoopScheduler.add(police_fight_flight_setRoutineBegin(snapshot));
      police_fight_flight_loopLoopScheduler.add(police_fight_flight_setRoutineEachFrame());
      police_fight_flight_loopLoopScheduler.add(police_fight_flight_setRoutineEnd(snapshot));
      police_fight_flight_loopLoopScheduler.add(police_fight_flight_loopLoopEndIteration(police_fight_flight_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function police_fight_flight_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(police_fight_flight_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function police_fight_flight_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var police_avoidance_loop;
function police_avoidance_loopLoopBegin(police_avoidance_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    police_avoidance_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Number(block_name == 'police_avoidance_set'), method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'police_avoidance.xlsx',
      seed: undefined, name: 'police_avoidance_loop'
    });
    psychoJS.experiment.addLoop(police_avoidance_loop); // add the loop to the experiment
    currentLoop = police_avoidance_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPolice_avoidance_loop of police_avoidance_loop) {
      snapshot = police_avoidance_loop.getSnapshot();
      police_avoidance_loopLoopScheduler.add(importConditions(snapshot));
      police_avoidance_loopLoopScheduler.add(police_avoidance_setRoutineBegin(snapshot));
      police_avoidance_loopLoopScheduler.add(police_avoidance_setRoutineEachFrame());
      police_avoidance_loopLoopScheduler.add(police_avoidance_setRoutineEnd(snapshot));
      police_avoidance_loopLoopScheduler.add(police_avoidance_loopLoopEndIteration(police_avoidance_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function police_avoidance_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(police_avoidance_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function police_avoidance_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var gblems_loop;
function gblems_loopLoopBegin(gblems_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    gblems_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Number(block_name == 'gblems_set'), method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'gblems_target.xlsx',
      seed: undefined, name: 'gblems_loop'
    });
    psychoJS.experiment.addLoop(gblems_loop); // add the loop to the experiment
    currentLoop = gblems_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisGblems_loop of gblems_loop) {
      snapshot = gblems_loop.getSnapshot();
      gblems_loopLoopScheduler.add(importConditions(snapshot));
      gblems_loopLoopScheduler.add(gblems_setRoutineBegin(snapshot));
      gblems_loopLoopScheduler.add(gblems_setRoutineEachFrame());
      gblems_loopLoopScheduler.add(gblems_setRoutineEnd(snapshot));
      gblems_loopLoopScheduler.add(gblems_loopLoopEndIteration(gblems_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function gblems_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(gblems_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function gblems_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var gblems_expanded_loop;
function gblems_expanded_loopLoopBegin(gblems_expanded_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    gblems_expanded_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Number(block_name == 'gblems_expanded_set'), method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'gblems_expanded.xlsx',
      seed: undefined, name: 'gblems_expanded_loop'
    });
    psychoJS.experiment.addLoop(gblems_expanded_loop); // add the loop to the experiment
    currentLoop = gblems_expanded_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisGblems_expanded_loop of gblems_expanded_loop) {
      snapshot = gblems_expanded_loop.getSnapshot();
      gblems_expanded_loopLoopScheduler.add(importConditions(snapshot));
      gblems_expanded_loopLoopScheduler.add(gblems_expanded_setRoutineBegin(snapshot));
      gblems_expanded_loopLoopScheduler.add(gblems_expanded_setRoutineEachFrame());
      gblems_expanded_loopLoopScheduler.add(gblems_expanded_setRoutineEnd(snapshot));
      gblems_expanded_loopLoopScheduler.add(gblems_expanded_loopLoopEndIteration(gblems_expanded_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function gblems_expanded_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(gblems_expanded_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function gblems_expanded_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var group_membership_loop;
function group_membership_loopLoopBegin(group_membership_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    group_membership_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Number(block_name == 'group_mem_set'), method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'group_membership.xlsx',
      seed: undefined, name: 'group_membership_loop'
    });
    psychoJS.experiment.addLoop(group_membership_loop); // add the loop to the experiment
    currentLoop = group_membership_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisGroup_membership_loop of group_membership_loop) {
      snapshot = group_membership_loop.getSnapshot();
      group_membership_loopLoopScheduler.add(importConditions(snapshot));
      group_membership_loopLoopScheduler.add(group_mem_setRoutineBegin(snapshot));
      group_membership_loopLoopScheduler.add(group_mem_setRoutineEachFrame());
      group_membership_loopLoopScheduler.add(group_mem_setRoutineEnd(snapshot));
      group_membership_loopLoopScheduler.add(group_membership_loopLoopEndIteration(group_membership_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function group_membership_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(group_membership_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function group_membership_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function scales_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(scales_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function scales_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var introductionMaxDurationReached;
var _end_intro_allKeys;
var introductionMaxDuration;
var introductionComponents;
function introductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'introduction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    introductionClock.reset();
    routineTimer.reset();
    introductionMaxDurationReached = false;
    // update component parameters for each repeat
    instructions.setText(intro);
    end_intro.keys = undefined;
    end_intro.rt = undefined;
    _end_intro_allKeys = [];
    psychoJS.experiment.addData('introduction.started', globalClock.getTime());
    introductionMaxDuration = null
    // keep track of which components have finished
    introductionComponents = [];
    introductionComponents.push(instructions);
    introductionComponents.push(end_intro);
    
    for (const thisComponent of introductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'introduction' ---
    // get current time
    t = introductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (frameN >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }
    
    
    // *end_intro* updates
    if (frameN >= 0.0 && end_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_intro.tStart = t;  // (not accounting for frame time here)
      end_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_intro.clearEvents(); });
    }
    
    if (end_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_intro.getKeys({keyList: ['space'], waitRelease: false});
      _end_intro_allKeys = _end_intro_allKeys.concat(theseKeys);
      if (_end_intro_allKeys.length > 0) {
        end_intro.keys = _end_intro_allKeys[_end_intro_allKeys.length - 1].name;  // just the last key pressed
        end_intro.rt = _end_intro_allKeys[_end_intro_allKeys.length - 1].rt;
        end_intro.duration = _end_intro_allKeys[_end_intro_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'introduction' ---
    for (const thisComponent of introductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('introduction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_intro.corr, level);
    }
    psychoJS.experiment.addData('end_intro.keys', end_intro.keys);
    if (typeof end_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_intro.rt', end_intro.rt);
        psychoJS.experiment.addData('end_intro.duration', end_intro.duration);
        routineTimer.reset();
        }
    
    end_intro.stop();
    // the Routine "introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var task_instructionsMaxDurationReached;
var _begin_task_allKeys;
var task_instructionsMaxDuration;
var task_instructionsComponents;
function task_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    task_instructionsClock.reset();
    routineTimer.reset();
    task_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    instr.setText(overall_instr);
    begin_task.keys = undefined;
    begin_task.rt = undefined;
    _begin_task_allKeys = [];
    psychoJS.experiment.addData('task_instructions.started', globalClock.getTime());
    task_instructionsMaxDuration = null
    // keep track of which components have finished
    task_instructionsComponents = [];
    task_instructionsComponents.push(instr);
    task_instructionsComponents.push(begin_task);
    
    for (const thisComponent of task_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function task_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task_instructions' ---
    // get current time
    t = task_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr* updates
    if (frameN >= 0.0 && instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr.tStart = t;  // (not accounting for frame time here)
      instr.frameNStart = frameN;  // exact frame index
      
      instr.setAutoDraw(true);
    }
    
    
    // *begin_task* updates
    if (frameN >= 0.0 && begin_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_task.tStart = t;  // (not accounting for frame time here)
      begin_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { begin_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { begin_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { begin_task.clearEvents(); });
    }
    
    if (begin_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = begin_task.getKeys({keyList: ['space'], waitRelease: false});
      _begin_task_allKeys = _begin_task_allKeys.concat(theseKeys);
      if (_begin_task_allKeys.length > 0) {
        begin_task.keys = _begin_task_allKeys[_begin_task_allKeys.length - 1].name;  // just the last key pressed
        begin_task.rt = _begin_task_allKeys[_begin_task_allKeys.length - 1].rt;
        begin_task.duration = _begin_task_allKeys[_begin_task_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of task_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task_instructions' ---
    for (const thisComponent of task_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('task_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(begin_task.corr, level);
    }
    psychoJS.experiment.addData('begin_task.keys', begin_task.keys);
    if (typeof begin_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('begin_task.rt', begin_task.rt);
        psychoJS.experiment.addData('begin_task.duration', begin_task.duration);
        routineTimer.reset();
        }
    
    begin_task.stop();
    // the Routine "task_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var img_generationMaxDurationReached;
var _image_choice_allKeys;
var img_generationMaxDuration;
var img_generationComponents;
function img_generationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'img_generation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    img_generationClock.reset();
    routineTimer.reset();
    img_generationMaxDurationReached = false;
    // update component parameters for each repeat
    inverse.setPos([inv_loc_X, inv_loc_Y]);
    inverse.setImage(inverse_image);
    original.setPos([ori_loc_X, ori_loc_Y]);
    original.setImage(original_image);
    choice_text.setText(category_instr);
    image_choice.keys = undefined;
    image_choice.rt = undefined;
    _image_choice_allKeys = [];
    psychoJS.experiment.addData('img_generation.started', globalClock.getTime());
    img_generationMaxDuration = null
    // keep track of which components have finished
    img_generationComponents = [];
    img_generationComponents.push(inverse);
    img_generationComponents.push(original);
    img_generationComponents.push(choice_text);
    img_generationComponents.push(image_choice);
    img_generationComponents.push(left_sign);
    img_generationComponents.push(right_sign);
    
    for (const thisComponent of img_generationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function img_generationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'img_generation' ---
    // get current time
    t = img_generationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inverse* updates
    if (frameN >= 0.0 && inverse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inverse.tStart = t;  // (not accounting for frame time here)
      inverse.frameNStart = frameN;  // exact frame index
      
      inverse.setAutoDraw(true);
    }
    
    
    // *original* updates
    if (frameN >= 0.0 && original.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      original.tStart = t;  // (not accounting for frame time here)
      original.frameNStart = frameN;  // exact frame index
      
      original.setAutoDraw(true);
    }
    
    
    // *choice_text* updates
    if (frameN >= 0.0 && choice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_text.tStart = t;  // (not accounting for frame time here)
      choice_text.frameNStart = frameN;  // exact frame index
      
      choice_text.setAutoDraw(true);
    }
    
    
    // *image_choice* updates
    if (frameN >= 0.0 && image_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_choice.tStart = t;  // (not accounting for frame time here)
      image_choice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { image_choice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { image_choice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { image_choice.clearEvents(); });
    }
    
    if (image_choice.status === PsychoJS.Status.STARTED) {
      let theseKeys = image_choice.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _image_choice_allKeys = _image_choice_allKeys.concat(theseKeys);
      if (_image_choice_allKeys.length > 0) {
        image_choice.keys = _image_choice_allKeys[_image_choice_allKeys.length - 1].name;  // just the last key pressed
        image_choice.rt = _image_choice_allKeys[_image_choice_allKeys.length - 1].rt;
        image_choice.duration = _image_choice_allKeys[_image_choice_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_sign* updates
    if (frameN >= 0.0 && left_sign.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_sign.tStart = t;  // (not accounting for frame time here)
      left_sign.frameNStart = frameN;  // exact frame index
      
      left_sign.setAutoDraw(true);
    }
    
    
    // *right_sign* updates
    if (frameN >= 0.0 && right_sign.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_sign.tStart = t;  // (not accounting for frame time here)
      right_sign.frameNStart = frameN;  // exact frame index
      
      right_sign.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of img_generationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function img_generationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'img_generation' ---
    for (const thisComponent of img_generationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('img_generation.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(image_choice.corr, level);
    }
    psychoJS.experiment.addData('image_choice.keys', image_choice.keys);
    if (typeof image_choice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('image_choice.rt', image_choice.rt);
        psychoJS.experiment.addData('image_choice.duration', image_choice.duration);
        routineTimer.reset();
        }
    
    image_choice.stop();
    // the Routine "img_generation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var individual_diff_introMaxDurationReached;
var _begin_individual_diffs_allKeys;
var individual_diff_introMaxDuration;
var individual_diff_introComponents;
function individual_diff_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'individual_diff_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    individual_diff_introClock.reset();
    routineTimer.reset();
    individual_diff_introMaxDurationReached = false;
    // update component parameters for each repeat
    begin_individual_diffs.keys = undefined;
    begin_individual_diffs.rt = undefined;
    _begin_individual_diffs_allKeys = [];
    psychoJS.experiment.addData('individual_diff_intro.started', globalClock.getTime());
    individual_diff_introMaxDuration = null
    // keep track of which components have finished
    individual_diff_introComponents = [];
    individual_diff_introComponents.push(individual_diff_instructions);
    individual_diff_introComponents.push(begin_individual_diffs);
    
    for (const thisComponent of individual_diff_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function individual_diff_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'individual_diff_intro' ---
    // get current time
    t = individual_diff_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *individual_diff_instructions* updates
    if (frameN >= 0.0 && individual_diff_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      individual_diff_instructions.tStart = t;  // (not accounting for frame time here)
      individual_diff_instructions.frameNStart = frameN;  // exact frame index
      
      individual_diff_instructions.setAutoDraw(true);
    }
    
    
    // *begin_individual_diffs* updates
    if (frameN >= 0.0 && begin_individual_diffs.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_individual_diffs.tStart = t;  // (not accounting for frame time here)
      begin_individual_diffs.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { begin_individual_diffs.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { begin_individual_diffs.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { begin_individual_diffs.clearEvents(); });
    }
    
    if (begin_individual_diffs.status === PsychoJS.Status.STARTED) {
      let theseKeys = begin_individual_diffs.getKeys({keyList: ['space'], waitRelease: false});
      _begin_individual_diffs_allKeys = _begin_individual_diffs_allKeys.concat(theseKeys);
      if (_begin_individual_diffs_allKeys.length > 0) {
        begin_individual_diffs.keys = _begin_individual_diffs_allKeys[_begin_individual_diffs_allKeys.length - 1].name;  // just the last key pressed
        begin_individual_diffs.rt = _begin_individual_diffs_allKeys[_begin_individual_diffs_allKeys.length - 1].rt;
        begin_individual_diffs.duration = _begin_individual_diffs_allKeys[_begin_individual_diffs_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of individual_diff_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function individual_diff_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'individual_diff_intro' ---
    for (const thisComponent of individual_diff_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('individual_diff_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(begin_individual_diffs.corr, level);
    }
    psychoJS.experiment.addData('begin_individual_diffs.keys', begin_individual_diffs.keys);
    if (typeof begin_individual_diffs.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('begin_individual_diffs.rt', begin_individual_diffs.rt);
        psychoJS.experiment.addData('begin_individual_diffs.duration', begin_individual_diffs.duration);
        routineTimer.reset();
        }
    
    begin_individual_diffs.stop();
    // the Routine "individual_diff_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var police_fight_flight_setMaxDurationReached;
var _pff_response_allKeys;
var police_fight_flight_setMaxDuration;
var police_fight_flight_setComponents;
function police_fight_flight_setRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'police_fight_flight_set' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    police_fight_flight_setClock.reset();
    routineTimer.reset();
    police_fight_flight_setMaxDurationReached = false;
    // update component parameters for each repeat
    pff_questions.setText(question);
    pff_response.keys = undefined;
    pff_response.rt = undefined;
    _pff_response_allKeys = [];
    min_pff.setText(minimum);
    max_pff.setText(maximum);
    psychoJS.experiment.addData('police_fight_flight_set.started', globalClock.getTime());
    police_fight_flight_setMaxDuration = null
    // keep track of which components have finished
    police_fight_flight_setComponents = [];
    police_fight_flight_setComponents.push(pff_questions);
    police_fight_flight_setComponents.push(one_pff);
    police_fight_flight_setComponents.push(two_pff);
    police_fight_flight_setComponents.push(three_pff);
    police_fight_flight_setComponents.push(four_pff);
    police_fight_flight_setComponents.push(five_pff);
    police_fight_flight_setComponents.push(six_pff);
    police_fight_flight_setComponents.push(seven_pff);
    police_fight_flight_setComponents.push(eight_pff);
    police_fight_flight_setComponents.push(nine_pff);
    police_fight_flight_setComponents.push(pff_response);
    police_fight_flight_setComponents.push(min_pff);
    police_fight_flight_setComponents.push(max_pff);
    
    for (const thisComponent of police_fight_flight_setComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function police_fight_flight_setRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'police_fight_flight_set' ---
    // get current time
    t = police_fight_flight_setClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pff_questions* updates
    if (frameN >= 0.0 && pff_questions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pff_questions.tStart = t;  // (not accounting for frame time here)
      pff_questions.frameNStart = frameN;  // exact frame index
      
      pff_questions.setAutoDraw(true);
    }
    
    
    // *one_pff* updates
    if (frameN >= 0.0 && one_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_pff.tStart = t;  // (not accounting for frame time here)
      one_pff.frameNStart = frameN;  // exact frame index
      
      one_pff.setAutoDraw(true);
    }
    
    
    // *two_pff* updates
    if (frameN >= 0.0 && two_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      two_pff.tStart = t;  // (not accounting for frame time here)
      two_pff.frameNStart = frameN;  // exact frame index
      
      two_pff.setAutoDraw(true);
    }
    
    
    // *three_pff* updates
    if (frameN >= 0.0 && three_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three_pff.tStart = t;  // (not accounting for frame time here)
      three_pff.frameNStart = frameN;  // exact frame index
      
      three_pff.setAutoDraw(true);
    }
    
    
    // *four_pff* updates
    if (frameN >= 0.0 && four_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      four_pff.tStart = t;  // (not accounting for frame time here)
      four_pff.frameNStart = frameN;  // exact frame index
      
      four_pff.setAutoDraw(true);
    }
    
    
    // *five_pff* updates
    if (frameN >= 0.0 && five_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      five_pff.tStart = t;  // (not accounting for frame time here)
      five_pff.frameNStart = frameN;  // exact frame index
      
      five_pff.setAutoDraw(true);
    }
    
    
    // *six_pff* updates
    if (frameN >= 0.0 && six_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      six_pff.tStart = t;  // (not accounting for frame time here)
      six_pff.frameNStart = frameN;  // exact frame index
      
      six_pff.setAutoDraw(true);
    }
    
    
    // *seven_pff* updates
    if (frameN >= 0.0 && seven_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seven_pff.tStart = t;  // (not accounting for frame time here)
      seven_pff.frameNStart = frameN;  // exact frame index
      
      seven_pff.setAutoDraw(true);
    }
    
    
    // *eight_pff* updates
    if (frameN >= 0.0 && eight_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      eight_pff.tStart = t;  // (not accounting for frame time here)
      eight_pff.frameNStart = frameN;  // exact frame index
      
      eight_pff.setAutoDraw(true);
    }
    
    
    // *nine_pff* updates
    if (frameN >= 0.0 && nine_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nine_pff.tStart = t;  // (not accounting for frame time here)
      nine_pff.frameNStart = frameN;  // exact frame index
      
      nine_pff.setAutoDraw(true);
    }
    
    
    // *pff_response* updates
    if (frameN >= 0.0 && pff_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pff_response.tStart = t;  // (not accounting for frame time here)
      pff_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pff_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pff_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pff_response.clearEvents(); });
    }
    
    if (pff_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = pff_response.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _pff_response_allKeys = _pff_response_allKeys.concat(theseKeys);
      if (_pff_response_allKeys.length > 0) {
        pff_response.keys = _pff_response_allKeys[_pff_response_allKeys.length - 1].name;  // just the last key pressed
        pff_response.rt = _pff_response_allKeys[_pff_response_allKeys.length - 1].rt;
        pff_response.duration = _pff_response_allKeys[_pff_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *min_pff* updates
    if (frameN >= 0.0 && min_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min_pff.tStart = t;  // (not accounting for frame time here)
      min_pff.frameNStart = frameN;  // exact frame index
      
      min_pff.setAutoDraw(true);
    }
    
    
    // *max_pff* updates
    if (frameN >= 0.0 && max_pff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      max_pff.tStart = t;  // (not accounting for frame time here)
      max_pff.frameNStart = frameN;  // exact frame index
      
      max_pff.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of police_fight_flight_setComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function police_fight_flight_setRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'police_fight_flight_set' ---
    for (const thisComponent of police_fight_flight_setComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('police_fight_flight_set.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(pff_response.corr, level);
    }
    psychoJS.experiment.addData('pff_response.keys', pff_response.keys);
    if (typeof pff_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pff_response.rt', pff_response.rt);
        psychoJS.experiment.addData('pff_response.duration', pff_response.duration);
        routineTimer.reset();
        }
    
    pff_response.stop();
    // the Routine "police_fight_flight_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var police_avoidance_setMaxDurationReached;
var _pa_response_allKeys;
var police_avoidance_setMaxDuration;
var police_avoidance_setComponents;
function police_avoidance_setRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'police_avoidance_set' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    police_avoidance_setClock.reset();
    routineTimer.reset();
    police_avoidance_setMaxDurationReached = false;
    // update component parameters for each repeat
    pa_questions.setText(question);
    pa_response.keys = undefined;
    pa_response.rt = undefined;
    _pa_response_allKeys = [];
    min_pa.setText(minimum);
    max_pa.setText(maximum);
    psychoJS.experiment.addData('police_avoidance_set.started', globalClock.getTime());
    police_avoidance_setMaxDuration = null
    // keep track of which components have finished
    police_avoidance_setComponents = [];
    police_avoidance_setComponents.push(pa_questions);
    police_avoidance_setComponents.push(zero_pa);
    police_avoidance_setComponents.push(one_pa);
    police_avoidance_setComponents.push(two_pa);
    police_avoidance_setComponents.push(three_pa);
    police_avoidance_setComponents.push(pa_response);
    police_avoidance_setComponents.push(min_pa);
    police_avoidance_setComponents.push(max_pa);
    
    for (const thisComponent of police_avoidance_setComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function police_avoidance_setRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'police_avoidance_set' ---
    // get current time
    t = police_avoidance_setClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pa_questions* updates
    if (frameN >= 0.0 && pa_questions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pa_questions.tStart = t;  // (not accounting for frame time here)
      pa_questions.frameNStart = frameN;  // exact frame index
      
      pa_questions.setAutoDraw(true);
    }
    
    
    // *zero_pa* updates
    if (frameN >= 0.0 && zero_pa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zero_pa.tStart = t;  // (not accounting for frame time here)
      zero_pa.frameNStart = frameN;  // exact frame index
      
      zero_pa.setAutoDraw(true);
    }
    
    
    // *one_pa* updates
    if (frameN >= 0.0 && one_pa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_pa.tStart = t;  // (not accounting for frame time here)
      one_pa.frameNStart = frameN;  // exact frame index
      
      one_pa.setAutoDraw(true);
    }
    
    
    // *two_pa* updates
    if (frameN >= 0.0 && two_pa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      two_pa.tStart = t;  // (not accounting for frame time here)
      two_pa.frameNStart = frameN;  // exact frame index
      
      two_pa.setAutoDraw(true);
    }
    
    
    // *three_pa* updates
    if (frameN >= 0.0 && three_pa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three_pa.tStart = t;  // (not accounting for frame time here)
      three_pa.frameNStart = frameN;  // exact frame index
      
      three_pa.setAutoDraw(true);
    }
    
    
    // *pa_response* updates
    if (frameN >= 0.0 && pa_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pa_response.tStart = t;  // (not accounting for frame time here)
      pa_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pa_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pa_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pa_response.clearEvents(); });
    }
    
    if (pa_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = pa_response.getKeys({keyList: ['0', '1', '2', '3'], waitRelease: false});
      _pa_response_allKeys = _pa_response_allKeys.concat(theseKeys);
      if (_pa_response_allKeys.length > 0) {
        pa_response.keys = _pa_response_allKeys[_pa_response_allKeys.length - 1].name;  // just the last key pressed
        pa_response.rt = _pa_response_allKeys[_pa_response_allKeys.length - 1].rt;
        pa_response.duration = _pa_response_allKeys[_pa_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *min_pa* updates
    if (frameN >= 0.0 && min_pa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min_pa.tStart = t;  // (not accounting for frame time here)
      min_pa.frameNStart = frameN;  // exact frame index
      
      min_pa.setAutoDraw(true);
    }
    
    
    // *max_pa* updates
    if (frameN >= 0.0 && max_pa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      max_pa.tStart = t;  // (not accounting for frame time here)
      max_pa.frameNStart = frameN;  // exact frame index
      
      max_pa.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of police_avoidance_setComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function police_avoidance_setRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'police_avoidance_set' ---
    for (const thisComponent of police_avoidance_setComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('police_avoidance_set.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(pa_response.corr, level);
    }
    psychoJS.experiment.addData('pa_response.keys', pa_response.keys);
    if (typeof pa_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pa_response.rt', pa_response.rt);
        psychoJS.experiment.addData('pa_response.duration', pa_response.duration);
        routineTimer.reset();
        }
    
    pa_response.stop();
    // the Routine "police_avoidance_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gblems_setMaxDurationReached;
var _gblems_response_allKeys;
var gblems_setMaxDuration;
var gblems_setComponents;
function gblems_setRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'gblems_set' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    gblems_setClock.reset();
    routineTimer.reset();
    gblems_setMaxDurationReached = false;
    // update component parameters for each repeat
    gblems_questions.setText(question);
    gblems_response.keys = undefined;
    gblems_response.rt = undefined;
    _gblems_response_allKeys = [];
    min_gblems.setText(minimum);
    max_gblems.setText(maximum);
    psychoJS.experiment.addData('gblems_set.started', globalClock.getTime());
    gblems_setMaxDuration = null
    // keep track of which components have finished
    gblems_setComponents = [];
    gblems_setComponents.push(gblems_questions);
    gblems_setComponents.push(one_gblems);
    gblems_setComponents.push(two_gblems);
    gblems_setComponents.push(three_gblems);
    gblems_setComponents.push(four_gblems);
    gblems_setComponents.push(five_gblems);
    gblems_setComponents.push(gblems_response);
    gblems_setComponents.push(min_gblems);
    gblems_setComponents.push(max_gblems);
    
    for (const thisComponent of gblems_setComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gblems_setRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'gblems_set' ---
    // get current time
    t = gblems_setClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gblems_questions* updates
    if (frameN >= 0.0 && gblems_questions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gblems_questions.tStart = t;  // (not accounting for frame time here)
      gblems_questions.frameNStart = frameN;  // exact frame index
      
      gblems_questions.setAutoDraw(true);
    }
    
    
    // *one_gblems* updates
    if (frameN >= 0.0 && one_gblems.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_gblems.tStart = t;  // (not accounting for frame time here)
      one_gblems.frameNStart = frameN;  // exact frame index
      
      one_gblems.setAutoDraw(true);
    }
    
    
    // *two_gblems* updates
    if (frameN >= 0.0 && two_gblems.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      two_gblems.tStart = t;  // (not accounting for frame time here)
      two_gblems.frameNStart = frameN;  // exact frame index
      
      two_gblems.setAutoDraw(true);
    }
    
    
    // *three_gblems* updates
    if (frameN >= 0.0 && three_gblems.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three_gblems.tStart = t;  // (not accounting for frame time here)
      three_gblems.frameNStart = frameN;  // exact frame index
      
      three_gblems.setAutoDraw(true);
    }
    
    
    // *four_gblems* updates
    if (frameN >= 0.0 && four_gblems.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      four_gblems.tStart = t;  // (not accounting for frame time here)
      four_gblems.frameNStart = frameN;  // exact frame index
      
      four_gblems.setAutoDraw(true);
    }
    
    
    // *five_gblems* updates
    if (frameN >= 0.0 && five_gblems.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      five_gblems.tStart = t;  // (not accounting for frame time here)
      five_gblems.frameNStart = frameN;  // exact frame index
      
      five_gblems.setAutoDraw(true);
    }
    
    
    // *gblems_response* updates
    if (frameN >= 0.0 && gblems_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gblems_response.tStart = t;  // (not accounting for frame time here)
      gblems_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { gblems_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { gblems_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { gblems_response.clearEvents(); });
    }
    
    if (gblems_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = gblems_response.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _gblems_response_allKeys = _gblems_response_allKeys.concat(theseKeys);
      if (_gblems_response_allKeys.length > 0) {
        gblems_response.keys = _gblems_response_allKeys[_gblems_response_allKeys.length - 1].name;  // just the last key pressed
        gblems_response.rt = _gblems_response_allKeys[_gblems_response_allKeys.length - 1].rt;
        gblems_response.duration = _gblems_response_allKeys[_gblems_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *min_gblems* updates
    if (frameN >= 0.0 && min_gblems.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min_gblems.tStart = t;  // (not accounting for frame time here)
      min_gblems.frameNStart = frameN;  // exact frame index
      
      min_gblems.setAutoDraw(true);
    }
    
    
    // *max_gblems* updates
    if (frameN >= 0.0 && max_gblems.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      max_gblems.tStart = t;  // (not accounting for frame time here)
      max_gblems.frameNStart = frameN;  // exact frame index
      
      max_gblems.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of gblems_setComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gblems_setRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'gblems_set' ---
    for (const thisComponent of gblems_setComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('gblems_set.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(gblems_response.corr, level);
    }
    psychoJS.experiment.addData('gblems_response.keys', gblems_response.keys);
    if (typeof gblems_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('gblems_response.rt', gblems_response.rt);
        psychoJS.experiment.addData('gblems_response.duration', gblems_response.duration);
        routineTimer.reset();
        }
    
    gblems_response.stop();
    // the Routine "gblems_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gblems_expanded_setMaxDurationReached;
var _gblemse_response_allKeys;
var gblems_expanded_setMaxDuration;
var gblems_expanded_setComponents;
function gblems_expanded_setRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'gblems_expanded_set' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    gblems_expanded_setClock.reset();
    routineTimer.reset();
    gblems_expanded_setMaxDurationReached = false;
    // update component parameters for each repeat
    gblems_e_questions.setText(question);
    gblemse_response.keys = undefined;
    gblemse_response.rt = undefined;
    _gblemse_response_allKeys = [];
    min_gblemse.setText(minimum);
    max_gblemse.setText(maximum);
    psychoJS.experiment.addData('gblems_expanded_set.started', globalClock.getTime());
    gblems_expanded_setMaxDuration = null
    // keep track of which components have finished
    gblems_expanded_setComponents = [];
    gblems_expanded_setComponents.push(gblems_e_questions);
    gblems_expanded_setComponents.push(one_gblemse);
    gblems_expanded_setComponents.push(two_gblemse);
    gblems_expanded_setComponents.push(three_gblemse);
    gblems_expanded_setComponents.push(four_gblemse);
    gblems_expanded_setComponents.push(five_gblemse);
    gblems_expanded_setComponents.push(six_gblemse);
    gblems_expanded_setComponents.push(seven_gblemse);
    gblems_expanded_setComponents.push(eight_gblemse);
    gblems_expanded_setComponents.push(nine_gblemse);
    gblems_expanded_setComponents.push(gblemse_response);
    gblems_expanded_setComponents.push(min_gblemse);
    gblems_expanded_setComponents.push(max_gblemse);
    
    for (const thisComponent of gblems_expanded_setComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gblems_expanded_setRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'gblems_expanded_set' ---
    // get current time
    t = gblems_expanded_setClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gblems_e_questions* updates
    if (frameN >= 0.0 && gblems_e_questions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gblems_e_questions.tStart = t;  // (not accounting for frame time here)
      gblems_e_questions.frameNStart = frameN;  // exact frame index
      
      gblems_e_questions.setAutoDraw(true);
    }
    
    
    // *one_gblemse* updates
    if (frameN >= 0.0 && one_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_gblemse.tStart = t;  // (not accounting for frame time here)
      one_gblemse.frameNStart = frameN;  // exact frame index
      
      one_gblemse.setAutoDraw(true);
    }
    
    
    // *two_gblemse* updates
    if (frameN >= 0.0 && two_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      two_gblemse.tStart = t;  // (not accounting for frame time here)
      two_gblemse.frameNStart = frameN;  // exact frame index
      
      two_gblemse.setAutoDraw(true);
    }
    
    
    // *three_gblemse* updates
    if (frameN >= 0.0 && three_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three_gblemse.tStart = t;  // (not accounting for frame time here)
      three_gblemse.frameNStart = frameN;  // exact frame index
      
      three_gblemse.setAutoDraw(true);
    }
    
    
    // *four_gblemse* updates
    if (frameN >= 0.0 && four_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      four_gblemse.tStart = t;  // (not accounting for frame time here)
      four_gblemse.frameNStart = frameN;  // exact frame index
      
      four_gblemse.setAutoDraw(true);
    }
    
    
    // *five_gblemse* updates
    if (frameN >= 0.0 && five_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      five_gblemse.tStart = t;  // (not accounting for frame time here)
      five_gblemse.frameNStart = frameN;  // exact frame index
      
      five_gblemse.setAutoDraw(true);
    }
    
    
    // *six_gblemse* updates
    if (frameN >= 0.0 && six_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      six_gblemse.tStart = t;  // (not accounting for frame time here)
      six_gblemse.frameNStart = frameN;  // exact frame index
      
      six_gblemse.setAutoDraw(true);
    }
    
    
    // *seven_gblemse* updates
    if (frameN >= 0.0 && seven_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seven_gblemse.tStart = t;  // (not accounting for frame time here)
      seven_gblemse.frameNStart = frameN;  // exact frame index
      
      seven_gblemse.setAutoDraw(true);
    }
    
    
    // *eight_gblemse* updates
    if (frameN >= 0.0 && eight_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      eight_gblemse.tStart = t;  // (not accounting for frame time here)
      eight_gblemse.frameNStart = frameN;  // exact frame index
      
      eight_gblemse.setAutoDraw(true);
    }
    
    
    // *nine_gblemse* updates
    if (frameN >= 0.0 && nine_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nine_gblemse.tStart = t;  // (not accounting for frame time here)
      nine_gblemse.frameNStart = frameN;  // exact frame index
      
      nine_gblemse.setAutoDraw(true);
    }
    
    
    // *gblemse_response* updates
    if (frameN >= 0.0 && gblemse_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gblemse_response.tStart = t;  // (not accounting for frame time here)
      gblemse_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { gblemse_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { gblemse_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { gblemse_response.clearEvents(); });
    }
    
    if (gblemse_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = gblemse_response.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _gblemse_response_allKeys = _gblemse_response_allKeys.concat(theseKeys);
      if (_gblemse_response_allKeys.length > 0) {
        gblemse_response.keys = _gblemse_response_allKeys[_gblemse_response_allKeys.length - 1].name;  // just the last key pressed
        gblemse_response.rt = _gblemse_response_allKeys[_gblemse_response_allKeys.length - 1].rt;
        gblemse_response.duration = _gblemse_response_allKeys[_gblemse_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *min_gblemse* updates
    if (frameN >= 0.0 && min_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min_gblemse.tStart = t;  // (not accounting for frame time here)
      min_gblemse.frameNStart = frameN;  // exact frame index
      
      min_gblemse.setAutoDraw(true);
    }
    
    
    // *max_gblemse* updates
    if (frameN >= 0.0 && max_gblemse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      max_gblemse.tStart = t;  // (not accounting for frame time here)
      max_gblemse.frameNStart = frameN;  // exact frame index
      
      max_gblemse.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of gblems_expanded_setComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gblems_expanded_setRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'gblems_expanded_set' ---
    for (const thisComponent of gblems_expanded_setComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('gblems_expanded_set.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(gblemse_response.corr, level);
    }
    psychoJS.experiment.addData('gblemse_response.keys', gblemse_response.keys);
    if (typeof gblemse_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('gblemse_response.rt', gblemse_response.rt);
        psychoJS.experiment.addData('gblemse_response.duration', gblemse_response.duration);
        routineTimer.reset();
        }
    
    gblemse_response.stop();
    // the Routine "gblems_expanded_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var group_mem_setMaxDurationReached;
var _gm_response_allKeys;
var group_mem_setMaxDuration;
var group_mem_setComponents;
function group_mem_setRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'group_mem_set' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    group_mem_setClock.reset();
    routineTimer.reset();
    group_mem_setMaxDurationReached = false;
    // update component parameters for each repeat
    group_mem_questions.setText(question);
    gm_response.keys = undefined;
    gm_response.rt = undefined;
    _gm_response_allKeys = [];
    min_gm.setText(minimum);
    mid_gm.setText(midpoint);
    max_gm.setText(maximum);
    psychoJS.experiment.addData('group_mem_set.started', globalClock.getTime());
    group_mem_setMaxDuration = null
    // keep track of which components have finished
    group_mem_setComponents = [];
    group_mem_setComponents.push(group_mem_questions);
    group_mem_setComponents.push(one_gm);
    group_mem_setComponents.push(two_gm);
    group_mem_setComponents.push(three_gm);
    group_mem_setComponents.push(four_gm);
    group_mem_setComponents.push(five_gm);
    group_mem_setComponents.push(six_gm);
    group_mem_setComponents.push(seven_gm);
    group_mem_setComponents.push(gm_response);
    group_mem_setComponents.push(min_gm);
    group_mem_setComponents.push(mid_gm);
    group_mem_setComponents.push(max_gm);
    
    for (const thisComponent of group_mem_setComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function group_mem_setRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'group_mem_set' ---
    // get current time
    t = group_mem_setClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *group_mem_questions* updates
    if (frameN >= 0.0 && group_mem_questions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      group_mem_questions.tStart = t;  // (not accounting for frame time here)
      group_mem_questions.frameNStart = frameN;  // exact frame index
      
      group_mem_questions.setAutoDraw(true);
    }
    
    
    // *one_gm* updates
    if (frameN >= 0.0 && one_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_gm.tStart = t;  // (not accounting for frame time here)
      one_gm.frameNStart = frameN;  // exact frame index
      
      one_gm.setAutoDraw(true);
    }
    
    
    // *two_gm* updates
    if (frameN >= 0.0 && two_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      two_gm.tStart = t;  // (not accounting for frame time here)
      two_gm.frameNStart = frameN;  // exact frame index
      
      two_gm.setAutoDraw(true);
    }
    
    
    // *three_gm* updates
    if (frameN >= 0.0 && three_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three_gm.tStart = t;  // (not accounting for frame time here)
      three_gm.frameNStart = frameN;  // exact frame index
      
      three_gm.setAutoDraw(true);
    }
    
    
    // *four_gm* updates
    if (frameN >= 0.0 && four_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      four_gm.tStart = t;  // (not accounting for frame time here)
      four_gm.frameNStart = frameN;  // exact frame index
      
      four_gm.setAutoDraw(true);
    }
    
    
    // *five_gm* updates
    if (frameN >= 0.0 && five_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      five_gm.tStart = t;  // (not accounting for frame time here)
      five_gm.frameNStart = frameN;  // exact frame index
      
      five_gm.setAutoDraw(true);
    }
    
    
    // *six_gm* updates
    if (frameN >= 0.0 && six_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      six_gm.tStart = t;  // (not accounting for frame time here)
      six_gm.frameNStart = frameN;  // exact frame index
      
      six_gm.setAutoDraw(true);
    }
    
    
    // *seven_gm* updates
    if (frameN >= 0.0 && seven_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seven_gm.tStart = t;  // (not accounting for frame time here)
      seven_gm.frameNStart = frameN;  // exact frame index
      
      seven_gm.setAutoDraw(true);
    }
    
    
    // *gm_response* updates
    if (frameN >= 0.0 && gm_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gm_response.tStart = t;  // (not accounting for frame time here)
      gm_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { gm_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { gm_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { gm_response.clearEvents(); });
    }
    
    if (gm_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = gm_response.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7'], waitRelease: false});
      _gm_response_allKeys = _gm_response_allKeys.concat(theseKeys);
      if (_gm_response_allKeys.length > 0) {
        gm_response.keys = _gm_response_allKeys[_gm_response_allKeys.length - 1].name;  // just the last key pressed
        gm_response.rt = _gm_response_allKeys[_gm_response_allKeys.length - 1].rt;
        gm_response.duration = _gm_response_allKeys[_gm_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *min_gm* updates
    if (frameN >= 0.0 && min_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      min_gm.tStart = t;  // (not accounting for frame time here)
      min_gm.frameNStart = frameN;  // exact frame index
      
      min_gm.setAutoDraw(true);
    }
    
    
    // *mid_gm* updates
    if (frameN >= 0.0 && mid_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mid_gm.tStart = t;  // (not accounting for frame time here)
      mid_gm.frameNStart = frameN;  // exact frame index
      
      mid_gm.setAutoDraw(true);
    }
    
    
    // *max_gm* updates
    if (frameN >= 0.0 && max_gm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      max_gm.tStart = t;  // (not accounting for frame time here)
      max_gm.frameNStart = frameN;  // exact frame index
      
      max_gm.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of group_mem_setComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function group_mem_setRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'group_mem_set' ---
    for (const thisComponent of group_mem_setComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('group_mem_set.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(gm_response.corr, level);
    }
    psychoJS.experiment.addData('gm_response.keys', gm_response.keys);
    if (typeof gm_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('gm_response.rt', gm_response.rt);
        psychoJS.experiment.addData('gm_response.duration', gm_response.duration);
        routineTimer.reset();
        }
    
    gm_response.stop();
    // the Routine "group_mem_set" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_introMaxDurationReached;
var demo_introMaxDuration;
var demo_introComponents;
function demo_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demo_introClock.reset();
    routineTimer.reset();
    demo_introMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('demo_intro.started', globalClock.getTime());
    demo_introMaxDuration = null
    // keep track of which components have finished
    demo_introComponents = [];
    demo_introComponents.push(demographics_intro);
    
    for (const thisComponent of demo_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demo_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_intro' ---
    // get current time
    t = demo_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demographics_intro* updates
    if (frameN >= 0.0 && demographics_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_intro.tStart = t;  // (not accounting for frame time here)
      demographics_intro.frameNStart = frameN;  // exact frame index
      
      demographics_intro.setAutoDraw(true);
    }
    
    if (demographics_intro.status === PsychoJS.Status.STARTED && frameN >= 300) {
      demographics_intro.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demo_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_intro' ---
    for (const thisComponent of demo_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demo_intro.stopped', globalClock.getTime());
    // the Routine "demo_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ageMaxDurationReached;
var _age_response_allKeys;
var ageMaxDuration;
var ageComponents;
function ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'age' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ageClock.reset();
    routineTimer.reset();
    ageMaxDurationReached = false;
    // update component parameters for each repeat
    age_response.keys = undefined;
    age_response.rt = undefined;
    _age_response_allKeys = [];
    psychoJS.experiment.addData('age.started', globalClock.getTime());
    ageMaxDuration = null
    // keep track of which components have finished
    ageComponents = [];
    ageComponents.push(age_question);
    ageComponents.push(age_response);
    
    for (const thisComponent of ageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'age' ---
    // get current time
    t = ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *age_question* updates
    if (frameN >= 0.0 && age_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_question.tStart = t;  // (not accounting for frame time here)
      age_question.frameNStart = frameN;  // exact frame index
      
      age_question.setAutoDraw(true);
    }
    
    
    // *age_response* updates
    if (frameN >= 0.0 && age_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_response.tStart = t;  // (not accounting for frame time here)
      age_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { age_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { age_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { age_response.clearEvents(); });
    }
    
    if (age_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = age_response.getKeys({keyList: ['a', 'b', 'c', 'd', 'e', 'f'], waitRelease: false});
      _age_response_allKeys = _age_response_allKeys.concat(theseKeys);
      if (_age_response_allKeys.length > 0) {
        age_response.keys = _age_response_allKeys[_age_response_allKeys.length - 1].name;  // just the last key pressed
        age_response.rt = _age_response_allKeys[_age_response_allKeys.length - 1].rt;
        age_response.duration = _age_response_allKeys[_age_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'age' ---
    for (const thisComponent of ageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('age.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(age_response.corr, level);
    }
    psychoJS.experiment.addData('age_response.keys', age_response.keys);
    if (typeof age_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('age_response.rt', age_response.rt);
        psychoJS.experiment.addData('age_response.duration', age_response.duration);
        routineTimer.reset();
        }
    
    age_response.stop();
    // the Routine "age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var born_usMaxDurationReached;
var _born_response_allKeys;
var born_usMaxDuration;
var born_usComponents;
function born_usRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'born_us' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    born_usClock.reset();
    routineTimer.reset();
    born_usMaxDurationReached = false;
    // update component parameters for each repeat
    born_response.keys = undefined;
    born_response.rt = undefined;
    _born_response_allKeys = [];
    psychoJS.experiment.addData('born_us.started', globalClock.getTime());
    born_usMaxDuration = null
    // keep track of which components have finished
    born_usComponents = [];
    born_usComponents.push(born_question);
    born_usComponents.push(born_response);
    
    for (const thisComponent of born_usComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function born_usRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'born_us' ---
    // get current time
    t = born_usClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *born_question* updates
    if (frameN >= 0.0 && born_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      born_question.tStart = t;  // (not accounting for frame time here)
      born_question.frameNStart = frameN;  // exact frame index
      
      born_question.setAutoDraw(true);
    }
    
    
    // *born_response* updates
    if (frameN >= 0.0 && born_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      born_response.tStart = t;  // (not accounting for frame time here)
      born_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { born_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { born_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { born_response.clearEvents(); });
    }
    
    if (born_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = born_response.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _born_response_allKeys = _born_response_allKeys.concat(theseKeys);
      if (_born_response_allKeys.length > 0) {
        born_response.keys = _born_response_allKeys[_born_response_allKeys.length - 1].name;  // just the last key pressed
        born_response.rt = _born_response_allKeys[_born_response_allKeys.length - 1].rt;
        born_response.duration = _born_response_allKeys[_born_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of born_usComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function born_usRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'born_us' ---
    for (const thisComponent of born_usComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('born_us.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(born_response.corr, level);
    }
    psychoJS.experiment.addData('born_response.keys', born_response.keys);
    if (typeof born_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('born_response.rt', born_response.rt);
        psychoJS.experiment.addData('born_response.duration', born_response.duration);
        routineTimer.reset();
        }
    
    born_response.stop();
    // the Routine "born_us" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var english_fluentMaxDurationReached;
var _english_response_allKeys;
var english_fluentMaxDuration;
var english_fluentComponents;
function english_fluentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'english_fluent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    english_fluentClock.reset();
    routineTimer.reset();
    english_fluentMaxDurationReached = false;
    // update component parameters for each repeat
    english_response.keys = undefined;
    english_response.rt = undefined;
    _english_response_allKeys = [];
    psychoJS.experiment.addData('english_fluent.started', globalClock.getTime());
    english_fluentMaxDuration = null
    // keep track of which components have finished
    english_fluentComponents = [];
    english_fluentComponents.push(english_question);
    english_fluentComponents.push(english_response);
    
    for (const thisComponent of english_fluentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function english_fluentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'english_fluent' ---
    // get current time
    t = english_fluentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *english_question* updates
    if (frameN >= 0.0 && english_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      english_question.tStart = t;  // (not accounting for frame time here)
      english_question.frameNStart = frameN;  // exact frame index
      
      english_question.setAutoDraw(true);
    }
    
    
    // *english_response* updates
    if (frameN >= 0.0 && english_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      english_response.tStart = t;  // (not accounting for frame time here)
      english_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { english_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { english_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { english_response.clearEvents(); });
    }
    
    if (english_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = english_response.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _english_response_allKeys = _english_response_allKeys.concat(theseKeys);
      if (_english_response_allKeys.length > 0) {
        english_response.keys = _english_response_allKeys[_english_response_allKeys.length - 1].name;  // just the last key pressed
        english_response.rt = _english_response_allKeys[_english_response_allKeys.length - 1].rt;
        english_response.duration = _english_response_allKeys[_english_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of english_fluentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function english_fluentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'english_fluent' ---
    for (const thisComponent of english_fluentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('english_fluent.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(english_response.corr, level);
    }
    psychoJS.experiment.addData('english_response.keys', english_response.keys);
    if (typeof english_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('english_response.rt', english_response.rt);
        psychoJS.experiment.addData('english_response.duration', english_response.duration);
        routineTimer.reset();
        }
    
    english_response.stop();
    // the Routine "english_fluent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sexMaxDurationReached;
var _sex_response_allKeys;
var sexMaxDuration;
var sexComponents;
function sexRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sex' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    sexClock.reset();
    routineTimer.reset();
    sexMaxDurationReached = false;
    // update component parameters for each repeat
    sex_response.keys = undefined;
    sex_response.rt = undefined;
    _sex_response_allKeys = [];
    psychoJS.experiment.addData('sex.started', globalClock.getTime());
    sexMaxDuration = null
    // keep track of which components have finished
    sexComponents = [];
    sexComponents.push(sex_question);
    sexComponents.push(sex_response);
    
    for (const thisComponent of sexComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sexRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sex' ---
    // get current time
    t = sexClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sex_question* updates
    if (frameN >= 0.0 && sex_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sex_question.tStart = t;  // (not accounting for frame time here)
      sex_question.frameNStart = frameN;  // exact frame index
      
      sex_question.setAutoDraw(true);
    }
    
    
    // *sex_response* updates
    if (frameN >= 0.0 && sex_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sex_response.tStart = t;  // (not accounting for frame time here)
      sex_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sex_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sex_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sex_response.clearEvents(); });
    }
    
    if (sex_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = sex_response.getKeys({keyList: ['m', 'f', 'b', 'o'], waitRelease: false});
      _sex_response_allKeys = _sex_response_allKeys.concat(theseKeys);
      if (_sex_response_allKeys.length > 0) {
        sex_response.keys = _sex_response_allKeys[_sex_response_allKeys.length - 1].name;  // just the last key pressed
        sex_response.rt = _sex_response_allKeys[_sex_response_allKeys.length - 1].rt;
        sex_response.duration = _sex_response_allKeys[_sex_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sexComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sexRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sex' ---
    for (const thisComponent of sexComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('sex.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(sex_response.corr, level);
    }
    psychoJS.experiment.addData('sex_response.keys', sex_response.keys);
    if (typeof sex_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sex_response.rt', sex_response.rt);
        psychoJS.experiment.addData('sex_response.duration', sex_response.duration);
        routineTimer.reset();
        }
    
    sex_response.stop();
    // the Routine "sex" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var raceMaxDurationReached;
var _race_response_allKeys;
var raceMaxDuration;
var raceComponents;
function raceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'race' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    raceClock.reset();
    routineTimer.reset();
    raceMaxDurationReached = false;
    // update component parameters for each repeat
    race_response.keys = undefined;
    race_response.rt = undefined;
    _race_response_allKeys = [];
    psychoJS.experiment.addData('race.started', globalClock.getTime());
    raceMaxDuration = null
    // keep track of which components have finished
    raceComponents = [];
    raceComponents.push(race_question);
    raceComponents.push(race_response);
    
    for (const thisComponent of raceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function raceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'race' ---
    // get current time
    t = raceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *race_question* updates
    if (frameN >= 0.0 && race_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      race_question.tStart = t;  // (not accounting for frame time here)
      race_question.frameNStart = frameN;  // exact frame index
      
      race_question.setAutoDraw(true);
    }
    
    
    // *race_response* updates
    if (frameN >= 0.0 && race_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      race_response.tStart = t;  // (not accounting for frame time here)
      race_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { race_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { race_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { race_response.clearEvents(); });
    }
    
    if (race_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = race_response.getKeys({keyList: ['b', 'w', 'l', 'n', 'a', 'e', 'm'], waitRelease: false});
      _race_response_allKeys = _race_response_allKeys.concat(theseKeys);
      if (_race_response_allKeys.length > 0) {
        race_response.keys = _race_response_allKeys[_race_response_allKeys.length - 1].name;  // just the last key pressed
        race_response.rt = _race_response_allKeys[_race_response_allKeys.length - 1].rt;
        race_response.duration = _race_response_allKeys[_race_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of raceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function raceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'race' ---
    for (const thisComponent of raceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('race.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(race_response.corr, level);
    }
    psychoJS.experiment.addData('race_response.keys', race_response.keys);
    if (typeof race_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('race_response.rt', race_response.rt);
        psychoJS.experiment.addData('race_response.duration', race_response.duration);
        routineTimer.reset();
        }
    
    race_response.stop();
    // the Routine "race" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var politicsMaxDurationReached;
var _politics_response_allKeys;
var politicsMaxDuration;
var politicsComponents;
function politicsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'politics' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    politicsClock.reset();
    routineTimer.reset();
    politicsMaxDurationReached = false;
    // update component parameters for each repeat
    politics_response.keys = undefined;
    politics_response.rt = undefined;
    _politics_response_allKeys = [];
    psychoJS.experiment.addData('politics.started', globalClock.getTime());
    politicsMaxDuration = null
    // keep track of which components have finished
    politicsComponents = [];
    politicsComponents.push(politics_question);
    politicsComponents.push(politics_response);
    
    for (const thisComponent of politicsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function politicsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'politics' ---
    // get current time
    t = politicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *politics_question* updates
    if (frameN >= 0.0 && politics_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      politics_question.tStart = t;  // (not accounting for frame time here)
      politics_question.frameNStart = frameN;  // exact frame index
      
      politics_question.setAutoDraw(true);
    }
    
    
    // *politics_response* updates
    if (frameN >= 0.0 && politics_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      politics_response.tStart = t;  // (not accounting for frame time here)
      politics_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { politics_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { politics_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { politics_response.clearEvents(); });
    }
    
    if (politics_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = politics_response.getKeys({keyList: ['d', 'i', 'r'], waitRelease: false});
      _politics_response_allKeys = _politics_response_allKeys.concat(theseKeys);
      if (_politics_response_allKeys.length > 0) {
        politics_response.keys = _politics_response_allKeys[_politics_response_allKeys.length - 1].name;  // just the last key pressed
        politics_response.rt = _politics_response_allKeys[_politics_response_allKeys.length - 1].rt;
        politics_response.duration = _politics_response_allKeys[_politics_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of politicsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function politicsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'politics' ---
    for (const thisComponent of politicsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('politics.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(politics_response.corr, level);
    }
    psychoJS.experiment.addData('politics_response.keys', politics_response.keys);
    if (typeof politics_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('politics_response.rt', politics_response.rt);
        psychoJS.experiment.addData('politics_response.duration', politics_response.duration);
        routineTimer.reset();
        }
    
    politics_response.stop();
    // the Routine "politics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var politics_scaleMaxDurationReached;
var _political_scale_response_allKeys;
var politics_scaleMaxDuration;
var politics_scaleComponents;
function politics_scaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'politics_scale' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    politics_scaleClock.reset();
    routineTimer.reset();
    politics_scaleMaxDurationReached = false;
    // update component parameters for each repeat
    political_scale_response.keys = undefined;
    political_scale_response.rt = undefined;
    _political_scale_response_allKeys = [];
    psychoJS.experiment.addData('politics_scale.started', globalClock.getTime());
    politics_scaleMaxDuration = null
    // keep track of which components have finished
    politics_scaleComponents = [];
    politics_scaleComponents.push(political_scale_question);
    politics_scaleComponents.push(political_scale_response);
    politics_scaleComponents.push(one);
    politics_scaleComponents.push(two);
    politics_scaleComponents.push(three);
    politics_scaleComponents.push(four);
    politics_scaleComponents.push(five);
    politics_scaleComponents.push(six);
    politics_scaleComponents.push(seven);
    politics_scaleComponents.push(liberal);
    politics_scaleComponents.push(conservative);
    politics_scaleComponents.push(moderate);
    
    for (const thisComponent of politics_scaleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function politics_scaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'politics_scale' ---
    // get current time
    t = politics_scaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *political_scale_question* updates
    if (frameN >= 0.0 && political_scale_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      political_scale_question.tStart = t;  // (not accounting for frame time here)
      political_scale_question.frameNStart = frameN;  // exact frame index
      
      political_scale_question.setAutoDraw(true);
    }
    
    
    // *political_scale_response* updates
    if (frameN >= 0.0 && political_scale_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      political_scale_response.tStart = t;  // (not accounting for frame time here)
      political_scale_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { political_scale_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { political_scale_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { political_scale_response.clearEvents(); });
    }
    
    if (political_scale_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = political_scale_response.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7'], waitRelease: false});
      _political_scale_response_allKeys = _political_scale_response_allKeys.concat(theseKeys);
      if (_political_scale_response_allKeys.length > 0) {
        political_scale_response.keys = _political_scale_response_allKeys[_political_scale_response_allKeys.length - 1].name;  // just the last key pressed
        political_scale_response.rt = _political_scale_response_allKeys[_political_scale_response_allKeys.length - 1].rt;
        political_scale_response.duration = _political_scale_response_allKeys[_political_scale_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *one* updates
    if (frameN >= 0.0 && one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one.tStart = t;  // (not accounting for frame time here)
      one.frameNStart = frameN;  // exact frame index
      
      one.setAutoDraw(true);
    }
    
    
    // *two* updates
    if (frameN >= 0.0 && two.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      two.tStart = t;  // (not accounting for frame time here)
      two.frameNStart = frameN;  // exact frame index
      
      two.setAutoDraw(true);
    }
    
    
    // *three* updates
    if (frameN >= 0.0 && three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three.tStart = t;  // (not accounting for frame time here)
      three.frameNStart = frameN;  // exact frame index
      
      three.setAutoDraw(true);
    }
    
    
    // *four* updates
    if (frameN >= 0.0 && four.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      four.tStart = t;  // (not accounting for frame time here)
      four.frameNStart = frameN;  // exact frame index
      
      four.setAutoDraw(true);
    }
    
    
    // *five* updates
    if (frameN >= 0.0 && five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      five.tStart = t;  // (not accounting for frame time here)
      five.frameNStart = frameN;  // exact frame index
      
      five.setAutoDraw(true);
    }
    
    
    // *six* updates
    if (frameN >= 0.0 && six.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      six.tStart = t;  // (not accounting for frame time here)
      six.frameNStart = frameN;  // exact frame index
      
      six.setAutoDraw(true);
    }
    
    
    // *seven* updates
    if (frameN >= 0.0 && seven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seven.tStart = t;  // (not accounting for frame time here)
      seven.frameNStart = frameN;  // exact frame index
      
      seven.setAutoDraw(true);
    }
    
    
    // *liberal* updates
    if (frameN >= 0.0 && liberal.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      liberal.tStart = t;  // (not accounting for frame time here)
      liberal.frameNStart = frameN;  // exact frame index
      
      liberal.setAutoDraw(true);
    }
    
    
    // *conservative* updates
    if (frameN >= 0.0 && conservative.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conservative.tStart = t;  // (not accounting for frame time here)
      conservative.frameNStart = frameN;  // exact frame index
      
      conservative.setAutoDraw(true);
    }
    
    
    // *moderate* updates
    if (frameN >= 0.0 && moderate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moderate.tStart = t;  // (not accounting for frame time here)
      moderate.frameNStart = frameN;  // exact frame index
      
      moderate.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of politics_scaleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function politics_scaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'politics_scale' ---
    for (const thisComponent of politics_scaleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('politics_scale.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(political_scale_response.corr, level);
    }
    psychoJS.experiment.addData('political_scale_response.keys', political_scale_response.keys);
    if (typeof political_scale_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('political_scale_response.rt', political_scale_response.rt);
        psychoJS.experiment.addData('political_scale_response.duration', political_scale_response.duration);
        routineTimer.reset();
        }
    
    political_scale_response.stop();
    // the Routine "politics_scale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thanksClock.reset();
    routineTimer.reset();
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (frameN >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    if (thanks_text.status === PsychoJS.Status.STARTED && frameN >= 600) {
      thanks_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

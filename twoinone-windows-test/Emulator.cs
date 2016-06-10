﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace xwalk
{
    class Emulator
    {
        public delegate void KeyboardResponse(bool haveKeyboard);
        public KeyboardResponse KeyboardMonitorDelegate;

        public delegate void TabletResponse(bool inTabletMode);
        public TabletResponse TabletMonitorDelegate;

        public bool HaveKeyboard
        {
            set
            {
                KeyboardMonitorDelegate(value);
            }
        }

        public bool IsTablet
        {
            set
            {
                TabletMonitorDelegate(value);
            }
        }
    }
}

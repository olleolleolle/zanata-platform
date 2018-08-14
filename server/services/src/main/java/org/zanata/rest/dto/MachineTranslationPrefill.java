/*
 * Copyright 2018, Red Hat, Inc. and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.zanata.rest.dto;

import org.zanata.common.ContentState;
import org.zanata.common.LocaleId;

/**
 * @author Patrick Huang
 * <a href="mailto:pahuang@redhat.com">pahuang@redhat.com</a>
 */
public class MachineTranslationPrefill {
    private final LocaleId toLocale;
    private final ContentState saveState;
    private final boolean overwriteFuzzy;

    public MachineTranslationPrefill(LocaleId toLocale,
            ContentState saveState, boolean overwriteFuzzy) {
        this.toLocale = toLocale;
        this.saveState = saveState;
        this.overwriteFuzzy = overwriteFuzzy;
    }

    @SuppressWarnings("unused")
    MachineTranslationPrefill() {
        this(null, null, false);
    }

    public LocaleId getToLocale() {
        return toLocale;
    }

    public ContentState getSaveState() {
        return saveState;
    }

    public boolean getOverwriteFuzzy() {
        return overwriteFuzzy;
    }
}